/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.com)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

// Locators.
const ACTIVE_SESSIONS_TABLE = "[id=\"session-details\"]",
    MASTER_CHECKBOX = "[id=\"masterCheckbox\"]",
    TERMINATE_AND_PROCEED_BUTTON = "[id=\"terminateActiveSessionsAction\"]",
    CANCEL_BUTTON = "[id=\"denyLimitActiveSessionsAction\"]";

export class MultipleSessionsPage {

    /**
     * This function returns a Cypress chainable object that represents the active sessions table
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getActiveSessionsTable() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(ACTIVE_SESSIONS_TABLE);
    }

    /**
     * This function returns a Cypress chainable object that represents the master checkbox
     * in the active sessions table.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getMasterCheckbox() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(MASTER_CHECKBOX);
    }

    /**
     * This function returns a Cypress chainable object that represents the button for
     * terminating selected active sessions and proceeding.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getTerminateAndProceedBtn() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(TERMINATE_AND_PROCEED_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object that represents the button for
     * cancelling the authentication
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getCancelBtn() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(CANCEL_BUTTON);
    }
}
