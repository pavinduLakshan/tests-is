/**
 * Copyright 2021 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

//Locators
const LBL_LOGIN_PAGE_HEADER = "h1",
    BTN_LOGIN = "button[class=\"btn primary\"]",
    LBL_SUB_HEADER = "h3",
    LBL_DESCRIPTION = "ta",
    BTN_LOGOUT = "button[class=\"btn primary\"]";

export class SAMLSampleApp{

    /**
     * Get login button
     * @returns Cypress
     */
    public getLoginBtn(): Cypress.Chainable { 

        return cy.get(BTN_LOGIN, { timeout: 10000 });
    }

    /**
     * Get sub header after log in to the application
     * @returns Cypress
     */
    public getSubHedaer(): Cypress.Chainable {

        return cy.get(LBL_SUB_HEADER, { timeout: 10000 });
    }

    /**
     * Get description after log in to the application
     * @returns Cypress
     */
    public getDescription(): Cypress.Chainable {

        return cy.get(LBL_DESCRIPTION, { timeout: 10000 });
    }

    /**
     * Get logout button
     * @returns Cypress
     */
    public getLogOutBtn():Cypress.Chainable {

        return cy.get(BTN_LOGOUT, { timeout: 10000 });
    }
}
