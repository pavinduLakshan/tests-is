/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

//Locators
const RESEND_BUTTON = "button[id=\"resend\"]",
    OTP_NUMBER_INPUT = "input[id=\"pincode-#\"]",
    CONTINUE_BUTTON =  "input[id=\"subButton\"]",
    ERROR_MESSAGE_TXT = "div[id=\"failed-msg\"]";

export class SmsOtpVerificationPage {

    /**
     * This function returns the resend button element
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getResendButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RESEND_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object that represents the OTP input element with the given index.
     * Index starts from 1.
     * @param {string} index - The index of the OTP input field.
     * @returns Cypress.Chainable<JQuery<HTMLElement>>
     */
    public static getOtpInputWithIndex(index: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(OTP_NUMBER_INPUT.replace("#", index));
    }

    /**
     * This function returns the continue button element
     * @returns A Cypress Chainable<JQuery<HTMLElement>>
     */
    public static getContinueButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONTINUE_BUTTON);
    }

    /**
     * This function returns the error message element
     * @returns A Cypress Chainable<JQuery<HTMLElement>>
     */
    public static getErrorMessageText(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(ERROR_MESSAGE_TXT);
    }
    

}
