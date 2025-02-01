/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import {
    CypressTaskConfig, EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils
} from "../../configs";
import {
    ApplicationAPIPayloadConstants,
    ApplicationEditPageConstants,
    AsgardeoEndPointsConstants,
    CypressKeywords, 
    SAMLKeywords
} from "../../constants";
import { RequestContentTypes } from "../../models";
import {
    ApplicationCreatePage,
    ApplicationEditPage,
    ApplicationsMainPage, AsgardeoSampleAppLoginPage,
    ConsoleGettingStarted, SampleApplicationPage
} from "../../page-objects";
import { HostControls } from "../../support/utils/host-controls";

const sampleAppRedirectUrlOrigin = TestE2EConfigUtils.javaSampleAppDefaultOriginUrl,
    javaSampleAppAccessUrl = TestE2EConfig.samlJavaSampleAppAccessUrl,
    tomcatServerPort = TestE2EConfigUtils.tomcatServerPort,
    tomcatServerShutDownPort = TestE2EConfigUtils.tomcatServerShutDownPort,
    loginToTheApplication = " login to the sample application";

let testId: string, samlWebAppPayload: Cypress.ObjectLike, userCreationPayload: Cypress.ObjectLike;

/**
 * This test specification validates whether the user has successfully signed in to the SAML sample application
 * configured with a traditional web application.
 */
describe("01.06 - Sign-in to Configured SAML Sample Application with SAML response signing", () => {

    beforeEach(() => {

        // Tenant admin sign in to the console.
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        // Kill tomcat server and shutdown ports.
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerPort);
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerShutDownPort);

        // Return the current specification id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {

            testId = $testID;
        });

        /**
         * Pre-requisite - Test SAML web application creation.
         * Receive SAML web app creation input data through fixtures.
         */
        cy.fixture(TestE2EConfig.getAppConfig().testDataTraditionalSAMLApp).then(($samlWebAppPayload) => {

            // Store content of the fixture in a global variable.
            samlWebAppPayload = $samlWebAppPayload;
            // Update application name with testId.
            samlWebAppPayload.generalConfigs.appName = samlWebAppPayload.generalConfigs.appName + "_" + testId;

            // Delete if the application already exists in the app list.
            cy.deleteApplicationViaAPI(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + samlWebAppPayload.generalConfigs.appName
            );
        });

        // If the extracted directory does not exist, extract zipped sample application.
        cy.extractSampleAppDirectoryIfNotExist();

        /**
         * Pre-requisite - Test user creation.
         * Receive user creation input data through fixtures.
         */
        cy.fixture(TestE2EConfig.scimUserCreationPayload).then(($userPayload) => {

            // Store content of the fixture in a global variable.
            userCreationPayload = $userPayload;

            userCreationPayload.userName = ProductConfig.userStore + "/" +
                EnvironmentConfig.getUserCredentials().userName;
            userCreationPayload.password = EnvironmentConfig.getUserCredentials().password;
            userCreationPayload.emails[0].value = EnvironmentConfig.getUserCredentials().userName;

            // Create user via SCIM API.
            cy.createSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                , EnvironmentConfig.getTenantAdminCredentials(), userCreationPayload);
        });

    });

    it("01.06.01 - Verify the tenant admin can create a SAML Based Traditional" +
        " Web Application with Manual Configuration", () => {

            cy.log("Create SAML web application via UI");
            cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) +
                ProductConfig.getAppConsoleConfig().routes.default);
            cy.createApplicationViaUI(samlWebAppPayload);
            cy.validateApplicationExistence(samlWebAppPayload.generalConfigs.appName);
            // PATCH the sample application to disable skip login consent.
            cy.skipLoginConsentForApplication(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), samlWebAppPayload.generalConfigs.appName,
            TestE2EConfigUtils.getSkipLoginConsentPayload(false));
        });

    qase(469,
        it("01.06.02 - Verify admin can enable SAML response in the created application ", () => {

            cy.visit(EnvironmentConfig.getConsoleAccessURL()
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                + ProductConfig.getAppConsoleConfig().routes.default);

            ConsoleGettingStarted.getApplicationLink().click();
            ApplicationsMainPage.getInputSearchByApplicationName().type(samlWebAppPayload.generalConfigs.appName)
                .trigger(CypressKeywords.TRIGGER_KEYDOWN, CypressKeywords.TRIGGER_KEY_ENTER);

            ApplicationsMainPage.getBtnRowOfApplicationsTable(samlWebAppPayload.generalConfigs.appName)
                .within(() => {
                    ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
                });
            cy.configureUserAttributesForSAMLApplication();

            cy.navigateBetweenTabs(
                2,
                ApplicationEditPageConstants.PROTOCOL_TAB,
                ApplicationEditPage.NAVIGATION_TABS
              );

              //enable SIGN SAML RESPONSE
              ApplicationCreatePage.getResponseSigningCheckBox().click();

              // click update
              ApplicationCreatePage.getSAMLSubmitProtocolBtn().click();
        })
    );

    it("01.06.03 - Verify whether the SAML sample app authentication configs can be replaced  " +
        "and successfully startup the tomcat server", () => {

            cy.replaceJavaSAMLSampleAppAuthConfigs(TestE2EConfig.javaSampleAppTomcatLocation,
                TestE2EConfig.javaSAMLSampleAppConfigFileLocation,
                samlWebAppPayload.generalConfigs.appName);

            //starting the tomcat server
            cy.task(CypressTaskConfig.taskStartUpTomcatServer, TestE2EConfig.tomcatServerLocation);
            cy.task(CypressTaskConfig.taskWaitForPort, tomcatServerPort);
            cy.task(CypressTaskConfig.taskWaitForPort, tomcatServerShutDownPort);
            HostControls.waitForUrl(TestE2EConfigUtils.javaSampleAppDefaultOriginUrl +
                TestE2EConfig.samlJavaSampleAppAccessUrl);
        });

        qase(471,
            it("01.06.04 - Verify whether the user is able to try out the saml sample application successfully.",
                () => {
    
                    cy.session(EnvironmentConfig.getUserCredentials().userName, () => {
    
                        cy.log("User access SAML sample application.");
                        cy.origin(sampleAppRedirectUrlOrigin, { args: { javaSampleAppAccessUrl } },
                            ({ javaSampleAppAccessUrl }) => {
    
                                cy.visit(javaSampleAppAccessUrl, { failOnStatusCode: false });
    
                                Cypress.on("uncaught:exception", (err, runnable) => {
    
                                    Cypress.log({ message: "Cypress detected uncaught exception" + err });
                                    return false;
                                });
                            });
    
                        cy.intercept("POST", samlWebAppPayload.generalConfigs.redirectUri).as("getSAMLPostRequest");
    
                        SampleApplicationPage.getSampleLoginButton().click();
                        cy.log("User: " + EnvironmentConfig.getUserCredentials().userName +
                            loginToTheApplication);
                        cy.provideSampleAppLocalCredentials(EnvironmentConfig.getUserCredentials());
    
                        cy.wait(1000); // 1s Until consent aproval page load propely.
                        cy.url().then(($url) => {
                            if ($url.includes(AsgardeoEndPointsConstants.SAML_CONSENT_APPROVAL_ENDPOINT)) {
                                cy.log("User accepts consent");
                                AsgardeoSampleAppLoginPage.getSAMLSampleConsentAllowButton().as("consentAllowButton");
                                cy.checkAndVerifyConsentAttributeList("@consentAllowButton");
                            }
                            cy.authenticateWithReCaptcha();
                        });
                        cy.wait("@getSAMLPostRequest").then(({ request }) => {
    
                            const parser = new DOMParser();
    
                            //interception.request.body.should("include", "SAMLResponse");
                            cy.log(request.body);
                            expect(request.body).to.include("SAMLResponse");
    
                            const samlResponse = request.body.replace("SAMLResponse=", "");
    
                            const decodedURL = decodeURIComponent(samlResponse);
    
                            const decodedResponse = Buffer.from(decodedURL, SAMLKeywords.SAML_ENCODE_BASE64);
    
                            cy.log("Updated decoded SAML response :" + decodedResponse.toString());
    
                            const samlResponseDom = parser.parseFromString(decodedResponse.toString(),
                                RequestContentTypes.XML);
    
                            cy.log("Parsed SAML Response :" + samlResponseDom);
    
                            validateAssertionConsumerURL(samlResponseDom, samlWebAppPayload.generalConfigs.redirectUri);
                            validateIssuer(samlResponseDom, samlWebAppPayload.generalConfigs.issuer);
                            validateBusinessUserEmail(samlResponseDom, EnvironmentConfig.getUserCredentials().userName);
                            validateBusinessUserGivenName(samlResponseDom, userCreationPayload.name.givenName);
                        });
                    });
                })
        );

    after(() => {

        // Delete application.
        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + samlWebAppPayload.generalConfigs.appName;
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        //Delete the custom user created
        cy.deleteSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
            , EnvironmentConfig.getTenantAdminCredentials(),
            false, userCreationPayload.userName);
        //Replace Assertion Consumer URL with home.jsp
        cy.readFile(TestE2EConfig.javaSampleAppTomcatLocation +
            TestE2EConfig.javaSAMLSampleAppConfigFileLocation).then(configuration => {

                const updatedConfig = (configuration + "")
                    .replace("SAML2.AssertionConsumerURL=" + samlWebAppPayload.generalConfigs.redirectUri2,
                        "SAML2.AssertionConsumerURL=" + samlWebAppPayload.generalConfigs.redirectUri);

                cy.log(("Updated sample property " + updatedConfig));

                cy.writeFile(TestE2EConfig.javaSampleAppTomcatLocation +
                    TestE2EConfig.javaSAMLSampleAppConfigFileLocation, updatedConfig);
            });

        // Stop Tomcat server.
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerPort);
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerShutDownPort);

        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });

    /**
     * It takes the assertionConsumerServiceUrl as a parameter, makes a POST request to the
     * assertionConsumerServiceUrl, parses the response, decodes the response, parses the decoded
     * response, and finally validates the assertionConsumerUrl in the decoded response
     * @param {string} assertionConsumerServiceUrl - The URL of the ACS endpoint of the service
     * provider.
     */
    function validateAssertionConsumerURL(samlResponseDom, assertionConsumerServiceUrl) {
        const assertionConsumerUrl = samlResponseDom.getElementsByTagName(SAMLKeywords.SAML_RESPONSE)[0]
            .getAttribute(SAMLKeywords.SAML_RESPONSE_DESTINATION);
        expect(assertionConsumerUrl).be.equal(assertionConsumerServiceUrl);
    }

    /**
     * It takes the issuer as a parameter, makes a POST request to the
     * issuer, parses the response, decodes the response, parses the decoded
     * response, and finally validates the issuer in the decoded response
     * @param {string} issuer - The Issuer of the service
     * provider.
     */
    function validateIssuer(samlResponseDom, issuer) {
        cy.log("Parsed SAML Response :" + samlResponseDom[0]);
        const actualIssuer = samlResponseDom.getElementsByTagName(SAMLKeywords.SAML_AUDIENCE)[0].innerHTML;
        expect(actualIssuer).be.include(issuer);
    }

    /**
     * It takes the emailAddress as a parameter, makes a POST request to the
     * emailAddress, parses the response, decodes the response, parses the decoded
     * response, and finally validates the emailAddress in the decoded response
     * @param {string} emailAddress - The emailAddress of the business user
     * provider.
     */
    function validateBusinessUserEmail(samlResponseDom, emailAddress) {
        cy.log("Parsed SAML Response :" + samlResponseDom[0]);
        const actualEmailAddress = samlResponseDom.getElementsByTagName(SAMLKeywords.SAML_NAME_ID)[0].innerHTML;
        expect(actualEmailAddress).be.include(emailAddress);
    }

    /**
     * It takes the firstName as a parameter, makes a POST request to the
     * firstName, parses the response, decodes the response, parses the decoded
     * response, and finally validates the firstName in the decoded response
     * @param {string} firstName - The firstName of the business user
     * provider.
     */
    function validateBusinessUserGivenName(samlResponseDom, firstName) {
        cy.log("Parsed SAML Response :" + samlResponseDom[0]);
        const samlAttribute = samlResponseDom.querySelector(SAMLKeywords.SAML_GIVEN_NAME_ATTRIBUTE).innerHTML;
        expect(samlAttribute).be.include(firstName);
    }

});
