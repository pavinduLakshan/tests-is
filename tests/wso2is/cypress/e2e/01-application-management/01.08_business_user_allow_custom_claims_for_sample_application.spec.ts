/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

import { qase } from "cypress-qase-reporter/dist/mocha";
import {
    CypressTaskConfig,
    EnvironmentConfig,
    ProductConfig,
    TestE2EConfig,
    TestE2EConfigUtils
} from "../../configs";
import {
    ApplicationAPIPayloadConstants, 
    ApplicationEditPageConstants, 
    AsgardeoEndPointsConstants, 
    AttributeManagementConstants, 
    CypressKeywords,
    HTMLKeyWordsConstants,
    StatusCodeConstants
} from "../../constants";
import { SampleApplicationTypes } from "../../models";
import {
    ApplicationEditPage,
    ApplicationEditUserAttributes,
    AsgardeoSampleAppLoginPage, 
    SampleApplicationPage
} from "../../page-objects";
import { HostControls } from "../../support/utils/host-controls";

const newAttribute = "attr_custom_local",
    newScope = "newscope",
    attributesData = TestE2EConfig.getAttributesConfig().testDataAttributesUI,
    sampleReactAppExtractLocation = TestE2EConfig.sampleAppRootDirectory +
        TestE2EConfig.reactAppDownloadDirectory,
    requestedScope=["openid", "profile", "newscope"];
let userCreationPayload: Cypress.ObjectLike,
    appCreationPayload: any,
    testId, timeBeforeLogin: number;

/**
 * This spec verifies that a custom attribute can be allowed consent with sample application
 */
describe("01.08 - Verify user provide custom scope and attribute access when logging into sample application",
    function () {

        beforeEach(() => {

            // Sign in or activate pre-existing session for the tenant.
            cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
        });

        before(() => {

            // Dynamically generate current test case.
            cy.getCurrentTestCaseId().then($testID => {
                testId = $testID;
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
                cy.createSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                    EnvironmentConfig.getTenantAdminCredentials(), userCreationPayload);
            });

            //Pre-requisite - Application creation
            cy.fixture(TestE2EConfig.spAppCreationPayload).then(($appCreationPayload: Cypress.ObjectLike) => {

                // Store content of the fixture in a global variable.
                appCreationPayload = $appCreationPayload;

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

                // Replace sample application config.json with scopes.
                cy.replaceNodeSampleAppAuthConfigsWithScopes(
                    EnvironmentConfig.getTenantPath(),
                    EnvironmentConfig.getTenantAdminCredentials(),
                    SampleApplicationTypes.REACT,
                    sampleReactAppExtractLocation,
                    appCreationPayload.name,
                    requestedScope
                );
            });

            //Pre-requisite - Custom attribute creation
            //Add the local attribute
            cy.fixture(TestE2EConfig.getAttributesConfig().testDataAttributesAPI)
                .then($attribute => {

                    $attribute.claimURI = AttributeManagementConstants.LOCAL_CLAIMS_PATH + newAttribute;
                    $attribute.displayName = newAttribute,
                        $attribute.attributeMapping[0].mappedAttribute = newAttribute;

                    cy.createLocalAttributeViaAPI(
                        EnvironmentConfig.getTenantAdminCredentials(),
                        EnvironmentConfig.getTenant(),
                        $attribute
                    );

                    cy.createOIDCAttributeViaAPI(
                        EnvironmentConfig.getTenantAdminCredentials(),
                        EnvironmentConfig.getTenant(),
                        $attribute
                    );
                });

            //Pre-requisite - Custom scope creation
            cy.createCustomScopeViaAPI(
                EnvironmentConfig.getTenantAdminCredentials(),
                EnvironmentConfig.getTenant(),
                [newAttribute],
                newScope
            );
        });

        qase(473,
            it("01.08.01 -  Verify user can configure custom scope in react application",
                function () {

                    // Navigate to Console Page.
                    cy.signInAsgardeoConsole(EnvironmentConfig.getTenantAdminCredentials());
                    cy.visit(EnvironmentConfig.getConsoleAccessURL() +
                        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                        + ProductConfig.getAppConsoleConfig().routes.default);



                    // Creation of new scope and mapping with local claim
                    cy.searchApplication(appCreationPayload.name);

                    // Next page opens so user can select the claim he needs to add
                    cy.navigateBetweenTabs(3, ApplicationEditPageConstants.USER_ATTRIBUTES_TAB,
                        ApplicationEditPage.NAVIGATION_TABS);
                    ApplicationEditUserAttributes.getInputSearchUserAttributesOIDC()
                        .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).within(element => {
                            cy.wrap(element).get(HTMLKeyWordsConstants.INPUT_FIELD).clear();
                            cy.wrap(element).get(HTMLKeyWordsConstants.INPUT_FIELD).type(newAttribute);

                        });
                    cy.get(ApplicationEditUserAttributes.getOIDCCustomAttributeCheckBox() + newAttribute + "\"]")
                        .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).within(element => {
                            cy.wrap(element).get(HTMLKeyWordsConstants.HTML_UI_CHECKBOX).first().click();
                            cy.wrap(element).get(HTMLKeyWordsConstants.HTML_UI_CHECKBOX).last().click();
                        });
                    ApplicationEditUserAttributes.getBtnUpdateUserAttributeSettings().click();
                    cy.confirmSuccessMessageDisplay();

                })
        );

        it("01.08.02 - Validate whether able to startup react sample application", function () {

            cy.task(CypressTaskConfig.taskSampleStartup, sampleReactAppExtractLocation);

            // Check and wait until the sample application accesses the url.
            HostControls.waitForUrl(TestE2EConfigUtils.nodeSampleAppDefaultRedirectUrl);
        });

        qase(474,
            it("01.08.03 - Approve access to the custom scope from the sample application", function () {

                // Record last login time before user login.
                cy.getLastLoginTime(EnvironmentConfig.getUserCredentials().userName).then(time => {
                    timeBeforeLogin = time;
                });

                cy.loginToNodeSampleApp(TestE2EConfigUtils.nodeSampleAppDefaultRedirectUrl);
                cy.get(AttributeManagementConstants.CLAIM_ATTRIBUTE_INPUT
                    + AttributeManagementConstants.LOCAL_CLAIMS_PATH + newAttribute + "\"]")
                    .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE).type(newAttribute);
                AsgardeoSampleAppLoginPage.getContinueBtnAfterAddClaimValue().click();

                cy.wait(1000); // 1s Until consent aproval page load propely.
                cy.url().then(($url) => {
                    if ($url.includes(AsgardeoEndPointsConstants.OAuth2_CONSENT_APPROVAL_ENDPOINT)) {
                        cy.log("User accepts consent");
                        AsgardeoSampleAppLoginPage.getAsgardeoSampleConsentAllowButton().as("consentAllowButton");
                        cy.checkAndVerifyConsentAttributeList("@consentAllowButton");
                    }
                    cy.authenticateWithReCaptcha();
                });
                //Assert the logout button availability to validate that the user has grant
                //consent and successfully redirected to the application
                SampleApplicationPage.getSampleLogoutButton().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
            })
        );

        qase(475,
            it("01.08.04 - Validate whether last login time has been updated", function () {

                cy.getLastLoginTime(EnvironmentConfig.getUserCredentials().userName).then(lastLoginTime => {
                    cy.log("Last login time before login: " + timeBeforeLogin);
                    cy.log("Last login time after login: " + lastLoginTime);
                    expect(lastLoginTime).to.be.greaterThan(timeBeforeLogin);
                });
            })
        );

        after(() => {

            //Terminate the application
            cy.log("Terminate running react sample application.");
            cy.task(CypressTaskConfig.taskKillPID, TestE2EConfigUtils.nodeSampleAppDefaultRedirectUrl);

            // Delete created application via API.
            cy.deleteApplicationViaAPI(
                TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(),
                ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + appCreationPayload.name
            );
            
            // Delete the external attributes associated to the local attribute.
            deleteAssociatedExternalAttributes();

            // Delete the custom attribute through the API.
            deleteAttribute();

            // Delete the scope via rest api
            cy.deleteOIDCScope(EnvironmentConfig.getServerOrigin(), EnvironmentConfig.getTenantPath(),
                EnvironmentConfig.getTenantAdminCredentials(), "asg_api", newScope, true);

            //Delete the scim user
            cy.deleteSCIMUser(
                EnvironmentConfig.getTenantPath(),
                EnvironmentConfig.getTenantAdminCredentials(),
                false,
                EnvironmentConfig.getUserCredentials().userName
            );

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
        ).then((response: Cypress.ObjectLike) => {
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
        .then((response: Cypress.ObjectLike) => {
            expect(response.status).to.eq(StatusCodeConstants.OK);

            const length = response.body.length;
            let scimClaimDialectId = null;
            let oidcClaimDialectId = null;
            for (let i = 0; i < length; i++) {

                if (response.body[i].dialectURI == AttributeManagementConstants.OIDC_CLAIMS_PATH) {

                    oidcClaimDialectId = response.body[i].id;
                }

                if (response.body[i].dialectURI == AttributeManagementConstants.SCIM_ATTRIBUTE_INPUT) {

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
        .then((response: Cypress.ObjectLike) => {
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
                .then((response: Cypress.ObjectLike) => {
                    expect(response.status).to.eq(StatusCodeConstants.OK);

                    cy.fixture(attributesData).then(($attributes) => {
                        const length = response.body.length;
                        let scimClaimId;
                        for (let i = 0; i < length; i++) {
                            if (response.body[i].claimURI ==
                                AttributeManagementConstants.SCIM_ATTRIBUTE_INPUT + ":" + $attributes.name) {
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
