/// <reference types="cypress" />

import { EnvironmentConfig } from "@wso2iam/test-cypress-core/configs/environment-config";
import { BasicAuthCredentials } from "../../models";
import { APIKeywords, ApplicationAPIPayloadConstants, AsgardeoEndPointsConstants, HTMLKeyWordsConstants, StatusCodeConstants } from "@wso2iam/test-ts-core/constants";
import { LoginPage } from "@wso2iam/test-cypress-core/page-objects/console/login/login-page";
import { CypressKeywords } from "@wso2iam/test-cypress-core/constants/cypress-keywords";
import { ProductConfig } from "@wso2iam/test-ts-core/configs/product-config";
import { RequestContentTypes, RequestMethodTypes } from "@wso2iam/test-ts-core/models/console/request-method";
import { ApplicationEditPage } from "@wso2iam/test-cypress-core/page-objects/console/develop/applications/application-edit";

const constantApprovalType = "Approvealways";

Cypress.Commands.add("signInToConsole", (
  credentials: BasicAuthCredentials,
  tenantEndpoint?: string,
  isTenantQualified?: boolean,
  shouldSkipConsoleLanding?: boolean,
  options: any = { cacheSession: true }
) => {
  
  let url = EnvironmentConfig.getConsoleAccessURL();

  if (isTenantQualified) {
    url = EnvironmentConfig.getConsoleAccessURL() + tenantEndpoint;
  }


    const login = () => {
        cy.visit(url);
        cy.provideConsoleLocalCredentials(credentials.userName, credentials.password, shouldSkipConsoleLanding);
        
    };
    if (options.cacheSession) {
        cy.session(credentials.userName, login);
    } else {
        login();
    }
})

/**
 * This method is used to SignIn to the Asgardeo Console via Local credentials.
 * @param  {string} username - authorized user username.
 * @param {string} password - authorized user password.
 * @param {boolean} viaMfa - validate whether MFA option available or not.
 */
Cypress.Commands.add("provideConsoleLocalCredentials", (userName: string, password: string,
  viaMfa: boolean = false) => {

  cy.url().then(($url) => {
      if ($url.includes(AsgardeoEndPointsConstants.OAuth2_CONSENT_APPROVAL_ENDPOINT || 
          AsgardeoEndPointsConstants.SAML_CONSENT_APPROVAL_ENDPOINT )) {
          cy.approveConsent(constantApprovalType);
      }
  });

  cy.url().should("contain", AsgardeoEndPointsConstants.LOGIN_ENDPOINT);

  LoginPage.getUsernameInputField().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).type(userName);
  LoginPage.getPasswordInputField().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).type(password, { log: false });
  LoginPage.getLoginBtn().click();
  
  if (viaMfa == false) {
    cy.url().should("contain",ProductConfig.getAppConsoleConfig(EnvironmentConfig.getConsoleAppBasePath()).routes.default, 5000);
  }
});


/**
 * Approve consent from consent page
 * @param  {} "approveConsent"
 * @param  {} (type
 */
Cypress.Commands.add("approveConsent", (type: string) => {
  if (type == "aproveAlways") {
      LoginPage.getApproveAlwaysCheckBox().click();
  }
  if (type == "approveOnce") {
      LoginPage.getApproveCheckBox().click();
  }
  LoginPage.getApproveBtn().click({ force: true });
});

Cypress.Commands.add('getCurrentTestCaseId', () => {
  return cy.wrap(Cypress.currentTest.title.substring(0, 5));
})

Cypress.Commands.add('deleteApplicationViaAPI', (tenantPath: string, credentials: BasicAuthCredentials, filterExpression: any) => {
  const serverOrigin = EnvironmentConfig.getServerOrigin();
    // failOnStatusCode: then test fails on other status codes.
    const failOnStatusCode = true;

    cy.filterApplication(tenantPath, credentials, filterExpression).then(response => {

        // Validate the response object
        expect(response.status).to.eq(StatusCodeConstants.OK);

        // Assert that the response body contains the "applications" property
        expect(response.body).to.have.property(ApplicationAPIPayloadConstants.APPLICATION_PAYLOAD_PROPERTY);

        // If there are no applications found, log an appropriate message
        if (response.body.totalResults === 0 || response.body.applications.length === 0) {

            cy.log("No applications found matching the filter: " + filterExpression);

        } else {
        
            cy.log("The application found matching the filter: " + filterExpression);
            const applicationName = filterExpression.split("+").pop();

            // Find the application matching or containing the given name
            const appFound = response.body.applications.find(app => app.name.includes(applicationName));

            // Check if the application was found
            if (appFound) {

                const appUrl: string = serverOrigin.substring(0, serverOrigin.length - 1)
                    + response.body.applications[0].self;
                cy.getAccessToken(
                    credentials, tenantPath).then(response => {
                        const token = response.body.access_token;
                        return cy.request({
                            "failOnStatusCode": failOnStatusCode,
                            "headers": {
                                "Authorization": APIKeywords.BEARER_AUTHORIZATION + token,
                                "accept": RequestContentTypes.JSON
                            },
                            "method": RequestMethodTypes.DELETE,
                            "url": appUrl
                        }).then(response => {
                            expect(response.status).to.eq(StatusCodeConstants.NO_CONTENT);
                            cy.log("Successfully deleted the application " + applicationName);
                        });
                    });
            }
        }
    });
})

Cypress.Commands.add('filterApplication', (tenantPath: string, credentials: BasicAuthCredentials, filterExpression: any) => {
  
  cy.getAccessToken(credentials, tenantPath)
    .then(response => {
        const token = response.body.access_token;

        return cy.request({
            "failOnStatusCode": true,
            "headers": {
                "Authorization": APIKeywords.BEARER_AUTHORIZATION + token,
                "Content-Type": RequestContentTypes.JSON
            },
            "method": RequestMethodTypes.GET,
            "url": EnvironmentConfig.getServerOrigin() +
                tenantPath + AsgardeoEndPointsConstants.APPLICATION_SERVLET_ENDPOINT + "?" + filterExpression
        });
    });

})

Cypress.Commands.add('getAccessToken', (credentials: BasicAuthCredentials, tenantPath: string) => {
    const serverOrigin = EnvironmentConfig.getServerOrigin();

    cy.log("Obtaining access token via API endpoint");
    
    return cy.request({
        body: {
          "client_id": EnvironmentConfig.getClientId(),
          "grant_type": ProductConfig.getGrantType().clientCredentialsGrantType,
          "client_secret": EnvironmentConfig.getClientSecret(),
          "password": credentials.password,
          "scope": APIKeywords.SCOPE,
          "username": credentials.userName,
          "t": tenantPath
        },
        headers: {
          "Content-Type": RequestContentTypes.URLENCODED
        },
        method: RequestMethodTypes.POST,
        url: serverOrigin+ AsgardeoEndPointsConstants.OAUTH_ACCESS_ENDPOINT
    });
})

Cypress.Commands.add('createApplicationViaAPI', (tenantPath: string, credentials: BasicAuthCredentials, requestPayload: any) => {
  // failOnStatusCode: Whether to fail on response codes other than 2xx and 3xx.
  const failOnStatusCode = true;

  const applicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + requestPayload.name;
  cy.filterApplication(tenantPath, credentials, applicationName).then(response => {

      expect(response.status).to.eq(StatusCodeConstants.OK);
          if (response.body.applications && response.body.applications[0]) {

               cy.log("Created application exists in the system");
          }
          else {
              cy.log("No app found in the system. We are going to create a new application");
              cy.getAccessToken(credentials,tenantPath).then(response => {
                  const token = response.body.access_token;
                  
                  return cy.request({
                      "body": requestPayload,
                      "failOnStatusCode": failOnStatusCode,
                      "headers": {
                          "Authorization": APIKeywords.BEARER_AUTHORIZATION + token,
                          "accept": "*/*"
                      },
                      "method": RequestMethodTypes.POST,
                      "url": EnvironmentConfig.getServerOrigin() + tenantPath
                          + AsgardeoEndPointsConstants.APPLICATION_SERVLET_ENDPOINT
                  });
              });
          }
  });
})

Cypress.Commands.add('validateApplicationExistence', (appName: string) => {
  
})

Cypress.Commands.add('navigateBetweenTabs', (destinationTab: string) => {
  
  cy.get(ApplicationEditPage.NAVIGATION_TABS).within(() => {

    cy.get(HTMLKeyWordsConstants.HTML_ANCHOR_TAG).each(($el, index) => {
        cy.wrap($el).invoke(CypressKeywords.INVOKE_TEXT).then((text) => {

            if (text == destinationTab) {
                cy.wrap($el).should(CypressKeywords.ASSERTION_TO_CONTAIN, destinationTab).click();
            }
        });
    });
});
})

Cypress.Commands.add('getBrandingPreference', (tenantPath: string, credentials: BasicAuthCredentials) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200
    })
  })
})

Cypress.Commands.add('deleteBrandingPreference', (tenantPath: string, credentials: BasicAuthCredentials) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 204
    })
  })
})



