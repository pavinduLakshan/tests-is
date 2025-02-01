/*
 *   Copyright (c) 2024 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import jwt_decode from "jwt-decode";
import {
    EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils
} from "../../configs";
import {
    ApplicationAPIPayloadConstants, ApplicationEditPageConstants,
    CypressKeywords, HTMLKeyWordsConstants, OidcConstants, StatusCodeConstants
} from "../../constants";
import { RequestContentTypes, RequestMethodTypes } from "../../models/console/request-method";
import {
    ApplicationEditPage,
    ApplicationEditUserAttributes,
    ApplicationProtocolEditPage,
    ApplicationsMainPage, AsgardeoSampleAppLoginPage,
    ConsoleGettingStarted
} from "../../page-objects";
const code_grant = "authorization_code",
    implicit_grant = "implicit";
const mandatoryClaimUri = "http://wso2.org/claims/username";
let oidcStandardBasedAppPayload: Cypress.ObjectLike, userCreationPayload: Cypress.ObjectLike;
let idToken: string, errorDescription: string;
const sectorIdentifierUri = "https://mysectoridentifieruri.com";
const applicationTestInputData = TestE2EConfig.getAppConfig().testDataOIDCStandardBasedApp;
let accessToken: string, applicationName: string, testId: string;
const redirectUrl = EnvironmentConfig.getProductLanding() + "sample";

/**
 * This test specification validates the client authentication, request object, pushed authorization, and subject 
 * type related configurations for OIDC traditional application
 */

describe("01.11 - Protocol configuration update for OIDC traditional application", () => {

    beforeEach(() => {

        // Tenant admin sign in to the console.
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        // Return the current specification id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {

            testId = $testID;
        });

        /**
         * Pre-requisite - Test OIDC standard based application creation.
         * Receive OIDC standard based app creation input data through fixtures.
         */
        cy.fixture(applicationTestInputData).then(($oidcAppPayload) => {

            // Store content of the fixture in a global variable.
            oidcStandardBasedAppPayload = $oidcAppPayload;
            // Update application name with testId.
            oidcStandardBasedAppPayload.name = oidcStandardBasedAppPayload.name + "_" + testId;
            applicationName = oidcStandardBasedAppPayload.name;
            // Enable implicit grant type
            oidcStandardBasedAppPayload.inboundProtocolConfiguration.oidc.grantTypes = [code_grant, implicit_grant];
            // callback url
            oidcStandardBasedAppPayload.inboundProtocolConfiguration.oidc.callbackURLs = [redirectUrl];
            cy.createApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), oidcStandardBasedAppPayload);
            cy.validateApplicationExistence(oidcStandardBasedAppPayload.name);

            //Set username as mandatory for the application
            cy.getResidentApplicationFromSystem(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_CO + oidcStandardBasedAppPayload.name,
                true)
                .then((response: Cypress.ObjectLike) => {

                    cy.setAttributeAsMandatory(
                        EnvironmentConfig.getTenantAdminCredentials(),
                        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                        response.body.applications[0].id,
                        mandatoryClaimUri
                    );
                });
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
            cy.createSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), userCreationPayload);
        });
    });

    qase(1198,
        it("01.11.01 - Verify tenant admin is able to enable PAR mandatory.",
            () => {
                // Navigate to protocols tab and configure
                cy.navigateToOIDCProtocolConfigPage(oidcStandardBasedAppPayload.name);

                // Enable PAR mandatory.
                ApplicationProtocolEditPage.getChkPARMandatory()
                    .scrollIntoView()
                    .should(CypressKeywords.ASSERTION_TO_EXIST)
                    .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                    .and(CypressKeywords.ASSERTION_NOT_BE_DISABLED)
                    .click();

                // Verify the PAR mandatory checkbox is enabled.
                ApplicationProtocolEditPage.getChkPARMandatory().scrollIntoView()
                    .should(CypressKeywords.ASSERTION_HAVE_CLASS, CypressKeywords.CHECKED);
                cy.log("Enabled PAR mandatory successfully");

                ApplicationProtocolEditPage.getBtnStdAppUpdateProtocolSettings().click();

                cy.confirmSuccessMessageDisplay();
            })
    );

    qase(1199,
        it("01.11.02 - Verify pushed authorization request is mandated.",
            () => {

                //Get application client id.
                cy.getApplicationClientIdClientSecret(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), oidcStandardBasedAppPayload.name).then(app => {
                        const appClientId = app.clientId;
                        const appClientSecret = app.clientSecret;
                        cy.log("Application client_id: " + appClientId);

                        // Try authorization request without PAR
                        cy.log("Try to authorize without PAR");
                        const requestToAuthorize = EnvironmentConfig.getServerOrigin()
                            + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                            + ProductConfig.authorizeEndPoint + "?"
                            + OidcConstants.REQUEST_HEADER_CODE_RESPONSE_TYPE + "&"
                            + OidcConstants.REQUEST_HEADER_CLIENT_ID + appClientId + "&"
                            + OidcConstants.REQUEST_HEADER_REDIRECT_URI
                            + redirectUrl + "&" + OidcConstants.REQUEST_HEADER_NONCE + "&"
                            + OidcConstants.REQUEST_HEADER_SCOPE_OPENID_PROFILE;

                        cy.log("Request to get authorize code : " + requestToAuthorize);

                        cy.session(EnvironmentConfig.getUserCredentials().userName, () => {
                            cy.visit(requestToAuthorize, { failOnStatusCode: false, timeout: 120000 });
                        
                        cy.url().then((response) => {

                            cy.url().should(CypressKeywords.ASSERTION_TO_CONTAIN, OidcConstants.ERROR)
                                .and(CypressKeywords.ASSERTION_TO_CONTAIN, OidcConstants.ERROR_DESCRIPTION);

                            //Retrive error description from url
                            errorDescription = response.split(OidcConstants.ERROR_DESCRIPTION)[1].split("&")[0]
                                .split("=")[1].trim();
                            cy.log(errorDescription);
                            expect(errorDescription).to.eq("PAR+request+is+mandatory+for+the+application.");
                        });

                        // Try authorization request with PAR
                        cy.log("Try to authorize with PAR");
                        cy.request({
                            "auth": {
                                "password": appClientSecret,
                                "username": appClientId
                            },
                            "body": {
                                "client_id": appClientId,
                                "redirect_uri": decodeURIComponent(redirectUrl),
                                "response_type": OidcConstants.REQUEST_BODY_CODE_RESPONSE_TYPE_VALUE
                            },
                            "headers": {
                                "Content-Type": RequestContentTypes.URLENCODED
                            },
                            "method": RequestMethodTypes.POST,
                            "url": EnvironmentConfig.getServerOrigin()
                                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                                + ProductConfig.pushedAuthorizeEndPoint
                        }).then((response) => {
                            expect(response.status).to.eq(StatusCodeConstants.CREATED);
                            expect(response.body).to.have.property(OidcConstants.EXPIRES_IN);
                            expect(response.body).to.have.property(OidcConstants.REQUEST_URI);
                        });
                    });
                });
            })
    );

    qase(1200,
        it("01.11.03 - Verify client authentication methods are disabled for public clients.",
            () => {
                // Navigate to protocols tab and configure
                cy.navigateToOIDCProtocolConfigPage(oidcStandardBasedAppPayload.name);

                // Enable public client
                ApplicationProtocolEditPage.getChkPublicClient().click();

                // Verify the client authentication dropdown is disabled
                ApplicationProtocolEditPage.getClientAuthMethodDropDownOption()
                    .should(CypressKeywords.ASSERTION_HAVE_CLASS, CypressKeywords.DISABLED);

            })
    );

    qase(1201,
        it("01.11.04 - Verify application owner can enable private key jwt client authentication.",
            () => {
                // Navigate to protocols tab and configure
                cy.navigateToOIDCProtocolConfigPage(oidcStandardBasedAppPayload.name);

                // Select private key jwt client authentication from the dropdown
                ApplicationProtocolEditPage.getClientAuthMethodDropDownOption().click();
                cy.get(ApplicationProtocolEditPage.MENU_DIV)
                    .contains(OidcConstants.CLIENT_AUTHENTICATION_METHOD_PVT_KEY_JWT).click();

                // Verify the Private Key JWT Reuse is visible.
                ApplicationProtocolEditPage.getChkPvtKeyJWTReuseEnabled()
                    .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);

                // Select signing algorithm
                ApplicationProtocolEditPage.getClientAuthSigningAlgorithmDropDownOption().click();
                cy.get(ApplicationProtocolEditPage.MENU_DIV).contains(OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA)
                    .click();

                ApplicationProtocolEditPage.getBtnStdAppUpdateProtocolSettings().click();
                cy.confirmSuccessMessageDisplay();

                cy.reload();

                // Assign an alias to the selected client authentication method
                ApplicationProtocolEditPage.getClientAuthMethodDropDownOption()
                    .find(ApplicationProtocolEditPage.SELECTED_CLASS)
                    .as("selectedClientAuthMethod");

                // Assign an alias to the selected client authentication signing algorithm
                ApplicationProtocolEditPage.getClientAuthSigningAlgorithmDropDownOption()
                    .find(ApplicationProtocolEditPage.SELECTED_CLASS)
                    .as("selectedClientAuthSigningAlgorithm");

                // Verify the selected client authentication method
                cy.get("@selectedClientAuthMethod")
                    .then(($selectedOption) => {
                        expect($selectedOption.text())
                        .to.contain(OidcConstants.CLIENT_AUTHENTICATION_METHOD_PVT_KEY_JWT);
                    });

                // Verify the selected client authentication signing algorithm
                cy.get("@selectedClientAuthSigningAlgorithm")
                    .then(($selectedOption) => {
                        expect($selectedOption.text()).to.contain(OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA);
                    });
            })
    );

    qase(1202,
        it("01.11.05 - Verify client auth subject DN input field is visible for Mutual TLS client authentication.",
            () => {
                // Navigate to protocols tab and configure
                cy.navigateToOIDCProtocolConfigPage(oidcStandardBasedAppPayload.name);

                // Select MTLS client authentication from the dropdown
                ApplicationProtocolEditPage.getClientAuthMethodDropDownOption().click();
                cy.get(ApplicationProtocolEditPage.MENU_DIV)
                    .contains(OidcConstants.CLIENT_AUTHENTICATION_METHOD_MTLS).click();

                // Verify the client authentication subject DN field is visible
                ApplicationProtocolEditPage.getClientAuthSubjectDNInput()
                    .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
            })
    );

    qase(1203,
        it("01.11.06 - Verify application owner can set id token response signing algorithm.",
            () => {
                // Navigate to protocols tab and configure
                cy.navigateToOIDCProtocolConfigPage(oidcStandardBasedAppPayload.name);

                // Select id token response signing algorithm
                ApplicationProtocolEditPage.getIdtokenResponseSigningAlgorithmDropDownOption()
                    .scrollIntoView().click().find(".item")
                    .contains(OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA).click();

                ApplicationProtocolEditPage.getBtnStdAppUpdateProtocolSettings().click();
                cy.confirmSuccessMessageDisplay();

                cy.reload();
                // Verify the selected id token response signing algorithm
                ApplicationProtocolEditPage.getIdtokenResponseSigningAlgorithmDropDownOption().scrollIntoView().click()
                    .find(ApplicationProtocolEditPage.SELECTED_CLASS)
                    .as("selectedIdTokenResponseSigningAlgorithm");

                cy.get("@selectedIdTokenResponseSigningAlgorithm")
                    .then(($selectedOption) => {
                        expect($selectedOption.text()).to.contain(OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA);
                        expect($selectedOption.text())
                            .to.contain(OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA);
                    });
            }
        ));

    qase(1204,
        it("01.11.07 - Verify id token response signing algorithm.",
            () => {

                //Get application client id
                cy.getApplicationClientIdClientSecret(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), oidcStandardBasedAppPayload.name).then(app => {
                        const appClientId = app.clientId;
                        // Navigate to protocols tab and configure
                        cy.navigateToOIDCProtocolConfigPage(oidcStandardBasedAppPayload.name);
                        // Disable PAR mandatory.
                        ApplicationProtocolEditPage.getChkPARMandatory()
                            .scrollIntoView()
                            .should(CypressKeywords.ASSERTION_TO_EXIST)
                            .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                            .and(CypressKeywords.ASSERTION_NOT_BE_DISABLED)
                            .click();
                        ApplicationProtocolEditPage.getBtnStdAppUpdateProtocolSettings().click();
                        cy.confirmSuccessMessageDisplay();
                        // Verify PAR mandatory checkbox is unchecked before proceeding.
                        ApplicationProtocolEditPage.getChkPARMandatory().scrollIntoView().should(
                            CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);
                        cy.wait(5000);

                        // Try authorization request to get the id token
                        cy.log("Try to authorize without PAR");
                        const requestToGetTokens = EnvironmentConfig.getServerOrigin()
                            + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                            + ProductConfig.authorizeEndPoint + "?"
                            + OidcConstants.REQUEST_HEADER_ID_TOKEN_RESPONSE_TYPE + "&"
                            + OidcConstants.REQUEST_HEADER_CLIENT_ID + appClientId + "&"
                            + OidcConstants.REQUEST_HEADER_REDIRECT_URI
                            + redirectUrl + "&" + OidcConstants.REQUEST_HEADER_NONCE + "&"
                            + OidcConstants.REQUEST_HEADER_SCOPE_OPENID_PROFILE;

                        cy.log("Request to get id token : " + requestToGetTokens);

                        cy.visit(requestToGetTokens, { failOnStatusCode: false, timeout: 120000 });

                        AsgardeoSampleAppLoginPage.getAsgardeoSampleEmailInput().clear()
                            .type(EnvironmentConfig.getUserCredentials().userName);
                        AsgardeoSampleAppLoginPage.getAsgardeoSamplePasswordInput().clear()
                            .type(EnvironmentConfig.getUserCredentials().password);
                        AsgardeoSampleAppLoginPage.getAsgardeoSampleSignInButton().click();

                        cy.wait(3000);
                        // recaptcha skip
                        cy.authenticateWithReCaptcha();

                        // Validate retrived Id token
                        cy.log("Validate retrived Id token");

                        // cy.wait for page load
                        cy.wait(1000);
                        cy.url().then((response) => {

                            cy.url().should(CypressKeywords.ASSERTION_TO_CONTAIN, OidcConstants.ID_TOKEN);

                            // Retrive Id token  from url
                            idToken = response.split(OidcConstants.ID_TOKEN)[1].split("&")[0].split("=")[1].trim();

                            cy.log("Id token: " + idToken);

                            // Decode the id-token
                            cy.log("Decode ID token");
                            const decodedHeader = jwt_decode<Cypress.ObjectLike>(idToken, { header: true });
                            // Verify id token response signing algorithm
                            expect(decodedHeader.alg).be.equal(OidcConstants.ALGORITHME_TYPE_RS256);
                        });
                });
            }));

    qase(1205,
        it("01.11.08 - Verify application owner can set request object configurations.",
            () => {

                // Navigate to protocols tab and configure
                cy.navigateToOIDCProtocolConfigPage(oidcStandardBasedAppPayload.name);

                // Select request object signing algorithm
                ApplicationProtocolEditPage.getRequestObjectSigningAlgorithmDropDownOption().click()
                    .find(ApplicationProtocolEditPage.MENU_DIV)
                    .contains(OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA).click();
                // Select request object encryption algorithm
                ApplicationProtocolEditPage.getRequestObjectEncryptionAlgorithmDropDownOption().click()
                    .find(ApplicationProtocolEditPage.MENU_DIV)
                    .contains(OidcConstants.ENCRYPTION_ALGORITHM_RSA_OAEP).click();
                // Select request object encryption method
                ApplicationProtocolEditPage.getRequestObjectEncryptionMethodDropDownOption().click()
                    .find(ApplicationProtocolEditPage.MENU_DIV).contains(OidcConstants.ENCRYPTION_METHOD_A128GCM)
                    .click();

                ApplicationProtocolEditPage.getBtnStdAppUpdateProtocolSettings().click();
                cy.confirmSuccessMessageDisplay();
                
                getAccessToken(EnvironmentConfig.getTenantAdminCredentials(),
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()))
                    .then((response: Cypress.ObjectLike) => {
                        accessToken = response.body.access_token;
                        cy.log(`Access Token: ${accessToken}`);
                        
                        // Creating a filter for the application name.
                        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
                            + applicationName;
                        cy.filterApplication(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                            EnvironmentConfig.getTenantAdminCredentials(), 
                            filterApplicationName).then((response: Cypress.ObjectLike) => {
                                expect(response.status).to.eq(StatusCodeConstants.OK);

                                const applicationId = response.body.applications[0].id;
                                cy.getOidcInboundProtocolConfig(accessToken, applicationId,
                                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()))
                                    .then((oidcResponse: Cypress.ObjectLike) => {
                                        cy.log(JSON.stringify(oidcResponse.body));

                                        cy.log("Validate that the algorithms selected in the UI " 
                                            + "are correctly saved in the API response.");

                                        // Validate request object signing algorithm
                                        expect(oidcResponse.body.requestObject.requestObjectSigningAlg)
                                            .to.equal(OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA,
                                                "Signing algorithm should be " + 
                                                OidcConstants.ALGORITHM_TYPE_SHA256_WITH_RSA);

                                        // Validate request object encryption algorithm
                                        expect(oidcResponse.body.requestObject.encryption.algorithm)
                                            .to.equal(OidcConstants.ENCRYPTION_ALGORITHM_RSA_OAEP,
                                                "Encryption algorithm should be " + 
                                                OidcConstants.ENCRYPTION_ALGORITHM_RSA_OAEP);

                                        // Validate request object encryption method
                                        expect(oidcResponse.body.requestObject.encryption.method)
                                            .to.equal(OidcConstants.ENCRYPTION_METHOD_A128GCM,
                                                "Encryption method should be " + 
                                                OidcConstants.ENCRYPTION_METHOD_A128GCM);

                                        // Validate Application State.
                                        expect(oidcResponse.body.state)
                                            .to.equal(OidcConstants.APPLICATION_ACTIVE_STATE, 
                                                "Application state should be ACTIVE");

                                        // Validate Defined Access token expiry time.
                                        expect(oidcResponse.body.accessToken.userAccessTokenExpiryInSeconds)
                                            .to.equal(3600, "User access token expiry should be 1 hour");
                                    });
                            });
                    });
            })
    );

    qase(1206,
        it("01.11.09 - Verify application owner can set Pairwise subject type and configure Sector Identifier URI.",
            () => {

                cy.visit(EnvironmentConfig.getConsoleAccessURL()
                    + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) +
                    ProductConfig.getAppConsoleConfig().routes.default);

                cy.log("Navigated to develop page");
                ConsoleGettingStarted.getApplicationLink().click();
                ApplicationsMainPage.getInputSearchByApplicationName().type(oidcStandardBasedAppPayload.name +
                    CypressKeywords.PRESS_ENTER_KEY);
                ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();

                // Navigate to protocols tab and configure
                cy.navigateBetweenTabs(2, ApplicationEditPageConstants.USER_ATTRIBUTES_TAB,
                    ApplicationEditPage.NAVIGATION_TABS);
                cy.log("Navigated to User Attributes tab");

                // Choose pairwise subject type.
                ApplicationEditUserAttributes.getPairwiseSubjectTypeRadioBtn().click();

                // Add Sector Identifier URI
                ApplicationEditUserAttributes.getSectorIdentifierUriInput().type(sectorIdentifierUri, { delay: 500 });

                ApplicationEditUserAttributes.getBtnUpdateUserAttributeSettings().click();
                cy.wait(5000);
                cy.confirmSuccessMessageDisplay();

                ApplicationEditUserAttributes.getPairwiseSubjectTypeRadioBtn()
                    .should(CypressKeywords.ASSERTION_HAVE_CLASS, CypressKeywords.CHECKED);
                ApplicationEditUserAttributes.getSectorIdentifierUriInput().find(HTMLKeyWordsConstants.INPUT_FIELD)
                    .should(CypressKeywords.ASSERTION_HAVE_VAL, sectorIdentifierUri);
            })
    );

    after(() => {

        // Delete application.
        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + oidcStandardBasedAppPayload.name;
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        // Delete SCIM user.
        cy.deleteSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials());
        
        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });

});

const getAccessToken = (authorizedUserCredentials, tenantEndpoint) => {
    return cy.getAsgiAccessToken(authorizedUserCredentials, tenantEndpoint)
        .then(token => {
            return token; // Return the access token
        });
};
