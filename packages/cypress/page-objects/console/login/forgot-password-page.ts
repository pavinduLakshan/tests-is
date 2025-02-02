/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

//Locators
const FORM_RECOVERY = "#recoverDetailsForm";
const INPUT_USERNAME = "#usernameUserInput";
const BUTTON_RECOVERY_SUBMIT = "#recoverySubmit";
const BTN_FORGET_PASSWORD = "[data-testid=login-page-password-recovery-button]";
const TXT_RESET_PASSWORD ="input[id=\"reset-password\"]";
const TXT_RESET_PASSWORD_CONFIRM = "input[id=\"reset-password2\"]";
const HEADER_PORTAL_TENANTED = "[data-testid=password-recovery-notify-page-header]";
const PASSWORD_RESET_COMPLETE_PAGE_HEADER = "[data-testid=password-reset-complete-page-header]";
const BTN_SUBMIT = "button[id=\"submit\"]";
const RADIO_SECTION_RECOVERY_OPTION = "[data-testid=password-recovery-page-multi-option-radio]";
const RADIO_BUTTON_EMAIL_LINK_RECOVERY_OPTION = "input[name=\"recoveryOption\"][value=\"EMAIL\"]";
const RADIO_BUTTON_SMS_OTP_RECOVERY_OPTION = "input[name=\"recoveryOption\"][value=\"SMSOTP\"]";

export class ForgotPasswordPage {

    /**
     * This function returns the input username element
     * @returns The input field with the id of username
     */
    public static getInputUsername(): Cypress.Chainable {

        return cy.get(INPUT_USERNAME);   
    }

    /**
     * This function returns the form recovery element
     * @returns The form element with the id of "form-recovery"
     */
    public static getFormRecovery(): Cypress.Chainable {

        return cy.get(FORM_RECOVERY);    
    }

    /**
     * This function returns the button element that is used to submit the recovery form
     * @returns The button element with the id of "recovery-submit"
     */
    public static getButtonRecoverySubmit(): Cypress.Chainable {

        return cy.get(BUTTON_RECOVERY_SUBMIT);   
    }

    /**
     * This function returns the "Forgot Password" button
     * @returns The element with the id of "btn-forgot-password"
     */
    public static getForgotPasswordBtn(): Cypress.Chainable {

        return cy.get(BTN_FORGET_PASSWORD);  
    }

    /**
     * This function returns the reset password input
     */
    public static getResetPasswordInput(): Cypress.Chainable {

        return cy.get(TXT_RESET_PASSWORD);
    }

    /**
    * This function returns the reset password confirm input 
    */
    public static getResetPasswordConfirmInput(): Cypress.Chainable {

        return cy.get(TXT_RESET_PASSWORD_CONFIRM);
    }

    /**
    * This function returns the reset password submit button
    */
    public static getResetPasswordSubmit(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUBMIT);
    }

    /**
     * This function returns the password header.
     */
    public static getHeaderPortalTenanted(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HEADER_PORTAL_TENANTED);
    }

    /**
     * This function return the password header portal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getHeaderPortalResetComplete(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_RESET_COMPLETE_PAGE_HEADER);
    }

    /**
     * This function return the radion button section to select recovery option.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRecoveryOptionRadioSection(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_SECTION_RECOVERY_OPTION);
    }

    /**
     * This function return the radion button for email link recovery option.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRecoveryEmailLinkOptionRadio(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_BUTTON_EMAIL_LINK_RECOVERY_OPTION);
    }

    /**
     * This function return the radion button for SMS OTP recovery option.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRecoverySmsOtpOptionRadio(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_BUTTON_SMS_OTP_RECOVERY_OPTION);
    }



}
