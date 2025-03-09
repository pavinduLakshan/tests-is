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

import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core";

const
    ALTERNATIVE_LOGIN_IDENTIFIER_CONFIGURE_LINK = 
        "[data-testid=account-login-page-alternative-login-identifier-section-card-primary-button]",
    ALTERNATIVE_LOGIN_IDENTIFIER_EMAIL_OPTION = 
    "[data-componentid=\"alternative-login-identifier-edit-page-email-checkbox\"]",
    ALTERNATIVE_LOGIN_IDENTIFIER_MOBILE_OPTION = 
    "[data-componentid=\"alternative-login-identifier-edit-page-mobile-checkbox\"]",
    ALTERNATIVE_LOGIN_IDENTIFIER_CONFIG_SAVE = "[data-testid=alternative-login-identifier-edit-page-submit-button]",
    ALTERNATIVE_LOGIN_IDENTIFIER_CONFIRMATION_MODAL = 
        "[data-componentid=\"alternative-login-identifier-edit-page-confirmation-modal\"]",
    ALTERNATIVE_LOGIN_IDENTIFIER_CONFIRMATION_CHECKBOX = 
        "[data-componentid=\"alternative-login-identifier-edit-page-confirmation-modal-assertion-checkbox\"]",
    ALTERNATIVE_LOGIN_IDENTIFIER_CONFIRMATION_BUTTON = 
        "[data-componentid=\"alternative-login-identifier-edit-page-confirmation-modal-confirm-button\"]";


export class AlternativeLoginIdentifierManager {

    /**
     * To get the alternative login identifier configuration section.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlternativeLoginIdentifierConfigure(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALTERNATIVE_LOGIN_IDENTIFIER_CONFIGURE_LINK);
    }

    /**
     * To get the alternative login identifier email option.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlternativeLoginIdentifierEmailOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALTERNATIVE_LOGIN_IDENTIFIER_EMAIL_OPTION);
    }

    /**
     * To get the alternative login identifier mobile option.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlternativeLoginIdentifierMobileOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALTERNATIVE_LOGIN_IDENTIFIER_MOBILE_OPTION).find(HTMLKeyWordsConstants.HTML_INPUT_CHECKBOX);
    }

    /**
     * To get the alternative login identifier configuration save button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlternativeLoginIdentifierConfigSaveBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALTERNATIVE_LOGIN_IDENTIFIER_CONFIG_SAVE);
    }

    /**
     * To get the alternative login identifier confirmation modal.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlternativeLoginIdentifierConfirmationModal(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ALTERNATIVE_LOGIN_IDENTIFIER_CONFIRMATION_MODAL);
    }

    /**
     * To get the alternative login identifier confirmation checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlternativeLoginIdentifierConfirmationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ALTERNATIVE_LOGIN_IDENTIFIER_CONFIRMATION_CHECKBOX); 
    }

    /**
     * To get the alternative login identifier confirmation button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlternativeLoginIdentifierConfirmationButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ALTERNATIVE_LOGIN_IDENTIFIER_CONFIRMATION_BUTTON);
    }
}
