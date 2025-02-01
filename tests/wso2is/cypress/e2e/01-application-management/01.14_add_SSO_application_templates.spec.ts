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
import { EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "../../configs";
import { ApplicationAPIPayloadConstants, AsgardeoEndPointsConstants, CypressKeywords } from "../../constants";
import { ApplicationProtocolEditPage, ApplicationQuickStartPage } from "../../page-objects";

let testId: string, deleteApplication: boolean = false, appInputData: Cypress.ObjectLike;

function createSSOApplication(resourcePath: string) {

    cy.fixture(resourcePath).then((appCreationInputData: Cypress.ObjectLike) => {

            appInputData = appCreationInputData;

            // Update application name with testId.
            appCreationInputData.generalConfigs[0].value = appCreationInputData.generalConfigs[0].value + "_" + testId;
    
            // Delete if the application already exists in the app list.
            cy.deleteApplicationViaAPI(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + appCreationInputData.generalConfigs[0].value
            );
    
            // Navigate to Console Page.
            cy.visit(EnvironmentConfig.getConsoleAccessURL() +
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) + 
            ProductConfig.getAppConsoleConfig().routes.default);

            // Create Single Page Application via UI.
            cy.createApplicationViaUI(appCreationInputData);
            cy.validateApplicationExistence(appCreationInputData.generalConfigs[0].value);
    });
}

/**
 * This spec verifies the tenant admin function to configure the SSO application template
 * and verify the information in guide.
 */
describe("01.14 - Configure SSO template applications", function () {

    beforeEach(() => {

        // Sign in or activate pre-existing session for the tenant
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        // Return the current test id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {

            testId = $testID;
        });
    });

    qase(1432,
        it("01.14.01 - Verify whether tenant admin can add a Google workspace template.",
            function () {

                createSSOApplication(TestE2EConfig.testDataGoogleWorkspaceApp);
            })
    );

    qase(1433,
        it("01.14.02 - Verify the URLs  on Google workspace Guide section is correct." ,
            function () {
                
                cy.validateSSOApplicationGuidePage(appInputData.generalConfigs[0].value, () => {
                    ApplicationQuickStartPage.getGuideCodeElement("Sign-in page URL:")
                        .should(CypressKeywords.ASSERTION_TO_EQ, 
                            EnvironmentConfig.getServerOrigin() + EnvironmentConfig.getTenantPath() +  "samlsso");
                    ApplicationQuickStartPage.getGuideCodeElement("Sign-out page URL:")
                        .should(CypressKeywords.ASSERTION_TO_EQ, 
                            EnvironmentConfig.getServerOrigin() + EnvironmentConfig.getTenantPath() +  "samlsso");
                    ApplicationQuickStartPage.getGuideCodeElement("Change Password URL (optional):")
                        .should(CypressKeywords.ASSERTION_TO_EQ, EnvironmentConfig.getMyAccountAccessURL() 
                            + AsgardeoEndPointsConstants.TENANT_PATH + EnvironmentConfig.getTenant());
                });

                deleteApplication = true;
            })
    );

    qase(1434,
        it("01.14.03 - Verify whether tenant admin can add a Salesforce template.",
            function () {

                createSSOApplication(TestE2EConfig.testDataSalesforceApp);
            })
    );

    qase(1435,
        it("01.14.04 - Verify the URLs  on Salesforce Guide section is correct." ,
            function () {

                cy.validateSSOApplicationGuidePage(appInputData.generalConfigs[0].value, () => {
                    ApplicationQuickStartPage.getGuideCodeElement("In the SAML settings form replace Entity ID with :")
                        .should(CypressKeywords.ASSERTION_TO_NOT_BE_EMPTY);
                });

                deleteApplication = true;
            })
    );

    qase(1436,
        it("01.14.05 - Verify whether tenant admin can register Microsoft 365 successfully.",
            function () {

                createSSOApplication(TestE2EConfig.testDataMicrosoftApp);
            })
    );

    qase(1437,
        it("01.14.06 - Verify the URLs  on Microsoft 365 Guide section is correct." ,
            function () {

                cy.validateSSOApplicationGuidePage(appInputData.generalConfigs[0].value, () => {
                    ApplicationQuickStartPage.getGuideCodeElement("Configure the domain as a federated domain by "
                        + "providing the respective federation settings that match the Asgardeo. Store the federation "
                        + "settings in parameters."
                    ).should(
                        CypressKeywords.ASSERTION_TO_CONTAIN,
                        EnvironmentConfig.getServerOrigin() + EnvironmentConfig.getTenantPath() +  "samlsso"
                    );
                });

                deleteApplication = true;
            })
    );

    qase(1554,
        it("01.14.07 - Verify whether tenant admin can register Zoom successfully.",
            function () {

                createSSOApplication(TestE2EConfig.testDataZoomApp);
            })
    );

    qase(1555,
        it("01.14.08 - Verify the created Zoom application is correct." ,
            function () {
                
                cy.validateSSOApplicationGuidePage(appInputData.generalConfigs[0].value, () => {
                    ApplicationQuickStartPage.getGuideCodeElement("Sign-in page URL:")
                        .should(CypressKeywords.ASSERTION_TO_EQ, 
                            EnvironmentConfig.getServerOrigin() + EnvironmentConfig.getTenantPath() +  "samlsso");
                    ApplicationQuickStartPage.getGuideCodeElement("Sign-out page URL:")
                        .should(CypressKeywords.ASSERTION_TO_EQ, 
                            EnvironmentConfig.getServerOrigin() + EnvironmentConfig.getTenantPath() +  "samlsso");
                    ApplicationQuickStartPage.getGuideCodeElement("Identity Provider Certificate:")
                        .should(CypressKeywords.ASSERTION_TO_NOT_BE_EMPTY);
                    ApplicationQuickStartPage.getGuideCodeElement("Service Provider (SP) Entity ID:")
                        .should(CypressKeywords.ASSERTION_TO_EQ, appInputData.generalConfigs[1].value +  ".zoom.us");
                    ApplicationQuickStartPage.getGuideCodeElement("Issuer (IDP Entity ID):")
                        .should(CypressKeywords.ASSERTION_TO_NOT_BE_EMPTY);
                });

                cy.validateSSOApplicationProtocolPage(appInputData.generalConfigs[0].value, () => {
                    ApplicationProtocolEditPage
                        .getChipLabel(`https://${appInputData.generalConfigs[1].value}.zoom.us/saml/SSO`)
                        .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                        .contains(`${appInputData.generalConfigs[1].value}.zoom.us/saml/SSO`);
                    ApplicationProtocolEditPage
                        .getDropdownSelection(
                            "application-edit-access-settings-inbound-saml-form-default-assertion-consumer-url-input")
                        .should(
                            CypressKeywords.ASSERTION_TO_CONTAIN_TEXT, 
                            `https://${appInputData.generalConfigs[1].value}.zoom.us/saml/SSO`
                        );
                    ApplicationProtocolEditPage
                        .getInputElement(
                            "application-edit-access-settings-inbound-saml-form-single-logout-response-url-input")
                        .should(
                            CypressKeywords.ASSERTION_TO_HAVE_ATTRIBUTE,
                            "value",
                            `https://${appInputData.generalConfigs[1].value}.zoom.us/saml/SingleLogout`
                        );
                    ApplicationProtocolEditPage
                        .getInputElement(
                            "application-edit-access-settings-inbound-saml-form-single-logout-request-url-input")
                        .should(
                            CypressKeywords.ASSERTION_TO_HAVE_ATTRIBUTE,
                            "value",
                            `https://${appInputData.generalConfigs[1].value}.zoom.us/saml/SingleLogout`
                        );
                    ApplicationProtocolEditPage
                        .getChipLabel(`https://${appInputData.generalConfigs[1].value}.zoom.us`)
                        .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                        .contains(`${appInputData.generalConfigs[1].value}.zoom.us`);
                });

                deleteApplication = true;
            })
    );

    qase(1556,
        it("01.14.09 - Verify whether tenant admin can register Slack successfully.",
            function () {

                createSSOApplication(TestE2EConfig.testDataSlackApp);
            })
    );

    qase(1557,
        it("01.14.10 - Verify the created Slack application is correct." ,
            function () {
                
                cy.validateSSOApplicationGuidePage(appInputData.generalConfigs[0].value, () => {
                    ApplicationQuickStartPage.getGuideCodeElement("SAML 2.0 Endpoint:")
                        .should(CypressKeywords.ASSERTION_TO_EQ, 
                            EnvironmentConfig.getServerOrigin() + EnvironmentConfig.getTenantPath() +  "samlsso");
                    ApplicationQuickStartPage.getGuideCodeElement("Identity provider issuer:")
                        .should(CypressKeywords.ASSERTION_TO_NOT_BE_EMPTY);
                    ApplicationQuickStartPage.getGuideCodeElement("Public certificate:")
                        .should(CypressKeywords.ASSERTION_TO_NOT_BE_EMPTY);
                    ApplicationQuickStartPage.getGuideCodeElement("Service provider issuer:")
                        .should(
                            CypressKeywords.ASSERTION_TO_EQ,
                            `https://${appInputData.generalConfigs[2].value}.slack.com`
                        );
                });

                cy.validateSSOApplicationProtocolPage(appInputData.generalConfigs[0].value, () => {
                    ApplicationProtocolEditPage
                        .getChipLabel(`https://${appInputData.generalConfigs[2].value}.slack.com/sso/saml`)
                        .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                        .contains(`${appInputData.generalConfigs[2].value}.slack.com/sso/saml`);
                    ApplicationProtocolEditPage
                        .getDropdownSelection(
                            "application-edit-access-settings-inbound-saml-form-default-assertion-consumer-url-input")
                        .should(
                            CypressKeywords.ASSERTION_TO_CONTAIN_TEXT, 
                            `https://${appInputData.generalConfigs[2].value}.slack.com/sso/saml`
                        );
                });

                deleteApplication = true;
            })
    );

    /**
     * Clear the application data after executing each test case.
     */
    afterEach(() => {
        if (deleteApplication) {
            cy.log(`Delete ${appInputData.label} application.`);
            const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
                + appInputData.generalConfigs[0].value;
            cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);
            deleteApplication = false;
        }
    });

    after(() => {
        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set skip test.
        EnvironmentConfig.setSkipTest(false);
    });
});
