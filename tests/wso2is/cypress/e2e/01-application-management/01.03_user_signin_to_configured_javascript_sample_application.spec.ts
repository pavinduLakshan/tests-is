/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org) All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import { CypressTaskConfig, EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "../../configs";
import { ApplicationAPIPayloadConstants, AsgardeoEndPointsConstants, CypressKeywords } from "../../constants";
import { SampleApplicationTypes } from "../../models";
import {
    ApplicationsMainPage, AsgardeoSampleAppLoginPage, ConsoleGettingStarted
} from "../../page-objects";
import { HostControls } from "../../support/utils/host-controls";

const applicationTestInputData = TestE2EConfig.getAppConfig().testDataSinglePageApp,
    sampleJsAppExtractLocation = TestE2EConfig.sampleAppRootDirectory + TestE2EConfig.jsAppDownloadDirectory;

let testId: string, appCreationInputData: Cypress.ObjectLike, userCreationPayload: Cypress.ObjectLike;

/**
 * This test specification validates whether the user has successfully signed in to the javaScript sample application
 * configured with a single-page application.
 */
describe("01.03 - Sign-in to Configured Javascript Sample Application", () => {

    beforeEach(() => {

        /**
         * This custom command is used by tenant admin to sign in to the console.
         */
        cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
    });

    before(() => {

        // Return the current specification id as a global variable.
        cy.getCurrentTestCaseId().then($testID => {

            testId = $testID;
        });

        /**
         * Pre-requisite - Test application creation.
         * Receive single-page application creation input data through fixtures.
         */
        cy.fixture(applicationTestInputData).then(($applicationPayload: Cypress.ObjectLike) => {

            // Store content of the fixture in a global variable.
            appCreationInputData = $applicationPayload;

            // Update application name with testId.
            appCreationInputData.generalConfigs.appName = appCreationInputData.generalConfigs.appName + "_" + testId;

            // Kill port before start.
            cy.task(CypressTaskConfig.taskKillPID, appCreationInputData.appPort);

            // Delete if the application already exists in the app list.
            cy.deleteApplicationViaAPI(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + appCreationInputData.generalConfigs.appName
            );
        });

        /**
         * This task is used to check whether js sample app directory is exists,
         * If sample app directory is not exists then extract zipped sample application.
         */
        cy.task(CypressTaskConfig.taskIsDirectoryExists,
            sampleJsAppExtractLocation).then((result) => {
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
        cy.fixture(TestE2EConfig.scimUserCreationPayload).then(($userPayload: Cypress.ObjectLike) => {

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

    qase(168,
        it("01.03.01 - Ensure that the internal tenant admin can create single page application " +
            "via UI successfully.", () => {

                // Navigate to Console Page.
                cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                    + ProductConfig.getAppConsoleConfig().routes.default);


                // Create Single Page Application via UI.
                cy.createApplicationViaUI(appCreationInputData);
                cy.validateApplicationExistence(appCreationInputData.generalConfigs.appName);
                // PATCH the sample application to disable skip login consent.
                cy.skipLoginConsentForApplication(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), appCreationInputData.generalConfigs.appName,
                    TestE2EConfigUtils.getSkipLoginConsentPayload(false));
            })
    );

    qase(169,
        it("01.03.02 - Verify whether the tenant admin can configure the JavaScript Sample Application via the UI.",
            () => {
                cy.visit(EnvironmentConfig.getConsoleAccessURL()
                    + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                    + ProductConfig.getAppConsoleConfig().routes.default);

                ConsoleGettingStarted.getApplicationLink().click();
                cy.acceptCookies();
                ApplicationsMainPage.getInputSearchByApplicationName().type(appCreationInputData.generalConfigs.appName)
                    .trigger(CypressKeywords.TRIGGER_KEYDOWN, CypressKeywords.TRIGGER_KEY_ENTER);
                ApplicationsMainPage.getBtnRowOfApplicationsTable(appCreationInputData.generalConfigs.appName)
                    .within(() => {

                        ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
                    });
                cy.replaceNodeSampleAppAuthConfigs(
                    EnvironmentConfig.getTenantPath(),
                    EnvironmentConfig.getTenantAdminCredentials(), SampleApplicationTypes.JAVASCRIPT,
                    TestE2EConfig.jsSampleAppConfigFileLocation,
                    appCreationInputData.generalConfigs.appName);
                cy.task(CypressTaskConfig.taskRunJavascriptSampleConfigShell,
                    TestE2EConfig.sampleAppRootDirectory + TestE2EConfig.jsSampleAppConfigFile);
            })
    );

    qase(170,
        it("01.03.03 - Verify whether the tenant admin can enable a few mandatory attributes via UI.", () => {

            cy.visit(EnvironmentConfig.getConsoleAccessURL()
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                + ProductConfig.getAppConsoleConfig().routes.default);

            ConsoleGettingStarted.getApplicationLink().click();
            ApplicationsMainPage.getInputSearchByApplicationName().type(appCreationInputData.generalConfigs.appName)
                .trigger(CypressKeywords.TRIGGER_KEYDOWN, CypressKeywords.TRIGGER_KEY_ENTER);
            ApplicationsMainPage.getBtnRowOfApplicationsTable(appCreationInputData.generalConfigs.appName)
                .within(() => {

                    ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
                });
            cy.configureUserAttributes();
        })
    );

    it("01.03.04 - Validate whether able to startup JavaScript sample application", function () {

        cy.task(CypressTaskConfig.taskSampleStartup, sampleJsAppExtractLocation);

        // Check and wait until the sample application accesses the url.
        HostControls.waitForUrl(TestE2EConfigUtils.nodeSampleAppDefaultRedirectUrl);
    });

    qase(171,
        it("01.03.05 - Verify whether the user able to try out the JavaScript sample application successfully.",
            () => {

                cy.session(EnvironmentConfig.getUserCredentials().userName, () => {
                    cy.log("User access javaScript sample application.");
                    cy.loginToJavascriptSampleApp(TestE2EConfigUtils.nodeSampleAppDefaultRedirectUrl);

                    cy.wait(1000); // 1s Until consent aproval page load propely.
                    cy.url().then(($url) => {
                        if ($url.includes(AsgardeoEndPointsConstants.OAuth2_CONSENT_APPROVAL_ENDPOINT)) {
                            cy.log("User accepts consent");
                            AsgardeoSampleAppLoginPage.getAsgardeoSampleConsentAllowButton().as("consentAllowButton");
                            cy.checkAndVerifyConsentAttributeList("@consentAllowButton");
                        }
                        cy.authenticateWithReCaptcha();
                    });
                });
            })
    );

    after(() => {

        // Delete application.
        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + appCreationInputData.generalConfigs.appName;
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        // Terminate running javaScript sample application.
        cy.task(CypressTaskConfig.taskKillPID, appCreationInputData.appPort);

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });
});
