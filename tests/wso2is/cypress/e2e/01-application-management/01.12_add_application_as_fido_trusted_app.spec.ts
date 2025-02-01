/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import { 
    EnvironmentConfig, 
    ProductConfig, 
    TestE2EConfig, 
    TestE2EConfigUtils 
} from "../../configs";
import { 
    ApplicationAPIPayloadConstants, 
    ApplicationEditPageConstants, 
    CypressKeywords, 
    HTMLKeyWordsConstants
} from "../../constants";
import {
    ApplicationEditAdvanced,
    ApplicationEditPage,
    ApplicationsMainPage,
    ConsoleGettingStarted
} from "../../page-objects";

let testId: string;
let appName: string;
let appCreationPayload: Cypress.ObjectLike;
const applicationTestInputData = TestE2EConfig.getAppConfig().testDataOIDCStandardBasedApp;

/**
 * This spec verifies that the tenant admin can configure trusted app metadata for an application 
 * and verifies the availability of the added trusted app at the trusted app well-known endpoints.
 */
describe("01.12 - Configure trusted app metadata for a standard based application.", function () {

    before(() => {

        // Sign in or activate pre-existing session for the tenant.
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());

        // Return the current test id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {
            testId = $testID;
        });

        // Prerequisite creation - Standard based application.
        cy.fixture(applicationTestInputData).then(($app: Cypress.ObjectLike) => {

            // Store content of the fixture in a global variable.
            appCreationPayload = $app;

            // Update application name with testId.
            appCreationPayload.name = appCreationPayload.name + "_" + testId;
            appName = appCreationPayload.name;

            cy.createApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), appCreationPayload);
            cy.validateApplicationExistence(appName);
        });
    });

    qase(1322,
        it("01.12.01 - Verify whether the tenant admin can update trusted app metadata in advanced tab via UI.", () => {

            // Go to the advanced tab of the created application.
            cy.visit(EnvironmentConfig.getConsoleAccessURL()
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                 + ProductConfig.getAppConsoleConfig().routes.default);

            ConsoleGettingStarted.getApplicationLink().click();
            ApplicationsMainPage.getInputSearchByApplicationName().type(appName)
                .trigger(CypressKeywords.TRIGGER_KEYDOWN, CypressKeywords.TRIGGER_KEY_ENTER);

            ApplicationsMainPage.getBtnRowOfApplicationsTable(appName).within(() => {

                ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
            });
            cy.navigateBetweenTabs(2, ApplicationEditPageConstants.ADVANCED_TAB,
                ApplicationEditPage.NAVIGATION_TABS);
            cy.log("Navigated to advanced tab.");

            // Enable FIDO trusted apps feature.
            ApplicationEditAdvanced.getChkFidoTrustedApp().click();

            // Should get the confirmation popup when enabling the feature.
            ApplicationEditAdvanced.getTrustedAppConfirmationModal().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);

            // Provide confirmation to enable the trusted app feature.
            ApplicationEditAdvanced.getChkTrustedAppConfirmation().click({ force: true });            
            ApplicationEditAdvanced.getBtnConfirmTrustedApp().click();

            // Verify the FIDO trusted app checkbox is enabled.
            ApplicationEditAdvanced.getChkFidoTrustedApp().should(CypressKeywords.ASSERTION_HAVE_CLASS,
                CypressKeywords.CHECKED);

            // Add platform settings data.
            ApplicationEditAdvanced.getAndroidPackageNameInput().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).
                within(() => {
                    inputValues(ApplicationEditPageConstants.ANDROID_PACKAGE_NAME + testId);
                });
            
            ApplicationEditAdvanced.getAndroidThumbprintsInput()
                .find(HTMLKeyWordsConstants.INPUT_FIELD).clear()
                .type(ApplicationEditPageConstants.ANDROID_THUMBPRINT + testId + CypressKeywords.PRESS_ENTER_KEY);

            ApplicationEditAdvanced.getAppleAppIdInput().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).
                within(() => {
                    inputValues(ApplicationEditPageConstants.APPLE_APP_ID + testId);
                });

            ApplicationEditAdvanced.getBtnUpdateAdvancedSettings().click();

            cy.confirmSuccessMessageDisplay();
            cy.log("Enabled FIDO trusted apps successfully");
        })
    );

    qase(1323,
        it("01.12.02 - Verify whether trusted app discovery endpoints list the added trusted app data.", () => {
        
            // Validate trusted app list for IOS.
            cy.getTrustedAppDiscoveryResponse(ApplicationAPIPayloadConstants.APPLE_DISCOVERY_ENDPOINT)
            .then(response => {
                const trustedIosApps = response.body.webcredentials.apps;
                // Verify whether app list contains the needed app ID.
                expect(trustedIosApps).to.include(ApplicationEditPageConstants.APPLE_APP_ID + testId);
            });

            // Validate trusted app list for Android.
            cy.getTrustedAppDiscoveryResponse(ApplicationAPIPayloadConstants.ANDROID_DISCOVERY_ENDPOINT)
            .then(response => {
                let isAppAvailable = false;
                const trustedAndroidApps = response.body;
                // Iterate through each app object.
                trustedAndroidApps.forEach(app => {
                    if (app.target.package_name == (ApplicationEditPageConstants.ANDROID_PACKAGE_NAME + testId)) {
                        const thumbprints = app.target.sha256_cert_fingerprints;
                        // Iterate through each thumbprint of the app.
                        thumbprints.forEach(thumbprint => {
                            if (thumbprint == ApplicationEditPageConstants.ANDROID_THUMBPRINT + testId) {
                                isAppAvailable = true;
                            }
                        });
                    }
                });
                // Verify whether an app object is available with the needed package name and thumbprint.
                expect(isAppAvailable).to.be.true;
            });
        })
    );

    after(() => {

        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + appCreationPayload.name;

        // Delete application.
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });
});

// This method is used to enter values into the input fields.
function inputValues(InputValue: any) {

    cy.get(HTMLKeyWordsConstants.INPUT_FIELD).should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).clear();
    cy.get(HTMLKeyWordsConstants.INPUT_FIELD).then(($value) => {
        cy.wrap($value).type(InputValue, { delay: 500 });
        cy.wrap($value).invoke(CypressKeywords.ASSERTION_INVOKE_VAL)
            .should(CypressKeywords.ASSERTION_TO_EQ, InputValue);

    });
}
