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
const MAGIC_LINK_SETUPLINK = "[data-componentid=\"resource-grid-card-item-edit-button\"]",
    MAGIC_LINK_GRID_CARD_ACTION_CONTAINER = "[data-testid=\"idp-list-MagicLinkAuthenticator-action-container\"]",
    MAGIC_LINK_CHOOSE_APPLICATION_LINK = "[data-componentid=\"link\"]",
    MAGIC_LINK_APPLICATION_SELECTION_LIST_MODEL = "[data-testid=\"MagicLink-authenticator-quick-start-" +
    "application-selection-modal-list-item-heading\"]",
    MAGIC_LINK_SELECTED_APPLICATION_DIV_CONTENT = "div.content";

/**
 * Class containing asgardeo console email otp page elements.
 * Console -> Develop -> Connections > Magic Link
 */
export class MagicLinkConnectionPage {

    public static readonly MAGIC_LINK_RESOURCE_TAB: string = "[data-testid=\"multi-factor-authenticator-" +
    "edit-resource-tabs\"]";
   /**
     * This method is used to get element of magic link setup link via connection list page.
     * @returns Cypress.Chainable<JQuery<HTMLElement>>
     */
    public static getMagicLinkSetupLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        cy.log("Clicked Magic -" + MAGIC_LINK_GRID_CARD_ACTION_CONTAINER);
        return cy.get(MAGIC_LINK_GRID_CARD_ACTION_CONTAINER).find(MAGIC_LINK_SETUPLINK);
    }

    /**
     * It returns the element of the "choose-application-link" on the page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getChooseApplicationLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MAGIC_LINK_CHOOSE_APPLICATION_LINK);
    }

    /**
     * This function returns the element with the data_test_id 'email-otp-application-selection-list-model'
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getMagiclinkApplicationSelectionListModel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MAGIC_LINK_APPLICATION_SELECTION_LIST_MODEL);
    }

     /**
     * This function returns the content of the div element that contains the selected application name.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
      public static getMagicLinkSelectedAppDivContent(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MAGIC_LINK_SELECTED_APPLICATION_DIV_CONTENT);
    }
}
