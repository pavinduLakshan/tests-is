/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/**
 * This class contains methods related to the loaders used in the console.
 */

const PRE_LOADER_LOCATOR = "[data-testid=\"pre-loader-wrapper\"]";
const CONTENT_LOCATOR = "[data-testid=\"content-loader-dimmer\"]";

export class ConsoleLoader {

    /**
     * Get the Asgardeo loader shown during app load.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getPreLoader(): Cypress.Chainable<JQuery<HTMLElement>> {

       return  cy.get(PRE_LOADER_LOCATOR);
    }

    /**
     * Get the content loader shown during the page loads.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getContentLoader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONTENT_LOCATOR);
    }
}
