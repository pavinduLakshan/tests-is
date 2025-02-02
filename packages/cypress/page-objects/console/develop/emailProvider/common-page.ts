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
import { ConsoleGettingStarted } from "../../getting-started";

const BTN_EMAIL_PROVIDER_SAVE = "[data-componentid=\"email-providers-page-update-button\"]",
  LNK_EMAIL_TEMPLATES = "[data-componentId=side-panel-items-communication-management]",
  BTN_SIDE_PANEL_EMAIL_PROVIDER = "[data-componentid=\"side-panel-items-notification-channels\"]",
  EMAIL_PROVIDER_CARD = "[data-componentid=\"email-provider-card\"]",
  EMAIL_PROVIDER_PAGE_HEADER = "[data-componentid=\"email-providers-page-form-layout-page-header-title\"]",
  SERVER_HOST = "[data-componentid=\"email-providers-page-smtp-server-host\"]",
  SERVER_PORT = "[data-componentid=\"email-providers-page-smtp-server-port\"]",
  FROM_ADDRESS = "[data-componentid=\"email-providers-page-smtp-from-address\"]",
  REPLY_TO_ADDRESS = "[data-componentid=\"email-providers-page-smtp-reply-to-address\"]",
  USERNAME = "[data-componentid=\"email-providers-page-smtp-username\"]",
  PASSWORD = "[data-componentid=\"email-providers-page-smtp-password\"]",
  DISPLAY_NAME = "[data-componentid=\"email-providers-page-smtp-displayName\"]",
  ALERT = "alert",
  ALERT_DISMISS_BUTTON = "span[class=\"notification-dismiss\"]",
  ALERT_SUCCESS_MESSAGE = "[data-testid=alert-success-message]",
  BTN_EMAIL_PROVIDER_REVERT = "[data-componentid=\"email-providers-page-revert-email-provider-config-delete-button\"]",
  CHECKBOX_EMAIL_PROVIDER_REVERT = "[data-componentid=\"email-providers-page-"
    + "revert-confirmation-modal-assertion-checkbox\"]",
  BTN_EMAIL_PROVIDER_CONFIRM = "[data-componentid=email-providers-page-"
    + "revert-confirmation-modal-confirm-button]",
  ERROR_PROMPT = "[class='ui pointing above prompt label']";

export class EmailProviderPage {

  /**
   * This function returns the email templates section of the side panel.
   */
  public static getEmailTemplatesPage(): Cypress.Chainable {

    return ConsoleGettingStarted.GetGroupedSidePanelItem(
        LNK_EMAIL_TEMPLATES,
        ConsoleGettingStarted.getCustomizationGroupLink()
    );
  }

  /**
   * This function returns the email provider button in the side panel.
   */
  public static getSidePanelItemForEmailProviderPage(): Cypress.Chainable {

   return cy.get(BTN_SIDE_PANEL_EMAIL_PROVIDER);
  }

  /**
   * This function returns the email provider card in the email and sms page.
   */
  public static getEmailProviderCard(): Cypress.Chainable {

    return cy.get(EMAIL_PROVIDER_CARD);
  }

  /**
   * This function returns the email provider page header.
   */
  public static getEmailProviderHeader(): Cypress.Chainable {

    return cy.get(EMAIL_PROVIDER_PAGE_HEADER);
  }

  /**
   * This function return the update sucessfull update.
   */
  public static getUpdateSuccessAlert(): Cypress.Chainable {

    return cy.get(ALERT_SUCCESS_MESSAGE);
  }

  /**
   * This function returns the cypress chainable object for the Save button on the email provider configs.
   */
  public static getEmailProviderSaveBtn(): Cypress.Chainable {

    return cy.get(BTN_EMAIL_PROVIDER_SAVE);
  }

  /**
   * This function returns the server host field.
   */
  public static getServerHostField(): Cypress.Chainable {

    return cy.get(SERVER_HOST);
  }

  /**
   * This function returns the server port field.
   */
  public static getServerPortField(): Cypress.Chainable {

    return cy.get(SERVER_PORT);
  }

  /**
   * This function returns the from address field.
   */
  public static getFromAddressField(): Cypress.Chainable {

    return cy.get(FROM_ADDRESS);
  }

  /**
   * This function returns the reply to address field.
   */
  public static getReplyToAddressField(): Cypress.Chainable {

    return cy.get(REPLY_TO_ADDRESS);
  }

  /**
   * This function returns the server username field.
   */
  public static getUsernameField(): Cypress.Chainable {

    return cy.get(USERNAME);
  }

  /**
   * This function returns the server password field.
   */
  public static getPasswordField(): Cypress.Chainable {

    return cy.get(PASSWORD);
  }

  /**
   * This function returns the display name field.
   */
  public static getDisplayNameField(): Cypress.Chainable {

    return cy.get(DISPLAY_NAME);
  }

  /**
   * This function returns the alert button.
   */
  public static getAlert(): Cypress.Chainable {

    return cy.dataTestId(ALERT);
  }

  /**
   * This function returns the error message of the input field.
   */
  public static getErrorPrompt(): Cypress.Chainable {

    return cy.get(ERROR_PROMPT);
  }

  /**
   * This function returns the dismiss button of the alert.
   */
  public static getAlertDismissBtn(): Cypress.Chainable {

    return cy.get(ALERT_DISMISS_BUTTON);
  }

  /**
   * This function returns the success message element
   * @returns The cypress command get() is being returned.
   */
  public static getSucessMessage(): Cypress.Chainable {

    return cy.get(ALERT_SUCCESS_MESSAGE);
  }

  /**
   * `getBrandingRevert()`: Returns the email provider revert button.
   */
  public static getEmailProviderRevertBtn(): Cypress.Chainable {

    return cy.get(BTN_EMAIL_PROVIDER_REVERT);
  }

  /**
   * This function returns the email provider revert confirm button.
   */
  public static getEmailProviderRevertConfirmBtn(): Cypress.Chainable {

    return cy.get(BTN_EMAIL_PROVIDER_CONFIRM);
  }

  /**
   * This function returns the email provider revert checkbox element.
   */
  public static getEmailProviderRevertCheckBox(): Cypress.Chainable {

    return cy.get(CHECKBOX_EMAIL_PROVIDER_REVERT);
  }
}
