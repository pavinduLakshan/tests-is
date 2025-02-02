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
    DROPDOWN_ITEM_MANAGE_USERS_TEXT = "Manage Users",
    DROPDOWN_ITEM_ROLE_MANAGEMENT_TEXT = "Role Management",
    DROPDOWN_ITEM_IDENTITY_PROVIDERS_TEXT = "Identity Providers",
    DROPDOWN_ITEM_SETTINGS_TEXT = "Settings";

export class B2BAdminAppLandingPage {

    /**
     * This function returns the manage users button.
     * @returns The element that contains the text "Manage Users".
     */
    public static getManageUsersButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIDE_PANEL_MENU_ITEM).contains(DROPDOWN_ITEM_MANAGE_USERS_TEXT);
    }

    /**
     * This function returns the role management button.
     * @returns The element that contains the text "Role Management".
     */
    public static getRoleManagementButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIDE_PANEL_MENU_ITEM).contains(DROPDOWN_ITEM_ROLE_MANAGEMENT_TEXT);
    }

    /**
     * This function returns the identity providers button.
     * @returns The element that contains the text "Identity Providers".
     */
    public static getIdentityProviders(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIDE_PANEL_MENU_ITEM).contains(DROPDOWN_ITEM_IDENTITY_PROVIDERS_TEXT);
    }

    /**
     * This function returns the settings button.
     * @returns The element that contains the text "Settings"
     */
    public static getSettingsButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(DROPDOWN_ITEM_SETTINGS_TEXT);
    }

    /**
     * This function returns the sample app sign out button.
     * @returns The sign out button.
     */
    public static getSignOutButton(): Cypress.Chainable<JQuery<HTMLElement>> {

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
