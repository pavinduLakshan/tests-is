/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import { EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "../../configs";
import {
    ApplicationAPIPayloadConstants, ApplicationEditPageConstants, AttributeManagementConstants, CypressKeywords,
    StatusCodeConstants, UserStoreConstants
} from "../../constants";
import {
    ApplicationEditPage, ApplicationEditUserAttributes,
    ApplicationProtocolEditPage, AttributeManager, ConsoleGettingStarted,
    GettingStartedManagePage, OIDCScopeManagePage
} from "../../page-objects";

const newAttribute = "attr_custom_local",
    newScope = "newscope",
    status = "status",
    scopeDescription = "creation of new scope",
    attributesData = TestE2EConfig.getAttributesConfig().testDataAttributesUI;
let userCreationPayload: Cypress.ObjectLike,
    applicationClientId: any,
    appCreationInputData: Cypress.ObjectLike,
    applicationSecret: any,
    testId: string;

/**
 * This spec verifies the scope that was created under standard application
 * is visible along with the access token
 */
describe("01.07 - Validate custom OIDC user claims received to the Token which are mapped for a OIDC scope",
    function () {

        beforeEach(() => {

            // Sign in or activate pre-existing session for the tenant.
            cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
        });

        before(() => {

            // Return the current test id as a global variable.
            cy.getCurrentTestCaseId().then($testID => {

                testId = $testID;
            });

            // Delete any stale data
            // Delete the external attributes associated to the local attribute.
            deleteAssociatedExternalAttributes();

            // Delete the custom attribute through the API.
            deleteAttribute();

            /**
             * Receive custom web application creation input data through fixtures.
             */
            cy.fixture(TestE2EConfig.getAppConfig().testDataCustomApp).then(($appData) => {

                // Store content of the fixture in a global variable.
                appCreationInputData = $appData;

                // Update application name with testId.
                appCreationInputData.appName = appCreationInputData.appName + "_" + testId;

                // Delete if already created application.
                cy.deleteApplicationViaAPI(
                    TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(),
                    ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + $appData.appName
                );
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
            cy.deleteOIDCScope(EnvironmentConfig.getServerOrigin(), EnvironmentConfig.getTenantPath(),
                EnvironmentConfig.getTenantAdminCredentials(), "asg_api", newScope, true);

        });

        qase(452,
            it("01.07.01 -  Verify whether the  user can create a new  local attribute that is need to be mapped",
                function () {

                    // Navigate to Console Page.
                    cy.visit(EnvironmentConfig.getConsoleAccessURL()
                        + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                        + ProductConfig.getAppConsoleConfig().routes.default);

                    // Navigate to console Manage section.

                    GettingStartedManagePage.getAttributeDialectLink().click();
                    GettingStartedManagePage.getDialectPageHeader();
                    AttributeManager.getAttributeEditIcon().click();
                    AttributeManager.getAttributeAddButton().click();
                    AttributeManager.getAddAttributePanel().should(CypressKeywords.ASSERTION_TO_CONTAIN,
                        AttributeManagementConstants.ADD_ATTRIBUTE_BTN_NAME);
                    cy.wait(5000);

                    // Add new attribute.
                    cy.fixture(attributesData).then(($attributes) => {
                        AttributeManager.getAttributeNameInput().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                            .clear().type($attributes.name, { delay: 1000 });
                        AttributeManager.getAttributeDisplayName().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                            .clear().type($attributes.description, { delay: 1000 });
                    });

                    cy.wait(5000);
                    AttributeManager.getFinishBtn().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                        .and(CypressKeywords.ASSERTION_TO_CONTAIN, UserStoreConstants.FINISH_BUTTON_TEXT)
                        .and(CypressKeywords.ASSERTION_NOT_BE_DISABLED)
                        .click();

                    cy.confirmSuccessMessageDisplay();

                })
        );

        qase(453,
            it("01.07.02 - Verify whether the user can create  a scope " +
                "and get mapped to the created local attribute.",
                function () {

                    // Navigate to Console Page.
                    cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                        + ProductConfig.getAppConsoleConfig().routes.default);

                    // Creation of new scope and mapping with local claim

                    GettingStartedManagePage.getAttributeDialectLink().click();
                    AttributeManager.getBtnOidcAttributeDialect().click();
                    OIDCScopeManagePage.getOIDCScopeNavigateButton().click();
                    OIDCScopeManagePage.getAddOIDCScope().click();

                    // Fill the details of the scope dialog box
                    OIDCScopeManagePage.addScopeNameScope().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                        .clear().type(newScope);
                    OIDCScopeManagePage.addDisplayNameScope().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
                        .clear().type(newScope);
                    OIDCScopeManagePage.addDescriptionScope().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).click()
                        .clear().type(scopeDescription);
                    OIDCScopeManagePage.getOIDCScopeNextButton().click();

                    // Next page opens so user can select the claim he needs to add
                    ApplicationEditUserAttributes.getInputSearchUserAttributeInSelectUserAttributesModal()
                        .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).clear().type(newAttribute);
                    ApplicationEditUserAttributes.getNewAttributeAttribute().click();
                    OIDCScopeManagePage.getOIDCScopeFinishButton().click();
                    cy.confirmSuccessMessageDisplay();
                })
        );

        qase(454,
            it("01.07.03 - Verify the user can create a new standard application" +
                "and update them with password grant type and JWT as it's token" +
                "and validate the scope  is present in application",
                function () {

                    // Navigate to Console Page.
                    cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                        + ProductConfig.getAppConsoleConfig().routes.default);

                    // Create OIDC Standard Application via UI.
                    cy.acceptCookies();

                    cy.createApplicationViaUI(appCreationInputData);
                    cy.validateApplicationExistence(appCreationInputData.appName);
                    cy.log("Validate that OIDC standard application " +
                        appCreationInputData.appName + " added Successfully.");
                    cy.searchApplication(appCreationInputData.appName);

                    // Navigate to the application protocol tab
                    cy.navigateBetweenTabs(1, ApplicationEditPageConstants.PROTOCOL_TAB,
                        ApplicationEditPage.NAVIGATION_TABS);

                    // Choose password grant type.   
                    ApplicationProtocolEditPage.getPasswordGrantTypeChkBox().as("passwordGrantTypeChkBox");

                    // Checks a checkbox with retry logic.
                    cy.verifyCheckboxStatusWithRetry("@passwordGrantTypeChkBox", true, 3);

                    // Assert that the checkbox is checked
                    cy.get("@passwordGrantTypeChkBox")
                    .should(CypressKeywords.ASSERTION_TO_BE_CHECKED);

                    // Unselect client credientials. 
                    ApplicationProtocolEditPage.getClientCredentialGrantTypeChkBox()
                    .as("clientCredentialGrantTypeChkBox");

                    // Checks a checkbox with retry logic.
                    cy.verifyCheckboxStatusWithRetry("@clientCredentialGrantTypeChkBox", false, 3);

                    // Assert that the checkbox is not checked
                    cy.get("@clientCredentialGrantTypeChkBox")
                    .should(CypressKeywords.ASSERTION_NOT_TO_BE_CHECKED);

                    // Choose JWT and unselect opaque and updated.
                    ApplicationProtocolEditPage.getJWTAccessTokenChkBox()
                    .as("jwtAccessTokenChkBox");

                    // Check if the checkbox is already checked
                    cy.verifyCheckboxStatusWithRetry("@jwtAccessTokenChkBox", true, 3);

                    // Assert that the checkbox is checked
                    cy.get("@jwtAccessTokenChkBox")
                    .should(CypressKeywords.ASSERTION_TO_BE_CHECKED);

                    // Click the button to update protocol settings
                    ApplicationProtocolEditPage.getBtnStdAppUpdateProtocolSettings().click();

                    // Go to user attribute tab and select the scope
                    cy.navigateBetweenTabs(2, ApplicationEditPageConstants.USER_ATTRIBUTES_TAB,
                        ApplicationEditPage.NAVIGATION_TABS);
                    ApplicationEditUserAttributes.getInputSearchUserAttributesOIDC().type(newScope);
                    ApplicationEditUserAttributes.getScopeFromUserAttribute().click();
                    cy.getApplicationClientIdClientSecret(EnvironmentConfig.getTenantPath(),
                        EnvironmentConfig.getTenantAdminCredentials(), appCreationInputData.appName).then(appData => {
                            applicationClientId = appData.clientId;
                            applicationSecret = appData.clientSecret;
                        });
                    cy.then(() => {
                        const encoded = btoa(applicationClientId + ":" + applicationSecret);
                        cy.getAccessToken(encoded, newScope, EnvironmentConfig.getTenantPath(),
                            EnvironmentConfig.getUserCredentials()).then(response => {
                                expect(response).have.property(status).to.eq(StatusCodeConstants.OK);
                                const validateScope = response.body.scope;
                                cy.log(validateScope);
                                expect(validateScope).to.equal(newScope, "Scope have been validated");
                            });
                    });
                })
        );

        after(() => {

            // Delete the external attributes associated to the local attribute.
            deleteAssociatedExternalAttributes();

            // Delete the custom attribute through the API.
            deleteAttribute();

            // Delete the scope via rest api
            cy.deleteOIDCScope(EnvironmentConfig.getServerOrigin(), EnvironmentConfig.getTenantPath(),
                EnvironmentConfig.getTenantAdminCredentials(), "asg_api", newScope, true);

            const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_SW
                + appCreationInputData.appName;

            cy.log("Delete Custom Web application.");
            cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), filterApplicationName);

            // Set Skip Test.
            EnvironmentConfig.setSkipTest(false);
        });
    });

const deleteAttribute = () => {
    cy.fixture(attributesData).then(($attributes) => {

        // Retrieve the id of the local attribute.
        cy.filterLocalAttributes(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(),
            $attributes.parametersForTenantOwner.filter,
            true
        ).then(response => {
            const length = response.body.length;
            let claimId;
            for (let i = 0; i < length; i++) {
                if (
                    response.body[i].claimURI ==
                    AttributeManagementConstants.LOCAL_CLAIMS_PATH + $attributes.name
                ) {
                    claimId = response.body[i].id;
                    break;
                }
            }

            // Delete the local attribute.
            cy.deleteLocalAttributes(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), claimId, true
            ).then(response => {
                cy.log("Status code for the attribute delete request: " + response.status);
                if (response.status == StatusCodeConstants.NO_CONTENT) {
                    cy.log("The custom local attribute is deleted.");
                } else {
                    cy.log("The custom local attribute deletion failed.");
                }
            });
        });
    });
};

/**
 * To delete the custom associated external attributes.
 */
const deleteAssociatedExternalAttributes = () => {

    // Filter the attribute dialect ids.
    cy.filterDialectIds(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
        EnvironmentConfig.getTenantAdminCredentials(), true)
        .then(response => {
            expect(response.status).to.eq(StatusCodeConstants.OK);

            const length = response.body.length;
            let scimClaimDialectId = null;
            let oidcClaimDialectId = null;
            for (let i = 0; i < length; i++) {

                if (response.body[i].dialectURI == AttributeManagementConstants.OIDC_CLAIMS_PATH) {

                    oidcClaimDialectId = response.body[i].id;
                }

                if (response.body[i].dialectURI == "urn:scim:schemas:extension:custom:User") {

                    scimClaimDialectId = response.body[i].id;
                }

                if (oidcClaimDialectId != null && scimClaimDialectId != null) {
                    break;
                }
            }

            // Filter the external attribute ids for associated OIDC claims.
            filterAndDeleteExternalMappedAttributes(oidcClaimDialectId, scimClaimDialectId);

        });
};

const filterAndDeleteExternalMappedAttributes = (oidcClaimDialectId: any, scimClaimDialectId: any) => {

    cy.filterExternalAttributes(
        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
        EnvironmentConfig.getTenantAdminCredentials(),
        oidcClaimDialectId,
        true)
        .then(response => {
            expect(response.status).to.eq(StatusCodeConstants.OK);

            cy.fixture(attributesData).then(($attributes) => {

                const length = response.body.length;
                let oidcClaimId;
                for (let i = 0; i < length; i++) {
                    if (response.body[i].claimURI == $attributes.name) {
                        oidcClaimId = response.body[i].id;
                        break;
                    }
                }

                // Delete the associated OIDC attributes.
                deleteOIDCMappedAttribute(oidcClaimDialectId, oidcClaimId);

            });

            if (!scimClaimDialectId) {
                return;
            }

            // Filter the external attribute ids for associated SCIM claims.
            cy.filterExternalAttributes(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                scimClaimDialectId,
                true)
                .then(response => {
                    expect(response.status).to.eq(StatusCodeConstants.OK);

                    cy.fixture(attributesData).then(($attributes) => {
                        const length = response.body.length;
                        let scimClaimId;
                        for (let i = 0; i < length; i++) {
                            if (response.body[i].claimURI == AttributeManagementConstants.SCIM_ATTRIBUTE_INPUT + ":" 
                                + $attributes.name) {
                                scimClaimId = response.body[i].id;
                                break;
                            }
                        }

                        // Delete the associated SCIM attributes.
                        deleteSCIMMappedAttribute(scimClaimDialectId, scimClaimId);

                    });
                });
        });
};

const deleteOIDCMappedAttribute = (oidcClaimDialectId: any, oidcClaimId: any) => {
    cy.deleteExternalAttributes(
        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
        EnvironmentConfig.getTenantAdminCredentials(),
        oidcClaimDialectId, oidcClaimId,
        true)
        .then(response => {

            cy.log("Status code for the attribute delete request: " + response.status);
            if (response.status == StatusCodeConstants.NO_CONTENT) {
                cy.log("The custom local attribute is deleted.");
            } else {
                cy.log("The custom local attribute deletion failed.");
            }
        });
};

const deleteSCIMMappedAttribute = (scimClaimDialectId: any, scimClaimId: any) => {
    cy.deleteExternalAttributes(
        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
        EnvironmentConfig.getTenantAdminCredentials(),
        scimClaimDialectId,
        scimClaimId,
        true)
        .then(response => {

            cy.log("Status code for the attribute delete request: " + response.status);
            if (response.status == StatusCodeConstants.NO_CONTENT) {
                cy.log("The custom local attribute is deleted.");
            } else {
                cy.log("The custom local attribute deletion failed.");
            }
        });
};
