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

import { CypressKeywords } from "../../../constants/cypress-keywords";

export class PasswordRecoveryPage {

    public static readonly CHECKBOX_EMAIL_LINK_BASED_RECOVERY =
        "[data-testid=\"password-recovery-edit-form-email-link-based-recovery\"]";
    public static readonly CLASS_EMAIL_LINK_TOGGLE_ENABLED = "ui checked checkbox";
    public static readonly CLASS_EMAIL_LINK_TOGGLE_DISABLED = "ui checkbox";

    public static readonly CHECKBOX_SMS_BASED_RECOVERY =
        "[data-testid=\"password-recovery-edit-form-sms-based-recovery\"]";
    public static readonly CLASS_SMS_TOGGLE_ENABLED = "ui checked checkbox";
    public static readonly CLASS_SMS_TOGGLE_DISABLED ="ui checkbox";

    public static readonly INPUT_FIELD_OTP_LENGTH = "input[name=\"smsOtpLength\"]";
    public static readonly INPUT_FIELD_SMS_OTP_TIMEOUT = "input[name=\"smsOtpExpiryTime\"]";

    public static readonly BUTTON_UPDATE = "[data-testid=\"password-recovery-edit-form-submit-button\"]";
    public static readonly ALERT_SUCCESS = "[data-testid=\"alert-success-message\"]";

    /**
     * This function returns the enable email link based recovery checkbox class name.
     * @returns The class name string.
     * @param status should be either "enabled" or "disabled".
     */
    public static getEmailLinkToggleButtonClass(status: string): string {

        return ((status === CypressKeywords.ENABLED) ?
        PasswordRecoveryPage.CLASS_EMAIL_LINK_TOGGLE_ENABLED : PasswordRecoveryPage.CLASS_EMAIL_LINK_TOGGLE_DISABLED);
    }

    /**
     * This function returns the enable sms based recovery checkbox class name.
     * @returns The class name string.
     * @param status should be either "enabled" or "disabled".
     */
    public static getSmsToggleButtonClass(status: string): string {

        return ((status === CypressKeywords.ENABLED) ?
        PasswordRecoveryPage.CLASS_SMS_TOGGLE_ENABLED : PasswordRecoveryPage.CLASS_SMS_TOGGLE_DISABLED);
    }

    /**
     * This function returns the checkbox element to enable/disable email link based
     * password recovery.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEnableEmailLinkBasedRecoveryCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PasswordRecoveryPage.CHECKBOX_EMAIL_LINK_BASED_RECOVERY);
    }

    /**
     * This function returns the checkbox element to enable/disable sms based
     * password recovery.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEnableSMSBasedRecoveryCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PasswordRecoveryPage.CHECKBOX_SMS_BASED_RECOVERY);
    }

    /**
     * This function returns the element of update button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PasswordRecoveryPage.BUTTON_UPDATE);
    }

    /**
     * This function returns the success alert banner element.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSuccessNotification(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PasswordRecoveryPage.ALERT_SUCCESS);
    }

    /**
     * This function returns the input field element for OTP length input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getOtpLengthInputField(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(PasswordRecoveryPage.INPUT_FIELD_OTP_LENGTH);
    }
}
