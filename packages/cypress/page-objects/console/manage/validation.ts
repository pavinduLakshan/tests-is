/*
 *   Copyright (c) 2023 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

/* global JQuery */

const
    PASSWORD_VALIDATION_CONFIGURE_LINK = "[data-testid=validation-config-page-settings-section-card-primary-button]",
    PASSWORD_VALIDATION_MINIMUM_LENGTH = "[data-testid=validation-config-edit-page-min-length]",
    PASSWORD_VALIDATION_MINIMUM_LENGTH_INPUT = "input[name=\"minLength\"]",  
    PASSWORD_VALIDATION_MAXIMUM_LENGTH = "[data-testid=validation-config-edit-page-max-length]",
    PASSWORD_VALIDATION_MAXIMUM_LENGTH_INPUT = "input[name=\"maxLength\"]",
    PASSWORD_VALIDATION_NUMBER_LENGTH = "[data-componentid=validation-config-edit-page-min-numbers]",
    PASSWORD_VALIDATION_NUMER_LENGTH_INPUT = "input[name=\"minNumbers\"]",
    PASSWORD_VALIDATION_UNIQUE_CHR = "[data-testid=validation-config-edit-page-unique-chr-enable]",
    PASSWORD_VALIDATION_UNIQUE_CHR_CHECK_BOX = "input[name=\"uniqueCharacterValidatorEnabled\"][type=\"checkbox\"]",
    PASSWORD_VALIDATION_UNUQUE_CHR_LENGTH = "[data-testid=validation-config-edit-page-min-unique-chr]",
    PASSWORD_VALIDATION_UNIQUE_CHR_INPUT = "input[name=\"minUniqueCharacters\"]",
    PASSWORD_VALIDATION_REPEATED_CHR = "[data-testid=validation-config-edit-page-consecutive-chr-enable]",
    PASSWORD_VALIDATION_REPEATED_CHR_CHECK_BOX = "input[name=\"consecutiveCharacterValidatorEnabled\"]" + 
        "[type=\"checkbox\"]",
    PASSWORD_VALIDATION_REPEATED_CHR_LENGTH = "[data-testid=validation-config-edit-page-max-consecutive-chr]",
    PASSWORD_VALIDATION_REPEATED_CHR_INPUT = "input[name=\"maxConsecutiveCharacters\"]",
    LBL_ERROR_MSG = "div[class=\"ui pointing above prompt label\"]",
    BTN_VALIDATION_CONFIG_SAVE = "[data-testid=validation-config-edit-page-submit-button]";

export class PasswordValidationManager {

    /**
     * To get the password validation configuration section.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getPasswordValidationConfigure(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_CONFIGURE_LINK);
    }

    /**
     * To get the password validation configuration min limit field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getMinLimit(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_MINIMUM_LENGTH);
    }

    /**
     * To get the password validation configuration min limit input.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getMinLimitInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_MINIMUM_LENGTH_INPUT);
    }

    /**
     * To get the password validation configuration max limit field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getMaxLimit(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_MAXIMUM_LENGTH);
    }

    /**
     * To get the password validation configuration max limit input.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getMaxLimitInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_MAXIMUM_LENGTH_INPUT);
    }

    /**
     * To get the password validation configuration min number field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getMinNumberLimit(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_NUMBER_LENGTH);
    }

    /**
     * To get the password validation configuration min number input.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getMinNumberLimitInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_NUMER_LENGTH_INPUT);
    }

    /**
     * To get the password validation configuration unique character field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUniqueChr(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_UNIQUE_CHR);
    }

    /**
     * To get the password validation configuration unique character checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUniqueChrCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_UNIQUE_CHR_CHECK_BOX);
    }

    /**
     * To get the password validation configuration unique character field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUniqueChrLength(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_UNUQUE_CHR_LENGTH);
    }

    /**
     * To get the password validation configuration unique character input.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getUniqueChrLengthInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_UNIQUE_CHR_INPUT);
    }

    /**
     * To get the password validation configuration repeated character section.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getRepeatedChr(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_REPEATED_CHR);
    }

    /**
     * To get the password validation configuration repeated character checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getRepeatedChrCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_REPEATED_CHR_CHECK_BOX);
    }

    /**
     * To get the password validation configuration repeated character field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getRepeatedChrLength(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_REPEATED_CHR_LENGTH);
    }

    /**
     * To get the password validation configuration repeated character input.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getRepeatedChrLengthInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PASSWORD_VALIDATION_REPEATED_CHR_INPUT);
    }

    /**
     * To get the password validation configuration save button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getValidatinConfigSaveBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_VALIDATION_CONFIG_SAVE);
    }

    /**
     * To get the password validation configuration error message.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(LBL_ERROR_MSG);
    }
}
