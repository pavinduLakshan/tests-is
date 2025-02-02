/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.com)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/* global JQuery */

/// <reference types="Cypress" />

//Locators
const TXT_USER_FIRST_NAME = "input[id=\"fname\"]";
const TXT_USER_LAST_NAME = "input[id=\"lname\"]";
const BTN_SUBMIT = "[data-componentid=\"requested-claims-submit-btn\"]";

/**
 * This class is used to maintain user inforinput page .
 */
export class PromptForUserInputPage {

   /**
    * This function returns the user firstname element 
    * @returns {Cypress.Chainable<JQuery<Element>>}
    */
   public static getUserFirstName(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(TXT_USER_FIRST_NAME);
    }

   /**
    * This function returns the user last name element
    * @returns {Cypress.Chainable<JQuery<Element>>}
    */
    public static getUserLastName(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(TXT_USER_LAST_NAME);
    }

   /**
    * This function returns the user submit button
    * @returns {Cypress.Chainable<JQuery<Element>>}
    */
    public static getSubmitButton(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(BTN_SUBMIT);
    }
}
