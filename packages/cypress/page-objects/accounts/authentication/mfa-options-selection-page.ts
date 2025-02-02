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
const TOTP_OPTION = "[data-testid=login-page-sign-in-with-totp]";
const EMAIL_OTP_OPTION = "[data-testid=login-page-sign-in-with-email-otp]";

/**
 * This class manage MFA option selection page elements.
 */
export class MFAOptionSelectionPage {

    /**
     * This function returns the TOTP option button element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTOTPOptionButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_OPTION);
    }

    /**
     * This function returns the Email OTP option button element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailOTPOptionButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_OPTION);
    }

}
