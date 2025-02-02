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
const QR_CODE_CONFIRM_CHECKBX = "input[type=\"checkbox\"]";
const TOTP_CONTINUE_BUTTON = "#continue";
const SIX_DIGITS_TOTP_INPUT = "div[class=\"equal width fields\"]";
const TOTP_SUBMIT_BUTTON = "#subButton";
const TOTP_ENROLL_MESSAGE = "#enrol-msg";
const TOTP_FAILED_MSG_TXT = "div[id=\"failed-msg\"]";

/**
 * This class manage TOTP verification page elements.
 */
export class TOTPVerificationPage {

    /**
     * This function returns the QR Code Confirm Checkbox element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getQRCodeConfirmCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(QR_CODE_CONFIRM_CHECKBX);
    }

    /**
     * This function returns the TOTP Continue Button element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTOTPContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_CONTINUE_BUTTON);
    }

    /**
     * This function returns the six digits TOTP input element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSixDigitsTOTPInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIX_DIGITS_TOTP_INPUT);
    }

    /**
     * This function returns the TOTP submit button element
     * @returns The element with the id of "totp-submit-button"
     */
    public static geTOTPSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_SUBMIT_BUTTON);
    }

    /**
     * This function returns the TOTP enroll message element
     * @returns The element with the id of "enrol-msg"
     */
    public static getTOTPEnrollMessaging(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_ENROLL_MESSAGE);
    }

    /** This function returns the TOTP failed error message
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTOTPFailedErrorMsgTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_FAILED_MSG_TXT);
    }
}
