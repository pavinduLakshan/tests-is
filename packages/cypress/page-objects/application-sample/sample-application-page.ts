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

// LOCATORS
const SAMPLE_APP_LOGIN_BUTTON = "[class=\"btn primary\"]",
    SAMPLE_APP_LOGOUT_BUTTON_TXT = "Logout",
    SAMPLE_APP_LOGIN_BUTTON_TEXT = "Login",
    REACT_SAMPLE_APP_HEADER_TITLE = "React SPA Authentication Sample",
    CONSENT_PAGE_HEADER = "[class=\"login-portal-app-consent-request\"]",
    ALLOWED_SCOPE_DATA_KEY_PAIR = "[data-testid=\"data-key-pairallowedScopes\"]";

// B2B Sample App
const B2B_SAMPLE_APP_LOGIN_BUTTON_TEXT = "Sign In",
    B2B_SAMPLE_APP_SIGN_IN_BUTTON_TEXT = "Sign in with WSO2IS",
    B2B_SAMPLE_APP_SETTINGS_BUTTON_TEXT = "Settings",
    B2B_SAMPLE_APP_DASHBOARD_BUTTON_TEXT = "Dashboard",
    B2B_SAMPLE_APP_IDP_BUTTON = "[class=\"rs-dropdown-menu rs-dropdown-menu-collapse-in\"]",
    B2B_SAMPLE_APP_IDP_BUTTON_TEXT = "Identity Providers",
    B2B_SAMPLE_APP_ADD_IDP_BUTTON_TEXT = "Add Identity Provider",
    B2B_SAMPLE_APP_ENTERPRISE_IDP_BUTTON_TEXT = "Enterprise",
    B2B_SAMPLE_APP_CREATE_ENTERPRISE_IDP_BUTTON = "[class=\"rs-btn rs-btn-primary\"]",
    B2B_SAMPLE_APP_CREATE_ENTERPRISE_IDP_BUTTON_TEXT = "Create",
    B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_BUTTON = "[class=\"rs-btn rs-btn-default\"]",
    B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_BUTTON_TEXT = "Add to the Login Flow",
    B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW__CONFIRM_BUTTON 
        = "[class=\"Settings_addUserButton__hRGog rs-btn rs-btn-primary\"]",
    B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_CONFIRM_BUTTON_TEXT = "Confirm",
    B2B_SAMPLE_APP_ENTERPRISE_IDP_NAME_INPUT = "[id=\"application_name\"]",
    B2B_SAMPLE_APP_ENTERPRISE_IDP_CLIENT_ID_INPUT = "[id=\"client_id\"]",
    B2B_SAMPLE_APP_ENTERPRISE_IDP_CLIENT_SECRET_INPUT = "[id=\"client_secret\"]",
    B2B_SAMPLE_APP_ENTERPRISE_IDP_AUTHORIZATION_ENDPOINT_URL_INPUT = "[id=\"authorization_endpoint_url\"]",
    B2B_SAMPLE_APP_ENTERPRISE_IDP_TOKEN_ENDPOINT_URL_INPUT = "[id=\"token_endpoint_url\"]",
    B2B_SAMPLE_APP_ENTERPRISE_IDP_JWKS_ENDPOINT_URL_INPUT = "[id=\"certificate\"]",
    B2B_SAMPLE_APP_SIGN_IN_BUTTON = "button[class=\"button\"]",
    B2B_SAMPLE_APP_SIGN_OUT_BUTTON = "Sign Out",
    B2B_SAMPLE_APP_SIGN_OUT_CONFIRM_BUTTON 
        = "[class=\"rs-btn rs-btn-primary rs-btn-lg\"]",
    B2B_SAMPLE_APP_SIGN_OUT_CONFIRM_BUTTON_TEXT = "Submit",
    B2B_SAMPLE_APP_ADD_IDP_ALERT_SUCCESS_TEXT = "Identity Provider Add to the Login Flow Successfully.";

/**
 * This class is used to maintain asgardeo react sample app elements.
 */
export class SampleApplicationPage {

    /**
     * This function returns a cypress chainable object that represents the react sample app's login 
     * button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSampleLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SAMPLE_APP_LOGIN_BUTTON);
    }

    /**
     * This function returns the text of the login button on the sample app login page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Login"
     */
    public static getSampleLoginButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(SAMPLE_APP_LOGIN_BUTTON_TEXT);
    }

    /**
     * This function returns the text of the login button on the sample app login page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Sign In"
     */
    public static getB2BSampleLoginButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_LOGIN_BUTTON_TEXT);
    }

    /**
     * This function returns the text of the sign in button on the sample app sign in page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Sign in with WSO2IS"
     */
    public static getB2BSampleSignInButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_SIGN_IN_BUTTON_TEXT);
    }

    /**
     * This function returns the sign in button on the sample app sign in page
     * @returns The sign in button
     */
    public static getB2BSampleSignInButton(): string {

        return B2B_SAMPLE_APP_SIGN_IN_BUTTON;
    }

    /**
     * This function returns the text of the Settings button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Settings"
     */
    public static getB2BSampleSettingsButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_SETTINGS_BUTTON_TEXT);
    }

    /**
     * This function returns the text of the Dashboard button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Dashboard"
     */
    public static getB2BSampleDashboardButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_DASHBOARD_BUTTON_TEXT);
    }

    /**
     * This function returns the IDP button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Identity Providers"
     */
    public static getB2BSampleIDPButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_IDP_BUTTON).contains(B2B_SAMPLE_APP_IDP_BUTTON_TEXT);
    }

    /**
     * This function returns the text of the add idp button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Add Identity Provider"
     */
    public static getB2BSampleAddIdpButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_ADD_IDP_BUTTON_TEXT);
    }

    /**
     * This function returns the text of the add enterprise idp button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Enterprise"
     */
    public static getB2BSampleAddEnterpriseIdpButtonTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_ENTERPRISE_IDP_BUTTON_TEXT);
    }

    /**
    * This function returns the idp name input element of the b2b sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getB2BSampleEnterpriseIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ENTERPRISE_IDP_NAME_INPUT);
    }

    /**
    * This function returns the idp client id element of the b2b sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getB2BSampleEnterpriseIdpClientIdInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ENTERPRISE_IDP_CLIENT_ID_INPUT);
    }

    /**
    * This function returns the idp client secret element of the b2b sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getB2BSampleEnterpriseIdpClientSecretInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ENTERPRISE_IDP_CLIENT_SECRET_INPUT);
    }

    /**
    * This function returns the idp authorization endpoint url element of the b2b sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getB2BSampleEnterpriseIdpAuthOrizationEndpointUrlInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ENTERPRISE_IDP_AUTHORIZATION_ENDPOINT_URL_INPUT);
    }

    /**
    * This function returns the idp token endpoint url element of the b2b sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getB2BSampleEnterpriseIdpTokenEndpointUrlInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ENTERPRISE_IDP_TOKEN_ENDPOINT_URL_INPUT);
    }

    /**
    * This function returns the idp jwks endpoint url element of the b2b sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getB2BSampleEnterpriseIdpJWKSEndpointUrlInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ENTERPRISE_IDP_JWKS_ENDPOINT_URL_INPUT);
    }

    /**
     * This function returns the create enterprise idp button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Create"
     */
    public static getB2BSampleCreateEnterpriseIdpButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_CREATE_ENTERPRISE_IDP_BUTTON)
            .contains(B2B_SAMPLE_APP_CREATE_ENTERPRISE_IDP_BUTTON_TEXT);
    }

    /**
     * This function returns the add enterprise idp to login flow button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Add to the Login Flow"
     */
    public static getB2BSampleAddEnterpriseIdpToLoginFlowButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_BUTTON)
            .contains(B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_BUTTON_TEXT);
    }

    /**
     * This function returns the add enterprise idp to login flow confirm button on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Add to the Login Flow"
     */
    public static getB2BSampleAddEnterpriseIdpToLoginFlowConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW__CONFIRM_BUTTON)
            .contains(B2B_SAMPLE_APP_ADD_ENTERPRISE_IDP_TO_LOGIN_FLOW_CONFIRM_BUTTON_TEXT);
    }

    /**
     * This function returns the text enterprise idp add to login flow success message on the sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getB2BSampleAddEnterpriseIdpToLoginFlowSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_ADD_IDP_ALERT_SUCCESS_TEXT);
    }

    /**
     * This function returns a cypress chainable object that contains the sample app sign out button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getB2BSampleSignOutButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(B2B_SAMPLE_APP_SIGN_OUT_BUTTON);
    }

    /**
     * This function returns the b2b sample app sign out confirm button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element that contains the text "Submit"
     */
    public static getB2BSampleSignOutConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(B2B_SAMPLE_APP_SIGN_OUT_CONFIRM_BUTTON)
            .contains(B2B_SAMPLE_APP_SIGN_OUT_CONFIRM_BUTTON_TEXT);
    }

    /**
     * This function returns a cypress chainable object that contains the sample app logout button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSampleLogoutButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(SAMPLE_APP_LOGOUT_BUTTON_TXT);
    }

    /**
     * This function returns the title of the react sample app header.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} 
     */
    public static getReactSampleHeaderTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(REACT_SAMPLE_APP_HEADER_TITLE);
    }


     /**
     * This function returns the title of the consent page.
     * @returns {string} 
     */
    public static getConsentPageTitle(): string {

        return CONSENT_PAGE_HEADER;
    }

    /**
     * This function returns the allowed scope data key pair element of the sample app.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAllowedScopeDataKeyPair(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALLOWED_SCOPE_DATA_KEY_PAIR);
    }
}
