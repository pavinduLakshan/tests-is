/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

import { ApplicationEditPageConstants } from "../../../../constants";

// Locators - Application Edit Page - API Authorization Tab
const AUTHORIZE_API_RESOURCE_BTN = 
    "[data-componentid=subscribed-api-resources-empty-placeholder-sub-api-resource-button]";
const DROPDOWN_OPTION = "[role=option]";
const AUTHORIZE_API_RESOURCE_DROPDOWN = "[data-componentid=authorize-api-resource-api]";
const AUTHORIZE_SCOPES_DROPDOWN = "[data-componentid=authorize-api-resource-scopes]";
const AUTHOIRZATION_POLICY_DROPDOWN = "[data-componentid=authorize-api-resource-policy]";
const AUTHORIZE_API_RESOURCE_FINISH_BTN = "[data-testid=authorize-api-resource-finish-button]";
const AUTHORIZE_API_RESOURCE_ACTION_BTN = "[data-componentid=subscribed-api-resources-subcribe-api-resource-button]";
const AUTHORIZE_API_RESOURCE_SEARCH ="[data-componentid=subscribed-api-resources-list-search-input]";
const AUTHORIZED_API_RESOURCE ="[data-componentid=subscribed-api-resources-heading]";
const AUTHORIZED_SCOPES_SELECT_NONE_BTN = "[data-componentid=text]";
const AUTHORIZED_SCOPES_DROPDOWN = "[role=combobox]";
const AUTHORIZED_SCOPES_DROPDOWN_OPTION = "[role=listbox]";
const AUTHORIZED_SCOPES_UPDATE_BTN = "[data-componentid=permission-form-update-btn]";
const AUTHORIZED_API_RESOURCE_DELETE_BTN = "[data-componentid=subscribed-api-resources-title-icon-action-0]";
const UNAUTHORIZED_API_RESOURCE_MODAL_CONFIRM_CHECKBOX
    = "[data-componentid=api-authorization-tab-delete-confirmation-modal-assertion-checkbox]";
const UNAUTHORIZED_API_RESOURCE_MODAL_CONFIRM_BTN 
    = "[data-componentid=api-authorization-tab-delete-confirmation-modal-confirm-button]";
const AUTHORIZED_API_RESOURCE_UPDATE_BTN = "[data-componentid=permission-form-update-btn]";

/**
 * Class containing Asgardeo Console Application Edit Page - API Authorization Tab Page Objects
 * Console -> Applications -> <application> -> API Authorization Tab
 */
export class ApplicationEditAPIAuthorization {

    /**
     * Get the authorize API resource button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizeAPIResourceButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZE_API_RESOURCE_BTN);
    }

    /**
     * Get the authorize API resource dropdown
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizeAPIResourceDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZE_API_RESOURCE_DROPDOWN);
    }

    /**
     * Get the authorize scopes dropdown
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizeScopesDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZE_SCOPES_DROPDOWN);
    }

    /**
     * Get the authorize policy dropdown
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizationPolicyDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHOIRZATION_POLICY_DROPDOWN);
    }

    /**
     * Get the authorize API resource finish button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizeAPIResourceFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZE_API_RESOURCE_FINISH_BTN);
    }

    /**
     * Get the dropdown option
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDropdownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_OPTION);
    }

    /**
     * Get the authorize API resource action button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizeAPIResourceActionButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZE_API_RESOURCE_ACTION_BTN);
    }

    /**
     * Get the authorized API resource
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizedAPIResource(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZED_API_RESOURCE);
    }

    /**
     * Get the authorize API resource search
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizeAPIResourceSearch(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZE_API_RESOURCE_SEARCH);
    }

    /**
     * Get the authorized API resource delete button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizedAPIResourceDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZED_API_RESOURCE_DELETE_BTN);
    }

    /**
     * Get the unauthorized API resource modal confirm checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUnauthorizedAPIResourceModalConfirmCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UNAUTHORIZED_API_RESOURCE_MODAL_CONFIRM_CHECKBOX);
    }

    /**
     * Get the unauthorized API resource modal confirm button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUnauthorizedAPIResourceModalConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UNAUTHORIZED_API_RESOURCE_MODAL_CONFIRM_BTN);
    }

    /**
     * Get the authorized scope label
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizedScopesDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZED_SCOPES_DROPDOWN);
    }

    /**
     * Get the authorized API resource update button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizedAPIResourceUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZED_API_RESOURCE_UPDATE_BTN);
    }

    /**
     * Get the authorized scopes select none button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizedScopesSelectNoneButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZED_SCOPES_SELECT_NONE_BTN).contains(ApplicationEditPageConstants.SELECT_NONE_SCOPES);
    }

    /**
     * Get the authorized scopes update button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizedScopesUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZED_SCOPES_UPDATE_BTN);
    }

    /**
     * Get the authorized scopes dropdown option
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAuthorizedScopesDropdownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHORIZED_SCOPES_DROPDOWN_OPTION);
    }
}
