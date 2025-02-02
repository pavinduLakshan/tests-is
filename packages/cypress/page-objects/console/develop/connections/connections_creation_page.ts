/**
  * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
  *
  * This software is the property of WSO2 LLC. and its suppliers, if any.
  * Dissemination of any information or reproduction of any material contained
  * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
  * You may not alter or remove any copyright or other notice from copies of this content."
  */

const BTN_SIDE_PANEL_IDENTITY_PROVIDERS: string = "[data-testid=side-panel-items-identity-providers]",
    TXT_HEADER: string = "[data-testid=idp-page-layout-page-header-title]",
    BTN_NEW_IDENTITY_PROVIDER: string = "[data-testid=idp-add-button]",
    BTN_FINISH: string = "[data-testid=add-connection-modal-finish-button]",
    BTN_DELETE_CONFIRM: string = "[data-testid=idp-list-delete-confirmation-modal-confirm-button]",
    TXT_GITHUB_IDP_NAME: string = "[data-testid=github-idp-create-wizard-content-idp-name]",
    TXT_FACEBOOK_IDP_NAME: string = "[data-testid=facebook-idp-create-wizard-content-idp-name]",
    TXT_GOOGLE_IDP_NAME: string = "[data-testid=google-idp-create-wizard-content-idp-name]",
    TXT_ENTERPRISE_IDP_NAME: string = "[data-testid=enterprise-idp-form-wizard-idp-name]",
    TXT_GITHUB_CLIENT_ID: string = "[data-testid=github-idp-create-wizard-page-idp-client-id]",
    TXT_FACEBOOK_APP_ID: string = "[data-testid=facebook-idp-create-wizard-content-idp-client-id]",
    TXT_GITHUB_CLIENT_SECRET: string = "[data-testid=github-idp-create-wizard-page-idp-client-secret]",
    TXT_FACEBOOK_APP_SECRET: string = "[data-testid=facebook-idp-create-wizard-content-idp-client-secret]",
    TXT_GOOGLE_CLIENT_ID: string = "[data-testid=google-idp-create-wizard-content-idp-client-id]",
    TXT_GOOGLE_CLIENT_SECRET: string = "[data-testid=google-idp-create-wizard-content-idp-client-secret]",
    TXT_CLIENT_ID_ENTERPRISE_IDP: string =
        "[data-componentid=enterprise-idp-form-wizard-oidc-idp-client-id]",
    TXT_CLIENT_SECRET_ENTERPRISE_IDP: string =
        "[data-componentid=enterprise-idp-form-wizard-oidc-idp-client-secret]",
    TXT_AUTHORIZED_ENPOINT: string =
        "[data-componentid=enterprise-idp-form-wizard-oidc-idp-authorization-endpoint-url]",
    TXT_TOKE_ENDPOINT: string =
        "[data-componentid=enterprise-idp-form-wizard-oidc-idp-token-endpoint-url]",
    TXT_JWKS_URL: string = "[data-componentid=enterprise-idp-form-wizard-oidc-jwks-endpoint-url]",
    TXT_REMOVE_IDP: string = "[data-testid=idp-list-delete-confirmation-modal-assertion-input]",
    TXT_TRUSTED_TOKEN_ISSUER_NAME: string ="[data-componentid=trusted-token-issuer-form-wizard-name]",
    TXT_TRUSTED_TOKEN_ISSUER_ISSUER: string = "[data-componentid=trusted-token-issuer-form-wizard-issuer]",
    TXT_TRUSTED_TOKEN_ISSUER_ALIAS: string = "[data-componentid=trusted-token-issuer-form-wizard-alias]",
    TXT_TRUSTED_TOKEN_ISSUER_JWKS_URL: string
        = "[data-componentid=trusted-token-issuer-form-wizard-oidc-jwks-endpoint-url]",
    BTN_REMOVE_IDP: string = "[data-testid=undefined-item-delete-button]",
    BTN_ENTERPRISE_IDP: string = "[data-componentid=resource-grid-card-Standard-Based-IdP]",
    BTN_GOOGLE_IDP: string = "[data-componentid=resource-grid-card-Google]",
    BTN_GITHUB_IDP: string = "[data-componentid=resource-grid-card-GitHub]",
    BTN_FACEBOOK_IDP: string = "[data-componentid=resource-grid-card-Facebook]",
    BTN_TRUSTED_TOKEN_ISSUER: string ="[data-componentid=resource-grid-card-Trusted-Token-Issuer]",
    TILE_OIDC_PROTOCOL: string = "[data-testid=add-connection-modal-next-button]",
    BTN_NEXT_TRUSTED_TOKEN_ISSUER_WIZARD: string = "[data-componentid=add-connection-modal-next-button]",
    BTN_SUBMIT_TRUSTED_TOKEN_ISSUER_WIZARD: string = "[data-testid=add-connection-modal-finish-button]",
    BTN_NEXT_ENTERPRISE_IDP_WIZARD: string = "[data-testid=add-connection-modal-next-button]",
    ALERT_SUCCESS: string = "[data-testid=alert-success-message]",
    IDP_REMOVE_MODAL: string = "[data-testid=idp-list-delete-confirmation-modal-assertion-checkbox\"]",
    IDP_REMOVE_CHECKBOX: string = "input[class=hidden]",
    TXT_SERVICE_PROVIDER_ENTITY_ID: string =
        "[data-componentid=enterprise-idp-form-wizard-saml-entity-id]",
    TXT_SINGLE_SIGN_ON_URL: string = "[data-componentid=enterprise-idp-form-wizard-saml-sso-url]",
    TXT_IDENTITY_PROVIDER_ENTITY_ID: string =
        "[data-componentid=enterprise-idp-form-wizard-saml-idp-entity-id]",
    TILE_SAML_PROTOCOL: string = "[data-componentid=enterprise-idp-form-wizard-saml-selection-card]",
    SAML_MANUAL_CONFIG: string = "[value=manual]",
    BTN_MS_IDP: string = "[data-componentid=resource-grid-card-Microsoft]",
    TXT_MS_IDP_NAME: string = "[data-testid=microsoft-idp-create-wizard-page-idp-name]",
    TXT_MS_IDP_CLIENT_ID: string = "[data-testid=microsoft-idp-create-wizard-page-idp-client-id]",
    TXT_MS_IDP_SECRET: string = "[data-testid=microsoft-idp-create-wizard-page-idp-client-secret]",
    TXT_IDP_FILTER: string = "[data-componentid=idp-advance-search-input]",
    CONTAINER_IDP_GRID: string = "[data-testid=resource-grid]",
    BTN_ETHEREUM_IDP: string = "[data-componentid=resource-grid-card-Sign-In-With-Ethereum]",
    TXT_ETHEREUM_IDP_NAME: string = "[data-testid=swe-idp-create-wizard-content-idp-name]",
    TXT_ETHERUEM_CLIENT_ID: string = "[data-testid=swe-idp-create-wizard-content-idp-client-id]",
    TXT_ETHERUEM_CLIENT_SECRET: string = "[data-testid=swe-idp-create-wizard-content-idp-client-secret]",
    BTN_APPLE_IDP: string = "[data-componentid=resource-grid-card-Apple]",
    TXT_APPLE_IDP_NAME: string = "[data-testid=apple-idp-create-wizard-content-idp-name]",
    TXT_APPLE_SERVICE_ID: string = "[data-testid=apple-idp-create-wizard-content-idp-client-id]",
    TXT_APPLE_TEAM_ID: string = "[data-testid=apple-idp-create-wizard-content-idp-team-id]",
    TXT_APPLE_KEY_ID: string = "[data-testid=apple-idp-create-wizard-content-idp-key-id]",
    TXT_APPLE_PRIVATE_ID: string = "[data-testid=apple-idp-create-wizard-content-idp-private-key]",
    BTN_HYPR_IDP: string = "[data-componentid=resource-grid-card-HYPR]",
    TXT_HYPR_IDP_NAME: string = "[data-testid=hypr-idp-create-wizard-page-idp-name]",
    TXT_HYPR_APP_ID: string = "[data-testid=hypr-idp-create-wizard-page-idp-app-id]",
    TXT_HYPR_BASE_URL: string = "[data-testid=hypr-idp-create-wizard-page-idp-base-url]",
    TXT_HYPR_IDP_TOKEN: string = "[placeholder='Enter API token from HYPR']",
    BTN_DUO_CREATE_IDP: string = "[data-componentid=resource-grid-card-Duo]",
    TXT_DUO_IDP_NAME: string = "[data-testid=duo-idp-create-wizard-page-idp-name]",
    TXT_DUO_CLIENT_ID: string = "[data-testid=duo-idp-create-wizard-page-idp-client-id]",
    TXT_DUO_CLIENT_SECRET: string = "[data-testid=duo-idp-create-wizard-page-idp-client-secret]",
    TXT_DUO_API_HOSTNAME: string = "[data-testid=duo-idp-create-wizard-page-idp-duo-host]",
    BTN_CONNECTION_FINISH : string = "[data-testid=primary-button]",
    BTN_APPLE_CONNECTION_FINISH : string = "[data-testid=add-connection-modal-finish-button]";

// LOCATORS NOTIFICATION_BASED
const CREATE_EIDP_SUCCESSFULL_NOTIFICATION: string = "div.notification.notification-success.notification-visible";

//Email  OTP
const LNK_EMAIL_OTP_LINK: string = "[data-testid=idp-list-email-otp-authenticator-action-container]",
    BTN_CONNECTION: string = "[data-testid=undefined-item-edit-button]";

//Security key/Biometrics
const LNK_SECURITYKEY_BIOMETRIC: string = "[data-testid=idp-list-FIDOAuthenticator-action-container]";
const MANUAL_CONFIG_LINK: string = "Manual Configuration";

//IDP edit
const LNK_IDP_EDIT_LINK: string = "[data-testid=\"idp-list-<idpName>-action-container\"]" +
    "> .actions > .left > [data-testid=\"undefined-item-edit-button\"]";

/**
 * Class containing asgardeo console connections page elements.
 * Console -> Develop -> Connections
 */
export class CreateConnectionsMainPage {

    /**
     * This function returns a cypress chainable object that represents the button that opens the side
     * panel
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConnectionSidePanelBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIDE_PANEL_IDENTITY_PROVIDERS);
    }

    /**
     * This function returns the "Add New Identity Provider" button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getCreateConnectionBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEW_IDENTITY_PROVIDER);
    }

    /**
     * This function returns the finish button element
     * @returns A chainable command that will return a JQuery object of the element.
     */
    public static getFinishBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FINISH);
    }

    /**
     * This function returns the delete confirmation button
     * @returns The element with the id of "delete-confirm-btn"
     */
    public static getConfirmDeleteBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DELETE_CONFIRM);
    }

    /**
     * This function returns the GitHub IdP Name input field
     * @returns The element with the idp name textbox.
     */
    public static getGitHubIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_GITHUB_IDP_NAME);
    }

    /**
     * This function returns the element that contains the text "Facebook" on the login page
     * @returns The element with the idp name.
     */
    public static getFacebookIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_FACEBOOK_IDP_NAME);
    }

    /**
     * This function returns the Google Idp Name input element
     * @returns The element with the idp name textbox
     */
    public static getGoogleIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_GOOGLE_IDP_NAME);
    }

    /**
     * This function returns the element with the id "enterpriseIdpName"
     * @returns The element with the id "enterpriseIdpName"
     */
    public static getEnterpriseIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_ENTERPRISE_IDP_NAME);
    }

    /**
     * This function returns the github client id textbox element
     * @returns The element with the id of "github-client-id"
     */
    public static getGithubClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_GITHUB_CLIENT_ID);
    }

    /**
     * This function returns the Facebook App ID textbox element
     * @returns The element with the text "Facebook App ID"
     */
    public static getFacebookAppId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_FACEBOOK_APP_ID);
    }

    /**
     * This function returns the element that has the id of "github-client-secret"
     * @returns The element with the id of txtGithubClientSecret
     */
    public static getGithubClientSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_GITHUB_CLIENT_SECRET);
    }

    /**
     * This function returns the Facebook App Secret textbox element
     * @returns The element with the id of "facebook_app_secret"
     */
    public static getFacebookAppSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_FACEBOOK_APP_SECRET);
    }

    /**
     * This function returns the Google Client ID textbox element
     * @returns The element with the text "Google Client ID"
     */
    public static getGoogleClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_GOOGLE_CLIENT_ID);
    }

    /**
     * This function returns the Google Client Secret textbox element
     * @returns The element with the id of "googleClientSecret"
     */
    public static getGoogleClientSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_GOOGLE_CLIENT_SECRET);
    }

    /**
     * This function returns the Client ID of the Enterprise IDP
     * @returns The element with the id of "client_id_enterprise_idp"
     */
    public static getEnterpriseClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_CLIENT_ID_ENTERPRISE_IDP);
    }

    /**
     * This function returns the client secret for the enterprise IDP
     * @returns The element with the id of txtClientSecretEnterpriseIdp
     */
    public static getEnterpriseClientSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_CLIENT_SECRET_ENTERPRISE_IDP);
    }

    /**
     * This function returns the element with the text "Authorized Endpoint"
     * @returns The element with the text "Authorized Enpoint"
     */
    public static getAuthorizedEndPoint(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_AUTHORIZED_ENPOINT);
    }

    /**
     * This function returns the token endpoint textbox element
     * @returns The Cypress.Chainable<JQuery<HTMLElement>> is being returned.
     */
    public static getTokenEndPoint(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_TOKE_ENDPOINT);
    }

    /**
     * This function returns the JWKS URL textbox element
     * @returns The JWKS URL
     */
    public static getJWKSEndPointInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_JWKS_URL);
    }

    /**
     * This function returns the element that is used to remove an identity provider from the list of
     * identity providers
     * @returns The element with the text "Remove IdP"
     */
    public static getRemoveIdpInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_REMOVE_IDP);
    }

    /**
     * This function returns the remove identity provider button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getRemoveIdpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_REMOVE_IDP);
    }

    /**
    * This function returns the element that is the enterprise IDP selection card.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getEIdpOIDCProtocolSelectionCard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TILE_OIDC_PROTOCOL);
    }

    /**
    * It returns a Cypress Chainable object that represents the next button on the Enterprise IDP
    * Wizard
    * @returns A chainable command that will return a JQuery object of the element with the id of
    * BTN_NEXT_ENTERPRISE_IDP_WIZARD
    */
    public static getEnterpriseIdpWizardNextBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEXT_ENTERPRISE_IDP_WIZARD);
    }

    /**
     * This function returns the title of the Enterprise IDP tile
     * @returns The element with the id of tile-enterprise-idp
     */
    public static getEnterpriseIdpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ENTERPRISE_IDP);
    }

    /**
     * This function returns the Google IDP tile element
     * @returns The element with the id of tile-google-idp
     */
    public static getGoogleIdpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_GOOGLE_IDP);
    }

    /**
     * This function returns the title of the Github Identity Provider tile
     * @returns The element with the id of "tile-github-idp"
     */
    public static getGithubIdpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_GITHUB_IDP);
    }

    /**
     * This function returns the title of the Facebook IDP
     * @returns The title of the Facebook IDP
     */
    public static getFacebookIdpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FACEBOOK_IDP);
    }

    /**
     * This function returns the title of the OIDC protocol tile
     * @returns The element with the id of "tile-oidc-protocol"
     */
    public static getOIDCTitleProtocol(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TILE_OIDC_PROTOCOL);
    }

    /**
     * It returns a Cypress Chainable object that represents the next button on the Enterprise IDP
     * Wizard
     * @returns A chainable command that will return a JQuery object of the element with the id of
     * BTN_NEXT_ENTERPRISE_IDP_WIZARD
     */
    public static getNextBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEXT_ENTERPRISE_IDP_WIZARD);
    }

    /**
     * This function returns a Cypress chainable object that represents the success alert element
     * @returns A JQuery object
     */
    public static getSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_SUCCESS);
    }

    /**
     * This function returns the remove button in the modal window
     * @returns The remove button in the modal.
     */
    public static getRemoveBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(IDP_REMOVE_MODAL);
    }

    /**
     * It returns the remove checkbox element.
     * @returns The remove checkbox element.
     */
    public static getRemoveCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(IDP_REMOVE_CHECKBOX);
    }

    /**
     * This function returns the element that is used to input the service provider entity id
     * @returns The element with the id of "serviceProviderEntityId"
     */
    public static getServiceProvideInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_SERVICE_PROVIDER_ENTITY_ID);
    }

    /**
     * This function returns the Single Sign On URL input field
     * @returns The element with the id of "singleSignOnUrl"
     */
    public static getSingleSignOnInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_SINGLE_SIGN_ON_URL);
    }

    /**
     * This function returns the element that contains the Identity Provider Entity ID
     * @returns The element with the id of "identity-provider-entity-id"
     */
    public static getIdentityProvideEntityId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_IDENTITY_PROVIDER_ENTITY_ID);
    }

    /**
     * This function returns the title of the SAML Protocol tile
     * @returns The element with the id of "tile-saml-protocol"
     */
    public static getSAMLProtocolTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TILE_SAML_PROTOCOL);
    }

    /**
     * This function returns the email OTP link element
     * @returns The element with the id of "email-otp-link"
     */
    public static getEmailOTPLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_EMAIL_OTP_LINK);
    }

    /**
     * This function returns the connection button element
     * @returns The connection button
     */
    public static getConnectionBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONNECTION);
    }

    /**
     * This function returns a Cypress chainable object that represents the Biometric link on the
     * Security Key page
     * @returns A chainable command that returns a JQuery object of the element.
     */
    public static getBiometricLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_SECURITYKEY_BIOMETRIC);
    }

    /**
     * This function clicks on the link that says "Manual Configuration" on the page
     * @returns A chainable command that will click on the link with the text "Manual Config"
     */
    public static getManualConfigLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(MANUAL_CONFIG_LINK).click();
    }

    /**
     * To get page title.
     * @return {Cypress.Chainable<HTMLElement>}
     */
    public static getConnectionsPageTextHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_HEADER);
    }

    /**
     * This function returns the element that contains the success message that is displayed when a new
     * EIDP is created.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEIdpCreationSuccessfulMessage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CREATE_EIDP_SUCCESSFULL_NOTIFICATION);
    }

    /**
     * This function returns the given identity provider link element
     * @returns The element with the id of he given identity provider
     */
    public static getIdPEdit(idpName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_IDP_EDIT_LINK.replace("<idpName>", idpName));
    }

    /**
     * SAML connection manual config switch element value
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSamlManualConfig(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SAML_MANUAL_CONFIG);
    }

    /**
     * This function returns the Microsoft IDP tile element
     * @returns The element with the id of idp-templates-microsoft
     */
    public static getMicrosoftIdpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_MS_IDP);
    }

    /**
     * This function returns the Microsoft IDP name element
     * @returns The element with the id of microsoft-idp-create-wizard-page-idp-name
     */
    public static getMicrosoftIdpName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_MS_IDP_NAME);
    }

    /**
     * This function returns the Microsoft IDP clientID element
     * @returns The element with the id of microsoft-idp-create-wizard-page-idp-client-id
     */
    public static getMicrosoftIdpClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_MS_IDP_CLIENT_ID);
    }

    /**
     * This function returns the Microsoft IDP client secret element
     * @returns The element with the id of microsoft-idp-create-wizard-page-idp-client-secret
     */
    public static getMicrosoftIdpClientSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_MS_IDP_SECRET);
    }

    public static getIdpFilterInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(TXT_IDP_FILTER);
    }

    /**
     * This function returns the IDP grid view element
     * @returns the element with ID resource-grid in Connections page
     */
    public static getIdpGridView(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CONTAINER_IDP_GRID);
    }

    /**
    * This function returns the Apple IDP tile element.
    * @returns The element with the id of apple.
    */
    public static getAppleIdpTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APPLE_IDP);
    }

    /**
     * This function returns the Ethereum Idp Name input element.
     * @returns The element with the idp name textbox
     */
    public static getAppleIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APPLE_IDP_NAME);
    }

    /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element with
     * the ID TXT_APPLE_SERVICE_ID.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getAppleServiceId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APPLE_SERVICE_ID);
    }

    /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element with
     * the ID TXT_APPLE_TEAM_ID.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getAppleTeamID(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APPLE_TEAM_ID);
    }

    /**
     * The function `getAppleKeyID` returns a Cypress.Chainable object containing the JQuery
     * representation of the element with the selector `TXT_APPLE_KEY_ID`.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getAppleKeyID(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APPLE_KEY_ID);
    }

    /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element with
     * the Apple private ID.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getApplePrivateID(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APPLE_PRIVATE_ID);
    }

    /**
    * This function returns the Ethereum IDP tile element
    * @returns The element with the id of ethereum.
    */
    public static getEtheruemIdpTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ETHEREUM_IDP);
    }

    /**
     * This function returns the Ethereum Idp Name input element
     * @returns The element with the idp name textbox
     */
    public static getEthereumIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_ETHEREUM_IDP_NAME);
    }


    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the Ethereum
     * client ID element on the page.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getEthereumClientId(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_ETHERUEM_CLIENT_ID);
    }

    /**
     * The function `getEthereumClientSecret` returns a Cypress.Chainable object containing the element
     * with the selector `TXT_ETHERUEM_CLIENT_SECRET`.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */

    public static getEthereumClientSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_ETHERUEM_CLIENT_SECRET);
    }


    /* The above code is defining a static method called `getHYPRIdpTitle` that returns a
    `Cypress.Chainable<JQuery<HTMLElement>>` object. */
    public static getHYPRIdpTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_HYPR_IDP);
    }


    /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element
     * with the ID TXT_HYPR_APP_ID.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getHYPRAppID(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_HYPR_APP_ID);
    }

    /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement>
     * element with the TXT_HYPR_BASE_URL identifier.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getHYPRBaseUrl(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_HYPR_BASE_URL);
    }

    /**
     * The function `getHYPRToken` returns a Cypress.Chainable object containing the JQuery
     * representation of the element with the ID `TXT_HYPR_IDP_TOKEN`.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */

    public static getHYPRToken(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_HYPR_IDP_TOKEN).parent("div").parent("div");
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the input field
     * for the HYPR IDP name.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getHYPRIdpNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_HYPR_IDP_NAME);
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the "Finish"
     * button in a connection.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getConnectionFinishBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONNECTION_FINISH);
    }

    /**
     * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing the "Finish"
     * button for an Apple connection.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getAppleConnectionFinishBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APPLE_CONNECTION_FINISH);
    }
    /**
     * This function returns the IDP grid view element of the trusted token issuer.
     * @returns the element with ID for the trusted token isser grid view.
     */
    public static getTrustedTokenIssuerGrid(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_TRUSTED_TOKEN_ISSUER);
    }

    /**
     * This function returns the name field of the trusted token issuer.
     * @returns the element with ID for the trusted token isser name field.
     */
    public static getTrustedTokenIssuerNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(TXT_TRUSTED_TOKEN_ISSUER_NAME);
    }

    /**
     * This function returns the issuer field of the trusted token issuer.
     * @returns the element with ID for the trusted token isser issuer field.
     */
    public static getTrustedTokenIssuerIssuerInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(TXT_TRUSTED_TOKEN_ISSUER_ISSUER);
    }
    
    /**
     * This function returns the alias field of the trusted token issuer.
     * @returns the element with ID for the trusted token isser alias field.
     */
    public static getTrustedTokenIssuerAliasInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(TXT_TRUSTED_TOKEN_ISSUER_ALIAS);
    }

    /**
     * This function returns the next button of the trusted token issuer creation wizard.
     * @returns the element with ID for the trusted token isser next button.
     */
    public static getTrustedTokenIssuerNextBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_NEXT_TRUSTED_TOKEN_ISSUER_WIZARD);
    }

    /**
     * This function returns the submit button of the trusted token issuer creation wizard.
     * @returns the element with ID for the trusted token isser submit button.
     */
    public static getTrustedTokenIssuerSubmitBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_SUBMIT_TRUSTED_TOKEN_ISSUER_WIZARD);
    }

    /**
     * This function returns the JWKS URL field of the trusted token issuer.
     * @returns the element with ID for the trusted token isser JWKS URL field.
     */
    public static getTrustedTokenIssuerJwksUrlInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(TXT_TRUSTED_TOKEN_ISSUER_JWKS_URL);
    }

    /* The above code is defining a static method called `getDuoIdpCreateBtn` that returns a
    `Cypress.Chainable<JQuery<HTMLElement>>` object. */
    public static getDuoIdpCreateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DUO_CREATE_IDP);
    }

    /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element
     * with the ID TXT_DUO_IDP_NAME.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getDuoIDPNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_DUO_IDP_NAME);
    }

    /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element
     * with the ID TXT_DUO_CLIENT_ID.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
    public static getDuoClientID(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_DUO_CLIENT_ID);
    }

     /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element
     * with the ID TXT_DUO_CLIENT_SECRET.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
     public static getDuoClientSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_DUO_CLIENT_SECRET);
    }

     /**
     * The function returns a Cypress.Chainable object containing the JQuery<HTMLElement> element
     * with the ID TXT_DUO_API_HOSTNAME.
     * @returns a Cypress.Chainable<JQuery<HTMLElement>> object.
     */
     public static getDuoAPIHostName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_DUO_API_HOSTNAME);
    }
}

