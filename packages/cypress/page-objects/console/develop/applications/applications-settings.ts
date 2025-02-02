/**
 * Copyright 2024 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

// Locators - Application Edit Page
const DCR_ENDPOINT_URL: string = "[data-componentid=\"applications-settings-page-dcr-endpoint-url\"]";
const REQUIRE_AUTHENTICATION_CHECKBOX: string = 
"[data-componentid=\"applications-settings-page-authenticationRequired-checkbox\"]";
const MANDATE_SSA_CHECKBOX: string = "[data-componentid=\"applications-settings-page-mandateSSA-checkbox\"]";
const JWKS_ENDPOINT_URL: string = "[data-componentid=\"applications-settings-page-ssaJwks-url\"]";
const ENFORCE_FAPI_CHECKBOX: string = 
"[data-componentid=\"applications-settings-page-enableFapiEnforcement-checkbox\"]";
const SUBMIT_BUTTON: string = "[data-componentid=\"applications-settings-page-submit-button\"]";
const ERROR_PROMPT: string = "[data-componentid=\"applications-settings-page-ssaJwks-url-error\"]";

/**
 * Class containing Asgardeo Console Application Edit Page common Page Objects
 * Console -> Develop -> Applications -> <application>
 */
export class ApplicationsSettingsPage {

    /**
     * Get the dcr endpoint url 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDcrEndpointUrl(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DCR_ENDPOINT_URL);
    }

    /**
     * Get the Require Authentication checkbox 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRequireAuthenticationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(REQUIRE_AUTHENTICATION_CHECKBOX);
    }

    /**
     * Get the Mandate SSA checkbox 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMandateSSACheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MANDATE_SSA_CHECKBOX);
    }

    /**
     * Get the JWKS endpoint url 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getJwksEndpointUrl(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(JWKS_ENDPOINT_URL);
    }

    /**
     * Get the Enforce FAPI checkbox 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEnforceFapiConformanceCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ENFORCE_FAPI_CHECKBOX);
    }

    /**
     * Get the Submit button 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUBMIT_BUTTON);
    }

    /**
     * This function returns the error prompt in application page
     */
    public static getErrorPrompt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ERROR_PROMPT);
    }
    
}
