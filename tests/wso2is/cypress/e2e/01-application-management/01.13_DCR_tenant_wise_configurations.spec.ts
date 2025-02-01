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
import { EnvironmentConfig, ProductConfig, TestE2EConfigUtils } from "../../configs";
import { CypressKeywords, HTMLKeyWordsConstants } from "../../constants";
import { ApplicationsSettingsPage } from "../../page-objects";

const dcrAppName = "E2E-TEST-DCR-APP";

/**
 * This test specification validates the DCR tenant wise configurations in Applications Settings page.
 */

describe("01.13 - DCR tenant wise configurations", () => {

    beforeEach(() => {

        // Tenant admin sign in to the console.
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());

        // Navaigate to Applications Settings page.
        cy.navigateToApplicationsSettingsPage(EnvironmentConfig.getTenant());
    });

    qase(1259,
        it("01.13.01 - Verify DCR endpoint value is correct.",
            () => {

                // Verifies whether DCR Endpoint is visible in application settings page and 
                // its value is correct.

                ApplicationsSettingsPage.getDcrEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD)
                    .should(CypressKeywords.ASSERTION_HAVE_VAL, EnvironmentConfig.getServerOrigin() 
                        + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                        + ProductConfig.dcrEndpoint);

                cy.clickApplicationsSettingsBackButton();
            })
    );

    qase(1260,
        it("01.13.02 - Verify default DCR configs are correct.",
            () => {

                // Verifies the default configs in UI are same as the configs API results.

                cy.getDcrTenantConfigurations(EnvironmentConfig.getTenantAdminCredentials())
                .then((response: Cypress.ObjectLike) => {

                    cy.log("Response values from DCR configs API >>>");
                    cy.log(JSON.stringify(response.body));

                    if(response.body.authenticationRequired) {
                        ApplicationsSettingsPage.getRequireAuthenticationCheckbox().find(
                            HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_TO_BE_CHECKED);
                    } else {
                        ApplicationsSettingsPage.getRequireAuthenticationCheckbox().find(
                            HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);
                    }

                    if(response.body.mandateSSA) {
                        ApplicationsSettingsPage.getMandateSSACheckbox().find(HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_TO_BE_CHECKED);
                    } else {
                        ApplicationsSettingsPage.getMandateSSACheckbox().find(HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);
                    }

                    if(response.body.ssaJwks) {
                        ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_HAVE_VAL, response.body.ssaJwks);
                    }

                    if(response.body.enableFapiEnforcement) {
                        ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox().find(
                            HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_TO_BE_CHECKED);
                    } else {
                        ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox().find(
                            HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);
                    }
                });
            }
        )
    );

    qase(1261,
        it("01.13.03 - Verify changes done from Application Settings UI with configs API",
            () => {

                // Verifies whether a config change done from UI has successfully persisted using configs API.

                cy.getDcrTenantConfigurations(EnvironmentConfig.getTenantAdminCredentials())
                .then((response: Cypress.ObjectLike) => {

                    cy.log("Response values from DCR configs API >>>");
                    cy.log(JSON.stringify(response.body));

                    const enableFapiEnforcement = response.body.enableFapiEnforcement;

                    ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox().click();

                    // After clicking, EnforceFapiConformanceCheckbox value should be the opposite of the 
                    // response.body.enableFapiEnforcement value
                    if(!enableFapiEnforcement) {
                        ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox().find(
                            HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_TO_BE_CHECKED);
                    } else {
                        ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox().find(
                            HTMLKeyWordsConstants.INPUT_FIELD)
                            .should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);
                    }

                    ApplicationsSettingsPage.getSubmitButton().click();
                    cy.confirmSuccessMessageDisplay();

                    // response.body.enableFapiEnforcement value should be changed after the submit
                    cy.getDcrTenantConfigurations(EnvironmentConfig.getTenantAdminCredentials())
                    .then((response: Cypress.ObjectLike) => {
                        expect(response.body.enableFapiEnforcement).to.eq(!enableFapiEnforcement);
                    });
                });
            })
    );

    qase(1262,
        it("01.13.04 - Verify enabling `Mandate SSA` mandates SSA Jwks url input.",
            () => {

                // When `Mandate SSA` is enabled, SSA Jwks url should be a mandatory field.
                ApplicationsSettingsPage.getMandateSSACheckbox()
                    .find(HTMLKeyWordsConstants.INPUT_FIELD)
                    .as("inputCheck");  // Alias the element

                cy.verifyCheckboxStatusWithRetry("@inputCheck", true, 3);
                
                // Re-get the element by alias before asserting
                cy.get("@inputCheck").should(CypressKeywords.ASSERTION_TO_BE_CHECKED);

                ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD)
                .type("https://example.com/jwks");
                ApplicationsSettingsPage.getSubmitButton().click();
                cy.confirmSuccessMessageDisplay();

                // Clear the Jwks url input field and submit.
                ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD).clear();
                ApplicationsSettingsPage.getSubmitButton().click();

                ApplicationsSettingsPage.getErrorPrompt()
                    .should(CypressKeywords.ASSERTION_TO_CONTAIN, "This field cannot be empty");
            })
    );

    qase(1263,
        it("01.13.05 - Verify disabling `Require Authentication` enables and set `Mandate SSA` to read only.",
            () => {
                
                // When `Require Authentication` is disabled, `Mandate SSA` should be ticked and cannot be changed 
                // (read only). This also should mandates providing a SSA Jwks.

                // Get the "Require Authentication" checkbox and alias it
                ApplicationsSettingsPage.getRequireAuthenticationCheckbox()
                .find(HTMLKeyWordsConstants.INPUT_FIELD)
                .as("requireAuthCheckbox");

                // Uncheck the checkbox using the alias
                cy.verifyCheckboxStatusWithRetry("@requireAuthCheckbox", false, 3);

                // Assert that the checkbox is not checked
                cy.get("@requireAuthCheckbox").should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);

                ApplicationsSettingsPage.getMandateSSACheckbox().find(HTMLKeyWordsConstants.INPUT_FIELD)
                    .should(CypressKeywords.ASSERTION_TO_BE_CHECKED);
                ApplicationsSettingsPage.getMandateSSACheckbox().find(HTMLKeyWordsConstants.INPUT_FIELD)
                    .should(CypressKeywords.ASSERTION_TO_HAVE_ATTRIBUTE, "readonly");
                ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD)
                    .should(CypressKeywords.ASSERTION_TO_HAVE_ATTRIBUTE, "required");

                ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD).clear();
                ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD)
                .type("https://example.com/jwks");

                ApplicationsSettingsPage.getSubmitButton().click();
                cy.confirmSuccessMessageDisplay();
            })
    );

    qase(1264,
        it("01.13.06 - Verify invalid url to JWKS url fails.",
            () => {

                // Verify whether entering an invalid URL to JWKS url and updating fails.

                ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD).clear();
                ApplicationsSettingsPage.getJwksEndpointUrl().find(HTMLKeyWordsConstants.INPUT_FIELD)
                .type("example.com/jwks");
                ApplicationsSettingsPage.getSubmitButton().click();

                ApplicationsSettingsPage.getErrorPrompt().should(CypressKeywords.ASSERTION_TO_CONTAIN,
                    "Please enter a valid URL");
            })
    );

    qase(1265,
        it("01.13.07 - Verify whether Enforce FAPI conformance config creates FAPI apps only.",
            () => {

                // Affter enabling Enforce FAPI Conformance, this test verifies only FAPI can be created with DCR. 
                // (token_endpoint_auth_signing_alg like SHA256withRSA should not be used for FAPI apps).

                // Get the "Require Authentication" checkbox and alias it
                ApplicationsSettingsPage.getRequireAuthenticationCheckbox()
                .find(HTMLKeyWordsConstants.INPUT_FIELD)
                .as("requireAuthCheckbox");

                // Check the checkbox using the alias
                cy.verifyCheckboxStatusWithRetry("@requireAuthCheckbox", true, 3);
                // Assert that the checkbox is checked
                cy.get("@requireAuthCheckbox").should(CypressKeywords.ASSERTION_TO_BE_CHECKED);

                // Get the "Mandate SSA" checkbox and alias it
                ApplicationsSettingsPage.getMandateSSACheckbox()
                .find(HTMLKeyWordsConstants.INPUT_FIELD)
                .as("mandateSSACheckbox");

                // Uncheck the checkbox using the alias
                cy.verifyCheckboxStatusWithRetry("@mandateSSACheckbox", false, 3);

                // Assert that the checkbox is not checked
                cy.get("@mandateSSACheckbox").should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);

                // Get the "Enforce FAPI Conformance" checkbox and alias it
                ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox()
                .find(HTMLKeyWordsConstants.INPUT_FIELD)
                .as("enforceFapiCheckbox");

                // Check the checkbox using the alias
                cy.verifyCheckboxStatusWithRetry("@enforceFapiCheckbox", true, 3);

                // Assert that the checkbox is checked
                cy.get("@enforceFapiCheckbox").should(CypressKeywords.ASSERTION_TO_BE_CHECKED);

                ApplicationsSettingsPage.getSubmitButton().click();
                cy.confirmSuccessMessageDisplay();

                // Delete application if already exists.
                cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), dcrAppName);

                cy.getDcrTenantConfigurations(EnvironmentConfig.getTenantAdminCredentials()).then((response) => {
                    cy.log("Response from DCR Configs API >>>");
                    cy.log(JSON.stringify(response.body));
                });

                const tokenEndpointAuthSigningAlg = "SHA256withRSA";
                cy.createApplicationWithDCR(EnvironmentConfig.getTenantAdminCredentials(), 
                    dcrAppName, tokenEndpointAuthSigningAlg )
                    .then((response: Cypress.ObjectLike) => {

                        cy.log("DCR Response >>>");
                        cy.log(JSON.stringify(response.body));

                        expect(response.status).to.eq(400);
                        expect(response.body.error).to.eq("invalid_client_metadata");
                        expect(response.body.error_description).to.eq("Invalid signature algorithm requested");
                });

                // Delete the created application.
                cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), dcrAppName);
            })
    );

    qase(1266,
        it("01.13.08 - Verify whether Mandate SSA, actually mandates SSA in DCR.",
            () => {

                // This test verifies if Mandate SSA is enabled, DCR fails 
                // when sending the request without software_statement.

                // Get the "Mandate SSA" checkbox and alias it
                ApplicationsSettingsPage.getMandateSSACheckbox()
                .find(HTMLKeyWordsConstants.INPUT_FIELD)
                .as("mandateSSACheckbox");

                // Check the checkbox using the alias
                cy.verifyCheckboxStatusWithRetry("@mandateSSACheckbox", true, 3);

                // Assert that the checkbox is checked
                cy.get("@mandateSSACheckbox").should(CypressKeywords.ASSERTION_TO_BE_CHECKED);

                ApplicationsSettingsPage.getSubmitButton().click();
                cy.confirmSuccessMessageDisplay();

                // Delete application if already exists.
                cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), dcrAppName);

                const tokenEndpointAuthSigningAlg = "PS256";
                cy.createApplicationWithDCR(EnvironmentConfig.getTenantAdminCredentials(), 
                    dcrAppName, tokenEndpointAuthSigningAlg )
                        .then((response: Cypress.ObjectLike) => {

                            cy.log("DCR Response >>>");
                            cy.log(JSON.stringify(response.body));

                            expect(response.status).to.eq(400);
                            expect(response.body.error).to.eq("invalid_software_statement");
                            expect(response.body.error_description).to.eq("Mandatory software statement is missing");
                    });
            })
    );

    qase(1267,
        it("01.13.09 - Verify changes are only affected for that tenant only.",
            () => {

                // This test verifies whther the changes done for tenant A, are not affected to tenant B.

                // Get the "Enforce FAPI Conformance" checkbox and alias it
                ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox()
                .find(HTMLKeyWordsConstants.INPUT_FIELD)
                .as("enforceFapiCheckbox");

                // Check the checkbox using the alias
                cy.get("@enforceFapiCheckbox").check({ force: true });

                // Assert that the checkbox is checked
                cy.get("@enforceFapiCheckbox").should(CypressKeywords.ASSERTION_TO_BE_CHECKED);

                ApplicationsSettingsPage.getSubmitButton().click();
                cy.confirmSuccessMessageDisplay();

                // Sign in to the other tenant and check Enforce Fapi Conformance checkbox. It should not be checked.
                cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdmin1Credentials());
                cy.navigateToApplicationsSettingsPage(EnvironmentConfig.getTenant1());
                ApplicationsSettingsPage.getEnforceFapiConformanceCheckbox()
                    .find(HTMLKeyWordsConstants.INPUT_FIELD).should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);
            })
    );

    after(() => {

        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });

});
