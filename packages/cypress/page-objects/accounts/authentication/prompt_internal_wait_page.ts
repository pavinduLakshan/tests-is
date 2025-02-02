/*
 *   Copyright (c) 2024 WSO2 LLC. (https://www.wso2.com)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/* global JQuery */

/// <reference types="Cypress" />

// Locators.
const TXT_GREETING = "h2[data-componentid=\"internal-wait-greeting\"]";
const TXT_MESSAGE = "p[data-componentid=\"internal-wait-message\"]";
const TXT_COUNTDOWN = "h4[data-componentid=\"internal-wait-countdown\"]";

/**
 * This class is used to maintain prompt internal waiting page.
 */
export class PromptInternalWaitPage {

    /**
     * This function returns the greeting text element.
     * @returns {Cypress.Chainable<JQuery<Element>>}
     */
    public static getGreeting(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(TXT_GREETING);
    }

    /**
     * This function returns the message text element.
     * @returns {Cypress.Chainable<JQuery<Element>>}
     */
    public static getMessage(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(TXT_MESSAGE);
    }

    /**
     * This function returns the countdown text element.
     * @returns {Cypress.Chainable<JQuery<Element>>}
     */
    public static getCountdown(): Cypress.Chainable<JQuery<Element>> {

        return cy.get(TXT_COUNTDOWN);
    }
}
