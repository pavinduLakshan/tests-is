/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {CypressKeywords} from "../../../constants/cypress-keywords";

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
    BTN_ADD_USER = "[class=\"rs-btn rs-btn-primary rs-btn-lg\"]",
    BTN_ADD_USER_TEXT = "Add User",
    BTN_SUBMIT = "[class=\"formButtonToolbar_addUserButton__YdsiC rs-btn rs-btn-primary rs-btn-lg\"]",
    INPUT_FIELD_FIRST_NAME = "[id=\"firstName\"]",
    INPUT_FIELD_FAMILY_NAME = "[id=\"familyName\"]",
    INPUT_FIELD_PASSWORD = "[id=\"password\"]",
    INPUT_FIELD_REENTER_PASSWORD = "[id=\"repassword\"]",
    INPUT_FIELD_EMAIL = "[id=\"email\"]",
    RADIO_BTN_SET_TEMPORARY_PASSWORD = "[class=\"rs-radio-checker\"]",
    RADIO_BTN_SET_TEMPORARY_PASSWORD_TEXT = "Set a password for the user";

    //ALERT MESSAGES
    const
    SUCCESS_NOTIFICATION= 
    "[class=\"rs-notification rs-notification-success rs-notification-show rs-notification-closable\"]",
    SUCCESS_NOTIFICATION_TITLE= "[class=\"rs-notification-title-with-icon\"]",
    SUCCESS_NOTIFICATION_DESCRIPTION= "[class=\"rs-notification-description\"]",
    SUCCESS_NOTIFICATION_TITLE_TEXT = "Changes Saved Successfully",
    SUCCESS_NOTIFICATION_DESCRIPTION_USER_CREATED_TEXT = "User is added to the organization successfully.",
    SUCCESS_NOTIFICATION_CLOSE_ICON = "[class=\"rs-btn-close\"]";

    export class B2BAdminAppManageUsersPage {

    /**
     * This function returns the add user button.
     * @returns The "Add User" button.
     */
    public static getAddUserButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_USER).contains(BTN_ADD_USER_TEXT);
    }

    /**
     * This function returns the first name input field.
     * @returns The first name input field.
     */
    public static getFirstNameInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_FIRST_NAME);
    }

    /**
     * This function returns the family name input field.
     * @returns The family name input field.
     */
    public static getFamilyNameInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_FAMILY_NAME);
    }

    /**
     * This function returns the email input field.
     * @returns The email input field.
     */
    public static getEmailInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_EMAIL);
    }

    /**
     * This function returns the set a password for the user option selection radio button.
     * @returns The "Set a password for the user" radio button.
     */
    public static getSetTemporaryPasswordRadioButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_BTN_SET_TEMPORARY_PASSWORD).contains(RADIO_BTN_SET_TEMPORARY_PASSWORD_TEXT);
    }

    /**
     * This function returns the password input field.
     * @returns The password input field.
     */
    public static getPasswordInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_PASSWORD);
    }

    /**
     * This function returns the re-enter password input field.
     * @returns The re-enter password input field.
     */
    public static getReEnterPasswordInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_REENTER_PASSWORD);
    }

    /**
     * This function submits the add user form.
     */
    public static submitAddUserForm() {

        cy.get(BTN_SUBMIT).click();
    }

    /**
     * This function validates the success notification.
     */
    public static validateSuccessNotification() {

        cy.get(SUCCESS_NOTIFICATION).should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function validates the success notification title.
     */
    public static validateSuccessNotificationTitle(){

        cy.get(SUCCESS_NOTIFICATION_TITLE).contains(SUCCESS_NOTIFICATION_TITLE_TEXT)
            .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function validates the user created success notification description.
     */
    public static validateSuccessNotificationUserCreatedDescription() {

        return cy.get(SUCCESS_NOTIFICATION_DESCRIPTION).contains(SUCCESS_NOTIFICATION_DESCRIPTION_USER_CREATED_TEXT)
            .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function closes the success notification.
     */
    public static closeSuccessNotification() {

        return cy.get(SUCCESS_NOTIFICATION_CLOSE_ICON).click();
    }
}
