/**
 * Copyright 2024 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

// Locators
const INPUT_SEGMENTED_OTP = "[data-testid=recovery-otp-page-segmented-otp-input]";
const INPUT_NON_SEGMENTED_OTP = "[data-testid=recovery-otp-page-non-segmented-otp-input]";
const INPUT_COMMON_OTP_CODE = "input[id=\"OTPCode\"]";
const BTN_SEGMENTED_STATE = "input[id=\"subButton\"]";
const BTN_NON_SEGMENTED_STATE = "input[id=\"authenticate\"]";
const BTN_RESEND = "button[id=\"resend\"]";
const BANNER_FAILED_MESSAGE = "#failed-msg"

export class PasswordRecoveryOtpPage {

    /**
     * This function returns the segmented OTP input element
     * @returns The input field for segmented OTP
     */
    public static getSegmentedOtpInput(): Cypress.Chainable {

        return cy.get(INPUT_SEGMENTED_OTP);
    }

    /**
     * This function returns the non-segmented OTP input element
     * @returns The input field for non-segmented OTP
     */
    public static getNonSegmentedOtpInput(): Cypress.Chainable {

        return cy.get(INPUT_NON_SEGMENTED_OTP);
    }

    /**
     * This function returns the OTP input element regardless if segmented or not
     * @returns The input field for OTP
     */
    public static getOTPInput(): Cypress.Chainable {

        return cy.get(INPUT_COMMON_OTP_CODE);
    }

    /**
     * This function returns the button for segmented state
     * @returns The button for segmented state
     */
    public static getSegmentedStateButton(): Cypress.Chainable {

        return cy.get(BTN_SEGMENTED_STATE);
    }

    /**
     * This function returns the button for non-segmented state
     * @returns The button for non-segmented state
     */
    public static getNonSegmentedStateButton(): Cypress.Chainable {

        return cy.get(BTN_NON_SEGMENTED_STATE);
    }

    /**
     * This function returns the button for resending OTP
     * @returns The resend button
     */
    public static getResendButton(): Cypress.Chainable {

        return cy.get(BTN_RESEND);
    }

    /**
     * This function returns the banner with failed message
     * @returns The resend button
     */
    public static getFailedMessageBanner(): Cypress.Chainable {
        
        return cy.get(BANNER_FAILED_MESSAGE);
    }
}
