/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { HTMLKeyWordsConstants } from "../../../constants";

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
