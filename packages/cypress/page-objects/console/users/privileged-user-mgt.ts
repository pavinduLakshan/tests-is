/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />
import { CustomTimeoutConfigs } from "../../../configs";

//Locators
const ENABLE_PRIVILEGED_USER_TOGGLE = "[data-componentid=administrator-settings-page-enable-toggle]", 
      UNCHECKED_TOGGLE_CLASS = "ui toggle checkbox",
      ADD_EXTERNAL_ADMIN_DROPDOWN = "[data-componentid=admins-add-external-admin]",
      ADD_INTERNAL_ADMIN_DROPDOWN = "[data-componentid=admins-add-internal-admin]",
      ADMIN_SETTINGS_BUTTON = "[data-componentid=asgardeo-administrators-admin-settings-button]",
      BTN_FINSIH = "[data-componentid=asgardeo-administrators-add-admin-wizard-modal-finish-button]",
      ASSIGN_USER_CHECK_BOX = "[data-testid=transfer-list-item-UserLastName-UserFirstName-checkbox]",
      USER_SEARCH_INPUT = "[data-componentid=add-admin-user-basic-transfer-component-unselected-groups-search-input]",
      DATA_TABLE_ROW = "[data-componentid=data-table-row]",
      ADD_ADMIN_BUTTON = "[data-testid=primary-button]",
      EMPTY_SEARCH_PLACEHOLDER_ICON = "[data-testid=\"empty-placeholder-icon\"]",
      LIST_USER_RESOURCE_LIST = "[data-componentid=asgardeo-administrators-list]",
      ADVANCE_USER_SEARCH = "[data-componentid=advanced-search-input]",
      BTN_ADMIN_ROW_DELETE = "[data-componentid=\"administrators-list-item-delete-button\"]",
      LIST_USER_RESOURCE_LIST_FOR_ADMINS_IN_CONSOLE_SETTING = "[data-componentid=administrators-table]",
      ENABLE_PRIVILEGED_USER_TOGGLE_IN_CONSOLE_SETTING = "[data-componentid=administrators-admin-settings-button]", 
      BUTTON_ADD_ADMINISTRATOR_CONSOLE_SETTING = "[data-componentid='administrators-add-button']",
      ADD_INTERNAL_ADMIN_DROPDOWN_IN_CONSOLE_SETTING 
      = "[data-componentid='administrators-add-existing-user-dropdown-item']",
      ADD_EXTERNAL_ADMIN_DROPDOWN_IN_CONSOLE_SETTING = 
      "[data-componentid=administrators-add-external-admin-dropdown-item]",
      ADD_EXISTING_USER__FORM_IN_CONSOLE_SETTING = "[data-componentid='add-exiting-user-wizard-form-username-field']";

export class PrivilegedUserMgt {

     // Get Privilege management feature enable toggle button class status
     public static UNCHECKED_TOGGLE_BUTTON_CLASS = "ui toggle checkbox";
     public static CHECKED_TOGGLE_CLASS = "ui checked toggle checkbox";
     public static ADMINISTRATOR_NAVIGATION_PARENT_TAB = "[data-componentid=resource-tabs";
     public static DATA_TABLE_ROW_CONST = DATA_TABLE_ROW;
     public static TOGGLE_BUTTON_CLASS_CONSOLE_SETTING = ".oxygen-radio-group .MuiFormControlLabel-root";

    /**
     * To enable privileged usr mgt.
     * @return {Cypress.Chainable<Element>}
     */
    public static enablePrivilegedUserMgt(): Cypress.Chainable<JQuery<HTMLElement>> {

        // Privileged user mgt API will take some time to return the response
        return cy.get(ENABLE_PRIVILEGED_USER_TOGGLE, CustomTimeoutConfigs.getCustomPageLoadTimeout());
    }

    public static enablePrivilegedUserMgtInConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        // Privileged user mgt API will take some time to return the response
        return cy.get(ENABLE_PRIVILEGED_USER_TOGGLE_IN_CONSOLE_SETTING, 
            CustomTimeoutConfigs.getCustomPageLoadTimeout());
    }

    /**
     * It returns a Cypress chainable object that represents the user search input element
     * @returns A chainable command that returns a JQuery object.
     */
    public static getUserSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_SEARCH_INPUT);
    }

    public static getUserSearchInputInConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_EXISTING_USER__FORM_IN_CONSOLE_SETTING);
    }

    /**
     * It returns a Cypress chainable object that represents the administrator list element
     * @returns A chainable command that returns a JQuery object.
     */
     public static getAdministratorList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LIST_USER_RESOURCE_LIST);
    }

    public static getAdministratorListFromConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LIST_USER_RESOURCE_LIST_FOR_ADMINS_IN_CONSOLE_SETTING);
    }

    /**
     * It returns a Cypress chainable object that represents the empty user search output element
     * @returns A chainable command that returns a JQuery object.
     */
      public static getEmptyPlaceholder(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMPTY_SEARCH_PLACEHOLDER_ICON);
    }

    /**
     * It returns a Cypress chainable object that represents the data table row.
     * @returns A chainable command that returns a JQuery object.
     */
     public static getTableRow(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DATA_TABLE_ROW);
    }

     /**
     * It returns a Cypress chainable object that represents the advance user search input element
     * @returns A chainable command that returns a JQuery object.
     */
      public static getAdvanceUserSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCE_USER_SEARCH);
    }

    /**
     * It returns a Cypress chainable object that represents the assign user checkbox element
     * @returns A chainable command that returns a JQuery object.
     */
     public static getAssignUserCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_USER_CHECK_BOX, CustomTimeoutConfigs.getCustomPageLoadTimeout());
    }

    /**
     * Get the privilege user manager feature enabling/disabling toggle.
     * @return {Cypress.Chainable<Element>}
     */
    public static getCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UNCHECKED_TOGGLE_CLASS, CustomTimeoutConfigs.getCustomPageLoadTimeout());
    }

    /**
     * Get the privilege user manager feature finish button.
     * @return {Cypress.Chainable<Element>}
     */
     public static getFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FINSIH);
    }

    /**
     * Click add administrators button.
     * @return {Cypress.Chainable<Element>}
     */
    public static addAdministrator(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_ADMIN_BUTTON);
    }

    public static addAdministratorInConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BUTTON_ADD_ADMINISTRATOR_CONSOLE_SETTING);
    }

    /**
     * Add internal administrator button.
     * @return {Cypress.Chainable<Element>}
     */
    public static addInternalAdministrator(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_INTERNAL_ADMIN_DROPDOWN);
    }

    public static addInternalAdministratorInConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_INTERNAL_ADMIN_DROPDOWN_IN_CONSOLE_SETTING);
    }

     /**
     * Get the creation wizard invited admin email input.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getInvitedAdminRolesInput(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get("[data-componentid=add-exiting-user-wizard-form-roles-field]");
    }

     /**
     * Add external administrator button.
     * @return {Cypress.Chainable<Element>}
     */
    public static addExteralAdministrator(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_EXTERNAL_ADMIN_DROPDOWN);
    }

    public static addExteralAdministratorInConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_EXTERNAL_ADMIN_DROPDOWN_IN_CONSOLE_SETTING);
    }

    /**
     * 
     * Add administrator button.
     * @return {Cypress.Chainable<Element>}
     */
    public static getAdministratorSettings(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADMIN_SETTINGS_BUTTON);
    }   

    /**
     * Delete administrator button.
     * @return {Cypress.Chainable<Element>}
     */
    public static getAdministratorDeleteBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADMIN_ROW_DELETE);
    }
}
