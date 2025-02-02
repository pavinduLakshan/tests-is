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

const BTN_CONTINUE = "button[class=\"ui primary fluid large button\"]",
BTN_ALLOW = "input[class=\"ui primary fluid large button\"]",
APP_NAME_TEXT="strong[id=\"app-name\"]",
COPYRIGHT = "a[class=\"item no-hover\"]",
PRIVACY_POLICY = "a[id=\"privacy-policy\"]",
TERMS_OF_SERVICE = "a[id=\"terms-of-service\"]",
PASSWORD_RECOVERY_LINK = "[data-testid=\"login-page-password-recovery-button\"]",
COOKIE_POLICY_ACCEPT_BTN = "[data-testid=\"cookie-consent-banner-confirm-button\"]",
COOKIE_POLICY_LINK_TXT = "[data-testid=\"cookie-policy-link\"]",
BTN_FORGET_PASSWORD = "[data-testid=login-page-password-recovery-button]",
CENTERED_LAYOUT_FOOTER = "main[class=\"center-segment\"] > footer[class=\"footer\"]",
RIGHT_ALIGNED_LAYOUT_TAGLINE = 
    "main[class=\"center-segment\"] > div:first-child > div[class=\"tag-line-text\"] > p",
LEFT_IAMGE_LAYOUT_SIDE_IMAGE = 
    "div[class*=\"page-wrapper\"] > div[class=\"left-side\"] > img[class=\"left-panel-image\"]",
RIGHT_IAMGE_LAYOUT_SIDE_IMAGE = 
    "div[class*=\"page-wrapper\"] > div[class=\"right-side\"] > img[class=\"right-panel-image\"]",
BTN_PROCEED = "button[class=\"ui primary fluid large button\"]";    


export class BrandingConfiguredLoginPage  {

/**
 * This function return the  branding colour of the sign in button.
 */
public static verifySignInButtonColour() : Cypress.Chainable {

    return  cy.get(BTN_CONTINUE);
}

/**
 * This function return the copyright text added through branding configs.
 */
public static brandingCopyright() :Cypress.Chainable{

    return cy.get(COPYRIGHT);
}

/**
 * This function return the forget password button.
 */
public static getBtnForgetPassword() :Cypress.Chainable {

    return cy.get(BTN_FORGET_PASSWORD);
}

/**
 * It returns the password recovery link
 * @returns The password recovery link.
 */
public static getPasswordRecoveryLink() :Cypress.Chainable {

    return cy.get(PASSWORD_RECOVERY_LINK);
}

/**
 * This function returns the text of the cookie policy link
 * @returns The text of the link to the cookie policy.
 */
public static getCookiePolicyLinkTxt() :Cypress.Chainable {

    return cy.get(COOKIE_POLICY_LINK_TXT);
}

/**
 * This function returns the privacy policy link
 * @returns The Privacy Policy link
 */
public static getPrivacyPolicy() :Cypress.Chainable {

    return cy.get(PRIVACY_POLICY);
}

/* A function that returns the cookie policy accept button. */
public static getCookiePolicyAcceptBtn() :Cypress.Chainable {

    return cy.get(COOKIE_POLICY_ACCEPT_BTN);
}

/**
 * This function returns the "Allow" button on the cookie consent banner
 * @returns The element with the id of "consent-allow-button"
 */
public static getAllowConsent() :Cypress.Chainable {

    return cy.get(BTN_ALLOW);
}

/**
 * This function returns the text of the app name
 * @returns The Cypress.Chainable object.
 */
public static getAppName() :Cypress.Chainable {

    return cy.get(APP_NAME_TEXT);
}

/**
 * This function returns the left image layout side image
 * @returns The left image layout side image.
 */
public static getLeftImageLayout() :Cypress.Chainable {

    return cy.get(LEFT_IAMGE_LAYOUT_SIDE_IMAGE);
}

/**
 * This function returns the terms of service link
 * @returns The element with the id of terms-of-service.
 */

public static getTermOfService() :Cypress.Chainable {

    return cy.get(TERMS_OF_SERVICE);
}

/**
 * Check whether the page layout is centered layout.
 */
  public static verifyCenteredLayout():Cypress.Chainable {

   return cy.get(CENTERED_LAYOUT_FOOTER);
}

/**
 * Check whether the page layout is right aligned layout.
 */
 public static  verifyRightAlignedLayout():Cypress.Chainable {

    return cy.get(RIGHT_ALIGNED_LAYOUT_TAGLINE);
 }

/**
 * This function returns the right image layout side image.
 * @returns The left image layout side image.
 */
 public static getRightImageLayout() :Cypress.Chainable {

    return cy.get(RIGHT_IAMGE_LAYOUT_SIDE_IMAGE);
}

/**
 * This function return the  branding colour of the proceed button.
 */
public static verifyProceedButtonColour() : Cypress.Chainable {

    return  cy.get(BTN_PROCEED);
}
}
