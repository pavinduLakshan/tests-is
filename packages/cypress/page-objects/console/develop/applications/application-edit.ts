/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core/constants";

// Locators - Application Edit Page
const TXT_APP_EDIT_PAGE_TITLE: string = "[data-componentid=\"application-edit-page-layout-page-header-title\"]";
const BTN_GO_BACK_TO_GROUPS: string = "[data-componentid=\"application-edit-page-back-button\"]";
const BTN_APP_SHARE_UPDATE: string = "[data-testid=\"application-share-modal-save-button\"]";
const BTN_APP_SHARE_CANCEL: string = "[data-testid=\"link-button\"]";
const BTN_APP_SHARE_FORM_UPDATE: string = "[data-componentid=\"application-share-form-update-button\"]";
const RADIO_SHARE_WITH_ALL_SUB_ORGS: string = "[data-componentid=\"application-share-form-share-with-all-checkbox\"]";
const RADIO_SHARE_WITH_ALL_SUB_ORGS_ENABLED_STATE: string = 
    "[data-componentid=\"application-share-form-share-with-all-checkbox\"]"
        +"[class=\"ui checked radio checkbox\"]";
const TXT_APP_EDIT_RESOURCE_TAB_TITLE: string =  "[data-testid=\"heading\"]";
const SELECT_SUB_ORG_TO_SHARE : string = "[data-componentid=\"transfer-list-item-";
const BTN_APP_EDIT_PAGE_BANNER_VIEW_DETAILS: string = "[data-componentid=\"application-edit-outdated-app-"
    + "view-details-button\"]";
const BTN_APP_EDIT_PAGE_BANNER_UPDATE: string = "[data-componentid=\"application-edit-outdated-app-"
    + "update-button\"]";
const SELECT_APP_UPDATE_CONFIRMATION_MODAL: string = "[data-componentid=\"application-edit-application-"
    + "update-confirmation-modal\"]";
const SELECT_APP_UPDATE_CONFIRMATION: string = "[data-componentid=\"confirmation-modal-assertion-checkbox"
    + "\"] input.hidden";
const BTN_APP_UPDATE_PROCEED: string = "[data-componentid=\"confirmation-modal-confirm-button\"]";

/**
 * Class containing Asgardeo Console Application Edit Page common Page Objects
 * Console -> Develop -> Applications -> <application>
 */
export class ApplicationEditPage {

    public static readonly NAVIGATION_TABS: string = "[data-componentid=\"application-edit-resource-tabs\"]";
    /**
     * Get the navigation tab
     * @param {string} tabName - tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNavigationTab(tabName: string): Cypress.Chainable<JQuery<HTMLAnchorElement>> {

        return cy.get(this.NAVIGATION_TABS).contains("a", tabName);

    }

    /**
     * Get the go back to groups button 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnGoBackToGroups(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_GO_BACK_TO_GROUPS);

    }

    /**
     * Get the application edit page title
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtAppEditPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APP_EDIT_PAGE_TITLE);

    }

    /**
     * Get the application share cancel button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnApplicationShareCancel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APP_SHARE_CANCEL);
    }

    /**
     * Get the radio button according to the shared type
     * @param {string} shareType - tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRadioShareWithAllSubOrgs(shareType: string): Cypress.Chainable<JQuery<HTMLInputElement>> {

        cy.get(RADIO_SHARE_WITH_ALL_SUB_ORGS).should(($element) => {

            expect($element).to.be.length(3);
        }).then(
            () => {
                cy.log("The page is loaded with 3 of the elements");
            }
        );

        cy.wait(5000);
        return cy.get(RADIO_SHARE_WITH_ALL_SUB_ORGS)
            .contains(HTMLKeyWordsConstants.HTML_LABEL, shareType).prev(HTMLKeyWordsConstants.HTML_INPUT);
    }

    /**
     * Get the application share with all sub oranizations radio button enabled state
     * @param {string} shareType - tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRadioShareWithAllSubOrgsEnabledState(shareType: string): Cypress.Chainable<JQuery<HTMLLabelElement>> {

        cy.get(RADIO_SHARE_WITH_ALL_SUB_ORGS).should(($element) => {

            expect($element).to.be.length(3);
        }).then(
            () => {
                cy.log("The page is loaded with 3 of the elements");
            }
        );
        
        cy.wait(5000);
        return cy.get(RADIO_SHARE_WITH_ALL_SUB_ORGS_ENABLED_STATE)
            .contains(HTMLKeyWordsConstants.HTML_LABEL, shareType);
    }

    /**
     * Get the application share update button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnApplicationShareUpdate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APP_SHARE_UPDATE);
    }

    /**
     * Get the application share form update button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnApplicationShareFormUpdate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APP_SHARE_FORM_UPDATE);
    }
    
    /**
     * Get the application resource tab title
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getResourceTabTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APP_EDIT_RESOURCE_TAB_TITLE);
    }

    /**
     * Select the specific sub organization to share the application
     */
    public static getSelectSubOrgToShare(appName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_SUB_ORG_TO_SHARE + appName + "-checkbox" + "\"]");
    }

    /**
     * Get Application edit page outdated application banner view details button.
     */
    public static getOutdatedApplicationBannerViewDetailsBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APP_EDIT_PAGE_BANNER_VIEW_DETAILS);
    }

    /**
     * Get Application edit page outdated application update button.
     */
    public static getOutdatedApplicationUpdateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APP_EDIT_PAGE_BANNER_UPDATE);
    }

    /**
     * Get Application update confirmation modal.
     */
    public static getApplicationUpdateConfirmationModal(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_APP_UPDATE_CONFIRMATION_MODAL);
    }

    /**
     * Get Application update confirmation modal confirmation checkbox.
     */
    public static getChkBoxApplicationUpdateConfirmChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_APP_UPDATE_CONFIRMATION);
    }

    /**
     * Get Application update confirmation modal proceed update button.
     */
    public static getBtnApplicationUpdateProceedUpdate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APP_UPDATE_PROCEED);
    }
}
