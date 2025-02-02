/**
 * Copyright 2024 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

// Locators
const HEADING_CHECK_YOUR_EMAIL = "[data-testid=password-recovery-support-message]";

export class PasswordResetSuccessPage {

    /**
     * This function returns the header element.
     * @returns The header element
     */
    public static getCheckYourEmailHeader(): Cypress.Chainable {
        
        return cy.get(HEADING_CHECK_YOUR_EMAIL);
    }
}
