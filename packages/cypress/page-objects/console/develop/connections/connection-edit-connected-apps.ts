/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core/constants";

// Locators - Connected Apps Edit Page
const EMPTY_PLACEHOLDER_TITLE: string = "[data-testid=\"empty-placeholder-sub-header-line-0\"]";  
const ROW_ELEMENT: string = "[data-testid=\"data-table-row\"]";
const FIRST_ROW_HEADER_NAME: string = "[data-testid=\"data-table-row\"] > :nth-child(1) > .header > .content";
const TABLE_CONNECTED_APPLICATIONS: string = "[data-componentid=\"idp-edit-page-connected-apps-settings-data-table\"]";
const SEARCH_BOX: string = ".left > " + HTMLKeyWordsConstants.INPUT_FIELD;

/**
 * Class containing Asgardeo Console IDP Edit Page, Connected Apps Tab Objects
 * Console -> Develop -> Connections -> <identity-provider> -> Connected Apps
 */
export class ConnectionsConnectedAppsPage {

    /**
     * Get the emptyplaceholder title 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmptyPlaceholder(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(EMPTY_PLACEHOLDER_TITLE);
    }

    /**
     * Get the row element 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRowElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(ROW_ELEMENT);
    }

    /**
     * Get the row header title 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getFirstRowHeaderName(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(FIRST_ROW_HEADER_NAME);
    }   

    /**
     * Get the row header title 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSearchBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(SEARCH_BOX);
    }
    
    /**
     * Get the clickable row corresponding to the group name in the table which lists existing applications
     * @param {string} appName - application name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnRowOfConnectedApplicationsTable(appName: string): Cypress.Chainable<JQuery<HTMLTableRowElement>> {
        
        return cy.get(TABLE_CONNECTED_APPLICATIONS).contains(HTMLKeyWordsConstants.HTML_TABLE_ROW, appName);
    }

}
