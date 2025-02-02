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

// PAGE LOCATORS
const EMAIL_OTP_SETUPLINK = "[data-componentid=\"resource-grid-card-item-edit-button\"]",
    EMAIL_OTP_GRID_CARD = "[data-testid=\"idp-list-email-otp-authenticator\"]",
    EMAIL_OTP_GRID_CARD_ACTION_CONTAINER = "[data-testid=\"idp-list-email-otp-authenticator-action-container\"]",
    EMAIL_OTP_EXPIRY_TIME_INPUT = "input[name=\"EmailOTP_ExpiryTime\"]",
    EMAIL_OTP_TOKEN_LENGTH_INPUT = "input[name=\"EmailOTP_OTPLength\"]",
    EMAIL_OTP_SETTINGS_UPDATE_BUTTON = "[data-testid=\"multi-factor-authenticator-edit-" +
        "email-otp-authenticator-content-submit-button\"]",
    EMAIL_OTP_CHOOSE_APPLICATION_LINK = "[data-componentid=\"link\"]",
    EMAIL_OTP_APPLICATION_SELECTION_LIST_MODEL = "[data-testid=\"email-otp-authenticator-quick-start-" +
        "application-selection-modal-list-item-heading\"]",
    EMAIL_OTP_SELECTED_APPLICATION_DIV_CONTENT = "div.content";

/**
 * Class containing asgardeo console email otp page elements.
 * Console -> Develop -> Connections > Email OTP
 */
export class EmailOtpConnectionPage {

    public static readonly EMAIL_OTP_RESOURCE_TAB: string = "[data-testid=\"multi-factor-authenticator-" +
        "edit-resource-tabs\"]";
    /**
     * This method is used to get element of emailOtp setup link via connection list page.
     * @returns Cypress.Chainable<JQuery<HTMLElement>>
     */
    public static getEmailOTPSetupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_GRID_CARD_ACTION_CONTAINER).find(EMAIL_OTP_SETUPLINK);
    }

    /**
     * This function returns the email otp resource tab element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailOtpResourceTab(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(this.EMAIL_OTP_RESOURCE_TAB);
    }

    /**
     * It returns the element of the `emailOtpExpiryTimeInput`
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailOtpExpiryTimeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_EXPIRY_TIME_INPUT);
    }

    /**
     * This function returns the email otp token length input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailOtpTokenLengthInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_TOKEN_LENGTH_INPUT);
    }

    /**
     * Returns the `Update` button on the `Email OTP Settings` page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailOtpSettingsUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_SETTINGS_UPDATE_BUTTON);
    }

    /**
     * It returns the element of the "choose-application-link" on the page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChooseApplicationLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_CHOOSE_APPLICATION_LINK);
    }

    /**
     * This function returns the element with the data_test_id 'email-otp-application-selection-list-model'
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailOtpApplicationSelectionListModel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_APPLICATION_SELECTION_LIST_MODEL);
    }

    /**
     * This function returns the content of the div element that contains the selected application name.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailOtpSelectedAppDivContent(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_SELECTED_APPLICATION_DIV_CONTENT);
    }
}
