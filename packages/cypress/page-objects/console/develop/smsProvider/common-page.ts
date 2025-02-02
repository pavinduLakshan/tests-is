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

const BTN_SMS_PROVIDER_SUBMIT = "[data-testid=\"primary-button\"]";
const BTN_SMS_PROVIDER_DELETE = "[data-testid=\"danger-zone-delete-button\"]";

const CHECKBOX_CONFIRM_DELETE = "[data-componentid=\"sms-provider-page-revert-confirmation-modal-assertion-checkbox\"]";
const BTN_DELETE_CONFIRM = "[data-componentid=\"sms-provider-page-revert-confirmation-modal-confirm-button\"]";

const BTN_SIDE_PANEL_SMS_PROVIDER = "[data-componentid=\"side-panel-items-notification-channels\"]";
const SMS_PROVIDER_CARD = "[data-componentid=\"sms-provider-card\"]";
const SMS_PROVIDER_PAGE_HEADER = "[data-componentid=\"sms-provider-page-form-layout-page-header-title\"]";
const SMS_PROVIDER_TWILIO_SID = "[name=\"twilioKey\"]";
const SMS_PROVIDER_TWILIO_SECRET = "[name=\"twilioSecret\"]";
const SMS_PROVIDER_TWILIO_SENDER = "[name=\"twilioSender\"]";
const SMS_PROVIDER_VONAGE_SID = "[name=\"vonageKey\"]";
const SMS_PROVIDER_VONAGE_SECRET = "[name=\"vonageSecret\"]";
const SMS_PROVIDER_VONAGE_SENDER = "[name=\"vonageSender\"]";

const SMS_PROVIDER_CUSTOM_PROVIDER_URL = "[name=\"providerURL\"]";
const SMS_PROVIDER_CUSTOM_CONTENT_TYPE = "[name=\"contentType\"]";
const SMS_PROVIDER_CUSTOM_HTTP_METHOD = "[name=\"httpMethod\"]";
const SMS_PROVIDER_CUSTOM_HEADERS = "[name=\"headers\"]";
const SMS_PROVIDER_CUSTOM_PAYLOAD = "[name=\"payload\"]";

const TAB_BTN_TWILIO = "[data-componentid=\"twilio-sms-provider-info-card\"]";
const TAB_BTN_VONAGE = "[data-componentid=\"vonage-sms-provider-info-card\"]";
const TAB_BTN_CUSTOM = "[data-componentid=\"custom-sms-provider-info-card\"]";
const TAB_TWILIO = "[data-componentid=\"twilio-sms-provider-tab\"]";
const TAB_VONAGE = "[data-componentid=\"vonage-sms-provider-tab\"]";
const TAB_CUSTOM = "[data-componentid=\"custom-sms-provider-tab\"]";

/**
 * This class contains the common elements (Accessible using selector notation) in the SMS Provider page.
 */
export class SMSProviderPage {

  /**
   * Get the Twilio tab button element.
   * @returns {Cypress.Chainable} The Twilio tab button.
   */
  public static getTwilioTabBtn(): Cypress.Chainable {

      return cy.get(TAB_BTN_TWILIO);
  }

  /**
   * Get the Vonage tab button element.
   * @returns {Cypress.Chainable} The Vonage tab button.
   */
  public static getVonageTabBtn(): Cypress.Chainable {

    return cy.get(TAB_BTN_VONAGE);
  }

  /**
   * Get the Custom tab button element.
   * @returns {Cypress.Chainable} The Custom tab button.
   */
  public static getCustomTabBtn(): Cypress.Chainable {

    return cy.get(TAB_BTN_CUSTOM);
  }

  /**
   * Get the Twilio tab element.
   * @returns {Cypress.Chainable} The Twilio tab.
   */
  public static getTwilioTab(): Cypress.Chainable {

    return cy.get(TAB_TWILIO);
  }

  /**
   * Get the Vonage tab element.
   * @returns {Cypress.Chainable} The Vonage tab.
   */
  public static getVonageTab(): Cypress.Chainable {

    return cy.get(TAB_VONAGE);
  }

  /**
   * Get the Custom tab element.
   * @returns {Cypress.Chainable} The Custom tab.
   */
  public static getCustomTab(): Cypress.Chainable {

    return cy.get(TAB_CUSTOM);
  }

  /**
   * Get the side panel item for the SMS provider page.
   * @returns {Cypress.Chainable} The side panel item for the SMS provider page.
   */
  public static getSidePanelItemForSMSProviderPage(): Cypress.Chainable {

    return cy.get(BTN_SIDE_PANEL_SMS_PROVIDER);
  }

  /**
   * Get the SMS provider card element.
   * @returns {Cypress.Chainable} The SMS provider card.
   */
  public static getSMSProviderCard(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_CARD);
  }

  /**
   * Get the SMS provider page header element.
   * @returns {Cypress.Chainable} The SMS provider page header.
   */
  public static getSMSProviderHeader(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_PAGE_HEADER);
  }

  /**
   * Get the Twilio account SID field element.
   * @returns {Cypress.Chainable} The Twilio account SID field.
   */
  public static getTwilioAccountSIDField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_TWILIO_SID);
  }

  /**
   * Get the Twilio account secret field element.
   * @returns {Cypress.Chainable} The Twilio account secret field.
   */
  public static getTwilioAccountSecretField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_TWILIO_SECRET);
  }

  /**
   * Get the Twilio sender field element.
   * @returns {Cypress.Chainable} The Twilio sender field.
   */
  public static getTwilioSenderField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_TWILIO_SENDER);
  }

  /**
   * Get the Vonage account SID field element.
   * @returns {Cypress.Chainable} The Vonage account SID field.
   */
  public static getVonageAccountSIDField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_VONAGE_SID);
  }

  /**
   * Get the Vonage account secret field element.
   * @returns {Cypress.Chainable} The Vonage account secret field.
   */
  public static getVonageAccountSecretField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_VONAGE_SECRET);
  }

  /**
   * Get the Vonage sender field element.
   * @returns {Cypress.Chainable} The Vonage sender field.
   */
  public static getVonageSenderField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_VONAGE_SENDER);
  }

  /**
   * Get the custom provider URL field element.
   * @returns {Cypress.Chainable} The custom provider URL field.
   */
  public static getCustomProviderURLField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_CUSTOM_PROVIDER_URL);
  }

  /**
   * Get the custom content type field element.
   * @returns {Cypress.Chainable} The custom content type field.
   */
  public static getCustomContentTypeField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_CUSTOM_CONTENT_TYPE);
  }

  /**
   * Get the custom HTTP method field element.
   * @returns {Cypress.Chainable} The custom HTTP method field.
   */
  public static getCustomHTTPMethodField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_CUSTOM_HTTP_METHOD);
  }

  /**
   * Get the custom headers field element.
   * @returns {Cypress.Chainable} The custom headers field.
   */
  public static getCustomHeadersField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_CUSTOM_HEADERS);
  }

  /**
   * Get the custom payload field element.
   * @returns {Cypress.Chainable} The custom payload field.
   */
  public static getCustomPayloadField(): Cypress.Chainable {

    return cy.get(SMS_PROVIDER_CUSTOM_PAYLOAD);
  }

  /**
   * Get the SMS provider submit button element.
   * @returns {Cypress.Chainable} The SMS provider submit button.
   */
  static getSMSProviderSubmitButton(): Cypress.Chainable {

    return cy.get(BTN_SMS_PROVIDER_SUBMIT);
  }

  /**
   * Get the SMS provider delete button element.
   * @returns {Cypress.Chainable} The SMS provider delete button.
   */
  static getSMSProviderDeleteButton(): Cypress.Chainable {

    return cy.get(BTN_SMS_PROVIDER_DELETE);
  }

  /**
   * Get the delete confirmation checkbox element.
   * @returns {Cypress.Chainable} The delete confirmation checkbox.
   */
  static getDeleteConfirmationCheckbox(): Cypress.Chainable {

    return cy.get(CHECKBOX_CONFIRM_DELETE);
  }

  /**
   * Get the delete confirmation button element.
   * @returns {Cypress.Chainable} The delete confirmation button.
   */
  static getDeleteConfirmationButton(): Cypress.Chainable {

    return cy.get(BTN_DELETE_CONFIRM);
  }
}
