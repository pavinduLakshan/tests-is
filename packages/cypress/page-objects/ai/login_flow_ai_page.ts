/*
 *   Copyright (c) 2024 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

const LOGINFLOW_AI_INPUT: string = "[data-componentid=\"login-flow-ai-input-field\"]",
    LOGINFLOW_AI_ANIMATION: string = "[data-componentid=\"ai-loading-screen-animation-container\"]",
    LOGINFLOW_AI_ACTION_BUTTON: string = "[data-componentid=\"ai-banner-action-button\"]",
    LOGINFLOW_AI_HISTORY_BUTTON: string = "[data-componentid=\"login-flow-ai-banner-history-button\"]",
    LOGINFLOW_AI_HISTORY_CARD: string = "[data-componentid=\"login-flow-ai-banner-history-card-0\"]";

/**
 * Class containing Login Flow AI Page objects.
 */
export class LoginFlowAIPage {

    /**
     * Retrieve the Login Flow AI Input text area.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getLoginFlowAIInput(): Cypress.Chainable {
        return cy.get(LOGINFLOW_AI_INPUT);
    }

    /**
     * Retrieve the Login Flow AI Animation Container.
     * @param timeout Timeout for the element to be available.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getLoginFlowAIAnimation(timeout=5000): Cypress.Chainable {
        return cy.get(LOGINFLOW_AI_ANIMATION, { timeout: timeout });
    }

    /**
     * Retrieve the Login Flow AI Action Button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getLoginFlowAIActionButton(): Cypress.Chainable {
        return cy.get(LOGINFLOW_AI_ACTION_BUTTON);
    }

    /**
     * Retrieve the Login Flow AI History Button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getLoginFlowAIHistoryButton(): Cypress.Chainable {
        return cy.get(LOGINFLOW_AI_HISTORY_BUTTON);
    }

    /**
     * Retrieve the Login Flow AI History Card.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getLoginFlowAIHistoryCard(): Cypress.Chainable {
        return cy.get(LOGINFLOW_AI_HISTORY_CARD);
    }
}
