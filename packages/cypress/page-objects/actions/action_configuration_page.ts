/*
 *   Copyright (c) 2024 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

import ActionsConstants from "@wso2iam/test-ts-core/constants/console/action-mgt/actions";
import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core/constants";

const BACK_BUTTON = "[data-componentid=action-configuration-page-preIssueAccessToken-page-back-button]",
    ACTION_NAME = "[data-componentid=common-action-config-form-action-name]",
    ENDPOINT = "[data-componentid=action-endpoint-config-form-action-endpointUri]",
    AUTHENTICATION_TYPE_DROPDOWN = "[data-componentid=action-endpoint-config-form-authentication-type-dropdown]",
    USERNAME = "[data-componentid=action-endpoint-config-form-authentication-property-username]",
    PASSWORD = "[data-componentid=action-endpoint-config-form-authentication-property-password]",
    ACCESS_TOKEN = "[data-componentid=action-endpoint-config-form-authentication-property-accessToken]",
    HEADER = "[data-componentid=action-endpoint-config-form-authentication-property-header]",
    VALUE = "[data-componentid=action-endpoint-config-form-authentication-property-value]",
    SUBMIT_BUTTON = "[data-componentid=action-config-form-primary-button]",
    CHANGE_AUTHENTICATION_BUTTON = "[data-componentid=action-endpoint-config-form-change-authentication-button]",
    DELETE_BUTTON = "[data-componentid=action-configuration-page-danger-zone-delete-button]",
    DELETE_CONFIRMATION_BUTTON = 
        "[data-componentid=action-configuration-page-revert-confirmation-modal-confirm-button]",
    PRE_ISSUE_ACCESS_TOKEN_ACTION_STATUS_TOGGLE_BUTTON =
        "[data-componentid=action-configuration-page-preIssueAccessToken-enable-toggle]",
    AUTHENTICATION_INFO_BOX_TITLE = "[data-componentid=action-endpoint-config-form-authentication-info-box-title]",
    DELETE_CONFIRMATION_CHECK_BOX = 
        "[data-componentid=action-configuration-page-revert-confirmation-modal-assertion-checkbox]";
        
/**
 * Class containing Action Configuration Page objects.
 */
export class ActionConfigurationPage {

    /**
     * Retrieve the back button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getBackButton(): Cypress.Chainable {

        return cy.get(BACK_BUTTON);
    }

    /**
     * Retrieve the Action Name input field.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getActionNameInputField(): Cypress.Chainable {

        return cy.get(ACTION_NAME);
    }

    /**
     * Retrieve the Endpoint input field.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getEndpointInputField(): Cypress.Chainable {

        return cy.get(ENDPOINT);
    }

    /**
     * Retrieve the option from Authentication Type dropdown.
     * @param {string} AuthenticationType - Authentication type option to select.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getAuthenticationType(AuthenticationType: string): Cypress.Chainable {

        cy.get(AUTHENTICATION_TYPE_DROPDOWN).click();
        return cy.contains(HTMLKeyWordsConstants.HTML_LIST_ITEM, AuthenticationType);
    }

    /**
     * Retrieve the Authentication Property Input field.
     * @param {string} AuthenticationProperty - Authentication property name.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getAuthenticationPropertyInputField(AuthenticationProperty: string): Cypress.Chainable {

        switch (AuthenticationProperty) {
            case ActionsConstants.AUTHENTICATION_PROPERTY_USERNAME:
                return cy.get(USERNAME);
            case ActionsConstants.AUTHENTICATION_PROPERTY_PASSWORD:
                return cy.get(PASSWORD);
            case ActionsConstants.AUTHENTICATION_PROPERTY_ACCESS_TOKEN:
                return cy.get(ACCESS_TOKEN);
            case ActionsConstants.AUTHENTICATION_PROPERTY_HEADER:
                return cy.get(HEADER);
            case ActionsConstants.AUTHENTICATION_PROPERTY_VALUE:
                return cy.get(VALUE);
            default:
                return cy.get("");
        }
    }

    /**
     * Retrieve the Submit button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getSubmitButton(): Cypress.Chainable {

        return cy.get(SUBMIT_BUTTON);
    }

    /**
     * Retrieve the Change Authentication button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getChangeAuthenticationButton(): Cypress.Chainable {

        return cy.get(CHANGE_AUTHENTICATION_BUTTON);
    }

    /**
     * Retrieve the Delete button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getDeleteButton(): Cypress.Chainable {

        return cy.get(DELETE_BUTTON);
    }

    /**
     * Retrieve the Delete Confirmation button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getDeleteConfirmationButton(): Cypress.Chainable {

        return cy.get(DELETE_CONFIRMATION_BUTTON);
    }

    /**
     * Retrieve the toggle button.
     * @param {string} actionType - Action type.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getToggleButton(actionType: string): Cypress.Chainable {

        switch (actionType) {
            case ActionsConstants.ACTION_TYPE_PRE_ISSUE_ACCESS_TOKEN:
                return cy.get(PRE_ISSUE_ACCESS_TOKEN_ACTION_STATUS_TOGGLE_BUTTON);
            default:
                return cy.get("");
        }
    }

    /**
     * Retrieve the Authentication info box title.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getAuthenticationInfoBoxTitle(): Cypress.Chainable {

        return cy.get(AUTHENTICATION_INFO_BOX_TITLE);
    }

    /**
     * Retrieve the Delete Confirmation checkbox.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getDeleteConfirmationCheckBox(): Cypress.Chainable {

        return cy.get(DELETE_CONFIRMATION_CHECK_BOX);
    }
}
