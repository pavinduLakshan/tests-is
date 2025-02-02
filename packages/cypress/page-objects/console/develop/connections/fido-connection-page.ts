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
/// <reference types="Cypress" />

// PAGE LOCATORS
const FIDO_SETUPLINK = "[data-componentid=\"resource-grid-card-item-edit-button\"]",
    FIDO_GRID_CARD_ACTION_CONTAINER = "[data-testid=\"idp-list-FIDOAuthenticator-action-container\"]",
    FIDO_CHOOSE_APPLICATION_LINK = "[data-componentid=\"link\"]",
    FIDO_APPLICATION_SELECTION_LIST_MODEL = "[data-testid=\"FIDO-authenticator-quick-start-" +
    "application-selection-modal-list-item-heading\"]",
    EMAIL_OTP_SELECTED_APPLICATION_DIV_CONTENT = "div.content",
    BTN_SECURITYKEY_BIOMETRIC = "div[class=\"social-login blurring social-dimmer\"]",
    LBL_FIDO_LOGIN_PAGE ="[data-testid=login-page-fido-heading]",
    LBL_FIDO_LOGIN_TRY_AGAIN_PAGE = "[data-testid=login-page-fido-heading-error]",
    LNK_MY_ACCOUNT = "a[id=my-account-link]",
    BTN_FIDO_LOGIN = "[data-componentid=login-page-sign-in-with-fido]",
    BTN_RETRY = "[data-testid=login-page-fido-retry-button]",
    FIDO_EDIT_RESOURCE_TAB = "[data-testid=\"multi-factor-authenticator-edit-resource-tabs\"]";
    
/**
* Class containing asgardeo console Passkey(FIDO) page elements.
* Console -> Develop -> Connections > Passkey
*/
export class FIDOConnectionPage {
   
    /**
     * Defines the message displayed when clicked the FIDO login button in the login page
     */
    public static readonly FIDO_SIGN_IN_TXT: string = "Sign in using passkey";

    /**
     * Defines the message displayed in FIDO login try again page
     */
    public static readonly FIDO_SIGN_IN_INTERRUPTION_TXT: string = "Sign in with passkey interrupted!";

    public static readonly FIDO_RESOURCE_TAB: string = "[data-testid=\"multi-factor-authenticator-" +
        "edit-resource-tabs\"]";

    /**
     * This method is used to get element of FIDO setup link via connection list page.
     * @returns Cypress.Chainable<JQuery<HTMLElement>>
     */
     public static getFIDOSetupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FIDO_GRID_CARD_ACTION_CONTAINER).find(FIDO_SETUPLINK);
    }

     /**
     * It returns the element of the "choose-application-link" on the page when setting up FIDO
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
      public static getChooseApplicationLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FIDO_CHOOSE_APPLICATION_LINK);
    }

    /**
     * This function returns the element with the data_test_id FIDO-authenticator-quick-start-
     * application-selection-modal-list-item-heading'
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getFIDOApplicationSelectionListModel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FIDO_APPLICATION_SELECTION_LIST_MODEL);
    }

    /**
     * This function returns the content of the div element that contains the selected application name.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getFIDOSelectedAppDivContent(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_SELECTED_APPLICATION_DIV_CONTENT);
    }

    /**
    * This method to click the passkey option in the login page
    */
    public static getBtnPasskey(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get( BTN_FIDO_LOGIN);
    }

    /**
     * This method to validate the passkey option in the login page
     * @param header 
     */
    public static validateFidoLoginPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_FIDO_LOGIN_PAGE);
    }

    /**
     * This method to validate the passkey try again option in the login page
     * @param header 
     */
    public static validateFidoLoginTryAgainPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_FIDO_LOGIN_TRY_AGAIN_PAGE);
    }

    /**
    * This method is to get retry button when trying FIDO login
    */
    public static  clickRetryBtn ():  Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_RETRY);     
    }

    /**
    * This method is to get the my account link when trying FIDO login
    */
    public static  validateMyaccountlnk ():  Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_MY_ACCOUNT).invoke("removeAttr", "target");       
    }   
}
