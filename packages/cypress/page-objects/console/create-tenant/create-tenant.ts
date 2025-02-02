/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="Cypress" />

// PAGE LOCATORS
const CREATE_NEW_ORG_HEADING = "[data-componentid=\"heading\"]",
    ORG_NAME_INPUT = "[data-testid=\"create-tenant-page-type-input\"] > input",
    CREATE_ORG_BUTTON = "[data-testid=\"create-tenant-page-create-button\"]";

/**
 * Class containing asgardeo console create tenant page elements.
 */
export class CreateTenantPage {

    /**
     * This function returns the create tenant toggle button element
     * @returns The element with the id of "sms-otp-toggle-button"
     */
    public static getCreateNewOrgHeading(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CREATE_NEW_ORG_HEADING);
    }

    /**
     * This function returns the create tenant toggle button element
     * @returns The element with the id of "sms-otp-toggle-button"
     */
    public static getOrgNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ORG_NAME_INPUT);
    }

    /**
     * This function returns the create tenant toggle button element
     * @returns The element with the id of "sms-otp-toggle-button"
     */
    public static getOrgCreateButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CREATE_ORG_BUTTON);
    }

}
