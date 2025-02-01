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
    ApplicationAPIPayloadConstants, ApplicationEditPageConstants,
    AsgardeoEndPointsConstants,
    CypressKeywords, HTMLKeyWordsConstants, OidcConstants
} from "../../constants";
import {
    ApplicationCreatePage,
    ApplicationEditPage,
    ApplicationProtocolEditPage,
    ApplicationsMainPage, AsgardeoSampleAppLoginPage,
    ConsoleGettingStarted
} from "../../page-objects";
const implicit_grant = "implicit";
const mandatoryClaimUri = "http://wso2.org/claims/username";
let oidcWebAppPayload: Cypress.ObjectLike, userCreationPayload: Cypress.ObjectLike, certificate: any;
const redirectUrl = EnvironmentConfig.getProductLanding() + "sample";

/**
 * This test specification validates the displayed id token by certificate upload and
 * enabling encryption for OIDC traditional application
 */

describe("01.09 - Certificate update for OIDC traditional application", () => {

    beforeEach(() => {

        // Tenant admin sign in to the console.
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        /**
         * Pre-requisite - Test OIDC web application creation.
         * Receive OIDC web app creation input data through fixtures.
         */
        cy.fixture(TestE2EConfig.oidcWebAppCreationPayload).then(($oidcWebAppPayload) => {

            // Store content of the fixture in a global variable.
            oidcWebAppPayload = $oidcWebAppPayload;

            // Enable implicit grant type
            oidcWebAppPayload.inboundProtocolConfiguration.oidc.grantTypes[0] = implicit_grant;

            // callback url
            oidcWebAppPayload.inboundProtocolConfiguration.oidc.callbackURLs[0] = redirectUrl;

            // Create traditional application via API
            cy.log("Create OIDC web application via API");
            cy.createApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), oidcWebAppPayload);

            // Set username as mandatory for the application
            cy.getResidentApplicationFromSystem(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_CO + oidcWebAppPayload.name,
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

    qase(641,
        it("01.09.01 - Verify tenant admin is able to enable the encryption successfully.",
            () => {

                cy.visit(EnvironmentConfig.getConsoleAccessURL()
                    + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) +
                    ProductConfig.getAppConsoleConfig().routes.default);

                cy.log("Navigated to develop page");
                ConsoleGettingStarted.getApplicationLink().click();
                ApplicationsMainPage.getInputSearchByApplicationName().type(oidcWebAppPayload.name
                    + CypressKeywords.PRESS_ENTER_KEY);
                ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();

                // Navigate to protocols tab and configure
                cy.navigateBetweenTabs(2, ApplicationEditPageConstants.PROTOCOL_TAB,
                    ApplicationEditPage.NAVIGATION_TABS);
                cy.log("Navigate to protocols tab");

                // Add certificate
                ApplicationCreatePage.getCertificateType()
                    .each($certificateType => {
                        cy.contains("Provide certificate").click();
                    });

                ApplicationCreatePage.getBtnAddNewCertificate().click();
                cy.contains("Paste").click();

                cy.fixture(TestE2EConfig.testDataPubCert).then(($certificate: string) => {

                    // Store content of the fixture in a global variable.
                    certificate = $certificate;

                    ApplicationCreatePage.getCertificateUploadTextarea()
                        .type(certificate.toString(),
                            { parseSpecialCharSequences: false });
                });

                ApplicationCreatePage.getCertificateUploadFinishButton().click();

                // Validate certificate upload successfully.
                ApplicationCreatePage.getResourceList().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
                cy.log("Added certificate successfully");

                // Enable encryption
                ApplicationCreatePage.getEnableEncryptionCheckbox().click();

                // Select the 1st algorithm
                ApplicationCreatePage.getEncryptionAlgorithmDropDown().click();

                ApplicationProtocolEditPage.getAlgorithmDropDownOption().each($encryptionAlgorithm => {

                    cy.wrap($encryptionAlgorithm).find(HTMLKeyWordsConstants.HTML_SPAN)
                        .contains("RSA-OAEP").click();
                });
                ApplicationCreatePage.getEncryptionAlgorithmDropDown().within(() => {

                    cy.get(HTMLKeyWordsConstants.HTML_DIV).should(CypressKeywords.ASSERTION_TO_CONTAIN, "RSA-OAEP");
                });

                // Select the 1st encryption method
                ApplicationCreatePage.getEncryptionMethodDropDown().click();

                ApplicationProtocolEditPage.getEncryptionMethodDropDownOption()
                    .each($encryptionMethod => {
                        cy.wrap($encryptionMethod).find(HTMLKeyWordsConstants.HTML_SPAN).contains("A128GCM").click();
                    });
                ApplicationCreatePage.getEncryptionMethodDropDown().within(() => {

                    cy.get(HTMLKeyWordsConstants.HTML_DIV).should(CypressKeywords.ASSERTION_TO_CONTAIN, "A128GCM");
                });

                cy.log("Enabled encryption, algorithm and encryption method successfully");

                ApplicationCreatePage.getUpdateProtocolBtn().click();

                cy.confirmSuccessMessageDisplay();
            })
    );

    qase(642,
        it("01.09.02 - Verify whether the user is able to decrypt the id token successfully" +
            " and validate the displayed id token.", { retries: 2 },
            () => {

                // Get application client id
                cy.getApplicationClientId(
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(),
                    oidcWebAppPayload.name
                ).then(appClientId => {
                    cy.log("Application client_id: " + appClientId);

                    /**
                     * Define the redirect URL.
                     * Get id token from implicit grant.
                     */
                    cy.log("Get id token from implicit grant");
                    const requestToGetTokens = EnvironmentConfig.getServerOrigin()
                        + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                        + ProductConfig.authorizeEndPoint + "?"
                        + OidcConstants.REQUEST_HEADER_ID_TOKEN_RESPONSE_TYPE + "&"
                        + OidcConstants.REQUEST_HEADER_CLIENT_ID + appClientId + "&"
                        + OidcConstants.REQUEST_HEADER_REDIRECT_URI
                        + redirectUrl + "&"
                        + OidcConstants.REQUEST_HEADER_NONCE + "&"
                        + OidcConstants.REQUEST_HEADER_SCOPE_OPENID_PROFILE;

                    cy.log("Request to get id token : " + requestToGetTokens);
                    cy.session(EnvironmentConfig.getUserCredentials().userName, () => {
                        cy.visit(requestToGetTokens, { timeout: 120000 });

                        // Perform authentication
                        AsgardeoSampleAppLoginPage.getAsgardeoSampleEmailInput().clear()
                            .type(EnvironmentConfig.getUserCredentials().userName);
                        AsgardeoSampleAppLoginPage.getAsgardeoSamplePasswordInput().clear()
                            .type(EnvironmentConfig.getUserCredentials().password);
                        AsgardeoSampleAppLoginPage.getAsgardeoSampleSignInButton().click();

                        cy.wait(3000);

                        // Skip ReCaptcha if needed
                        cy.authenticateWithReCaptcha();
                        cy.wait(3000);

                        // Handle consent if required
                        cy.wait(1000); // 1s Until consent aproval page load propely.
                        cy.url().then(($url) => {
                            if ($url.includes(AsgardeoEndPointsConstants.OAuth2_CONSENT_APPROVAL_ENDPOINT)) {
                                cy.log("User accepts consent");
                                AsgardeoSampleAppLoginPage.getAsgardeoSampleConsentAllowButton()
                                    .as("consentAllowButton");
                                cy.checkAndVerifyConsentAttributeList("@consentAllowButton");
                            }
                            cy.authenticateWithReCaptcha();
                        });

                        // Validate retrieved ID token
                        cy.log("Validate retrieved Access token and ID token");
                        
                        cy.wait(1000); // Wait for page load
                        cy.url().then((currentUrl) => {
                            // Ensure URL contains the required tokens
                            cy.url().should(CypressKeywords.ASSERTION_TO_INCLUDE, OidcConstants.ACCESS_TOKEN)
                                .and(CypressKeywords.ASSERTION_TO_INCLUDE, OidcConstants.ID_TOKEN);

                            // Extract the fragment part of the URL
                            const fragment = currentUrl.split("#")[1];
                            if (!fragment) {
                                cy.log("URL does not contain a fragment with tokens.");
                                return; // Exit early if fragment is missing
                            }

                            // Extract tokens using URLSearchParams
                            const urlParams = new URLSearchParams(fragment);
                            const accessToken = urlParams.get(OidcConstants.ACCESS_TOKEN);
                            const idToken = urlParams.get("id_token");

                            // Validate tokens
                            if (accessToken && idToken) {
                                cy.log("Access Token: " + accessToken);
                                cy.log("ID Token: " + idToken);

                                expect(accessToken).to.not.be.null;
                                expect(idToken).to.not.be.null;
                                expect(accessToken.length).to.be.greaterThan(10);
                                expect(idToken.length).to.be.greaterThan(10);

                                // Decrypt id token.
                                cy.wait(3000); // Wait for token decryption.
                                const decryptionAlgorithm = "RSA-OAEP";  // Pass the desired algorithm
                                cy.task(CypressTaskConfig.taskDecryptIdToken, 
                                    { algorithm: decryptionAlgorithm, idToken: idToken })
                                    .then((payload: string) => {

                                    cy.log("Decrypted_Value: " + payload);

                                    // Validate the decrypted id token
                                    const jsonValue = JSON.parse(payload);

                                    cy.log("username: " + jsonValue.username);
                                    expect(jsonValue.username)
                                    .be.equal(EnvironmentConfig.getUserCredentials().userName);

                                    cy.log("issuer: " + jsonValue.iss);
                                    expect(jsonValue.iss)
                                    .be.equal(EnvironmentConfig.getServerOrigin()
                                        + EnvironmentConfig.getTenantPath()
                                        + AsgardeoEndPointsConstants.OAUTH_ACCESS_ENDPOINT);
                                });
                            } else {
                                cy.log("Access token or ID token not found in the URL.");
                            }
                        });
                    });
                });
            }
        ));

    after(() => {

        // Delete application.
        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + oidcWebAppPayload.name;
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
