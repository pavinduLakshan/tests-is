/**
 * Copyright (c) 2024, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

const TXT_PAGE_HEADER = "h3[class=\"ui header text-center slogan-message mt-3 mb-6\"]"

export class RetryDoPage {

     /**
     * This method return the retry do page header
     * @returns  {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_PAGE_HEADER);
    }
}

