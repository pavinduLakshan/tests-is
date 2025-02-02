/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

//Locators

const START_ACCOUNT_LINK_NEXT_BUTTON = "[data-testid=start-account-link-message-next]";
const FINISH_ACCOUNT_CONTINUE_BUTTON = "[data-testid=finish-account-link-message-continue]";
const PASSWORD_DATA_ATTR = "[data-testid=login-page-password-input]";
const SIGN_IN_BUTTON_DATA_ATTR = "[data-testid=login-page-continue-login-button]";


/* It contains functions that return Cypress chainable objects that represent elements on the page. */
export class FederatedAuthenticationPage{

    /**
     * This function returns the start account link element
     * @returns The element with the id of "start-account-link"
     */
    public static getStartAccountLink(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(START_ACCOUNT_LINK_NEXT_BUTTON);
    }

    /**
     * This function returns the element that is used to finish the account creation process
     * @returns The element with the id of "finish-account-continue-button"
     */
    public static getFinishAccountLink(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(FINISH_ACCOUNT_CONTINUE_BUTTON);
    }

    /**
     * This function returns a Cypress chainable object that represents the password input element
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(PASSWORD_DATA_ATTR);
    }

    /**
     * It returns a Cypress chainable object that represents the sign in button element
     * @returns A chainable object that represents the element with the data-test attribute of
     * "sign-in-button"
     */
    public static getSignInBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(SIGN_IN_BUTTON_DATA_ATTR);
    }
}
