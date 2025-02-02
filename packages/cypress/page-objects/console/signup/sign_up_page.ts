/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

//LOCATORS
const LBL_HEADER = "h3[class=\"ui header section-title medium-weight mt-0\"]",
    LBL_USER_NAME = "span[id=\"email-label\"]",
    INPUT_PASSWORD = "input[id=\"password\"]",
    BTN_CONTINUE = "button[class=\"ui primary fluid large button email-continue\"]",
    INPUT_TENANT_NAME = "input[id=\"tenant-Domain\"]",
    BTN_SIGN_UP = "button[data-testid=\"registration-page-signup-form-submit-button\"]",
    LBL_ERROR_MSG = "div[class=\"content pl-0\"]",
    LBL_SIGNUP_HEADER = "h3[class=\"ui header medium-weight\"]",
    INPUT_USER_NAME = "input[id=\"pfy_user_profile_email\"]",
    BTN_SUBMIT = "button[data-testid=\"registration-page-signup-form-submit-button\"]",
    THANKYOU_PAGE_HEADER = "h2[class=\"ui header portal-logo-tagline\"]";

/* It contains methods that return Cypress chainable objects that represent the elements on the page */
export class SignUpPage {

    /**
     * It returns a JQuery object that represents the header element
     * @returns A chainable command that will return a JQuery object of the element with the specified
     * selector.
     */
    static getHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(LBL_HEADER);
    }

    /**
     * It returns a Cypress chainable object that represents the username label element on the page
     * @returns The element with the id of "username"
     */
    static getUsernameLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(LBL_USER_NAME);
    }

    /**
     * It returns a Cypress chainable object that represents the password input element
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_PASSWORD);
    }

    /**
     * It returns a Cypress chainable object that represents the continue button
     * @returns A chainable command that will return a JQuery object of the element.
     */
    static getContinueBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_CONTINUE);
    }

    /**
     * It returns a Cypress chainable object that represents the tenant name input element
     * @returns The element with the id of "tenantName"
     */
    static getTenantNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_TENANT_NAME);
    }

    /**
     * It returns a Cypress chainable object that represents the signup button
     * @returns A chainable command that will return a JQuery object of the element.
     */
    static getBtnSignup(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIGN_UP);
    }

    /**
     * It returns a JQuery object that represents the error message label
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getErrorMessageLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(LBL_ERROR_MSG);
    }

    /**
     * It returns a JQuery object that represents the Sign Up header element
     * @returns The element with the id of "signup-header"
     */
    static getSignUpHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(LBL_SIGNUP_HEADER);
    }

   /**
    * It returns a Cypress chainable object that represents the username input element
    * @returns The username input element.
    */
    static getUsernameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_USER_NAME);
    }

    /**
     * It returns a Cypress chainable object that represents the submit button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getSubmitBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_SUBMIT);
    }

    /**
     * It returns a Cypress chainable object that represents the element with the id
     * "thankyou-page-header"
     * @returns The element with the id of "thankyou-page-header"
     */
    static getThankyouPageHeder(): Cypress.Chainable<JQuery<HTMLElement>> {
       
        return cy.get(THANKYOU_PAGE_HEADER);
    }

}
