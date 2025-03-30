/*
 *   Copyright (c) 2022-2025 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */


import { CypressKeywords } from "../../constants/cypress-keywords";
import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core";

// <reference types="cypress" />

/**
 * Define the ValueOf type.
 */
type ValueOf<T> = T[keyof T];

//Locators
const PERSONAL_INFO_HEADER_TXT = "[data-testid=\"page-layout-page-header-title\"]",

    // Profile Locator,
    FIRST_NAME_INPUT = "input[name=\"name.givenName\"]",
    FIRST_NAME_EDIT_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-name-givenName-edit-button\"]",
    FIRST_NAME_SAVE_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-name-givenName-save-button\"]",
    LAST_NAME_INPUT = "input[name=\"name.familyName\"]",
    LAST_NAME_EDIT_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-name-familyName-edit-button\"]",
    LAST_NAME_SAVE_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-name-familyName-save-button\"]",
    MOBILE_INPUT = "input[name=\"phoneNumbers.mobile\"]",
    MOBILE_SAVE_BUTTON
        = "[data-testid=\"profile-schema-mobile-editing-section-phoneNumbers-mobile-save-button\"]",
    MOBILE_PLACEHOLDER_EDIT_BUTTON
        = "[data-testid=\"profile-schema-mobile-editing-section-phoneNumbers-mobile-placeholder\"]",
    MOBILE_PENCIL_EDIT_BUTTON
        = "[data-testid=\"profile-schema-mobile-editing-section-phoneNumbers-mobile-edit-button\"]",
    COUNTRY_INPUT_LABEL = "Country",
    COUNTRY_ITEM = "[data-testid=\"profile-Sri Lanka\"]",
    COUNTRY_PLACEHOLDER_EDIT_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-country-placeholder\"]",
    COUNTRY_PENCIL_EDIT_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-country-edit-button\"]",
    COUNTRY_SAVE_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-country-save-button\"]",
    GIVEN_NAME_PLACEHOLDER = "[data-testid=\"profile-schema-mobile-editing-section-name-givenName-placeholder\"]",
    PROFILE_PICTURE_EDIT_BUTTON = "svg[id=\"camera-icon\"]",
    GRAVITA_PROFILE_PICTURE_OPTION_INPUT = "input[value=\"GRAVATAR\"]",
    PROFILE_PICTURE_ITEM = "[data-componentid=\"selection-card\"]",
    EMAIL_INPUT = "TO_BE_ADDED",
    EMAIL_EDIT_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-emails-edit-button\"]",
    EMAIL_SAVE_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-emails-save-button\"]",
    SAVE_BUTTON = "Save",
    MOBILE_NUMBERS_PLACEHOLDER_EDIT_BUTTON =
        "[data-testid=\"profile-schema-mobile-editing-section-mobileNumbers-placeholder\"]",
    MOBILE_NUMBERS_PENCIL_EDIT_BUTTON
        = "[data-testid=\"profile-schema-mobile-editing-section-mobileNumbers-edit-button\"]",
    MOBILE_NUMBERS_INPUT = "input[name=\"mobileNumbers\"]",
    MOBILE_NUMBERS_FIELD = "[data-componentid=\"profile-editing-section-mobileNumbers-field\"]",
    MOBILE_NUMBER_ROW_BUTTON_PREFIX = "profile-editing-section-mobileNumbers",
    MOBILE_NUMBER_ROW_ICON_PREFIX = "profile-editing-section-mobileNumbers",
    MOBILE_NUMBERS_ROW_VALUE_PREFIX = "profile-editing-section-mobileNumbers-value",
    MOBILE_NUMBERS_READ_ONLY_DROPDOWN = "[data-componentid=\"profile-mobileNumbers-read-only-dropdown\"]",
    DELETE_CONFIRMATION_MODAL_CHECK_BOX = "[data-componentid=\"profile-delete-confirmation-modal-assertion-checkbox\"]",
    DELETE_CONFIRMATION_MODAL_CONFIRM_BUTTON =
        "[data-componentid=\"profile-delete-confirmation-modal-confirm-button\"]",
    MOBILE_NUMBERS_FIELD_CANCEL_BUTTON =
        "[data-testid=\"profile-schema-mobile-editing-section-mobileNumbers-cancel-button\"]",
    MOBILE_NUMBERS_VERIFICATION_CODE_INPUT = "input[name=\"code\"]",
    MOBILE_VERIFICATION_MODAL_RESEND_BUTTON = "[data-testid=\"profile-mobile-verification-wizard-resend-button\"]",
    MOBILE_VERIFICATION_MODAL_VERIFY_BUTTON =
        "[data-testid=\"profile-mobile-verification-wizard-modal-actions-primary-button\"]",
    EMAIL_ADDRESSES_PLACEHOLDER_EDIT_BUTTON =
        "[data-testid=\"profile-schema-mobile-editing-section-emailAddresses-placeholder\"]",
    EMAIL_ADDRESSES_PENCIL_EDIT_BUTTON
        = "[data-testid=\"profile-schema-mobile-editing-section-emailAddresses-edit-button\"]",
    EMAIL_ADDRESSES_INPUT = "input[name=\"emailAddresses\"]",
    EMAIL_ADDRESSES_FIELD = "[data-componentid=\"profile-editing-section-emailAddresses-field\"]",
    EMAIL_ADDRESS_ROW_BUTTON_PREFIX = "profile-editing-section-emailAddresses",
    EMAIL_ADDRESS_ROW_ICON_PREFIX = "profile-editing-section-emailAddresses",
    EMAIL_ADDRESSES_ROW_VALUE_PREFIX = "profile-editing-section-emailAddresses-value",
    EMAIL_ADDRESSES_READ_ONLY_DROPDOWN = "[data-componentid=\"profile-emailAddresses-read-only-dropdown\"]",
    DATE_OF_BIRTH_PLACEHOLDER_EDIT_BUTTON
        = "[data-testid=\"profile-schema-mobile-editing-section-dateOfBirth-placeholder\"]",
    DATE_OF_BIRTH_INPUT = "input[name=\"dateOfBirth\"]",
    DATE_OF_BIRTH_SAVE_BUTTON = "[data-testid=\"profile-schema-mobile-editing-section-dateOfBirth-save-button\"]";

/**
 * Class containing Asgardeo My Account Security Page.
 * My Account -> Security
 */
export class MyAccountPersonalInfoPage {

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
     * This function returns the Personal Info Header Title element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPersonalInfoHeaderTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PERSONAL_INFO_HEADER_TXT);
    }

    /**
     * This function returns the first name input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getFirstNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FIRST_NAME_INPUT);
    }

    /**
     * This function returns the first name input edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getFirstNameEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FIRST_NAME_EDIT_BUTTON);
    }

    /**
     * This function returns the first name save button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getFirstNameSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FIRST_NAME_SAVE_BUTTON);
    }

    /**
     * This function returns the last name input element
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getLastNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LAST_NAME_INPUT);
    }

    /**
     * This function returns the last name input edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getLastNameEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LAST_NAME_EDIT_BUTTON);
    }

    /**
     * This function returns the last name save button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getLastNameSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LAST_NAME_SAVE_BUTTON);
    }

    /**
     * This function returns the mobile input element
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
     public static getMobileInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_INPUT);
    }

    /**
     * This function returns the mobile input pencil edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getMobilePencilEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_PENCIL_EDIT_BUTTON);
    }

    /**
     * This function returns the mobile input placeholder edit button identifier
     * @returns {{string}}
     */
     public static getMobilePlaceholderEditButtonIdentifier(): string {

        return MOBILE_PLACEHOLDER_EDIT_BUTTON;
    }

    /**
     * This function returns the mobile input placeholder edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getMobilePlaceholderEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_PLACEHOLDER_EDIT_BUTTON);
    }

    /**
     * This function returns the Mobile save button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getMobileSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_SAVE_BUTTON);
    }

    /**
     * This function returns the date of birth input placeholder edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getDateOfBirthPlaceholderEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DATE_OF_BIRTH_PLACEHOLDER_EDIT_BUTTON);
    }

    /**
     * This function returns the date of birth input element
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getDateOfBirthInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DATE_OF_BIRTH_INPUT);
    }

    /**
     * This function returns the date of birth save button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getDateOfBirthSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DATE_OF_BIRTH_SAVE_BUTTON);
    }

    /**
     * This function returns the country input element
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getCountryInput(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(HTMLKeyWordsConstants.HTML_DIV).contains(COUNTRY_INPUT_LABEL).next()
            .find(HTMLKeyWordsConstants.INPUT_FIELD);
    }

    /**
     * This function returns the country list item Sri Lanka
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getCountryListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(COUNTRY_ITEM);
    }

    /**
     * This function returns the country input placeholder edit button identifier
     * @returns {{string}}
     */
    public static getCountryPlaceholderEditButtonIdentifier(): string {

        return COUNTRY_PLACEHOLDER_EDIT_BUTTON;
    }

    /**
     * This function returns the given name input placeholder
     * @returns {{string}}
     */
    public static getGivenNamePlaceholder(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(GIVEN_NAME_PLACEHOLDER);
    }

    /**
     * This function returns the country placeholder input edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getCountryPlaceholderEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(COUNTRY_PLACEHOLDER_EDIT_BUTTON);
    }

    /**
     * This function returns the country pencil input edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getCountryPencilEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(COUNTRY_PENCIL_EDIT_BUTTON);
    }

    /**
     * This function returns the Country save button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getCountrySaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(COUNTRY_SAVE_BUTTON);
    }

    /**
    * To get My Account Edit Profile Picture Button
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
     public static getEditProfilePictureButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PROFILE_PICTURE_EDIT_BUTTON);
    }

    /**
    * To get profile picture using gravitar option
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getGravitarProfilePicturesOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(GRAVITA_PROFILE_PICTURE_OPTION_INPUT);
    }

    /**
    * To get prefferred Profile Picture icon
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getProfilePictureItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PROFILE_PICTURE_ITEM);
    }

    /**
    * To get Profile Picture save button
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getProfilePictureSaveButton(): Cypress.Chainable<undefined> {

        return cy.contains(SAVE_BUTTON);
    }

    /**
     * This function returns the email input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_INPUT);
    }

    /**
     * This function returns the email input edit button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getEmailEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_EDIT_BUTTON);
    }

    /**
     * This function returns the email save button
     * @returns {{Cypress.Chainable<JQuery<HTMLElement>>}}
     */
    public static getEmailSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_SAVE_BUTTON);
    }

    /**
     * This function returns the mobile numbers input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMobileNumbersPlaceholderEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_NUMBERS_PLACEHOLDER_EDIT_BUTTON);
    }

    /**
     * This function returns the mobile numbers pencil edit button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMobileNumbersEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_NUMBERS_PENCIL_EDIT_BUTTON);
    }

    /**
     * This function returns the mobile number input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMobileNumbersInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_NUMBERS_INPUT);
    }

    /**
     * This function returns the mobile number add button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersAddButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {

        return cy.get(MOBILE_NUMBERS_FIELD).find(HTMLKeyWordsConstants.HTML_BUTTON);
    }

    /**
     * This function returns the given button type in a given row.
     * @param buttonType Mobile numbers field - row button type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldRowButton(
        buttonType: ValueOf<typeof MyAccountPersonalInfoPage.MULTI_VALUED_FIELD_ROW_BUTTONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${MOBILE_NUMBER_ROW_BUTTON_PREFIX}-${buttonType}-button-${index}"]`);
    }

    /**
     * This function returns the given icon type in a given row.
     * @param iconType Mobile numbers field - row icon type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldRowIcon(
        iconType: ValueOf<typeof MyAccountPersonalInfoPage.MULTI_VALUED_FIELD_ROW_ICONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${MOBILE_NUMBER_ROW_ICON_PREFIX}-${iconType}-${index}"]`);
    }

    /**
     * This function returns the value of the mobile number in the given index.
     * @param index Index of the mobile number
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldRowValue(index: number): Cypress.Chainable<string> {

        return cy.get(`[data-componentid="${MOBILE_NUMBERS_ROW_VALUE_PREFIX}-${index}"]`)
            .invoke("text")
            .then((text) => text.trim());
    }

    /**
     * This function expand the mobile numbers readonly dropdown if it's not already expanded.
     */
    public static expandMobileNumbersReadOnlyDropdown(): void {

        cy.get(MOBILE_NUMBERS_READ_ONLY_DROPDOWN).find(HTMLKeyWordsConstants.HTML_DIV).contains("MuiSelect-select")
            .then($select => {
                if ($select.attr("aria-expanded") === "false") {
                    cy.wrap($select).click();
                }
            });
    }

    /**
     * This function returns the dropdown item by text.
     * @param text Text to be selected.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getExpandedDropDownItemByText(text: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-value="${text}"][role="option"]`);
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

    /**
     * This function returns the mobile numbers field cancel button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersFieldCancelButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_NUMBERS_FIELD_CANCEL_BUTTON);
    }

    /**
     * This function returns the mobile verification modal resend button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileVerificationModalResendButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_VERIFICATION_MODAL_RESEND_BUTTON);
    }

    /**
     * This function returns the mobile verification modal verify button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileVerificationModalConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_VERIFICATION_MODAL_VERIFY_BUTTON);
    }

    /**
     * This function returns the mobile verification input field.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getMobileNumbersVerificationCodeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_NUMBERS_VERIFICATION_CODE_INPUT);
    }

    /**
     * This function returns the email addresses field input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailAddressesPlaceholderEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_ADDRESSES_PLACEHOLDER_EDIT_BUTTON);
    }

    /**
     * This function returns the email addresses field pencil edit button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailAddresseesEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_ADDRESSES_PENCIL_EDIT_BUTTON);
    }

    /**
     * This function returns the email addresses field input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailAddressesInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_ADDRESSES_INPUT);
    }

    /**
     * This function returns the email addresses field add button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesAddButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {

        return cy.get(EMAIL_ADDRESSES_FIELD).find(HTMLKeyWordsConstants.HTML_BUTTON);
    }

    /**
     * This function returns the given button type in a given row.
     * @param buttonType Email Addresses field - row button type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFieldRowButton(
        buttonType: ValueOf<typeof MyAccountPersonalInfoPage.MULTI_VALUED_FIELD_ROW_BUTTONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${EMAIL_ADDRESS_ROW_BUTTON_PREFIX}-${buttonType}-button-${index}"]`);
    }

    /**
     * This function returns the given icon type in a given row.
     * @param iconType Email Addresses field - row icon type.
     * @param index Row index.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFieldRowIcon(
        iconType: ValueOf<typeof MyAccountPersonalInfoPage.MULTI_VALUED_FIELD_ROW_ICONS>,
        index: number
    ): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${EMAIL_ADDRESS_ROW_ICON_PREFIX}-${iconType}-${index}"]`);
    }

    /**
     * This function returns the value of the mobile number in the given index.
     * @param index Index of the mobile number
     * @returns {Cypress.Chainable<JQuery<HTMLElement>}
     */
    public static getEmailAddressesFieldRowValue(index: number): Cypress.Chainable<string> {

        return cy.get(`[data-componentid="${EMAIL_ADDRESSES_ROW_VALUE_PREFIX}-${index}"]`)
            .invoke("text")
            .then((text) => text.trim());
    }

    /**
     * This function expand the mobile numbers readonly dropdown if it's not already expanded.
     */
    public static expandEmailAddressesReadOnlyDropdown(): void {

        cy.get(EMAIL_ADDRESSES_READ_ONLY_DROPDOWN).find(HTMLKeyWordsConstants.HTML_DIV).contains("MuiSelect-select")
            .then($select => {
                if ($select.attr("aria-expanded") === "false") {
                    cy.wrap($select).click();
                }
            });
    }
}
