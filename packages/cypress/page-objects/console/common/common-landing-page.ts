/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */
/// <reference types="Cypress" />

// PAGE LOCATORS
const
    LNK_TERMS_OF_SERVICES = "Terms of Service",
    BTN_ACCEPT_COOKIE_POLICY= "[data-testid='cookie-consent-banner-confirm-button']",
    BTN_ACCEPT_ALL_COOKIES = "#onetrust-accept-btn-handler",
    BTN_DECLINE_MARKETING_CONSENT="[data-componentid=\"marketing-consent-modal-decline-btn\"]",
    BTN_IGNORE_SUBSCRIBE= "[data-componentid=marketing-consent-modal-decline-btn]";

// LOGOUT LOCATORS
const LOGOUT_BUTTON = "[data-testid=\"app-header-dropdown-link-\"]";

//ALERT MESSAGES
const ALERT_SUCCESS = "[data-testid=\"alert-success-message\"]";
const ALERT_SUCCESS_DESCRIPTION = "[data-testid=\"alert-success-description\"]";
const ALERT_ERROR = "[data-testid=\"alert-error-body\"]";
const ALERT_WARNING = "[data-testid=\"alert-warning-body\"]";
const NOTIFICATION_DISMISS = ".notification-dismiss";
const SUB_ORG_EXIST_ERROR = "[data-testid=\"message-info\"]";

export class CommonLandingPage {

    /**
     * Get the header avatar
     * @returns {Cypress.Chainable<Element>}
     */
    public static getHeaderAvatarIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_TERMS_OF_SERVICES);
    }

    /**
     * Get the logout btn
     * @returns {Cypress.Chainable<Element>}
     */
    public static getLogoutBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOGOUT_BUTTON);
    }

    /**
     * Get the accept cookie btn
     * @returns {string}
     */
    public static getAcceptCookieBtn(): string {

        return BTN_ACCEPT_COOKIE_POLICY;
    }

    /**
     * This function returns a Cypress chainable object that represents the success alert element
     * @returns A JQuery object
     */
     public static getSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ALERT_SUCCESS);
    }

    /**
     * This function returns a Cypress chainable object that represents the success alert description element
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSuccessAlertDescription(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ALERT_SUCCESS_DESCRIPTION);
    }

    /**
     * This function returns the notification dismiss button
     * @returns The element with the id of "notification-dismiss"
     */
    public static getNotificationDismissBtn(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(NOTIFICATION_DISMISS);
    }

    /**
     * This function returns the error alert
     * @returns The error alert element.
     */
     public static getErrorAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_ERROR);
    }

    /**
     * This function returns the warning alert
     * @returns The warning alert element.
     */
    public static getWarningAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_WARNING);
    }

    /**
     * This function returns the accept all cookies button
     * @returns The accept all cookies button
     */
     public static getAcceptAllCookiesBtn(): string {

        return BTN_ACCEPT_ALL_COOKIES;
    }

    /**
     * This function returns the marketing consent decline button
     * @returns The marketing consent decline button
     */
     public static getMarketingConsentDeclineBtn(): string {

        return BTN_DECLINE_MARKETING_CONSENT;
    }

    /**
     * This function returns the ignore subscribe button
     * @returns The ignore subscribe button
     */
    public static getIgnoreSubscribeBtn(): string{

        return BTN_IGNORE_SUBSCRIBE;
    }

    /**
     * This function is when error pops up when re-registering a sub org
     */
    public static getSubOrgExistError(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUB_ORG_EXIST_ERROR);
    }
}
