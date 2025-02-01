/**
 * Copyright (c) 2022, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import { CypressTaskConfig, EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "../../configs";
import { ApplicationAPIPayloadConstants, CypressKeywords } from "../../constants";
import {
    ApplicationsMainPage,
    ConsoleGettingStarted
} from "../../page-objects";

const applicationTestInputData = TestE2EConfig.testDataMobileApp;
let testId: string;
let appName: string;
let appCreationPayload: Cypress.ObjectLike;
let userCreationPayload: Cypress.ObjectLike;

/**
 * This spec verifies the tenant admin function to configure the mobile application
 * and validate entering deep links for redirect URL.
 */
describe("01.04 - Configure a Mobile Application", function () {

    beforeEach(() => {

        // Sign in or activate pre-existing session for the tenant.
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        // Return the current test id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {
            testId = $testID;
        });

        // Terminate any process in required port
        cy.fixture(applicationTestInputData).then(($app: Cypress.ObjectLike) => {

            // Store content of the fixture in a global variable.
            appCreationPayload = $app;

            // Update application name with testId.
            appCreationPayload.generalConfigs.appName = appCreationPayload.generalConfigs.appName + "_" + testId;
            appName = appCreationPayload.generalConfigs.appName;

            cy.task(CypressTaskConfig.taskKillPID, appCreationPayload.appPort);
        });

        // Prerequisite creation - Business User.
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

    qase(283,
        it("01.04.01 - Verify whether tenant admin can register a mobile application successfully.",
            function () {

                // Navigate to Console Page.
                cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                     + ProductConfig.getAppConsoleConfig().routes.default);


                // Create Mobile Application via UI.
                cy.createApplicationViaUI(appCreationPayload);
                cy.validateApplicationExistence(appCreationPayload.generalConfigs.appName);
            })
    );

    qase(284,
        it("01.04.02 - Verify whether the tenant admin can update details in protocol tab via UI.", () => {

            cy.visit(EnvironmentConfig.getConsoleAccessURL()
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                 + ProductConfig.getAppConsoleConfig().routes.default);

            ConsoleGettingStarted.getApplicationLink().click();
            ApplicationsMainPage.getInputSearchByApplicationName().type(appName)
                .trigger(CypressKeywords.TRIGGER_KEYDOWN, CypressKeywords.TRIGGER_KEY_ENTER);

            ApplicationsMainPage.getBtnRowOfApplicationsTable(appName).within(() => {

                ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
            });
            cy.updateMobileApplicationRedirectUrl(
                TestE2EConfig.mobileApplicationInvalidRedirectUrl, TestE2EConfig.mobileApplicationRedirectUrl);
        })
    );

    after(() => {

        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + appCreationPayload.generalConfigs.appName;

        // Delete application.
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        // This method is used to terminate running react sample application.
        cy.task(CypressTaskConfig.taskKillPID, appCreationPayload.appPort);

        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });
});
