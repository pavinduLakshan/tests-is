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

/* global JQuery */

export class LoginAndRegistrationPage {

    public static readonly ALTERNATIVE_LOGIN_IDENTIFIER = "[data-componentid=\"alternative-login-identifier-card\"]";
    public static readonly USERNAME_VALIDATION = "[data-componentid=\"username-validation-card\"]"
    public static readonly PASSWORD_VALIDATION = "[data-componentid=\"password-validation-card\"]"
    public static readonly LOGIN_ATTEMPTS = "[data-componentid=\"login-attempts-card\"]"
    public static readonly BOT_DETECTION = "[data-componentid=\"bot-detection-card\"]"
    public static readonly PRIVATE_KEY_JTW_CLIENT_AUTHENTICATION = 
        "[data-componentid=\"private-key-jwt-client-auth-card\"]"
    public static readonly SELF_REGISTRATION = "[data-componentid=\"self-registration-card\"]"
    public static readonly PASSWORD_RECOVERY = "[data-componentid=\"password-recovery-card\"]"
    public static readonly EMAIL_DOMAIN_DISCOVERY = "[data-componentid=\"email-domain-discovery-card\"]"
    public static readonly IMPERSONATION = "[data-componentid=\"impersonation-card\"]"
    public static readonly SIFT_CONNECTOR = "[data-componentid=\"sift-connector-card\"]"

    public static getConnectorCard(connectorCardComponentId: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(connectorCardComponentId);
    }
}
