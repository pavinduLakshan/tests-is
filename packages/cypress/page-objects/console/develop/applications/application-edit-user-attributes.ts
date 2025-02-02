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

import { HTMLKeyWordsConstants } from "../../../../constants";

// Locators - Application Edit Page - User Attributes Tab
const USER_ATTRIBUTES_TAB_HEADER = "[data-testid=\"heading\"]";
const USER_ATTRIBUTES_SECTION_HEADER_TITLE = "User Attribute Selection";
const INPUT_SEARCH_USER_ATTRIBUTES = 
    "[data-testid=\"application-edit-attribute-settings-attribute-selection-search\"]";
const INPUT_SEARCH_USER_ATTRIBUTES_OIDC = 
    "[data-testid=\"application-edit-attribute-settings-attribute-selection-oidc-search\"]";
const BTN_SELECT_USER_ATTRIBUTES = 
    "[data-testid=\"application-edit-attribute-settings-attribute-selection-update-button\"]";
const INPUT_SEARCH_USER_ATTRIBUTE_IN_SELECT_USER_ATTRIBUTES_MODAL =
    "[data-testid=\"attribute-select-list-transfer-component-unselected-groups-search-input\"]";
const TABEL_CHK_SELECT_USER_ATTRIBUTE = "div[class=\"ui segment transfer-list-segment\"]";
const BTN_CANCEL_SELECT_USER_ATTRIBUTES =
    "[data-testid=\"application-edit-attribute-settings-attribute-selection-wizard-other-dialects-cancel-button\"]";
const BTN_SAVE_SELECT_USER_ATTRIBUTES =
    "[data-testid=\"application-edit-attribute-settings-attribute-selection-wizard-other-dialects-save-button\"]";
const TABLE_USER_ATTRIBUTES = "[data-testid=\"application-edit-attribute-settings-attribute-selection-list\"]";
const BTN_DELETE_ROW_OF_USER_ATTRIBUTES_TABLE = "i[class=\"grey trash alternate large link icon list-icon pr-4\"]";
const CHK_MANDATORY_USER_ATTRIBUTE = "input[type=\"checkbox\"]";
const BTN_UPDATE_USER_ATTRIBUTE_SETTINGS = "[data-testid=\"application-edit-attribute-settings-submit-button\"]";
const CHECKBOX_USER_NAME_OIDC = "[data-testid=\"application-edit-attribute-settings-" + 
    "attribute-selection-oidc-username\"]";
const CHECKBOX_FIRST_NAME = "[data-componentid=\"transfer-list-item-First-Name-checkbox\"]";
const CHECKBOX_ADDRESS = 
"[data-testid=\"application-edit-attribute-settings-attribute-selection-oidc-address-title-checkbox popup-action-0\"]";
const CHECKBOX_LAST_NAME = "[data-componentid=\"transfer-list-item-Last-Name-checkbox\"]";
const CHECKBOX_USERNAME = "[data-componentid=\"transfer-list-item-Username-checkbox\"]";
const CHECKBOX_FIRST_NAME_OIDC = "[data-testid=\"application-edit-attribute-settings-" + 
    "attribute-selection-oidc-given_name\"]";
const CHECKBOX_LAST_NAME_OIDC = "[data-testid=\"application-edit-attribute-settings-" +
    "attribute-selection-oidc-family_name\"]";
const CHECKBOX_EMAIL_OIDC = "[data-testid=\"application-edit-attribute-settings-" +
    "attribute-selection-oidc-email\"]";
const CHECKBOX_GROUP_OIDC = "[data-testid=\"application-edit-attribute-settings-attribute-selection-oidc-groups-title";
const CHECKBOX_EMAIL_SAML = "[data-componentid=\"transfer-list-item-Email-checkbox\"]";
const CHECKBOX_INPUT = "input[class=\"hidden\"]";
const CHECKBOX_MANDATORY_FIRST_NAME = "[data-testid=\"given_name\"]";
const CHECKBOX_MANDATORY_LAST_NAME = "[data-testid=\"family_name\"]";
const SAML_SEARCH_INPUT = "[data-componentid=\"transfer-component-unselected-groups-search-input\"]";
const BTN_SAML_SAVE_ATTRIBUTE = "[data-testid=\"application-edit-attribute-settings-attribute-selection-wizard-" + 
    "save-button\"]";
const BTN_MANDATORY_CHECKBOX = ".checkbox";
const ALERT_UPDATE_ATTRIBUTES_SUCCESS =  "[data-testid=\"alert-success-message\"]";
const CHECKBOX_NEW_ATTRIBUTE = "[data-componentid=\"transfer-list-item-attr_custom_local_desc-checkbox\"]";
const CHECKBOX_AUTOMATION = "[data-testid=\"application-edit-attribute-settings-attribute-selection-oidc-" +
    "newscope-title-checkbox popup-action-container-0\"]";
const CHECKBOX_CUSTOM_ATTRIBUTE = "[data-testid=\"application-edit-attribute-settings-attribute-selection-oidc-";
const TXT_AREA_SELECTED_SCOPES = "[data-componentid=\"application-edit-attribute-settings-attribute-selection-" + 
    "oidc-selected-scope-area-wrapper\"]";
const USER_ATTR_CHECKBOX = "[data-testid=\"application-edit-attribute-settings-attribute-selection-wizard-" +
    "unselected-transfer-list-item-0-attr_custom_local-checkbox\"]";
const CHECKBOX_VALIDATE_LINKED_LOCAL_ACCOUNT = "input[name=\"validateLinkedLocalAccount\"]";
const CHECKBOX_MANDATE_LINKED_LOCAL_ACCOUNT = "input[name=\"mandateLinkedLocalAccount\"]";
const SUBJECT_IDENTIFIER_DROPDOWN = "[data-testid=\"application-advanced-attribute-settings-" +
    "form-subject-attribute-dropdown\"]";
const DROPDOWN_OPTION = "[role=option]";
const RADIO_SUBJECT_TYPE_PAIRWISE = "[data-componentId=\"application-advanced-attribute-settings-form-subject-type-" +
    "pairwise-radio\"]";
const SECTOR_IDENTIFIER_INPUT = "[data-componentId=\"application-advanced-attribute-settings-form-sector-" +
    "identifier-uri\"]";
const CHECKBOX_ALTERNATIVE_SUBJECT_IDENTIFIER = "input[name=\"enableAlternativeSubjectIdentifier\"]";
const CHECKBOX_INCLUDE_USER_DOMAIN = "input[name=\"subjectIncludeUserDomain\"]";
const CHECKBOX_INCLUDE_ORG_NAME = "input[name=\"subjectIncludeTenantDomain\"]";

/**
 * Class containing Asgardeo Console Application Edit Page - User Attributes Tab Page Objects
 * Console -> Develop -> Applications -> <application> -> User Attributes Tab
 */
export class ApplicationEditUserAttributes {
    
    /**
     * Get the user attributes window header
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getUserAttributesTabHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_ATTRIBUTES_TAB_HEADER)
            .contains(USER_ATTRIBUTES_SECTION_HEADER_TITLE);                           
    }

    /**
     * Get the input field for search user attributes
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputSearchUserAttributes(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_SEARCH_USER_ATTRIBUTES).find(HTMLKeyWordsConstants.INPUT_FIELD);                          
    }

    /**
     * Get the input field for search user attributes of oidc apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getInputSearchUserAttributesOIDC(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_SEARCH_USER_ATTRIBUTES_OIDC);                    
    }

    /**
     * Get the attribute that was created to map to scope created
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewAttributeAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_NEW_ATTRIBUTE).first();                             
    }

    /**
     * Get the scope from the user attribute section of application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getScopeFromUserAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_AUTOMATION);                             
    }

    /**
     * Get the select user attributes button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSelectUserAttributes(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_SELECT_USER_ATTRIBUTES);                             
    }

    /**
     * Get the input field for search user attributes in select user attributes modal dialog box
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputSearchUserAttributeInSelectUserAttributesModal(): 
        Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_SEARCH_USER_ATTRIBUTE_IN_SELECT_USER_ATTRIBUTES_MODAL)
            .find(HTMLKeyWordsConstants.INPUT_FIELD);
    }

    /**
     * Get the checkbox corresponding to the user attribute
     * @param {string} userAttribute - user attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkUserAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TABEL_CHK_SELECT_USER_ATTRIBUTE).find( HTMLKeyWordsConstants.HTM_TABLE )
            .find(HTMLKeyWordsConstants.HTML_TABLE_ROW).eq(0).find(HTMLKeyWordsConstants.HTML_TABLE_CELL)
                .eq(0).find(HTMLKeyWordsConstants.INPUT_FIELD);
    }

    /**
     * Get the cancel select user attributes button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCancelSelectUserAttributes(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_CANCEL_SELECT_USER_ATTRIBUTES);                             
    }

    /**
     * Get the save select user attributes button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSaveSelectUserAttributes(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_SAVE_SELECT_USER_ATTRIBUTES);                             
    }

    /**
     * Get the row corresponding to the user attribute name in the table which lists user attributes
     * @param {string} userAttributeName - user attribute name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRowOfUserAttributesTable(userAttributeName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(TABLE_USER_ATTRIBUTES).contains(HTMLKeyWordsConstants.HTML_TABLE_ROW, 
            userAttributeName);                          
    }

    /**
     * Get the mandatory checkbox corresponding to the user attribute name in the table which lists user attributes
     * @param {string} userAttributeName - user attribute name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkMandatoryAttributeOfUserAttributesTable(userAttributeName: string): 
        Cypress.Chainable<JQuery<HTMLElement>> {
            
            return cy.get(TABLE_USER_ATTRIBUTES).contains("td", userAttributeName).siblings()
                .find(BTN_MANDATORY_CHECKBOX);
    }
    
    public static getCheckMandatoryUser(userAttributeName: string): 
        Cypress.Chainable<JQuery<HTMLElement>> {
            
            return cy.get(TABLE_USER_ATTRIBUTES).contains(HTMLKeyWordsConstants.HTML_TABLE_CELL,
                 userAttributeName).siblings().find(CHK_MANDATORY_USER_ATTRIBUTE);
    }

    /**
     * Get the delete button corresponding to the user attribute name in the table which lists user attributes
     * @param {string} userAttributeName - user attribute name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRowOfUserAttributeDeleteBtn(userAttributeName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(TABLE_USER_ATTRIBUTES).contains(HTMLKeyWordsConstants.HTML_TABLE_CELL, userAttributeName)
            .siblings().find(BTN_DELETE_ROW_OF_USER_ATTRIBUTES_TABLE);                              
    }

    /**
     * Get the update user attributes settings button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnUpdateUserAttributeSettings(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_USER_ATTRIBUTE_SETTINGS);                             
    }

    /**
     * Get the first name attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getAddressAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_ADDRESS);                             
    }

    /**
     * Get the first name attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getFirstNameAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_FIRST_NAME);                             
    }

    /**
     * Get the last name attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getLastNameAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_LAST_NAME);                             
    }

    /**
     * Get the username attribute attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUsernameAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_USERNAME);                             
    }

    /**
     * Get the user name attribute in oidc apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getUserNameAttributeOIDC(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_USER_NAME_OIDC);                             
    }

    /**
     * Get the first name attribute in oidc apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getFirstNameAttributeOIDC(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_FIRST_NAME_OIDC);                             
    }

    /**
     * Get the last name attribute in oidc apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getLastNameAttributeOIDC(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_LAST_NAME_OIDC);                             
    }

    /**
     * Get the email attribute in oidc apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEmailAttributeOIDC(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_EMAIL_OIDC);    
    }

    /**
     * Get the group attribute in oidc apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getGroupAttributeOIDC(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_GROUP_OIDC);
    }
    
    /**
     * Get the selected scopes area
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getSelectedScopeTxtArea(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_AREA_SELECTED_SCOPES).find(HTMLKeyWordsConstants.HTML_INPUT_TXT);                             
    }

    /**
     * Get the last name attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMandatoryFirstNameCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_MANDATORY_FIRST_NAME);                             
    }

    /**
     * Get the last name attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMandatoryLastNameCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_MANDATORY_LAST_NAME);                             
    }

    /**
     * Get the first name attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUserAttributeCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_INPUT);                             
    }

    /**
     * Get the groups attribute
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getGroupAttributeCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_INPUT);
    }

    /**
    /** Get the update user attributes success alert
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getUpdateUserAttributeSettingsAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_UPDATE_ATTRIBUTES_SUCCESS);                             
    }

    /**
     * Get the mandatory checkbox of an attribute
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMandatoryUserAttributeCheckBoxOIDC(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get("td:nth-child(2)").get(CHECKBOX_INPUT);                             
    }

    /**
     * Get the SAML Attribute Search Input
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSAMLSearchInput(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(SAML_SEARCH_INPUT);
    }

    /**
     * Get the SAML Save Attribute Button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSAMLSaveAttributeBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(BTN_SAML_SAVE_ATTRIBUTE);
    }

    public static getSAMLEmailAttributeCheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(CHECKBOX_EMAIL_SAML);
    }


    /**
    * > This function returns the name of the checkbox that is used to enable/disable the custom attribute
    * feature
    * @returns The string CHECKBOX_CUSTOM_ATTRIBUTE
    */
    public static getOIDCCustomAttributeCheckBox(): string {
        
        return CHECKBOX_CUSTOM_ATTRIBUTE;
    }

    /**
     * This function returns the input element which is wrapped inside a checkbox.
     */
    public static getCheckBoxInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_INPUT);
    }

    /**
    * checkbox to click new custom attribute
    * @returns The string 
    */
    public static getUserAttrCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_ATTR_CHECKBOX);
    }

    /**
     * checkbox for enabling/disabling validate linked local account
     * @returns The string
     */
    public static getValidateLinkedLocalAccountCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {
    
        return cy.get(CHECKBOX_VALIDATE_LINKED_LOCAL_ACCOUNT);
    }
    
    /**
     * checkbox for enabling/disabling mandate linked local account
     * @returns The string
     */
    public static getMandateLinkedLocalAccountCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(CHECKBOX_MANDATE_LINKED_LOCAL_ACCOUNT);
    }

    /**
     *  Get the dropdown
     * @returns The string
     */
    public static getSubjectIdentifierDropDown(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(SUBJECT_IDENTIFIER_DROPDOWN);
    }

    /**
     *  Get the dropdown option
     * @returns The string
     */
    public static getSubjectIdentifierDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(DROPDOWN_OPTION);
    }

    /**
     * Get the radio button for pairwise subject type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPairwiseSubjectTypeRadioBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_SUBJECT_TYPE_PAIRWISE);
    }

    /**
     * Get the input field for sector identifier Uri
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSectorIdentifierUriInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SECTOR_IDENTIFIER_INPUT);
    }
  
    /**
    * > This function returns the name of the checkbox that is used to enable/disable the alternative subject
    * identifier feature
    * @returns The string CHECKBOX_ALTERNATIVE_SUBJECT_IDENTIFIER
    */
    public static getAlternativeSubjectIdentifierCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(CHECKBOX_ALTERNATIVE_SUBJECT_IDENTIFIER);
    }


    /**
    * > This function returns the name of the checkbox that is used to enable/disable the include user domain to subject
    * identifier feature
    * @returns The string CHECKBOX_INCLUDE_USER_DOMAIN
    */
    public static getIncludeUserdomainCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(CHECKBOX_INCLUDE_USER_DOMAIN);
    }

     /**
    * > This function returns the name of the checkbox that is used to enable/disable the the include org name
    * to subject identifier feature
    * @returns The string CHECKBOX_INCLUDE_ORG_NAME
    */
     public static getIncludeOrganizationNameCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(CHECKBOX_INCLUDE_ORG_NAME);
    }
}
