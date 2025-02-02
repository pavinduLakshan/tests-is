/*
 *   Copyright (c) 2022 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/* global JQuery */

import { CypressKeywords, HTMLKeyWordsConstants } from "../../../constants";
import { ConsoleGettingStarted } from "../getting-started";

//PAGE LOCATORS
const
    LNK_USERS = "[data-testid=side-panel-items-users]",
    LNK_ADMINISTRATORS = "[data-componentid=side-panel-items-administrators]",
    BUSINESS_USERS_PAGE_HEADER = "[data-testid=side-panel-items-users]",
    ADMIN_USERS_PAGE_HEADER = "[data-componentid=asgardeo-administrators-page-layout-page-header-title]",
    USER_GROUPS_PAGE_HEADER = "[data-testid=page-layout-page-header-title]",
    LNK_SUB_ORGANIZATION_ROLES = "[data-componentid=\"side-panel-items-user-roles\"]",
    LNK_SUB_ORGANIZATION_CONSOLE_SETTINGS = "[data-componentid=\"side-panel-items-console-settings\"]",
    SUB_ORGANIZATION_ROLES_CARD = "[data-testid=\"undefined-organization-roles-card-primary-button\"]",
    BTN_ADD_SUB_ORGANIZATION_ROLE = "[data-componentid=\"primary-button\"]",
    BTN_ADD_SUB_ORGANIZATION_ROLE_NEXT = "[data-testid=\"org-role-mgt-add-role-wizard-next-button\"]",
    BTN_ADD_SUB_ORGANIZATION_ROLE_FINISH = "[data-testid=\"org-role-mgt-add-role-wizard-finish-button\"]",
    TXT_SUB_ORGANIZATION_ROLE_NAME = "[data-testid=\"add-role-form-role-name-input\"]",
    TAB_ADD_SUB_ORGANIZATION_ROLE_USER = "[class=\"user icon\"]",
    BTN_SUB_ORGANIZATION_ROLE_USER_SELECT = "[data-componentid=\"transfer-list\"]",
    NEW_SUB_ORGANIZATION_ROLE = "[data-testid=\"organization-add-role-summary-role-name-label\"]",
    BTN_ADD_SUB_ORGANIZATION_ROLE_USER_SELECT =
        "[data-componentid=\"transfer-component-unselected-groups-add-button\"]",
    CHECK_BOX_SUB_ORGANIZATION_ROLE_PERMISSION =
        "[class=\"rc-tree-treenode rc-tree-treenode-switcher-open rc-tree-treenode-leaf-last\"]",
    CHECK_BOX_SUB_ORGANIZATION_ROLE_ALL_PERMISSION = "[class=\"rc-tree-checkbox\"]",
    LNK_ORGANIZATION = "[data-componentid=\"side-panel-items-organizations\"]",
    BTN_ADD_ORGANIZATION = "[data-componentid=\"primary-button\"]",
    TXT_ORGANIZATION_NAME = "[data-componentid=organization-create-wizard-organization-name-input]",
    BTN_NEW_ORGANIZATION_REGISTER = "[data-componentid=\"organization-create-wizard-next-button\"]",
    BTN_DELETE_ORGANIZATION = "[data-componentid=\"organization-list-item-delete-button\"]",
    BTN_CONFIRM_DELETE_ORGANIZATION =
        "[data-componentid=\"organization-list-delete-confirmation-modal-confirm-button\"]",
    DELETE_ORGANIZATION_CONSENT_CHECK_BOX =
        "[data-componentid=\"organization-list-delete-confirmation-modal-assertion-checkbox\"]",
    BTN_DISABLE_ORGANIZATION = "[data-testid=\"organization-overview-disable-danger-zone-toggle\"] > label",
    LNK_GROUP = "[data-testid=side-panel-items-groups]",
    LNK_ROLES = "[data-testid=side-panel-items-user-roles]",
    LNK_USERSTORE = "[data-testid=side-panel-items-user-stores]",
    LNK_CERTIFICATION = "[data-testid=side-panel-items-certificates]",
    LNK_ATTRIBUTE = "[data-testid=side-panel-items-local-attributes]",
    LNK_DIALECT = "[data-testid=side-panel-items-dialects]",
    LNK_OIDC_SCOPE = "[data-testid=side-panel-items-oidc-scopes]",
    LNK_AC_MGT_POLICIES = "[data-testid=side-panel-items-qw-njb-3-vud-cbnyw-5-h-z-2-vt-zw-50-if-bvb-glja-w-vz]",
    LNK_LOGIN_POLICIES = "[data-testid=side-panel-items-tg-9-na-w-4-g-ug-9-sa-w-np-zxm]",
    LNK_AC_MGT = "[data-testid=side-panel-items-qw-njb-3-vud-cbnyw-5-h-z-2-vt-zw-50]",
    LNK_ANALYTIC_ENGIN = "[data-testid=side-panel-items-qw-5-hb-hl-0-a-w-nz-ie-vu-z-2-lu-zq]",
    LNK_CONSENT_MGT = "[data-testid=side-panel-items-q-29-uc-2-vud-cbnyw-5-h-z-2-vt-zw-50]",
    LNK_LOGIN_ATTEMPT_SECURITY = "[data-testid=governance-connectors-listing-page-YWNjb3VudC5sb2NrLmhhbmRsZXI-" +
        "YWNjb3VudC5sb2NrLmhhbmRsZXI-settings-section-card-primary-button]",
    LNK_PASSWORD_VALIDATION = "[data-testid=validation-config-page-settings-section-card-primary-button]",
    LNK_PASSWORD_POLICIES = "[data-testid=side-panel-items-ug-fzc-3-dvcm-qg-ug-9-sa-w-np-zxm]",
    LNK_EMAIL_TEMPLATE = "[data-testid= side-panel-items-email-templates]",
    LBL_GOVERNANCE_PAGE_HEADER = "[data-testid=governance-connectors-page-page-layout-page-header-title]",
    LBL_EMAIL_PAGE_HEADER = "[data-testid=email-template-types-page-layout-page-header-title]",
    LBL_USERSTORE_PAGE_HEADER = "[data-testid=userstores-page-layout-page-header-title]",
    LBL_CERTIFICATE_PAGE_HEADER = "[data-testid=certificate-keystore-page-layout-page-header-title]",
    LBL_DIALECT_PAGE_HEADER = "[data-testid=attribute-dialects-page-layout-page-header-title]",
    LBL_ATTRIBUTE_PAGE_HEADER = "[data-testid=local-claims-page-layout-page-header-title]",
    LBL_LOGIN_AND_REGISTRATION_HEADER = "[data-testid=governance-connectors-listing-page-page-layout-page-" +
        "header-title]",
    LBL_ACCOUNT_RECOVERY_PAGE_HEADER =
        "[data-testid=governance-connectors-listing-page-QWNjb3VudCBNYW5hZ2VtZW50-page-layout-page-header-title]",
    LNK_OTHER_SETTINGS = "[data-testid=side-panel-items-t-3-ro-zx-ig-u-2-v-0-d-glu-z-3-m]",
    LNK_USER_ONBOARDING = "[data-testid=side-panel-items-vx-nlci-b-pbm-jv-yx-jka-w-5-n]",
    LNK_SIDE_PANNEL_ITEM_APPROVAL = "[data-testid=side-panel-items-approvals]",
    LBL_APPROVAL_PAGE_HEADER = "[data-testid=approvals-page-layout-page-header-title]",
    LNK_ATTRIBUTE_DIALECT = "[data-testid=side-panel-items-attribute-dialects]",
    LNK_PASSWORD_RECOVERY =
        "[data-testid=governance-connectors-listing-page-" +
        "YWNjb3VudC1yZWNvdmVyeQ-YWNjb3VudC1yZWNvdmVyeQ-settings-section-card-primary-button]",
    LBL_PASSWORD_RECOVERY_PAGE_HEADER =
        "[data-testid=governance-connectors-edit-page-YWNjb3VudC1yZWNvdmVyeQ-page-layout-page-header-title]",
    SELF_REGISTRATION_CONNECTOR_EDIT_PAGE_HEADER =
        "governance-connectors-edit-page-c2VsZi1zaWduLXVw-page-layout-page-header-title",
    SELF_REGISTRATION_CONNECTOR_EDIT_BUTTON =
        "[data-testid=governance-connectors-listing-page-c2VsZi1zaWduLXVw-c2VsZi1zaWduLXVw-settings-section-" +
        "card-primary-button]",
    BTN_LOGIN_ATTEMPTS_TOGGLE = "[data-testid=governance-connectors-edit-page-" +
        "YWNjb3VudC5sb2NrLmhhbmRsZXI-enable-toggle]",
    CHECK_BOX_PASSWORD_HISTORY_COUNT = "[data-testid=validation-config-edit-page-password-history-count-toggle]",
    INPUT_PASSWORD_HISTORY_COUNT = "[data-testid=validation-config-edit-page-password-history-count] > " + 
        "input[name=passwordHistoryCount]",
    BTN_PASSWORD_VALIDATION_UPDATE = "[data-testid=validation-config-edit-page-submit-button]",
    TOGGLE_PASSWORD_EXPIRY = "[data-componentid=validation-config-edit-page-password-expiry-toggle]",
    INPUT_PASSWORD_EXPIRY_DEFAULT_EXPIRY_TIME =
        "[data-componentid=validation-config-edit-page-password-expiry-rules-default-expiry-time]",
    SELECT_PASSWORD_EXPIRY_SKIP_FALLBACK = "[data-componentid=validation-config-edit-page-password-expiry-rules-" +
        "skip-fallback-select]",
    BTN_ADD_PASSWORD_EXPIRY_RULE = "[data-componentid=validation-config-edit-page-password-expiry-rules-add-rule]",
    SELECT_PASSWORD_EXPIRY_RULE_ATTRIBUTE_COMPONENT_ID = "validation-config-edit-page-password-expiry-rules-" +
        "attribute-select",
    SELECT_PASSWORD_EXPIRY_RULE_OPERATOR_COMPONENT_ID = "validation-config-edit-page-password-expiry-rules-" +
        "operator-select",
    SELECT_PASSWORD_EXPIRY_RULE_VALUE_COMPONENT_ID = "validation-config-edit-page-password-expiry-rules-" +
        "values-select",
    INPUT_PASSWORD_EXPIRY_RULE_DAYS_COMPONENT_ID = "validation-config-edit-page-password-expiry-rules-" +
        "expiry-days",
    BTN_PASSWORD_EXPIRY_RULE_MOVE_UP_COMPONENT_ID = "validation-config-edit-page-password-expiry-rules-" +
        "move-up",
    BTN_PASSWORD_EXPIRY_RULE_MOVE_DOWN_COMPONENT_ID = "validation-config-edit-page-password-expiry-rules-" +
        "move-down",
    BTN_PASSWORD_EXPIRY_RULE_DELETE_COMPONENT_ID = "validation-config-edit-page-password-expiry-rules-" +
        "delete-rule",
    CLASS_LOGIN_ATTEMPTS_TOGGLE_DISABLED = "ui toggle checkbox",
    CLASS_LOGIN_ATTEMPTS_TOGGLE_ENABLED = "ui checked toggle checkbox",
    INPUT_MAX_LOGIN_ATTEMPTS = "[data-testid=login-attempts-security-edit-form-max-failed-attempts]",
    INPUT_ACC_LOCK_DURATION = "[data-testid=login-attempts-security-edit-form-account-lock-time]",
    INPUT_ACC_LOCK_INCREMENT = "[data-testid=login-attempts-security-edit-form-account-lock-increment]",
    BTN_LOGIN_ATTEMPTS_SUBMIT = "[data-testid=login-attempts-security-edit-form-submit-button]",
    SELF_SEVICE_PORTAL_EDIT_PAGE_HEADER = "[data-testid=page-layout-page-header-title]",
    BTN_ADMIN_USER_DELETE = "[data-componentid=\"administrators-list-item-delete-button\"]",
    CHECK_BOX_CONFIRM_DELETE_USER =
        "[data-componentid=\"asgardeo-administrators-list-confirmation-modal-assertion-checkbox\"]",
    BTN_ADMIN_DELETE_CONFIRMATION =
        "[data-componentid=\"asgardeo-administrators-list-confirmation-modal-confirm-button\"]",
    BTN_ADD_SECOND_ORGANIZATION = "[data-componentid=\"organizations-list-layout-add-button\"]",
    BTN_SUB_ORG_EDIT = "[data-componentid=\"organization-list-item-edit-button\"]",
    BTN_SUB_ORG_SWITCH = "[data-componentid=\"organization-list-item-switch-button\"]",
    SUB_ORG_EDIT_NAME = "[data-testid=\"organization-overview-overview-form-name-input\"]",
    BTN_UPDATE_SUB_ORG_NAME = "[data-testid=\"organization-overview-form-update-button\"]",
    TXT_PASSWORD_VALIDATION_PAGE_HEADER =
        "[data-componentid=\"validation-config-edit-page-page-layout-page-header-title\"]",
    BTN_SUB_ORG_ROLE_EDIT = "[data-testid=\"organizations-roles-list-item-edit-button\"]",
    SUB_ORG_ROLE_USERS_TAB = "[data-testid=resource-tabs] > .pointing > :nth-child(4)",
    BTN_SUB_ORG_ROLE_ASSIGN_USERS = "[data-testid=\"primary-button\"]",
    LNK_CONSOLE_SETTINGS = "[data-componentid=\"side-panel-items-console-settings\"]",
    CHECK_BOX_CONFIRM_DELETE_USER_FROM_CONSOLE_SETTING =  
    "[data-componentid=\"administrators-table-confirmation-modal-assertion-checkbox\"]",
    BTN_ADMIN_DELETE_CONFIRMATION_FROM_CONSOLE_SETTING =
        "[data-componentid=\"administrators-table-confirmation-modal-confirm-button\"]",


/* It contains all the locators of the Getting Started Manage page */
export class GettingStartedManagePage {

    /**
     * Get the link to the users page.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUsersLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_USERS,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * It returns a chainable object that represents the link with the text "Administrators" on the
     * page
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getLinkAdministrators(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_ADMINISTRATORS);
    }

    /**
     * This function returns the business users page header element
     * @returns The element with the id of 'business-users-page-header'
     */
    public static getBusinessUsersPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            BUSINESS_USERS_PAGE_HEADER,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * This function returns the admin users page header element
     * @returns The element with the id of 'admin-users-page-header'
     */
    public static getAdminUsersPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADMIN_USERS_PAGE_HEADER);
    }

    /**
     * This function returns the user group page header element
     * @returns The element with the id of 'user-groups-page-header'
     */
    public static getUserGroupPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_GROUPS_PAGE_HEADER);
    }

    /**
     * It returns a chainable object that represents the sub organization roles link
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubOrganizationRolesLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_SUB_ORGANIZATION_ROLES,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * It returns a chainable object that represents the sub organization Console settings link
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubOrganizationConsoleSettingsLink(): Cypress.Chainable<JQuery<HTMLElement>> {
            
            return ConsoleGettingStarted.GetGroupedSidePanelItem(
                LNK_SUB_ORGANIZATION_CONSOLE_SETTINGS,
                ConsoleGettingStarted.getConsoleSettingsGroupLink()
            );
    }

    /**
     * It returns a chainable object that represents the sub organization roles card
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubOrganizationRolesCard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUB_ORGANIZATION_ROLES_CARD);
    }

    /**
     * It returns a chainable object that represents the add new organization role button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSubOrganizationRoleButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_SUB_ORGANIZATION_ROLE);
    }

    /**
     * This function returns the element that is the new organization role name input
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewSubOrganizationRoleInput(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(TXT_SUB_ORGANIZATION_ROLE_NAME);
    }

    /**
     * It returns a chainable object that represents the add new organization role next button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSubOrganizationRoleNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_SUB_ORGANIZATION_ROLE_NEXT);
    }

    /**
     * It returns a chainable object that represents the add new organization role finish button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSubOrganizationRoleFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_SUB_ORGANIZATION_ROLE_FINISH);
    }

    /**
     * This function returns the element that is the new organization role permission checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewSubOrganizationRolePremissionCheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(CHECK_BOX_SUB_ORGANIZATION_ROLE_PERMISSION);
    }

    /**
     * This function returns the element that is the new organization role all permission checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewSubOrganizationRoleAllPremissionCheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(CHECK_BOX_SUB_ORGANIZATION_ROLE_ALL_PERMISSION);
    }

    /**
     * It returns a chainable object that represents the add new organization role user tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSubOrganizationRoleUserTab(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TAB_ADD_SUB_ORGANIZATION_ROLE_USER);
    }

    /**
     * It returns a chainable object that represents the new organization role user selections
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubOrganizationRoleUserSelect(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUB_ORGANIZATION_ROLE_USER_SELECT);
    }

    /**
     * It returns a chainable object that represents the add new organization role user selections
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAddSubOrganizationRoleUserSelect(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_SUB_ORGANIZATION_ROLE_USER_SELECT);
    }

    /**
     * It returns a chainable object that represents the new organization role
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSubOrganizationCreatedRole(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NEW_SUB_ORGANIZATION_ROLE);
    }

    /**
     * It returns a chainable object that represents the organization (preview) link
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getOrganizationLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_ORGANIZATION);
    }

    /**
     * It returns a chainable object that represents the add new organization button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getAddOrganizationButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ORGANIZATION);
    }

    /**
     * This function returns the element that is the new organization name input
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getNewOrganizationNameInput(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(TXT_ORGANIZATION_NAME);
    }

    /**
    * This function returns the element that is the new organization register button
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getNewOrganizationRegisterButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEW_ORGANIZATION_REGISTER);
    }

    /**
     * Get the delete organization button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDeleteOrganization(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DELETE_ORGANIZATION);
    }

    /**
     * This function returns the consent for deleting checkbox element
     * on the organization preview page once delete icon clicked.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getDeleteOrganizationConsentCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DELETE_ORGANIZATION_CONSENT_CHECK_BOX);
    }

    /**
     * Get the delete organization confirmation button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getBtnConfirmDeleteOrganization(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_DELETE_ORGANIZATION);
    }

    /**
     * Get disable organization at danger zone of the sub organization
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDisableOrganization(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DISABLE_ORGANIZATION);
    }

    /**
     * It returns a chainable object that represents the group link
     * @returns A chainable command that will return a JQuery object of the element that matches the
     * selector.
     */
    public static getGroupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_GROUP,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * It returns a chainable object that represents the Roles link on the page
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getRolesLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_ROLES,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * It returns a Cypress chainable object that represents the user store link
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_USERSTORE,
            ConsoleGettingStarted.getUserAttributesAndStoresGroupLink()
        );
    }

    /**
     * It returns a Cypress chainable object that represents the Certification link on the page
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getCertificationLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_CERTIFICATION);
    }

    /**
     * It returns a chainable object that can be used to interact with the element
     * @returns The element with the id of lnkAttribute.
     */
    public static getAttributeLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_ATTRIBUTE);
    }

    /**
     * It returns a chainable object that represents the link to the TypeScript dialect
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getDialectLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_DIALECT);
    }

    /**
     * "Get the OIDC Scope link."
     *
     * The function is named `getOIDCScopeLink` and it returns a
     * `Cypress.Chainable<JQuery<HTMLElement>>` object
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getOIDCScopeLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_OIDC_SCOPE,
            ConsoleGettingStarted.getUserAttributesAndStoresGroupLink()
        );
    }

    /**
     * It returns a chainable object that represents the element with the id of "ac-mgt-policies-link"
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAcManagementPoliciesLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_AC_MGT_POLICIES);
    }

    /**
     * It returns a chainable object that represents the login policies link
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getLoginPoliciesLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_LOGIN_POLICIES);
    }

    /**
     * It returns a chainable object that represents the element with the id of "ac-mgt-link"
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAcManagementLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_AC_MGT);
    }

    /**
     * It returns a chainable object that represents the element with the id of "analytic-engine-link"
     * @returns A chainable command that will return a JQuery object that represents the Analytic
     * Engine link.
     */
    public static getAnalyticEngineLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_ANALYTIC_ENGIN);
    }

    /**
     * It returns a Cypress chainable object that represents the consent management link
     * @returns The element that matches the selector.
     */
    public static getConsentManagementLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_CONSENT_MGT);
    }

    /**
     * This function returns the login attempt security link
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getLoginAttemptSecurity(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_LOGIN_ATTEMPT_SECURITY);
    }

    /**
     * This function returns the password validation link.
     *
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordValidation(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(LNK_PASSWORD_VALIDATION);
    }

    /**
     * This function returns the Password Validation page header text.
     *
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordValidationHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(TXT_PASSWORD_VALIDATION_PAGE_HEADER);
    }

    /**
     * This function returns the password history count checkbox.
     *
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordHistoryCountCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CHECK_BOX_PASSWORD_HISTORY_COUNT).find(HTMLKeyWordsConstants.HTML_INPUT_CHECKBOX);
    }

    /**
     * This function returns the password history count input.
     *
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordHistoryCountInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INPUT_PASSWORD_HISTORY_COUNT);
    }

    /**
     * This function returns the password validation update button.
     *
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordValidationUpdate(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_PASSWORD_VALIDATION_UPDATE);
    }

    /**
     * This function returns the password expiry checkbox.
     *
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryToggle(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(TOGGLE_PASSWORD_EXPIRY).find(HTMLKeyWordsConstants.HTML_INPUT_CHECKBOX);
    }

    /**
     * This function returns the password expiry time input.
     *
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryTimeInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(INPUT_PASSWORD_EXPIRY_DEFAULT_EXPIRY_TIME);
    }

    /**
     * This function returns the password expiry skip fallback select.
     * 
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpirySkipFallbackSelect(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(SELECT_PASSWORD_EXPIRY_SKIP_FALLBACK);
    }

    /**
     * This function returns the password expiry add rule button.
     * 
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryAddRuleButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_ADD_PASSWORD_EXPIRY_RULE);
    }

    /**
     * This function returns the password expiry rule attribute select.
     * 
     * @param index Rule index.
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryRuleAttributeSelect(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(`[data-componentid=${SELECT_PASSWORD_EXPIRY_RULE_ATTRIBUTE_COMPONENT_ID}-${index}]`);
    }

    /**
     * This function returns the password expiry rule operator select.
     * 
     * @param index Rule index.
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryRuleOperatorSelect(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(`[data-componentid=${SELECT_PASSWORD_EXPIRY_RULE_OPERATOR_COMPONENT_ID}-${index}]`);
    }

    /**
     * This function returns the password expiry rule value select.
     * 
     * @param index Rule index.
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryRuleValueSelect(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(`[data-componentid=${SELECT_PASSWORD_EXPIRY_RULE_VALUE_COMPONENT_ID}-${index}]`);
    }

    /**
     * This function returns the password expiry rule days input.
     * 
     * @param index Rule index.
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryRuleDaysInput(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(`[data-componentid=${INPUT_PASSWORD_EXPIRY_RULE_DAYS_COMPONENT_ID}-${index}]`);
    }

    /**
     * This function returns the password expiry rule move up button.
     * 
     * @param index Rule index.
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryRuleMoveUpButton(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(`[data-componentid=${BTN_PASSWORD_EXPIRY_RULE_MOVE_UP_COMPONENT_ID}-${index}]`);
    }

    /**
     * This function returns the password expiry rule move down button.
     * 
     * @param index Rule index.
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryRuleMoveDownButton(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
       
        return cy.get(`[data-componentid=${BTN_PASSWORD_EXPIRY_RULE_MOVE_DOWN_COMPONENT_ID}-${index}]`);
    }

    /**
     * This function returns the password expiry rule delete button.
     * 
     * @param index Rule index.
     * @returns A chainable command that will return the element that matches the selector.
     */
    public static getPasswordExpiryRuleDeleteButton(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(`[data-componentid=${BTN_PASSWORD_EXPIRY_RULE_DELETE_COMPONENT_ID}-${index}]`);
    }

    /**
     * "Get the password policies link."
     *
     * The function is named `getPasswordPoliciesLink` and it returns a
     * `Cypress.Chainable<JQuery<HTMLElement>>` object
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getPasswordPoliciesLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_PASSWORD_POLICIES);
    }

    /**
     * This function returns a chainable object that can be used to interact with the email template
     * link
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEmailTemplateLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_EMAIL_TEMPLATE);
    }

    /**
     * It returns the header of the Connector listing page.
     * @returns The Governance Page Header
     */
    public static getLoginAndRegistrationPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_LOGIN_AND_REGISTRATION_HEADER);
    }

    /**
     * It returns the element with the label "Governance" on the Governance page
     * @returns The Governance Page Header
     */
    public static getGovernancePageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_GOVERNANCE_PAGE_HEADER);
    }

   /**
    * This function returns the email page header element
    * @returns The element with the label "Email Page Header"
    */
    public static getEmailPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_EMAIL_PAGE_HEADER);
    }

    /**
     * It returns a Cypress chainable object that represents the User Store page header label
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStorePageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_USERSTORE_PAGE_HEADER);
    }

    /**
     * It returns a Cypress chainable object that represents the Certificate Page Header label
     * @returns The element with the label "Certificate"
     */
    public static getCertificatePageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_CERTIFICATE_PAGE_HEADER);
    }

    /**
     * It returns the element that has the text "Dialect" on the page
     * @returns The element with the id of lblDialectPageHeader
     */
    public static getDialectPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_DIALECT_PAGE_HEADER);
    }

    /**
     * This function returns the element that contains the text "Attribute" on the Attribute page
     * @returns The element with the label "Attribute Page Header"
     */
    public static getAttributePageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_ATTRIBUTE_PAGE_HEADER);
    }

    /**
     * This function returns the account recovery page header element
     * @returns The element with the label "Account Recovery"
     */
    public static getAccountRecoveryPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_ACCOUNT_RECOVERY_PAGE_HEADER);
    }

    /**
     * It returns a chainable object that represents the element with the id "otherSettingsLink"
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getOtherSettingsLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_OTHER_SETTINGS);
    }

    /**
     * It returns a Cypress chainable object that represents the user onboarding link
     * @returns A chainable command that returns a JQuery object.
     */
    public static getUserOnboardLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_USER_ONBOARDING);
    }

    /**
     * It returns a chainable object that represents the element with the id of
     * "lnkSidePanelItemApproval"
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSidePanelItemApprovalLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_SIDE_PANNEL_ITEM_APPROVAL);
    }

    /**
     * It returns a Cypress chainable object that represents the element with the id
     * "approval-page-header"
     * @returns The element with the label "Approval Page Header"
     */
    public static getApprovalPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_APPROVAL_PAGE_HEADER);
    }

    /**
     * It returns a chainable object that represents the element with the id "attribute-dialect-link"
     * @returns The element with the id of lnkAttributeDialect
     */
    public static getAttributeDialectLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_ATTRIBUTE_DIALECT,
            ConsoleGettingStarted.getUserAttributesAndStoresGroupLink()
        );
    }

    /**
     * It returns a Cypress chainable object that represents the password recovery link
     * @returns A chainable object that can be used to interact with the DOM.
     */
    public static getPasswordRecoveryLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_PASSWORD_RECOVERY);
    }

    /**
     * It returns the password recovery page header element
     * @returns The element with the label "Password Recovery"
     */
    public static getPasswordRecoveryPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_PASSWORD_RECOVERY_PAGE_HEADER);
    }

    /**
     * This function returns the header of the Self Registration Connector Edit page
     * @returns The element with the id of self-registration-connector-edit-page-header
     */
    public static getSelfRegistrationEditPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELF_REGISTRATION_CONNECTOR_EDIT_PAGE_HEADER);
    }

    /**
     * This function returns the edit button for the self registration connector
     * @returns The element that matches the selector.
     */
    public static getSelfRegistrationEditBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELF_REGISTRATION_CONNECTOR_EDIT_BUTTON);
    }

    /**
     * This function returns the header of the self service portal Edit page.
     * @returns The element with the id of self-registration-connector-edit-page-header
     */
    public static getSelfServicePortalEditPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELF_SEVICE_PORTAL_EDIT_PAGE_HEADER);
    }

    /**
     * This function returns the login attempts toggle button
     * @returns The element that matches the selector.
     */
    public static getLoginAttemptsToggleButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_LOGIN_ATTEMPTS_TOGGLE);
    }

    /**
     * This function returns the login attempts security toggle button class name
     * @returns The class name string.
     * @param status should be either "enabled" or "disabled"
     */
    public static getLoginAttemptsToggleButtonClass(status: string): string {

        return ((status === CypressKeywords.ENABLED) ?
            CLASS_LOGIN_ATTEMPTS_TOGGLE_ENABLED : CLASS_LOGIN_ATTEMPTS_TOGGLE_DISABLED);
    }

    /**
     * This function returns the input field mber of consecutive failed login attempts.
     * @return Number of consecutive failed login attempts field
     **/
    public static getMaxLoginAttemptsInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INPUT_MAX_LOGIN_ATTEMPTS);
    }

    /**
     * This function returns the input field Account lock duration.
     * @return Account lock duration field
     **/
    public static getAccountLockDurationInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INPUT_ACC_LOCK_DURATION);
    }

    /**
    * This function returns the input field.
    * @return Number of consecutive failed login attempts field
    **/
    public static getAccountLockIncrementInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(INPUT_ACC_LOCK_INCREMENT);
    }

    /**
    * This function returns the input field.
    * @return Number of consecutive failed login attempts field
    **/
    public static getLoginAttemptsSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_LOGIN_ATTEMPTS_SUBMIT);
    }

    /**
     * This function returns the delete button of a selected admin user record
     * @return Delete user button - Admin user list page
     */
    public static getAdminUserDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_ADMIN_USER_DELETE);
    }

    /**
     * This function returns the checkbox in confirmation pop-up for admin users
     * @return Delete confirmation checkbox
     */
    public static getAdminUserDeleteConfirmationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CHECK_BOX_CONFIRM_DELETE_USER);
    }

    /**
     * This function returns the confirm button in the delete pop-up for admin users
     * @return Delete confirmation button
     */
    public static getAdminUserDeleteConfirmationButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_ADMIN_DELETE_CONFIRMATION);
    }

    /**
     * It returns a chainable object that represents the add second organization button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getAddSecondOrganizationButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_SECOND_ORGANIZATION);
    }

    /**
     * It returns a chainable object that represents the sub organization edit button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getEditSubOrganizationButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUB_ORG_EDIT);
    }

    /**
     * It returns a chainable object that represents the sub organization edit button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSwitchSubOrganizationButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUB_ORG_SWITCH);
    }

    /**
     * It returns a chainable object that represents the sub organization edit name text
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getEditSubOrganizationName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUB_ORG_EDIT_NAME);
    }

    /**
     * It returns a chainable object that represents the sub organization update button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getUpdateSubOrganizationButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE_SUB_ORG_NAME);
    }

    public static getSubOrgAdminRoleLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUB_ORG_ROLE_EDIT).first();
    }

    public static getSubOrgRoleUsersList(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(SUB_ORG_ROLE_USERS_TAB);
    }

    /**
     * It returns a chainable object that represents the Roles button of a selected user.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRolesAssignUsersButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_SUB_ORG_ROLE_ASSIGN_USERS);
    }

    /**
    * It returns a chainable object that represents the root org Console settings link
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getRootOrgConsoleSettingsLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_CONSOLE_SETTINGS,
            ConsoleGettingStarted.getConsoleSettingsGroupLink()
        );
    }

    /**
    * This function returns the checkbox in confirmation pop-up for admin users
    * @return Delete confirmation checkbox
    */
    public static getAdminUserDeleteConfirmationCheckboxFromConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(CHECK_BOX_CONFIRM_DELETE_USER_FROM_CONSOLE_SETTING);
    }

    /**
    * This function returns the confirm button in the delete pop-up for admin users
    * @return Delete confirmation button
    */
    public static getAdminUserDeleteConfirmationButtonFromConsoleSetting(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(BTN_ADMIN_DELETE_CONFIRMATION_FROM_CONSOLE_SETTING);
    }
}
