/*
 *   Copyright (c) 2022 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import { CypressTaskConfig, EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "../../configs";
import { ApplicationAPIPayloadConstants } from "../../constants";
import { SampleApplicationTypes } from "../../models";
import {
    AsgardeoSampleAppLoginPage, ConsoleGettingStarted, SampleApplicationPage
} from "../../page-objects";
import { HostControls } from "../../support/utils/host-controls";

const applicationTestInputData = TestE2EConfig.getAppConfig().testDataSinglePageApp,
    sampleReactAppExtractLocation = TestE2EConfig.sampleAppRootDirectory +
        TestE2EConfig.reactAppDownloadDirectory;
let testId: string, appCreationInputData: Cypress.ObjectLike, userCreationPayload: Cypress.ObjectLike;
/**
 * This spec verifies the tenant admin function to configure the react sample application
 * and user function to sign into the created application.
 */
describe("01.01 - Sign-in to Configured React Sample Application", function () {

    beforeEach(() => {

        // Sign in or activate pre-existing session for the tenant
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        // Return the current test id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {

            testId = $testID;
        });

        /**
         * Receive single-page application creation input data through fixtures.
         */
        cy.fixture(applicationTestInputData).then(($appTestData: Cypress.ObjectLike) => {

            // Store content of the fixture in a global variable.
            appCreationInputData = $appTestData;

            // Update application name with testId.
            appCreationInputData.generalConfigs.appName = appCreationInputData.generalConfigs.appName + "_" + testId;

            // Terminate any process in required port.
            cy.task(CypressTaskConfig.taskKillPID, appCreationInputData.appPort);

            // Delete if the application already exists in the app list.
            cy.deleteApplicationViaAPI(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + $appTestData.generalConfigs.appName
            );
        });

        /**
         * This task is used to check whether react sample app directory is exists,
         * If sample app directory is not exists then extract zipped sample application.
         */
        cy.task(CypressTaskConfig.taskIsDirectoryExists,
            sampleReactAppExtractLocation).then((result) => {
                // if directory is not exists extract zipped sample application.
                if (result == false) {

                    cy.log("Extracted application not found. Extracting the sample application.");
                    cy.task(CypressTaskConfig.taskExtractSampleZipFiles, "/" +
                        TestE2EConfig.sampleAppRootDirectory);
                }
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
                EnvironmentConfig.getTenantAdminCredentials(),
                userCreationPayload);
        });
    });

    qase(79,
        it("01.01.01 - Verify whether tenant admin can register a single-page application successfully.",
            function () {

                // Navigate to Console Page.
                cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) + 
                    ProductConfig.getAppConsoleConfig().routes.default);

                // Create Single Page Application via UI.
                cy.createApplicationViaUI(appCreationInputData);
                cy.validateApplicationExistence(appCreationInputData.generalConfigs.appName);
            })
    );

    qase(80,
        it("01.01.02 - Verify that react sample app authentication configs" +
            "can be successfully replaced with SP app auth configs via UI",
            function () {

                cy.replaceNodeSampleAppAuthConfigs(
                    EnvironmentConfig.getTenantPath(),
                    EnvironmentConfig.getTenantAdminCredentials(), SampleApplicationTypes.REACT,
                    sampleReactAppExtractLocation,
                    appCreationInputData.generalConfigs.appName);
            })
    );

    /**
    * StartUP sample react application.
    * Validating with waitForUrl() whether node dependency installed and server startup
    */
    qase(81,
        it("01.01.03 - Validate whether able to startup react sample application", function () {

            cy.task(CypressTaskConfig.taskSampleStartup, sampleReactAppExtractLocation);

            // Check and wait until the sample application accesses the url.
            HostControls.waitForUrl(TestE2EConfigUtils.nodeSampleAppDefaultRedirectUrl);
        })
    );

    qase(82,
        it("01.01.04 - Verify whether the user able to login to react sample application successfully", () => {

            cy.session(EnvironmentConfig.getUserCredentials().userName, () => {
                cy.log("User access react sample application.");
                cy.loginToNodeSampleApp(TestE2EConfigUtils.nodeSampleAppDefaultRedirectUrl);

                SampleApplicationPage.getSampleLogoutButton();
            });
        })
    );

    /**
     * Clear all test input data after executing all test cases.
     * 1. Delate created single page application.
     * 2. Terminate sample application startup.
     * 3. Clear all existing sessions.
     * 4. Skip execution of remaining tests if any test case fails.
     */
    after(() => {

        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + appCreationInputData.generalConfigs.appName;

        cy.log("Delete single page application.");
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        cy.log("Terminate running react sample application.");
        cy.task(CypressTaskConfig.taskKillPID, appCreationInputData.appPort);

        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set skip test.
        EnvironmentConfig.setSkipTest(false);
    });
});
