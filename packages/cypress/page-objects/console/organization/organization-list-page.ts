/**
 * Copyright 2024 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/* global JQuery */

const ADVANCE_SEARCH_BAR = "[data-componentid=\"organizations-list-advanced-search-input\"]",
    ADVANCE_SEARCH_BUTTON = "[data-componentid=\"organizations-list-advanced-search-options-button\"]",
    ADVANCED_SEARCH_HEADER = "[data-componentid=\"organizations-list-advanced-search-header\"]",
    ADVANCED_SEARCH_ATTRIBUTE_DROPDOWN = (
        "[data-componentid=\"organizations-list-advanced-search-filter-attribute-dropdown\"]"
    ),
    DROPDOWN_LIST = "div[class=\"visible menu transition\"]",
    DROPDOWN_LIST_ITEM = "div[role=\"option\"]",
    ADVANCED_SEARCH_CONDITION_DROPDOWN = (
        "[data-testid=\"organizations-list-advanced-search-filter-condition-dropdown\"]"
    ),
    ADVACNED_SEARCH_VALUE_INPUT = "[data-componentid=\"organizations-list-advanced-search-filter-value-input\"]",
    SEARCH_BUTTON = "[data-componentid=\"organizations-list-advanced-search-search-button\"]",
    ORGANIZATION_LIST_ITEM_HEADING = "[data-componentid=\"organization-list-item-heading\"]",
    META_ATTRIBUTE_AUTOCOMPLETE = "[data-componentid=\"organization-meta-attribute-autocomplete\"]",
    META_ATTRIBUTE_AUTOCOMPLETE_INPUT = "[data-componentid=\"organization-meta-attribute-input-field\"]";

export class OrganizationListPage {

    /**
     * This function returns the advanced search button.
     * @returns The element with the id of organization-advanced-search-button.
     */
    public static getAdvancedSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCE_SEARCH_BUTTON);
    }

    /**
     * This function returns the advanced search header.
     * @returns The element with the id of organization-advanced-search-header.
     */
    public static getAdvancedSearchHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCED_SEARCH_HEADER);
    }

    /**
     * This function returns the advanced search bar.
     * @returns The element with the id of organization-advanced-search-bar.
     */
     public static getAdvancedSearchBar(): Cypress.Chainable<JQuery<HTMLElement>> {

         return cy.get(ADVANCE_SEARCH_BAR);
    }

    /**
     * This function returns the dropdown element for the advance search attribute.
     * @returns The element with the id of organization-advanced-search-filter-attribute-dropdown.
     */
    public static getAdvanceSearchAttributeDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCED_SEARCH_ATTRIBUTE_DROPDOWN);
    }

    /**
     * This function returns the dropdown list for the advance search attribute.
     * @returns The element with the classes "visible menu transition".
     */
     public static getAttributeDropDownList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_LIST);
    }

    /**
     * This function returns the advance search attribute dropdown list items.
     * @returns The element with the role as option.
     */
     public static getAttributeDropdownListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_LIST_ITEM);
    }

    /**
     * This function returns the text input element for the advance search value.
     * @returns The element with the id of organization-advanced-search-filter-condition-dropdown.
     */
    public static getAdvanceSearchConditionDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCED_SEARCH_CONDITION_DROPDOWN);
    }

    /**
     * This function returns the text input element for the advance search value.
     * @returns The element with the id of organization-advanced-search-filter-value-input.
     */
    public static getAdvanceSearchValueInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVACNED_SEARCH_VALUE_INPUT);
    }

    /**
     * This function returns the advance search meta attribute autocomplete.
     * @returns The element with the id of organization-meta-attribute-autocomplete.
     */
    public static getAdvanceSearchMetaAttributeAutoComplete(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(META_ATTRIBUTE_AUTOCOMPLETE);
    }

    /**
     * This function returns the advance search meta attribute autocomplete input field.
     * @returns The element with the id of organization-meta-attribute-autocomplete-input-field.
     */
    public static getAdvanceSearchMetaAttributeAutoCompleteInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(META_ATTRIBUTE_AUTOCOMPLETE_INPUT);
    }

    /**
     * This function returns the search button element.
     * @returns The element with the id of  organization-advanced-search-search-button.
     */
    public static getAdvanceSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SEARCH_BUTTON);
    }

    /**
     * This function returns the organization list item
     * @returns The element with the id of organization-list-item-heading
     */
    public static getOrganizationListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_LIST_ITEM_HEADING);
    }
}
