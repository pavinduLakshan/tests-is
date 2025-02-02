/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/* global JQuery */

/// <reference types="cypress" />

const MAU_QUOTA_USAGE_WIDGET = "[data-componentid=\"mau_quota-usage-widget\"]";

export class BillingOverviewPage {
    /**
     * This function returns a Cypress chainable object that represents a jQuery element for a MAU
     * resource usage widget.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} 
     */
    public static getMauResourceUsageWidget():  Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(MAU_QUOTA_USAGE_WIDGET);
    }    
}
