/*
 *   Copyright (c) 2024 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/// <reference types="cypress" />

import ActionsConstants from "../../constants/console/action-mgt/actions";

const PRE_ISSUE_ACCESS_TOKEN_CARD = "[data-componentid=pre-issue-access-token-action-type-card]",
    PRE_UPDATE_PASSWORD_CARD = "[data-componentid=pre-update-password-action-type-card]",
    PRE_UPDATE_PROFILE_CARD = "[data-componentid=pre-update-profile-action-type-card]",
    PRE_REGISTRATION_CARD = "[data-componentid=pre-registration-action-type-card]",
    PRE_ISSUE_ACCESS_TOKEN_CARD_CONFIGURED_STATUS = 
        "[data-componentid=action-types-listing-page-pre-issue-access-token-configured-status-tag]",
    PRE_ISSUE_ACCESS_TOKEN_CARD_NOT_CONFIGURED_STATUS = 
        "[data-componentid=action-types-listing-page-pre-issue-access-token-not-configured-status-tag]";

/**
 * Class containing Actions Page objects.
 */
export class ActionsPage {

    /**
     * Retrieve the Action Type Card.
     * @param {string} actionType - Action type.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getActionTypeCard(actionType: string): Cypress.Chainable {

        switch (actionType) {
            case ActionsConstants.ACTION_TYPE_PRE_ISSUE_ACCESS_TOKEN:
                return cy.get(PRE_ISSUE_ACCESS_TOKEN_CARD);
            case ActionsConstants.ACTION_TYPE_PRE_UPDATE_PASSWORD:
                return cy.get(PRE_UPDATE_PASSWORD_CARD);
            case ActionsConstants.ACTION_TYPE_PRE_UPDATE_PROFILE:
                return cy.get(PRE_UPDATE_PROFILE_CARD);
            case ActionsConstants.ACTION_TYPE_PRE_REGISTRATION:
                return cy.get(PRE_REGISTRATION_CARD);
            default:
                return cy.get("");
        }
    }

    /**
     * Retrieve the Configured status label of Action Type.
     * @param {string} actionType - Action type.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getActionTypeConfiguredStatus(actionType: string): Cypress.Chainable {

        switch (actionType) {
            case ActionsConstants.ACTION_TYPE_PRE_ISSUE_ACCESS_TOKEN:
                return cy.get(PRE_ISSUE_ACCESS_TOKEN_CARD_CONFIGURED_STATUS);
            default:
                return cy.get("");
        }
    }

    /**
     * Retrieve the Configured status label of Action Type.
     * @param {string} actionType - Action type.
     * @returns {Cypress.Chainable<Element>}
     */
    public static getActionTypeNotConfiguredStatus(actionType: string): Cypress.Chainable {

        switch (actionType) {
            case ActionsConstants.ACTION_TYPE_PRE_ISSUE_ACCESS_TOKEN:
                return cy.get(PRE_ISSUE_ACCESS_TOKEN_CARD_NOT_CONFIGURED_STATUS);
            default:
                return cy.get("");
        }
    }
}
