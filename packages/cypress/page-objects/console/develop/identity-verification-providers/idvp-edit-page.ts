/**
  * Copyright 2024 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
  *
  * This software is the property of WSO2 LLC. and its suppliers, if any.
  * Dissemination of any information or reproduction of any material contained
  * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
  * You may not alter or remove any copyright or other notice from copies of this content."
  */

import { HTMLKeyWordsConstants } from "../../../../constants/cypress-constants/html-keywords";

const BTN_IDVP_EDIT = "[data-componentid=\"resource-grid-card-item-edit-button\"]";
const RESOURCE_TAB_HEADERS: string = "[data-testid=\"idvp-edit-page-edit-resource-tabs\"]";

const FORM_CONFIGURATION_SETTINGS: string = "[data-componentid=\"idvp-edit-page-edit-settings-form-form\"]";
const TXT_FIELD_IDVP_API_TOKEN: string ="[data-componentid=idvp-edit-form-api-token]";
const TXT_FIELD_IDVP_WORKFLOW_ID: string ="[data-componentid=idvp-edit-form-workflow-id]";
const TXT_FIELD_IDVP_WEBHOOK_TOKEN: string ="[data-componentid=idvp-edit-form-webhook-token]";
const BTN_IDVP_CONFIGURATION_SETTINGS_UPDATE
    = "[data-componentid=\"idvp-edit-page-edit-settings-form-form-update-button\"]";

const COMPONENT_DISABLE_SECTION: string = "[data-componentid=\"idvp-edit-danger-zone-disable\"]";
const TOGGLE_DISABLE_IDVP: string = "[data-componentid=\"idvp-edit-danger-zone-disable-toggle\"]";

const COMPONENT_DELETE_SECTION: string = "[data-componentid=\"idvp-edit-danger-zone-delete\"]";
const BTN_DELETE_IDVP: string = "[data-componentid=\"idvp-edit-danger-zone-delete-delete-button\"]";
const TOGGLE_DELETE_CONFIRMATION: string
    = "[data-componentid=\"idvp-edit-danger-zone-delete-confirmation-assertion-checkbox\"]";
const BTN_DELETE_CONFIRMATION: string
    = "[data-componentid=\"idvp-edit-danger-zone-delete-confirmation-confirm-button\"]";

export class IdVPEditPage {

    public static TAB_DISPLAY_NAMES: {
        attributes: string,
        general: string,
        guide: string,
        settings: string
    } = {
        attributes: "Attributes",
        general: "General",
        guide: "Setup Guide",
        settings: "Settings"
    }

    public static getEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_IDVP_EDIT);
    }

    /**
     * Returns the anchor tag to navigate to the tab.
     * 
     * @param tabName - Display name of the tab pane.
     * @returns The anchor tag to navigate to the tab.
     */
    public static getNavigationTab(tabName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RESOURCE_TAB_HEADERS)
            .contains(HTMLKeyWordsConstants.HTML_ANCHOR_TAG, tabName);
    }

    public static getConfigurationSettingsForm(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FORM_CONFIGURATION_SETTINGS);
    }

    public static getIdVPConfigurationSettingsFormFields(): {
        apiToken: Cypress.Chainable<JQuery<HTMLElement>>,
        webhookToken: Cypress.Chainable<JQuery<HTMLElement>>,
        workflowId: Cypress.Chainable<JQuery<HTMLElement>>
    } {

        return {
            apiToken: cy.get(TXT_FIELD_IDVP_API_TOKEN),
            webhookToken: cy.get(TXT_FIELD_IDVP_WEBHOOK_TOKEN),
            workflowId: cy.get(TXT_FIELD_IDVP_WORKFLOW_ID)
        };
    }

    public static getConfigurationSettingsTabUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_IDVP_CONFIGURATION_SETTINGS_UPDATE);
    }

    public static getDisableSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(COMPONENT_DISABLE_SECTION);
    }

    public static getDisableToggle(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(TOGGLE_DISABLE_IDVP);
    }

    public static getDeleteSection(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(COMPONENT_DELETE_SECTION);
    }

    public static getDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_DELETE_IDVP);
    }

    public static getDeleteConfirmationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(TOGGLE_DELETE_CONFIRMATION);
    }

    public static getDeleteConfirmationButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_DELETE_CONFIRMATION);
    }
}
