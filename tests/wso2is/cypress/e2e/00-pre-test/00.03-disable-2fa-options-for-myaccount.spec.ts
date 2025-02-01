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

import { EnvironmentConfig, ProductConfig, TestE2EConfig } from "../../configs";
import { ApplicationAPIPayloadConstants, StatusCodeConstants } from "../../constants";

/**
 * This spec is used to disable all 2FA options for My Account portal for test tenants.
 */
describe("00.03 - Disable 2FA options for My Account portal for test tenants", function () {

    it("00.03.01 - Disable 2FA options for My Account portal for test tenants", () => {

        // Update 2FA option configuration for My Account portal for default
        // (Basic authentication as first factor). : TenantAdmin1
        cy.fixture(TestE2EConfig.defaultSignOnMethodPatchPayload).then(($patchPayload: Cypress.ObjectLike) => {
        
            // Creating a filter for the application name.
            const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ 
                + ProductConfig.asgardeoMyaccountAppName;

            cy.log("Revert MFA configurations via API. : TenantAdmin1");
            cy.setDefaultApplicationSignOnConfigs(EnvironmentConfig.getTenant1Path(),
                EnvironmentConfig.getTenantAdmin1Credentials(), filterApplicationName, 
                $patchPayload)  .then(response => {
                    expect(response.status).to.eq(StatusCodeConstants.OK);
                });
        });

        // Update 2FA option configuration for My Account portal for default
        // (Basic authentication as first factor). : TenantAdmin
        cy.fixture(TestE2EConfig.defaultSignOnMethodPatchPayload).then(($patchPayload: Cypress.ObjectLike) => {
        
            // Creating a filter for the application name.
            const filterApplicationName = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ 
                + ProductConfig.asgardeoMyaccountAppName;

            cy.log("Revert MFA configurations via API.: TenantAdmin");
            cy.setDefaultApplicationSignOnConfigs(EnvironmentConfig.getTenant1Path(),
                EnvironmentConfig.getTenantAdmin1Credentials(), filterApplicationName, 
                $patchPayload)  .then(response => {
                    expect(response.status).to.eq(StatusCodeConstants.OK);
                });
        });
    });
});
