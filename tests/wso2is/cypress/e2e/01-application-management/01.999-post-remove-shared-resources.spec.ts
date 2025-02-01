/*
 *   Copyright (c) 2022 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

import { CypressTaskConfig , 
    EnvironmentConfig, 
    TestE2EConfig, 
    TestE2EConfigUtils } from "../../configs";
import { ApplicationAPIPayloadConstants } from "../../constants";

/**
 * This spec is used to delete the shared resources created in the system which are common for application management 
 * group.
 */
 describe("01.999 - Remove the created shared resources", function () {
 
    it("01.999.01 - remove the created users from the system", () => {

        cy.deleteSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
        , EnvironmentConfig.getTenantAdminCredentials());
    });  
    
    
    it("01.999.02 - remove the created custom application from the system", () => {

        // Delete any existing custom application.
        cy.log("Delete application...");
        cy.fixture(TestE2EConfig.getAppConfig().testDataCustomApp).then(($appData) => {
            const filter = ApplicationAPIPayloadConstants.APPLICATION_FILTER_NAME_EQ + $appData.appName;
            cy.deleteApplicationViaAPI(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
                EnvironmentConfig.getTenantAdminCredentials(), filter);
        });   
        cy.log("Terminate sample application.");
        cy.task(CypressTaskConfig.taskKillPID, TestE2EConfigUtils.asgardeoNodeSampleDefaultPort); 
    });

    it("01.999.03 - remove created users from both tenants", () => {
        
        // Delete user via SCIM API.
        cy.deleteSCIMUser(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
        , EnvironmentConfig.getTenantAdminCredentials());
        cy.log("Successfully deleted user from Tenant: "
        + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()));

        cy.deleteSCIMUser(EnvironmentConfig.getTenant1Path(), EnvironmentConfig.getTenantAdmin1Credentials());
        cy.log("Successfully deleted user from Tenant: " + EnvironmentConfig.getTenant1Path());
 
    });
});
