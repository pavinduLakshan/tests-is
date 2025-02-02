/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

import { HTMLKeyWordsConstants } from "../../../constants";

//Locators
const MY_ACCOUNT_TOGGLE = "[data-testid=application-edit-danger-zone-disable-toggle]";
const BTN_CONFIRM = "[data-componentid=confirmation-modal-confirm-button]";
const MY_ACCOUNT_URL = "[data-testid=copy-input-wrapper]";
const EMAIL_OTP_CHECKBOX = "[data-testid=my-account-settings-edit-page-email-otp-toggle]";
const BACKUP_CODE_ENABLE_CHECKBOX = "[data-testid=my-account-settings-edit-page-backup-code-toggle]";
const TOTP_CHECKBOX = "[data-testid=my-account-settings-edit-page-totp-toggle]";
const TOTP_ENROLLMENT_CHECKBOX = "[data-testid=my-account-settings-edit-page-totp-enrollment-toggle]";
const UPDATE_BUTTON = "[data-testid=my-account-settings-edit-page-submit-button]";
const SMSOTP_CHECKBOX = "[data-testid=my-account-settings-edit-page-sms-otp-toggle]";

export class MyaccountConfig {

    //Get My Account enbale toggle button class status
    public static readonly CHECKED_TOGGLE_BUTTON_CLASS = "ui checked fitted toggle checkbox danger-zone toggle-switch";

    //Get My Account disable toggle button class status
    public static readonly UNCHECKED_TOGGLE_BUTTON_CLASS = "ui fitted toggle checkbox danger-zone toggle-switch";

    //Get 2FA option checked checkbox class status
    public static readonly CHECKED_CHECKBOX_CLASS = "ui checked checkbox";

    //Get 2FA option unchecked checkbox class status
    public static readonly UNCHECKED_CHECKBOX_CLASS = "ui checkbox";

    // Get My account login flow configuration tab
    public static readonly SIGN_IN_METHOD_TAB: string = "Login Flow";

    /**
     * Get My Account enbale/disable toggle button.
     */
    public static getMyAccountUpdateToggle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MY_ACCOUNT_TOGGLE);
    }

    /**
     * To get the My Account update confirm button.
     */
    public static getConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM);
    }
    
    /**
     * Get My Account url input.
     */
    public static getMyAccountURL(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MY_ACCOUNT_URL);
    }
    /**
     * Get the Email OTP option checkbox.
     */
     public static getEmailOtpCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_CHECKBOX);
    }

    /**
     * Get the TOTP option checkbox.
     */
     public static getTotpCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
 
        return cy.get(TOTP_CHECKBOX);
    }

    /**
     * Get the TOTP Enrollment option checkbox.
     */
    public static getTotpEnrollementCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
 
        return cy.get(TOTP_ENROLLMENT_CHECKBOX);
    }

    /**
     * Get the Backup Code Enable option checkbox.
     */
    public static getBackupCodeEnableCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
 
        return cy.get(BACKUP_CODE_ENABLE_CHECKBOX);
    }

    /**
     * Get the update configuration button.
     */
     public static getMyAccountConfigUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {
 
        return cy.get(UPDATE_BUTTON);
    }

    /**
     * Get the SMS OTP option checkbox.
     */
    public static getSMSOTPCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
 
        return cy.get(SMSOTP_CHECKBOX);
    }

    /**
     * 
     * @returns Get the default checkbox.
     */
    public static getCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HTMLKeyWordsConstants.HTML_INPUT_CHECKBOX);
    }

}

