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
    BTN_SIDE_PANEL_MENU_ITEM = "[class=\"rs-stack-item\"]",
    BTN_SIGN_OUT = "Sign Out",
    BTN_SIGN_OUT_CONFIRM = "[class=\"rs-btn rs-btn-primary rs-btn-lg\"]",
    BTN_SIGN_OUT_CONFIRM_TEXT = "Submit",
    SIDE_PANEL_ITEM_PROFILE_TEXT = "Profile";

export class B2BBusinessAppLandingPage {

    /**
     * This function returns the profile button.
     * @returns The element that contains the text "Profile".
     */
    public static getProfileButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIDE_PANEL_MENU_ITEM).contains(SIDE_PANEL_ITEM_PROFILE_TEXT);
    }

    /**
     * This function returns the sample app sign out button.
     * @returns The sign out button.
     */
    public static getSignOutButton(): Cypress.Chainable<undefined> {

        return cy.contains(BTN_SIGN_OUT);
    }

    /**
     * This function returns the sign out confirm button.
     * @returns The element that contains the text "Submit"
     */
    public static getSignOutConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIGN_OUT_CONFIRM).contains(BTN_SIGN_OUT_CONFIRM_TEXT);
    }
}
