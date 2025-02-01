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
import { CypressTaskConfig, EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "../../configs";
import {
    ApplicationAPIPayloadConstants, 
    ApplicationCreatePageConstants, 
    AsgardeoEndPointsConstants, 
    CypressKeywords, 
    HTMLKeyWordsConstants,
    StatusCodeConstants
} from "../../constants";
import { ApplicationProtocol } from "../../models";
import {
    ApplicationCreatePage, ApplicationsMainPage, AsgardeoSampleAppLoginPage, ConsoleCommonPageElements,
    ConsoleGettingStarted, SampleApplicationPage
} from "../../page-objects";
import { HostControls } from "../../support/utils/host-controls";

const sampleAppRedirectUrlOrigin = TestE2EConfigUtils.javaSampleAppDefaultOriginUrl,
    javaSampleAppAccessUrl = TestE2EConfig.samlJavaSampleAppAccessUrl,
    tomcatServerPort = TestE2EConfigUtils.tomcatServerPort,
    tomcatServerShutDownPort = TestE2EConfigUtils.tomcatServerShutDownPort,
    loginToTheApplication = " login to the sample application";

let testId: string, samlWebAppPayload: Cypress.ObjectLike, userCreationPayload: Cypress.ObjectLike;

/**
 * This test specification validates whether the user has successfully signed in to the SAML sample application
 * configured with a traditional web application using the file based method.
 */
describe("01.10 - Sign-in to Configured SAML Sample Application created via the file based method", () => {

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
         * Pre-requisite - Test SAML web application creation.
         * Receive SAML web app creation input data through fixtures.
         */
        cy.fixture(TestE2EConfig.getAppConfig().testDataTraditionalSAMLApp).then(($samlWebAppPayload) => {

            // Store content of the fixture in a global variable.
            samlWebAppPayload = $samlWebAppPayload;
            // Update application name with testId.
            samlWebAppPayload.generalConfigs.appName = samlWebAppPayload.generalConfigs.appName + "_" + testId;
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
            cy.createSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                , EnvironmentConfig.getTenantAdminCredentials(), userCreationPayload);
        });
    });

    qase(637,
        it("01.10.01 - Verify the tenant admin can create a SAML Based Traditional" +
            " Web Application with File based configurations", () => {

                cy.log("Create SAML web application via UI");
                cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) +
                    ProductConfig.getAppConsoleConfig().routes.default);
                cy.navigateToApplicationPage();
                ApplicationCreatePage.getNewApplicationBtn().click();
                ApplicationCreatePage.getWebApplicationQuickStartBtn().click();
                ConsoleCommonPageElements.getCommonModalHeader().should(CypressKeywords.ASSERTION_TO_CONTAIN,
                    ApplicationCreatePageConstants.WEB_APPLICATION_HEADER);
                cy.selectApplicationProtocol(ApplicationProtocol.SAML);

                ApplicationCreatePage.getSAMLAppName().scrollIntoView()
                    .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).find(HTMLKeyWordsConstants.INPUT_FIELD)
                    .clear()
                    .type(samlWebAppPayload.generalConfigs.appName)
                    .invoke(CypressKeywords.ASSERTION_INVOKE_VAL)
                    .should(CypressKeywords.ASSERTION_TO_EQ, samlWebAppPayload.generalConfigs.appName);

                ApplicationCreatePage.getConfigsOptions().within(() => {
                    ApplicationCreatePage.getSAMLConfigsTab().eq(0).click();
                });

                // Uploading the Metadata file.
                ApplicationCreatePage.getFileInput().selectFile(TestE2EConfig.samlMetaDataFile,
                    { action: CypressKeywords.DRAG_AND_DROP, force: true });
                cy.wait(2000);
                ApplicationCreatePage.getApplicationRegisterBtn().click({ force: true });
                cy.confirmSuccessMessageDisplay();
                // PATCH the sample application to disable skip login consent.
                cy.skipLoginConsentForApplication(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), samlWebAppPayload.generalConfigs.appName,
                TestE2EConfigUtils.getSkipLoginConsentPayload(false));
            })
    );

    it("01.10.02 - Verify whether the SAML sample app authentication configs " +
        "can be successfully replaced with SAML web app auth configs via UI", () => {

            cy.replaceJavaSAMLSampleAppAuthConfigs(TestE2EConfig.javaSampleAppTomcatLocation,
                TestE2EConfig.javaSAMLSampleAppConfigFileLocation,
                samlWebAppPayload.generalConfigs.appName);
            cy.log("Successfully replaced with SAML web app auth configs.");
        });

    qase(639,
        it("01.10.03 - Verify user can enable Attribute Profile via Protocol tab of the application. ", () => {

            cy.fixture(TestE2EConfig.enableAttributeProfileAPIBody).then(($updatedConfig) => {
                cy.enableAttributeProfile(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                    , EnvironmentConfig.getTenantAdminCredentials()
                    , $updatedConfig, samlWebAppPayload.generalConfigs.appName)
                    .then((response) => {
                        expect(response.status).to.eq(StatusCodeConstants.OK);
                    });
            });
        })
    );

    qase(640,
        it("01.10.04 - Verify whether user is able to add mandatory attributes for a SAML based Web Application" +
            "created via the File based method. ", () => {

                cy.visit(EnvironmentConfig.getConsoleAccessURL()
                    + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                    + ProductConfig.getAppConsoleConfig().routes.default);

                ConsoleGettingStarted.getApplicationLink().click();
                ApplicationsMainPage.getInputSearchByApplicationName().type(samlWebAppPayload.generalConfigs.appName)
                    .trigger(CypressKeywords.TRIGGER_KEYDOWN, CypressKeywords.TRIGGER_KEY_ENTER);

                ApplicationsMainPage.getBtnRowOfApplicationsTable(samlWebAppPayload.generalConfigs.appName)
                    .within(() => {
                        ApplicationsMainPage.getBtnEditRowOfApplicationsTable().click();
                    });
                cy.configureUserAttributesForSAMLApplication();
            })
    );

    it("01.10.05 - Verify successfully startup the tomcat server.", () => {

        cy.task(CypressTaskConfig.taskStartUpTomcatServer, TestE2EConfig.tomcatServerLocation);
        cy.task(CypressTaskConfig.taskWaitForPort, tomcatServerPort);
        cy.task(CypressTaskConfig.taskWaitForPort, tomcatServerShutDownPort);
        HostControls.waitForUrl(TestE2EConfigUtils.javaSampleAppDefaultOriginUrl +
            TestE2EConfig.samlJavaSampleAppAccessUrl);
    });

    qase(638,
        it("01.10.06 - Verify whether the user is able to try out the saml sample application successfully.",
            () => {

                cy.log("User access SAML sample application.");
                cy.origin(sampleAppRedirectUrlOrigin, { args: { javaSampleAppAccessUrl } },
                    ({ javaSampleAppAccessUrl }) => {
                        cy.visit(javaSampleAppAccessUrl, { failOnStatusCode: false });
                        Cypress.on("uncaught:exception", (err, runnable) => {
                            Cypress.log({ message: "Cypress detected uncaught exception" + err });
                            return false;
                        });
                    });
                cy.intercept("POST", samlWebAppPayload.generalConfigs.redirectUri2).as("getSAMLPostRequest1");
                SampleApplicationPage.getSampleLoginButton().click();
                cy.log("User: " + EnvironmentConfig.getUserCredentials().userName +
                    loginToTheApplication);
                cy.provideSampleAppLocalCredentials(EnvironmentConfig.getUserCredentials());
                
                cy.wait(1000); // 1s Until consent aproval page load propely.
                cy.url().then(($url) => {
                    if ($url.includes(AsgardeoEndPointsConstants.SAML_CONSENT_APPROVAL_ENDPOINT)) {
                        cy.log("User accepts consent");
                        AsgardeoSampleAppLoginPage.getSAMLSampleConsentAllowButton()
                        .as("consentAllowButton");
                        cy.checkAndVerifyConsentAttributeList("@consentAllowButton");
                    }
                    cy.authenticateWithReCaptcha();
                });
                // Clear the existing sessions to verify the next set of tests
                Cypress.session.clearAllSavedSessions();
            })
    );

    after(() => {

        // Delete application.
        const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
            + samlWebAppPayload.generalConfigs.appName;
        cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

        // Delete the custom user created
        cy.deleteSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
            , EnvironmentConfig.getTenantAdminCredentials());

        // Replace Assertion Consumer URL with home.jsp
        cy.readFile(TestE2EConfig.javaSampleAppTomcatLocation +
            TestE2EConfig.javaSAMLSampleAppConfigFileLocation).then(configuration => {

                const updatedConfig = (configuration + "")
                    .replace("SAML2.AssertionConsumerURL=" + samlWebAppPayload.generalConfigs.redirectUri2,
                        "SAML2.AssertionConsumerURL=" + samlWebAppPayload.generalConfigs.redirectUri);

                cy.log(("Updated sample property " + updatedConfig));

                cy.writeFile(TestE2EConfig.javaSampleAppTomcatLocation +
                    TestE2EConfig.javaSAMLSampleAppConfigFileLocation, updatedConfig);
            });

        // Stop Tomcat server.
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerPort);
        cy.task(CypressTaskConfig.taskKillPID, tomcatServerShutDownPort);

        // Clear all session before test start.
        Cypress.session.clearAllSavedSessions();

        // Set Skip Test.
        EnvironmentConfig.setSkipTest(false);
    });
});
