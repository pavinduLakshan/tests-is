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
/// <reference types="cypress" />

// Locators for React Developed Sample application.
const LOGIN_BUTTON_ID = "[data-testid=login-page-continue-login-button]",
    USERNAME_DATA_ATTR = "#usernameUserInput",
    PASSWORD_DATA_ATTR = "[data-testid=login-page-password-input]",
    SIGNIN_BUTTON_DATA_ATTR = "[data-testid=\"identifier-auth-continue-button\"]",
    FORGOT_PASSWORD_BUTTON_DATA_ATTR = "[data-testid=\"login-page-password-recovery-button\"]",
    HYPR_SIGNIN_BUTTON = "[data-testid=\"login-page-sign-in-with-",
    LNK_SIGNUP = "[data-testid=login-page-early-signup-link]";

//CONSENT LOCATORS
const CHB_APPROVE_ALWAYS = "input[id=approveAlwaysCb]",
    CHB_APPROVE = "input[id=approveCb]",
    BTN_APPROVE = "input[id=approve]";

export class LoginPage {

    /**
     * This function returns a Cypress chainable object that represents the forgot password button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getForgotPasswordBtn() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(FORGOT_PASSWORD_BUTTON_DATA_ATTR)
    }

    /**
     * It returns a Cypress chainable object that represents the login button element
     * @returns A chainable object that is a JQuery object that contains an HTMLElement.
     */
    static getLoginBtn() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(LOGIN_BUTTON_ID);
    }

    /**
     * It returns a Cypress chainable object that represents the username input field
     * @returns A JQuery object that represents the username input field.
     */
    static getUsernameInputField() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(USERNAME_DATA_ATTR);
    }

   /**
    * It returns a Cypress chainable object that represents the password input field
    * @returns A chainable object of type JQuery<HTMLElement>
    */
    static getPasswordInputField() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(PASSWORD_DATA_ATTR);
    }

    /**
     * It returns a Cypress chainable object that represents the continue button on the sign in page
     * @returns A chainable command that will return a JQuery object of the element with the data-test
     * attribute of "signin-button"
     */
    static getContinueBtn() : Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(SIGNIN_BUTTON_DATA_ATTR);
    }

    /**
     * It returns a Cypress chainable object that represents the Sign Up button on the page
     * @returns A chainable command that will return a JQuery object of the element.
     */
    static getSignUpBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(LNK_SIGNUP);
    }

    /**
     * It returns a Cypress chainable object that represents the checkbox element with the id
     * "approveAlways" on the page
     * @returns The element itself.
     */
    static getApproveAlwaysCheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(CHB_APPROVE_ALWAYS);
    }

    /**
     * It returns a cypress chainable object that represents the approve checkbox element
     * @returns The element with the id of "approve"
     */
    static getApproveCheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(CHB_APPROVE);
    }
    
    /**
     * It returns a cypress chainable object that represents the approve button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    static getApproveBtn(): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(BTN_APPROVE);
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the Hypr sign-in
     * button with the specified connection.
     * @param {string} connection - The `connection` parameter is a string that represents the connection
     * name. It is used to construct the selector for the sign-in button element.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    static getHyprSignInBtn(connection: string): Cypress.Chainable<JQuery<HTMLElement>>{
        
        return cy.get(HYPR_SIGNIN_BUTTON + connection + "\"]");
    }
       
}
