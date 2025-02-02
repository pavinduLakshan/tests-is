/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

//Locators
const BTN_CHANGE_YOUR_PASSWORD = "change-password-settings-section-card-primary-button";
const INPUT_CURRENT_PASSWORD = "change-password-current-password-field";
const INPUT_NEW_PASSWORD = "change-password-new-password-field";
const BTN_SUBMIT_PASSWORD_UPDATE = "change-password-form-actions-group-submit-button";
const BTN_CONFIRMATION_MODAL_CONTINUE = "change-password-confirmation-modal-actions-continue-button";
const BTN_PASSWORD_CANCEL = "change-password-form-actions-group-cancel-button";

/* It contains functions that return Cypress Chainable objects that represent elements on the Reset
Password page */
export class ResetPasswordPage {

   /**
    * It returns a Cypress chainable element that is the button with the data-test-id of
    * "btn-change-your-password"
    * @returns The element with the data-test-id of "btn-change-your-password"
    */
    public static getBtnChangeYourPassword(): Cypress.Chainable<Element> {

        return cy.dataTestId(BTN_CHANGE_YOUR_PASSWORD);
    }

   /**
    * This function returns the element with the data-test-id attribute of INPUT_CURRENT_PASSWORD
    * @returns The element with the data-test-id of INPUT_CURRENT_PASSWORD
    */
    public static getInputCurrentPassword(): Cypress.Chainable<Element> {

        return cy.dataTestId(INPUT_CURRENT_PASSWORD);
    }

    /**
     * This function returns the element with the data-test-id attribute of INPUT_NEW_PASSWORD
     * @returns The element with the data-test-id of INPUT_NEW_PASSWORD
     */
    public static getInputNewPassword(): Cypress.Chainable<Element> {

        return cy.dataTestId(INPUT_NEW_PASSWORD);
    }

   /**
    * It returns a Cypress Chainable object that represents the element with the data-test-id attribute
    * value of "btn-submit-password-update"
    * @returns The element with the data-test-id of btn-submit-password-update
    */
    public static getBtnSubmit(): Cypress.Chainable<Element> {

        return cy.dataTestId(BTN_SUBMIT_PASSWORD_UPDATE);
    }

    /**
     * This function returns the element with the data-test-id attribute value of
     * "btn-confirmation-modal-continue"
     * @returns The element with the data-test-id of btn-confirmation-modal-continue
     */
    public static getBtnConfirmationModalContinue(): Cypress.Chainable<Element> {

        return cy.dataTestId(BTN_CONFIRMATION_MODAL_CONTINUE);
    }

    /**
     * This function returns the cancel button in the password update form.
     *
     * @returns The element with the data-test-id of btn-password-cancel
     */
    public static getBtnCancel(): Cypress.Chainable<Element> {
            return cy.dataTestId(BTN_PASSWORD_CANCEL);
    }
}
