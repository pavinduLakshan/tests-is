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

/// <reference types="Cypress" />

import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core";

//LOCATORS OIDC APPLICATION
const LNK_OIDC_PROTOCOL = "[data-testid=minimal-application-create-wizard-b9c5e11e-fc78-484b-9bec-015d247561b8-card"
    + "-header]",
    TXT_APP_NAME = "[data-testid=minimal-application-create-wizard-application-name-input] > input",
    TXT_OIDC_REDIRECT_URL = "[data-testid=minimal-application-create-wizard-oauth-protocol-settings-form-callback-url-"
        + "input]",
    TXT_ADD_ALLOWED_ORIGIN_URL_PROTOCOL_TAB = "[data-testid=application-edit-access-settings-inbound-oidc-form-allowed-"
        + "origin-url-input]",
    BTN_OIDC_ADD_REDIRECT_URL = "[data-testid=minimal-application-create-wizard-oauth-protocol-settings-form-callback-"
        + "url-input-add-button]",
    BTN_ADD_ALLOWED_ORIGIN_URL_PROTOCOL_TAB = "[data-testid=application-edit-access-settings-inbound-oidc-form-allowed-"
        + "origin-url-input-add-button]",
    BTN_ADD_SAMPLE_REDIRECT_URL =
        "[data-testid=minimal-application-create-wizard-oauth-protocol-settings-form-add-now-button]",
    BTN_APP_REGISTER = "[data-testid=minimal-application-create-wizard-next-button]",
    TXT_ADD_REDIRECT_URL_PROTOCOL_TAB =
        "[data-testid=application-edit-access-settings-inbound-oidc-form-callback-url-input]",
    BTN_ADD_REDIRECT_URL_PROTOCOL_TAB = "[data-testid=application-edit-access-settings-inbound-oidc-form-callback-url-"
        + "input-add-button]",
    BTN_UPDATE_PROTOCOL_CONFIG = "[data-testid=application-edit-access-settings-inbound-oidc-form-submit-button]";
+ "url-input-add-button]";
const CERT_UPLOAD_TEXTAREA = "[data-testid=\"add-certificate-form-upload-certificate-content-textarea\"]";
const CERT_FINISH_BTN = "[data-testid=\"application-certificate-list-add-certificate-wizard-finish-button\"]";
const ENABLE_ENCRYPTION_CHECK = "[data-testid=\"application-edit-access-" 
+ "settings-inbound-oidc-form-encryption-checkbox\"]";
const SELECT_ALOGORITHM = "[data-testid=\"application-edit-access-settings-" 
+ "inbound-oidc-form-encryption-algorithm-dropdown\"]";
const SELECT_ENCRYPTION_METHOD = "[data-testid=\"application-edit-access-settings-" 
+ "inbound-oidc-form-encryption-method-dropdown\"]";
const RESOURCE_LIST = "[data-testid=\"resource-list\"]";

//LOCATORS SAML
const LNK_SAML_PROTOCOL = "[data-testid=\"minimal-application-create-wizard-"
    + "776a73da-fd8e-490b-84ff-93009f8ede85-card-header\"]",
    TXT_SAML_APP_NAME = "[data-testid=\"minimal-application-"
        + "create-wizard-application-name-input\"]",
    TXT_SAML_WEB_APP_ISSUER = "[data-testid=\"minimal-application-create-wizard-"
        + "saml-protocol-settings-form-issuer-input\"]",
    TXT_SAML_WEB_APP_ACURLS = "[data-testid=\"minimal-application-create-wizard-"
        + "saml-protocol-settings-form-assertion-consumer-url-input\"]",
    BTN_SAML_ACURL_ADD = "[data-testid=\"minimal-application-create-wizard-"
        + "saml-protocol-settings-form-assertion-consumer-url-input-add-button\"]",
    LBL_ACURL = "[data-testid=\"minimal-application-create-wizard-saml-protocol-settings-form-"
        + "assertion-consumer-url-input-";

// LOCATORS SAML APPLICATION
const CHECKBOX_REQUEST_SIGNATURE_VALIDATION = "[data-testid=\"application-edit-access-settings-inbound-saml-" +
    "form-request-signature-validation-checkbox\"]",
    CHECKBOX_RESPONSE_SIGNING = "[data-testid=\"application-edit-access-settings-inbound-saml-form-response-" +
        "signing-checkbox\"]",
    DROPDOWN_DIGEST_ALGORITHM = "[data-testid=\"application-edit-access-settings-inbound-saml-form-digest-" +
        "algorithm-dropdown\"]",
    DROPDOWN_SIGNING_ALGORITHM = "[data-testid=\"application-edit-access-settings-inbound-saml-form-signing-" +
        "algorithm-dropdown\"]",
    SERVICE_PROVIDER_CERTIFICATE_TXT_AREA = "[data-testid=\"add-certificate-form-upload-certificate-" +
        "content-textarea\"]",
    BTN_SUBMIT_PROTOCOL_PAGE = "[data-testid=\"application-edit-access-settings-inbound-saml-form-submit-button\"]",
    CERTIFICATE_TYPE_PROVIDE_CERTIFICATE = "[data-testid=\"application-certificate-wrapper-"
        + "certificate-type-radio-group\"]",
    BTN_NEW_CERTIFICATE = "[data-testid=application-certificate-list-emptyPlaceholder-add-certificate-button]",
    ADD_NEW_CERTIFICATE_WIZARD = "[data-testid=add-certificate-form-upload-certificate-upload-tab]",
    ADD_CERTIFICATE_WIZARD_FINISH_BUTTON = "[data-testid=application-certificate-list-add-certificate-wizard-" +
        "finish-button]",
    BTN_SAML_CONFIG = "button[class=\"ui button saml-config-mode-wizard-tab\"]",
    BTN_LABELED_OPTIONS = "div[class=\"ui large basic labeled buttons\"]",
    INPUT_FILE = "input[type=\"file\"]",
    ATTRIBUTE_PROFILE_CHECKBOX = "[data-testid=application-edit-access-settings-inbound-saml-form-" +
        "attribute-profile-checkbox]",
    CHK_BOX_TYPE = "input[name=\"attributeProfile\"][type=\"checkbox\"]";

//LOCATORS SINGLE PAGE APPLICATION
const TXT_SINGLE_APP_REDIRECT_URL = "[data-testid=minimal-application-create-wizard-oauth-protocol-settings-form-"
    + "callback-url-input]",
    BTN_SINGLE_APP_ADD_REDIRECT_URL = "[data-testid=minimal-application-create-wizard-oauth-protocol-settings-form-"
        + "callback-url-input-add-button]";

//COMMON LOCATORS
const NEW_APPLICATION_BUTTON = "[data-componentid=\"primary-button\"]",
    WEB_APPLICATION_QUICK_START = "[data-componentid=\"application-template-card-traditional-web-application\"]",
    SINGLE_PAGE_APPLICATION_QUICK_START = "[data-componentid=\"application-template-card-single-page-application\"]",
    ADD_CUSTOM_APPLICATION = "[data-componentid=\"application-template-card-custom-application\"]",
    MOBILE_APPLICATION_BUTTON_LABEL = "[data-componentid=\"application-template-card-mobile-application\"]",
    INVALID_URL_MESSAGE = "[data-componentid=url-input-valid-url-error-message]",
    BTN_SSO_APP_REGISTER = "[data-componentid=application-create-wizard-create-button]",
    DROPDOWN_LIST_MENU_CLASS = ".dynamic-template-selection-field-dropdown";


export class ApplicationCreatePage {

    /**
     * Get the OIDC Link
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getOIDCLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_OIDC_PROTOCOL);
    }

    /**
     * Get the OIDC App Name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAppName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_APP_NAME);
    }

    /**
     * Get the OIDC Redirect Url Text
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getOIDCRedirecURLLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_OIDC_REDIRECT_URL);
    }

    /**
     * Get the OIDC Allowed Origin Tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getOIDCAllowedOriginTab(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_ADD_ALLOWED_ORIGIN_URL_PROTOCOL_TAB);
    }

    /**
     * Get the OIDC Redirect Url Button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getOIDCRedirecURLBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_OIDC_ADD_REDIRECT_URL);
    }

    /**
     * Get the OIDC Allowed Origin Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getOIDCAllowedOriginBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ALLOWED_ORIGIN_URL_PROTOCOL_TAB);
    }

    /**
     * Get the Sample App Redirect URL Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSampleRedirectBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_SAMPLE_REDIRECT_URL);
    }

    /**
     * Get the Application Register Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getApplicationRegisterBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_APP_REGISTER);
    }

    /**
     * Get the Google Workspace Register Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getSsoTemplateRegisterBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SSO_APP_REGISTER);
    }

    /**
     * Get the Application Protocol Tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddProtocolTabTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_ADD_REDIRECT_URL_PROTOCOL_TAB);
    }

    /**
     * Get the Application Protocol Tab Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddProtocolTabBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_REDIRECT_URL_PROTOCOL_TAB);
    }

    /**
     * Get the Application Redirect Url Protocol Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddRedirectUrlProtocolBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_REDIRECT_URL_PROTOCOL_TAB);
    }

    /**
     * Get the Update Protocol Tab Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpdateProtocolBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_PROTOCOL_CONFIG);
    }

    /**
     * Get the SANL Protocol Link
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSAMLProtocolLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_SAML_PROTOCOL);
    }

    /**
     * Get the SAML Application Name Text
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSAMLAppName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_SAML_APP_NAME);
    }

    /**
     * Get the SAML Web App Issuer Text
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSAMLWebAppIssuer(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_SAML_WEB_APP_ISSUER);
    }

    /**
     * Get the SAML Access URL Text
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSAMLWebAccessURLs(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_SAML_WEB_APP_ACURLS);
    }

    /**
     * Get the SAML Access URL Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSAMLAccessURLBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SAML_ACURL_ADD);
    }

    /**
     * Get the SAML Access URL Label
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAccessURLLabel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_ACURL);
    }

    /**
     * Get the SAML Request Signature Checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRequestSignatureCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_REQUEST_SIGNATURE_VALIDATION);
    }

    /**
     * Get the SAML Response Sign In Checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getResponseSigningCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_RESPONSE_SIGNING);
    }

    /**
     * Get the SAML Digest Algorithm Drop Down
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDigestAlgorithmDropDown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_DIGEST_ALGORITHM);
    }

    /**
     * Get the SAML Signing Algorithm Drop Down
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSigningAlgorithmDropDown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_SIGNING_ALGORITHM);
    }

    /**
     * Get the SAML Service Provider Certificate Text
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getServiceProviderCertificateTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SERVICE_PROVIDER_CERTIFICATE_TXT_AREA);
    }

    /**
     * Get the SAML Submit Protocol Btns
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSAMLSubmitProtocolBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUBMIT_PROTOCOL_PAGE);
    }

    /**
     * Get the SAML Certificate Type
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCertificateType(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CERTIFICATE_TYPE_PROVIDE_CERTIFICATE);
    }

    /**
     * Get the Add New Certificate Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddNewCertificate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEW_CERTIFICATE);
    }

    /**
     * Get the Add New Certificate Wizard
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddNewCertificateWizard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_NEW_CERTIFICATE_WIZARD);
    }

    /**
     * Get the Submit New Certificate Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnFinishAddCertificate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_CERTIFICATE_WIZARD_FINISH_BUTTON);
    }

    /**
     * Get the Single Page App Redirect URL Text
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSinglePageAppRedirectUrlTxt(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_SINGLE_APP_REDIRECT_URL);
    }

    /**
     * Get the Single Page App Redirect URL Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSinglePageAppRedirectUrlBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SINGLE_APP_ADD_REDIRECT_URL);
    }

    /**
     * Get the New Application button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewApplicationBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NEW_APPLICATION_BUTTON);
    }

    /**
     * Get the Web application Quick Start Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getWebApplicationQuickStartBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(WEB_APPLICATION_QUICK_START);
    }

    /**
     * Get the Single Page App Quick Start Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSinglePageApplicationQuickStartBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SINGLE_PAGE_APPLICATION_QUICK_START);
    }

    /**
     * Get the Custom Application Add Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddCustomApplicationBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_CUSTOM_APPLICATION);
    }

    /**
     * Get the Mobile Application Add Btn
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddMobileApplicationBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MOBILE_APPLICATION_BUTTON_LABEL);
    }

    /**
     * Get the SSO Application Add Btn.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSSOApplicationBtn(ssoAppType: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="application-template-card-${ssoAppType}"`);
    }

    /**
     * Get the Mobile Application Invalid URL Message
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMobileApplicationInvalidUrlMessage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INVALID_URL_MESSAGE);
    }

    /**
     * This function returns the SAML Configurations tab
     * @returns The SAML Configs tab
     */
    public static getSAMLConfigsTab(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SAML_CONFIG);
    }

    /**
     * This function returns SAML Configurations options
     * @returns A JQuery object of the element with the class name "btn-labeled-options"
     */
    public static getConfigsOptions(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_LABELED_OPTIONS);
    }

    /**
     * It returns a Cypress chainable object that represents the file input element
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getFileInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_FILE);
    }

    /**
     * It returns the cypress chainable object.
     * @returns The element with the id of Attribute_Profile_CHECKBOX
     */
    public static getAttributeProfile(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_PROFILE_CHECKBOX);
    }

    /**
     * This function returns the checkbox element for the Grant Type
     * @returns The element that matches the selector.
     */
    public static CheckbokGrantType(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHK_BOX_TYPE);
    }

    /**
     * Get certificate upload textarea
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCertificateUploadTextarea(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CERT_UPLOAD_TEXTAREA);
    }

    /**
     * Get certificate upload finish button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCertificateUploadFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CERT_FINISH_BTN);
    }

    /**
     * Get enable encryption checklist
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEnableEncryptionCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ENABLE_ENCRYPTION_CHECK);
    }

    /**
     * select algorithm method
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEncryptionAlgorithmDropDown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_ALOGORITHM);
    }

    /**
     * select encryption method
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEncryptionMethodDropDown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_ENCRYPTION_METHOD);
    }

    /**
     * select resource list
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getResourceList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RESOURCE_LIST);
    }

    /**
     * Fill the text field value.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static fillTextFieldValue(componentId: string, value: string): void {

        cy.get(`[data-componentid=${componentId}]`).within(() => {
            cy.get(HTMLKeyWordsConstants.INPUT_FIELD).clear();
        });
        cy.get(`[data-componentid=${componentId}]`).type(value, { delay: 1000 });
    }

    /**
     * Select the dropdown value.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static selectDropdownValue(componentId: string, value: string): void {

        cy.get(`[data-componentid="${componentId}"]`).click();
        cy.get(DROPDOWN_LIST_MENU_CLASS).find("li").contains(value).click();
    }
}
