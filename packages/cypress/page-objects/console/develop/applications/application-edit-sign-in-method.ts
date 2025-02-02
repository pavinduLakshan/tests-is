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

// Locators - Application Edit Page - Sign-in Method Tab
const BTN_DEFAULT_LOGIN = "[data-componentid=\"basic-configuration-flow-card\"]";
const BTN_SOCIAL_LOGIN = "[data-componentid=\"google-login-flow-card\"]";
const BTN_BASIC_FLOW_CARD = "[data-componentid=\"basic-configuration-flow-card\"]";
const SIGNIN_METHOD_TOTP_MFA_FLOW_CARD = "[data-componentid=\"totp-mfa-flow-card\"]";
const EMAIL_OTP_CARD = "[data-componentid=email-otp-mfa-flow-card]";
const SIGNIN_METHOD_SMS_OTP_FLOW_CARD = "data-componentid=\"sms-otp-mfa-flow-card\"]";
const BTN_SECURITY_KEY_OR_BIOMETRICS_LOGIN = "[data-componentid=\"usernameless-flow-card\"]";
const BTN_MAGIC_LINK_LOGIN = "[data-componentid=\"magic-link-flow-card\"]";
const BTN_REVERT_TO_DEFAULT = "button[class=\"ui basic primary button link-button pr-0\"]";
const FILTER_SIGN_IN_OPTION =
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]" +
    "[data-componentid$=\"-option-name\"]";
const FILTER_BTN_CANCEL_SIGN_IN_OPTION =
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]" +
    "[data-componentid$=\"-close-button\"]";
const FILTER_SIGN_IN_STEP = 
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]";
const BTN_ADD_AUTHENTICATION_OPTION = "[data-tourid=\"add-authentication-options-button\"]";
const CHK_OPTIONS_SIGN_IN_STEP = "[class=\"ui checked checkbox\"]";
const UNCHECKED_CHECKBOX_CLASS = "[class=\"ui checkbox\"]";
const SIGN_IN_STEP_ID = "[data-componentid=\"application-edit-sign-on-methods-step-based-flow-authentication-step";
const FILTER_BTN_REMOVE_AUTHENTICATION_STEP =
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]" +
    "[data-componentid$=\"-delete-button\"]";
const BTN_ADD_AUTHENTICATION_STEP = "[data-tourid=\"add-new-step-button\"]";
const BTN_REMOVE_AUTHENTICATION_OPTION =
    "[data-componentid=\"application-edit-sign-on-methods-step-based-flow-authentication-step-0-close-button\"]";
const TOGGLE_CONDITIONAL_AUTHENTICATION = "[data-tourid=\"conditional-auth\"]";
// elements inside conditional auth editor
const BTN_GO_TO_API_DOCUMENTATION =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-code-editor-open-documentation\"]";
const BTN_SECRET_SELECTION =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-code-editor-secret-selection\"]";
const BTN_SECRET_DELETION =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-secret-delete\"]";
const CHECKBOX_SECRET_DELETION_CONFIRMATION =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-delete-confirmation-modal-assertion-checkbox\"]";
const BTN_SECRET_DELETION_CONFIRMATION =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-delete-confirmation-modal-confirm-button\"]";
const BTN_CODE_EDITOR_FULLSCREEN =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-code-editor-fullscreen-toggle\"]";
const BTN_CODE_EDITOR_LIGHT_MODE =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-code-editor-mode-toggle\"]";
const BTN_CODE_EDITOR_SIDEBAR =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-script-template-sidebar-toggle\"]";
const INPUT_SECRET_NAME = "[name=\"secret_name\"]";
const INPUT_SECRET_VALUE = "[name=\"secret_value\"]";
const INPUT_SECRET_DESCRIPTION = "[name=\"secret_description\"]";
const BTN_CANCEL_CREATE_SECRET = "[data-testid=\"add-secret-wizard-form-cancel-button\"]";
const BTN_CREATE_SECRET = "[data-testid=\"add-secret-wizard-form-submit-button\"]";
const SELECT_ACCESS_CONTROL_TEMPLATES =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-script-templates-side-panel-accordion" +
    "-title-0\"]";
const SELECT_ADAPTIVE_MFA_TEMPLATES =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-script-templates-side-panel-accordion" +
    "-title-1\"]";
const FILTER_ACCESS_CONTROL_TEMPLATE_OPTIONS =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-script-templates-side-panel-accordion" +
    "-content-0\"]";
const FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-script-templates-side-panel-accordion" +
    "-content-1\"]";
const BTN_INFO_GROUP_BASED_TEMPLATE = "[data-componentid=\"Group-Based-info\"]";
const BTN_ADD_GROUP_BASED_TEMPLATE = "[data-componentid=\"Group-Based-add\"]";
const BTN_INFO_USER_AGE_BASED_TEMPLATE = "[data-componentid=\"User-Age-Based-info\"]";
const BTN_ADD_USER_AGE_BASED_TEMPLATE = "[data-componentid=\"User-Age-Based-add\"]";
const BTN_INFO_NEW_DEVICE_BASED_TEMPLATE = "[data-componentid=\"New-Device-Based-info\"]";
const BTN_ADD_NEW_DEVICE_BASED_TEMPLATE = "[data-componentid=\"New-Device-Based-add\"]";
const BTN_INFO_SIGN_IN_OPTION_BASED_TEMPLATE = "[data-componentid=\"Sign-In-Option-Based-info\"]";
const BTN_ADD_SIGN_IN_OPTION_BASED_TEMPLATE = "[data-componentid=\"Sign-In-Option-Based-add\"]";
const BTN_INFO_IP_BASED_TEMPLATE = "[data-componentid=\"IP-Based-info\"]";
const BTN_ADD_IP_BASED_TEMPLATE = "[data-componentid=\"IP-Based-add\"]";
const BTN_CANCEL_ADD_SCRIPT_TEMPLATE =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-adaptive-script-template-change" +
    "-confirmation-modal-cancel-button\"]";
const BTN_CONFIRM_ADD_SCRIPT_TEMPLATE =
    "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-adaptive-script-template-change" +
    "-confirmation-modal-confirm-button\"]";
const BTN_UPDATE_SIGN_IN_METHOD_SETTINGS = "[data-componentid=\"application-edit-sign-on-methods-update-button\"]";
const BTN_CREATE_NEW_SECRET = "[data-componentid=\"application-edit-sign-on-methods-script-based-flow-create-new-secret-button\"]";
const BTN_AUTHENTICATION_CLOSE = "div[class=\"theme-icon hover-rounded nano transparent\"]";
const AUTHENTICATION_TILE = "[data-testid=\"add-authenticator-modal-authenticators-authenticator-";
const ADD_AUTHENTICATOR_NEXT_BUTTON = "[data-testid=\"add-authenticator-modal-next-button\"]";
const ENTERPRISE_AUTHENTICATOR_FLOW_CARD = "[data-componentid=\"application-edit-sign-on-methods-step-based-flow-" +
    "authentication-step-0-option\"]";
const REVERT_TO_DEFAULT = "[class=\"ui basic primary button link-button pr-0\"]";
const SIGNON_METHOD_UPDATE_SUCCESSFUL_NOTIFICATION = "div.notification.notification-success.notification-visible";
const SIGNON_METHOD_CONDITIONAL_AUTH_CODEBLOCK = ".CodeMirror-code";
const SIGN_IN_METHODS_LANDING_DIV_ATTR = "[data-componentid=\"application-edit-sign-on-methods-landing\"]";
const UNCHECKED_TOGGLE_CLASS = "div[class=\"ui fitted toggle checkbox conditional-auth-accordion-toggle\"]";
const ALERT_SUCCESS_MESSAGE = "[data-testid=alert-success-message]";
const BTN_REMOVE_AUTHENTICATOR = "[data-componentid=\"application-edit-sign-on-methods-step-based-flow-authentication" +
    "-step-1-close-button\"]";
const GET_VISUAL_EDITOR_TAB_SWITCH: string = "[data-componentid=\"authentication-flow-builder-{{index}}-tab\"]";
const EDITOR_MODE_TAB_SWITCH_CONFIRMATION_MODAL_CHECKBOX: string = "[data-componentid=\"authentication-flow-mode-" +
    "switch-disclaimer-modal-assertion-checkbox\"]";
const EDITOR_MODE_TAB_SWITCH_CONFIRMATION_MODAL_SUBMIT_BTN: string = "[data-componentid=\"authentication-flow-mode-" +
    "switch-disclaimer-modal-confirm-button\"]";
const EDITOR_MODE_TAB_SWITCH_LOADER: string = "[data-componentid=\"content-loader\"]";
const VISUAL_EDITOR_STEP: string = "[data-componentid=\"sign-in-box-node-step-{{id}}\"]";
const VISUAL_EDITOR_STEP_FRAGMENT: string = "[data-componentid=\"{{authenticator}}-fragment\"]";
const AUTHENTICATION_STEP_ONE_HEADER = "[data-componentid=\"application-edit-sign-on-methods-step-based-flow-authentication-step-1\"]";
const SUBJECT_STEP_CHECKBOX_IN_STEP = 
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]" +
    "[data-componentid$=\"-subject-step-checkbox\"]";
const SUBJECT_STEP_CHECKBOX_TOOLTIP = 
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]" +
    "[data-componentid$=\"-subject-step-tooltip\"]";
const ATTRIBUTE_STEP_CHECKBOX_IN_STEP = 
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]" +
    "[data-componentid$=\"-attribute-step-checkbox\"]";
const ATTRIBUTE_STEP_CHECKBOX_TOOLTIP = 
    "[data-componentid^=\"application-edit-sign-on-methods-step-based-flow-authentication-step-\"]" +
    "[data-componentid$=\"-attribute-step-tooltip\"]";
const BTN_ACTIVE_SESSIONS_LIMIT_CARD = 
    "[data-testid=\"add-authenticator-modal-authenticators-authenticator-SessionExecutor\"]" + 
    "[data-componentid=\"info-card\"]";
const BTN_CONFIRM_ADD_HANDLER = 
    "[data-componentid=\"application-edit-sign-on-methods-step-based-flow-handler-disclaimer-modal-confirm-button\"]" + 
    "[data-testid=\"confirmation-modal-confirm-button\"]";

/**
 * Class containing Asgardeo Console Application Edit Page - Sign-in Method Tab Page Objects
 * Console -> Develop -> Applications -> <application> -> Sign-in Method Tab
 */
export class ApplicationSignInMethodPage {

    /**
     * Get the button to add default login
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDefaultLogin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DEFAULT_LOGIN).find("div[class=\"content\"]");

    }

    /**
     * Get the button to add social login
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSocialLogin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SOCIAL_LOGIN).find("div[class=\"content\"]");

    }

    /**
     * Get the button to add multi factor login
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSignInMethodTOTPFlowCard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNIN_METHOD_TOTP_MFA_FLOW_CARD).find("div[class=\"content\"]");

    }
    /**
     * Get the button to add security key/biometrics login
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSecurityKeyOrBiometricsLogin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SECURITY_KEY_OR_BIOMETRICS_LOGIN).find("div[class=\"content\"]");

    }

    /**
     * Get the button to add magic link login
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnMagicLinkLogin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_MAGIC_LINK_LOGIN).find("div[class=\"content\"]");

    }

    /**
     * Get the revert to default button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnRevertToDefault(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_REVERT_TO_DEFAULT);

    }

    /**
     * Get the sign in option of a step by name
     * @param {number} step - sign in step
     * @param {string} option - sign in option 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCardSignInOptionOfStep(step: number, option: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_SIGN_IN_OPTION + `[data_testid*="${step}"]`).contains("span", option).parent();

    }

    /**
     * Get the cancel button of sign in option of a step by name
     * @param {number} step - sign in step
     * @param {string} option - sign in option 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCancelSignInOptionOfStep(step: number, option: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_SIGN_IN_OPTION + `[data_testid*="${step}"]`).contains("span", option).siblings()
            .find(FILTER_BTN_CANCEL_SIGN_IN_OPTION + `[data_testid*="${step}"]`);

    }

    /**
     * Get the add authentication option to a step button 
     * @param {number} step - sign in step
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddNewAuthenticationStep(step: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_AUTHENTICATION_OPTION).eq(step);

    }

    /**
     * Get the checkbox corresponding to the checkbox name of a step
     * @param {number} step - sign in step
     * @param {string} checkboxName - checkbox name 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getChkOptionOfStep(step: number, checkboxName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_SIGN_IN_STEP + `[data_testid*="${step}"]`).find(CHK_OPTIONS_SIGN_IN_STEP)
            .contains("div", checkboxName).find("input");

    }
    
    /**
     * Get the unchecked checkbox wrapper corresponding to the checkbox name of a step
     * @param {number} step - sign in step
     * @param {string} checkboxName - checkbox name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUncheckedCheckboxWrapper(
        step: number,
        checkboxName: string
    ): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy
            .get(SIGN_IN_STEP_ID + `-${step}"]`)
            .find(UNCHECKED_CHECKBOX_CLASS)
            .contains(HTMLKeyWordsConstants.HTML_DIV, checkboxName);
    }

    /**
     * Get the remove authentication step button 
     * @param {number} step - sign in step
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnRemoveAuthenticationStep(step: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_BTN_REMOVE_AUTHENTICATION_STEP + `[data_testid*="${step}"]`);

    }

    /**
     * Get the add authentication step button 
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewAuthenticationStepAddBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_AUTHENTICATION_STEP);

    }

    /**
     * Get default authenticator remove button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDefaultAuthenticatorRemoveBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_REMOVE_AUTHENTICATION_OPTION);

    }

    /**
     * Get the toggle for conditional authtentication
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getToggleConditionalAuthentication(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOGGLE_CONDITIONAL_AUTHENTICATION);

    }

    /**
     * Get the go to API documentation button in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnGoToApiDocumentation(): Cypress.Chainable<JQuery<HTMLElement>> {


        return cy.get(BTN_GO_TO_API_DOCUMENTATION);
    }

    /**
     * Get the secret selection button in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSecretSelection(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SECRET_SELECTION);

    }

    /**
     * Get the secret deletion button in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSecretDeletion(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SECRET_DELETION);
    }

    /**
     * Get the secret deletion confirmation checkbox in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCheckBoxSecretDeletionConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_SECRET_DELETION_CONFIRMATION);

    }

    /**
     * Get the secret deletion confirmation button in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSecretDeletionConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SECRET_DELETION_CONFIRMATION);

    }

    /**
     * Get the fullscreen toggle button in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCodeEditorFullscreen(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CODE_EDITOR_FULLSCREEN);

    }

    /**
     * Get the light mode toggle button in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCodeEditorLightMode(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CODE_EDITOR_LIGHT_MODE);

    }

    /**
     * Get the sidebar toggle (hamburger menu) button in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCodeEditorSidebar(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CODE_EDITOR_SIDEBAR);

    }

    /**
     * Get the input field for secret name in create secret modal
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputSecretName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_SECRET_NAME);

    }

    /**
     * Get the text-area field for secret value in create secret modal
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputSecretValue(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_SECRET_VALUE);

    }

    /**
     * Get the text-area field for secret name in create secret modal
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputSecretDescription(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_SECRET_DESCRIPTION).find("input");

    }

    /**
     * Get the cancel create secret button in create secret modal
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCancelCreateSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CANCEL_CREATE_SECRET);

    }

    /**
     * Get the create secret button in create secret modal
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCreateSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CREATE_SECRET);

    }

    /**
     * Get the dropdown for access control templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelectAccessControlTemplates(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_ACCESS_CONTROL_TEMPLATES);

    }

    /**
     * Get the dropdown for adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSelectAdaptiveMfaTemplates(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELECT_ADAPTIVE_MFA_TEMPLATES);

    }

    /**
     * Get the info button for group based template in access control templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnInfoGroupBasedAccessControlTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ACCESS_CONTROL_TEMPLATE_OPTIONS).find(BTN_INFO_GROUP_BASED_TEMPLATE);

    }

    /**
     * Get the add button for group based template in access control templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddGroupBasedAccessControlTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ACCESS_CONTROL_TEMPLATE_OPTIONS).find(BTN_ADD_GROUP_BASED_TEMPLATE);

    }

    /**
     * Get the info button for user age based template in access control templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnInfoUserAgeBasedAccessControlTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ACCESS_CONTROL_TEMPLATE_OPTIONS).find(BTN_INFO_USER_AGE_BASED_TEMPLATE);

    }

    /**
     * Get the add button for user-age based template in access control templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddUserAgeBasedAccessControlTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ACCESS_CONTROL_TEMPLATE_OPTIONS).find(BTN_ADD_USER_AGE_BASED_TEMPLATE);

    }

    /**
     * Get the info button for group based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnInfoGroupBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_INFO_GROUP_BASED_TEMPLATE);

    }

    /**
     * Get the add button for group based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddGroupBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_ADD_GROUP_BASED_TEMPLATE);

    }

    /**
     * Get the info button for new device based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnInfoNewDeviceBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_INFO_NEW_DEVICE_BASED_TEMPLATE);

    }

    /**
     * Get the add button for new device based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddNewDeviceBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_ADD_NEW_DEVICE_BASED_TEMPLATE);

    }

    /**
     * Get the info button for sign in option based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnInfoSignInOptionBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_INFO_SIGN_IN_OPTION_BASED_TEMPLATE);

    }

    /**
     * Get the add button for sign in option based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddSignInOptionBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_ADD_SIGN_IN_OPTION_BASED_TEMPLATE);

    }

    /**
     * Get the info button for IP option based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnInfoIpBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_INFO_IP_BASED_TEMPLATE);

    }

    /**
     * Get the add button for IP option based template in adaptive MFA templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnAddIpBasedAdaptiveMfaTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(FILTER_ADAPTIVE_MFA_TEMPLATE_OPTIONS).find(BTN_ADD_IP_BASED_TEMPLATE);

    }

    /**
     * Get the cancel add script template button in templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCancelAddScriptTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CANCEL_ADD_SCRIPT_TEMPLATE);
    }

    /**
     * Get the confirm add script template button in templates in conditional auth editor
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnConfirmAddScriptTemplate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_ADD_SCRIPT_TEMPLATE);

    }

    /**
     * Get the update sign-in method settings button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnUpdateSignInMethodSettings(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_SIGN_IN_METHOD_SETTINGS);

    }

    /**
     * Get the create new secret button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCreateNewSecret(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CREATE_NEW_SECRET);

    }

    /**
     * Get remove authenticator button
     * @returns Cypress.Chainable<JQuery<HTMLElement>>
     */
    public static getAuthenticatorRemoveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_AUTHENTICATION_CLOSE);

    }

    /**
     * Get add authenticator button
     * @returns Cypress.Chainable<JQuery<HTMLElement>>
     */
    public static getAuthenticatorAddButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_AUTHENTICATION_OPTION);

    }

    /**
    * Select Authenticator to add
    */
    static getSelectAuthenticator(idpName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHENTICATION_TILE + idpName + "\"]", { timeout: 10000 });
    }

    /**
    * Get add authenticator next button.
    * @return {Cypress.Chainable<JQuery<Element>>}
    */
    static getAddAuthenticatorNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_AUTHENTICATOR_NEXT_BUTTON, { timeout: 10000 });
    }

    /**
    * Get the authenticator flow card
    */
    static getEnterpriseIdpAuthenticatorFlowCard(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(ENTERPRISE_AUTHENTICATOR_FLOW_CARD);

    }

    /**
     * Get revert to default button
     */
    static getRevertDefaultSettingsBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(REVERT_TO_DEFAULT);

    }

    /**
     * This function returns the Add New Authenticator button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getAddNewAuthenticatorBtn(stepIndex: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_AUTHENTICATION_OPTION).eq(stepIndex - 1);
    }

    /**
     * This function returns the element that contains the message that is displayed when a sign on
     * method is successfully updated.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSignOnMethodUpdateSuccessMessage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNON_METHOD_UPDATE_SUCCESSFUL_NOTIFICATION);
    }

    /**
     * It returns the textarea element for the conditional auth script.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getConditionalAuthCodeBlock(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNON_METHOD_CONDITIONAL_AUTH_CODEBLOCK);
    }

     /**
     * This returns the Sign in methods landing segment.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
      public static getSignInMethodLanding(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(SIGN_IN_METHODS_LANDING_DIV_ATTR);
    }

    /**
     * Get the button to add FIDO login
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnFIDOLogin(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SECURITY_KEY_OR_BIOMETRICS_LOGIN);
    }

    /**
     * This function returns the uncheck toggle button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUncheckToggleButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UNCHECKED_TOGGLE_CLASS);
    }

    /**
     * This function returns the update success alert message.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getUpdateSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_SUCCESS_MESSAGE);
    }

    /**
     * This function returns the Email OTP authenticator flow card.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getSignInMethodEmailOTPFlowCard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EMAIL_OTP_CARD);
    }

    /**
     * This function returns the Code Mirror for conditional authentication.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getCodeMirror(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HTMLKeyWordsConstants.HTML_CODE_MIRROR);
    }

    /**
     * This function returns the Code Mirror for conditional authentication.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getCodeMirrorTextArea(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HTMLKeyWordsConstants.HTML_CODE_MIRROR_TEXT_AREA);
     }

    /*
    * Get the authenticator remove button
    */
     static getRemoveAuthenticatorButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_REMOVE_AUTHENTICATOR);
    }

    /**
    * Get the button to add multi factor login option SMS OTP
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getSignInMethodSMSOTPFlowCard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SIGNIN_METHOD_SMS_OTP_FLOW_CARD);

    }

    /**
     * Get the Visual Editor tab switch.
     * @param {number} tabIndex - Tab index to switch to.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A chainable object of type JQuery<HTMLElement>.
     */
    public static getVisualEditorTabSwitch(tabIndex: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(GET_VISUAL_EDITOR_TAB_SWITCH.replace("{{index}}", tabIndex.toString()));
    }

    /**
     * Get the Editor Mode switch confirmation checkbox.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A chainable object of type JQuery<HTMLElement>.
     */
    public static getEditorModeSwitchConfirmationModalCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDITOR_MODE_TAB_SWITCH_CONFIRMATION_MODAL_CHECKBOX);
    }

    /**
     * Get the Editor Mode switch confirmation modal submit button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A chainable object of type JQuery<HTMLElement>.
     */
    public static getEditorModeSwitchConfirmationModalConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDITOR_MODE_TAB_SWITCH_CONFIRMATION_MODAL_SUBMIT_BTN);
    }

    /**
     * Get the Editor Mode switch content loader.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A chainable object of type JQuery<HTMLElement>.
     */
    public static getEditorModeSwitchContentLoader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDITOR_MODE_TAB_SWITCH_LOADER);
    }

    /**
     * Get a step from the Visual Editor.
     * @param {number} step - The step number.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A chainable object of type JQuery<HTMLElement>.
     */
    public static getVisualEditorStep(step: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(VISUAL_EDITOR_STEP.replace("{{id}}", (step - 1).toString()));
    }

    /**
     * Get a fragment from a step in the Visual Editor.
     * @param {string} authenticator - Requested authenticator.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A chainable object of type JQuery<HTMLElement>.
     */
    public static getVisualEditorFragmentFromStep(authenticator: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(VISUAL_EDITOR_STEP_FRAGMENT.replace("{{authenticator}}", authenticator));
    }

    /**
    * Get the button to remove first authenticator.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getRemoveFirstAuthenticator(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_REMOVE_AUTHENTICATION_OPTION);

    }

    /**
    * Get the authentication step 1 header.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAuthenticationStepOneHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(AUTHENTICATION_STEP_ONE_HEADER);

    }

    /**
     * Get the subject step checkbox of a step.
     * 
     * @param step - step number.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubjectStepCheckboxOfStep(step: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUBJECT_STEP_CHECKBOX_IN_STEP + `[data-componentid*="${step}"]`).find("[type=\"checkbox\"]");
    }

    /**
     * Get the subject step tooltip of a step.
     * 
     * @param step - step number.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubjectStepTooltipOfStep(step: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUBJECT_STEP_CHECKBOX_TOOLTIP + `[data-componentid*="${step}"]`);
    }

    /**
     * Get the attribute step checkbox of a step.
     * 
     * @param step - step number.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAttributeStepCheckboxOfStep(step: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_STEP_CHECKBOX_IN_STEP + `[data-componentid*="${step}"]`).find("[type=\"checkbox\"]");
    }

    /**
     * Get the attribute step tooltip of a step.
     * 
     * @param step - step number.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAttributeStepTooltipOfStep(step: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_STEP_CHECKBOX_TOOLTIP + `[data-componentid*="${step}"]`);
    }

    public static getAddActiveSessionsLimitBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ACTIVE_SESSIONS_LIMIT_CARD);
    }

    public static getAddHandlerConfirmationBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_ADD_HANDLER);
    }

    /**
    * Get the button to add multi factor login option SMS OTP
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getSignInMethodEthereumFlowCard(idpName: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(AUTHENTICATION_TILE + idpName + "\"]", { timeout: 10000 });

    }
    
    /**
    * The function returns a Cypress.Chainable<JQuery<HTMLElement>> object representing a basic flow card
    * element.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getBasicFlowCard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_BASIC_FLOW_CARD);
    }
}
