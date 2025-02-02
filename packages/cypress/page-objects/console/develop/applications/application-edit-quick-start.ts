/**
 * Copyright 2022 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/// <reference types="Cypress" />

// Locators - Application Edit Page - Quick Start Tab
const REACT_TECH_CARD_BUTTON = "[data-componentid=\"technology-card-react-quickstart-button\"]";
const BTN_JAVA_SCRIPT_APP = "[data-componentid=\"technology-card-java-script-quickstart-button\"]";
const RADIO_INTEGRATE_YOUR_APPLICATION = "[data-testid=\"integration-mode-selection-card-radio\"]";
const RADIO_TRY_OUT_A_SAMPLE = "[data-testid=\"try-out-mode-selection-card-radio\"]";
const BTN_DOWNLOAD_REACT_SAMPLE = "[data-testid=\"undefined-download-react-sample\"]";
const BTN_DOWNLOAD_JAVA_SCRIPT_SAMPLE = "[data-testid=\"undefined-download-js-sample\"]";
const PARAGRAPH_SEGMENT_SELECTOR = "[data-componentid=\"custom-markdown-paragraph\"]";
const CODE_MIRROR_CLASS = ".CodeMirror-code";
const CODE_SEGMENT_SELECTOR = "[data-componentid=\"custom-markdown-pre\"]";

// LOCATORS SAMPLE APP & CONFIGS
const SAMPLE_APP_TRY_OUT_AUTH_CODE_SEGMENT = ".application-sample-config-editor";
const SAMPLE_APP_TRY_OUT_AUTH_CONFIG_COPY_ICON = "[data-testid=\"generic-icon\"]";
const SAMPLE_APP_TRY_OUT_AUTH_CONFIG_CHECKED_ICON = "#check-icon";
const SAMPLE_APP_TRY_OUT_CLIPBOARD_NAVIGATOR = "navigator.clipboard";

// LOCATORS JAVA SAMPLE APPLICATION
const JAVA_OIDC_TECH_CARD_BUTTON = "[data-componentid=\"technology-card-java-ee-quickstart-button\"]";
const JAVA_SAMPLE_AUTH_CODE_SEGMENT = ".code-segment";
const JAVA_SAMPLE_AUTH_CODE_COPY_ICON = "[data-testid=\"generic-icon\"]";
const JAVA_CHANGE_TOMCAT_URL_SEGMENT = ".field";

/**
 * Class containing Asgardeo Console Application Edit Page - Quick Start Tab Page Objects
 * Console -> Develop -> Applications -> <application> -> Quick Start Tab
 */
export class ApplicationQuickStartPage {

    /**
     * This function returns the React Tech Type Card Button.
     * @returns The element with the id of "react-tech-card-button"
     */
    public static getReactTechTypeCardButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(REACT_TECH_CARD_BUTTON);
    }

    /**
     * Get the quickstart java script app button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getBtnJavaScriptApp(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_JAVA_SCRIPT_APP);
    }

    /**
     * Get the radio button for integrate your application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRadioIntegrateYourApplication(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_INTEGRATE_YOUR_APPLICATION).find("input");
    }

    /**
     * Get the radio button for try out a sample application
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getRadioTryOutASample(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(RADIO_TRY_OUT_A_SAMPLE).find("input");
    }

    /**
     * Get the download react sample button button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDownloadReactSample(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DOWNLOAD_REACT_SAMPLE);
    }

    /**
     * Get the download java script sample button button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getBtnDownloadJavaScriptSample(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_DOWNLOAD_JAVA_SCRIPT_SAMPLE);
    }

    /**
     * This function returns the code segment for the sample app's try out authentication
     * configurations
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSampleAppTryOutAuthConfigCodeSegment(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SAMPLE_APP_TRY_OUT_AUTH_CODE_SEGMENT);
    }


    /**
     * This function returns the copy icon for for the sample app's try out authentication
     * configurations code segment.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSampleAppTryOutAuthConfigCopyIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SAMPLE_APP_TRY_OUT_AUTH_CONFIG_COPY_ICON);
    }

    /**
     * This function returns the checked icon for for the sample app's try out authentication
     * configurations code segment.
     * This Checked icon appears only after clicking on the configs copy icon.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSampleAppTryOutAuthConfigCheckedIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SAMPLE_APP_TRY_OUT_AUTH_CONFIG_CHECKED_ICON);
    }

    /**
     * It returns the element of clipboard navigator in sample app tryout section.
     * @returns { Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getSampleAppTryOutClipBoardNavigator(): string {

        return SAMPLE_APP_TRY_OUT_CLIPBOARD_NAVIGATOR;
    }

    /**
     * This function returns the Java sample app auth config code segment
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getJavaSampleAppAuthConfigCodeSegment(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(JAVA_SAMPLE_AUTH_CODE_SEGMENT);
    }

    /**
     * This function returns the element that is used to copy the Java Sample App Auth Code
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getJavaSampleAppAuthConfigCopIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(JAVA_SAMPLE_AUTH_CODE_COPY_ICON);
    }

    /**
     * This function returns the element that is the button for the Java OIDC Tech Card
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getJavaOIDCTechTypeCardButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(JAVA_OIDC_TECH_CARD_BUTTON);
   }

    /**
      * This function returns the element that has the input to change the tomcat url
      * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
      */
    public static getTomcatURLChangeSegment(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(JAVA_CHANGE_TOMCAT_URL_SEGMENT);
    }

    /**
     * This function returns the selector of the copied check icon
     */    
    public static getCheckIconSelector(): string {

        return SAMPLE_APP_TRY_OUT_AUTH_CONFIG_CHECKED_ICON; 
    }

    /**
     * Get the code element in Guide
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getGuideCodeElement(name: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(PARAGRAPH_SEGMENT_SELECTOR, name)
            .nextAll(CODE_SEGMENT_SELECTOR)
            .first()
            .find(CODE_MIRROR_CLASS)
            .invoke("text");
    }
}
