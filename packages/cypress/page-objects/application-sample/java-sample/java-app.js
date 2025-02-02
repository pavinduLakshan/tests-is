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
    CLAIM_LIST = "div[class=\"claim-list\"]",
    BTN_ALLOW_CONSENT = "input[id=\"approve\"]",
    BTN_CONTINUE = "button[class=\"ui primary fluid large button\"]",
    TXT_LAST_NAME = "[data-testid=\"request-claims-page-form-field-"
        + "claim-http://wso2.org/claims/lastname-input\"]",
    TXT_GIVEN_NAME = "[data-testid=\"request-claims-page-form-field-"
        + "claim-http://wso2.org/claims/givenname-input\"]",
    TXT_UNCHECKED_CLAIM = "Address",
    CHECKBOX_CLAIM_CHECKED = "div[class=\"ui checkbox checked read-only disabled claim-cb\"]",
    DIV_CLAIM_LIST = "div[class=\"border-gray margin-bottom-double\"]",
    LBL_SAMPLE_MAIN_PAGE_HEADER = "h2",
    LBL_SAMPLE_MAIN_PAGE_SUB_HEADER = "h3";

class javaSampleApplication {

    /**
     * This method is used to click login in the java sample application
     */
    static javaSampleApplicationLogin() {

        //cy.wait(7000);
        cy.get(BTN_SAMPLE_APP_LOGIN, { timeout : 7000 } ).click();
        LandingPageLocators.authenticateWithReCaptcha();
    }

    /**
    * This method use to click the continue button
    */
    static clickBtnContinue() {

        cy.get(BTN_CONTINUE).click();
    }

    /**
     * This method is used to login business user to java sample application
     * @param  {String} email - user email
     * @param  {String} password - user password
     */
    static loginToJavaSampleApp(email, password) {

        cy.log(email);
        cy.log(password);

        LandingPageLocators.loginUsernameInputField().type(email);
        LandingPageLocators.loginPasswordInputField().type(password, { log: false });
        LandingPageLocators.signInButton().click({ delay: 70 });
        LandingPageLocators.authenticateWithReCaptcha();
        cy.wait(7000);
    }

    /**
     * This method is used to verify user consent
     */
    static verifyUserConsent() {

        // comment-out checking unchecked attributes are its removed from UI
        // cy.get(CLAIM_LIST).contains(TXT_UNCHECKED_CLAIM).within(() => {
        //     // Verifying if not mandotory claim is unchecked.
        //     cy.root().closest('div').find('input').should('not.have.attr', 'checked');
        // });
        cy.get(DIV_CLAIM_LIST).within(() => {
            cy.get(CHECKBOX_CLAIM_CHECKED).should('have.length', 3);
        });
        //cy.wait(7000);
    }

    /**
     * This method is used to allow user consent
     */
    static allowUserConsent() {

        cy.get(BTN_ALLOW_CONSENT, { timeout : 7000 } ).click({ timeout: 7000 });
        
    }

    /**
     * This method is used to get java sample main page header
     */
    static clickLogoutBtn() {

        cy.contains("Logout").click({ timeout: 5000 });
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
     * This method is used to add mandotory claims required values
     */
    static addRequiredFeildsValues(userData) {
        cy.get(TXT_LAST_NAME).type(userData.firstName);
        cy.get(TXT_GIVEN_NAME).type(userData.lastName);
        this.clickBtnContinue();
    }

    /**
     * This method is used to get java sample mainpage header
     */
    static javaSamplAttributesPageHeader(userName) {

        cy.get(LBL_SAMPLE_MAIN_PAGE_HEADER).invoke("text").then((text) => {
            expect(text.trim()).contain('Authentication Response');
        });
        cy.get(LBL_SAMPLE_MAIN_PAGE_SUB_HEADER).invoke("text").then((text) => {
            expect(text.trim()).contain('Your app has successfully connected with Asgardeo and the user is logged in.');
            expect(text.trim()).contain('This is the user information returned from Asgardeo.');
        });
    }

    /**
     * This method is used to verify application claims
     */
    static javaSamplAttributesVerify(email, userData) {
        cy.get('.json-container').invoke("text").then((text) => {
            expect(text.trim()).contain(userData.firstName);
            expect(text.trim()).contain(userData.lastName);
            expect(text.trim()).contain(email);
        });
    }
}

export default javaSampleApplication;
