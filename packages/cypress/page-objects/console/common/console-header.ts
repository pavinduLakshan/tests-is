/**
 * Copyright 2021 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

import { ConsoleHeader as CommonConsoleHeader } from "@wso2/identity-cypress-test-base/ui";
import { ConsoleHeaderDomConstants } from "@wso2iam/test-ts-core/constants";

/**
 * Class containing Asgardeo Console Header component objects.
 * @remarks Extended from `ConsoleHeader` from `@wso2/identity-cypress-test-base/ui`.
 * @see {@link https://github.com/wso2/identity-cypress-test-base/blob/main/src/ui/page-objects/console/console-header.ts}
 */
export class ConsoleHeader extends CommonConsoleHeader {

    /**
     * Get the Getting Started switch.
     * @param {Partial<ClickOptions>} options - Click options.
     * @return {Cypress.Chainable<Element>}
     */
    public getGettingStartedSwitch(options?: Partial<Cypress.ClickOptions>): Cypress.Chainable<Element> {

        return cy.dataTestId(ConsoleHeaderDomConstants.GETTING_STARTED_SWITCH_DATA_ATTR, options);
    }

    /**
     * Click on the Getting Started switch.
     * @param {Partial<ClickOptions>} options - Click options.
     */
    public clickOnGettingStartedSwitch(options?: Partial<Cypress.ClickOptions>): void {

        cy.dataTestId(ConsoleHeaderDomConstants.GETTING_STARTED_SWITCH_DATA_ATTR).click(options);
    }

    public static getUserDropdown():  Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ConsoleHeaderDomConstants.USER_DROPDOWN_DATA_ATTR, { timeout: 60000 });
    }

    public static getBillingPortalDropdownLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ConsoleHeaderDomConstants.BILLING_PORTAL_LINK_DATA_ATTR);
    }

    public static getUpgradeButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ConsoleHeaderDomConstants.UPGRADE_BUTTON_DATA_ATTR);
    }

    public static getUpgradeButtonUrl(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ConsoleHeaderDomConstants.UPGRADE_BUTTON_HREF_ATTR);
    }
}
