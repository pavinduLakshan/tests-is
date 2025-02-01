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

import { CypressTaskConfig, EnvironmentConfig, ProductConfig, TestE2EConfig, TestE2EConfigUtils } from "../../configs";
import { 
    APIKeywords, 
    AttributeManagementConstants, 
    StatusCodeConstants
} from "../../constants";
import { Region } from "../../models";

const newScope = "newscope",
    attributesData = TestE2EConfig.getAttributesConfig().testDataAttributesUI,
    tomcatDirectory: string = "/tomcat";

/**
 * This spec is used to delete the created test data in the system.
 * @example react, react-js, oidc & saml sample applications, users, invited admins and Idps
 */
describe("00.01 - Remove the existing test data in the system", function () {

    before(() => {

        EnvironmentConfig.setPlatform(CypressTaskConfig.taskWindowsPlatform);
        Cypress.session.clearAllSavedSessions();
    });

    //TODO: Clear the test extraction from the agent before new executions. 
    it("00.01.00 - remove all extracted sample applications.", () => {

        const sampleAppRootDirectory = TestE2EConfig.sampleAppRootDirectory;
        const directories = [
            TestE2EConfig.jsAppDownloadDirectory,
            TestE2EConfig.reactAppDownloadDirectory,
            TestE2EConfig.reactJsAppDownloadDirectory,
            TestE2EConfig.oidcJavaSampleAppDownloadDirectory + TestE2EConfig.oidcJavaSampleAppDirectory,
            TestE2EConfig.samlJavaSampleAppDownloadDirectory + TestE2EConfig.samlJavaSampleAppDirectory,
            tomcatDirectory + TestE2EConfig.tomcatDirectory,
            TestE2EConfig.b2bSampleAppDownloadDirectory,
            TestE2EConfig.b2bAppDownloadDirectory
        ];

        cy.task(CypressTaskConfig.taskRemoveArrayOfDirectories, {
            arrayOfDirectories: directories,
            targetDirPath: "/" + sampleAppRootDirectory
        }).then(() => {

            cy.log(directories + " are removed successfully.");
        });
    });

    it("00.01.01 - Remove the existing users from the system", () => {

        //Remove application user from the system
        cy.deleteAllScimUsers(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
        EnvironmentConfig.getTenantAdminCredentials());
        cy.deleteAllScimUsers(EnvironmentConfig.getTenant1Path(), EnvironmentConfig.getTenantAdmin1Credentials());
        cy.deleteAllScimUsers(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getB2BTenant()),
        EnvironmentConfig.getB2BTenantAdminCredentials());
    });

    it("00.01.02 - Remove the existing applications from the system", () => {

        cy.deleteNonEnterpriseApplications(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()), 
        EnvironmentConfig.getTenantAdminCredentials());
        cy.deleteNonEnterpriseApplications(EnvironmentConfig.getTenant1Path(), 
        EnvironmentConfig.getTenantAdmin1Credentials());
        cy.deleteNonEnterpriseApplications(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getB2BTenant()),
        EnvironmentConfig.getB2BTenantAdminCredentials());
    });

    it("00.01.03 - Remove any remaining IdPs from the system", () => {
        // Deleting all connectors from tenant 1
        cy.log("Deleting created connections in tenant: " + TestE2EConfigUtils.
            getTenantedPath(EnvironmentConfig.getTenant()));

        cy.deleteAllCreatedConnections(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(),
            false);

        // Deleting all connectors from tenant 2
        cy.log("Deleting created connections in tenant: " + 
        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1()));

        cy.deleteAllCreatedConnections(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1()),
            EnvironmentConfig.getTenantAdmin1Credentials(),
            false);
    });

    it("00.01.04 - Remove the secondory onprem userstores created.", () => {

        cy.log("Delete created secondory onprem userstores in tenant: "
         + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()));
        
        // Delete secondary user stores created in Tennat admin 1.
        cy.deleteAllUserStoresExceptDefault(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
        EnvironmentConfig.getTenantAdminCredentials());

        // Delete secondary user stores created in Tennat admin 2.
        cy.deleteAllUserStoresExceptDefault(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1()),
        EnvironmentConfig.getTenantAdmin1Credentials());
    });

    it("00.01.05 - Remove the existing sub organizations from the system", () => {

        cy.log("Delete created Sub Organization from tenant: "
            + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getB2BTenant()));
        deleteSubOrganization(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getB2BTenant()),
            EnvironmentConfig.getB2BTenantAdminCredentials());

        if (!EnvironmentConfig.skipTestInLocalEnv()) {
            cy.log("Delete created Sub Organization from tenant: "
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getCustomDomainTenant()));
                deleteSubOrganization(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getCustomDomainTenant()),
                EnvironmentConfig.getTenantAdminCredentialsCustomDomain());
        }    
    });

    it.skip("00.01.06 - Remove the existing branding configs from the system", () => {

        cy.getBrandingPreference(EnvironmentConfig.getTenantPath(), EnvironmentConfig.getTenantAdminCredentials())
        .then((response) =>
          { if(response.status == (StatusCodeConstants.OK)) {
                cy.deleteBrandingPreference(EnvironmentConfig.getTenantPath(), EnvironmentConfig.
                getTenantAdminCredentials())
                .then((response) => {
                  expect(response.status).to.eq(StatusCodeConstants.NO_CONTENT);
                  cy.log("Deleted the existing branding configurations.");
                });
            }
            else {
                expect(response.status).to.eq(StatusCodeConstants.NOT_FOUND);
                cy.log("No branding configurations exists.");
            }
        });
    });

    it("00.01.07 - Remove the existing user groups via API from the system", () => {

        cy.log("Delete created user groups in tenant: " + EnvironmentConfig.getTenant());
        cy.deleteGroupViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(), {}, ProductConfig.getGrantType().oauthCustomGrantAsgardeo);

        cy.log("Delete created user groups in tenant: " + EnvironmentConfig.getTenant1());
        cy.deleteGroupViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1()),
            EnvironmentConfig.getTenantAdmin1Credentials(), {}, ProductConfig.getGrantType().oauthCustomGrantAsgardeo);

        cy.log("Delete created user groups in tenant: " + EnvironmentConfig.getB2BTenant());
        cy.deleteGroupViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getB2BTenant()),
            EnvironmentConfig.getB2BTenantAdminCredentials(), {},
            ProductConfig.getGrantType().oauthCustomGrantAsgardeo);
    });

    it("00.01.08 - Revert the password validation set in the tenants", () => {

        // Revert password validation configuration.
        cy.fixture(TestE2EConfig.testDataValidationDefaultAPIBody).then(($updatedConfig) => {
            cy.updateValidationConfig(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                , EnvironmentConfig.getTenantAdminCredentials()
                , $updatedConfig)
                .then((response) => {
                    expect(response.status).to.eq(StatusCodeConstants.OK);
                });
        });

        cy.fixture(TestE2EConfig.testDataValidationDefaultAPIBody).then(($updatedConfig) => {
            cy.updateValidationConfig(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1())
                , EnvironmentConfig.getTenantAdmin1Credentials()
                , $updatedConfig)
                .then((response) => {
                    expect(response.status).to.eq(StatusCodeConstants.OK);
                });
        });
    });

    it("00.01.09 - Disable the password history count feature", () => {
        disablePasswordHistoryCount(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials());
    });

    it("00.01.10 - Revert the username validation configurations in the tenants", () => {

        // Revert username validation configuration.
        cy.fixture(TestE2EConfig.testusernameValidationDefaultAPIBody).then(($updatedConfig) => {
            cy.updateValidationConfig(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                , EnvironmentConfig.getTenantAdminCredentials()
                , $updatedConfig)
                .then((response) => {
                    expect(response.status).to.eq(StatusCodeConstants.OK);
                });
        });
    });

    it("00.01.11 - Disable the password Expiry feature", () => {
        disablePasswordExpiry(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials());
    });


    it.skip("00.01.12 - Remove all exisiting API resources from the system", () => {

        //TODO: Remove this if condition once the API resource deletion is supported in the EU environment.
        if((EnvironmentConfig.getRegion() === Region.EU) || (EnvironmentConfig.skipTestInLocalEnv())) {
            cy.log("Skipping the API resource deletion as it is not currently supported in the EU and local " + 
                "environment.");
        } else {
            cy.log("Delete created API resources in tenant: " + EnvironmentConfig.getTenantPath());
            deleteAllAPIResources(EnvironmentConfig.getTenantPath(), EnvironmentConfig.getTenantAdminCredentials());
        
            cy.log("Delete created API resources in tenant: " + EnvironmentConfig.getTenant1Path());
            deleteAllAPIResources(EnvironmentConfig.getTenant1Path(), EnvironmentConfig.getTenantAdmin1Credentials());

            cy.log("Delete created API resources in tenant: "
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getB2BTenant()));
            deleteAllAPIResources(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getB2BTenant()),
                EnvironmentConfig.getB2BTenantAdminCredentials());
        }
    });

    it("00.01.13 - Enable Bot Detection Mechanism Feature for tenant domains. ", () => {

        // Enable Bot Detection Mechanism Feature for tenant domain.
        cy.changeBotDetectionMechanismForSSOLogin(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(),
            ProductConfig.getGovernanceEndpoint().identityGovernanceEndPoint,
            true
        ).then(response => {
            cy.log("Bot Detection Mechanism Feature enabled for tenant domain.");
            expect(response.status).to.eq(APIKeywords.RESPONSE_SUCCESS_INFO_STATUS);
        });

        cy.changeBotDetectionMechanismForSSOLogin(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1()),
            EnvironmentConfig.getTenantAdmin1Credentials(),
            ProductConfig.getGovernanceEndpoint().identityGovernanceEndPoint,
            true
        ).then(response => {
            cy.log("Bot Detection Mechanism Feature enabled for tenant 1 domain.");
            expect(response.status).to.eq(APIKeywords.RESPONSE_SUCCESS_INFO_STATUS);
        });
    });

    it("00.01.14 - Revert the alternative login identifier configurations in the tenants", () => {

        // Revert alternative login identifier validation configuration.
        cy.changeMultiAttributeLogin(EnvironmentConfig.getTenantAdminCredentials(),
        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
        , ProductConfig.getGovernanceEndpoint().identityGovernanceEndPoint, false)
        .then(response => {
          expect(response.status).to.eq(StatusCodeConstants.OK);
        });

        // Revert uniqueness scope property from claims.
        cy.updateLocalClaimWithUniquenessScopeProperty(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(),
            AttributeManagementConstants.MOBILE_ATTRIBUTE_URI
        );
        cy.updateLocalClaimWithUniquenessScopeProperty(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials(),
            AttributeManagementConstants.EMAIL_ATTRIBUTE_URI
        );
    });

    it("00.01.15 - Delete the associated attribute from the system", () => {

        // Delete the external attributes associated to the local attribute.
        deleteAssociatedExternalAttributes();

        // Delete the custom attribute through the API.
        deleteAttribute();

        // Delete the scope via rest API
        cy.deleteOIDCScope(EnvironmentConfig.getServerOrigin(), EnvironmentConfig.getTenantPath(),
            EnvironmentConfig.getTenantAdminCredentials(), "asg_api", newScope, true);

    });

    it("00.01.16 - Remove created Identity Verification Providers from the system", () => {

        cy.clearAllIdVPs(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials()
        );
    });

    it("00.01.17 - Reset multi emails and mobiles related claim properties.", () => {

        cy.log("Resetting multiple emails and mobiles feature related claims in tenant: " + 
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()));
        cy.resetMultiEmailsMobilesRelatedClaims(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials()
        );

        cy.log("Resetting multiple emails and mobiles feature related claims in tenant: " + 
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1()));
        cy.resetMultiEmailsMobilesRelatedClaims(
            TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant1()),
            EnvironmentConfig.getTenantAdmin1Credentials()
        );
    });
});

/**
 * This function deletes all the sub organizations in the tenant
 * @param tenantPath - The tenant path of the tenant you want to delete the sub organizations from.
 * @param tenantAdminCredentials - The admin user of the tenant.
 */
function deleteSubOrganization(tenantPath, tenantAdminCredentials) {

    let organizationId;
    cy.getAsgiAccessToken(tenantAdminCredentials, tenantPath)
        .then(tokenResponse => {
            const id_token = tokenResponse.body.id_token;
            const jsonObj = parseJwt(id_token);
            organizationId = jsonObj["org_id"];

            if (organizationId != null) {
                //Get all the created sub organizations and remove them from the tenant
                cy.getSubOrganizationsOfTenant(
                    organizationId,
                    tenantAdminCredentials,
                    tenantPath,
                    "",
                    true)
                    .then(response => {
                        if (Object.keys(response.body).length !== 0) {
                            response.body.organizations.forEach(organization => {
                                cy.log("Deleting Organization with name: " + organization.name);
                                cy.deleteOrganizationViaAPI(organizationId, organization.id, tenantAdminCredentials,
                                    tenantPath, true)
                                    .then(response => {
                                        cy.log("Status Code : " + response.status);
                                    });
                            });
                        }
                    });
            }
        });
}

/**
 * This function deletes all the API resources in the tenant
 * @param tenantPath - The tenant path of the tenant you want to delete the sub organizations from.
 * @param tenantAdminCredentials - The admin user of the tenant.
 */
function deleteAllAPIResources(tenantPath, tenantAdminCredentials) {

    let organizationId: string;

    cy.getAsgiAccessToken(tenantAdminCredentials, tenantPath)
        .then((tokenResponse: Cypress.ObjectLike) => {
            const id_token: string = tokenResponse.body.id_token;
            const access_token: string = tokenResponse.body.access_token;
                
            const jsonObj = parseJwt(id_token);
            organizationId = jsonObj["org_id"];

            if (organizationId) {
                //Get all the created API resources and remove them from the tenant
                cy.deleteAllAPIResourcesViaAPI(
                    organizationId,
                    access_token
                );
            }
        });
}

function parseJwt (token) {

    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

/**
 * This function revert the password history count changes
 * @param tenantPath - The path of the tenant.
 * @param tenantAdminCredentials - The admin user of the tenant.
 */
function disablePasswordHistoryCount(tenantPath: string, tenantAdminCredentials: Cypress.ObjectLike) {
    cy.disablePasswordHistoryCountViaAPI(tenantPath, tenantAdminCredentials);
}

 /* This function revert the password expiry changes
 * @param tenantPath - The path of the tenant.
 * @param tenantAdminCredentials - The admin user of the tenant.
 */
function disablePasswordExpiry(tenantPath: string, tenantAdminCredentials: Cypress.ObjectLike) {
    cy.disablePasswordExpiryViaAPI(tenantPath, tenantAdminCredentials);
}

/* This is an internal function to filter and delete the local attribute
*/
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

/* This is an internal function to filter the mapped connections of the attribute
* Using the custom function filterExternalAttributes
*/
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
                            if (response.body[i].claimURI == "urn:scim:schemas:extension:custom:User:" 
                                + $attributes.name) {
                                scimClaimId = response.body[i].id;
                                break;
                            }
                        }

                        // Delete the associated SCIM attributes.
                        if (scimClaimId) {
                            deleteSCIMMappedAttribute(scimClaimDialectId, scimClaimId);
                        }

                    });
                });
        });
};

/* This is an internal function to delete the mapped OIDC attribute
* Using the custom function deleteExternalAttributes
*/
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

/* This is an internal function to delete the mapped SCIM attribute
* Using the custom function deleteExternalAttributes
*/
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
