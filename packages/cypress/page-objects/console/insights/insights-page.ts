/**
 * Copyright 2023 WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content.
 */

/* global JQuery */

const INSIGHTS_SIDE_PANEL_MENU_ITEM =
  "[data-componentid=\"side-panel-items-insights\"]";
const INSIGHTS_PAGE_TITLE =
  "[data-componentid=\"asgardeo-insights-page-header-title\"]";
const INSIGHTS_PAGE_SUB_TITLE =
  "[data-componentid=\"asgardeo-insights-page-header-sub-title\"]";
const DURATION_DROPDOWN = "[data-componentid=\"org-insights-duration-dropdown\"]";
const ACTIVITY_VIEW_TAB = ".tabs.resource-tabs > .menu > a:nth-child(${tabId})";
const DURATION_DROPDOWN_14_DAYS_OPTION = "[data-componentid=\"org-insights-duration-14\"]";

const ORG_INSIGHTS_ADVANCED_FILTER_TRIGGER = "[data-componentid=\"org-insights-advanced-filter-trigger\"]";
// Element selctors for the elements in the org insights advanced filter popup.
const ORG_INSIGHTS_ADVANCED_FILTER_ATTRIBUTE_INPUT = 
  "[data-componentid=\"org-insights-advanced-filter-attribute-dropdown\"]";
const ORG_INSIGHTS_ADVANCED_FILTER_ATTRIBUTE_ONBOARDING_METHOD = 
  "[data-componentid=\"org-insights-advanced-filter-attribute-dropdown\"] > .menu > div.item:nth-child(1)";
const ORG_INSIGHTS_ADVANCED_FILTER_ATTRIBUTE_USERSTORE = 
  "[data-componentid=\"org-insights-advanced-filter-attribute-dropdown\"] > .menu > div.item:nth-child(3)";
const ORG_INSIGHTS_ADVANCED_FILTER_VALUE_INPUT = 
  "[data-componentid=\"org-insights-advanced-filter-value-input\"]";
const ORG_INSIGHTS_ADVANCED_FILTER_SUBMIT = 
  "[data-componentid=\"org-insights-advanced-filter-submit-button\"]";
const ORG_INSIHGTS_FILTER_CHIP = "[data-componentid=\"org-insights-filter-chip\"]";

const MAU_GRAPH_CONTAINER = "[data-componentid=\"org-insights-mau-graph\"]";
const SUCCESS_LOGIN_GRAPH_CONTAINER =
  "[data-componentid=\"org-insights-success-logins-graph\"]";
const SIGNUP_GRAPH_CONTAINER = "[data-componentid=\"org-insights-signup-graph\"]";
const MAU_GRAPH_X_AXIS_START_DATE =
  "[data-componentid=\"org-insights-mau-graph\"] .recharts-cartesian-axis-ticks " +
  ".recharts-cartesian-axis-tick";
const SUCCESS_LOGIN_GRAPH_X_AXIS_START_DATE =
  "[data-componentid=\"org-insights-success-logins-graph\"] .recharts-cartesian-axis-ticks " +
  ".recharts-cartesian-axis-tick";

export class OrgInsightsPage {

  /**
   * Get the side panel menu item for insights page.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getSidePanelMenuItem(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(INSIGHTS_SIDE_PANEL_MENU_ITEM);
  }

  /**
   * Get the title text for the insights page.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getInsightsPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(INSIGHTS_PAGE_TITLE);
  }

  /**
   * Get the sub title text for the insights page.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getInsightsPageSubTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(INSIGHTS_PAGE_SUB_TITLE);
  }

  /**
   * Get the activity type dropdown for the insights page.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getActivityViewTab(tabPosition: number): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(ACTIVITY_VIEW_TAB.replace("${tabId}",tabPosition.toString()) , {
      timeout: 60000
    });
  }

  /**
   * Get the duration dropdown for the insights page.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getDurationDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(DURATION_DROPDOWN, {
      timeout: 60000
    });
  }

  /**
   * Get the duration dropdown option for 14 days for the insights page.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static get14DaysDurationOption(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(DURATION_DROPDOWN_14_DAYS_OPTION);
  }

  /**
   * Get the advanced filter popup trigger button in the insights page.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getAdvancedFilterTriggerButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(ORG_INSIGHTS_ADVANCED_FILTER_TRIGGER);
  }

  /**
   * Get the filter attribute dropdown in advanced filter popup.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getAdvancedFilterAttributeDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
  
    return cy.get(ORG_INSIGHTS_ADVANCED_FILTER_ATTRIBUTE_INPUT);
  }

  /**
   * Get the filter value input in advanced filter popup.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getAdvancedFilterValueInput(): Cypress.Chainable<JQuery<HTMLElement>> {
  
    return cy.get(ORG_INSIGHTS_ADVANCED_FILTER_VALUE_INPUT);
  }

  /**
   * Get the submit button in advanced filter popup.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getAdvancedFilterSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
  
    return cy.get(ORG_INSIGHTS_ADVANCED_FILTER_SUBMIT);
  }

  /**
   * Get the dropdown item for user store in the filter attribute dropdown in advanced filter popup.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getUserstoreFilterAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(ORG_INSIGHTS_ADVANCED_FILTER_ATTRIBUTE_USERSTORE);
  }

  
  /**
   * Get the dropdown item for user store in the filter attribute dropdown in advanced filter popup.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getOnboardingMethodFilterAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(ORG_INSIGHTS_ADVANCED_FILTER_ATTRIBUTE_ONBOARDING_METHOD);
  }

  /**
   * Get the Active Users graph container.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getMAUGraphContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(MAU_GRAPH_CONTAINER);
  }

  /**
   * Get the Success Login graph container.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getSuccessLoginGraphContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(SUCCESS_LOGIN_GRAPH_CONTAINER);
  }

  /**
   * Get the Signup graph container.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getSignupGraphContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(SIGNUP_GRAPH_CONTAINER);
  }

  /**
   * Get the start date of the x axis of the Active Users graph.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getMAUGraphXAxisStartDate(): Cypress.Chainable<JQuery<HTMLElement>> {
  
    return cy.get(MAU_GRAPH_X_AXIS_START_DATE,{ timeout: 60000 }).first();
  }

  /**
   * Get the start date of the x axis of the Success Login graph.
   * 
   * @returns A chainable command that will return a JQuery object of the element with the specified
   * selector.
   */
  public static getSuccessLoginGraphXAxisStartDate(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(SUCCESS_LOGIN_GRAPH_X_AXIS_START_DATE, { timeout: 60000 }).first();
  }

  public static getFilterChip(): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get(ORG_INSIHGTS_FILTER_CHIP);
  }
}
