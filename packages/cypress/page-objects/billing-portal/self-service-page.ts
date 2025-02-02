/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

// self service order form element identifiers.
const SELF_SERVICE_FORM_CONTAINER = "[aria-label=\"self-service-order-form\"]";
const SELF_SERVICE_FORM_FIRST_NAME_FIELD = "[aria-label=\"first-name\"]";
const SELF_SERVICE_FORM_LAST_NAME_FIELD = "[aria-label=\"last-name\"]";
const SELF_SERVICE_FORM_EMAIL_FIELD = "[aria-label=\"email\"]";
const SELF_SERVICE_FORM_PHONE_FIELD = "[aria-label=\"phone-number\"]";
const SELF_SERVICE_FORM_ADDRESS_FIELD = "[aria-label=\"address\"]";
const SELF_SERVICE_FORM_ADDRESS_LINE = "[aria-label=\"Address Line 01\"]";
const SELF_SERVICE_FORM_CITY_FIELD = "[aria-label=\"city\"]";
const SELF_SERVICE_FORM_CITY_1_FIELD = "[aria-label=\"City\"]";
const SELF_SERVICE_FORM_COUNTRY_FIELD = "[data-testid=\"country\"]";
const SELF_SERVICE_FORM_STATE_FIELD = "[aria-label=\"state-province\"]";
const SELF_SERVICE_FORM_PROVINCE_FIELD = "[aria-label=\"State/Provice\"]";
const SELF_SERVICE_FORM_ZIP_FIELD = "[aria-label=\"zip-code\"]";
const SELF_SERVICE_FORM_POSTAL_CODE_FIELD = "[aria-label=\"Postal code\"]";
const EDIT_BILLING_DETAILS_TITLE = "[data-testid=\"billing-detail-edit-title\"]";
const BILLING_DETAILS_FORM_UPDATE_LABEL = "Save";
const PAYMENT_FORM_CARD_PAYMENT_IFRAME = "iframe[title=\"Secure card payment input frame\"]";

// Payment form elements.
const CARD_NUMBER_FIELD ="input[name=\"cardnumber\"]";
const CARD_EXPIRY_FIELD = "input[name=\"exp-date\"]";
const CARD_CVC_FIELD = "input[name=\"cvc\"]";

export class SelfServicePage {
    
    /**
     * This function returns a Cypress chainable object representing the self service form in the upgrade modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_CONTAINER);
    }

    /**
     * This function returns a Cypress chainable object representing the first name field in the 
     * self service form in the upgrade modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormFirstNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_FIRST_NAME_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the last name field in the 
     * self service form in the upgrade modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormLastNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_LAST_NAME_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the email field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormEmailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_EMAIL_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the phone field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormPhoneField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_PHONE_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the address field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormAddressField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_ADDRESS_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the address field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormAddressLine(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_ADDRESS_LINE);
    }

    /**
     * This function returns a Cypress chainable object representing the city field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormCityField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_CITY_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the city field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormCity1Field(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_CITY_1_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the country field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormCountryField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_COUNTRY_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the state field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormStateField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_STATE_FIELD);
    }


    /**
     * This function returns a Cypress chainable object representing the province field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormProvinceField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_PROVINCE_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the zip field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormZipField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_ZIP_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the postal code field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormPostalCodeField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(SELF_SERVICE_FORM_POSTAL_CODE_FIELD);
    }

    /**
     * This function returns a Cypress chainable object representing the title field in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(EDIT_BILLING_DETAILS_TITLE);
    }

    /**
     * This function returns a Cypress chainable object representing the button in the 
     * self service form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelfServiceFormButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.contains(BILLING_DETAILS_FORM_UPDATE_LABEL);
    }

    /**
     * This function returns a Cypress chainable object representing the payment block in the 
     * payment method form in the upgrade request modal.
     * 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPaymentMethodFormPaymentIFrame(): Cypress.Chainable<JQuery<HTMLElement>> {
        return  cy.get(PAYMENT_FORM_CARD_PAYMENT_IFRAME);
    }

    /* 
    * This function returns card number field name.
    */
    public  static getCardNumber(): string {
        return CARD_NUMBER_FIELD;
    }

    /* 
    * This function returns card expiry field name.
    */
    public  static getCardExpiry(): string {
        return CARD_EXPIRY_FIELD;
    }

    /* 
    * This function returns card CVC field name.
    */
    public  static getCardCVC(): string {
        return CARD_CVC_FIELD;
    }
}
