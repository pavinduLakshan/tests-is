/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

const
    ASSIGN_ROLE_BUTTON = "[data-componentid=group-mgt-edit-group-roles-empty-assign-roles-button]",
    ASSIGN_ROLE_SEGMENTED_ACCORDION_TITLE = "[data-componentid=group-mgt-edit-group-roles-edit-app-title-0]",
    ASSIGN_ROLE_LIST_ITEM_0_CHECKBOX = "[data-componentid=group-mgt-edit-group-roles-role-item-0]",
    ASSIGN_ROLE_MODAL_SAVE_BUTTON = "[data-componentid=group-mgt-edit-group-roles-assign-role-wizard-modal-save-button]",
    EDIT_ASSIGNED_ROLE_BUTTON = "[data-componentid=group-mgt-edit-group-roles-roles-list-edit-button]",
    ALERT_SUCCESS_MESSAGE = "[data-testid=alert-success-message]";

/**
 * Class containing Asgardeo Console Groups Edit Page - Roles Tab Page Objects
 * Console -> Groups -> <group> -> Roles Tab
 */
export class GroupEditRolesPage {

    /**
     * Get the assign role button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAssignRoleButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_ROLE_BUTTON);
    }

    /**
     * Get the assign role segmented accordion title.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAssignRoleSegmentedAccordionTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_ROLE_SEGMENTED_ACCORDION_TITLE);
    }

    /**
     * Get the assign role list item 0 checkbox.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAssignRoleListItem0Checkbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_ROLE_LIST_ITEM_0_CHECKBOX);
    }

    /**
     * Get the assign role modal save button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAssignRoleModalSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(ASSIGN_ROLE_MODAL_SAVE_BUTTON);
    }

    /**
     * Get the edit assigned role button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEditAssignedRoleButton(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(EDIT_ASSIGNED_ROLE_BUTTON);
    }

    /**
     * Get the alert success message.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAlertSuccessMessage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_SUCCESS_MESSAGE);
    }
}
