/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { qase } from "cypress-qase-reporter/mocha";
import { EnvironmentConfig } from "@wso2iam/test-cypress-core/configs";
import { ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "@wso2iam/test-ts-core"
import { ApplicationAPIPayloadConstants, ApplicationEditPageConstants } from "@wso2iam/test-ts-core/constants";
import { CypressKeywords } from "@wso2iam/test-cypress-core/constants/cypress-keywords"
import { ApplicationEditPage, ApplicationSignInMethodPage, ApplicationsMainPage, CommonLandingPage,
     ConsoleGettingStarted, LoginFlowAIPage } from "@wso2iam/test-cypress-core/page-objects";

const skipTestInDev = EnvironmentConfig.isDevEnv() ? describe.skip : describe;     
let testId: string, appCreationPayload: Cypress.ObjectLike;

/**
 * This test spec contains tests related to the login flow AI feature.
 */
skipTestInDev("16.01 - Admin configure a login flow with loginflow-AI feature.", function () {

    beforeEach(() => {

        // Sign in or activate pre-existing session for the tenant.
        cy.signInToConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        // Return the current test id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {

            testId = $testID;
        });

        /**
         * Receive single-page application creation input data through fixtures.
         */
        //Pre-requisite - Application creation
        cy.fixture(TestE2EConfig.spAppCreationPayload).then(($appCreationPayload: Cypress.ObjectLike) => {

            cy.log("app creation")
            // Store content of the fixture in a global variable.
            appCreationPayload = $appCreationPayload;

            cy.log(JSON.stringify(appCreationPayload))

            // Update application name with testId.
            appCreationPayload.name = appCreationPayload.name + "_" + testId;

            // Delete if the application already exists in the app list.
            cy.deleteApplicationViaAPI(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + appCreationPayload.name
            );

            // Create application via API
            cy.createApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), appCreationPayload);
            cy.validateApplicationExistence(appCreationPayload.name);
        });
    });

    it("test", () => {
        cy.log("test")
    })

    qase(1274, 
        it("16.01.01 - Verify whether an error returns when entering an invalid loginflow.",
            function () {
                    
                // Navigate to Console Page.
                cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) +
                    ProductConfig.getAppConsoleConfig(EnvironmentConfig.getConsoleAppBasePath()).routes.default);

                ConsoleGettingStarted.getApplicationLink().click();
                ApplicationsMainPage.getInputSearchByApplicationName().type(appCreationPayload.name 
                    + CypressKeywords.PRESS_ENTER_KEY);
                ApplicationsMainPage.getBtnRowOfApplicationsTable(appCreationPayload.name)
                .within(() => {
                    ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
                });

                // Navigate to sign-in method tab.
                cy.navigateBetweenTabs(4, ApplicationEditPageConstants.SIGN_IN_METHOD_TAB,
                    ApplicationEditPage.NAVIGATION_TABS);
                cy.log("Successfully navigated to the Login Flow tab.");
                // Click on the "Try Login Flow AI" button.
                LoginFlowAIPage.getLoginFlowAIActionButton().click();
                // Validate whether the text field appears after clicking the button.
                LoginFlowAIPage.getLoginFlowAIInput().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
                LoginFlowAIPage.getLoginFlowAIInput().type("Provide me instruction to make a cake.");
                // To prevent submitting the form before doing the UI validations.
                cy.wait(1000);
                LoginFlowAIPage.getLoginFlowAIInput().type(CypressKeywords.PRESS_ENTER_KEY);
                
                // Validate whether the error message appears within 5 seconds.
                CommonLandingPage.getErrorAlert().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE, { timeout: 5000 })
                    .contains(ApplicationEditPageConstants.LOGINFLOW_AI_ERROR_ALERT_BODY);
            })
        );

    //     qase(1275, 
    //         it("16.01.02 - Verify that the LoginFlow AI return a valid response for a valid login scenario.",
    //         function () {
                    
    //             // Navigate to Console Page.
    //             cy.visit(EnvironmentConfig.getConsoleAccessURL() +
    //                 TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) +
    //                 ProductConfig.getAppConsoleConfig().routes.default);

    //             ConsoleGettingStarted.getApplicationLink().click();
    //             ApplicationsMainPage.getInputSearchByApplicationName().type(appCreationPayload.name 
    //                 + CypressKeywords.PRESS_ENTER_KEY);
    //             ApplicationsMainPage.getBtnRowOfApplicationsTable(appCreationPayload.name)
    //             .within(() => {
    //                 ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
    //             });

    //             // Navigate to sign-in method tab.
    //             cy.navigateBetweenTabs(4, ApplicationEditPageConstants.SIGN_IN_METHOD_TAB,
    //                 ApplicationEditPage.NAVIGATION_TABS);
    //             cy.log("Successfully navigated to the Sign-in method tab.");
                
    //             LoginFlowAIPage.getLoginFlowAIActionButton().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    //             LoginFlowAIPage.getLoginFlowAIActionButton().click();

    //             // Validate whether the text field appears after clicking the button.
    //             LoginFlowAIPage.getLoginFlowAIInput().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
                
    //             const loginFlowInput = "Add username password as the first step and the email otp as the send step.";
    //             // Input the valid login flow and press enter.
    //             LoginFlowAIPage.getLoginFlowAIInput().type(loginFlowInput);
    //             // To prevent submitting the form before doing the UI validations.
    //             cy.wait(1000);
    //             LoginFlowAIPage.getLoginFlowAIInput().type(CypressKeywords.PRESS_ENTER_KEY);

    //             // Validate whether the loading screen appears within 5 seconds.
    //             LoginFlowAIPage.getLoginFlowAIAnimation(5000)
    //             .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
                
    //             /* 
    //             Validate whether the loading screen disappears within 90 seconds.
    //             AI response time is 90 seconds. If the AI couldn't respond within 90 seconds,it will throw an error.
    //             That's why we set the timeout to 90 seconds.
    //             */
    //             LoginFlowAIPage.getLoginFlowAIAnimation(90000).should(CypressKeywords.ASSERTION_TO_NOT_EXIST);

    //             /*
    //             Validate whether the "Revert to default" button appears. This button will appear after the 
    //             AI response.
    //             */
    //             ApplicationSignInMethodPage.getBtnRevertToDefault().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);

    //             // Validate whether the "History" button appears.
    //             LoginFlowAIPage.getLoginFlowAIHistoryButton().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);

    //             // Click the "History" button.
    //             LoginFlowAIPage.getLoginFlowAIHistoryButton().click();

    //             // Validate whether the the prompt history is correctly displayed.
    //             LoginFlowAIPage.getLoginFlowAIHistoryCard().contains(loginFlowInput)
    //             .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    //         })
    //     );

        /**
         * Clear all test input data after executing all test cases.
         * 
         * 1. Delete created single page application.
         * 2. Skip execution of remaining tests if any test case fails.
         */
        after(() => {

            const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW + appCreationPayload.name;

            cy.log("Deleting the created single page application...");
            cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

            // Clear all session before test start.
            Cypress.session.clearAllSavedSessions();

            // Set skip test.
            EnvironmentConfig.setSkipTest(false);
        });
});
