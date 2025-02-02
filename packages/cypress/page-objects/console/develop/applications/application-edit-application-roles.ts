/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

// Locators - Application Edit Page - Application Roles Tab
const NEW_ROLE_BTN = "[data-componentid=primary-button]";
const ROLE_NAME_INPUT = "[data-componentid=new-app-role-basics-role-name-input]";
const ROLE_CREATION_WIZARD_NEXT_BTN = "[data-componentid=create-app-role-wizard-next-button]";
const ROLE_CREATION_WIZARD_FINISH_BTN = "[data-componentid=create-app-role-wizard-finish-button]";
const ROLE_CREATION_PERMISSION_LIST_ITEM_0_CHECKBOX = "[data-componentid=new-app-role-permissions-permission-item-0]";
const ROLE_CREATION_PERMISSION_LIST_ITEM_1_CHECKBOX = "[data-componentid=new-app-role-permissions-permission-item-1]";
const ROLE_LIST_EDIT_BTN = "[data-componentid=application-roles-tab-item-edit-button]";
const ROLE_EDIT_MODAL_SEARCH_INPUT = "[data-componentid=edit-app-role-wizard-permissions-list-search-input]";
const ROLE_EDIT_LIST_ITEM_0_CHECKBOX = "[data-componentid=edit-app-role-wizard-permission-item-0]";
const ROLE_EDIT_MODAL_SAVE_BTN = "[data-componentid=edit-app-role-wizard-edit-permissions-modal-save-button]";
const ROLE_LIST_DELETE_BTN = "[data-componentid=application-roles-tab-item-delete-button]";
const ROLE_DELETE_MODAL_DELETE_CONFIRMATION_CHECKBOX =
    "[data-componentid=application-roles-tab-delete-confirmation-modal-assertion-checkbox]";
const ROLE_DELETE_MODAL_CONFIRM_BTN = "[data-componentid=application-roles-tab-delete-confirmation-modal-confirm-button]";

/**
 * Class containing Asgardeo Console Application Edit Page - Roles Tab Page Objects
 * Console -> Applications -> <application> -> Roles Tab
 */
export class ApplicationEditRolesPage {

    /**
     * Get the new role button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewRoleButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NEW_ROLE_BTN);
    }

    /**
     * Get the role name input.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_NAME_INPUT);
    }

    /**
     * Get the role creation wizard next button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleCreationWizardNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_CREATION_WIZARD_NEXT_BTN);
    }

    /**
     * Get the role creation wizard finish button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleCreationWizardFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_CREATION_WIZARD_FINISH_BTN);
    }

    /**
     * Get the role creation permission list item 0 checkbox.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleCreationPermissionListItem0Checkbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_CREATION_PERMISSION_LIST_ITEM_0_CHECKBOX);
    }

    /**
     * Get the role creation permission list item 1 checkbox.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleCreationPermissionListItem1Checkbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_CREATION_PERMISSION_LIST_ITEM_1_CHECKBOX);
    }

    /**
     * Get the role list edit button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleListEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_LIST_EDIT_BTN);
    }

    /**
     * Get the role edit modal search input.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleEditModalSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_EDIT_MODAL_SEARCH_INPUT);
    }

    /**
     * Get the role edit permission list item 1 checkbox.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleEditListItem0Checkbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_EDIT_LIST_ITEM_0_CHECKBOX);
    }

    /**
     * Get the role edit modal save button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleEditModalSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_EDIT_MODAL_SAVE_BTN);
    }

    /**
     * Get the role delete button.
     */
    public static getRoleListDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_LIST_DELETE_BTN);
    }
    
    /**
     * Get the role deletion modal confirmation checkbox.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRoleDeleteModalConfirmationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_DELETE_MODAL_DELETE_CONFIRMATION_CHECKBOX);
    }

    /**
     * Get the role deletion modal confirm button.
     */
    public static getRoleDeleteModalConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ROLE_DELETE_MODAL_CONFIRM_BTN);
    }
}
