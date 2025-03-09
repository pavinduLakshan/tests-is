/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core/constants";

// PAGE LOCATORS
const BUTTON_CONNECT_APPLICATION = "[data-testid=\"develop-getting-started-page-register-application-button\"]",
    LNK_USER_MANAGEMENT = "[data-testid=side-panel-items-user-management]",	
    LNK_ORGANIZATION_MANAGEMENT = "[data-testid=side-panel-items-organization-management]",	
    LNK_LOGIN_AND_REGISTRATION = "[data-testid=side-panel-items-login-and-registration]",
    BTN_TO_MY_ACCOUNT_PAGE = "[data-componentid=navigate-to-my-account-settings-button]",
    LNK_USER_ATTRIBUTES_AND_STORES = "[data-testid=side-panel-items-user-attributes-and-stores]",
    LNK_CUSTOMIZATION = "[data-testid=side-panel-items-customization]",
    LNK_APPLICATION = "[data-testid=side-panel-items-applications]",
    LNK_BRANDING = "[data-testid=side-panel-items-branding]",
    LNK_MONITOR = "[data-testid=side-panel-items-logs]",
    LNK_SUB_ORGANIZATION_CONSOLE_SETTINGS = "[data-testid=side-panel-items-console-settings]",
    LNK_REMOTE_REPO_CNFG = "[data-testid=side-panel-items-remote-repo]",
    LBL_REMOTE_REPO_CNFG_HEADER = "[data-testid=page-layout-page-header-header]",
    LNK_SIDE_PANNEL_IDP = "[data-testid=side-panel-items-identity-providers]",
    LNK_ACTIONS = "[data-componentid=side-panel-items-actions]",
    LNK_SMS_TEMPLATES = "[data-componentid=side-panel-items-sms-templates]",
    TAB_SECTION = "div[class=\"ui inner-menu menu\"]",
    MANAGE_SECTION_DEFAULT_LANDING_PAGE_HEADER = "[data-testid=side-panel-items-users]",
    USER_DROP_DOWN = "[data-testid=app-header-user-avatar]",
    LINK_ROLE = "[data-testid=side-panel-items-user-roles]",
    BTN_LOGOUT = "Logout",
    BTN_MYACCOUNT = "[data-testid=app-switch-myaccount]",
    HEADER_AVATAR_ICON_CONTAINER = "[data-testid='app-header-user-avatar']",
    ORGANIZATION_SWITCH_BREADCRUMB_ORG = "[data-componentid=\"organization-switch-breadcrumb-breadcrumb-item-",
    ORGANIZATION_SWITCH_DROPDOWN = "[data-componentid=\"tenant-dropdown\"]",
    SUB_ORGANIZATIONS_LIST_LINK = "[data-componentid=\"sub-organizations-menu\"]",
    ITEM_IN_SUB_ORGANIZATION_SWITCH_DROPDOWN = "[data-componentid=\"associated-organizations-container\"]",
    BTN_ITEM_IN_SUB_ORGANIZATION_SWITCH_DROPDOWN = "[data-componentid=\"organization-switch-list" +
        "-item-organization-switch\"]",
    TXT_ORGANIZATION_NAME = "[data-testid=tenant-add-wizard-form-type-input]",
    ORGANIZATION_ADD_WIZARD_CREATE_BUTTON = "[data-componentid=\"primary-button\"]",
    ORGANIZATION_SWITCH_BREADCRUMB_BREADCRUMB_ITEM = "[data-componentid=\"organization-switch-"+
        "breadcrumb-breadcrumb-item-",
    ORGANIZATION_ID_CONTAINER_IN_TENANT_DROPDOWN = "[data-componentid=tenant-dropdown-organization-id]",
    APP_NOT_EXIST_SUB_ORG_PLACEHOLDER = "[data-testid=\"applications-list-empty-placeholder\"]",

    // Try-it flow locators
    TRYIT_APP_CARD_INITIAL = "[class=\"ui card basic-card no-hover context-card try-it-app-card\"]",
    TRYIR_APP_CARD_CREATED = "[class=\"try-it-card\"]",
    BTN_TRYIT_START = "[data-componentid=\"develop-getting-started-page-try-it\"]",
    MODAL_TRYIT_WIZARD = "[class=\"ui small modal transition visible active wizard login-playground-wizard\"]",
    LNK_CREATE_TRYIT_USER = "creating a user",
    INPUT_TRYIT_CREATE_USER_NAME = "[data-testid=\"user-mgt-add-user-form-email-input\"]",
    INPUT_TRYIT_CREATE_USER_PASSWORD = "[data-testid=\"user-mgt-add-user-form-newPassword-input\"]",
    BTN_TRYIT_CREATE_USER_FINISH = "[data-testid=\"user-mgt-add-user-wizard-modal-finish-button\"]",
    MODAL_TRYIT_WIZARD_TRANSITION =
        "[class=\"ui small modal transition visible active wizard login-playground-wizard\"]",
    BTN_TRYIT_WIZARD_NEXT = "[data-testid=\"undefined-next-button\"]",
    BTN_TRYIT_APP_CUSTOMIZE = "[data-componentid=\"develop-getting-started-page-cutomize-try-it\"]",

    // Try-it sample APP locators
    LBL_TRYIT_APP_WELCOME = "[class=\"welcome-text-landing-content\"]",
    BTN_TRYIT_APP_SIGNOUT = "[class=\"header-button-second rs-btn rs-btn-ghost rs-btn-orange\"]",
    LBL_TRYIT_APP_LOGGED_OUT = "[class=\"welcome-text-log-out-content\"]",
    LBL_GETTING_STARTED_WELCOME = "[data-testid=\"welcome-greeting-header\"]";

/* It contains functions that return a Cypress Chainable object that represents a DOM element */
export class ConsoleGettingStarted {

    /**	
     * Get the link to the login and registration group item.
     * @returns A chainable object of type JQuery<HTMLElement>	
     */
    public static getLoginAndRegistrationPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_LOGIN_AND_REGISTRATION);
    }

    /**	
     * Get the link to the user attributes and stores group item.
     * @returns A chainable object of type JQuery<HTMLElement>	
     */
    public static getUserAttributesAndStoresGroupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_USER_ATTRIBUTES_AND_STORES);
    }

        /**	
     * Get the link to the my account page button.
     * @returns A chainable object of type JQuery<HTMLElement>	
     */
    public static getBtnToMyAccountPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TO_MY_ACCOUNT_PAGE);
    }

    /**	
     * Get the link to the user management group item.	
     * @returns A chainable object of type JQuery<HTMLElement>	
     */	
    public static getUserManagementGroupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_USER_MANAGEMENT);	
    }

    /**
     * Get the link to the console settings group item.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConsoleSettingsGroupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_SUB_ORGANIZATION_CONSOLE_SETTINGS);
    }

    /**	
     * Get the link to the organization management group item.	
     * @returns A chainable object of type JQuery<HTMLElement>	
     */	
        public static getOrganizationManagementGroupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

            return cy.get(LNK_ORGANIZATION_MANAGEMENT);	
        }

    /**	
     * Get the link to the customization group item.	
     * @returns A chainable object of type JQuery<HTMLElement>	
     */	
    public static getCustomizationGroupLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_CUSTOMIZATION);	
    }

    /**
     * Get the link to a grouped side panel item. If the element is not found, it will click on the
     * group link and return the element.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static GetGroupedSidePanelItem(
        elementSelector: string, 
        groupLink: Cypress.Chainable<JQuery<HTMLElement>>
        ): Cypress.Chainable {
            return cy.get("body").then(($body) => {
                if ($body.find(elementSelector).length > 0) {
                    return cy.get(elementSelector);
                } else {
                    groupLink.click();
                    return cy.get(elementSelector);
                }
            });
        }

    /**
     * It returns a Cypress Chainable object that represents the button element with the id
     * "connect-application-button"
     * @returns A JQuery object
     */
    public static getConnectBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BUTTON_CONNECT_APPLICATION);
    }

    /**
     * It returns a chainable object that represents the application link
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getApplicationLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_APPLICATION);
    }

    /**
     * It returns a Cypress chainable object that represents the branding link element
     * @returns A chainable command that will return a JQuery object of the element.
     */
    public static getBrandingLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_BRANDING,
            ConsoleGettingStarted.getCustomizationGroupLink()
        );
    }

    /**
     * It returns a chainable object that represents the monitor page link
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMonitorLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_MONITOR);
    }

    /**
     * It returns a Cypress chainable object that represents the remote config link
     * @returns A JQuery object that represents the link element.
     */
    public static getRemoteConfigLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_REMOTE_REPO_CNFG);
    }

    /**
     * It returns a JQuery object that represents the HTML element with the id of
     * "remote-repo-config-header"
     * @returns The Cypress.Chainable<JQuery<HTMLElement>> is being returned.
     */
    public static getRemoteConfigHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LBL_REMOTE_REPO_CNFG_HEADER);
    }

    /**
     * It returns a Cypress Chainable object that represents the element with the id "side-panel-idp"
     * @returns A chainable object
     */
    public static getSidePanelIdp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_SIDE_PANNEL_IDP);
    }

    /**
     * It returns a chainable object that represents the tab section element
     * @returns A chainable object that represents the DOM element.
     */
    public static getTabSection(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TAB_SECTION);
    }

    /**
     * This function returns the default landing page header element
     * @returns The element with the id of "develop-section-default-landing-page-header"
     */
    public static getDefaultLandingPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_APPLICATION);
    }

    /**
     * This function returns the default landing page header element
     * @returns The element with the id of "manage-section-default-landing-page-header"
     */
    public static getManageSectionLandingPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            MANAGE_SECTION_DEFAULT_LANDING_PAGE_HEADER,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * It returns a chainable object that represents the user dropdown element
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_DROP_DOWN);
    }

    /**
     * It returns a chainable object that represents the roles link
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getRolesLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LINK_ROLE,
            ConsoleGettingStarted.getUserManagementGroupLink()
        );
    }

    /**
     * It returns a Cypress chainable object that represents the logout button
     * @returns A chainable object that can be used to interact with the DOM element.
     */
    public static getLogoutBtn(): Cypress.Chainable<undefined> {

        return cy.contains(BTN_LOGOUT);
    }

    /**
     * This function returns a Cypress Chainable object that represents the My Account button on the
     * page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getMyAccountBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_MYACCOUNT);
    }

    /**
     * This function returns the avatar icon element in the header
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getConsoleAvatarIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(HEADER_AVATAR_ICON_CONTAINER, { timeout: 60000 }).first();
    }

    /**
    * This function returns the element that is the Organization Switch Dropdown
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
     public static getOrganizationSwitchDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_SWITCH_DROPDOWN);
    }

    /**
    * This function returns the element that is the Organization Switch Dropdown
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getSubOrganizationListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUB_ORGANIZATIONS_LIST_LINK);
    }

    /**
    * This function returns the element that is the list item in Organization Switch Dropdown
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
     public static getItemSubOrganizationInSwitchDropdown(testData: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ITEM_IN_SUB_ORGANIZATION_SWITCH_DROPDOWN)
            .contains(testData)
            .nextAll(HTMLKeyWordsConstants.HTML_DIV).find(BTN_ITEM_IN_SUB_ORGANIZATION_SWITCH_DROPDOWN).first();
    }

    /**
    * This function returns the element that is relevent to the main organization in the breadcrumb.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getMainOrganizationFromBreadCrumbView(mainOrg: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_SWITCH_BREADCRUMB_ORG + mainOrg + "\"]");
    }

    /**
     * This function returns the input element for organization name
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    static getNewOrganizationNameInput(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(TXT_ORGANIZATION_NAME);
    }

    /**
    * This function returns the element for organization creation button
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
     public static getOrganizationAddWizardCreateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_ADD_WIZARD_CREATE_BUTTON);
    }

    /**
     * This function returns the initial TryIT card element which is available in getting-started page before
     * the TryIt app is first created/ unavailable
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItAppCardInitial(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TRYIT_APP_CARD_INITIAL);
    }

    /**
     * This function returns the TryIT card element which is available in getting-started page after
     * the TryIt app is created or any other SP is already created
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItAppCardCreated(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TRYIR_APP_CARD_CREATED);
    }

    /**
     * This function returns start button element on TryIt card element in getting-started page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItStartButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TRYIT_START);
    }

    /**
     * This function returns TryIt app setup wizard
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItWizard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MODAL_TRYIT_WIZARD);
    }

    /**
     * This function returns 'create user' text link on TryIt app create wizard
     * The link is available only when creating the TryIt app for the first time
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItUserCreateLink(): Cypress.Chainable<undefined> {

        return cy.contains(LNK_CREATE_TRYIT_USER);
    }

    /**
     * This function returns UserName input field on TryIt app create wizard
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItUserCreateUsername(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_TRYIT_CREATE_USER_NAME);
    }

    /**
     * This function returns password input field on TryIt app create wizard
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItUserCreatePassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_TRYIT_CREATE_USER_PASSWORD);
    }

    /**
     * This function returns create user - finish button on TryIt app create wizard
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItUserCreateFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TRYIT_CREATE_USER_FINISH);
    }

    /**
     * This function returns Transition page on TryIt app create wizard
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItWizardTransitionPage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MODAL_TRYIT_WIZARD_TRANSITION);
    }

    /**
     * This function returns Next button on Transition page, on TryIt app create wizard
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItWizardNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TRYIT_WIZARD_NEXT);
    }

    /**
     * This function returns the welcome message text on the TryIt sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItAppWelcomeMessage(): Cypress.Chainable<JQuery<HTMLParagraphElement>> {

        return cy.get(LBL_TRYIT_APP_WELCOME).children("p");
    }

    /**
     * This function returns the signout button the TryIt sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItAppSignOutButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TRYIT_APP_SIGNOUT);
    }

    /**
     * This function returns the signout message text on the TryIt sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTryItAppLoggedOutMessage(): Cypress.Chainable<JQuery<HTMLParagraphElement>> {

        return cy.get(LBL_TRYIT_APP_LOGGED_OUT).children("p");
    }

    /**
    * This function returns the customize button on Try-it app card in getting-started page
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getTryItAppCustomizeButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TRYIT_APP_CUSTOMIZE);
    }

    /**
     * This function returns the welcome message banner in the Console Getting-started page
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getGettingStartedPageWelcomeBanner(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(LBL_GETTING_STARTED_WELCOME);
    }

    /**
     * This function is to click the parent org
     * @param tenantName
     * @returns
     */
    public static getOrganizationSwitchBreadcrumbItem(tenantName: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ORGANIZATION_SWITCH_BREADCRUMB_BREADCRUMB_ITEM + tenantName + "\"]");
    }

    /**
    * This function returns the switch button of sub org switch
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getSelectSubOrgSwitchBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ITEM_IN_SUB_ORGANIZATION_SWITCH_DROPDOWN);
    }

    /**
    * This function returns sub organisations application placeholder
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getSubOrgAppPlaceholder(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(APP_NOT_EXIST_SUB_ORG_PLACEHOLDER);
    }

    /**
     * This function returns the organization id in tenant dropdown
     * 
     */
    public static getOrganizationIdContainerInTenantDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
            
        return cy.get(ORGANIZATION_ID_CONTAINER_IN_TENANT_DROPDOWN);
    }

    /**
     * It returns a chainable object that represents the actions page link.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getActionsLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LNK_ACTIONS);
    }

    /**
     * It returns a chainable object that represents the SMS Templates page link.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSmsTemplatesLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return ConsoleGettingStarted.GetGroupedSidePanelItem(
            LNK_SMS_TEMPLATES,
            ConsoleGettingStarted.getCustomizationGroupLink()
        );
    }
}
