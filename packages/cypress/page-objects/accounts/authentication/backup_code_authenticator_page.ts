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

/// <reference types="Cypress" />

// LOCATORS
const BACKUP_CODE_ERROR_MESSAGE = "*[class^=\"ui negative message\"]";
const BACKUP_CODE_INPUT_FIELDS = "div[class=\"equal width fields\"]";
const LOGIN_PAGE_TOTP_SUBMIT_BUTTON = "#subButton";
const TOTP_PAGE_BACKUP_CODE_LINK = "[data-testid=\"login-page-backup-code-link\"]";

/**
 * This class manage backup code verification page elements.
 */
export class BackupCodeVerificationPage {

    public static readonly BACKUP_CODE_ERROR_MESSAGE_CONTENT = "Authentication failed! Please retry";

    /**
     * This function returns the backup code error message element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBackupCodeErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BACKUP_CODE_ERROR_MESSAGE);
    }

    /**
     * This function returns the backup code input fields.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBackupCodeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BACKUP_CODE_INPUT_FIELDS);
    }

    /**
     * This function returns the backup code submit button on the sign in page.
     * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    public static getSignInPageBackupCodeSubmitButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(LOGIN_PAGE_TOTP_SUBMIT_BUTTON);
    }

    /**
     * This function will return the backup code link on the TOTP page.
     * @return {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    public static getBackupCodeOptionLink(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(TOTP_PAGE_BACKUP_CODE_LINK);
    }
}
