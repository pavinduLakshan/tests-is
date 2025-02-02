/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="cypress" />
const BTN_MY_ACCOUNT_OVERVIEW = "div[class=\"header action-button-text\"]";
const OVERVIEW_TAB = "[data-testid=\"side-panel-items-overview\"]";
const PERSONAL_TAB_TXT = "Personal Info";
const PROFILE_TXT = "[data-componentid=\"app-header-user-dropdown\"]";
const SECURITY_TAB = "[data-testid='side-panel-items-security']";
const OVERVIEW_SUB_HEADING = "[data-testid=\"page-layout-page-header-sub-title\"]";
const LANGUAGE_SWITCHER_TRIGGER = "[data-componentid=\"app-header-language-switcher-trigger\"]";
const EXPORT_USER_PROFILE = "profile-settings-section-card-primary-button";

/**
 * Class containing Asgardeo My Account Overview Page.
 * My Account -> Overview
 */
export class MyAccountOverview{
    
    /**
    * To get My Account Manage your profile button 
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getBtnManageYourProfile(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_MY_ACCOUNT_OVERVIEW);
    }
    
    /**
    * To get My Account Update account security button 
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getBtnUpdateAccountSecurity(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_MY_ACCOUNT_OVERVIEW);
    }

    /**
     * To get My Account Overview= tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTabOverview(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(OVERVIEW_TAB);
    }
    
    /**
    * To get My Account Personal Info tab
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */    
    public static getTabPersonalInfo(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.contains(PERSONAL_TAB_TXT);
    }

    /**
    * To get My Account Export Profile tab
    * @returns {Cypress.Chainable<Element>}
    */
    public static getTabExportProfile(): Cypress.Chainable<Element> {

        return cy.dataTestId(EXPORT_USER_PROFILE);
    }

    /**
    * To get My Account Security tab
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */  
    public static getTabSecurity(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(SECURITY_TAB);
    }

    /**
    * To get My Account profile heading
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */  
    public static getProfileHeading(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(PROFILE_TXT);
    }

    /**
     * To get My Account Overview sub heading
     */
    public static getOverviewSubHeading(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(OVERVIEW_SUB_HEADING);
    }

    /**
     * To get My Account Language Switcher Trigger
     */
    public static getLanguageSwitcherTrigger(): Cypress.Chainable<JQuery<HTMLElement>> {

            return cy.get(LANGUAGE_SWITCHER_TRIGGER);
    }
}
