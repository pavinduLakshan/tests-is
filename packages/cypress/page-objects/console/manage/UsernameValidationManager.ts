/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

const
    USERNAME_VALIDATION_CONFIGURE_LINK = "[data-testid=account-login-page-section-card-primary-button]",
    USERNAME_VALIDATION_CUSTOM_MINIMUM_LENGTH_INPUT = "[data-testid=username-validation-edit-page-min-length]",
    USERNAME_VALIDATION_CUSTOM_MAXIMUM_LENGTH_INPUT = "[data-testid=username-validation-edit-page-max-length]",
    USERNAME_VALIDATION_CUSTOM_OPTION = 
        "[data-componentid=\"username-validation-edit-page-customType-radio\"]",
    USERNAME_VALIDATION_ALPHANUMERIC_CHECKBOX =
        "[data-componentid=\"username-validation-edit-page-is-alphanumeric-only\"]",
    USERNAME_VALIDATION_EMAIL_OPTION = "[data-componentid=\"username-validation-edit-page-emailType-radio\"]",
    BTN_VALIDATION_CONFIG_SAVE = "[data-testid=username-validation-edit-page-submit-button]";

export class UsernameValidationManager {

    /**
     * To get the username validation configuration section.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUsernameValidationConfigure(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERNAME_VALIDATION_CONFIGURE_LINK);
    }

    /**
     * To get the username validation configuration alphanumeric min limit input.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUsernameMinLimitInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERNAME_VALIDATION_CUSTOM_MINIMUM_LENGTH_INPUT);
    }

    /**
     * To get the username validation configuration alphanumeric max limit input.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUsernameMaxLimitInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERNAME_VALIDATION_CUSTOM_MAXIMUM_LENGTH_INPUT);
    }

    /**
     * To get the username validation configuration alphanumeric option.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getCustomOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERNAME_VALIDATION_CUSTOM_OPTION);
    }

    /**
     * To get the username validation configuration alphanumeric checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAlphanumericCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERNAME_VALIDATION_ALPHANUMERIC_CHECKBOX);
    }

    /**
     * To get the username validation configuration email option.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEmailOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(USERNAME_VALIDATION_EMAIL_OPTION);
    }

    /**
     * To get the username validation configuration save button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUsernameValidatinConfigSaveBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_VALIDATION_CONFIG_SAVE);
    }
}
