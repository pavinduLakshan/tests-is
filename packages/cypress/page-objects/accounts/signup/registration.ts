/**
* Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
*
* This software is the property of WSO2 LLC. and its suppliers, if any.
* Dissemination of any information or reproduction of any material contained
* herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
* You may not alter or remove any copyright or other notice from copies of this content."
*/

//LOCATORS
const LBL_HEADER_SIGNUP = "[data-testid=product-tagline]",
    BTN_SUBMIT = "button[data-testid=\"registration-page-signup-form-submit-button\"]",
    SIGNUP_PAGE_EMAIL_INPUT_FIELD = "[data-testid=early-signup-page-form-email-address-field]",
    SIGNUP_PAGE_TITLE = "[data-testid=early-signup-page-form-title]",
    CREATE_ACCOUNT_TITLE = "[data-testid=registration-page-early-access-signup-form-title]",
    LBL_INVALID_EMAIL_ADDRESS_FIELD = "[data-testid=early-signup-page-form-email-address-field-error-message]",
    INVALID_USERNAME_DIV = "div[id=\"error-msg-invalid-username\"]",
    TENANT_POLICY_DESCRIPTION_DIV = "div[class=\"tenant-policy-description\"]",
    TENANT_NAME_UNIQUENESS_VALIDATION = "p[class=\"pl-4\"]",
    INPUT_TENANT_NAME = "input[id=\"tenant-Domain\"]",
    SIGNUP_FOR_FREE_BUTTON = ".cAsgardeoButton",
    DROPDOWN_NEW_ORGANIZATION = "[data-testid=tenant-dropdown-link-New-Organization]",
    NEW_ORGANIZATION_INPUT_FIELD = "[data-testid=tenant-add-wizard-form-type-input]",
    NEW_ORGANIZATION_CREATE_BUTTON = "[data-testid=tenant-add-wizard-create-button]",
    HTML_CARET_ELEMENT = ".caret",
    TENANT_DROPDOWN = "[data-testid=tenant-dropdown]",
    TENANT_SWITCH_MENU = "[data-testid=tenant-switch-menu]",
    CREATED_TENANT_NAME = "[data-testid*=\"-tenant-la-name\"]",
    INPUT_PASSWORD = "input[id=\"password\"]",
    ORGANIZATION_SWITCH_MENU = "[data-componentid=\"organization-switch-breadcrumb-breadcrumb-trigger\"]";

/**
* This class manages the asgardeo user registration page elements. 
*/
export class UserRegistrationPage {

    /**
    * This function returns the asgardeo signup page header element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSignupHeaderLabel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_HEADER_SIGNUP);
    }

    /**
    * This function returns the asgardeo Sign up for free button from website.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSignupForFree(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNUP_FOR_FREE_BUTTON);
    }

    /**
    * This function returns the dropdown to add new organization.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getOrganizationDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_NEW_ORGANIZATION);
    }

    /**
    * This function returns the input field to add new organization.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getNewOrganizationInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NEW_ORGANIZATION_INPUT_FIELD);
    }

    /**
    * This function returns the create button to add new organization.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getCreateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NEW_ORGANIZATION_CREATE_BUTTON);
    }

    /**
    * This function returns the html caret element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getCaretElement(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HTML_CARET_ELEMENT);
    }

    /**
    * This function returns the tenant dropdown.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getTenantDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TENANT_DROPDOWN);
    }

    /**
    * This function returns the tenant switch menu.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getTenantSwitchMenu(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TENANT_SWITCH_MENU);
    }

    /**
    * This function returns the created new tenant element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getNewTenantCreatedInConsole(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CREATED_TENANT_NAME);
    }

    /**
    * This function returns the asgardeo signup page button element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSignupButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUBMIT);
    }

    /**
    * This function returns the asgardeo signup page email input field element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSignupEmailInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNUP_PAGE_EMAIL_INPUT_FIELD);
    }

    /**
    * This function returns the asgardeo signup page title element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSignupPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNUP_PAGE_TITLE);
    }

    /**
    * This function returns the asgardeo tenant creation page title element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoAccountTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CREATE_ACCOUNT_TITLE);
    }

    /**
    * This function returns the asgardeo signup page invalid email input field element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoInvalidInputField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_INVALID_EMAIL_ADDRESS_FIELD);
    }

    /**
    * This function returns the asgardeo signup page invalid username element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoInvalidUsername(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INVALID_USERNAME_DIV);
    }

    /**
    * This function returns the asgardeo tenant policy description element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoTenantPolicyDescription(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TENANT_POLICY_DESCRIPTION_DIV);
    }

    /**
    * This function returns the asgardeo tenant policy validation element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoTenantPolicyValidation(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TENANT_NAME_UNIQUENESS_VALIDATION);
    }

    /**
    * This function returns the tenant name input element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getTenantNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_TENANT_NAME);
    }

    /**
    * This function returns the the password input element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_PASSWORD);
    }

    /**
     * Get the organization switch menu.
     * @returns The organization switch menu.
     */
    public static getOrganizationSwitchMenu(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_SWITCH_MENU);
    }
}
