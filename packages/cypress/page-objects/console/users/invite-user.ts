/**
 * Copyright 2024 WSO2 LLC. (http://www.wso2.org) 
 * All Rights Reserved.
 * 
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

// Locators
const MODAL_INVITE_USER = "[data-componentid=user-mgt-invite-parent-user-wizard-modal]",
    INVITE_USER_DROP_DOWN_ITEM = "[data-componentid=users-invite-parent-user]",
    TXT_USER_NAMES = "[data-componentid=user-mgt-invite-parent-user-wizard-modal-form-external-form-username-input]",
    BTN_INVITE = "[data-componentid=user-mgt-invite-parent-user-wizard-modal-finish-button]",
    USER_INVITATION_DELETE_CONFIRMATION_MODAL_CHECKBOX = "[data-testid=confirmation-modal-assertion-checkbox]",
    USER_INVITATION_DELETE_CONFIRMATION_MODAL_CONFIRM 
        = "[data-testid=confirmation-modal-confirm-button]",
    USER_INVITATION_RESPONSE_LIST_ERROR_ALERT = "[data-componentid=parent-invite-response-list-error-alert]",
    USER_INVITATION_RESPONSE_LIST_STATUS_ITEM = "[data-componentid=parent-invite-response-list-status-item-heading]",
    USER_MGT_LIST_LAYOUT = "[data-testid=users-user-mgt-user-list-layout]",
    USER_INVITATION_RESPONSE_LIST_DATA = "[data-componentid=parent-invite-response-list-data-table]",
    USER_INVITATION_RESPONSE_LIST_SUCCESS_ALERT = "[data-componentid=parent-invite-response-list-success-alert]",
    USER_INVITATION_DELETE_BUTTON = "[data-componentid=undefined-users-list-item-delete-invitation-button]",
    USER_INVITATION_ACCEPT_PAGE_HEADER = "[data-componentid=user-invitation-accept-page-header]",
    USER_INVITATION_EMAIL_SUB_FIRST_PART = "Invitation to join the ",
    USER_INVITATION_EMAIL_SUB_SECOND_PART = " organization";

export class InviteUserPage {

    public static INVITATIONS_TAB_NAME = "Invitations";
    public static INVITATIONS_TAB_PARENT_COMPONENT = "[data-componentid=resource-tabs]";
    public static INVITATION_ACCEPTED_STATUS = "Invitation Accepted";
    public static INVITATION_NOT_ACTIVE_STATUS = "The invitation link is not active";

    static getInviteUserModal(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(MODAL_INVITE_USER);
    }

    static getInviteUserDropDownItem(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(INVITE_USER_DROP_DOWN_ITEM);
    }

    static getUserNamesInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_USER_NAMES);
    }

    static getInviteBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(BTN_INVITE);
    }

    static getInvitationsList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_MGT_LIST_LAYOUT);
    }

    static getUserInvitationDeleteConfirmationModalCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_INVITATION_DELETE_CONFIRMATION_MODAL_CHECKBOX);
    }

    static getUserInvitationDeleteConfirmationModalConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_INVITATION_DELETE_CONFIRMATION_MODAL_CONFIRM);
    }

    static getUserInvitationResponseList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_INVITATION_RESPONSE_LIST_DATA);
    }

    static getUserInvitationResponseListErrorAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_INVITATION_RESPONSE_LIST_ERROR_ALERT);
    }

    static getUserInvitationResponseListSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_INVITATION_RESPONSE_LIST_SUCCESS_ALERT);
    }

    static getUserInvitationResponseListStatusItem(): string {

        return USER_INVITATION_RESPONSE_LIST_STATUS_ITEM;
    }

    static getUserInvitationDeleteButton(): string {
        
        return USER_INVITATION_DELETE_BUTTON;
    }

    static getInvitationAcceptSuccessHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_INVITATION_ACCEPT_PAGE_HEADER);
    }

    static getInvitationEmailSubject(organizationName : string): string {

        return USER_INVITATION_EMAIL_SUB_FIRST_PART + organizationName + USER_INVITATION_EMAIL_SUB_SECOND_PART;
    }
}
