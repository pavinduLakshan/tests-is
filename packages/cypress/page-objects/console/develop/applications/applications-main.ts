/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

import { HTMLKeyWordsConstants } from "../../../../constants";

// Locators - Main Page
const TXT_TITLE = "[data-testid=\"applications-page-layout-page-header-title\"]";
const BTN_NEW_APPLICATION = "[data-testid=\"applications-list-layout-add-button\"]";
const BTN_APPLICATIONS_SETTINGS = "[data-componentid=\"applications-settings-button\"]";
const BTN_APPLICATIONS_SETTINGS_BACK_BUTTON = "[data-componentid=\"applications-settings-page-page-back-button\"]";
const NEW_CUSTOM_APPLICATION_BUTTON = "[data-componentid=\"application-template-card-custom-application\"]";
const CUSTOM_APP_WIZARD_HEADER = ".main-panel";
const CUSTOM_APP_NAME_INPUT = "[data-testid=\"minimal-application-create-wizard-application-name-input\"]";
const WRAPPER_MY_ACCOUNT_URL_FOR_USERS = "[data-testid=\"copy-input-wrapper\"]";
const INPUT_SEARCH_BY_APPLICATION_NAME = "[data-testid=\"applications-list-advanced-search-input\"]";
const SELECT_ADVANCED_SEARCH_OPTIONS = "[data-testid=\"applications-list-advanced-search-options-button\"]";
const SELECT_ITEMS_PER_PAGE = "[data-testid=\"list-layout-pagination-items-per-page-dropdown\"]";
const BTN_NEXT_PAGE = "a[aria-label=\"Next Page\"]";
const BTN_PREVIOUS_PAGE = "a[aria-label=\"Previous Page\"]";
const TABLE_APPLICATIONS = "[data-testid=\"applications-list\"]";
const BTN_EDIT_ROW_OF_APPLICATIONS_TABLE = "[data-testid=\"applications-list-item-edit-button\"]";
const BTN_DELETE_ROW_OF_APPLICATIONS_TABLE = "[data-testid=\"applications-list-item-delete-button\"]";
const ALERT_SUCCESS = "[class=\"notification notification-success notification-visible\"]";
const APPLICATION_DELETE = "[data-testid=\"applications-list-item-delete-button\"]";
const DELETE_APPLICATION_CONFIRMATION_CHECK_BOX = "[data-componentid=\"confirmation-modal-assertion-checkbox\"]";
const DELETE_APPLICATION_BUTTON = "[data-testid=\"applications-list-delete-confirmation-modal-confirm-button\"]";
const MANAGEMENT_APPLICATION_CHECK_BOX = "[data-testid=\"minimal-application-create-wizard-management-app-checkbox\"]";
const BTN_OIDC_REGISTER = "[data-testid=minimal-application-create-wizard-next-button]";
const APPLICATION_LIST_ITEM = "[data-testid=\"applications-list-item-heading\"]";
const ERROR_PROMPT = "[class='ui pointing above prompt label']";
const OIDC_PROTOCOL_SELECTION = "[data-testid=\"minimal-application-create-wizard-oauth2-oidc-card\"]";

// Locators Edit/Delete Application
const APPLICATION_LIST_ITIM_EDIT_BUTTON = "[data-testid=\"applications-list-item-edit-button\"]";

/**
 * Class containing Asgardeo Console Applications Page Objects
 * Console -> Develop -> Applications 
 */
export class ApplicationsMainPage {

    /**
     * Get the page title
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_TITLE);
    }

    /**
     * Get the new application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnNewApplication(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEW_APPLICATION);
    }

    /**
     * This method is used to get Custom Application Button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCustomApplicationType(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NEW_CUSTOM_APPLICATION_BUTTON);
    }

    /**
     * This function returns helps the user to select OIDC protocol for custom application creation
     */
    public static getOIDCProtocolCustomAppName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(OIDC_PROTOCOL_SELECTION);
    }

    /**
     * This method is used to get the Custom Application Wizard header.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCustomApplicationWizardHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CUSTOM_APP_WIZARD_HEADER);
    }

    /**
     * Get Textbox Custom Application Name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtCustomAppName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CUSTOM_APP_NAME_INPUT);
    }

    /**
     * Get the input field for my account url for users
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtMyAccountUrlForUsers(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(WRAPPER_MY_ACCOUNT_URL_FOR_USERS).find("input");

    }

    /**
     * Get the copy to clipboard button for my account url for users
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCopyMyAccountUrlForUsers(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(WRAPPER_MY_ACCOUNT_URL_FOR_USERS).find("button");

    }

    /**
     * Get the input field for searching by application name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputSearchByApplicationName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_SEARCH_BY_APPLICATION_NAME).find("input");

    }

    /**
     * Get the application settings button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationsSettingsButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APPLICATIONS_SETTINGS);
    }

    /**
     * Get the application settings back button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationsSettingsBackButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APPLICATIONS_SETTINGS_BACK_BUTTON);
    }

    /**
     * Get the dropdown for advanced search options
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelectAdvancedSearchOptions(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_ADVANCED_SEARCH_OPTIONS);

    }

    /**
     * Get the dropdown for selecting the number of items (rows of groups) per page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelectItemsPerPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_ITEMS_PER_PAGE);

    }

    /**
     * Get the next page button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnNextPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEXT_PAGE);

    }

    /**
     * Get the previous page button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnPreviousPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_PREVIOUS_PAGE);

    }

    /**
     * Get the clickable row corresponding to the group name in the table which lists existing applications
     * @param {string} appName - application name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnRowOfApplicationsTable(appName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TABLE_APPLICATIONS).contains("tr", appName);

    }

    /**
     * Get the edit button of the row corresponding to the group name in the table which lists existing applications
     * @param {string} appName - application name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnEditRowOfApplicationsTable(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_EDIT_ROW_OF_APPLICATIONS_TABLE);

    }

    /**
     * Get the delete button of the row corresponding to the group name in the table which lists existing applications
     * @param {string} appName - application name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDeleteRowOfApplicationsTable(appName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TABLE_APPLICATIONS).contains("td", appName).siblings().find(BTN_DELETE_ROW_OF_APPLICATIONS_TABLE);

    }

    /**
     * Get the success alert
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAlertSuccess(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_SUCCESS);

    }

    /**
     * This function returns the edit button for the first application in the application list
     * @returns The element with the id of "application-list-item-edit-button"
     */
    public static getInitialApplicationListItemEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(APPLICATION_LIST_ITIM_EDIT_BUTTON);
    }

    /**
     * This function returns the application list item
     * @returns The element with the id of "applications-list-item-heading"
     */
    public static getApplicationListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(APPLICATION_LIST_ITEM);
    }

    /**
     * This method is used to get delete application list item button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDeleteApplicationListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(APPLICATION_DELETE);
    }

    /**
     * This method is used to get delete application check box.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCheckBoxDeleteApplication(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DELETE_APPLICATION_CONFIRMATION_CHECK_BOX);
    }

    /**
     * This method is used to get delete application confirmation button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnConfirmDeleteApplication(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DELETE_APPLICATION_BUTTON);
    }

    /**
     * This method is used to return check management application box.
     * @returns The element with the id of "minimal-application-create-wizard-management-app-checkbox"
     */
    public static checkManagementApplication(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MANAGEMENT_APPLICATION_CHECK_BOX);
    }

    /**
     * Get Register button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAppRegisterBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_OIDC_REGISTER);
    }

    /**
     * This function returns the error prompt in application page
     */
    public static getErrorPrompt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ERROR_PROMPT).find(HTMLKeyWordsConstants.HTML_PARAGRAPH);
    }
}
