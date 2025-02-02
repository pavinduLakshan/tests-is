/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/* global JQuery */

/// <reference types="cypress" />

const MAU_SLIDER = "[data-testid=\"mau-slider\"]";
const SECOND_PRICE_POINT_IN_SLIDER = "span[data-index=\"2\"]:not([aria-hidden=\"true\"])";
const THIRD_PRICE_POINT_IN_SLIDER = "span[data-index=\"3\"]:not([aria-hidden=\"true\"])";
const ADD_BILLING_DETAILS_BUTTON = "[data-testid=\"edit-billing-details-btn\"]";
const ANNUAL_BILLING_BUTTON = "[aria-label=\"annual-billing\"]";
const MONTHLY_BILLING_BUTTON = "[aria-label=\"monthly-billing\"]";
const B2C_USE_CASE_BUTTON = "[aria-label=\"B2C\"]";
const B2B_USE_CASE_BUTTON = "[aria-label=\"B2B\"]";
const BILLING_TAB = "a[class=\"Billing Details\"]";
const DEFAULT_PAYMENT_BUTTON = "button[data-testid^=\"payment-method-card-set-default-button\"]";
const DEFAULT_PAYMENT_CONFIRM_BUTTON = "button[aria-label=\"set-default-confirm-btn\"]";
const CHOOSE_PROFESSIONAL_TIER_BUTTON = "[data-testid=\"professional-choose-btn\"]";
const CHOOSE_ENTERPRISE_TIER_BUTTON = "[data-testid=\"enterprise-choose-btn\"]";
const CONFIRM_CHECKBOX = "input[type=\"checkbox\"]";
const UPGRADE_REQ_MODAL = "[aria-labelledby=\"asgardeo-upgrade-subscription\"]";
const UPGRADE_REQ_MODAL_FIRST_NAME_FIELD = "[aria-label=\"first-name\"]";
const UPGRADE_REQ_MODAL_LAST_NAME_FIELD = "[aria-label=\"last-name\"]";
const UPGRADE_REQ_MODAL_EMAIL_FIELD = "[aria-label=\"email\"]";
const UPGRADE_REQ_MODAL_PHONE_NO_FIELD = "[aria-label=\"phone-number\"]";
const UPGRADE_REQ_MODAL_COUNTRY_FIELD = "[data-testid=\"country\"]";
const UPGRADE_REQ_MODAL_STATE_FIELD = "[data-testid=\"state\"]";
const UPGRADE_REQ_MODAL_SUBMIT_BUTTON = "[data-testid=\"request-upgrade-btn\"]";
const UPGRADE_SUBMIT_BUTTON = "Upgrade";
const SUBSCRIPTION_UPGRADE_BUTTON_CLASS = ".MuiDialog-container";
const SUBSCRIPTION_UPGRADE_BUTTON_LABEL_CLASS = ".MuiButton-label";

// Payment form.
const PAYMENT_METHOD_ADD_BUTTON = "[data-testid=\"add-card-btn\"]";
const PAYMENT_FORM_NAME_FIELD = "div[aria-label=\"name\"] input";
const PAYMENT_FORM_NAME_ON_CARD_FIELD = "div[aria-label=\"name-on-card\"] input";
const PAYMENT_FORM_CARD_NUMBER_IFRAME = "iframe[title=\"Secure card number input frame\"]";
const PAYMENT_FORM_CARD_EXP_IFRAME = "iframe[title=\"Secure expiration date input frame\"]";
const PAYMENT_FORM_CARD_CVC_IFRAME = "iframe[title=\"Secure CVC input frame\"]";
const PAYMENT_METHOD_SUBMIT_BUTTON = "[data-testid=\"payment-method-add-modal-submit-button\"]";
const PAYMENT_METHOD_SUCCESS_MESSAGE = "div[id=\"notistack-snackbar\"]";

export class SubscriptionPage {

    /**
     * This function returns a Cypress chainable object containing a jQuery element for a MAU slider.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMauSlider(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(MAU_SLIDER);
    }

    /**
     * This function returns a Cypress chainable object containing a jQuery element that
     * represents the second price point in MAU slider.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSecondPricePointInMauSlider(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SECOND_PRICE_POINT_IN_SLIDER);
    }

    /**
     * This function returns a Cypress chainable object containing a jQuery element that
     * represents the third price point in MAU slider.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getThirdPricePointInMauSlider(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(THIRD_PRICE_POINT_IN_SLIDER);
    }

    /**
     * This function returns a Cypress chainable object representing the annual billing button element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAnnualBillingButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(ANNUAL_BILLING_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the monthly billing button element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
        public static getMonthlyBillingButton(): Cypress.Chainable<JQuery<HTMLElement>> {
            return  cy.get(MONTHLY_BILLING_BUTTON);
        }
    
    /**
     * This function returns a Cypress chainable object representing the B2C button in the 
     * "Use Case" toggle button group.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getB2cUseCaseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(B2C_USE_CASE_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the B2B button in the 
     * "Use Case" toggle button group.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getB2bUseCaseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(B2B_USE_CASE_BUTTON);
    }
    
    /**
     * This function returns a Cypress chainable object representing the Upgrade button in the 
     * professional tier card.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChooseProfessionalTierButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(CHOOSE_PROFESSIONAL_TIER_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the "Contact Us" button in the 
     * enterprise tier card.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChooseEnterpriseTierButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(CHOOSE_ENTERPRISE_TIER_BUTTON);
    }


    
    /**
     * This function returns a Cypress chainable object representing the upgrade request modal container.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubscriptionUpgradeRequestModal(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(UPGRADE_REQ_MODAL);
    }

    /**
     * This function returns a Cypress chainable object representing the first name input field in the 
     * upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeReqModalFirstNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(UPGRADE_REQ_MODAL_FIRST_NAME_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the last name input field in the 
     * upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeReqModalLastNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(UPGRADE_REQ_MODAL_LAST_NAME_FIELD);
    }
    
    /**
     * This function returns a Cypress chainable object representing the email input field in the upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeReqModalEmailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(UPGRADE_REQ_MODAL_EMAIL_FIELD);
    }
    
    /**
     * This function returns a Cypress chainable object representing the phone number field in the 
     * upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeReqModalPhoneNoField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(UPGRADE_REQ_MODAL_PHONE_NO_FIELD);
    }
    
    /**
     * This function returns a Cypress chainable object representing the country dropdown in the upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeReqModalCountryField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(UPGRADE_REQ_MODAL_COUNTRY_FIELD);
    }
    
    /**
     * This function returns a Cypress chainable object representing the state field in the upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeReqModalStateField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(UPGRADE_REQ_MODAL_STATE_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the submit button in the upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeReqModalSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(UPGRADE_REQ_MODAL_SUBMIT_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the submit button in the upgrade request modal.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpgradeSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.contains(UPGRADE_SUBMIT_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the add payment in the 
     * billing page.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddPaymentMethodBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_METHOD_ADD_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the name field in the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_FORM_NAME_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the card number field in the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormCardNumberIFrame(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_FORM_CARD_NUMBER_IFRAME);
    }

    /**
     * This function returns a Cypress chainable object representing the card expiration field in the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormExpiryIFrame(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_FORM_CARD_EXP_IFRAME);
    }

    /**
     * This function returns a Cypress chainable object representing the CVC field in the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormCVCIFrame(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_FORM_CARD_CVC_IFRAME);
    }

    /**
     * This function returns a Cypress chainable object representing the submit button in the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormSubmitBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_METHOD_SUBMIT_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the success message for the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormSuccess(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_METHOD_SUCCESS_MESSAGE);
    }

    /**
     * This function returns a Cypress chainable object representing the set default call.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSetDefaultBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(DEFAULT_PAYMENT_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the confirm default call.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSetDefaultConfirmBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(DEFAULT_PAYMENT_CONFIRM_BUTTON, { timeout: 5000 });
    }

    /**
     * This function returns a Cypress chainable object representing the billing tab.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBillingTab(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(BILLING_TAB);
    }

    /**
     * This function returns a Cypress chainable object representing the billing details add button.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBillingDetailsBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(ADD_BILLING_DETAILS_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object representing the name on card field in the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormNameOnCard(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_FORM_NAME_ON_CARD_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the checkbox in the 
     * subscription upgrade form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getConfirmCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(CONFIRM_CHECKBOX);
    }


    /**
     * This function returns subscription upgrage button class.
     */
    public static getSubscriptionUpgradeButtonClass(): string {
        return SUBSCRIPTION_UPGRADE_BUTTON_CLASS;
    }

    /**
     * This function returns subscription upgrage button label class.
     */
    public static getSubscriptionUpgradeButtonLAbelClass(): string {
        return SUBSCRIPTION_UPGRADE_BUTTON_LABEL_CLASS;
    }
}
