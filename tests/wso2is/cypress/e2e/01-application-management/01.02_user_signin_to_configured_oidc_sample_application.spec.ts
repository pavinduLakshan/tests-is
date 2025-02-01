/*
 *   Copyright (c) 2022 WSO2 LLC. (http://www.wso2.org)
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
import { ApplicationAPIPayloadConstants, 
    AsgardeoEndPointsConstants, 
    CypressKeywords } from "../../constants";
import {
    ApplicationsMainPage, AsgardeoSampleAppLoginPage,
    ConsoleGettingStarted, SampleApplicationPage
} from "../../page-objects";
import { HostControls } from "../../support/utils/host-controls";

const sampleAppRedirectUrlOrigin = TestE2EConfigUtils.javaSampleAppDefaultOriginUrl,
    javaSampleAppAccessUrl = TestE2EConfig.oidcJavaSampleAppAccessUrl,
    tomcatServerPort = TestE2EConfigUtils.tomcatServerPort,
    tomcatServerShutDownPort = TestE2EConfigUtils.tomcatServerShutDownPort,
    loginToTheApplication = " login to the sample application";

let testId: string, oidcWebAppPayload: Cypress.ObjectLike, userCreationPayload: Cypress.ObjectLike;

/**
 * This test specification validates whether the user has successfully signed in to the OIDC sample application
 * configured with a traditional web application.
 */
describe("01.02 - Sign-in to Configured OIDC Sample Application", () => {

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
         * Pre-requisite - Test OIDC web application creation.
         * Receive OIDC web app creation input data through fixtures.
         */
        cy.fixture(TestE2EConfig.oidcWebAppCreationPayload).then(($oidcWebAppPayload) => {

            // Store content of the fixture in a global variable.
            oidcWebAppPayload = $oidcWebAppPayload;
            // Update application name with testId.
            oidcWebAppPayload.name = oidcWebAppPayload.name + "_" + testId;

            // Delete if the application already exists in the app list.
            cy.deleteApplicationViaAPI(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + oidcWebAppPayload.name
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
            cy.createSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                userCreationPayload);
        });
    });

    qase(161,
        it("01.02.01 - Ensure that the internal tenant admin can create web application " +
            "via API successfully.", () => {

                cy.log("Create OIDC web application via API");
                cy.createApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), oidcWebAppPayload);
                cy.validateApplicationExistence(oidcWebAppPayload.name);
            })
    );

    it("01.02.02 - Verify whether the OIDC sample app authentication configs " +
        "can be successfully replaced with SP app auth configs via UI", () => {

            cy.visit(EnvironmentConfig.getConsoleAccessURL()
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) + 
                ProductConfig.getAppConsoleConfig().routes.default);

            ConsoleGettingStarted.getApplicationLink().click();
            ApplicationsMainPage.getInputSearchByApplicationName().type(oidcWebAppPayload.name
                    + CypressKeywords.PRESS_ENTER_KEY);

            ApplicationsMainPage.getBtnRowOfApplicationsTable(oidcWebAppPayload.name).within(() => {

                ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
            });
            cy.replaceJavaOIDCSampleAppAuthConfigs(TestE2EConfig.javaSampleAppTomcatLocation,
                TestE2EConfig.javaOIDCSampleAppConfigFileLocation,
                oidcWebAppPayload.name);
        });

    qase(163,
        it("01.02.03 - Verify whether the tenant admin can enable a few mandatory attributes via UI.", () => {

            cy.visit(EnvironmentConfig.getConsoleAccessURL()
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) + 
                ProductConfig.getAppConsoleConfig().routes.default);

            ConsoleGettingStarted.getApplicationLink().click();
            ApplicationsMainPage.getInputSearchByApplicationName().type(oidcWebAppPayload.name
                    + CypressKeywords.PRESS_ENTER_KEY);
            ApplicationsMainPage.getBtnRowOfApplicationsTable(oidcWebAppPayload.name).within(() => {

                ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
            });
            cy.configureUserAttributes();
        })
    );

    it("01.02.04 - Ensure that successfully startup the tomcat server.", () => {

        cy.task(CypressTaskConfig.taskStartUpTomcatServer, TestE2EConfig.tomcatServerLocation);
        cy.task(CypressTaskConfig.taskWaitForPort, tomcatServerPort);
        cy.task(CypressTaskConfig.taskWaitForPort, tomcatServerShutDownPort);
        HostControls.waitForUrl(TestE2EConfigUtils.javaSampleAppDefaultOriginUrl +
            TestE2EConfig.oidcJavaSampleAppAccessUrl);
    });

    qase(164,
        it("01.02.05 - Verify whether the user is able to try out the OIDC sample application successfully.",
            () => {

                cy.session(EnvironmentConfig.getUserCredentials().userName, () => {
                    cy.log("User access oidc sample application.");
                    cy.origin(sampleAppRedirectUrlOrigin,
                        { args: { javaSampleAppAccessUrl } }, ({ javaSampleAppAccessUrl }) => {
                            cy.visit(javaSampleAppAccessUrl, { failOnStatusCode: false });
                        });

                    SampleApplicationPage.getSampleLoginButton().click();
                    cy.log("User: " + EnvironmentConfig.getUserCredentials().userName +
                        loginToTheApplication);
                    cy.provideSampleAppLocalCredentials(EnvironmentConfig.getUserCredentials());

                    cy.wait(1000); // 1s Until consent aproval page load propely.
                    cy.url().then(($url) => {
                        if ($url.includes(AsgardeoEndPointsConstants.OAuth2_CONSENT_APPROVAL_ENDPOINT)) {
                            cy.log("User accepts consent");
                            AsgardeoSampleAppLoginPage.getAsgardeoSampleConsentAllowButton().as("consentAllowButton");
                            cy.checkAndVerifyConsentAttributeList("@consentAllowButton");
                        }
                        cy.authenticateWithReCaptcha();
                    });
                    
                    SampleApplicationPage.getSampleLogoutButton();
                });
            })
    );

    after(() => {

        // Delete created oidc web application.
        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + oidcWebAppPayload.name;
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        // Stop Tomcat server.
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerPort);
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerShutDownPort);

        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });
});
