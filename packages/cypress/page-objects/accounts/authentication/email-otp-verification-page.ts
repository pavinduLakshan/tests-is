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

/// <reference types="cypress" />

//Locators
const INPUT_EMAIL_OTP = "input[id=\"OTPCode\"]",
    INPUT_CONTINUE = "input[id=\"authenticate\"]",
    LNK_RESEND = "a[id=\"resend\"]",
    TXT_FAILED_MSG = "div[id=\"failed-msg\"]",
    TXT_ACCOUNT_LOCK_ERROR_MESSAGE = "div[class=\"ui negative message\"]";

export class EmailOtpVerificationPage {

    /**
     * To get email OTP input filed.
     * @returns {Cypress.Chainable}
     */
    public static getEmailOtpInput(): Cypress.Chainable {

        return cy.get(INPUT_EMAIL_OTP);
    }

    /**
     * To get email otp authentication button.
     * @returns {Cypress.Chainable}
     */
    public static getEmailOtpContinueBtn(): Cypress.Chainable {

        return cy.get(INPUT_CONTINUE);
    }

    /**
     * To get email otp resend link.
     * @returns {Cypress.Chainable}
     */
    public static getEmailOtpResendButton(): Cypress.Chainable {

        return cy.get(LNK_RESEND);
    }

    /**
     * To get failed message text filed.
     * @returns {Cypress.Chainable}
     */
    public static getEmailOtpFailedErrorMsgTxt(): Cypress.Chainable {
        
        return cy.get(TXT_FAILED_MSG);
    }

    /**
     * To get Account lock message text filed.
     * @returns {Cypress.Chainable}
     */
    public static getAccountLockErrorMsgTxt(): Cypress.Chainable {
        
        return cy.get(TXT_ACCOUNT_LOCK_ERROR_MESSAGE);
    }
}
