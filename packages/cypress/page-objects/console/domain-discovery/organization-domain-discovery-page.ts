/**
 * Copyright 2024 WSO2 LLC. (http://www.wso2.org) 
 * All Rights Reserved.
 * 
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

// Locators
const DOMAIN_DISCOVERY_ENABLE_TOGGLE = "[data-testid=organization-discovery-domains-page-enable-toggle]",
    DOMAIN_DISCOVERY_ACTION_CONTAINER = 
        "[data-componentid=organization-list-with-discovery-empty-placeholder-action-container]",
    ADD_DOMAIN_BUTTON = "[data-componentid=primary-button]",
    ADD_DOMAINS_ORGANIZATION_FIELD = 
        "[data-componentid=add-organization-discovery-domains-form-organization-name-field]",
    ORGANIZATIONS_LIST_DOWN_ARROW = "[data-testid=ArrowDropDownIcon]",
    ADD_DOMAINS_EMAIL_DOMAINS_FIELD = 
        "[data-componentid=add-organization-discovery-domains-form-organization-email-domain-field]",
    ADD_DOMAINS_SUBMIT_BUTTON = "[data-componentid=add-organization-discovery-domains-form-submit-button]",
    DOMAIN_DISCOVERY_LIST_TOP_ACTION_PANEL = 
        "[data-componentid=discoverable-organizations-list-layout-list-layout-top-action-panel]",
    ORGANIZATION_LIST = "[data-componentid=organization-list-with-discovery]",
    ORGANIZATION_DOMAIN_EDIT_BUTTON = "[data-componentid=organization-list-with-discovery-item-edit-button]",
    EDIT_DOMAINS_EMAIL_DOMAINS_FIELD = 
        "[data-componentid=edit-organization-discovery-domains-form-organization-email-domain-field]",
    EDIT_DOMAINS_UPDATE_BUTTON = "[data-componentid=edit-organization-discovery-domains-form-save-button]",
    DOMAIN_DISCOVERY_FAILED_MSG = "[id=\"failed-msg\"]",
    ASSIGN_DOMAINS_BUTTON = "[data-componentid=discoverable-organizations-list-layout-assign-button]",
    DOMAIN_DISCOVERY_MSG_FIELD = "[data-componentid=add-organization-discovery-domains-email-domain-message-field]";

export class DomainDiscoveryPage {
    
    public static DOMAIN_DISCOVERY_FAILURE_HEADING = "Unable to identify the organization.";
    public static TEMP_ORGANIZATION_NAME = "tempSubOrganization99";
    public static ALREADY_USED_DOMAIN_FAILURE_MESSAGE 
        = "Provided email domain is already mapped to a different organization.";

    static getDomainDiscoveryEnableToggle(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(DOMAIN_DISCOVERY_ENABLE_TOGGLE);
    }

    static getAddDomainButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(DOMAIN_DISCOVERY_ACTION_CONTAINER).get(ADD_DOMAIN_BUTTON);
    }

    static getOrganizationListDownArrow(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_DOMAINS_ORGANIZATION_FIELD).get(ORGANIZATIONS_LIST_DOWN_ARROW);
    }

    static getAddOrganizationDomainsField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_DOMAINS_EMAIL_DOMAINS_FIELD);
    }

    static getAddDomainsSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_DOMAINS_SUBMIT_BUTTON);
    }

    static getDomainDiscoveryListTopActionPanel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DOMAIN_DISCOVERY_LIST_TOP_ACTION_PANEL);
    }

    static getOrganizationList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_LIST);
    }

    static getOrganizationDomainEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_DOMAIN_EDIT_BUTTON);
    }

    static getEditDomainsEmailDomainsField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_DOMAINS_EMAIL_DOMAINS_FIELD);
    }

    static getEditDomainsUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_DOMAINS_UPDATE_BUTTON);
    }

    static getDomainDiscoveryFailedMsg(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DOMAIN_DISCOVERY_FAILED_MSG);
    }

    static getAssignDomainsButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASSIGN_DOMAINS_BUTTON);
    }

    static getDomainDiscoveryMsgField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DOMAIN_DISCOVERY_MSG_FIELD);
    }
}
