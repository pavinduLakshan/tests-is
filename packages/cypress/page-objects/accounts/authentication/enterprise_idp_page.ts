/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/// <reference types="cypress" />

// LOCATORS LOGIN PAGE
const ENTERPRISE_IDP_LOGIN_BUTTON = "[data-testid=\"login-page-sign-in-with-";

/**
 * This class is used to maintain asgardeo enterprise-idp login page elements.
 */
export class AsgardeoEnterpriseIdpLoginPage {

    /**
     * This function returns a Cypress chainable object that represents the login button for the
     * specified enterprise identity provider
     * @param {string} idpName - The name of the IdP you want to use.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEnterpriseIdpLoginButton(idpName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ENTERPRISE_IDP_LOGIN_BUTTON + idpName + "\"]");
    }
}
