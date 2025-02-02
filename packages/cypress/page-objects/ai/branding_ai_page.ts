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

const BRANDING_AI_INPUT = "[data-componentid=\"branding-ai-input-field\"]",
    BRANDING_AI_ANIMATION = "[data-componentid=\"ai-loading-screen-animation-container\"]",
    BRANDING_AI_ACTION_BUTTON = "[data-componentid=\"ai-banner-action-button\"]";

/**
 * Class containing Branding AI Page objects.
 */
export class BrandingAIPage {

    /**
     * Retrieve the Login Flow AI Input text area.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getBrandingAIInput(): Cypress.Chainable {
        return cy.get(BRANDING_AI_INPUT);
    }

    public static getBrandingAIAnimation(timeout=5000): Cypress.Chainable {
        return cy.get(BRANDING_AI_ANIMATION, { timeout: timeout });
    }

    /**
     * Retrieve the Login Flow AI Action Button.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getBrandingAIActionButton(): Cypress.Chainable {
        return cy.get(BRANDING_AI_ACTION_BUTTON);
    }
}
