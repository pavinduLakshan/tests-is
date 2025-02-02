/**
 * Copyright 2022-2025 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import {
    CypressKeywords,
    HTMLKeyWordsConstants
} from "../../../constants";

/**
 * Define the ValueOf type.
 */
type ValueOf<T> = T[keyof T];

const BTN_UPDATE_USER_PROFILE = "[data-testid=user-mgt-user-profile-form-update-button]",
    LOCK_USER_TOGGLE_BUTTON = "[data-testid=user-mgt-user-profile-danger-zone-toggle]",
    LOCK_USER_TOGGLE_INPUT = "input[class=\"hidden\"]",
    USER_PROFILE_FORM = "[data-testid=\"user-mgt-user-profile-form\"]",

    // Reset user password flows attributes.
    RESET_PASSWORD_BUTTON = "[data-testid=user-mgt-user-profile-change-password-delete-button]",
    RADIO_BTN_SET_TEMPORARY_PASSWORD = "[data-testid=user-mgt-add-user-form-passwordOption-radio-button]",
    BTN_CONFIRM_PASSWORD_RESET = "[data-testid=user-mgt-change-password-save-button]",
    ALERT_PASSWORD_RESET_SUCCESS = "[data-testid=alert-success-message]",
    EMAIL_ADDRESSES_FIELD = "[data-testid=user-mgt-user-profile-profile-form-emailAddresses-input]",
    EMAIL_ADDRESSES_FIELD_PREFIX = "user-mgt-user-profile-profile-form-emailAddresses",
    MOBILE_NUMBERS_FIELD = "[data-testid=user-mgt-user-profile-profile-form-mobileNumbers-input]",
    MOBILE_NUMBERS_FIELD_PREFIX = "user-mgt-user-profile-profile-form-mobileNumbers",
    DELETE_CONFIRMATION_MODAL_CHECK_BOX =
        "[data-componentid=\"user-mgt-user-profile-confirmation-modal-assertion-checkbox\"]",
    DELETE_CONFIRMATION_MODAL_CONFIRM_BUTTON =
        "[data-componentid=\"user-mgt-user-profile-confirmation-modal-confirm-button\"]";


/* It contains functions that return Cypress chainable objects that represent elements on the User
profile page */

export class UserProfilePage {

    public static readonly MULTI_VALUED_FIELD_ROW_BUTTONS = {
        DELETE: "delete",
        MAKE_PRIMARY: "make-primary",
        VERIFY: "verify"
    };

    public static readonly MULTI_VALUED_FIELD_ROW_ICONS = {
        PENDING_EMAIL: "pending-email",
        PRIMARY: "primary-icon",
        VERIFIED: "verified-icon"
    }

    /**
     * This function returns the reset password button in danger zone.
     * @returns The element with the id of  reset password button
     */
    public static getResetPasswordButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RESET_PASSWORD_BUTTON);
    }

    /**
     * This function returns the update button.
     * @returns The element with the id of update button
     */
    public static updateUserDetails(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_USER_PROFILE);
    }

    /**
     * This function returns the password reset methods radio buttons.
     * @returns The element with the id of radio buttons
     */
    public static clickSelectNewPassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_BTN_SET_TEMPORARY_PASSWORD);
    }

    /**
     * This function returns the reset password button in password reset wizard.
     * @returns The element with the id of  reset password button
     */
    public static getResetPasswordConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_PASSWORD_RESET);
    }

    /**
     * This function returns the reset password button in password reset wizard.
     * @returns The element with the id of  reset password button
     */
    public static getSuccessAlertMessage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_PASSWORD_RESET_SUCCESS);
    }

    /**
     * This function returns the lock user toggle button.
     * @returns The element with the id of toggle button
     */
    public static getLockUserToggle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOCK_USER_TOGGLE_BUTTON);
    }

    /**
     * Get the lock user toggle input field.
     * @returns @returns The element with the id of toggle input field.
     */
    public static getLockUserToggleInput(): Cypress.Chainable<JQuery<HTMLElement>> {

         return cy.get(LOCK_USER_TOGGLE_INPUT);
    }

    /**
     * This function returns the user profile form.
     * @returns The element with the id of user profile form
     */
    public static getUserProfileForm(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_PROFILE_FORM);
    }

    /**
     * Get the email addresses input field.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFiledInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_ADDRESSES_FIELD).find(HTMLKeyWordsConstants.INPUT_FIELD);
    }

    /**
     * Get the email addresses add button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFieldAddButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_ADDRESSES_FIELD).find(HTMLKeyWordsConstants.HTML_BUTTON);
    }

    /**
     * This function returns the given button type in a given row.
     * @param buttonType Email Addresses field - row button type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFieldRowButton(
        buttonType: ValueOf<typeof UserProfilePage.MULTI_VALUED_FIELD_ROW_BUTTONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${EMAIL_ADDRESSES_FIELD_PREFIX}-${buttonType}-button-${index}"]`)
            .scrollIntoView();
    }

    /**
     * This function returns the given icon type in a given row.
     * @param iconType Email Addresses field - row icon type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFieldRowIcon(
        iconType: ValueOf<typeof UserProfilePage.MULTI_VALUED_FIELD_ROW_ICONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${EMAIL_ADDRESSES_FIELD_PREFIX}-${iconType}-${index}"]`);
    }

    /**
     * This function returns the value of the mobile number in the given index.
     * @param index Index of the mobile number
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFieldRowValue(index: number): Cypress.Chainable<string> {

        return cy.get(`[data-componentid="${EMAIL_ADDRESSES_FIELD_PREFIX}-value-${index}"]`)
            .invoke("text")
            .then((text) => text.trim());
    }

    /**
     * Get the mobile numbers input field.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFiledInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_NUMBERS_FIELD).find(HTMLKeyWordsConstants.INPUT_FIELD);
    }

    /**
     * Get the mobile numbers add button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldAddButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_NUMBERS_FIELD).find(HTMLKeyWordsConstants.HTML_BUTTON);
    }

    /**
     * This function returns the given button type in a given row.
     * @param buttonType Mobile numbers field - row button type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldRowButton(
        buttonType: ValueOf<typeof UserProfilePage.MULTI_VALUED_FIELD_ROW_BUTTONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${MOBILE_NUMBERS_FIELD_PREFIX}-${buttonType}-button-${index}"]`)
            .scrollIntoView();
    }

    /**
     * This function returns the given icon type in a given row.
     * @param iconType Mobile numbers field - row icon type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldRowIcon(
        iconType: ValueOf<typeof UserProfilePage.MULTI_VALUED_FIELD_ROW_ICONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${MOBILE_NUMBERS_FIELD_PREFIX}-${iconType}-${index}"]`);
    }

    /**
     * This function returns the value of the mobile number in the given index.
     * @param index Index of the mobile number
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldRowValue(index: number): Cypress.Chainable<string> {

        return cy.get(`[data-componentid="${MOBILE_NUMBERS_FIELD_PREFIX}-value-${index}"]`)
            .invoke("text")
            .then((text) => text.trim());
    }

    /**
     * This function confirms the delete confirmation.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static confirmDeleteConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

        cy.get(DELETE_CONFIRMATION_MODAL_CHECK_BOX).should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
            .find(HTMLKeyWordsConstants.HTML_INPUT).click({ force: true });
        return cy.get(DELETE_CONFIRMATION_MODAL_CONFIRM_BUTTON).should(CypressKeywords.ASSERTION_TO_BE_VISIBLE)
            .click({ force: true });
    }
}
