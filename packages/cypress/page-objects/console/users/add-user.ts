/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

//Locators
const TXT_USER_NAME = "[data-testid=user-mgt-add-user-form-email-input]",
    TXT_ALPHANUMERIC_USERNAME = "[data-testid=user-mgt-add-user-form-username-input]",
    TXT_ALPHANUMERIC_EMAIL = "[data-testid=user-mgt-add-user-form-alphanumeric-email-input]",
    TXT_USER_FIRST_NAME = "[data-testid=user-mgt-add-user-form-firstName-input]",
    NEW_USER_BUTTON = "[class=\"ui primary button\"]",
    TXT_USER_LAST_NAME = "[data-testid=user-mgt-add-user-form-lastName-input]",
    BTN_NEXT = "[data-componentid=user-mgt-add-user-wizard-modal-next-button]",
    BTN_FINISH = "[data-componentid=user-mgt-add-user-wizard-modal-finish-button]",
    ADD_USER_DROP_DOWN = "[data-componentid=users-add-user-dropdown]",
    ADD_USER_DROP_DOWN_ITEM = "[data-componentid=users-add-user-dropdown-item]",
    RADIO_BTN_INVITE_TO_SET_PASSWORD = "[data-testid=user-mgt-add-user-form-ask-password-option-radio-button]",
    RADIO_BTN_SET_TEMPORARY_PASSWORD = "[data-testid=user-mgt-add-user-form-create-password-option-radio-button]",
    TXT_NEW_PASSWORD = "[data-testid=user-mgt-add-user-form-newPassword-input]",
    MODAL_ADD_USER = "[data-componentid=user-mgt-add-user-wizard-modal]",
    TXT_CONFIRM_PASSWORD = "[data-testid=user-mgt-add-user-form-confirmPassword-input]",
    IMAGE_AVATAR = "[data-testid=user-avatar]",
    TXT_AVATAR_INITIALS = "[data-testid=user-avatar-initials]",
    LBL_SUMMARY_PORFILE_HEADING = "[data-testid=heading]",
    LBL_SUMMARY_FIELD = "div[class=\"two column row summary-field\"]",
    LBL_PROFILE_DESRIPTION = "div[class=\"description\"]",
    LBL_SUMMARY_LABEL = "div[class=\"label\"]",
    LBL_SUMMARY_VALUE = "div[class=\"value url\"]",
    LNK_CONSUMER_USER_TYPE = "[data-testid=users-add-user-dropdown-consumer]",
    LNK_INVITED_ADMIN_TYPE = "[data-testid=users-add-user-dropdown-guest]",                
    LBL_ERROR_MSG="div[class=\"ui pointing above prompt label\"]",
    BTN_CANCLE_ADD_NEW_USER = "[data-componentid=user-mgt-add-user-wizard-modal-cancel-button]",
    USER_STORE_DROP_DOWN = "[data-testid=\"user-mgt-user-list-userstore-dropdown\"]",
    REMOTE_2_GROUP_CHECK_BOX = "[data-componentid=\"transfer-list-item-remote_group_2-checkbox\"]",
    BTN_GENERATE_PASSWORD = "[data-testid=user-mgt-password-generate-button]",
    USER_MGT_USER_LIST = "[data-componentid=user-mgt-user-list]",
    USER_LIST_TABLE_BODY = "[data-componentid=data-table-body]",
    USER_LIST_EMPHASIZED_SECTION = "[data-componentid=emphasized-segment]",
    DISABLED_ITEM = "[class=\"disabled item\"]";

export class AddUserPage {

    static getUsernameInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_USER_NAME);
    }

    static getAlphanumericUsernameInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_ALPHANUMERIC_USERNAME);
    }

    static getAlphanumericEmailInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_ALPHANUMERIC_EMAIL);
    }

    static getFirstNameInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_USER_FIRST_NAME);
    }

    static getLastNameInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_USER_LAST_NAME);
    }

    static getNextBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(BTN_NEXT);
    }

    static getFinishBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(BTN_FINISH);
    }

    static getInviteToSetPasswordRadio(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(RADIO_BTN_INVITE_TO_SET_PASSWORD);
    }

    static getSetTempPasswordRadio(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(".scrolling").scrollTo("bottom").get(RADIO_BTN_SET_TEMPORARY_PASSWORD);
    }

    static getNewPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_NEW_PASSWORD);
    }

    static getAddUserModal(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(MODAL_ADD_USER);
    }

    static getConfirmPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_CONFIRM_PASSWORD);
    }

    static getImageAvatar(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(IMAGE_AVATAR);
    }

    static getAvatarInitials(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(TXT_AVATAR_INITIALS);
    }

    static getProfileHeading(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LBL_SUMMARY_PORFILE_HEADING);
    }

    static getSummaryField(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LBL_SUMMARY_FIELD);
    }

    static getProfileDescription(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LBL_PROFILE_DESRIPTION);
    }

    static getSummaryLabel(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LBL_SUMMARY_LABEL);
    }

    static getSummaryValue(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LBL_SUMMARY_VALUE);
    }

    static getConsumerUserType(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LNK_CONSUMER_USER_TYPE);
    }

    static getInvitedAdminType(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LNK_INVITED_ADMIN_TYPE);
    }

    static getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LBL_ERROR_MSG);
    }

    static getCancelBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(BTN_CANCLE_ADD_NEW_USER);
    }

    /**
     * This function returns the user store drop down element.
     * @returns The element with the id of userStoreDropDown.
     */
    static getUserStoreDropDown(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(USER_STORE_DROP_DOWN);
    }

    /**
     * This function returns the remote group 2 checkbox element.
     * @returns The element that matches the selector.
     */
    static getRemoteGroup2CheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(REMOTE_2_GROUP_CHECK_BOX);
    }
    
    static getGeneratePasswordBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(BTN_GENERATE_PASSWORD);
    }

    static getNewUserBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(NEW_USER_BUTTON).eq(1);
    }

    static getDisabledItem(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(DISABLED_ITEM);
    }

    static getScrollBar(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(".scrolling");
    } 

    static getAddUserDropDown(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(ADD_USER_DROP_DOWN);
    }

    static getAddUserDropDownItem(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(ADD_USER_DROP_DOWN_ITEM);
    }

}
