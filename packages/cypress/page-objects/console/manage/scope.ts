/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

//PAGE LOCATORS
const
  OIDC_SCOPES_BTN= "[data-componentid=external-dialect-edit-edit-external-claims-oidc-scopes-button]",
  OIDC_SCOPES_ADD = "[data-testid=oidc-scopes-list-layout-add-button]",
  OIDC_SCOPES_NEXTBTN = "[data-testid=add-oidc-scope-wizard-modal-next-button]",
  OIDC_SCOPE_ADD_DISPLAYNAME =
    "[data-testid=add-oidc-scope-wizard-modal-form-oidc-scope-form-name-input][arialabel=displayName]",
  OIDC_SCOPE_ADD_SCOPENAME =
    "[data-testid=add-oidc-scope-wizard-modal-form-oidc-scope-form-name-input][arialabel=scopeName]",
  OIDC_SCOPE_ADD_DESCRIPTION =
    "[data-testid=add-oidc-scope-wizard-modal-form-oidc-scope-form-name-input][arialabel=description]",
  OIDC_SCOPE_SEARCH_INPUT = "[data-testid='oidc-scopes-list-search-input'] > input",
  OIDC_SCOPE_DELETE = ".trash",
  OIDC_SCOPE_DELETE_ASSERT = "[data-testid=oidc-scopes-list-delete-confirmation-modal-assertion-checkbox]",
  OIDC_SCOPE_DELETE_CONFIRM = "[data-testid=oidc-scopes-list-delete-confirmation-modal-confirm-button]",
  OIDC_SCOPES_FINISHBTN = "[data-testid=add-oidc-scope-wizard-modal-finish-button]",
  HTML_INPUT_ELEMENT = "input";

export class OIDCScopeManagePage {

  /**
    * This function returns the new OIDC scope.
    * @returns A chainable object of type JQuery<HTMLElement>  
    **/
  public static getAddOIDCScope(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPES_ADD);
  }

  /**
    * This function returns the button to navigate to OIDC Scopes.
    * @returns A chainable object of type JQuery<HTMLElement>  
    **/
  public static getOIDCScopeNavigateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPES_BTN);
  }

  /**
    * This function returns the new OIDC scope with display name.
    * @returns A chainable object of type JQuery<HTMLElement>   
    **/
  public static addDisplayNameScope(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPE_ADD_DISPLAYNAME);
  }

  /**
    * This function returns the new OIDC scope with scope name.
    * @returns A chainable object of type JQuery<HTMLElement>   
    **/
  public static addScopeNameScope(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPE_ADD_SCOPENAME);
  }

  /**
    * This function returns the new OIDC scope with description.
    * @returns A chainable object of type JQuery<HTMLElement>  
    **/
  public static addDescriptionScope(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPE_ADD_DESCRIPTION).find(HTML_INPUT_ELEMENT);
  }

  /**
    * This function returns the next button once scope is created.
    * @returns A chainable object of type JQuery<HTMLElement>   
    **/
  public static getOIDCScopeNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPES_NEXTBTN);
  }

  /**
    * This function returns the finish button once scope is created with local clain.
    * @returns A chainable object of type JQuery<HTMLElement>  
  **/
  public static getOIDCScopeFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPES_FINISHBTN);
  }

  /**
    * It returns a chainable object that represents the search bar to search the scope
    * @returns A chainable object of type JQuery<HTMLElement>
    */
  public static getSearchBarInputOIDCScope(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPE_SEARCH_INPUT);
  }

  /**
    * It returns a chainable object that represents the trash/delete icon of scope
    * @returns A chainable object of type JQuery<HTMLElement>
    */
  public static getTrashIconOIDCScope(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPE_DELETE);
  }

  /**
    * It returns a chainable object that represents the checkbox to confirm to delete scope
    * @returns A chainable object of type JQuery<HTMLElement>
    */
  public static getOIDCScopeAssertConfirm(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPE_DELETE_ASSERT);
  }

  /**
    * It returns a chainable object that represents the confirmation of OIDC scope
    * @returns A chainable object of type JQuery<HTMLElement>
    */
  public static getOIDCScopeConfirmDelete(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(OIDC_SCOPE_DELETE_CONFIRM);
  }
}
