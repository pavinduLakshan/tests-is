/**
 * Copyright (c) 2021, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

const LOADER_DATA_ATTR: string = "#dimmer";
const INVITED_TENANT_NAME_CONTAINER_DATA_ATTR: string = "#tenant-Domain";
const INVITED_ADMIN_EMAIL_CONTAINER_DATA_ATTR: string = "#email-label";
const NEW_PASSWORD_INPUT_DATA_ATTR: string = "#password";
const INVALID_PASSWORD_VALIDATION_MESSAGE_DATA_ATTR: string = "#error-msg-invalid-email";
const SIGN_UP_BUTTON_DATA_ATTR: string = "#submit";

/**
 * Class containing invited admin register page objects.
 */
export class InvitedAdminRegistrationPage {

    /**
     * Get the pre-loader element.
     * @param {Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>} options - Options.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getLoader(options?: Partial<Cypress.Loggable & Cypress.Timeoutable
        & Cypress.Withinable & Cypress.Shadow>): Cypress.Chainable<JQuery<Element>> {

        return cy.get(LOADER_DATA_ATTR, options);
    }

    /**
     * Get the invited tenant name container.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getInvitedTenant(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(INVITED_TENANT_NAME_CONTAINER_DATA_ATTR);
    }

    /**
     * Get the invited admins name container.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getInvitedAdmin(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(INVITED_ADMIN_EMAIL_CONTAINER_DATA_ATTR);
    }

    /**
     * Get the new password input field.
     * @param {Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>} options - Options.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getNewPasswordInput(options?: Partial<Cypress.Loggable & Cypress.Timeoutable
        & Cypress.Withinable & Cypress.Shadow>): Cypress.Chainable<JQuery<Element>> {

        return cy.get(NEW_PASSWORD_INPUT_DATA_ATTR, options);
    }

    /**
     * Get the invalid password validation message.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getInvalidPasswordValidationMessage(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(INVALID_PASSWORD_VALIDATION_MESSAGE_DATA_ATTR);
    }

    /**
     * Get the sign up button.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getSignUpButton(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(SIGN_UP_BUTTON_DATA_ATTR);
    }
}
