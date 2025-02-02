/**
 * Copyright (c) 2022-2024, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

 import { HTMLKeyWordsConstants, UserStoreConstants } from "../../../constants";

// ADD USER STORE LOCATORS 
const 
    USER_STORE_BUTTON = "[data-testid=\"primary-button\"]",
    USER_STORE_PAGE_HEADER = "[data-testid=\"userstores-page-layout-page-header-title\"]",
    USER_STORE_EDIT_PAGE_TITLE = "[data-componentid=\"page-layout-page-header-title\"]",
    ALERT_SUCCESS_MESSAGE_TESTID = "[data-testid=\"alert-success-message\"]",
    USER_STORE_EDIT_BTN = "i[class=\"grey pencil alternate small icon list-icon data-table-list-icon\"]",
    GENERAL_ANCHOR = "General";

// UPDATE USER STORE LOCATORS
const 
    ATTRIBUTES_SEGMENT = "[class=\"ui very padded segment attribute-mapping-section\"]",
    UPDATE_DESCRIPTION = "[data-testid=\"undefined-user-store-description-textarea\"]",
    ATTRIBUTE_MAPPING_ANCHOR = "Configurations";

// SETUP AGENT LOCATORS
const 
    TOKEN_DIV = "[data-componentid=\"generate-token-step-token-readonly-input-wrapper\"]",
    SETUP_GUIDE_ANCHOR = "Setup Guide",
    CONNECTION_SUCCESS_BUTTON = "[data-componentid=\"run-agent-step-connection-success-button\"]",
    DOWNLOAD_BUTTON = "[class=\"ui orange basic button\"]";

// DELETE REMOTE USERSTORE LOCATORS
const BTN_DELETE_REMOTE_USERSTORE = "[data-testid=undefined-delete-danger-zone-delete-button]",
      CHECKBOX_DELETE_CONFIRMATION = "[data-testid=undefined-delete-confirmation-modal-assertion-checkbox]",
      BTN_CONFIRM_DELETE_REMOTE_USERSTORE = "[data-testid=undefined-delete-confirmation-modal-confirm-button]",
      ALERT_SUCCESS_DELETE_USERSTORE = "[data-testid=alert-success-message]";

// DELETE TOTP AUTHENTICATOR APP FROM MYACCOUNT
const BTN_REMOVE_AUTHENTICATOR_APP = "[data-testid=totp-authenticator-trash]",
      CONFIRM_REMOVE_AUTHENTICATOR_APP = "[data-testid=totp-authenticator-termination-modal-actions-terminate-button]",
      BTN_TERMINATE_ALL_SESSION = "[data-componentid=user-active-sessions-terminate-modal-terminate-all-btn]";

// EDIT READ WRITE LDAP USERSTORE USERS
const TXT_UPDATE_SECONDORY_US_USER_PASSWORD = "[data-testid=user-mgt-edit-user-form-newPassword-input]";
const TXT_UPDATE_SECONDORY_US_USER_PASSWORD_CONFIRM = "[data-testid=user-mgt-edit-user-form-confirmPassword-input]";


// MAP CUSTOM ATTRIBUTE TO SECONDORY USERSTORE
const BTN_NEXT_CUSTOM_ATTRIBUTE = "[data-testid=local-claims-add-local-claims-wizard-next-button]",
      TXT_CUSTOM_MAPPED_ATTRIBUTE_SECONDORY_US =
      "[data-testid=local-claims-add-local-claims-wizard-mapped-attributes-form-store-name-input]";

// SELECT USERSTORE USERS
const CHECKBOX_SELECT_USERSTORE_USER = "[id=\"bccfb244-dc3e-11ec-9d64-0242ac120002\"]",
      DROP_DOWN_SELECT_USERSTORE = "[data-componentid=asgardeo-administrators-userstore-dropdown]",
      DROP_DOWN_USERSTORE_USER = "[data-testid=\"user-mgt-add-user-form-userstore-dropdown\"]";

const STEPPER = "[data-componentid=\"remote-userstore-create-page-stepper\"]";
const INPUT_USER_STORE_NAME = "[data-componentid=\"remote-user-store-create-general-details-form-field-name\"]";
const INPUT_USER_STORE_DESCRIPTION =
    "[data-componentid=\"remote-user-store-create-general-details-form-field-description\"]";
const INPUT_USERNAME_MAPPING =
    "[data-componentid=\"remote-user-store-create-configurations-form-field-usernameMapping\"]";
const INPUT_USER_ID_MAPPING = "[data-componentid=\"remote-user-store-create-configurations-form-field-userIdMapping\"]";
const RADIO_ACCESS_TYPE_READ_WRITE =
    "[data-componentid=\"remote-user-store-create-general-details-form-access-type-read-write-option-radio-button\"]";
const RADIO_ACCESS_TYPE_READ_ONLY =
    "[data-componentid=\"remote-user-store-create-general-details-form-access-type-read-only-option-radio-button\"]";
const BTN_NEXT = "[data-componentid=\"remote-userstore-create-page-next-button\"]";
const BTN_FINISH = "[data-componentid=\"remote-userstore-create-page-finish-button\"]";

const EDIT_PAGE_HEADER = "[data-componentid=\"remote-user-store-edit-page-layout-page-header-title\"]";
const INPUT_ATTR_NICK_NAME =
    "[data-componentid=\"configuration-settings-local-attribute-mappings-http://wso2.org/claims/nickname-input\"]";
const INPUT_ATTR_FIRST_NAME =
    "[data-componentid=\"configuration-settings-local-attribute-mappings-http://wso2.org/claims/givenname-input\"]";
const INPUT_ATTR_MOBILE =
    "[data-componentid=\"configuration-settings-local-attribute-mappings-http://wso2.org/claims/mobile-input\"]";
const INPUT_ATTR_COUNTRY =
    "[data-componentid=\"configuration-settings-local-attribute-mappings-http://wso2.org/claims/country-input\"]";
const INPUT_ATTR_DOB =
    "[data-componentid=\"configuration-settings-local-attribute-mappings-http://wso2.org/claims/dob-input\"]";
const BTN_CONFIGURATION_SETTINGS_UPDATE = "[data-componentid=\"configuration-settings-update-button\"]";
const BTN_CHECK_CONNECTION = "[data-componentid=\"run-agent-step-check-connection-button\"]";

/* It contains all the locators of the User Store Manage page */
export class UserStoreManagerPage {

    /**
     * Returns a Cypress chainable object that represents the user store wizard stepper.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreWizardStepper(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(STEPPER);
    }

    /**
     * It returns a Cypress chainable object that represents the create user store button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreMainButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_STORE_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the page header.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getUserStorePageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_STORE_PAGE_HEADER);
    }

    /**
     * It returns a Cypress chainable object that represents the user store name input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_USER_STORE_NAME);
    }

    /**
     * It returns a Cypress chainable object that represents user store description.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreDescriptionInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_USER_STORE_DESCRIPTION);
    }

    /**
     * This function returns the user store access type radio btn for Read/Write.
     * @returns The element with the id of readWriteAccessType.
     */
    public static getUserStoreAccessTypeReadOnlyRadioBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_ACCESS_TYPE_READ_ONLY);
    }

    /**
     * This function returns the user store access type radio btn for Read/Write.
     * @returns The element with the id of readWriteAccessType.
     */
    public static getUserStoreAccessTypeReadWriteRadioBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_ACCESS_TYPE_READ_WRITE);
    }

    /**
     * It returns a Cypress chainable object that represents user store create wizard next button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreCreateNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEXT);
    }

    /**
     * It returns a Cypress chainable object that represents user store username attribute input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserNameAttributeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_USERNAME_MAPPING);
    }

    /**
     * It returns a Cypress chainable object that represents user store user id attribute input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserIdAttributeInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_USER_ID_MAPPING);
    }

    /**
     * It returns a Cypress chainable object that represents user store create wizard finish button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreCreateFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FINISH);
    }

    /**
     * It returns a Cypress chainable object that represents user store edit page title.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreEditPageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_STORE_EDIT_PAGE_TITLE);
    }

    /**
     * It returns a Cypress chainable object that represents user store configuration settings update button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConfigurationSettingsUpdateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIGURATION_SETTINGS_UPDATE);
    }

    /**
     * It returns a Cypress chainable object that represents user store success alert message box.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSuccessAlertMessageBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_SUCCESS_MESSAGE_TESTID);
    }

    /**
     * It returns a Cypress chainable object that represents user store success alert message.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USER_STORE_EDIT_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents user store success alert message.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUserStoreEditPageHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_PAGE_HEADER);
    }

    /**
     * It returns a Cypress chainable object that represents the General anchor.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getGeneralTabButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(HTMLKeyWordsConstants.HTML_ANCHOR_TAG, GENERAL_ANCHOR);
    }

    /**
     * It returns a Cypress chainable object that represents the attribute segment.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeSegment(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTES_SEGMENT);
    }

    /**
     * It returns a Cypress chainable object that represents the nickname attribute.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getNickNameAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ATTR_NICK_NAME);
    }

    /**
     * It returns a Cypress chainable object that represents the first name attribute.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getFirstNameAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ATTR_FIRST_NAME);
    }

    /**
     * This function returns the country attribute input field.
     * @returns The country attribute input field.
     */
    public static getCountryAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ATTR_COUNTRY);
    }

    /**
     * This function returns the mobile attribute input field.
     * @returns A chainable object of type JQuery<HTMLElement>.
     */
    public static getMobileAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ATTR_MOBILE);
    }

    /**
     * This function returns the birth date input element.
     * @returns A chainable object of type JQuery<HTMLElement>.
     */
    public static getBirthDateAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_ATTR_DOB);
    }

    /**
     * It returns a Cypress chainable object that represents the first name attribute.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getUpdateDescriptionInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UPDATE_DESCRIPTION);
    }

    /**
     * It returns a Cypress chainable object that represents the attribute mappings anchor.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeMappingsTabButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(HTMLKeyWordsConstants.HTML_ANCHOR_TAG, ATTRIBUTE_MAPPING_ANCHOR);
    }

    /**
     * It returns a Cypress chainable object that represents the attribute mappings anchor.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSetupGuideTabButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(HTMLKeyWordsConstants.HTML_ANCHOR_TAG, SETUP_GUIDE_ANCHOR);
    }

    /**
     * It returns a Cypress chainable object that represents the installation token.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getInstallationToken(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOKEN_DIV);
    }

    /**
     * It returns a Cypress chainable object that represents the connection success button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConnectionSuccessButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONNECTION_SUCCESS_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the download button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getDownloadButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DOWNLOAD_BUTTON);
    }

    /**
     *  It returns a Cypress chainable object that represents the generate token button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getGenerateTokenButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(HTMLKeyWordsConstants.HTML_BUTTON, UserStoreConstants.GENERATE_TOKEN_TEXT);
    }

    /**
     *  It returns a Cypress chainable object that represents the generate token button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getCheckConnectionButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CHECK_CONNECTION);
    }

    /**
     *  It returns a Cypress chainable object that represents the admin user delete a configured userstore
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static deleteRemoteUserstore(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DELETE_REMOTE_USERSTORE);
    }

    /**
     *  It returns a Cypress chainable object that represents the admin user confirms delete userstore operation
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static confirmCheckboxDeleteRemoteUserstore(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_DELETE_CONFIRMATION);
    }

     /**
     *  It returns a Cypress chainable object that represents the get userstore delete confirmation button
     * @returns A chainable object of type JQuery<HTMLElement>
     */
      public static getBtnUserStoreDeleteConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_DELETE_REMOTE_USERSTORE);
    }


    /**
     *  It returns a Cypress chainable object that represents the success alert on userstore delete
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getSuccessAlertOnRemoteUserstoreDelete(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALERT_SUCCESS_DELETE_USERSTORE);
    }

    /**
     *  It returns a Cypress chainable object that represents remove totp authenticator app from myaccount
     * after authenticating with TOTP
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static removeAuthenticatorFromMyaccount(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_REMOVE_AUTHENTICATOR_APP);
    }

    /**
     *  It returns a Cypress chainable object that represents confirm remove totp authenticator app from myaccount
     * security section after authenticating with TOTP
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static confirmRemoveAuthenticatorFromMyaccount(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONFIRM_REMOVE_AUTHENTICATOR_APP);
    }

    /**
     *  It returns a Cypress chainable object that represents terminate all session after totp authenticator app 
     * removed from myaccount security section
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static terminateAllSessionFromMyaccount(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TERMINATE_ALL_SESSION);
    }

    /**
     * This function returns the TOTP Authenticator section displayed for a secondory userstore user
     * @returns The authenticator remove trsh icon
     */
     public static getAuthenticatorRemoveIcon(): string {

        return BTN_REMOVE_AUTHENTICATOR_APP;
    }

    /**
     * This function returns the update option for secondary userstore user password
     * @returns The authenticator remove trsh icon
     */
     public static updateSecondoryUserstoreUserPassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_UPDATE_SECONDORY_US_USER_PASSWORD);
    }

    /**
     * This function returns the update option for secondary userstore user password confirm field
     * @returns The user password confirm field
     */
    public static updateSecondaryUserstoreUserPasswordConfirm(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_UPDATE_SECONDORY_US_USER_PASSWORD_CONFIRM);
    }

    /**
     * This function returns the custom attribute next button
     * @returns The authenticator remove trsh icon
     */
     public static getButtonNext(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_NEXT_CUSTOM_ATTRIBUTE);
    }

    /**
     * This function returns the custom attibute mapping field for secondory userstore
     * @returns The authenticator remove trsh icon
     */
     public static getSecondoryUsertCustomAttributeMapping(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_CUSTOM_MAPPED_ATTRIBUTE_SECONDORY_US);
    }

    /**
     * This function returns the checkbox to select the secondory userstore user
     * @returns The authenticator remove trsh icon
     */
     public static selectSecondoryUserstoreUser(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_SELECT_USERSTORE_USER);
    }
    
    /**
     * This function returns the dropdown to select the userstore
     * @returns The authenticator remove trsh icon
     */
     public static getDropDownToSelectUserstore(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROP_DOWN_SELECT_USERSTORE);
    }

        /**
     * This function returns the dropdown to select the userstore users
     * @returns The user store user drop down element
     */
        public static getUserStoreSelectionDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

            return cy.get(DROP_DOWN_USERSTORE_USER);
        }
}
