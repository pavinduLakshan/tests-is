/*
 *   Copyright (c) 2024 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

const TXT_SMS_TEMPLATE_BODY =
    "[data-componentid=\"sms-customization-form-sms-body\"]";
const TXT_SMS_TEMPLATE_BODY_TEXTAREA = "[name=\"smsBody\"]";

const BTN_SMS_TEMPLATE_SAVE =
    "[data-componentid=\"sms-customization-footer-save-button\"]";
const BTN_DANGER_ZONE =
    "[data-componentid=\"sms-customization-page-remove-sms-provider-config-delete-button\"]";

const DANGER_ZONE =
    "[data-componentid=\"sms-customization-page-remove-sms-provider-config\"]";

const SELECT_LOCALE_INPUT =
    "[data-componentid=\"sms-customization-header-sms-template-locale\"]";
const SELECT_TEMPLATE_INPUT =
    "[data-componentid=\"sms-customization-header-sms-template-list\"]";

/**
 * Interface to represent SMS Temaplate.
 */
export interface SMSTemplate {

    // Locale of the SMS tempalate.
    locale: string;

    // SMS template name.
    templateName: string;

    // SMS template ID.
    templateId: string;

    // SMS template body.
    smsBody: string;
}

/**
 * Interface to represent SMS Templates used in test.
 */
export interface SMSTemplates {

    // Default SMS OTP template with en_US.
    defaultTemplate: SMSTemplate;

    // SMS OTP template with fr_FR.
    customLocaleTemplate: SMSTemplate;

    // Account Confirmation template with en_US.
    customTemplateType: SMSTemplate;
}

/**
 * This class contains the elements in the SMS Templates page.
 */
export class SMSTemplatesPage {

    /**
     * Get the SMS Template body element.
     * @returns {Cypress.Chainable} The SMS Template body.
     */
    public static getSmsTemplateBodyInput(): Cypress.Chainable {

        return cy.get(TXT_SMS_TEMPLATE_BODY);
    }

    /**
     * Get the SMS Template body textarea element.
     * @returns {Cypress.Chainable} The SMS Template body textarea.
     */
    public static getSmsTemplateBodyTextarea(): Cypress.Chainable {

        return cy
            .get(TXT_SMS_TEMPLATE_BODY)
            .get(TXT_SMS_TEMPLATE_BODY_TEXTAREA);
    }

    /**
     * Get the save button for SMS templates.
     * @returns {Cypress.Chainable} SMS template save button.
     */
    public static getSmsTemplateSaveButton(): Cypress.Chainable {

        return cy.get(BTN_SMS_TEMPLATE_SAVE);
    }

    /**
     * Get the danger zone component.
     * @returns {Cypress.Chainable} Danger zone component.
     */
    public static getDangerZone(): Cypress.Chainable {

        return cy.get(DANGER_ZONE);
    }

    /**
     * Get the danger zone button.
     * @returns {Cypress.Chainable} Danger zone.
     */
    public static getDangerZoneButton(): Cypress.Chainable {

        return cy.get(BTN_DANGER_ZONE);
    }

    /**
     * Get the template select dropdown.
     * @returns {Cypress.Chainable} Template dropdown component.
     */
    public static getTemplateListDropdown(): Cypress.Chainable {

        return cy.get(SELECT_TEMPLATE_INPUT);
    }

    /**
     * Get the locale select dropdown.
     * @returns {Cypress.Chainable} Locale dropdown component.
     */
    public static getLocaleListDropdown(): Cypress.Chainable {

        return cy.get(SELECT_LOCALE_INPUT);
    }

    /**
     * Get the locale select dropdown item by value.
     * @param value Dropdown item data value.
     * @returns {Cypress.Chainable} Locale dropdown item.
     */
    public static getLocaleListDropdownItem(value: string): Cypress.Chainable {

        return cy.get(`li[data-value="${value}"]`);
    }

    /**
     * Get the template select dropdown item by value.
     * @param value Dropdown item data value.
     * @returns {Cypress.Chainable} Template dropdown item.
     */
    public static getTemplateListDropdownItem(value: string): Cypress.Chainable {
        
        return cy.get(`li[data-value="${value}"]`);
    }
}
