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
import { ConsoleGettingStarted } from "../../getting-started";

    const TXT_BRANDING_SITE_TITLE = "[data-componentid=\"custom-text-fields-site_title\"]",
    TXT_COPYRIGHT = "[data-componentid=\"custom-text-fields-copyright\"]",
    TXT_CONTACT_EMAIL = "[data-componentid=\"branding-preference-general-details-form-support-email\"]",
    BTN_BRANDING_GENERAL_SAVE = "[data-componentid=\"branding-preference-general-details-form-submit-button\"]",
    BTN_BRANDING_DESIGN_SAVE = "[data-componentid=\"branding-preference-design-form-submit-button\"]",
    BTN_BRANDING_ADVANCE_SAVE = "[data-componentid=\"branding-preference-advanced-form-submit-button\"]",
    BTN_BRANDING_CUSTOM_TEXT_SAVE = "[data-componentid=\"branding-preference-custom-text-form-submit-button\"]",
    TXT_LOGO_URL = "[data-componentid=\"branding-preference-design-form-logo-url\"]",
    TXT_LOGO_DESCRIPTION = "[data-componentid=\"branding-preference-design-form-logo-alt-text\"]",
    TXT_FAVICON_URL = "[data-componentid=\"branding-preference-design-form-favicon-url\"]",
    TXT_PRIMARY_COLOR = "[data-componentid=\"branding-preference-design-form-primary-color\"]",
    TXT_PRIVACY_POLICY = "div[arialabel=\"Branding preference privacy policy URL\"]",
    TXT_TERMS_OF_SERVICE = "[data-testid=\"branding-preference-advanced-form-tos-url\"]",
    TXT_COOKIE_POLICY = "[data-testid=\"branding-preference-advanced-form-cookie-policy-url\"]",
    INPUT_SITE_TITLE = "input[name=\"site_title\"]",
    INPUT_COPYRIGHT = "textarea[name=\"copyright\"]",
    INPUT_SUPPORT_EMAIL = "input[name=\"organizationDetails.supportEmail\"]",
    INPUT_PRIMARY_COLOR = "input[name=\"colors.primary\"]",
    INPUT_PRIVACY_POLICY = "input[name=\"urls.privacyPolicyURL\"]",
    INPUT_TREAMS_OF_SERVICES = "input[name=\"urls.termsOfUseURL\"]",
    INPUT_COOKIE_POLICY = "input[name=\"urls.cookiePolicyURL\"]",
    BTN_BRANDING_UNPUBLISH = "[data-componentid=\"branding-page-danger-zone-unpublish-delete-button\"]",
    ALERT = "alert",
    ALERT_DISMISS_BUTTON = "span[class=\"notification-dismiss\"]",
    ALERT_SUCCESS_MESSAGE = "[data-testid=alert-success-message]",
    ALERT_WARNING_MESSAGE = "[data-testid=alert-warning-message]",
    BTN_SAMPLE_SIGN_IN = "button[class=\"ui primary fluid large button\"]",
    FOOTER_MENU = "a[class=\"item no-hover\"]",
    BTN_BRANDING_REVERT = "[data-componentid=\"branding-page-danger-zone-delete-button\"]",
    TAB_DEVELOP = "[data-testid=\"resource-tabs\"]",
    CHECKBOX_BRANDING_REVERT = "[data-componentid=\"branding-page-branding-preference-"
        + "revert-confirmation-modal-assertion-checkbox\"]",
    BTN_BRANDING_REVERT_CONFIRM = "[data-componentid=branding-page-branding-preference-"
        + "revert-confirmation-modal-confirm-button]",
    IMAGES_ACCORDION = "[data-componentid=\"branding-preference-design-form-images-accordion-item\"]",
    COLOR_PALLATTE_ACCORDION = "[data-componentid=\"branding-preference-design-form-color-palette-accordion-item\"]",
    TXT_SIDE_IMAGE_URL = "[data-componentid=\"branding-preference-design-form-side-image-url\"]",
    TXT_SIDE_IMAGE_DESCRIPTION = "[data-componentid=\"branding-preference-design-form-side-image-alt-text\"]",
    BTN_SIDE_PANEL_BRANDING = "[data-testid=side-panel-items-branding]",
    RECOVERY_FORM = "#recoverySubmit",
     SUPPORT_EMAIL = "[data-testid=password-recovery-resend-support-email]",
    CARET_ICON = "i[class=\"caret left icon primary\"]",
    BTN_LEFT_IMAGE = "[data-componentid=\"branding-preference-design-form-left-image-layout-swatch\"]",
    BTN_LIGHT_THEME = "[data-componentid=\"branding-preference-design-form-LIGHT-theme-swatch\"]",
    CHECKBOX_BRANDING_CONFIRMATION = 
    "[data-componentid=branding-page-branding-feature-confirmation-modal-assertion-checkbox]",
    BTN_BRANDING_CONFIRMATION = 
    "[data-componentid=branding-page-branding-feature-confirmation-modal-confirm-button]",
    BRANDING_DESIGN_TAB = "[data-componentid=branding-preference-design-tab]",
    APPLICATION_BRANDING_MODE = "[data-componentid=branding-page-application-mode-button]",
    APPLICATION_DROPDOWN = "[data-componentid=branding-page-application-dropdown]";
    const APP_DROPDOWN_OPTION = "[role=option]";

export class BrandingPage {

    public static readonly BRANDING_DEVELOP_TAB: string = "[data-testid=\"resource-tabs\"]";
    public static readonly IMAGES_ACCORDION = 
      "[data-componentid=\"branding-preference-design-form-images-accordion-item\"]";
    public static readonly COLOR_PALLATTE_ACCORDION = 
      "[data-componentid=\"branding-preference-design-form-color-palette-accordion-item\"]"
    public static readonly  LAYOUT_SWATCH = "div[data-componentid=\"layout-swatch\"]";

  /**
   * This function returns the application options in the dropdown list.
   */
  public static getApplications(): Cypress.Chainable<JQuery<HTMLElement>> {

      return cy.get(APP_DROPDOWN_OPTION);
  }

  /**
   * This function returns the application branding mode tab.
   */
  public static getApplicationBrandingMode(): Cypress.Chainable<JQuery<HTMLElement>> {

      return cy.get(APPLICATION_BRANDING_MODE);
  }

  /**
   * This function returns the application branding mode tab.
   */
  public static getApplicationDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

      return cy.get(APPLICATION_DROPDOWN);
  }

  /**
   * This function returns the branding section of the side panel.
   */
  public static getBrandingSidePanelBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

    return ConsoleGettingStarted.GetGroupedSidePanelItem(
      BTN_SIDE_PANEL_BRANDING,
      ConsoleGettingStarted.getCustomizationGroupLink()
    );
  }

  /**
   * This function return the update sucessfull update.
   */
  public  static getUpdateSuccessAlert() :Cypress.Chainable {

      return cy.get(ALERT_SUCCESS_MESSAGE); 
  }

  /**
   * This function return the update warning message.
   */
  public static getUpdateWarningMessage() :Cypress.Chainable {

    return cy.get(ALERT_WARNING_MESSAGE); 
  }

  /**
   * This function return the image accordion.
   */
  public  static getImageAccordion() :Cypress.Chainable {

      return cy.get(IMAGES_ACCORDION); 
  }

  /**
   * This function return the color pallette accordion.
   */
  public  static getColorPalletteAccordion() :Cypress.Chainable {

      return cy.get(COLOR_PALLATTE_ACCORDION); 
  }

  /**
   * This function returns the site title text.
   */
  public  static getSiteTitle() :Cypress.Chainable {

      return cy.get(TXT_BRANDING_SITE_TITLE); 
  }

  /**
   * This function returns the text of the copyright notice at the bottom of the page.
   */
  public  static getCopyRightText() :Cypress.Chainable {

    return cy.get(TXT_COPYRIGHT); 
  }

/**
 * This function returns the contact email textbox element.
 */
  public  static getContactEmail() :Cypress.Chainable {

    return cy.get(TXT_CONTACT_EMAIL);
  }

  /**
   * This function returns the cypress chainable object for the general branding save button.
   */
  public  static getGeneralBrandingSaveBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_GENERAL_SAVE); 
  }

  /**
   * This function returns the cypress chainable object for the Save button on the Design Branding page.
   */
  public  static  getDesignBrandingSaveBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_DESIGN_SAVE); 
  }

  /**
   * This function returns the cypress chainable object for the advance branding save button.
   */
  public  static  getAdvanceBrandingSaveBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_ADVANCE_SAVE); 
  }

  /**
   * This function returns the cypress chainable object for the custom text save button.
   */
  public  static  getCustomTextSaveBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_CUSTOM_TEXT_SAVE); 
  }

  /**
   * This function returns the URL of the logo.
   */
  public  static getLogoURL() :Cypress.Chainable {

    return cy.get(TXT_LOGO_URL); 
  }

  /**
   * This function returns the text of the logo description.
   */
  public  static getLogoDescription() :Cypress.Chainable {

    return cy.get(TXT_LOGO_DESCRIPTION); 
  }

  /**
   * This function returns the favicon URL textbox element.
   */
  public  static getFavivonURL() :Cypress.Chainable {

    return cy.get(TXT_FAVICON_URL); 
  }

  /**
   * This function returns the text of the primary color.
   */
  public  static getPrimaryColorTxt() :Cypress.Chainable {

    return cy.get(TXT_PRIMARY_COLOR); 
  }

  /**
   * It returns a Cypress chainable object that will get the text of the privacy policy link.
   * @returns Cypress.Chainable
   */
  public  static getPrivacyPolicy() :Cypress.Chainable {

    return cy.get(TXT_PRIVACY_POLICY); 
  }

  /**
   * It returns the text of the Terms of Service link.
   */
  public  static getTOS() :Cypress.Chainable {

    return cy.get(TXT_TERMS_OF_SERVICE); 
  }

  /**
   * It returns the text of the cookie policy.
   */
  public  static getCookiePolicy() :Cypress.Chainable {

    return cy.get(TXT_COOKIE_POLICY); 
  }

  /**
   * This function returns the site title input field.
   */
  public  static getSitTitleInput() :Cypress.Chainable {

    return cy.get(INPUT_SITE_TITLE); 
  }

  /**
   * This function returns the copyright input element.
   */
  public  static getCopyrightInput() :Cypress.Chainable {

    return cy.get(INPUT_COPYRIGHT); 
  }

  /**
   * This function returns the primary color input element
   * @returns The input element with the id of "primaryColor".
   */
  public  static getPrimaryColorInput() :Cypress.Chainable {

    return cy.get(INPUT_PRIMARY_COLOR); 
  }

  /**
   * `getSupportEmailInput()` returns the `<input>` element with the `id` attribute value of
   * `supportEmail`.
   */
  public  static getSupportEmailInput() :Cypress.Chainable {

    return cy.get(INPUT_SUPPORT_EMAIL); 
  }

  /**
   * This function returns the privacy policy input element.
   */
  public  static getPrivacyPolicyInput() :Cypress.Chainable {

    return cy.get(INPUT_PRIVACY_POLICY); 
  }

  /**
   * This function returns the cookie policy input element.
   */
  public  static getCookiePolicyInput() :Cypress.Chainable {

    return cy.get(INPUT_COOKIE_POLICY); 
  }

  /**
   * This function returns the branding unpublish button.
   */
  public  static getUnpublishButtonBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_UNPUBLISH); 
  }

  /**
   * This function returns the alert button.
   */
  public  static getAlert() :Cypress.Chainable {

    return cy.dataTestId(ALERT); 
  }

  /**
   * This function returns the dismiss button of the alert.
   */
  public  static getAlertDismissBtn() :Cypress.Chainable {

    return cy.get(ALERT_DISMISS_BUTTON); 
  }

  /**
   * This function returns the success message element
   * @returns The cypress command get() is being returned.
   */
  public  static getSucessMessage() :Cypress.Chainable {

    return cy.get(ALERT_SUCCESS_MESSAGE); 
  }

  /**
   * It returns a Cypress chainable object that represents the sign in button.
   */
  public  static getSignInBtn() :Cypress.Chainable {

    return cy.get(BTN_SAMPLE_SIGN_IN); 
  }

  /**
   * It returns a cypress chainable object that represents the footer menu.
   */
  public  static getFooterMenu() :Cypress.Chainable {

    return cy.get(FOOTER_MENU); 
  }

  /**
   * `getBrandingRevert()`: Returns the branding revert button.
   */
  public  static getBrandingRevert() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_REVERT); 
  }

  /**
   * This function returns the branding revert confirm button.
   */
  public  static getBrandingRevertConfirmBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_REVERT_CONFIRM ); 
  }

  /**
   * This function returns the branding revert checkbox element.
   */
  public  static getBrandingRevertCheckBox() :Cypress.Chainable {

    return cy.get(CHECKBOX_BRANDING_REVERT); 
  }

  /**
   * This function returns the color palette accordion element.
   */
  public  static getColorPaletteAccordion() :Cypress.Chainable {

    return cy.get(COLOR_PALLATTE_ACCORDION); 
  }

  /**
   * This function returns the side image URL textbox.
   */
  public  static getSideImageURL() :Cypress.Chainable {

    return cy.get(TXT_SIDE_IMAGE_URL); 
  }

  /**
   * This function returns the branding side panel button.
   */
  public  static getBrandingSidePanel() :Cypress.Chainable {

    return ConsoleGettingStarted.GetGroupedSidePanelItem(
      BTN_SIDE_PANEL_BRANDING,
      ConsoleGettingStarted.getCustomizationGroupLink()
    );
  }

  /**
   * This function returns the text of the side image description.
   */
  public  static getSideImageDescription() :Cypress.Chainable {

    return cy.get(TXT_SIDE_IMAGE_DESCRIPTION); 
  }

  /**
   * It returns the recovery form.
   */
  public  static getRecoveryForm() :Cypress.Chainable {

    return cy.get(RECOVERY_FORM); 
  }

  /**
   * `getSupportEmail()` - returns the support email address.
   */
  public  static getSupportEmail() :Cypress.Chainable {

    return cy.get(SUPPORT_EMAIL); 
  }

  /**
   * `getCaretIcon()`: returns the caret icon element.
   */
  public  static getCaretIcon() :Cypress.Chainable {

    return cy.get(CARET_ICON); 
  }

  /**
   * It returns the element with the id TAB_DEVELOP.
   */
  public  static getDevelopTab() :Cypress.Chainable {

    return cy.get(TAB_DEVELOP); 
  }

  /**
   * This function returns the input field for the Terms of Services.
   */
  public  static getInsertTOS() :Cypress.Chainable {

    return cy.get(INPUT_TREAMS_OF_SERVICES); 
  }

  /**
   * This function returns the revert button of the branding section.
   */
  public  static getRevertBrandingBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_REVERT); 
  }

  /**
   * This function returns the checkbox of branding revert section.
   */
  public  static getRevertBrandingCheckbox() :Cypress.Chainable {

    return cy.get(CHECKBOX_BRANDING_REVERT); 
  }

  /**
   * This function returns the checkbox of branding revert section.
   */
  public  static getRevertBrandingConfirmBtn() :Cypress.Chainable {

    return cy.get(BTN_BRANDING_REVERT_CONFIRM); 
  }

  /**
   * This function returns the radio button of the left image in design section.
   */
  public  static getLeftImageBtn() :Cypress.Chainable {

      return cy.get(BTN_LEFT_IMAGE); 
    }
  
    /**
     * This function returns the radio button of the left image in design section.
     */
    public  static getLightThemBtn() :Cypress.Chainable {
  
        return cy.get(BTN_LIGHT_THEME); 
    }    

  /* This function returns left image layout.
   * 
   */
  public  static getLeftImageLayout(): string {

    return BTN_LEFT_IMAGE;
  }

  /**
   * This function returns the side image URL textbox.
   */
  public  static getSideImageURLInput() : string {

    return TXT_SIDE_IMAGE_URL; 
  }

  /**
   * This function returns radio button in the confirmation box generated when publish/unpublish branding configs.
   */
  public static checkBrandingChangesConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(CHECKBOX_BRANDING_CONFIRMATION).find("input");
  }

  /**
   * This function returns returns confirmation button inside the confirmation 
   * box generated when publish/unpublish branding configs.
   */
  public static submitBrandingChangesConfirmation(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(BTN_BRANDING_CONFIRMATION);
  } 

  /**
   * This function returns branding design tab.
   */
  public static getBrandingDesignTab(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get(BRANDING_DESIGN_TAB);
  } 
}
