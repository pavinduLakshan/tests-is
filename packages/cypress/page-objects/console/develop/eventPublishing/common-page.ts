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

const BTN_SIDE_PANEL_EVENT_PUBLISHING = "[data-testid=side-panel-items-event-publishing]",
BTN_LOGIN_EVENTS_CHECKBOX = "[data-componentid=\"Login events-edit-section\"]",
BTN_UPDATE_EVENT_CONFIG = "[data-componentid=\"events-config-page-update-button\"]";

export class EventPublishingPage {

  /**
   * This function returns the event publishing section of the side panel.
   */
  public static getEventPublishingSidePanelBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(BTN_SIDE_PANEL_EVENT_PUBLISHING);
  }

  /**
   * This function returns the publish login events checkbox.
   */
  public static checkLoginEventPublish(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(BTN_LOGIN_EVENTS_CHECKBOX);
  }

  /**
   * This function returns the update event configuration button.
   */
  public static updateEventConfiguration(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(BTN_UPDATE_EVENT_CONFIG);
  }
}
