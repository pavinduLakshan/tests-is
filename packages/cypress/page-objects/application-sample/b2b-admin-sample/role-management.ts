/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="Cypress" />

// PAGE LOCATORS
const
    LIST_ITEM_ROLE = "[class=\"rs-panel rs-panel-collapsible\"]",
    LIST_ITEM_ADMIN_ROLE_TEXT = "Admin",
    LIST_ITEM_ADMINISTRATOR_ROLE_TEXT = "Administrator",
    LIST_ITEM_ORG_CREATOR_ROLE_TEXT = "org-creator";

export class B2BAdminAppRoleManagementPage {

    /**
     * This function returns the list items of the roles list.
     * @returns The list items of the roles list.
     */
    public static getRoleListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LIST_ITEM_ROLE);
    }
}
