/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

//Locators
const ASSIGN_GROUP = "[data-testid$=\"application-role-groups-groups-list-assign-button\"]",
    SEARCH_APP_ROLES = "[data-componentid$=\"-application-list-search-input\"]",
    SEARCH_APPLICATION = "[data-componentid=\"application-roles-page-search-input\"]",
    TAB_TITLE = "[data-componentid=\"heading\"]",
    ASSIGN_GROUPS_WIZARD = "[data-componentid=\"application-role-assign-group-modal-unselected-groups\"]",
    GROUP_SEARCH_INPUT_FIELD = "[data-testid=\"transfer-component-unselected-groups-search-input\"]",
    ALL_GROUPS_CHECK_BOX = "[data-testid=\"user-mgt-add-user-wizard-modal-unselected-groups-select-all-checkbox\"]",
    APP_ROLES_EXTERNAL_GROUPS_TAB = "[data-componentid=resource-tabs] > .pointing > :nth-child(2)",
    APP_ROLES_INVITED_USER_GROUPS_TAB = "[data-componentid=resource-tabs] > .pointing > :nth-child(3)",
    APP_ROLE_GROUP_SELECT_CHECKBOX = "[data-componentid=application-role-assign-group-modal-unselected-",
    PRIMARY_BTN = "[data-componentid=primary-button]",
    ROLE_GROUP_ASSIGNMENT_ACCORDION = "[data-componentid=\"edit-role-local-groups-local-groups-accordion\"]",
    ROLE_GROUP_ASSIGNMENT_GROUP_LIST = "[data-testid=\"ArrowDropDownIcon\"]",
    ROLE_GROUP_ASSIGNMENT_UPDATE_BUTTON = "[data-componentid=\"edit-role-local-groups-local-groups-update-button\"]",
    ROLES_LIST_ADVANCED_SEARCH = "[data-testid=\"advanced-search-input\"]",
    ROLES_LIST_SEARCH_RESULT = "[data-componentid=\"role-mgt-roles-list\"]",
    ROLES_EDIT_PERMISSION_LIST = "[data-componentid=\"edit-role-permissions-textfield\"]",
    USERS_SEARCH_INPUT_FIELD = "[data-componentid=edit-role-users-user-search-text-input]",
    USERS_SEARCH_DROPDOWN = "[data-testid=ArrowDropDownIcon]",
    ROLES_SEARCH_INPUT = "[data-componentid=\"advanced-search\"]",
    ASSIGN_USERS_BUTTON_CONTAINER = "[data-componentid=\"empty-placeholder-action-container\"]",
    ASSIGN_USERS_BTN = "[data-componentid=\"primary-button\"]";


export class ApplicationRolesPage {

    public static readonly PAGE_NAVIGATION_TABS = "[data-testid$=\"resource-tabs\"]";
    public static readonly USERS_TAB: string = "[data-componentid=resource-tabs]";

    /**
     * Get application roles search
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationRolesSearch(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SEARCH_APP_ROLES);
    }

    /**
     * Get search application button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationSearch(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SEARCH_APPLICATION);
    }

    /**
     * Get the title to the page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTabTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TAB_TITLE);
    }

    /**
     * Get the assign group button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAssignGroupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_GROUP);
    }

    /**
     * Get assign users wizard.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAssignGroupsModal(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_GROUPS_WIZARD);
    }

    /**
     * Get groups search input field.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getGroupSearchInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(GROUP_SEARCH_INPUT_FIELD);
    }

    /**
    * Get add all groups check box
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAllGroupsCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALL_GROUPS_CHECK_BOX);
    }

    /**
     * Get application roles external groups tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationRolesExternalGroupsTab(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(APP_ROLES_EXTERNAL_GROUPS_TAB);
    }

    /**
     * Get application roles invited user groups
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationRolesInvitedUserGroupsTab(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(APP_ROLES_INVITED_USER_GROUPS_TAB);
    }

    /**
     * Get application role group select checkbox
     * @param {string} groupName - Group name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationRoleGroupSelectCheckbox(groupName: string): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(APP_ROLE_GROUP_SELECT_CHECKBOX + groupName + "-checkbox]");
    }

    /**
     * Get primary button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPrimaryButton(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(PRIMARY_BTN);
    }

    static getRoleGroupAssignmentAccordion(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_GROUP_ASSIGNMENT_ACCORDION);
    }

    static getRoleGroupAssignmentGroupList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_GROUP_ASSIGNMENT_GROUP_LIST);
    }

    static getRoleGroupAssignmentUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_GROUP_ASSIGNMENT_UPDATE_BUTTON);
    }

    static getRolesListAdvancedSearch(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLES_LIST_ADVANCED_SEARCH);
    }

    static getSearchedRolesList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLES_LIST_SEARCH_RESULT);
    }

    static getRolesEditPermissionList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLES_EDIT_PERMISSION_LIST);
    }

    /**
     * Get user roles assigned users tab user search input filed
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    static getUsersSearchInputField(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(USERS_SEARCH_INPUT_FIELD);
    }

    /**
     * Get user roles assigned users tab user search dropdown icon
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    static getUsersSearchDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(USERS_SEARCH_DROPDOWN);
    }

    /**
     * This function returns the roles search input field in the Roles page.
     * @returns The roles search input field.
     */
    public static getRolesSearchInputField(): Cypress.Chainable<JQuery<HTMLElement>> {  

        return cy.contains(ROLES_SEARCH_INPUT);
    }

    /**
     * This function returns the Assign Users button container component.
     * @returns The roles Assign Users button container.
     */
    public static getAssignUsersButtonContainer(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_USERS_BUTTON_CONTAINER);
    }

    /**
     * This function returns the Assign Users button in the Roles page Users tab.
     * @returns The roles page Assign Users button.
     */
    public static getAssignUsersButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(ASSIGN_USERS_BTN);
    }
}
