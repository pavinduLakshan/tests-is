/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="Cypress" />

// Locators - Application Edit Page - Info Tab
const WRAPPER_SERVER_ENDPOINTS = 
    "[data-testid=\"applications-help-panel-oidc-configs-introspection-readonly-input-wrapper\"]";
const LABEL_SERVER_ENDPOINTS = "[data-testid=\"applications-help-panel-oidc-configs-introspection-label\"]";

/**
 * Class containing Asgardeo Console Application Edit Page - Info Tab Page Objects
 * Console -> Develop -> Applications -> <application> -> Info Tab
 */
export class ApplicationEditInfo {

    /**
     * Get the input field of the row corresponding to the server endpoint
     * @param {string} serverEndpoint - server endpoint
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getInputServerEndpoint(serverEndpoint: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LABEL_SERVER_ENDPOINTS).contains("label", serverEndpoint).parent().parent().siblings()
            .find(WRAPPER_SERVER_ENDPOINTS).find("input");                              
    }

    /**
     * Get the copy to clipboard button of the row corresponding to the server endpoint
     * @param {string} serverEndpoint - server endpoint
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getBtnCopyServerEndpoint(serverEndpoint: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LABEL_SERVER_ENDPOINTS).contains("label", serverEndpoint).parent().parent().siblings()
            .find(WRAPPER_SERVER_ENDPOINTS).find("button");                              
    }
}
