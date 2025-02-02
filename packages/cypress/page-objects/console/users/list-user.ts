/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

const LIST_USERS = "[data-testid=data-table-cell]",
    CONSUMER_USER_LIST = ".pointing > .item:nth-child(2)",
    ALL_USER_LIST = ".ui:nth-child(1) label",
    CONSUMER_USER_TAB = "[data-testid=user-mgt-user-list-item-sub-heading]",
    USER_SEARCH = "[data-testid=advanced-search-options-button]",
    USER_SEARCH_INPUT = "[data-testid=advanced-search-filter-value-input] > input",
    ADVANCED_SEARCH_BUTTON = "[data-testid=advanced-search-search-button]",
    USER_LIST = "[data-componentid=user-mgt-user-list]",
    CONFIRMATION_MODAL_CHECKBOX = "[data-testid=\"undefined-confirmation-modal-assertion-checkbox\"]",
    CONFIRMATION_MODAL_BUTTON = "[data-testid=\"undefined-confirmation-modal-confirm-button\"]",
    RESEND_SUCCESS_MESSAGE_HEADER = "[data-testid=\"alert-success-message\"]",
    INVITATION_RESEND_BUTTON = "i.grey.redo.alternate.small.icon.list-icon.data-table-list-icon",
    INVITATION_DELETE_BUTTON = "i.grey.trash.alternate.small.icon.list-icon.data-table-list-icon",
    ALL_USERS = "[data-testid=user-mgt-user-list]",
    ADMIN_USERS = "[data-componentid=asgardeo-administrators-list]",
    ADMIN_USERS_PENDING = "[data-componentid=asgardeo-administrators-list-layout]",
    ADMIN_INVITE_STATUS_DROPDOWN = "[data-componentid=asgardeo-administrators-list-userstore-dropdown]",
    BTN_USER_EDIT = "[data-componentid=\"users-list-item-edit-button\"]",
    INPUT_USER_FIRST_NAME = "[data-testid=\"user-mgt-user-profile-profile-form-name.givenName-input\"]",
    INPUT_USER_LAST_NAME = "[data-testid=\"user-mgt-user-profile-profile-form-name.familyName-input\"]",
    INPUT_USER_DOB = "[data-testid=user-mgt-user-profile-profile-form-dateOfBirth-input]",
    BTN_UPDATE_USER_PROFILE = "[data-testid=user-mgt-user-profile-form-update-button]",
    BTN_DELETE_USER = "[data-componentid=\"users-list-item-delete-button\"]",
    DELETE_CONFIRMATION_MODAL_CHECKBOX =
    "[data-componentid=\"user-mgt-user-list-confirmation-modal-assertion-checkbox\"]",
    BTN_DELETE_USER_CONRIMATION = "[data-componentid=\"user-mgt-user-list-confirmation-modal-confirm-button\"]",
    DROP_DOWN_LIST_USERS_IN_SECONDORY_USERSTORE = "[data-testid=user-mgt-user-list-userstore-dropdown]",
    SECONDORY_USERSTORE_USERS_DROP_DOWN_ITEMS = "div[class=\"visible menu transition\"]",
    DROP_DOWN_ITEM_SECONDORY_USERSTORE = "div[role=\"option\"]",
    GET_LISTED_SECONDORY_US_USER_USERNAME = "div[class=\"list-container\"]",
    ADVANCED_SEARCH_FILTER_ATTRIBUTE="[data-testid='advanced-search-filter-attribute-dropdown']",
    ATTRIBUTE_ADVANCED_SEARCH_CONDITION = "[data-testid='advanced-search-filter-condition-dropdown']",
    DROPDOWN_LIST = "div[class=\"visible menu transition\"]",
    DROPDOWN_LIST_ITEM = "div[role=\"option\"]",
    BTN_ADVANCED_SEARCH_SEARCH = "[data-testid='advanced-search-search-button']",
    USER_LIST_CONTENT ="td[data-testid=\"data-table-cell\"]",
    PENDING_ADMIN_USERS_IN_CONSOLE_SETTING= " [data-componentid=data-table]",
    ADMIN_INVITE_STATUS_DROPDOWN_FOR_CONSOLE_SETTING = "[data-componentid=administrators-list-userstore-dropdown]";

/* It contains functions that return Cypress chainable objects that represent elements on the User
List page */
export class UserListPage {

    /**
     * It returns a chainable object that will return the list of users
     * @returns The element that matches the selector.
     */
    static getAccountType(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LIST_USERS);
    }

    /**
     * This function returns a list of all the consumer users in the application
     * @returns The consumer user list.
     */
    static getConsumerUserList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONSUMER_USER_LIST);
    }

    /**
     * This function returns a list of all the users in the application
     * @returns The cypress chainable object.
     */
    static getAllUserList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALL_USER_LIST);
    }

    /**
     * This function returns a list of all the users in the admin panel
     * @returns The element with the id of admin-users
     */
    static getAdminUserList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADMIN_USERS);
    }

    /**
     * This function returns a Cypress chainable object that represents the admin user pending list
     * @returns The element with the id of admin-users-pending
     */
    static getAdminUserPendingList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADMIN_USERS_PENDING);
    }

     /**
     * This function returns a Cypress chainable object that represents the admin user pending list
     * @returns The element with the id of admin-users-pending
     */
     static getAdminUserPendingListInConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PENDING_ADMIN_USERS_IN_CONSOLE_SETTING);
    }

   /**
    * It returns a chainable object that represents all the users on the page
    * @returns Cypress.Chainable<JQuery<HTMLElement>>
    */
    static getAllUsers(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALL_USERS);
    }

    /**
     * This function returns the consumer user tab element
     * @returns The consumer user tab element.
     */
    static getConsumerUserTab(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONSUMER_USER_TAB);
    }

    /**
     * This function returns a cypress chainable object that represents the consumer user search input
     * field
     * @returns The element with the id of user-search
     */
    static getConsumerUserSearch(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_SEARCH);
    }

    /**
     * It returns a Cypress chainable object that represents the user search input element
     * @returns A chainable command that returns a JQuery object.
     */
    static getUserSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_SEARCH_INPUT);
    }

    /**
     * This function returns the Advanced Search button element
     * @returns The element with the id of advanced-search-button
     */
    static getAdvancedrSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCED_SEARCH_BUTTON);
    }

    /**
     * It returns a chainable object that contains a JQuery object that contains a list of HTML
     * elements
     * @returns A chainable command that returns a JQuery object.
     */
    static getUserList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_LIST);
    }

    /**
     * It returns the string INVITATION_RESEND_BUTTON.
     * @returns The string INVITATION_RESEND_BUTTON
     */
    static getInvitedAdminInvitationResendButton(): string {

        return INVITATION_RESEND_BUTTON;
    }

    /**
     * It returns the string INVITATION_DELETE_BUTTON.
     * @returns {string}
     */
     static getInvitedAdminInvitationDeleteButton(): string {

        return INVITATION_DELETE_BUTTON;
    }

    /**
     * This function returns the confirmation modal checkbox element
     * @returns The element with the id of "confirmation-modal-checkbox"
     */
    static getConfirmationModalCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONFIRMATION_MODAL_CHECKBOX);
    }

    /**
     * This function returns the confirmation modal button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getConfirmationModalButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONFIRMATION_MODAL_BUTTON);
    }

    /**
     * This function returns the invitation resend confirmation message header
     * @returns The element with the id of RESEND_SUCCESS_MESSAGE_HEADER
     */
    static getInvitationResendConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RESEND_SUCCESS_MESSAGE_HEADER);
    }

    /**
     * This function returns the dropdown button for the invite status filter
     * @returns The element with the id of "admin-invite-status-dropdown"
     */
    static getInviteStatusFilterDropdownButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADMIN_INVITE_STATUS_DROPDOWN);
    }

    /**
     * This function returns the dropdown button for the invite status filter
     * @returns The element with the id of "admin-invite-status-dropdown"
     */
    static getInviteStatusFilterDropdownButtonForConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADMIN_INVITE_STATUS_DROPDOWN_FOR_CONSOLE_SETTING);
    }

    /**
     * This function returns the edit icon
     * @returns The element with the id of "users-list-item-edit-button"
     */
    public static getUserEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_USER_EDIT);
    }

    /**
     * This function returns the update button
     * @returns The element with the id of update button
     */
    static updateUserDetails(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_USER_PROFILE);
    }

    /**
     * This function returns the user delete button
     * @returns The element with the id of "users-list-item-delete-button"
     */
     public static getUserDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DELETE_USER);
    }

    /**
     * This function returns the user delete button
     * @returns The element with the id of "user-mgt-user-list-confirmation-modal-assertion-checkbox"
     */
     public static getUserDeleteConfirmationCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DELETE_CONFIRMATION_MODAL_CHECKBOX);
    }

    /**
     * This function returns the user delete button
     * @returns The element with the id of "user-mgt-user-list-confirmation-modal-confirm-button"
     */
     public static getUserDeleteConfirmationButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DELETE_USER_CONRIMATION);
    }

    /**
     * This function returns the user birth date input field
     * @returns The element with the id of "data-testid=asgardeo-user-mgt-user-profile-profile-form-dateOfBirth-input"
     */
    public static getUserDOBInputField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INPUT_USER_DOB);
    }

    /**
     * This function returns the list user drop down to list users in a userstore
     * @returns The drop down to list users in a userstore
     */
     public static listUserstoreUsersDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(DROP_DOWN_LIST_USERS_IN_SECONDORY_USERSTORE);
    }

    /**
     * This function returns the list drop down items in userstore user listing
     * @returns The drop down to list drop down items
     */
     public static listUserstoreUsersDropdownItems(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SECONDORY_USERSTORE_USERS_DROP_DOWN_ITEMS);
    }

    /**
     * This function returns the list drop down item secondory userstore
     * @returns The drop down to list drop down item secondory userstore
     */
     public static listDropdownItemSecondoryUserstore(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(DROP_DOWN_ITEM_SECONDORY_USERSTORE);
    }

    /**
     * This function returns the listing of secondory userstore users username
     * @returns The drop down to list secondory userstore users username
     */
     public static listSecondoryUserstoreUsersUsername(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(GET_LISTED_SECONDORY_US_USER_USERNAME);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search attributes dropdown.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

         return cy.get(ADVANCED_SEARCH_FILTER_ATTRIBUTE);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search condition dropdown.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchCondition(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_ADVANCED_SEARCH_CONDITION);
    }

    /**
     * It returns a Cypress chainable object that represents the the conditions dropdown list.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConditionDropDownList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_LIST);
    }

    /**
     * It returns a Cypress chainable object that represents the conditions dropdown list items.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConditionDropdownListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_LIST_ITEM);
    }

    /**
     * It returns a Cypress chainable object that represents the conditions search button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADVANCED_SEARCH_SEARCH);
    }

    /**
    * It returns a Cypress chainable object that represents the input field for the user's first name.
    * @returns A Cypress Chainable object.
    */
    public static getUserFirstNameInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_USER_FIRST_NAME);
    }

    /**
     * It returns the test id of the user's first name input field.
     * @returns The test id of the user's first name input field.
     */
    public static getUserFirstNameInputFieldTestId(): string {

        return INPUT_USER_FIRST_NAME;
    }

    /**
     * This function returns the user's last name input field.
     * @returns The element that matches the selector.
     */
    public static getUserLastNameInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_USER_LAST_NAME);
    }

    /**
     * The function `getListedUserContent` returns a Cypress chainable object representing the user list
     * content.
     * @returns A Cypress.Chainable<JQuery<HTMLElement>> object is being returned. This object represents
     * a chainable command in Cypress that allows you to interact with elements on the page using jQuery
     * methods.
     */
    public static getListedUserContent(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_LIST_CONTENT);
    }

}
