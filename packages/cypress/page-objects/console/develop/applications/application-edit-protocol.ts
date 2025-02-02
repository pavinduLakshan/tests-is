/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

import { HTMLKeyWordsConstants } from "../../../../constants";

// Locators - Application Edit Page - Protocol Tab
const WRAPPER_OIDC_CLIENT_ID =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-client-id-readonly-input-wrapper\"]";
const CHK_OIDC_ALLOWED_GRANT_TYPES =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-grant-type-checkbox-group\"]";
const INPUT_OIDC_AUTHORIZED_REDIRECT_URL =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-callback-url-input\"]";
const BTN_ADD_OIDC_AUTHORIZED_REDIRECT_URL =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-callback-url-input-add-button\"]";
const FILTER_TXT_OIDC_REDIRECT_URL =
    "[data-testid^=\"application-edit-access-settings-inbound-oidc-form-callback-url-input-\"]";
const FILTER_BTN_DELETE_OIDC_REDIRECT_URL =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-callback-url-input-\"]" +
    "[data-testid$=\"-delete-button\"]";
const INPUT_OIDC_ALLOWED_ORIGIN =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-allowed-origin-url-input\"]";
const BTN_ADD_ALLOWED_ORIGIN =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-allowed-origin-url-input-add-button\"]";
const FILTER_TXT_ALLOWED_ORIGIN =
    "[data-testid^=\"application-edit-access-settings-inbound-oidc-form-allowed-origin-url-input-\"]";
const FILTER_BTN_DELETE_ALLOWED_ORIGIN =
    "[data-testid^=\"application-edit-access-settings-inbound-oidc-form-allowed-origin-url-input-\"]";
const CHK_PKCE_MANDATORY =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-pkce-checkbox-group\"]";
const CHK_PAR_MANDATORY =
    "[data-componentid=\"inbound-oidc-form-pushed-authorization-checkbox\"]";
const CHK_PVT_KEY_JWT_REUSE_ENABLED =
    "[data-componentid=\"inbound-oidc-form-client-auth-pvt-key-jwt-reuse-checkbox\"]";
const CHK_SUBJECT_TOKEN_ENABLE =
    "[data-componentId=\"application-edit-access-settings-inbound-oauth2-oidc-form-subject-token-checkbox\"]";
const CHK_PUBLIC_CLIENT_ENABLED =
    "[data-testid=\"application-edit-access-settings-inbound-oauth2-oidc-form-public-client-checkbox\"]";
const DROPDOWN_CLIENT_AUTH_METHOD =
    "[data-componentId=\"inbound-oidc-form-client-auth-method-dropdown\"]";
const CLIENT_AUTH_SUBJECT_DN_INPUT =
    "[data-componentId=\"inbound-oidc-form-client-auth-subject-dn\"]";
const DROPDOWN_CLIENT_AUTH_SIGNING_ALGORITHM =
    "[data-componentId=\"inbound-oidc-form-client-auth-signing" +
    "-algorithm-dropdown\"]";
const DROPDOWN_IDTOKEN_RESPONSE_SIGNING_ALGORITHM =
    "[data-componentId=\"inbound-oidc-form-id_token-response-signing" +
    "-algorithm-dropdown\"]";
const DROPDOWN_REQUEST_OBJECT_SIGNING_ALGORITHM =
    "[data-componentId=\"inbound-oidc-form-request-object-signing" +
    "-algorithm-dropdown\"]";
const DROPDOWN_REQUEST_OBJECT_ENCRYPTION_ALGORITHM =
    "[data-componentId=\"inbound-oidc-form-request-object-encryption" +
    "-algorithm-dropdown\"]";
const DROPDOWN_REQUEST_OBJECT_ENCRYPTION_METHOD =
    "[data-componentId=\"inbound-oidc-form-request-object-encryption" +
    "-method-dropdown\"]";
const GROUP_RADIO_ACCESS_TOKEN =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-access-token-type-radio-group\"]";
const RADIO_ACCESS_TOKEN_TYPE = "input[name=\"type\"]";
const RADIO_ACCESS_TOKEN_BINDING_TYPE = "input[name=\"bindingType\"]";
const INPUT_ACCESS_TOKEN_EXPIRY_TIME =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-access-token-expiry-time-input\"]";
const CHK_RENEW_REFRESH_TOKEN =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-renew-refresh-token-checkbox\"]";
const INPUT_REFRESH_TOKEN_EXPIRY_TIME =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-refresh-token-expiry-time-input\"]";
const INPUT_SUBJECT_TOKEN_EXPIRY_TIME =
    "[data-testid=\"application-edit-access-settings-inbound-oauth2-oidc-form-subject-token-expiry-time-input\"]";
const INPUT_ID_TOKEN_AUDIENCE = "[data-testid=\"url-input\"]";
const BTN_ADD_ID_TOKEN_AUDIENCE = "[data-testid=\"url-input-add-button\"]";
//TODO id token audience list and cancel buttons
const FILTER_TXT_ID_TOKEN_AUDIENCE = "[data-testid^=\"url-input-\"]";
const FILTER_BTN_DELETE_ID_TOKEN_AUDIENCE = "[data-testid^=\"url-input-\"][data-testid$=\"-delete-button\"]";
const INPUT_ID_TOKEN_EXPIRY_TIME =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-id-token-expiry-time-input\"]";
const BTN_UPDATE_PROTOCOL_SETTINGS =
    "[data-testid=\"application-edit-access-settings-inbound-oidc-form-submit-button\"]";
const PROTOCOL_UPDATE_SUCCESSFULL_MESSAGE = "[data-testid=\"alert-success-body\"]";
const PROTOCOL_UPDATE_SUCCESSFULL_NOTIFICATION = "div.notification.notification-success.notification-visible";
const STANDARD_APP_GRANT_TYPES = "[data-testid=\"application-edit-access-settings-inbound-oauth2-oidc-" +
    "form-grant-type-checkbox-group\"]";
const TXT_CLIENT_ID = "[data-testid=\"application-edit-access-settings-inbound-oauth2" +
    "-oidc-form-client-id-readonly-input-wrapper\"]";
const TXT_CLIENT_SECRET = "[data-testid=\"application-edit-access-settings-inbound-oauth2" +
    "-oidc-form-client-secret-readonly-input-wrapper\"]";
const TXT_AUTHORIZED_REDIRECT_URL = "[data-testid=\"application-edit-access-settings" +
    "-inbound-oauth2-oidc-form-callback-url-input\"]";
const BTN_URL_ADD = "[data-testid=\"application-edit-access-settings-inbound-oauth2" +
    "-oidc-form-callback-url-input-add-button\"]";
const INPUT_STANDARD_APP_ALLOWED_ORIGINS = "[data-testid=\"application-edit-access-settings-inbound-oauth2-oidc-" +
    "form-allowed-origin-url-input\"]";
const BTN_ADD_ALLOWED_ORGINS_URL = "[data-testid=\"application-edit-access-settings-inbound-oauth2-oidc-" +
    "form-allowed-origin-url-input-add-button\"]";
const BTN_STD_APP_UPDATE_PROTOCOL_SETTINGS =
    "[data-testid=\"application-edit-access-settings-inbound-oauth2-oidc-form-submit-button\"]";
const APPLICATION_CONSUMER_URL_INTPUT =
    "[data-testid=\"application-edit-access-settings-inbound-saml-form-assertion-consumer-url-input\"]";
const UPDATE_BTN = "[data-testid=\"application-edit-access-settings-inbound-saml-form-submit-button\"]";
const CHK_BOX_CODE_GRANT_TYPE = "input[name=\"grant\"][value=\"authorization_code\"]";
const CHK_BOX_IMPLICIT_GRANT_TYPE = "input[name=\"grant\"][value=\"implicit\"]";
const CHK_BOX_PASSWORD_GRANT_TYPE = "input[name=\"grant\"][value=\"password\"]";
const CHK_BOX_CLIENT_REQUEST_BINDING_TYPE = "input[name=\"bindingType\"][value=\"client-request\"]";
const CHK_BOX_CLIENT_CREDENTIAL_GRANT_TYPE = "input[name=\"grant\"][value=\"client_credentials\"]";
const CHK_BOX_TOKEN_EXCHANGE_GRANT_TYPE = "input[name=\"grant\"]" + 
"[value=\"urn:ietf:params:oauth:grant-type:token-exchange\"]";
const CHK_BOX_ORGANIZATION_SWITCH_GRANT_TYPE = "input[name=\"grant\"][value=\"organization_switch\"]";
const CHK_BOX_HYBRID_FLOW_ENABLE = "input[name=\"enable-hybrid-flow\"][value=\"enable-hybrid-flow\"]";
const CHK_BOX_HYBRID_FLOW_CODE_IDTOKEN_ENABLE = "input[name=\"hybridFlowResponseType\"][value=\"code id_token\"]";
const CHK_BOX_HYBRID_FLOW_CODE_IDTOKEN_TOKEN_ENABLE = "input[name=\"hybridFlowResponseType\"][value=\"code id_token token\"]";
const CHK_BOX_JWT_ACCESS_TOKEN = "input[name=\"type\"][value=\"JWT\"]";
const BTN_REMOVE_DEAULT_REDIRECT_URL = "[data-testid=\"application-edit-" 
+ "access-settings-inbound-oidc-form-callback-url-input-"
    + "https://localhost:3000-delete-button\"]";
const BTN_CLIPBOARD_CLIENTID = "[data-testid=\"application-edit-access-settings-" 
+ "inbound-oauth2-oidc-form-client-id-readonly-input-wrapper\"] > .ui > .copy";
const BTN_CLIPBOARD_CLIENTSECRET = "[data-testid=\"application-edit-access-settings-" 
+ "inbound-oauth2-oidc-form-client-secret-readonly-input-wrapper\"] > .ui > .copy";
const DROPDOWN_OPTIONS = "div[role=option]";
const DROPDOWN_ENCRYPTION_ALGORITHM = "[data-testid=\"application-edit-access-settings-inbound-"
    + "oidc-form-encryption-algorithm-dropdown\"]";
const DROPDOWN_ENCRYPTION_METHODS = "[data-testid=\"application-edit-access-settings-inbound-"
    + "oidc-form-encryption-method-dropdown\"]";
const JWKS_URL_INPUT = "[data-testid=\"application-certificate-wrapper-jwks-input\"]";
const INPUT_AREA_ACCESS_TOKEN_ATTRIBUTES = "input[placeholder=\"Search by attribute name\"]";

/**
 * Class containing Asgardeo Console Application Edit Page - Protocol Tab Page Objects
 * Console -> Develop -> Applications -> <application> -> Protocol Tab
 */
export class ApplicationProtocolEditPage {

    //Get grant type enbale checkbox class status
    public static readonly CHECKED_CLASS = "ui checked checkbox";

    //Get grant type disable checkbox class status
    public static readonly UNCHECKED_CLASS = "ui checkbox";

    public static readonly SELECTED_CLASS = "div.item.active.selected";

    public static readonly MENU_DIV = "div.menu";

    /**
     * Get the input field for OIDC client id of the application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtOidcClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(WRAPPER_OIDC_CLIENT_ID).find("input");
    }

    /**
     * Get the copy to clipboard button for OIDC client id of the application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCopyOidcClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(WRAPPER_OIDC_CLIENT_ID).find("button");
    }

    /**
     * Get the checkbox row corresponding to the OIDC grant type
     * @param {string} grantType - grant type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getGrantTypeList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_OIDC_ALLOWED_GRANT_TYPES);
    }

    /**
     * Get the checkbox for implict grant type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getImplicitGrantTypeChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_IMPLICIT_GRANT_TYPE);
    }

    /**
     * Get the checkbox for JWT Access Token
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getJWTAccessTokenChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_JWT_ACCESS_TOKEN);
    }

    /**
     * Get the Access Token Attributes input area
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAccessTokenAttributeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_AREA_ACCESS_TOKEN_ATTRIBUTES);
    }

    /**
    * Get the checkbox for code grant type
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getCodeGrantTypeChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_CODE_GRANT_TYPE);
    }

    /**
   * Get the checkbox for password grant type
   * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
   */
    public static getPasswordGrantTypeChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_PASSWORD_GRANT_TYPE);
    }

    /**
     * Get the checkbox for client request access token binding type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getClientRequestBindingTypeChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_CLIENT_REQUEST_BINDING_TYPE);
    }

    /**
    * Get the checkbox for client credential grant type
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getClientCredentialGrantTypeChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_CLIENT_CREDENTIAL_GRANT_TYPE);
    }

    /**
     * Get the checkbox for organization switch grant type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getOrganizationSwitchGrantTypeChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_ORGANIZATION_SWITCH_GRANT_TYPE);
    }

    /**
    * Get the checkbox for token exchange grant type
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getTokenExchangeGrantTypeChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_TOKEN_EXCHANGE_GRANT_TYPE);
    }

    /**
     * Get the input field for OIDC authorized redirect URL
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputOidcAuthorizedRedirectUrl(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_OIDC_AUTHORIZED_REDIRECT_URL);
    }

    /**
     * Get the add OIDC authorized redirect URL button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddOidcAuthorizedRedirectUrl(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_OIDC_AUTHORIZED_REDIRECT_URL);
    }

    /**
     * Get the div corresponding to redirect url from the list
     * @param {string} redirectUrl - redirect URL
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtOidcRedirectUrl(redirectUrl: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_TXT_OIDC_REDIRECT_URL + `[data_testid*="${redirectUrl}"]`);
    }

    /**
     * Get the button corresponding to delete redirect url from the list
     * @param {string} redirectUrl - redirect URL
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDeleteRedirectUrl(redirectUrl: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_BTN_DELETE_OIDC_REDIRECT_URL + `[data_testid*="${redirectUrl}"]`);
    }

    /**
     * Get the input field for OIDC allowed origin
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputOidcAllowedOrigin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_OIDC_ALLOWED_ORIGIN);
    }

    /**
     * Get the add OIDC allowed origin
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddOidcAllowedOrigin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ALLOWED_ORIGIN);
    }

    /**
     * Get the div corresponding to allowed origin from the list
     * @param {string} allowedOrigin - allowed origin
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtAllowedOrigin(allowedOrigin: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_TXT_ALLOWED_ORIGIN + `[data_testid*="${allowedOrigin}"]`);
    }

    /**
     * Get the button corresponding to delete allowed origin from the list
     * @param {string} allowedOrigin - allowed origin
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDeleteAllowedOrigin(allowedOrigin: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_BTN_DELETE_ALLOWED_ORIGIN + `[data_testid*="${allowedOrigin}"]`);
    }

    /**
     * Get the checkbox for PKCE mandatory
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkPkceMandatory(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_PKCE_MANDATORY);
    }

    /**
     * Get the checkbox for PAR mandatory
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkPARMandatory(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_PAR_MANDATORY);
    }

    /**
     * Get the checkbox for Private Key JWT Enabled.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkPvtKeyJWTReuseEnabled(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_PVT_KEY_JWT_REUSE_ENABLED);
    }

    /**
     * Get the checkbox to enable subject token.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubjectTokenEnable(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_SUBJECT_TOKEN_ENABLE);
    }

    /**
     * Get the checkbox for public client
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkPublicClient(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_PUBLIC_CLIENT_ENABLED);
    }

    /**
     * Get the dropdown option for client authentication methods
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getClientAuthMethodDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_CLIENT_AUTH_METHOD);
    }

    /**
     * Get the dropdown option for client authentication signing algorithms.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getClientAuthSigningAlgorithmDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_CLIENT_AUTH_SIGNING_ALGORITHM);
    }

    /**
     * Get the input field for client authentication subject DN
     */
    public static getClientAuthSubjectDNInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CLIENT_AUTH_SUBJECT_DN_INPUT);
    }

    /**
     * Get the dropdown option for id token response signing algorithms.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getIdtokenResponseSigningAlgorithmDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_IDTOKEN_RESPONSE_SIGNING_ALGORITHM);
    }

    /**
     * Get the dropdown option for request object signing algorithms.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRequestObjectSigningAlgorithmDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_REQUEST_OBJECT_SIGNING_ALGORITHM);
    }

    /**
     * Get the dropdown option for request object encryption algorithms.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRequestObjectEncryptionAlgorithmDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_REQUEST_OBJECT_ENCRYPTION_ALGORITHM);
    }

    /**
     * Get the dropdown option for request object encryption method.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRequestObjectEncryptionMethodDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_REQUEST_OBJECT_ENCRYPTION_METHOD);
    }

    /**
     * Get the div with input type checkbox.
     * @returns Get the default checkbox.
     */
    public static getCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HTMLKeyWordsConstants.HTML_INPUT_CHECKBOX);
    }

    /**
     * Get the radio button corresponding to the access token type
     * @param {string} tokenType - token type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRadioAccessTokenType(tokenType: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(GROUP_RADIO_ACCESS_TOKEN).contains("label", tokenType).siblings().find(RADIO_ACCESS_TOKEN_TYPE);
    }

    /**
     * Get the radio button corresponding to the access token binding type
     * @param {string} tokenBindingType - token type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRadioAccessTokenBindingType(tokenBindingType: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(GROUP_RADIO_ACCESS_TOKEN).contains("label", tokenBindingType).siblings()
            .find(RADIO_ACCESS_TOKEN_BINDING_TYPE);
    }

    /**
     * Get the input field for access token expiry time
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputAccessTokenExpiryTime(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ACCESS_TOKEN_EXPIRY_TIME).find("input");
    }

    /**
     * Get the renew refresh token checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkRenewRefreshToken(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_RENEW_REFRESH_TOKEN).find("input");
    }

    /**
     * Get the input field for refresh token expiry time
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputRefreshTokenExpiryTime(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_REFRESH_TOKEN_EXPIRY_TIME).find("input");
    }

    /**
     * Get the input field for subject token expiry time
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputSubjectTokenExpiryTime(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_SUBJECT_TOKEN_EXPIRY_TIME);
    }

    /**
     * Get the input field for ID token audience
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputIdTokenAudience(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ID_TOKEN_AUDIENCE).find("input");
    }

    /**
     * Get the add ID token audience button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddIdTokenAudience(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ID_TOKEN_AUDIENCE);
    }

    /**
     * Get the div corresponding to ID token audience from the list
     * @param {string} idTokenAudience - ID token audience
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtIdTokenAudience(idTokenAudience: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_TXT_ID_TOKEN_AUDIENCE + `[data_testid*="${idTokenAudience}"]`);
    }

    /**
     * Get the button corresponding to delete ID token audience from the list
     * @param {string} idTokenAudience - ID token audience
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDeleteIdTokenAudience(idTokenAudience: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_BTN_DELETE_ID_TOKEN_AUDIENCE + `[data_testid*="${idTokenAudience}"]`);
    }

    /**
     * Get the input field for ID token expiry time
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputIdTokenExpiryTime(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ID_TOKEN_EXPIRY_TIME).find("input");
    }

    /**
     * Get the update protocol setting button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnUpdateProtocolSettings(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_PROTOCOL_SETTINGS);
    }

    /**
     * This function is used to get the protocol update success message box
     * @returns The element with the class name "protocol-update-successfull-message-box"
     */
    public static getProtocolUpdateSuccessfullyMessageBox(): Cypress.Chainable<JQuery<HTMLElement>> {


        return cy.get(PROTOCOL_UPDATE_SUCCESSFULL_NOTIFICATION);
    }

    /**
     * Get Text Client Id for custom apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_CLIENT_ID);
    }

    /**
     * Get Text Client Secrets for custom apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtClientSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_CLIENT_SECRET);
    }

    /**
     * Get the checkbox row corresponding to the Standard Baed App Grant Type
     * @param {string} grantType - grant type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getStdAppChkGrantType(grantType: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(STANDARD_APP_GRANT_TYPES)
            .contains(HTMLKeyWordsConstants.HTML_LABEL, grantType).prev(HTMLKeyWordsConstants.HTML_INPUT);
    }

    /**
     * Get Text Authorized redirect URLs for custom apps
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtAuthorisedUrlforCustomApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_AUTHORIZED_REDIRECT_URL);
    }

    /**
     * Get the add Std App Authorised Url button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddStdAppAuthorisedUrlforCustomApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_URL_ADD);
    }

    /**
     * Get the input field for std app allowed origin
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputStdAppAllowedOrigin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_STANDARD_APP_ALLOWED_ORIGINS);
    }

    /**
     * Get the add Std App allowed origin
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddStdAppAllowedOrigin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ALLOWED_ORGINS_URL);
    }

    /**
     * Get the update std app protocol setting button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnStdAppUpdateProtocolSettings(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_STD_APP_UPDATE_PROTOCOL_SETTINGS);
    }

    /**
     * This function is used to get the Application consumer service URL input
     */
    public static getApplicationConsumerServiceURLInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(APPLICATION_CONSUMER_URL_INTPUT);
    }

    /**
     * This function is used to get the Update button
     */
    public static getProtocolUpdateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UPDATE_BTN);
    }

    /**
     * Get default call back url remove button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDefaultRedirectUrlRemoveBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_REMOVE_DEAULT_REDIRECT_URL);
    }

    /**
    * Get the copy to clipboard button for OIDC client id of the application
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getCopyClientIDBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CLIPBOARD_CLIENTID);
    }

    /**
     * Get the copy to clipboard button for OIDC client secret of the application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCopyClientSecretBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CLIPBOARD_CLIENTSECRET);
    }

    /**
     * Get the drop down option in the protocol tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_OPTIONS);
    }

    /**
     * This function returns a Cypress object representing a dropdown element with The dropdown 
     * contains the supported id_token encryption algorithms.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAlgorithmDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_ENCRYPTION_ALGORITHM);
    }

    /**
     * This function returns a Cypress chainable object representing a dropdown option for encryption
     * methods.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEncryptionMethodDropDownOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_ENCRYPTION_METHODS);
    }

    /**
    * Get the jwks url input area
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getJwksUrlInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(JWKS_URL_INPUT);
    }

    /*
     * Get the checkbox for hybrid flow enable
     * @returns
     */
    public static getHybridFlowEnableChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_HYBRID_FLOW_ENABLE);
    }

    /*
     * Get the checkbox for hybrid flow code_idtoken enable
     * @returns
     */
    public static getHybridFlowCodeIdTOkenEnableChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_HYBRID_FLOW_CODE_IDTOKEN_ENABLE);
    }

    /*
     * Get the checkbox for hybrid flow code_idtoken enable
     * @returns
     */
    public static getHybridFlowCodeIdTokenTokenEnableChkBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_HYBRID_FLOW_CODE_IDTOKEN_TOKEN_ENABLE);
    }

    /*
     * Get the chip label element.
     * @returns
     */
    public static getChipLabel(value: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="url-input-${value}"]`);
    }

    /*
     * Get the dropdown selected element.
     * @returns
     */
    public static getDropdownSelection(componentId: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-testid="${componentId}"]`).find("div").first();
    }

    /*
     * Get the input element.
     * @returns
     */
    public static getInputElement(componentId: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-testid="${componentId}"]`).find("input");
    }
}
