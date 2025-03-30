/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="cypress" />

import { CustomTimeoutConfigs } from "@wso2iam/test-ts-core/configs";
import { HTMLKeyWordsConstants } from "@wso2iam/test-ts-core/constants";

//Locators
const TXT_SECURITY_TITLE = "[data-testid=page-layout-page-header-title]",

    // change password
    BTN_CHANGE_YOUR_PASSWORD = "[data-testid=change-password-settings-section-card-primary-button]",
    TXT_CURRENT_PASSWORD = "[data-testid=change-password-current-password-field]",
    TXT_NEW_PASSWORD = "[data-testid=change-password-new-password-field]",
    INPUT_CURRENT_PASSWORD = "input[placeholder=\"Enter the current password\"]",
    INPUT_NEW_PASSWORD = "input[placeholder=\"Enter the new password\"]",
    BTN_SHOW_PASSWORD = "i[class=\"eye disabled link icon\"]",
    BTN_SUBMIT_PASSWORD_UPDATE = "[data-testid=change-password-form-actions-group-submit-button]",
    BTN_CANCEL_PASSWORD_UPDATE = "[data-testid=change-password-form-actions-group-cancel-button]",
    BTN_CONFIRMATION_MODAL_CONTINUE = "[data-testid=change-password-confirmation-modal-actions-continue-button]",
    BTN_CONFIRMATION_MODAL_CANCEL = "[data-testid=change-password-confirmation-modal-actions-cancel-button]",

    // account recovery
    BTN_VIEW_RECOVERY_EMAIL = "[data-testid=account-recovery-component-settings-section-email-recovery-view-button]",
    TXT_RECOVERY_EMAIL =
        "[data-testid=account-recovery-component-settings-section-email-recovery-edit-section-form-email-field]",
    INPUT_RECOVERY_EMAIL = "input[placeholder=\"Enter the recovery email address\"]",
    BTN_DONE_RECOVERY_EMAIL = "[data-testid=account-recovery-component-settings-section-email-recovery--edit-section-" +
        "form-done-button]",

    // active sessions
    BTN_TERMINATE_ALL = "[data-testid=user-sessions-component-settings-section-user-sessions-terminate-all-button]",
    BTN_TERMINATE_CONFIRM = "button[class=\"ui primary button\"]",
    BTN_SHOW_MORE = "button[class=\"ui mini basic icon right labeled button session-detail-extension-button show-more-button\"]",
    BTN_TERMINATE = "[data-testid=user-sessions-component-list-edit-editing-" +
        "section-danger-zone-terminate-delete-button]",
    TABLE_ACTIVE_SESSIONS_CLASS = "div[class=\"ui padded grid\"]",
    BTN_EDIT_RECOVERY_EMAIL = "[data-testid=account-recovery-component-settings-section-email-recovery-edit-button]",
    BTN_SUBMIT_ACCOUNT = "[data-testid=account-recovery-component-settings-section-email-recovery-edit-section-form]",
    BTN_SIGNIN_SESSION_EXPIRED_PROMPT = "[data-testid=network-error-modal-confirm-button]",

    // Additional authentication
    TOTP_AUTHENTICATOR_VIEW_ICON = "[data-testid=\"totp-authenticator-view-button\"]",
    TOTP_AUTHENTICATOR_VIEW_ICON_DIV = "[class=\"right floated content\"]",
    QR_CODE_IMAGE_MODEL = "[data-testid=\"totp-authenticator-modals-scan-qrcode\"]",
    QR_CODE_MODEL_DIV = "[data-testid=\"totp-authenticator-modal\"]",
    TOTP_TOKEN_INPUT_CLASS = "div.six.column.row",
    QR_CODE_VERIFY_BUTTON = "[data-testid=\"totp-authenticator-modal-actions-primary-button\"]",
    TOTP_SUCCESS_CONTENT_MODEL = "p[class=\"success-content\"]",
    SUCCESSFULLY_AUTHENTICATED_MODEL_BUTTON = "Done",
    BACKUP_CODE_ELEMENT = "[data-componentid=\"backup-code-authenticator-modal-backup-code-1\"]",
    BACKUP_CODE_DOWNLOAD_BUTTON = "[data-componentid=\"backup-code-authenticator-modal-download-button\"]",
    BACKUP_CODE_MODAL_CLOSE_BUTTON = "[data-componentid=\"backup-code-authenticator-modal-actions-done-button\"]",
    TERMINATE_ALL_SESSION_BUTTON = "[data-componentid=\"user-active-sessions-" +
        "terminate-modal-terminate-all-btn\"]",
    TERMINATE_SESSION_CANCEL_BUTTON = "[data-componentid=\"user-active-sessions-terminate-modal-cancel-btn\"]",
    TOTP_REMOVE_BUTTON = "[data-testid=\"totp-authenticator-trash\"]",
    TOTP_REMOVE_CONFIRM_BUTTON = "[data-testid=\"totp-authenticator-termination-modal-actions-terminate-button\"]",
    NOTIFICATION_SECTION = "[class=\"notifications-wrapper\"]",
    BACKUP_CODE_REMAINING_LABEL = "[data-testid=\"backup-code-authenticator-remaining-count-label\"]",
    BACKUP_CODE_REGENERATE_BTN = "[data-testid=\"backup-code-authenticator-regenerate-button\"]",
    BACKUP_CODE_REGENERATE_CONFIRM_BTN = "[data-testid=\"backup-code-authenticator-regenerate-confirm-modal-actions" + 
        "-confirm-button\"]",
    BACKUP_CODE_ENABLE_BTN = "[data-testid=\"backup-code-authenticator-init-button\"]",
    ALL_SESSIONS_TERMINATE_CONFIRM_CHECKBOX = "[data-testid=\"all-sessions-terminate-confirmation-modal-assertion-checkbox\"]",
    All_SESSIONS_TERMINATE_CONFIRM_BUTTON = "[data-testid=\"all-sessions-terminate-confirmation-modal-confirm-button\"]",
    SESSION_DROPDOWN = "[data-componentid=\"segmented-accordion-title-chevron\"]",
    TERMINATE_SINGLE_SESSION = "[data-testid=\"user-sessions-terminate-button-delete-button\"]",
    SINGLE_SESSION_TERMINATE_CONFIRM_CHECKBOX = "[data-testid=\"session-terminate-confirmation-modal-assertion-checkbox\"]",
    SINGLE_SESSION_TERMINATE_CONFIRM_BUTTON = "[data-testid=\"session-terminate-confirmation-modal-confirm-button\"]";

/**
 * Class containing Asgardeo My Account Security Page.
 * My Account -> Security
 */
export class AccountSecurityPage {

    /* A static readonly variable that is used to identify the terminate current session banner. */
    public static readonly TERMINATE_CURRENT_SESSION_BANNER_TEST_ID =
        "[data-componentid=\"user-active-sessions-terminate-modal\"]";

    public static readonly TERMINATE_ALL_SESSIONS_TEST_ID = 
        "[data-testid=\"user-sessions-terminate-all-button\"]";

    /**
     * To get Security page main title.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtSecurityTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_SECURITY_TITLE);
    }

    /**
     * To get change password button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnChangeYourPassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CHANGE_YOUR_PASSWORD);
    }

    /**
     * To get current password input field text.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtCurrentPassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_CURRENT_PASSWORD);
    }

    /**
     * To get new password input field text.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtNewPassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_NEW_PASSWORD);
    }

    /**
     * To get current password input field.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputCurrentPassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_CURRENT_PASSWORD);
    }

    /**
     * To get new password input field.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputNewPassword(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_NEW_PASSWORD);
    }

    /**
     * To get show password button in input fields.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnShowPassword(index: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SHOW_PASSWORD).eq(index);
    }

    /**
     * To get update password submit button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnSubmitPasswordUpdate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUBMIT_PASSWORD_UPDATE);
    }

    /**
     * To get update password cancel button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnCancelPasswordUpdate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CANCEL_PASSWORD_UPDATE);
    }

    /**
     * To get confirm password update modal continue button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnConfirmationModalContinue(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRMATION_MODAL_CONTINUE);
    }

    /**
     * To get confirm password update modal cancel button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnConfirmationModalCancel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRMATION_MODAL_CANCEL);
    }

    /**
     * To get view recovery email button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnViewRecoveryEmail(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_VIEW_RECOVERY_EMAIL);
    }

    /**
     * To get recovery email input text.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTxtRecoveryEmail(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_RECOVERY_EMAIL);
    }

    /**
     * To get recovery email input field.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getInputRecoveryEmail(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_RECOVERY_EMAIL);
    }

    /**
     * To get recovery email done button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDoneRecoveryEmail(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DONE_RECOVERY_EMAIL);
    }

    /**
     * To get terminate all button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnTerminateAll(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TERMINATE_ALL);
    }

    /**
     * To get terminate all button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnTerminateConfirm(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TERMINATE_CONFIRM);
    }

    /**
     * To get show more button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnShowMore(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SHOW_MORE);
    }

    /**
     * To get terminate button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnTerminate(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_TERMINATE);
    }

    /**
     * To get Active Sessions table rows.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTableActiveSessions(index: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TABLE_ACTIVE_SESSIONS_CLASS).eq(1).children().eq(index);
    }

    /**
     * This function returns the element that is used to edit the recovery email
     * @returns The element with the id of "edit-recovery-email"
     */
    public static getRecoveryEmailEdit(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_EDIT_RECOVERY_EMAIL);
    }

    /**
     * This function returns the recovery email input element
     * @returns The element with the id of "recoveryEmail"
     */
    public static getRecoveryEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TXT_RECOVERY_EMAIL);
    }

    /**
     * This function returns the submit button for the account recovery form
     * @returns The element with the id of "btnSubmitAccount"
     */
    public static getAccountRecoverySubmit(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SUBMIT_ACCOUNT);
    }

    /**
     *  To get sign in button via session expierd prompt.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSignInWhenSessionExpired(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SIGNIN_SESSION_EXPIRED_PROMPT);
    }

    /**
     * This function returns the TOTP Authenticator View Icon div element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTotpAuthenticatorViewIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_AUTHENTICATOR_VIEW_ICON_DIV,
            { timeout: CustomTimeoutConfigs.getMyAccountTOTPrViewIconTimeOut() })
            .find(TOTP_AUTHENTICATOR_VIEW_ICON);
    }

    /**
     * This function returns the QR code image element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getQrCodeImage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(QR_CODE_IMAGE_MODEL);
    }

    /**
     * It returns a JQuery object that represents the div element that contains the QR code model.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getQrCodeModelDiv(): Cypress.Chainable<JQuery<HTMLDivElement>> {

        return cy.get(QR_CODE_MODEL_DIV).find(HTMLKeyWordsConstants.HTML_DIV);
    }

    /**
     * It returns a Cypress chainable object that represents the TOTP input field
     * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    public static getTotpInputField(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(TOTP_TOKEN_INPUT_CLASS);
    }

    /**
    * This function returns the QR Code Verify button.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getQrCodeVerifyButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(QR_CODE_VERIFY_BUTTON);
    }

    /**
     * This function returns the TOTP success content model
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTOTPSuccessContentModel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_SUCCESS_CONTENT_MODEL);
    }

    /**
     * This function returns the button element of the modal that appears after the user has
     * successfully authenticated with TOTP
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTOTPConfigurationMessageModalButton(): Cypress.Chainable<undefined>{

        return cy.contains(SUCCESSFULLY_AUTHENTICATED_MODEL_BUTTON);
    }

    /**
    * This function returns the backup code element.
    * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
    */
    public static getBackupCode(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(BACKUP_CODE_ELEMENT);
    }

    /**
    * This function returns the backup code download button.
    * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
    */
    public static getBackupCodesDownloadButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(BACKUP_CODE_DOWNLOAD_BUTTON);
    }

    /**
    * This function returns the close button of the backup code modal.
    * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
    */
    public static getBackUpCodesModalCloseButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(BACKUP_CODE_MODAL_CLOSE_BUTTON);
    }

    /**
    * This function returns the text of the banner that appears when a user attempts to log in to a
    * session that is already in progress.
    * @returns {Cypress.Chainable<JQuery<HTMLInputElement>>}
    */
    public static getTerminateCurrentSessionBannerText(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(this.TERMINATE_CURRENT_SESSION_BANNER_TEST_ID);
    }

    /**
    * It returns a Cypress chainable object that represents the terminate all session button.
    * @returns {Cypress Chainable<JQuery<HTMLInputElement>>}
    */
    public static getTerminateAllSessionButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(TERMINATE_ALL_SESSION_BUTTON);
    }
    
    /**
    * It returns a Cypress chainable object that represents the terminate session cancel button.
    * @returns {Cypress Chainable<JQuery<HTMLInputElement>>}
    */
    public static getTerminateSessionCancelButton(): Cypress.Chainable<JQuery<HTMLInputElement>> {

        return cy.get(TERMINATE_SESSION_CANCEL_BUTTON);
    }

    /**
     * It returns the TOTP remove button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTOTPRemoveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_REMOVE_BUTTON);
    }

    /**
    * This function returns the TOTP remove confirm button.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The element with the id of totp-remove-confirm-button.
    */
    public static getTOTPRemoveConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_REMOVE_CONFIRM_BUTTON);
    }

    /**
     * This function returns the notification message that appears when a user removes a TOTP from
     * their account.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>} The element with the id of notification-section.
     */
    public static getTOTPRemovedMessage(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NOTIFICATION_SECTION);
    }
    
    /**
     * Returns the label that shows the remaining backup codes amount.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>} The element with the id of the remaining label.
     */
    public static getRemainingBackupCodesLabel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BACKUP_CODE_REMAINING_LABEL);
    }
    
    /**
     * Returns the backup codes regenerate button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>} The element with the id of the regenerate button.
     */
    public static getBackupCodesRegenerateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BACKUP_CODE_REGENERATE_BTN);
    }

    /**
     * Returns the backup codes regenerate confirmation button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>} The element with the id of the regenerate confirm button.
     */
    public static getBackupCodesRegenerateConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BACKUP_CODE_REGENERATE_CONFIRM_BTN);
    }
    
    /**
     * Returns the backup codes enable button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>} The element with the id of the backup codes enable button.
     */
    public static getBackupCodesEnableButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TOTP_AUTHENTICATOR_VIEW_ICON_DIV,
            { timeout: CustomTimeoutConfigs.getMyAccountTOTPrViewIconTimeOut() })
            .find(BACKUP_CODE_ENABLE_BTN);
    }

        /**
     * To get terminate all sessions button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTerminateAllSessions(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(this.TERMINATE_ALL_SESSIONS_TEST_ID);
    }

    /**
     * To get terminate all sessions confirm checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTerminateAllSessionsCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ALL_SESSIONS_TERMINATE_CONFIRM_CHECKBOX);
    }

    /**
     * To get terminate all sessions confirm button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTerminateAllSessionsConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(All_SESSIONS_TERMINATE_CONFIRM_BUTTON);
    }

    /**
     * To get session dropdown button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSessionDropdownButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SESSION_DROPDOWN);
    }

    /**
     * To get terminate single session button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTerminateSingleSessionButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TERMINATE_SINGLE_SESSION);
    }

    /**
     * To get terminate single session confirm checkbox
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTerminateSingleSessionConfirmCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SINGLE_SESSION_TERMINATE_CONFIRM_CHECKBOX);
    }

    /**
     * To get terminate single session confirm button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getTerminateSingleSessionConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SINGLE_SESSION_TERMINATE_CONFIRM_BUTTON);
    }


}
