/**
 * Copyright 2021 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import * as LandingPageLocators from "../../../support/utils/landing-page.js";

//LOCATORS
const BTN_SAMPLE_APP_LOGIN = "button[class=\"btn primary\"]",
    BTN_AUTHORIZED_URL_ADD = "button[class=\"ui orange right floated button\"]",
    TXT_HEADER_CONSENT_PAGE = "div[class=\"field light-font\"]",
    CLAIM_LIST = "div[class=\"claim-list\"]",
    TXT_UNCHECKED_CLAIM = "Address",
    TXT_ADDRESS_INPUT = "[data-testid=\"request-claims-page-form-field-claim-"
     + "http://wso2.org/claims/emailaddress-input\"]",
    CHECKBOX_CLAIM_CHECKED = "div[class=\"ui checkbox checked read-only disabled claim-cb\"]",
    DIV_CLAIM_LIST = "div[class=\"border-gray margin-bottom-double\"]",
    BTN_ALLOW_CONSENT = "input[id=\"approve\"]",
    BTN_CLAIM_INPUT_CONTINUE = "[data-testid=\"request-claims-page-continue-button\"]",
    LBL_SAMPLE_HEADER="h1",
    QR_CODE_IMAGE = "canvas[id=\"qrcanv\"]",
    ERROR_MESSAGE = "div[class=\"ui negative message\"]",
    OTP_INPUT_FIELDS = "div[class=\"equal width fields\"]",
    LBL_SAMPLE_MAIN_PAGE_HEADER="h2";

//TEXT VALUES
const CONSENT_PAGE_TXT = "wants to access your account.",
    CONSENT_0_TXT = "Last Name",
    CONSENT_1_TXT = "Email",
    CONSENT_2_TXT = "First Name",
    INPUT_ADDRESS = "NO 20, Test Address";

class reactSampleApplication {

    /**
     * This method is used to click login in the react sample application
     */
    static reactSampleApplicationLogin() {

       // cy.wait(7000);
        cy.get(BTN_SAMPLE_APP_LOGIN, { timeout : 7000 }).click();
        LandingPageLocators.authenticateWithReCaptcha();
    }

    /**
     * //TODO: This metho have to move to under console page
     * This method is used to add Authorised URLs to the Sample application
     */
    static addAuthorizedUrls() {

        //cy.wait(7000);
        cy.get(BTN_AUTHORIZED_URL_ADD,  { timeout : 7000 }).click();
    }

    /**
     * This method is used to login business user to react sample application
     * @param  {String} email - user email
     * @param  {String} password - user password
     */
    static loginToReactSampleApp(email, password) {

        cy.log(email);
        cy.log(password);

        LandingPageLocators.loginUsernameInputField().type(email);
        LandingPageLocators.loginPasswordInputField().type(password, { log: false });
        LandingPageLocators.signInButton().click({ delay: 70 });
        LandingPageLocators.authenticateWithReCaptcha();
    }

    /**
     * This method enters the email of the business user to complete the identifier-first step.
     *
     * @param {string} email - The email of the user.
     */
    static logUsingIdentifierFirstInToReactSampleApp(email) {
        cy.log(email);
        LandingPageLocators.loginUsernameInputField().type(email);
        LandingPageLocators.continueOnIdentifierFirst().click({ delay: 70 });
    }

    /**
     * This method is used to validate the consent page
     */
    static validateConsentPage(appName) {

       // cy.wait(7000);
        cy.get(TXT_HEADER_CONSENT_PAGE, { timeout : 7000 }).should("contain", CONSENT_PAGE_TXT);
    }

    /**
     * This method is used to verify user consent
     */
     static verifyUserConsent() {

        cy.get(CLAIM_LIST).contains(TXT_UNCHECKED_CLAIM).within(() => {
            // Verifying if not mandotory claim is unchecked.
            cy.root().closest('div').find('input').should('not.have.attr', 'checked');
        });
        cy.get(DIV_CLAIM_LIST).within(() => {
            cy.get(CHECKBOX_CLAIM_CHECKED).should('have.length', 3);
        });
        cy.wait(2000);
    }

    /**
     * This method is used to allow user consent
     */
    static allowUserConsent() {

        cy.get(BTN_ALLOW_CONSENT).click({ timeout: 7000 });

    }

    /**
     * This method is used to get react sample login header
     */
    static reactSampleHeaderValue(value) {

        cy.get(LBL_SAMPLE_HEADER, { timeout : 5000 }).invoke("text").then((text)=>{
            expect(text.trim()).eq(value);
          });
    }

    /**
     * This method is used to get react sample mainpage header
     */
    static reactSampleLoggedHeaderValue(value) {

        cy.get(LBL_SAMPLE_MAIN_PAGE_HEADER).invoke("text").then((text)=>{
            expect(text.trim()).contain(value);
          });
    }

    /**
     * This method is used to get redirected page
     */
    static reactSampleLoggedRedirectPage(redirectLink) {

        cy.get('a[href="'+redirectLink+'"]').should('have.attr', 'target', '_blank');
    }

    /**
     * This method is used to get react sample main page header
     */
    static clickLogoutBtn(){

        cy.contains("Logout").click({timeout:5000});
    }

    /**
     * This method is used to wait until Java sample application Login button visible
     */
     static visitSampleApplicationURL() {
        cy.get(BTN_SAMPLE_APP_LOGIN).then(($loginButton) => {
            cy.wrap($loginButton)
                .should('be.visible')
                //.wait(7000)
                .contains('Login');
        });
    }

    /**
     * This method is used to add the address input for the claim
     */
    static addAddressClaimInput() {
        cy.get(TXT_ADDRESS_INPUT).clear().type(INPUT_ADDRESS);
        cy.get(BTN_CLAIM_INPUT_CONTINUE).click();
    }

    /**
     * This method is used to retrieve the QR code image
     */
    static getQRCodeImage() {

         return cy.get(QR_CODE_IMAGE);
    }

    /**
     * Get the Authentication Error Message
     */
    static getAuthenticationErrorMsg() {

        return cy.get(ERROR_MESSAGE);
    }

    /**
     * Get the Authentication Error Message
     */
     static getOTPInputFields() {

        return cy.get(OTP_INPUT_FIELDS);
    }

}

export default reactSampleApplication;
