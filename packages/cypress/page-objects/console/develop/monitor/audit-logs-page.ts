/**
 * Copyright 2024 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="Cypress" />

// PAGE LOCATORS
const LOGS_MAIN_CONTAINER = "[data-componentid=\"audit-logs-main-container\"]";
const LOGS_TIME_RANGE_DROPDOWN = "[data-componentid=\"audit-logs-audit-timerange-dropdown\"]";
const LOGS_LAST_HOUR_MENU_ITEM = "Last hour";
const LOGS_SEARCH_BAR =  "[data-componentid=\"audit-logs-search-input\"]";
const NO_LOGS_DISPLAY = "[data-componentid=\"audit-logs-empty-search-placeholder\"]";
const LOGS_SEARCH_INPUT = "[data-componentid=\"logs-page-search-input\"]";
const SEARCH_BUTTON = "[data-componentid=\"audit-logs-search-button\"]";
const RUN_QUERY_BTN = "[data-componentid=\"audit-logs-search-button\"]";
const LOGS_TABS = "[data-componentid=\"resource-tabs\"]";

/**
 * Class containing asgardeo console audit logs page elements.
 * Console -> Develop -> Monitor
 */
export class AuditLogsPage {

    /**
     * It returns a chainable object that represents the logs container component.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getLogsContainer(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOGS_MAIN_CONTAINER);
    }

    /**
     * It returns a chainable object that represents the time range selector dropdown.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTimeRangeDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOGS_TIME_RANGE_DROPDOWN);
    }

    public static getLogsTab(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOGS_TABS);
    }
    
    /**
     * It returns a chainable object that represents the last hour menu item.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getLastHourMenu(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(LOGS_LAST_HOUR_MENU_ITEM);
    }

    /**
     * This function returns the search bar element.
     * @returns The search bar element
     */
    public static getSearchBar(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOGS_SEARCH_BAR);
    }

    /**
     * This function returns a Cypress chainable object that contains the text "No logs to display"
     * @returns A Cypress Chainable object.
     */
    public static getEmptyLogsMessage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NO_LOGS_DISPLAY);
    }

    /**
     * It returns the element with the id "searchInput"
     * @returns The element with the id of "search_form_input_homepage"
     */ 
    public static getSeachInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOGS_SEARCH_INPUT);
    }

    /**
     * This function returns a Cypress chainable object representing the search button element on a
     * webpage.
     * @returns button with the id "logs-page-search-button"
     */
    public static getSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(SEARCH_BUTTON);
    }

    /**
     * It returns the run query button.
     */ 
    public static getRunQueryButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RUN_QUERY_BTN);
    }

}
