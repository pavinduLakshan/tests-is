/*
 *   Copyright (c) 2024 WSO2 LLC. (https://www.wso2.com)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

import { qase } from "cypress-qase-reporter/dist/mocha";
import { EnvironmentConfig } from "@wso2iam/test-cypress-core/configs";
import { ProductConfig, TestE2EConfigUtils } from "@wso2iam/test-ts-core"
import { AsgardeoEndPointsConstants, BrandingPageConstants, 
    StatusCodeConstants } from "@wso2iam/test-ts-core/constants";
import { CypressKeywords } from "@wso2iam/test-cypress-core/constants/cypress-keywords";
import { RequestMethodTypes } from "@wso2iam/test-ts-core/models/console/request-method";
import { BrandingAIPage, BrandingPage, CommonLandingPage } from "@wso2iam/test-cypress-core/page-objects";

const skipTestInDev = EnvironmentConfig.isDevEnv() ? describe.skip : describe;

/**
 * This test spec contains tests related to the branding AI feature.
 */
skipTestInDev("16.02 - Admin configure branding via branding-AI feature.", function () {

    beforeEach(() => {

        // Sign in or activate pre-existing session for the tenant.
        cy.signInToConsole(EnvironmentConfig.getTenantAdminCredentials());

        // Remove branding configs if alredy exists.
        cy.getBrandingPreference(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
      EnvironmentConfig.getTenantAdminCredentials())
       .then((response) => {
         if (response.status == (StatusCodeConstants.OK)) {
           cy.deleteBrandingPreference(TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()),
            EnvironmentConfig.getTenantAdminCredentials())
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

    qase(1276, 
        it("16.02.01 - Verify whether an error returns when entering an invalid website URL.",
            function () {
                    
                // Navigate to Console Page.
                cy.visit(EnvironmentConfig.getConsoleAccessURL()
                + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                + ProductConfig.getAppConsoleConfig().routes.default);

                BrandingPage.getBrandingSidePanelBtn().click();
                
                BrandingAIPage.getBrandingAIActionButton().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
                BrandingAIPage.getBrandingAIActionButton().click();
                // Enters an invalid website URL.
                BrandingAIPage.getBrandingAIInput().type("https://www.wso3.com");
                // To prevent submitting the form before doing the UI validations.
                cy.wait(500);
                BrandingAIPage.getBrandingAIInput().type(CypressKeywords.PRESS_ENTER_KEY);
                
                // Validate whether the error message appears within 5 seconds.
                CommonLandingPage.getErrorAlert().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE, { timeout: 5000 })
                    .contains(BrandingPageConstants.BRANDING_AI_ERROR_ALERT_BODY);
            })
        );

        qase(1277, 
            it("16.02.01 - Verify that branding suggestion will be generated successfully for a valid website URL.",
                function () {
                        
                    // Navigate to Console Page.
                    cy.visit(EnvironmentConfig.getConsoleAccessURL()
                    + TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant())
                    + ProductConfig.getAppConsoleConfig().routes.default);
    
                    BrandingPage.getBrandingSidePanelBtn().click();
                    BrandingAIPage.getBrandingAIActionButton().click();
                    BrandingAIPage.getBrandingAIInput().should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
                    // Enters an invalid website URL.
                    BrandingAIPage.getBrandingAIInput().type("https://www.wso2.com");
                    // To prevent submitting the form before doing the UI validations.
                    cy.wait(500);
                    BrandingAIPage.getBrandingAIInput().type(CypressKeywords.PRESS_ENTER_KEY);
                    
                    // Validate whether the loading screen appears within 5 seconds.
                    BrandingAIPage.getBrandingAIAnimation(5000).should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);

                    // Start listening to a specific API endpoint
                    cy.intercept(RequestMethodTypes.GET, EnvironmentConfig.getServerOrigin() + 
                        TestE2EConfigUtils.getTenantedPath(EnvironmentConfig.getTenant()) + 
                        AsgardeoEndPointsConstants.BRANDING_PREFERENCE_ENDPOINT + "/result/*").as("apiCheck");

                    /*    
                    Validate whether the loading screen disappears within 90 seconds.
                    AI response time is 90 seconds. If the AI couldn't respond within 90 seconds,
                    it will throw an error. That's why we set the timeout to 90 seconds.
                    */
                    BrandingAIPage.getBrandingAIAnimation(90000).should(CypressKeywords.ASSERTION_TO_NOT_EXIST);

                    cy.log("API request intercepted.");
                    cy.wait("@apiCheck").then((interception) => {
                        // Assert the status of the response
                        expect(interception.response.statusCode).to.eq(200);
                        // Convert the response body to a string
                        const responseBodyString = JSON.stringify(interception.response.body);
                        // Assert that the response body contains 'activeTheme'
                        expect(responseBodyString).to.contain("activeTheme");
                    });
                })
            );

        /**
         * Clear all test input data after executing all test cases.
         * 1. Skip execution of remaining tests if any test case fails.
         */
        after(() => {

            // Clear all session before test start.
            Cypress.session.clearAllSavedSessions();

            // Set skip test.
            EnvironmentConfig.setSkipTest(false);
        });
});
