/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

const CREATE_ADMIN_WIZARD_DATA_ATTR = "[data-componentid=asgardeo-administrators-add-admin-wizard-modal]";
const CREATE_WIZARD_DATA_ATTR = "user-mgt-add-user-wizard-modal";
const CREATE_WIZARD_USER_TYPES_CONTAINER = "user-type-selection-form";
const INVITED_ADMIN_SELECTION_CARD_DATA_ATTR = "user-type-selection-form-card-guest";
const INVITED_ADMIN_FIRSTNAME_INPUT_DATA_ATTR = "user-mgt-add-user-form-firstName-input";
const INVITED_ADMIN_LASTNAME_INPUT_DATA_ATTR = "user-mgt-add-user-form-lastName-input";
const INVITED_ADMIN_ROLE_DROPDOWN_DATA_ATTR = "user-mgt-add-guest-user-form-role-dropdown";
const INVITED_ADMIN_ROLE_DROPDOWN_OPTIONS_CONTAINER_DATA_ATTR = "div[role=\"listbox\"]";
const CREATE_WIZARD_SUBMIT_BUTTON_DATA_ATTR = "user-mgt-add-user-wizard-modal-" +
    "finish-button";
const CREATE_ADMIN_WIZARD_SUBMIT_BUTTON_DATA_ATTR = 
    "[data-componentid=asgardeo-administrators-add-admin-wizard-modal-finish-button]";
const CREATE_ADMIN_WIZARD_SUBMIT_BUTTON_CONSOLE_SETTING =
    "[data-componentid=administrators-add-admin-wizard-modal-finish-button]";
const ADMIN_USER_EMAIL_INPUT_DATA_ATTR =
    "[data-componentid=add-admin-user-basic-external-form-email-input]";
const ADMIN_USER_ROLES_INPUT_DATA_ATTR =
    "[data-componentid=\"add-admin-user-basic-external-form-role-dropdown\"] .oxygen-text-field";
 const CONSUMER_USER_SELECTION_CARD_DATA_ATTR = "user-type-selection-form-card-consumer";


/**
 * Class containing Users create wizard objects.
 */
export class CreateUserWizard {

    /**
     * Get the administrator creation wizard.
     * @return {Cypress.Chainable<Element>}
     */
    public static getAdminCreateWizard(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CREATE_ADMIN_WIZARD_DATA_ATTR);
    }

    /**
     * Get the creation wizard.
     * @return {Cypress.Chainable<Element>}
     */
    public static getCreateWizard(): Cypress.Chainable<Element> {
        return cy.dataTestId(CREATE_WIZARD_DATA_ATTR);
    }

    /**
     * Get the creation wizard user type selection container.
     * @return {Cypress.Chainable<Element>}
     */
    public getUserTypesContainer(): Cypress.Chainable<Element> {
        return cy.dataTestId(CREATE_WIZARD_USER_TYPES_CONTAINER);
    }

    /**
     * Get the creation wizard consumer user type selection card.
     * @return {Cypress.Chainable<Element>}
     */
    public static getConsumerUserTypesSelectionCard(): Cypress.Chainable<Element> {
        return cy.dataTestId(CONSUMER_USER_SELECTION_CARD_DATA_ATTR);
    }

    /**
     * Get the creation wizard invited admin type selection card.
     * @return {Cypress.Chainable<Element>}
     */
    public static getInvitedAdminTypesSelectionCard(): Cypress.Chainable<Element> {
        return cy.dataTestId(INVITED_ADMIN_SELECTION_CARD_DATA_ATTR);
    }

    /**
     * Get the creation wizard invited admin email input.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getInvitedAdminEmailInput(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get(ADMIN_USER_EMAIL_INPUT_DATA_ATTR);
    }

    /**
     * Get the creation wizard invited admin email input.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInvitedAdminRolesInput(): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get(ADMIN_USER_ROLES_INPUT_DATA_ATTR);
    }

    /**
     * Get the creation wizard invited admin email input.
     * @return {Cypress.Chainable<Element>}
     */
     public static getInvitedAdminFirstNameInput(): Cypress.Chainable<Element> {
        return cy.dataTestId(INVITED_ADMIN_FIRSTNAME_INPUT_DATA_ATTR);
    }

    /**
     * Get the creation wizard invited admin email input.
     * @return {Cypress.Chainable<Element>}
     */
     public static getInvitedAdminLastNameInput(): Cypress.Chainable<Element> {
        return cy.dataTestId(INVITED_ADMIN_LASTNAME_INPUT_DATA_ATTR);
    }

    /**
     * Get the creation wizard invited admin role dropdown.
     * @return {Cypress.Chainable<Element>}
     */
    public static getInvitedAdminRoleDropdown(): Cypress.Chainable<Element> {
        return cy.dataTestId(INVITED_ADMIN_ROLE_DROPDOWN_DATA_ATTR);
    }

    /**
     * Get the locale dropdown options.
     * @return {Cypress.Chainable<Element>}
     */
    public  static getInvitedAdminRoleDropdownOptions(): Cypress.Chainable<Element> {
        return this.getInvitedAdminRoleDropdown()
            .within(() => {
                cy.get(INVITED_ADMIN_ROLE_DROPDOWN_OPTIONS_CONTAINER_DATA_ATTR);
            });
    }

    /**
     * Get the creation wizard form submit button.
     * @return {Cypress.Chainable<Element>}
     */
    public  static getCreateWizardSubmitButton(): Cypress.Chainable<Element> {
        return cy.dataTestId(CREATE_WIZARD_SUBMIT_BUTTON_DATA_ATTR);
    }

    /**
     * Get wizard form submit btn
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public  static getAdminWizardSubmitBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
       return cy.get(CREATE_ADMIN_WIZARD_SUBMIT_BUTTON_DATA_ATTR);
    }

    public static getAdminWizardSubmitBtnInConsoleSettings(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CREATE_ADMIN_WIZARD_SUBMIT_BUTTON_CONSOLE_SETTING);
    }
}
