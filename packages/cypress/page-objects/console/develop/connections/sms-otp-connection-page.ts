/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="Cypress" />

// PAGE LOCATORS
    const SMS_OTP_SETUP_LINK = "[data-componentid=\"resource-grid-card-item-edit-button\"]",
        SMS_OTP_GRID_CARD_ACTION_CONTAINER = "[data-testid=\"idp-list-sms-otp-authenticator-action-container\"]",
        SMS_OTP_TOGGLE_BUTTON = "[data-componentid=\"sms-otp-enable-toggle\"]",
        SMS_OTP_TOGGLE_INPUT = "input[class=\"hidden\"]",
        SMS_OTP_SETTINGS_UPDATE_BUTTON_ID = "[data-componentid=\"primary-button\"]",
        SMS_OTP_SETTINGS_UPDATE_BUTTON_CONTAIN = "Update",
        SMS_OTP_CHOOSE_APPLICATION_LINK = "[data-componentid=\"link\"]",
        SMS_OTP_APPLICATION_SELECTION_LIST_MODEL = "[data-testid=\"sms-otp-authenticator-quick-start-"
            + "application-selection-modal-list-item-heading\"]",
        SMS_OTP_SELECTED_APPLICATION_DIV_CONTENT = "div.content",
        SMS_OTP_EXPIRY_TIME_INPUT = "input[name=\"SmsOTP_ExpiryTime\"]",
        SMS_OTP_LENGTH_INPUT = "input[name=\"SmsOTP_OTPLength\"]",
        SMS_OTP_ERROR_ALERT = "[data-testid=\"alert-error-body\"]";

/**
 * Class containing asgardeo console sms otp page elements.
 * Console -> Develop -> Connections > SMS OTP
 */
export class SmsOtpConnectionPage {

    public static readonly SMS_OTP_RESOURCE_TAB: string = "[data-testid=\"multi-factor-authenticator-" +
        "edit-resource-tabs\"]";

    /**
     * This function returns the SMS OTP Setup Link element
     * @returns The element that matches the selector.
     */
    public static getSmsOtpSetupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_GRID_CARD_ACTION_CONTAINER).find(SMS_OTP_SETUP_LINK);
    }

    /**
     * This function returns the SMS OTP toggle button element
     * @returns The element with the id of "sms-otp-toggle-button"
     */
    public static getSmsOtpToggle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_TOGGLE_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object that represents the SMS OTP toggle input element
     * @returns The element with the id of "sms-otp-toggle-input"
     */
    public static getSmsOtpToggleInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_TOGGLE_INPUT);
    }

    /**
     * This function returns the element with the id "update-sms-otp-settings-button"
     * @returns The element with the id of "sms-otp-settings-update-button"
     */
    public static getSmsOtpSettingsUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_SETTINGS_UPDATE_BUTTON_ID);
    }

   /**
    * This function returns the Cypress chainable object for the SMS OTP settings update button
    * container text.
    * @returns A Cypress.Chainable<JQuery<HTMLElement>> object representing the SMS OTP settings update
    * button containing text.
    */
    public static getSmsOtpSettingsUpdateButtonConatinText(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(SMS_OTP_SETTINGS_UPDATE_BUTTON_CONTAIN);
    }

    /**
     * This function returns a Cypress chainable object that represents the element with the id
     * "sms-otp-choose-application-link"
     * @returns A chainable object
     */
    public static getChooseApplicationLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_CHOOSE_APPLICATION_LINK);
    }

    /**
     * This function returns the element with the id "sms-otp-application-selection-list-model"
     * @returns The element with the id of "sms-otp-application-selection-list-model"
     */
    public static getSmsOtpApplicationSelectionListModel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_APPLICATION_SELECTION_LIST_MODEL);
    }

    /**
     * This function returns the element with the id `sms-otp-selected-application-div-content`
     * @returns The element with the id of "sms-otp-selected-application-div-content"
     */
    public static getSmsOtpSelectedAppDivContent(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_SELECTED_APPLICATION_DIV_CONTENT);
    }

    /**
     * This function returns the element with the id `smsOtpExpiryTimeInput`
     * @returns The element with the id "smsOtpExpiryTime"
     */
    public static getSmsOtpExpiryTimeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_EXPIRY_TIME_INPUT);
    }

    /**
     * This function returns the element with the id `smsOtpLengthInput`
     * @returns The element with the id of "sms-otp-length-input"
     */
    public static getSmsOtpLengthInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SMS_OTP_LENGTH_INPUT);
    }

    /**
     * This function returns the element with the id `smsOtpErrorAlert`
     * @returns The element with the id of "sms-otp-error-alert"
     */
    public static getSmsOtpErrorAlert(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(SMS_OTP_ERROR_ALERT, { timeout: 5000 });
    }

}
