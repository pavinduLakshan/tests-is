/**
 * Copyright (c) 2021, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

//Locators
const ENABLE_SELF_REGISTRATION_TOGGLE = "[data-testid=governance-connectors-edit-page-c2VsZi1zaWduLXVw-enable-toggle]",
    SELF_REGISTRATION_CONFIG_UPDATE_BTN = "[data-testid=self-registration-edit-form-submit-button]",
    UNCHECKED_TOGGLE_CLASS = "#recaptcha-anchor";

const USER_EMAIL_CONTAINER_DATA_ATTR : string = "#usernameUserInput";
const USER_ALPHA_USERNAME_CONTAINER_DATA_ATTR : string = "#alphanumericUsernameUserInput";
const USER_PASSWORD_CONTAINER_DATA_ATTR : string = "#passwordUserInput";
const SIGN_UP_BUTTON_DATA_ATTR : string = "#registrationSubmit";
const USER_FIRST_NAME_CONTAINER_DATA_ATTR : string = "#firstNameUserInput";
const USER_LAST_NAME_CONTAINER_DATA_ATTR : string = "#lastNameUserInput";
const USERNAME_ERROR_MSG : string = "#alphanumeric-username-error-msg-text";
const RECAPTCHA_CHECKBOX : string = ".rc-anchor-center-item rc-anchor-checkbox-holder";
const SUCCESS_PAGE_TITLE : string = "[data-testid=self-register-complete-page-header]";
const BTN_CONTINUE_WITH_EMAIL = "[data-testid=continue-with-email-button]";
const BTN_SIGN_UP_WITH_AUTHENTICATOR = "[data-testid=sign-up-with-";
const CHECKBOX_ENABLE_AUTO_LOGIN = "[data-componentid=self-registration-edit-form-enable-auto-login]";
const CHECKBOX_ENABLE_ACCOUNT_ACTIVATE_IMMEDIATELY = 
    "[data-testid=self-registration-edit-form-account-activate-immediately]";
const CHECKBOX_ENABLE_ACCOUNT_VERIFICATION = 
    "[data-testid=self-registration-edit-form-notify-account-confirmation]";
const CHECKBOX_ENABLE_ACCOUNT_VERIFICATION_INPUT = 
    "[data-testid=self-registration-edit-form-notify-account-confirmation] input[type='checkbox']";
const ALERT_BUTTON_CONTINUE = "[data-testid=confirmation-modal-confirm-button]";
const ACCOUNT_VERIFICATION_SUCCESS = "[data-testid=self-register-complete-page-header]";
const BTN_RESEND_CONFIRMATION_EMAIL = "[data-testid=login-page-resend-confirmation-email-link]";
const ORGANIZATION_CONTAINER_DATA_ATTR = "input[name=\"http://wso2.org/claims/attr_custom_local\"]";

//self registration enbale toggle button class status
const CHECKED_TOGGLE_BUTTON_CLASS = "ui checked toggle checkbox";
//self registration disable toggle button class status
const UNCHECKED_TOGGLE_BUTTON_CLASS = "ui toggle checkbox";

/**
 * Class contains user self-register page objects.
 */
 export class UserSelfRegistrationPage {

    // Get check class status of checkboxes.
    public static readonly CHECKED_CHECKBOX_BUTTON_CLASS = "ui checked checkbox";

    // Get uncheck class status of checkboxes.
    public static readonly UNCHECKED_CHECKBOX_BUTTON_CLASS = "ui checkbox";

    // Get disabled class status of checkboxes.
    public static readonly DISABLED_UNCHECKED_CHECKBOX_BUTTON_CLASS = "ui disabled checkbox";

    /**
     * To get enable Self Registration toggle.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEnableSelfRegistrationToggle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ENABLE_SELF_REGISTRATION_TOGGLE);
    }

    /**
     * To get update Self Registration configs button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELF_REGISTRATION_CONFIG_UPDATE_BTN);
    }

     /**
     * Get the email input field.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
      public static getNewEmailInput(): Cypress.Chainable<JQuery<Element>>  {

        return cy.get(USER_EMAIL_CONTAINER_DATA_ATTR);
    }

     /**
     * Get the alphanumeric username input field.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
      public static getAlphanumericUsernameInput(): Cypress.Chainable<JQuery<Element>>  {

        return cy.get(USER_ALPHA_USERNAME_CONTAINER_DATA_ATTR);
    }

    /**
     * Get the new password container.
     * @param {Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>} options - Options.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getNewPasswordInput(options?: Partial<Cypress.Loggable & Cypress.Timeoutable
        & Cypress.Withinable & Cypress.Shadow>): Cypress.Chainable<JQuery<Element>> {

        return cy.get(USER_PASSWORD_CONTAINER_DATA_ATTR, options);
    }

    /**
     * Get the first name input container.
     *@return {Cypress.Chainable<JQuery<Element>>}
     */
     public static getUserFirstNameInput(): Cypress.Chainable<JQuery<Element>>  {

        return cy.get(USER_FIRST_NAME_CONTAINER_DATA_ATTR);
    }

     /**
     * Get the last name input container.
     *@return {Cypress.Chainable<JQuery<Element>>}
     */
     public static getUserLastNameInput(): Cypress.Chainable<JQuery<Element>>  {

        return cy.get(USER_LAST_NAME_CONTAINER_DATA_ATTR);
    }

    /**
     * Get the sign up button.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getSignUpButton(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(SIGN_UP_BUTTON_DATA_ATTR);
    }

     /**
     * To enable Self Registration
     */
    public static enableSelfRegistration() {

        this.getEnableSelfRegistrationToggle().should("be.visible")
            .then(($config) => {
                if ($config.hasClass(UNCHECKED_TOGGLE_BUTTON_CLASS)) {
                    cy.wrap($config).click();
                }
            });
    }

    /**
     * To disable Self Registration
     */
    public static disableSelfRegistration() {

            this.getEnableSelfRegistrationToggle().should("be.visible")
                .then(($config) => {
                    if ($config.hasClass(CHECKED_TOGGLE_BUTTON_CLASS)) {
                        cy.wrap($config).click();
                    }
                });
    }

    /**
     * Get the success page title.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getSuccessPageHeader(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(SUCCESS_PAGE_TITLE);
    }

    /**
     * Get continue with email as the sign up option.
     */
    public static userClickContinueWithEmailBtn() :Cypress.Chainable<JQuery<Element>>  {
       return cy.get(BTN_CONTINUE_WITH_EMAIL);
    }

    /**
     * Get enterprise authenticator as the sign up option.
     */
    public static userClickOnAuthenticator(eidpData) : Cypress.Chainable<JQuery<Element>> {
         return cy.get(BTN_SIGN_UP_WITH_AUTHENTICATOR + eidpData.idpName + "]").click();
    }

    /**
     * Get Auto Login Checkbox element.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getAutoLoginCheckbox(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(CHECKBOX_ENABLE_AUTO_LOGIN);
    }

    /**
     * Get Account Verification Checkbox element.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getAccountVerificationCheckbox(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(CHECKBOX_ENABLE_ACCOUNT_VERIFICATION);
    }

    /**
     * Get Account verification checkbox input element.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getAccountVerificationCheckboxInput(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(CHECKBOX_ENABLE_ACCOUNT_VERIFICATION_INPUT);
    }

    /**
     * Get Account Activate Immediately Checkbox element.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getAccountActivateImmediatelyCheckbox(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(CHECKBOX_ENABLE_ACCOUNT_ACTIVATE_IMMEDIATELY);
    }

    /**
     * Get Account verification confirmation alert window.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getAccountVerificationAlertContinueButton(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(ALERT_BUTTON_CONTINUE);
    }
    
     /**
     * Get Account verification confirmation alert continue button locator.
     * Returns the data-testid to locate the alert continue button.
     * @returns {string}
     */
     public static getAccountVerificationAlertContinueButtonLocator(): string {

        return ALERT_BUTTON_CONTINUE;
    }

    /**
     * Get Resend account verification confirmation email button.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static getResendConfirmationEmailButton(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(BTN_RESEND_CONFIRMATION_EMAIL);
    }

     /**
     * Get Account verification success message.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
     public static getAccountVerificationSuccess(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(ACCOUNT_VERIFICATION_SUCCESS);
    }

    /**
     * It returns a Cypress chainable object that represents the custom attribute input element
     * @returns The element with the data-test-id attribute of organization-container
     */
    public static getCustomAttributeInput(): Cypress.Chainable<JQuery<Element>>  {

        return cy.get(ORGANIZATION_CONTAINER_DATA_ATTR);
    }

    /**
     * Returns the username error message element for self signup.
     */
    static getUsernameErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(USERNAME_ERROR_MSG);
    }
}
