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

/// <reference types="cypress" />

// LOCATORS LOGIN PAGE
const ASGARDEO_SAMPLE_APP_ORGANIZATION_INPUT = "[id=\"ORG_NAME\"]",
    ASGARDEO_SAMPLE_APP_ORGANIZATION_EMAIL_INPUT = "[id=\"login_hint\"]",
    ASGARDEO_SAMPLE_APP_ORGANIZATION_SUBMIT_BUTTON_TEXT = "Submit",
    ASGARDEO_SAMPLE_APP_ORGANIZATION_SUBMIT_BUTTON = "input[id=\"submitButton\"]",
    ASGARDEO_SAMPLE_APP_EMAIL_INPUT = "[data-testid=\"login-page-username-input\"]",
    ASGARDEO_SAMPLE_APP_PASSWORD_INPUT = "[data-testid=\"login-page-password-input\"]",
    ASGARDEO_SAMPLE_APP_ORGANIZATION_LOGIN_BUTTON = "[data-testid=\"login-page-sign-in-with-SSO\"]",
    ASGARDEO_SAMPLE_APP_SIGN_IN_BUTTON = "[data-testid=\"login-page-continue-login-button\"]",
    ASGARDEO_SAMPLE_APP_CREATE_ACCOUNT_BUTTON = "[data-testid=\"login-page-create-account-button\"]",
    ASGARDEO_SAMPLE_APP_FORGET_PASSWORD_BUTTON = "[data-testid=\"login-page-password-recovery-button\"]",
    ASGARDEO_SAMPLE_APP_HEADER_TITLE = "Sign In",
    ASGARDEO_SAMPLE_APP_REMEMBER_ME_CHECK_BOX = "[data-testid=\"login-page-remember-me-checkbox\"]",
    ASGARDEO_SAMPLE_APP_LOGOUT_CONFIRM_BUTTON = "[class=\"ui primary fluid large button\"]",
    ASGARDEO_SAMPLE_APP_LOGOUT_CONFIRM_BUTTON_TEXT = "Yes",
    ASGARDEO_SAMPLE_APP_LOGIN_ERROR_MESSAGE = "[data-testid=login-page-error-message]",
    ASGARDEO_RECAPTCHA_TITLE = "iframe[title='recaptcha challenge expires in two minutes']",
    ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN = "div[data-testid=language-selector-dropdown]",
    ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_ENGLISH = "div[data-value=\"en_US\"]",
    ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_FRENCH = "div[data-value=\"fr_FR\"]",
    ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_SPANISH = "div[data-value=\"es_ES\"]",
    ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_GERMAN = "div[data-value=\"de_DE\"]",
    ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_PORTUGUESE = "div[data-value=\"pt_PT\"]",
    ASGARDEO_SAMPLE_APP_LOGIN_PAGE_HEADING = "h3[class=\"ui header\"]",
    ASGARDEO_SAMPLE_APP_REGISTER_PAGE_HEADING = "h3[data-testid=\"self-registration-username-request-page-header\"]",
    CUSTOM_ATTRIBUTE_INPUT="[data-testid=\"request-claims-page-form-field-claim-http://wso2.org/claims/attr_custom_local-input\"]";

// LOCATORS IDENFIER PAGE
const ASGARDEO_SAMPLE_APP_IDENTIFIER_EMAIL_INPUT = "[id=\"usernameUserInput\"]",
    ASGARDEO_SAMPLE_APP_IDENTIER_CONTINUE_BUTTON = "[data-testid=\"identifier-auth-continue-button\"]";

// LOCATORS CONSENT MANAGEMENT
const ASGARDEO_SAMPLE_APP_INITIAL_CONSENT_CHECK_BOX = "input[id*=\"consent\"][type=\"checkbox\"]",
    ASGARDEO_B2B_SAMPLE_APP_INITIAL_CONSENT_CHECK_BOX = "input[id=\"select_all_claims\"][type=\"checkbox\"]",
    ASGARDEO_SAMPLE_APP_CONSENT_ALLOW_BTN = "input[id=\"approve\"][value=\"Allow \"]",
    SAML_SAMPLE_APP_CONSENT_ALLOW_BTN = "input[class=\"ui primary fluid large button\"]",
    ASGARDEO_SAMPLE_APP_CONSENT_DENY_BTN = "[type=\"reset\"][value=\"Deny\"]",
    ASGARDEO_SAMPLE_APP_CONSENT_HEADER_TITLE = "[id=\"app-name\"]",
    ADD_CLAIM_VALUE_INPUT = "input[name=\"claim_mand_",
    ADD_CLAIM_VALUE_CONTINUE_BTN = "[data-testid=\"request-claims-page-continue-button\"]",
    ALL_ATTRIBUTE_SELECT_CHECKBOX = "input[id=\"select_all_claims\"][type=\"checkbox\"]",
    ENTER_NEW_ATTR_PLACEHOLDER = "[placeholder=\"Enter attr_custom_local\"]",
    ASGARDEO_SAMPLE_APP_CONSENT_CHECKBOX_COMMON = "[class=\"ui checkbox claim-cb\"]",
    CONSENT_ALLOW_BTN = "[id=\"approve\"]",
    CONSENT_ATTRIBUTE_CHECKLIST_ID = "#claim_sections";

// LOCATORS UNAUTHORIZED ERROR
const UNAUTHORIZED_ERROR_HEAD = ".header",
    UNAUTHORIZED_ERROR_DESCRIPTION = ".portal-tagline-description";

/**
 * This class is used to maintain asgardeo sample app elements.
 */
export class AsgardeoSampleAppLoginPage {

    /**
     * This function returns the asgardeo sample app's organization login button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleOrganizationLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_ORGANIZATION_LOGIN_BUTTON);
    }

    /**
     * This function returns the asgardeo sample app's organization submit button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleOrganizationSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_ORGANIZATION_SUBMIT_BUTTON)
            .contains(ASGARDEO_SAMPLE_APP_ORGANIZATION_SUBMIT_BUTTON_TEXT);
    }

    /**
     * This function returns the asgardeo sample app's sign in button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleSignInButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_SIGN_IN_BUTTON);
    }

    /**
     * This function returns the title of the asgardeo sample app header.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} 
     */
    public static getAsgardeoSampleHeaderTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_HEADER_TITLE);
    }

    /**
    * This function returns the email input element of the Asgardeo sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSampleEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_EMAIL_INPUT);
    }

    /**
    * This function returns the organziation input element of the Asgardeo sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSampleOrganizationInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_ORGANIZATION_INPUT);
    }

    /**
    * This function returns the organziation input element of the Asgardeo sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSampleOrganizationEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_ORGANIZATION_EMAIL_INPUT);
    }

    /**
    * This function returns the identifier email input element of the Asgardeo sample app.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAsgardeoSampleIdentifierEmailInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_IDENTIFIER_EMAIL_INPUT);
    }

    /**
     * This function returns the asgardeo sample app's sign in button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleIdentifierContinueInButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_IDENTIER_CONTINUE_BUTTON);
    }

    /**
     * This function returns the password input element in the asgardeo sample app.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSamplePasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_PASSWORD_INPUT);
    }

    /**
     * This function returns the forget password link element from the Asgardeo sample app
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleForgetPasswordLink(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_FORGET_PASSWORD_BUTTON);
    }

    /**
     * This function returns the remember me checkbox element on the asgardeo sample app login page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleRememberMeCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_REMEMBER_ME_CHECK_BOX);
    }

    /**
     * This function returns the create account button element from the asgardeo sample app.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleCreateAccountBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_CREATE_ACCOUNT_BUTTON);
    }

    /**
     * This function returns the initial checkbox element on the Asgardeo sample app consent page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleConsentInitialCheckBox(): string
    {

        return ASGARDEO_SAMPLE_APP_INITIAL_CONSENT_CHECK_BOX;
    }

    /**
     * This function returns the initial checkbox element value on the Asgardeo B2B sample app consent page.
     * @returns {string}
     */
    public static getAsgardeoB2BSampleConsentInitialCheckBoxValue(): string {
 
         return ASGARDEO_B2B_SAMPLE_APP_INITIAL_CONSENT_CHECK_BOX;
    }

    
    /**
     * This function returns the consent allow button element from the Asgardeo sample app.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleConsentAllowButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_CONSENT_ALLOW_BTN);
    }

    /**
     * The function returns the value of the ASGARDEO_SAMPLE_APP_CONSENT_ALLOW_BTN constant.
     * @returns The method `getAsgardeoSampleConsentAllowButtonValue()` is returning the value of the
     * element `ASGARDEO_SAMPLE_APP_CONSENT_ALLOW_BTN`.
     */
    public static getAsgardeoSampleConsentAllowButtonValue(): string {

        return ASGARDEO_SAMPLE_APP_CONSENT_ALLOW_BTN;
    }

    /**
     * This function returns the consent allow button element from the Asgardeo saml sample app.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getSAMLSampleConsentAllowButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SAML_SAMPLE_APP_CONSENT_ALLOW_BTN);
    }

    /**
     * This function returns the consent deny button element from the Asgardeo sample app.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleConsentDenyButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_CONSENT_DENY_BTN);
    }

    /**
     * This function returns the title of the asgardeo sample app concent page header.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} 
     */
     public static getAsgardeoSampleConsentHeaderTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_CONSENT_HEADER_TITLE);
     }

     /* This method is used to validate unauthorized error message.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static unauthorizedErrorMsg(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UNAUTHORIZED_ERROR_HEAD);
    }

    /**
     * This method is used to validate unauthorized error message description.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static unauthorizedErrorDescription(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UNAUTHORIZED_ERROR_DESCRIPTION);
    }

    /**
     * This function returns the asgardeo add claim page button continue.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getContinueBtnAfterAddClaimValue(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_CLAIM_VALUE_CONTINUE_BTN);
    }
    
    /**
    * This function returns the asgardeo claim page claim input filed.
    * @param {string} : claimAttribute = Claim attribute URI
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getAddClaimVluesInputField(attributeName : string): Cypress.Chainable<JQuery<HTMLElement>>{
    
        return cy.get(ADD_CLAIM_VALUE_INPUT + attributeName + "\"]");
    }

    /**
    * This function returns the asgardeo sample app select all claim checkbox.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getSelectAllUserAttributesCheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ALL_ATTRIBUTE_SELECT_CHECKBOX);
    }

    /**
    * This function returns the authentication failure error message of the SP login page.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
      public static getSampleAppLoginError(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_SAMPLE_APP_LOGIN_ERROR_MESSAGE);
    }
    
    /**
     * This function returns the recaptcha title DOM element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getAsgardeoRecaptchaTitle() {

        return ASGARDEO_RECAPTCHA_TITLE;
    }

    /**
     * This function returns the Asgardeo sample app logout confirm button DOM element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleAppLogoutConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_SAMPLE_APP_LOGOUT_CONFIRM_BUTTON)
        .contains(ASGARDEO_SAMPLE_APP_LOGOUT_CONFIRM_BUTTON_TEXT);
    }
    
    /**
     * This function returns the first checkbox element on the Asgardeo sample app consent page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoSampleFirstConsentCheckBox(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_SAMPLE_APP_CONSENT_CHECKBOX_COMMON) ;
    }

    /**
     * This function returns the Asgardeo Language Switcher dropdown DOM element.
     */
    public static getAsgardeoLanguageSelector(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN);
    }

    /**
     * This function returns the Asgardeo Language Switcher dropdown English option DOM element.
     */
    public static getAsgardeoLanguageSwitcherEnglishOptionItem(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_ENGLISH);
    }

    public static getAsgardeoLanguageSwitcherDropdownEnglishOption(): string {

        return ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_ENGLISH;
    }

    /**
     * This function returns the Asgardeo Language Switcher dropdown French option DOM element.
     */
    public static getAsgardeoLanguageSwitcherFrenchOptionItem(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_FRENCH);
    }

    public static getAsgardeoLanguageSwitcherDropdownFrenchOption(): string {

        return ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_FRENCH;
    }

    /**
     * This function returns the Asgardeo Language Switcher dropdown Spanish option DOM element.
     */
    public static getAsgardeoLanguageSwitcherSpanishOptionItem(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_SPANISH);
    }

    public static getAsgardeoLanguageSwitcherDropdownSpanishOption(): string {

        return ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_SPANISH;
    }

    /**
     * This function returns the Asgardeo Language Switcher dropdown Portuguese option DOM element.
     */
    public static getAsgardeoLanguageSwitcherPortugueseOptionItem(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_PORTUGUESE);
    }

    public static getAsgardeoLanguageSwitcherDropdownPortugueseOption(): string {

        return ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_PORTUGUESE;
    }

    /**
     * This function returns the Asgardeo Language Switcher dropdown German option DOM element.
     */
    public static getAsgardeoLanguageSwitcherGermanOptionItem(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_GERMAN);
    }

    public static getAsgardeoLanguageSwitcherDropdownGermanOption(): string {

        return ASGARDEO_LANGUAGE_SELECTOR_DROPDOWN_ITEM_GERMAN;
    }

    /**
     * This function returns the Asgardeo Login page heading DOM element.
     */
    public static getAsgardeoLoginPageHeading(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_SAMPLE_APP_LOGIN_PAGE_HEADING);
    }

    /**
     * This function returns the Asgardeo Register page heading DOM element.
     */
    public static getAsgardeoRegisterPageHeading(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ASGARDEO_SAMPLE_APP_REGISTER_PAGE_HEADING);
    }

    /**
    * This function returns the custom attribute input field.
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getCustomAttributeInput() {

        return cy.get(CUSTOM_ATTRIBUTE_INPUT);
    }

    /**
    * This function returns the enter attr_custom_local placeholder
    * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
    */
    public static getNewAttributePlaceholder(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ENTER_NEW_ATTR_PLACEHOLDER);
    }

    /**
     * This function returns the consent allow button.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getConsentAllowButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONSENT_ALLOW_BTN);
    }
    
    /**
     * This function returns a Cypress chainable object representing a jQuery HTMLElement with the ID
     * specified by the CONSENT_ATTRIBUTE_CHECKLIST_ID constant.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} 
     */
    public static getConsentAttributeListID(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONSENT_ATTRIBUTE_CHECKLIST_ID);
    }

    /**
     * The function returns the consent attribute checklist ID.
     * @returns The method is returning the value of the constant variable
     * CONSENT_ATTRIBUTE_CHECKLIST_ID, which is a string.
     */
    public static getConsentAttributeListIDValue(): string {

        return CONSENT_ATTRIBUTE_CHECKLIST_ID;
    }

    /**
     * The function returns a Cypress chainable object representing a checkbox element for consent
     * attribute.
     * @returns A Cypress.Chainable<JQuery<HTMLElement>> object is being returned.
     */
    public static getConsentAttributeCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ASGARDEO_SAMPLE_APP_INITIAL_CONSENT_CHECK_BOX);
    }

    /**
     * This function returns the initial checkbox element on the Asgardeo B2B sample app consent page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAsgardeoB2BSampleConsentInitialCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {
 
        return cy.get(ASGARDEO_B2B_SAMPLE_APP_INITIAL_CONSENT_CHECK_BOX);
    }
}
