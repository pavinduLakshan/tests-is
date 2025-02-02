/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
import {HTMLKeyWordsConstants} from "../../../constants";

const ADVANCE_SEARCH_BUTTON = "[data-componentid=\"group-mgt-groups-list-advanced-search-options-button\"]",
    ADVANCE_SEARCH_BAR = "[data-componentid=\"group-mgt-groups-list-advanced-search-input\"]",
    TEXT_ADVANCE_SEARCH_INPUT = "[data-testid=\"group-mgt-groups-list-advanced-search-filter-value-input\"]",
    SEARCH_BUTTON = "[data-testid=\"group-mgt-groups-list-advanced-search-search-button\"]",
    EDIT_BUTTON_CLASS = "[class=\"grey pencil alternate small icon list-icon data-table-list-icon\"]",
    INPUT_GROUP_NAME = "input[name=\"groupName\"]",
    USERS_TAB = "[data-testid=resource-tabs] > .pointing > :nth-child(2)",
    GROUP_USER_LIST_EDIT_BUTTON = "[data-testid=\"group-mgt-edit-group-users-users-list-edit-button\"]",
    SECOND_CHECK_BOX = "[data-componentid=\"transfer-list-item-remote-User_2-checkbox\"]",
    FOURTH_CHECK_BOX = "[data-componentid=\"transfer-list-item-remote-User_4-checkbox\"]",
    MODAL_SAVE_BUTTON = "[data-testid=\"group-mgt-edit-group-users-assign-user-wizard-modal-save-button\"]",
    VIEW_GROUP_USER_USERNAME = "[data-testid=\"group-mgt-edit-group-users-item-sub-heading\"]",
    UPDATE_GROUP_NAME = "[data-testid=\"group-mgt-edit-group-basic-group-update-button\"]",
    ASSIGN_USER_WIZARD = "[data-testid=\"group-mgt-edit-group-users-assign-user-wizard-modal\"]",
    REMOTE_GROUP_1 = "remote_group_1",
    NEW_GROUP_BUTTON = "[data-testid=group-mgt-groups-list-empty-list-empty-placeholder-add-button]",
    DELETE_GROUP_BUTTON = "[class=\"grey trash alternate small icon list-icon data-table-list-icon\"]",
    EDIT_GROUP_BUTTON = "[class=\"grey pencil alternate small icon list-icon data-table-list-icon\"]",
    CHECK_BOX_CONFIRM_DELETE_USER = "[data-componentid=\"confirmation-modal-assertion-checkbox\"]",
    ADMIN_DELETE_CONFIRMATION_BUTTON = "[data-componentid=\"confirmation-modal-confirm-button\"]",
    INPUT_GROUP_USER_SEARCH = "[data-componentid=\"transfer-component-unselected-groups-search-input\"]",
    DROP_DOWN_GROUP_LIST_STORE = "[data-testid=\"group-mgt-groups-list-stores-dropdown\"]",
    DROP_DOWN_GROUP_LIST_STORE_ITEMS_COLLECTION = "div[class=\"visible menu transition\"]",
    DROP_DOWN_ITEM_USERSTORE_OPTIONS = "div[role=\"option\"]";

export class GroupListPage {

    // This is group edit page user add checkbox
    public static readonly CHECK_BOX_ADD_USER = "[data-componentid=\"transfer-list-item-";

    /**
     * This function returns the advanced search button.
     * @returns The element with the id of advanced-search-button.
     */
    public static getAdvancedSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCE_SEARCH_BUTTON);
    }

    /**
     * This function returns the advanced search bar.
     * @returns The element with the id of advanced-search-bar.
     */
     public static getAdvancedSearchBar(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCE_SEARCH_BAR)
    }
    
    /**
     * This function returns the text input element for the advance search.
     * @returns The text input field for the advance search.
     */
    public static getAdvanceSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TEXT_ADVANCE_SEARCH_INPUT);
    }

    /**
     * > This function returns the name of the first remote group.
     * @returns The name of the remote group 1.
     */
    public static getRemoteGroup1Name(): string {

        return REMOTE_GROUP_1;
    }

    /**
     * This function returns the search button element.
     * @returns A chainable object that represents the search button.
     */
    public static getSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SEARCH_BUTTON);
    }

    /**
     * This function returns the edit button element.
     * @returns A chainable object of type JQuery<HTMLElement>.
     */
    public static getEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_BUTTON_CLASS);
    }


    /**
     * This function returns the input field for the group name.
     * @returns The input field for the group name.
     */
    public static getGroupNameInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_GROUP_NAME);
    }

    /**
     * This function returns the users tab button element.
     * @returns A chainable command that returns a JQuery object of the element.
     */
    public static getUsersTabButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERS_TAB);
    }


    /**
     * This function returns the edit button for the group user list.
     * @returns The element with the id of group-user-list-edit-button.
     */
    public static getGroupUserListEditBustton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(GROUP_USER_LIST_EDIT_BUTTON);
    }

    /**
     * This function returns the first checkbox from the user list.
     * @returns The first checkbox from the user list.
     */
    public static getSecondCheckBoxFromUserList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SECOND_CHECK_BOX);
    }

    /**
     * This function returns the fourth checkbox from the user list.
     * @returns The fourth checkbox from the user list.
     */
    public static getFourthCheckBoxFromUserList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FOURTH_CHECK_BOX);
    }

    /**
     * This function returns the save button element from the modal window.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getModalSaveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MODAL_SAVE_BUTTON);
    }

    /**
     * This function returns a list of all the usernames of the users in the group.
     * @returns The username of the user in the group.
     */
    public static getViewUserNameList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(VIEW_GROUP_USER_USERNAME);
    }

    /**
     * This function returns the update group button.
     * @returns The update group button.
     */
    public static getUpdateGroupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UPDATE_GROUP_NAME);
    }

    /**
     * This function returns the Assign User Wizard element.
     * @returns A JQuery object.
     */
    public static getAssignUserWizard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_USER_WIZARD);
    }

    /**
     * This function returns the new group button element.
     * @returns Create new group button element.
     */
     public static getNewGroupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NEW_GROUP_BUTTON);
    }

    /**
     * This function returns the Group delete element.
     * @returns Delete group button element.
     */
     public static getDeleteGroupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DELETE_GROUP_BUTTON);
    }

    /**
     * This function returns the Group edit element.
     * @returns edit group button element.
     */
     public static getEditGroupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_GROUP_BUTTON);
    }

    /**
     * This function returns the checkbox in confirmation pop-up for groups 
     * @return Delete confirmation checkbox
     */
     public static getGroupDeleteConfirmationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CHECK_BOX_CONFIRM_DELETE_USER);
    }

    /**
     * This function returns the confirm button in the delete pop-up for groups
     * @return Delete confirmation button
     */
     public static getGroupDeleteConfirmationButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ADMIN_DELETE_CONFIRMATION_BUTTON);
    }

    /**
     * This function returns the user tab user search at the group edit page
     * @return Delete confirmation button
     */
     public static getGroupUserSearch(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INPUT_GROUP_USER_SEARCH);
    }

    /**
     * This function returns the group list user store dropdown
     * @return group list user store dropdown
     */
    public static getGroupListUserStoreDropSown() :Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROP_DOWN_GROUP_LIST_STORE);
    }

    /**
     * This function returns the group list user store dropdown items
     * @return group list user store dropdown items
     */
    public static getGroupListUserStoreDropDownItems() :Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROP_DOWN_GROUP_LIST_STORE_ITEMS_COLLECTION);
    }

    /**
     * This function returns the group list user store dropdown options
     * @return group list user store dropdown options
     */
    public static getGroupListUserStoreOption() :Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROP_DOWN_ITEM_USERSTORE_OPTIONS);
    }
}
