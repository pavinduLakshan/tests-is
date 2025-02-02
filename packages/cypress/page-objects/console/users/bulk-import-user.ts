/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="cypress" />

const ADD_USER_DROP_DOWN = "[data-componentid=users-add-user-dropdown]",
    BULK_IMPORT_USER_DROP_DOWN_ITEM = "[data-componentid=users-bulk-import-users-dropdown-item]",
    MODAL_BULK_IMPORT_USER = "[data-componentid=user-mgt-bulk-import-user-wizard-modal]",
    FILE_UPLOAD_BUTTON = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-form-wizard-csv-file-picker-" +
        "upload-button]",
    FILE_INPUT_FIELD = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-form-wizard-csv-file-picker-" +
        "input]",
    FILE_ERROR_MESSAGE = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-form-wizard-csv-file-picker-" +
        "error-message]",
    VALIDATION_ERROR_MESSAGE = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-alert-message]",
    BTN_FINISH = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-finish-button]",
    BTN_CLOSE = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-cancel-button]",
    BULK_IMPORT_RESPONSE_LIST = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-list]",
    BULK_IMPORT_RESPONSE_SUCESS_ALERT = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-list-" +
        "success-alert]",
    BULK_IMPORT_RESPONSE_SUCESS_ALERT_TITLE = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-" +
        "list-success-alert-title]",
    BULK_IMPORT_RESPONSE_ERROR_ALERT = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-list-" +
        "error-alert]",
    BULK_IMPORT_RESPONSE_ERROR_ALERT_TITLE = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-" +
        "list-error-alert-title]",
    DATA_TABLE_USERNAME_HEADER = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-list-" +
        "username-item-heading]",
    ADVANCED_SEARCH_INPUT = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-list-" +
        "advanced-search-input]",
    ADVANCED_SEARCH_BUTTON = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-response-list-" +
        "advanced-search-search-button]",
    FILE_BASED_TAB = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-metadataFile-tab-option]",
    MANUAL_TAB = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-manualConfiguration-tab-option]",
    EMAILS_FIELD = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-email-input]",
    INVITE_BUTTON = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-invite-button]",
    MULTIPLE_USERS_SUCESS_ALERT = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-"
        + "success-alert",
    MULTIPLE_USERS_ADVANCED_SEARCH_INPUT = "[data-componentid=user-mgt-bulk-import-user-"
        + "wizard-modal-manual-response-list-advanced-search-input]",
    MULTIPLE_INVITE_TABLE_USERNAME_HEADER = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-manual-"
        + "response-list-username-item-heading]",
    INVALID_EMAIL_ERROR_MESSAGE = "[id=tags-filled-helper-text]",
    MANUAL_INVITE_BTN_CLOSE = "[data-componentid=user-mgt-bulk-import-user-wizard-modal-close-button]";

export class BulkUserImportPage {
    
    static getAddUserDropDown(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ADD_USER_DROP_DOWN);
    }

    static getBulkImportUserDropDownItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BULK_IMPORT_USER_DROP_DOWN_ITEM);
    }

    static getModalBulkImportUser(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MODAL_BULK_IMPORT_USER);
    }

    static getFileUploadButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(FILE_UPLOAD_BUTTON);
    }

    static getFileInputField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(FILE_INPUT_FIELD);
    }

    static getFileErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(FILE_ERROR_MESSAGE);
    }

    static getValidationError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(VALIDATION_ERROR_MESSAGE);
    }

    static getFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_FINISH);
    }

    static getCloseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_CLOSE);
    }

    static getBulkImportResponseList(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BULK_IMPORT_RESPONSE_LIST);
    }

    static getBulkImportResponseSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BULK_IMPORT_RESPONSE_SUCESS_ALERT);
    }

    static getBulkImportResponseSuccessAlertTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BULK_IMPORT_RESPONSE_SUCESS_ALERT_TITLE);
    }

    static getBulkImportResponseErrorAlert(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BULK_IMPORT_RESPONSE_ERROR_ALERT);
    }

    static getBulkImportResponseErrorAlertTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BULK_IMPORT_RESPONSE_ERROR_ALERT_TITLE);
    }

    static getDataTableUsernameHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(DATA_TABLE_USERNAME_HEADER);
    }

    static getAdvancedSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ADVANCED_SEARCH_INPUT);
    }

    static getAdvancedSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ADVANCED_SEARCH_BUTTON);
    }

    static getFileBasedTab(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(FILE_BASED_TAB);
    }

    static getManualBasedTab(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MANUAL_TAB);
    }

    static getEmailsInputField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(EMAILS_FIELD);
    }

    static getInviteButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INVITE_BUTTON);
    }

    static getMultipleUserSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MULTIPLE_USERS_SUCESS_ALERT);
    }

    static getMultipleUserSAdvancedSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MULTIPLE_USERS_ADVANCED_SEARCH_INPUT);
    }

    static getMultipleInviteDataTableUsernameHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MULTIPLE_INVITE_TABLE_USERNAME_HEADER);
    }

    static getErrorText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INVALID_EMAIL_ERROR_MESSAGE);
    }

    static manualInviteCloseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MANUAL_INVITE_BTN_CLOSE);
    }
}
