/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="Cypress" />

// LOGIN LOCATORS
const USERNAME_INPUT = "#usernameUserInput",
    PASSWORD_INPUT = "[data-testid='login-page-password-input']",
    SIGNIN_BUTTON = "[data-testid='login-page-continue-login-button']",
    BTN_SIGNIN = "login-page-continue-login-button",
    LBL_LOGIN_ERROR = "login-page-error-message",
    LNK_PRIVACY_POLICY = "Privacy Policy",
    LNK_TERMS_OF_SERVICES = "Terms of Service";
    
// LOGOUT LOCATORS
const HEADER_AVATAR_ICON_CONTAINER = "[data-testid='app-header-user-avatar']",
    LOGOUT_BUTTON = "Logout";
      
export class MyAccountLandingPage {

    /**
     * This function returns the username input field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUsernameInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERNAME_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the password input field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPasswordInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_INPUT);
    }

   /**
    * This function returns the sign in button element
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getSigInBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNIN_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the element with the data-test-id
     * attribute value of "btn-signin"
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSignInBtn(): Cypress.Chainable<Element> {

        return cy.dataTestId(BTN_SIGNIN);
    }

    /**
     * This function returns the login error field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getLoginErrorFiled(): Cypress.Chainable<Element> {

        return cy.dataTestId(LBL_LOGIN_ERROR);
    }

    /**
     * This function returns the privacy policy link
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPrivacyPolicyLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_PRIVACY_POLICY);
    }

    /**
     * This function returns a cypress chainable object that represents the Terms of Service link on
     * the page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getToSLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_TERMS_OF_SERVICES);
    }

    /**
     * This function returns the logout button element
     * @returns {Cypress.Chainable<Element>}
     */
    public static getLogoutBtn(): Cypress.Chainable<undefined> {

        return cy.contains(LOGOUT_BUTTON);
    }

    /**
     * This function returns the avatar icon element in the header
     * @returns The element with the selector HEADER_AVATAR_ICON
     */
    public static getMyAccountAvatarIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HEADER_AVATAR_ICON_CONTAINER, { timeout: 60000 }).first();
    }
}
