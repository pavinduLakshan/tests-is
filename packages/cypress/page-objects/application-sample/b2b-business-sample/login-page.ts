/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="Cypress" />

// PAGE LOCATORS
const
    LOGIN_BUTTON_TEXT = "Sign In",
    SIGN_IN_BUTTON_TEXT = "Sign in with WSO2IS",
    SIGN_IN_BUTTON = "button[class=\"button\"]";

export class B2BBusinessAppLoginPage {

    /**
     * This function returns the text of the login button on the sample app login page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Sign In"
     */
    public static getLoginButtonTxt(): Cypress.Chainable<undefined> {

        return cy.contains(LOGIN_BUTTON_TEXT);
    }

    /**
     * This function returns the text of the sign in button on the sample app sign in page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Sign in with WSO2IS"
     */
    public static getSignInButtonTxt(): Cypress.Chainable<undefined> {

        return cy.contains(SIGN_IN_BUTTON_TEXT);
    }

    /**
     * This function returns the sign in button on the sample app sign in page.
     * @returns The sign in button
     */
    public static getSignInButton(): string {

        return SIGN_IN_BUTTON;
    }
}
