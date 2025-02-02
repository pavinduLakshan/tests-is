/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />
import { ConsoleGettingStarted } from "../getting-started";

//Locators
const LNK_GROUPS = "[data-testid=side-panel-items-groups]";
const BTN_NEW_GROUP = "[data-testid=group-mgt-groups-list-empty-list-empty-placeholder-add-button]";
const BTN_FINSIH_NEW  = "[data-componentid=group-mgt-create-group-wizard-finish-button]";
const BTN_FINSIH = "[data-testid=group-mgt-create-group-wizard-finish-button]";
const BTN_NEXT= "[data-componentid=group-mgt-create-group-wizard-next-button]";
const DROPDOWN_USERSTORE = "[data-componentid=add-group-form-domain-dropdown]";
const ASSIGN_USER_CHECK_BOX = "new-group-unselected-transfer-list-item-0-tom-peter-checkbox";
const TEXT_ADD_GROUP_NAME = "add-group-form-role-name-input";
const DISPLAY_GROUP_USER_ASSIGNMENT = "group-mgt-edit-group-users-item-heading";
const DISPLAY_GROUP_NAME = "div[class=\"mt-1\"]";
const CREATE_GROUP_WIZARD_DATA_ATTR = "[data-componentid=group-mgt-create-group-wizard]";
const INPUT_GROUP_NAME = "input[name=\"groupName\"]";
const USERS_TAB_TITLE = "[data-componentid=\"heading\"]";
const USERS_EDIT_BUTTON = "[data-testid=\"group-mgt-edit-group-users-users-list-edit-button\"]";
const MANAGE_USERS_WIZARD_DATA_ATTR = "[data-testid=\"group-mgt-edit-group-users-assign-user-wizard-modal\"]"
const USER_CHECK_BOX =
        "[data-testid=\"group-mgt-edit-group-users-unselected-transfer-list-item-0-UserLastName-UserFirstName-checkbox\"]";
const ASSIGN_USER_BUTTON = "[data-testid=\"group-mgt-edit-group-users-users-list-empty-assign-users-button\"]";
const MANAGE_USERS_SAVE_BUTTON = "[data-testid=\"group-mgt-edit-group-users-assign-user-wizard-modal-save-button\"]";
const USER_SEARCH_INPUT_FIELD = 
"[data-testid=\"group-mgt-edit-group-users-user-list-advanced-search\"]";

export class GroupCreationPage {

    public static readonly USERS_PAGE_NAVIGATION_TABS = "[data-testid=\"resource-tabs\"]";

    /**
     * To get the groups button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnGroups(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_GROUPS,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * To get the groups button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FINSIH);
    }

    /**
     * To get the groups button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getFinishButtonNew(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FINSIH_NEW);
    }

    /**
     * To get the groups next button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEXT);
    }

    /**
     * To get the drop down user store
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDropDownUserStore(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_USERSTORE);
    }
    
    /**
     * To get the recovery form.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnNewGroup(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEW_GROUP);
    }

    /**
     * To get the add group name text box.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTextAddGroupName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TEXT_ADD_GROUP_NAME);
    }

    /**
     * To get the assign user check box.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCBAssignUser(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_USER_CHECK_BOX);
    }

    /**
     * Get the Display Group User Assignment Button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDisplayGroupUserAssignment(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DISPLAY_GROUP_USER_ASSIGNMENT);
    }

    /**
     * Get the Group name for a listed Groups set 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getListedGroupName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DISPLAY_GROUP_NAME);
    }

    /**
    * Get the new group modal
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
   public static getNewGroupModal(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CREATE_GROUP_WIZARD_DATA_ATTR);
    }

    /**
    * Get the new group name input
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
   public static getGroupNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_GROUP_NAME);
    }

    /**
     * Get the title to the users page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getUsersTabTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERS_TAB_TITLE);
    }

    /**
     * Get the edit button of the users tab.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUsersTabEditBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERS_EDIT_BUTTON);
    }

    /**
    * Get the Manage user modal
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getManageUsersModal(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MANAGE_USERS_WIZARD_DATA_ATTR);
    }

    /**
    * Get add user check box
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getUserCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_CHECK_BOX);
    }

    /**
    * Get add user search input box
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
     public static getUserSearchInputBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_SEARCH_INPUT_FIELD);
    }

    /**
    * Get add assign user button
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAssignUserButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_USER_BUTTON);
    }

    /**
    * Get save users button
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
     public static getSaveUsersButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MANAGE_USERS_SAVE_BUTTON);
    }
}
