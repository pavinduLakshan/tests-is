/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="Cypress" />

// Locators - Application Edit Page - Advanced Tab
const CHK_SKIP_LOGIN_CONSENT = 
    "[data-testid=\"application-edit-advanced-settings-form-skip-login-consent-checkbox\"]";
const CHK_SKIP_LOGOUT_CONSENT = 
    "[data-testid=\"application-edit-advanced-settings-form-skip-logout-consent-checkbox\"]";
const CHK_FIDO_TRUSTED_APP = 
    "[data-componentid=\"application-advanced-configurations-form-enable-fido-trusted-apps\"]";
const TRUSTED_APP_CONFIRMATION_MODAL =
    "[data-componentid=\"application-advanced-configurations-form-trusted-apps-confirmation-modal\"]";
const CHK_TRUSTED_APP_CONFIRMATION = "[data-componentid=" +
    "\"application-advanced-configurations-form-trusted-apps-confirmation-modal-assertion-checkbox\"]";
const BTN_CANCEL_TRUSTED_APP = 
    "[data-componentid=\"application-advanced-configurations-form-trusted-apps-confirmation-modal-cancel-button\"]";
const BTN_CONFIRM_TRUSTED_APP = 
    "[data-componentid=\"application-advanced-configurations-form-trusted-apps-confirmation-modal-confirm-button\"]";
const INPUT_ANDROID_PACKAGE_NAME = 
    "[data-componentid=\"application-advanced-configurations-form-platform-settings-android-package-name\"]";
const INPUT_ANDROID_THUMBPRINTS = 
    "[data-componentid=\"application-advanced-configurations-form-platform-settings-android-thumbprints\"]";
const INPUT_APPLE_AP_ID = 
    "[data-componentid=\"application-advanced-configurations-form-platform-settings-apple-app-id\"]";
const BTN_UPDATE_ADVANCED_SETTINGS = "[data-testid=\"application-edit-advanced-settings-form-submit-button\"]";

/**
 * Class containing Asgardeo Console Application Edit Page - Advanced Tab Page Objects
 * Console -> Develop -> Applications -> <application> -> Advanced Tab
 */
export class ApplicationEditAdvanced {

    /**
     * Get the checkbox for skip login consent
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getChkSkipLoginConsent(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_SKIP_LOGIN_CONSENT).find("input");                          
    }

    /**
     * Get the checkbox for skip logout consent
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public getChkSkipLogoutConsent(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_SKIP_LOGOUT_CONSENT).find("input");                          
    }

    /**
     * Get the checkbox to enable FIDO trusted app feature.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkFidoTrustedApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_FIDO_TRUSTED_APP);                        
    }

    /**
     * Get the confirmation prompt to enable trusted app feature.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTrustedAppConfirmationModal(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TRUSTED_APP_CONFIRMATION_MODAL);                          
    }

    /**
     * Get the trusted app confirmation checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkTrustedAppConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_TRUSTED_APP_CONFIRMATION).find("input");                          
    }

    /**
     * Get the trusted app confirmation cancel button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCancelTrustedApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CANCEL_TRUSTED_APP);                          
    }  

    /**
     * Get the trusted app confirm button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnConfirmTrustedApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_TRUSTED_APP);                          
    }

    /**
     * It returns a Cypress chainable object that represents the android package name input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAndroidPackageNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ANDROID_PACKAGE_NAME);
    }

    /**
     * It returns a Cypress chainable object that represents the android thumbprints input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAndroidThumbprintsInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ANDROID_THUMBPRINTS);
    }

    /**
     * It returns a Cypress chainable object that represents the apple app ID input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAppleAppIdInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_APPLE_AP_ID);
    }
    
    /**
     * Get the update advanced settings button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnUpdateAdvancedSettings(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_ADVANCED_SETTINGS);                             
    }
}
