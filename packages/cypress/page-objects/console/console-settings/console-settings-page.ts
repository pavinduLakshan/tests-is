/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// PAGE LOCATORS
const INPUT_ADMIN_SEARCH = "[data-componentid=\"advanced-search-input\"]",
TABLE_BODY_DATA_ATTR: string = "data-table-body",
BUTTON_ADD_ADMIN = "[data-testid='primary-button']",
ADD_EXISTING_USER = "[data-componentid=\"administrators-add-existing-user-dropdown-item\"]",
INVITE_PARENT_USER = "[data-componentid=\"undefined-invite-new-user-dropdown-item\"]",
WIZARD_ADD_EXISTING_USER = "div[class=\"header wizard-header\"]",
BUTTON_USERNAME = "button[class=\"MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium" +
    " MuiAutocomplete-popupIndicator css-litkjl\"]",
INPUT_ADD_EXISTING_USER_SEARCH = "input[class=\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall" +
    " MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-13ajtqc\"]",
INPUT_INVITE_PARENT_USER = "[data-componentid=\"invite-new-administrator-wizard-form-username-field\"]",
ROLES_SELECTOR = "input[class=\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall" +
    " MuiAutocomplete-input MuiAutocomplete-inputFocused css-1m0kywu\"]",
BUTTON_ADD_ADMINISTRATOR = "[data-componentid='add-exiting-user-wizard-submit-button']",
BUTTON_ADD_INVITE_ADMINISTRATOR = "[data-componentid='invite-new-administrator-wizard-submit-button']";

/* It contains functions that return a Cypress Chainable object that represents a DOM element */
export class ConsoleSettingsPage {

    /**
     * This method returns the admin search input filed
     * @returns Cypress.Chainable<JQuery<HTMLElement>> 
    */
    public static getAdminSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_ADMIN_SEARCH);
    }

    /**
     * This method returns the members table body
     * @return {Cypress.Chainable<Element>}
     */
    public static getMemberTableBody(): Cypress.Chainable<Element> {
        
        return cy.dataTestId(TABLE_BODY_DATA_ATTR);
    }

    /**
    * This method returns the add administrator dropdown
    * @return {Cypress.Chainable<JQuery<Element>>}
    */
    public static getAddAdministrator(): Cypress.Chainable<JQuery<Element>> {
        
        return cy.get(BUTTON_ADD_ADMIN);
    }

    /**
    * This method returns the add administrator "Add Existing User" option
    * @returns {Cypress.Chainable<JQuery<Element>>}
    */
    public static getAddExistingUserOption(): Cypress.Chainable<JQuery<Element>> {
        
        return cy.get(ADD_EXISTING_USER);
    }

    /**
    * This method returns the add administrator "Invite Parent User" option
    * @returns {Cypress.Chainable<JQuery<Element>>}
    */
    public static getInviteParentUserOption(): Cypress.Chainable<JQuery<Element>> {
        
        return cy.get(INVITE_PARENT_USER);
    }

    /**
    * This method returns  add administrator wizard
    * @returns {Cypress.Chainable<JQuery<Element>>}
    */
    public static getAddAdministratorWizard(): Cypress.Chainable<JQuery<Element>>{
        
        return cy.get(WIZARD_ADD_EXISTING_USER);
    }

    /**
    * This method returns  administrator username selector dropdown button
    * @returns {Cypress.Chainable<JQuery<Element>>}
    */
    public static getButtonUsernameSelector(): Cypress.Chainable<JQuery<Element>>{
        
        return cy.get(BUTTON_USERNAME);
    }

    /**
     * This returns the add administrator search input field
     */
    public static getAddAdminSearchInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_ADD_EXISTING_USER_SEARCH);
    }

    /**
     * This returns the add administrator search input field
     */
    public static getInviteParentUserInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_INVITE_PARENT_USER);
    }

    /**
     * This method returns "Add administrator" button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddAdministratorButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BUTTON_ADD_ADMINISTRATOR);
    }

    /**
     * This method returns "Add administrator" button in invote administrator wizard.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInviteAdministratorButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BUTTON_ADD_INVITE_ADMINISTRATOR);
    }

    /**
     * This returns the roles selector dropdown button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} 
     */
    public static getRolesSelector(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(ROLES_SELECTOR);
    }

}
