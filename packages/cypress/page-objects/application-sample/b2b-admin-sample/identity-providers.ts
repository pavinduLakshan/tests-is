/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
import {CypressKeywords} from "../../../constants";

/// <reference types="Cypress" />

// PAGE LOCATORS
const
    BTN_ADD_IDENTITY_PROVIDER = "[class=\"rs-btn rs-btn-primary rs-btn-md\"]",
    BTN_ADD_IDENTITY_PROVIDER_TEXT = "Add Identity Provider",
    BTN_ENTERPRISE_IDP = "Enterprise",
    BTN_CREATE = "[class=\"formButtonToolbar_addUserButton__YdsiC rs-btn rs-btn-primary rs-btn-lg\"]",
    BTN_DELETE = "[class=\"rs-btn-icon rs-btn-icon-placement-left rs-btn rs-btn-subtle\"]",
    BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW = "[class=\"rs-btn rs-btn-default\"]",
    BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_TEXT = "Add to the Login Flow",
    BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_CONFIRM = "[class=\"Settings_addUserButton__hRGog rs-btn rs-btn-primary\"]",
    BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_CONFIRM_TEXT = "Confirm",
    INPUT_FIELD_IDP_NAME = "[id=\"application_name\"]",
    INPUT_FIELD_CLIENT_ID = "[id=\"client_id\"]",
    INPUT_FIELD_CLIENT_SECRET = "[id=\"client_secret\"]",
    INPUT_FIELD_AUTHORIZATION_ENDPOINT_URL = "[id=\"authorization_endpoint\"]",
    INPUT_FIELD_TOKEN_ENDPOINT_URL = "[id=\"token_endpoint\"]",
    LIST_ITEM_IDP = "[class=\"rs-stack-item\"]",
    RADIO_BTN_MANUALLY_CONFIGURE_IDP = "[class=\"rs-radio-checker\"]",
    RADIO_BTN_MANUALLY_CONFIGURE_IDP_TEXT = "Manually configure the identity provider";

//ALERT MESSAGES
const 
    SUCCESS_NOTIFICATION= 
    "[class=\"rs-notification rs-notification-success rs-notification-show rs-notification-closable\"]",
    SUCCESS_NOTIFICATION_TITLE= "[class=\"rs-notification-title-with-icon\"]",
    SUCCESS_NOTIFICATION_TITLE_TEXT = "Success",
    SUCCESS_NOTIFICATION_DESCRIPTION= "[class=\"rs-notification-description\"]",
    SUCCESS_NOTIFICATION_DESCRIPTION_CREATE_IDP_TEXT = "Identity Provider Created Successfully",
    SUCCESS_NOTIFICATION_DESCRIPTION_DELETE_IDP_TEXT = "Identity Provider Deleted Successfully",
    SUCCESS_NOTIFICATION_CLOSE_ICON = "[class=\"rs-btn-close\"]",
    SUCCESS_NOTIFICATION_DESCRIPTION_ADD_IDP_TO_LOGIN_FLOW_TEXT = 
    "Identity Provider Add to the Login Flow Successfully.";

export class B2BAdminAppIdentityProvidersPage {

    /**
     * This function returns the add identity provider button.
     * @returns The "Add Identity provider" button.
     */
    public static getAddIdentityProviderButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_IDENTITY_PROVIDER).contains(BTN_ADD_IDENTITY_PROVIDER_TEXT);
    }

    /**
     * This function returns the enterprise option in the select identity provider popup.
     * @returns The "Enterprise" option in the "Select Identity Provider" popup.
     */
    public static getAddEnterpriseIdpButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(BTN_ENTERPRISE_IDP);
    }

    /**
     * This function returns the idp name input filed.
     * @returns the idp name input filed.
     */
    public static getIdpNameInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_IDP_NAME);
    }

    /**
     * This function returns the client id input filed.
     * @returns the client id input filed.
     */
    public static getClientIdInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_CLIENT_ID);
    }

    /**
     * This function returns the client secret input filed.
     * @returns the client secret input filed.
     */
    public static getClientSecretInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_CLIENT_SECRET);
    }

    /**
     * This function returns the Manually configure the identity provider option selection radio button.
     * @returns The "Manually configure the identity provider" radio button.
     */
    public static getManuallyConfigureIDPRadioButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_BTN_MANUALLY_CONFIGURE_IDP).contains(RADIO_BTN_MANUALLY_CONFIGURE_IDP_TEXT);
    }

    /**
     * This function returns the authorization endpoint url input filed.
     * @returns the authorization endpoint url input filed.
     */
    public static getAuthorizationEndpointURLInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_AUTHORIZATION_ENDPOINT_URL);
    }

    /**
     * This function returns the token endpoint url input filed.
     * @returns the token endpoint url input filed.
     */
    public static getTokenEndpointURLInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FIELD_TOKEN_ENDPOINT_URL);
    }

    /**
     * This function submits the create enterprise idp form.
     */
    public static createEnterpriseIDP() {

        cy.get(BTN_CREATE).click();
    }

    /**
     * This function validates the success notification.
     */
    public static validateSuccessNotification() {

        cy.get(SUCCESS_NOTIFICATION).should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function validates the success notification title.
     */
    public static validateSuccessNotificationTitle(){

        cy.get(SUCCESS_NOTIFICATION_TITLE).contains(SUCCESS_NOTIFICATION_TITLE_TEXT)
            .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function validates the IDP created success notification description.
     */
    public static validateSuccessNotificationIDPCreatedDescription() {

        return cy.get(SUCCESS_NOTIFICATION_DESCRIPTION).contains(SUCCESS_NOTIFICATION_DESCRIPTION_CREATE_IDP_TEXT)
            .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function validates the IDP deleted success notification description.
     */
    public static validateSuccessNotificationIDPDeletedDescription() {

        return cy.get(SUCCESS_NOTIFICATION_DESCRIPTION).contains(SUCCESS_NOTIFICATION_DESCRIPTION_DELETE_IDP_TEXT)
            .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function closes the success notification.
     */
    public static closeSuccessNotification() {

        return cy.get(SUCCESS_NOTIFICATION_CLOSE_ICON).click();
    }

    /**
     * This function returns the items of the IDP list.
     * @returns The IDP list objects.
     */
    public static getIDPListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LIST_ITEM_IDP);
    }

    /**
     * This function returns the add enterprise idp to login flow button.
     * @returns the element that contains the text "Add to the Login Flow"
     */
    public static getAddEnterpriseIdpToLoginFlowButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW)
            .contains(BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_TEXT);
    }

    /**
     * This function returns the add enterprise idp to login flow confirm button.
     * @returns the element that contains the text "Add to the Login Flow"
     */
    public static getAddEnterpriseIdpToLoginFlowConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_CONFIRM)
            .contains(BTN_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_CONFIRM_TEXT);
    }

    /**
     * This function validates the add IDP to login flow success notification description.
     */
    public static validateSuccessNotificationAddIDPToLoginFlow() {

        cy.contains(SUCCESS_NOTIFICATION_DESCRIPTION_ADD_IDP_TO_LOGIN_FLOW_TEXT)
            .should(CypressKeywords.ASSERTION_TO_BE_VISIBLE);
    }

    /**
     * This function deletes the enterprise IDP.
     */
    public static deleteEnterpriseIDP() {

        cy.get(BTN_DELETE).click();
    }
}
