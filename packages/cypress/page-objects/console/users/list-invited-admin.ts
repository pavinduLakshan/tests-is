/**
 * Copyright (c) 2021, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

//Button
const ADD_ADMIN_BUTTON = "[data-testid='primary-button']";

// Table
const TABLE_DATA_ATTR: string = "user-mgt-user-list";
const TABLE_BODY_DATA_ATTR: string = "data-table-body";
const TABLE_ROW_HEADING_DATA_ATTR: string = "user-mgt-user-list-item-heading";
const TABLE_ROW_EDIT_BUTTON_DATA_ATTR: string = "users-list-item-edit-button";
const TABLE_ROW_DELETE_BUTTON_DATA_ATTR: string = "users-list-item-delete-button";
const NEW_LIST_PLACEHOLDER: string = "user-mgt-user-list-empty-placeholder";
const NEW_LIST_PLACEHOLDER_ACTION_CONTAINER: string = "users-list-empty-placeholder-" +
    "action-container";

// Page Layout.
const PAGE_LAYOUT_HEADER_DATA_ATTR: string = "users-page-layout-page-header";
const PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR: string = "users-page-layout-page-header-title";
const PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR: string = "users-page-layout-page-header-" +
    "sub-title";
const PAGE_LAYOUT_HEADER_ACTION: string = "users-add-user-button";
const ADMIN_LIST_STATUS_DROPDOWN_ICON_CLASS: string ="[data-componentid=\"asgardeo-administrators-"
+ "list-userstore-dropdown\"] .dropdown.icon";
const ADMIN_LIST_STATUS_MENU_ITEM_CLASS: string = "[data-componentid=\"asgardeo-administrators-"
+ "list-userstore-dropdown\"] .menu .item";

/**
 * Class containing Users List Page objects.
 */
export class ListInvitedAdminPage {

    // User invitaion Status.
    static readonly ACCEPTED = "Accepted";
    static readonly EXPIRED = "Expired";
    static readonly PENDING = "Pending";
    
    /**
     * Get the table element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getTable(): Cypress.Chainable<Element> {
        return cy.dataTestId(TABLE_DATA_ATTR);
    }

    /**
     * Get the table body element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getTableBody(): Cypress.Chainable<Element> {
        return cy.dataTestId(TABLE_BODY_DATA_ATTR);
    }

    /**
     * Get the the table item heading.
     * @return {Cypress.Chainable<Element>}
     */
    public static getTableItemHeading(): Cypress.Chainable<Element> {
        return cy.dataTestId(TABLE_ROW_HEADING_DATA_ATTR);
    }

    /**
     * Get the the table item edit button.
     * @return {Cypress.Chainable<Element>}
     */
    public static getTableItemEditButton(): Cypress.Chainable<Element> {
        return cy.dataTestId(TABLE_ROW_EDIT_BUTTON_DATA_ATTR);
    }

    /**
     * Get the the table item delete button.
     * @return {Cypress.Chainable<Element>}
     */
    public static getTableItemViewButton(): Cypress.Chainable<Element> {
        return cy.dataTestId(TABLE_ROW_DELETE_BUTTON_DATA_ATTR);
    }

    /**
     * Get the page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getPageLayoutHeader(): Cypress.Chainable<Element> {
        return cy.dataTestId(PAGE_LAYOUT_HEADER_DATA_ATTR);
    }

    /**
     * Get the page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getPageLayoutHeaderTitle(): Cypress.Chainable<Element> {
        return cy.dataTestId(PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    }

    /**
     * Get the page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element> {
        return cy.dataTestId(PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR);
    }

    /**
     * Get the page layout header action element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getPageLayoutHeaderAction(): Cypress.Chainable<Element> {
        return cy.dataTestId(PAGE_LAYOUT_HEADER_ACTION);
    }

    /**
     * Get the list new placeholder element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getNewTablePlaceholder(): Cypress.Chainable<Element> {
        return cy.dataTestId(NEW_LIST_PLACEHOLDER);
    }

    /**
     * Get the list new placeholder action element.
     * @return {Cypress.Chainable<Element>}
     */
    public static getNewTablePlaceholderAction(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.dataTestId(NEW_LIST_PLACEHOLDER_ACTION_CONTAINER)
            .find("button");
    }

    /**
     * Click add administrators button.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    public static clickAddAdministrator(): Cypress.Chainable<JQuery<Element>> {
        return cy.get(ADD_ADMIN_BUTTON);
    }

    /**
     * Returns the Cypress chainable object that represents the admin list status dropdown element.
     *
     * @return {Cypress.Chainable<JQuery<Element>>} The admin list status dropdown element.
     */
    public static getAdminListStatusDropDownIcon(): Cypress.Chainable<JQuery<Element>> {

       return cy.get(ADMIN_LIST_STATUS_DROPDOWN_ICON_CLASS);
    }

    /**
     * Returns the Cypress chainable object that represents the admin list status menu item list element.
     *
     * @return {Cypress.Chainable<JQuery<Element>>} The admin list status menu item list element.
     */
    public static getAdminListStatusMenuItemList(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(ADMIN_LIST_STATUS_MENU_ITEM_CLASS);
    }
}
