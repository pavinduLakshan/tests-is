/* eslint-disable no-undef */
/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core/constants";

// Page element locators
const NAVIGATION_TABS: string = "[data-testid=\"idp-edit-page-resource-tabs\"]",
    LBL_CONNECTION_HEADER_TITLE: string = "[data-testid=idp-edit-page-page-layout-page-header-title]",
    CONNECTION_UPDATE_BTN: string = "[data-testid=\"saml-authenticator-settings-form-submit-button\"]",
    TXT_IDPCLIENT_ID: string = 
        "[data-testid=idp-edit-page-authenticator-settings-GoogleOIDCAuthenticator-content-client-id]",
    PRIMARY_BTN: string = "[data-componentid=primary-button]",
    BTN_DELETE_IDP: string = "[data-componentid=danger-zone-delete-button]",
    WIN_IDP_DELETE_CONFIRMATION: string = "[data-testid=idp-edit-page-general-settings-delete-idp-confirmation]",
    CHK_IDP_DELETE_CONFIRMATION: string = "[data-componentid=confirmation-modal-assertion-checkbox]",
    BTN_IDP_DELETE_CONFIRMATION: string = "[data-componentid=confirmation-modal-confirm-button]",
    CONNECTION_GROUPS_TAB = "[data-componentid=resource-tabs] > .pointing > :nth-child(4)",
    CONNECTION_GROUP_ATTRIBUTE_INPUT = "[data-componentid=idp-edit-page-groups-settings-group-attribute-input]",
    BTN_UPDATE_CONNECTION_GROUP_ATTRIBUTE = "[data-componentid=idp-edit-page-groups-settings-update-button]",
    BTN_CONNECTION_GROUP_NAME_INPUT = "[data-componentid=identity-provider-group-create-wizard-group-name]",
    BTN_FINISH_CONNECTION_GROUP_CREATION = "[data-componentid=identity-provider-group-create-wizard-finish-button]",
    SCOPE_INPUT = 
        "[data-componentid=\"idp-edit-page-authenticator-settings-OpenIDConnectAuthenticator-content-form-Scopes\"]",
    SCOPE_ADD_BTN = "[data-componentid=\"idp-edit-page-authenticator-settings" +
        "-OpenIDConnectAuthenticator-content-form-Scopes-add-button\"]",
    OIDC_UPDATE_BTN = 
        "[data-testid=\"idp-edit-page-authenticator-settings-OpenIDConnectAuthenticator-content-submit-button\"]",
    IMPLICIT_ACCOUNT_LINKING_CHECKBOX = "input[name=\"isEnabled\"]",
    PRIMARY_ATTRIBUTE_DROPDOWN = 
        "[data-componentid=\"trusted-token-issuer-advanced-settings-primary-lookup-attribute\"]",
    ATTRIBUTES_DROPDOWN_CLOSE_BTN = "i[class=\"dropdown icon\"]",
    ATTRIBUTES_DROPDOWN_OPTION = "[role=option]",
    ADVANCED_SETTINGS_UPDATE_BTN = "[data-componentid=\"trusted-token-issuer-advanced-settings-submit-button\"]",
    CONNECTION_GROUP_NAME_INPUT = "[data-componentid=\"identity-provider-group-create-wizard-group-name\"]",
    CREATE_BTN = "[data-componentid=\"identity-provider-group-create-wizard-finish-button\"]";

/**
 * Class containing Asgardeo Console IDP Edit Page common Page Objects
 * Console -> Develop -> Connections -> <identity-provider>
 */
export class IdpEditPage {

    public static readonly NAVIGATION_TABS: string = "[data-testid=\"idp-edit-page-resource-tabs\"]";

    public static readonly NAVIGATION_TAB_SETTINGS: string ="Settings";
    /**
     * Get the navigation tab
     * @param {string} tabName - tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNavigationTab(tabName: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> {
        
        return cy.get(NAVIGATION_TABS).contains(HTMLKeyWordsConstants.HTML_ANCHOR_TAG, tabName);
    }

    /**
     * This custom method returns the header title of a selected connector's edit page
     * @returns HTML Element: idp-edit-page-page-layout-page-header-title
     */
    public static getConnectionPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_CONNECTION_HEADER_TITLE);
    }

    /**
     * This custom method returns the client id of a selected connector's edit page
     * @returns HTML Element: idp-edit-page-authenticator-settings-GoogleOIDCAuthenticator-content-client-id
     */
    public static getIDPClientID(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_IDPCLIENT_ID);
    }

    /**
     * This custom method returns the 'Update' button on IDP Edit page
     * @returns HTML Element: data-componentid=primary-button
     */
    public static getIDPUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PRIMARY_BTN);
    }

    /**
     *  This custom method returns the 'Delete' button on IDP edit page
     * @returns HTML Element: data-componentid=danger-zone-delete-button
     */
    public static getIDPDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DELETE_IDP);
    }

    /**
     * This custom method returns the 'Delete Confirmation' window on IDP edit page
     * @returns HTML Element: idp-edit-page-general-settings-delete-idp-confirmation
     */
    public static getIDPDeleteConfirmationWindow(): Cypress.Chainable<JQuery<HTMLElement>> {   
     
        return cy.get(WIN_IDP_DELETE_CONFIRMATION);
    }

    /**
     * This custom method returns the 'Delete Confirmation' checkbox on IDP edit page
     * @returns HTML Element: data-componentid=confirmation-modal-assertion-checkbox
     */
    public static getIDPDeleteConfirmationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_IDP_DELETE_CONFIRMATION);
    }

    /**
     * This custom method returns the 'Delete Confirmation' button on IDP edit page
     * @returns HTML Element: data-componentid=confirmation-modal-confirm-button
     */
    public static getIDPDeleteConfirmationButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_IDP_DELETE_CONFIRMATION);
    }

    /**
     * This custom method returns the 'Groups' tab on IDP edit page
     * @returns HTML Element: data-testid=resource-tabs] > .pointing > :nth-child(4)
     */
    public static getConnectionGroupsTab(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(CONNECTION_GROUPS_TAB);
    }

    /**
     * This custom method returns the 'Group Attribute' input field on IDP edit page
     * @returns HTML Element: data-componentid=idp-edit-page-groups-settings-group-attribute-input
     */
    public static getConnectionGroupAttributeInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(CONNECTION_GROUP_ATTRIBUTE_INPUT);
    }

    /**
     * This custom method returns the 'Update Group Attribute' button on IDP edit page
     * @returns HTML Element: data-componentid=idp-edit-page-groups-settings-update-button
     */
    public static getUpdateConnectionGroupAttributeButton(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(BTN_UPDATE_CONNECTION_GROUP_ATTRIBUTE);
    }

    /**
     * This custom method returns the 'New Group' button on IDP edit page
     * @returns HTML Element: data-componentid=primary-button
     */
    public static getCreateConnectionGroupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PRIMARY_BTN);
    }

    /**
     * This custom method returns the 'Group Name' input field on IDP edit page
     * @returns HTML Element: data-componentid=identity-provider-group-create-wizard-group-name
     */
    public static getConnectionGroupNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(BTN_CONNECTION_GROUP_NAME_INPUT);
    }

    /**
     * This custom method returns the 'Finish' button on IDP edit page
     * @returns HTML Element: data-componentid=identity-provider-group-create-wizard-finish-button
     */
    public static getFinishConnectionGroupCreationButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_FINISH_CONNECTION_GROUP_CREATION);
    }

    /**
    * This returns the scope input area.
    */
    public static getScopeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SCOPE_INPUT);
    }

    /**
    * This returns the scope add button.
    */
    public static getScopeAddButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SCOPE_ADD_BTN);
    }

    /**
    * This returns the OIDC connection update button.
    */
    public static getOIDCUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(OIDC_UPDATE_BTN);
    }

    /**
    * This returns the conection update button.
    */
    public static getConnectionUpdateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONNECTION_UPDATE_BTN);
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the implicit
     * account linking checkbox element.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getImplicitAccountLinkingCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(IMPLICIT_ACCOUNT_LINKING_CHECKBOX);
    }
    
    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the primary attribute
     * dropdown element of implicit account linking configuration.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getPrimaryAttributeDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PRIMARY_ATTRIBUTE_DROPDOWN);
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing an attributes
     * dropdown option of implicit account linking configuration.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getAttributesDropdownOption(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(ATTRIBUTES_DROPDOWN_OPTION);
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the "Update"
     * button element in the advanced settings.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getAdvancedSettingsUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCED_SETTINGS_UPDATE_BTN);
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the close button
     * element in the attributes dropdown of implicit account linking configuration.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getAttributesDropdownCloseButton(): Cypress.Chainable<JQuery<HTMLElement>> {   
     
        return cy.get(ATTRIBUTES_DROPDOWN_CLOSE_BTN);
    }

    /**
     * This function returns the connection group name input field.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getCreateConnectionGroupInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONNECTION_GROUP_NAME_INPUT);
    }

    /**
     * This Function returns the create group button
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getCreateGroupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CREATE_BTN);
    }   
}
