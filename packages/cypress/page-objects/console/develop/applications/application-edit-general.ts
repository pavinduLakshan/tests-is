/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="Cypress" />

// Locators - Application Edit Page - General Tab
const INPUT_APP_NAME = "[data-testid=\"application-edit-general-settings-form-application-name-input\"]";
const INPUT_APP_DESCRIPTION = 
    "[data-testid=\"application-edit-general-settings-form-application-description-textarea\"]";
const CHK_APP_DISCOVERABLE = 
    "[data-testid=\"application-edit-general-settings-form-application-discoverable-checkbox\"]";
const BTN_MY_ACCOUNT_LINK = "[data-testid=\"application-name-assertion\"]";
const INPUT_ACCESS_URL = "[data-testid=\"application-edit-general-settings-form-application-access-url-input\"]";
const APP_BRANDING_LINK = "[data-componentid=\"application-edit-general-settings-form-application-branding-link";
const BTN_UPDATE_GENERAL_SETTINGS = "[data-testid=\"application-edit-general-settings-form-submit-button\"]";
const BTN_DELETE_APP = "[data-testid=\"application-edit-general-settings-danger-zone-delete-button\"]";
const TOGGLE_DISABLE_APP = "[data-testid=\"application-edit-general-settings-danger-zone-disable-toggle\"]";
const TOGGLE_DISABLE_APP_INPUT = "input[class=\"hidden\"]";
const CHK_DELETE_APP_CONFIRMATION =
    "[data-testid=\"application-edit-general-settings-application-delete-confirmation-modal-assertion-checkbox\"]";
const BTN_CANCEL_DELETE_APP = 
    "[data-testid=\"application-edit-general-settings-application-delete-confirmation-modal-cancel-button\"]";
const BTN_CONFIRM_DELETE_APP = 
    "[data-testid=\"application-edit-general-settings-application-delete-confirmation-modal-confirm-button\"]";
const BTN_CONFIRM_DISABLE_APP =
    "[data-testid=\"application-edit-general-settings-application-disable-confirmation-modal-confirm-button\"]";

/**
 * Class containing Asgardeo Console Application Edit Page - General Tab Page Objects
 * Console -> Develop -> Applications -> <application> -> General Tab
 */
export class ApplicationEditGeneral {

    /**
     * Get the input field for the application name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getInputAppName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_APP_NAME).find("input");                          
    }  

    /**
     * Get the text area input field for the current group description
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getInputAppDescription(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_APP_DESCRIPTION);                          
    }  

    /**
     * Get the checkbox to set discoverability of application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getChkAppDiscoverable(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_APP_DISCOVERABLE).find("input");                          
    }

    /**
     * Get the clickable link for navigating to my account portal (in the info msg under app discoverable checkbox)
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getBtnMyAccountLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_MY_ACCOUNT_LINK);                          
    }  

    /**
     * Get the input field for the application access URL
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getInputAccessUrl(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ACCESS_URL).find("input");                          
    } 

    /**
     * Get the branding link for the application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getLinkAppBranding(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(APP_BRANDING_LINK);
    }

    /**
     * Get the update button for general settings
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getBtnUpdateGeneralSettings(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_GENERAL_SETTINGS);                          
    }

    /**
     * Get the delete application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getBtnDeleteApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DELETE_APP);                          
    }

    /**
     * Get the disable application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getToggleDisableApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOGGLE_DISABLE_APP);
    }

     /**
     * Get the disable application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDisableAppToggleInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOGGLE_DISABLE_APP_INPUT);
    }


    /**
     * Get the delete application confirmation checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public getChkDeleteAppConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_DELETE_APP_CONFIRMATION).find("input");                          
    }

    /**
     * Get the cancel delete application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getBtnCancelDeleteApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CANCEL_DELETE_APP);                          
    }  

    /**
     * Get the confirm delete application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getBtnConfirmDeleteApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_DELETE_APP);                          
    }

    /**
     * Get the confirm disable application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnConfirmDisableApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_DISABLE_APP);
    }
}
