/*
 *   Copyright (c) 2022 WSO2 LLC. (http://www.wso2.org)
 *   All rights reserved.
 *
 *   This software is the property of WSO2 LLC. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */

//PAGE LOCATORS
const
    BTN_OIDC_ATTRIBUTE_DIALECT = "[data-testid='attribute-dialects-oidc-dialect-container'] .grey",
    BTN_NEW_ATTRIBUTE = "[external-dialect-edit-edit-external-claims-list-layout-add-button]",
    INPUT_NEW_ATTRIBUTE = "[data-testid='external-dialect-edit-edit-external-claims-add-external-" +
        "claims-add-external-claims-form-claim-uri-input'] > input",
    INPUT_MAPPED_LOCAL_ATTRIBUTE = "external-dialect-edit-edit-external-claims-add-external-claims-" +
        "add-external-claims-form-local-claim-dropdown",
    LOCAL_ATTRIBUTE_LIST = "div[role=\"listbox\"]",
    BTN_SUBMIT = "external-dialect-edit-edit-external-claims-add-external-claims-add-external-claims-" +
        "form-submit-button",
    BTN_SAVE = "external-dialect-edit-edit-external-claims-add-external-claim-modal-save-button",
    ATTRIBUTE_SEARCH_INPUT = "[data-testid=local-claims-list-advanced-search-input]",
    ATTRIBUTE_EDIT_ICON = "[data-testid=attribute-dialects-local-dialect-attributes-edit-icon]",
    BTN_ADD_ATTRIBUTE = "[data-testid=local-claims-list-layout-add-button]",
    TEXT_ATTR_NAME = "[data-testid=local-claims-add-local-claims-wizard-local-claims-basic-details-form-" +
        "claim-uri-input]",
    TEXT_ATTR_DISP = "[data-testid=local-claims-add-local-claims-wizard-local-claims-basic-details-form-" +
        "name-input]",
    BTN_FINISH = "[data-testid=local-claims-add-local-claims-wizard-finish-button]",
    BTN_UPDATE = "[data-testid=primary-button]",
    ATTRIBUTE_WIZARD = "[data-testid=local-claims-add-local-claims-wizard]",
    ATTRIBUTE_TITLE_HEADER = "[data-testid=edit-local-claims-page-layout-page-header-title]",
    BTN_OIDC_MAPPING_DELETE =
        "[data-testid='external-dialect-edit-edit-external-claims-list-delete-confirmation-modal-confirm-button']",
    ATTRIBUTE_OIDC_MAPPING = "[data-testid='attribute-dialects-oidc-dialect-container'] > .list > .item > .ui > .two",
    ATTRIBUTE_SELECTION = "[data-testid='attribute-dialects-local-dialect-container'] > .list > .item > .ui > .two",
    ATTRIBUTE_SELECT_DELETE = "[data-testid='data-table-body'] > [data-testid='data-table-row'] > :nth-child(1)",
    BTN_SELECT_ATTRIBUTE_DELETE =
        "[data-testid='local-claims-basic-details-edit-local-claim-delete-danger-zone-delete-button']",
    BTN_CONFIRM_ATTRIBUTE_DELETE =
        "[data-testid='local-claims-basic-details-edit-delete-confirmation-modal-confirm-button']",
    ATTR_NAME_TEXT = "[data-testid=\"organization-attributes-form-dynamic-field-text\"]",
    ATTR_VALUE_TEXT = "[data-testid=\"organization-attributes-form-dynamic-field-input\"]",
    ADD_ATTR_BTN = ".add",
    UPDATE_ATTR_BTN = "[data-testid=\"organization-attributes-submit-button\"]",
    NAV_ATTR_TAB = "[data-testid=\"resource-tabs\"] > .pointing > :nth-child(2)",

    //ATTRIBUTE CHECKBOXES
    CHECK_BOX_REQUIRED = "[data-testid='local-claims-basic-details-edit-form-required-checkbox']",
    DEL_OIDC_MAPPING_CONFIRM_CHECK_BOX_REQUIRED =
        "[data-testid='external-dialect-edit-edit-external-claims-list-delete-confirmation-modal-assertion-checkbox']",
    DEL_ATTRIBUTE_CHECK_BOX_REQUIRED =
        "[data-testid='local-claims-basic-details-edit-delete-confirmation-modal-assertion-checkbox']",
    CONSOLE_CHECKBOX_SUPPORTED_BY_DEFAULT =
        "[data-componentid=\"local-claims-basic-details-edit-form-console-supported-by-default-checkbox\"]",
    CONSOLE_CHECKBOX_REQUIRED =
        "[data-componentid=\"local-claims-basic-details-edit-form-console-required-checkbox\"]",
    CONSOLE_CHECKBOX_READ_ONLY =
        "[data-componentid=\"local-claims-basic-details-edit-form-console-readOnly-checkbox\"]",
    END_USER_CHECKBOX_SUPPORTED_BY_DEFAULT =
        "[data-componentid=\"local-claims-basic-details-edit-form-end-user-supported-by-default-checkbox\"]",
    END_USER_CHECKBOX_REQUIRED =
        "[data-componentid=\"local-claims-basic-details-edit-form-end-user-required-checkbox\"]",
    END_USER_CHECKBOX_READ_ONLY =
        "[data-componentid=\"local-claims-basic-details-edit-form-end-user-readOnly-checkbox\"]",
    SELF_REGISTRATION_CHECKBOX_SUPPORTED_BY_DEFAULT =
        "[data-componentid=\"local-claims-basic-details-edit-form-self-registration-supported-by-default-checkbox\"]",
    SELF_REGISTRATION_CHECKBOX_REQUIRED =
        "[data-componentid=\"local-claims-basic-details-edit-form-self-registration-required-checkbox\"]",
    SELF_REGISTRATION_CHECKBOX_READ_ONLY =
        "[data-componentid=\"local-claims-basic-details-edit-form-self-registration-readOnly-checkbox\"]",

    //ADVANCED SEARCH ELEMENTS
    BTN_ATTRIBUTE_ADVANCED_SEARCH = "[data-testid='local-claims-list-advanced-search-options-button']",
    ADVANCED_SEARCH_HEADER = "[data-testid=\"local-claims-list-advanced-search-header\"]",
    ADVANCED_SEARCH_FILTER_ATTRIBUTE_DROPDOWN = "[data-testid=\"applications-list-advanced-search-filter-"
        + "attribute-dropdown\"]",
    ATTRIBUTE_ADVACNED_SEARCH_VALUE = "[data-testid='local-claims-list-advanced-search-filter-value-input']",
    ATTRIBUTE_ADVANCED_SEARCH_ATTRIBUTE = "[data-testid='local-claims-list-advanced-search-filter-attribute-dropdown']",
    ATTRIBUTE_ADVANCED_SEARCH_CONDITION = "[data-testid='local-claims-list-advanced-search-filter-condition-dropdown']",
    BTN_ATTRIBUTE_ADVANCED_SEARCH_SEARCH = "[data-testid='local-claims-list-advanced-search-search-button']",
    DROPDOWN_LIST = "div[class=\"visible menu transition\"]",
    DROPDOWN_LIST_ITEM = "div[role=\"option\"]",
    LOCAL_CLAIMS_LIST = "[data-testid='local-claims-list']",
    CHECK_BOX_DEFAULT = "[data-testid=local-claims-basic-details-edit-form-supported-by-default-input]",
    CHECKBOX_INPUT_DEFAULT = "input[value=\"checkbox\"]",
    DATA_TABLE_EDIT_BTN = "i[class=\"grey pencil alternate small icon list-icon data-table-list-icon\"]",
    CHECK_DEFAULT_CHECKBOX = "input[type=\"checkbox\"]",
    ATTRIBUTE_MODAL = "[data-testid='application-edit-attribute-settings-attribute-selection-empty-placeholder']",
    SCIM_ATTRIBUTE_DELETE = "[class='trash alternate link icon']",
    ATTRIBUTE_ADVANCED_SEARCH_OIDC_ATTRIBUTE_MAP =
        "[data-testid='external-dialect-edit-edit-external-claims-list-advanced-search-input'] > input",
    OIDC_ATTRIBUTE_MAPPING_SELECTION = ".right > .grey",
    EDIT_LOCAL_CLAIMS_TAB = "[data-testid='edit-local-claims-tabs']",
    MAPPING_ENABLE_FOR_USER_STORE_CONFIG_PREFIX =
        "edit-local-claims-edit-local-claims-mapped-attributes-form-userstore-support-checkbox",
    ATTRIBUTE_MAPPINGS_UPDATE_BUTTON =
        "[data-componentid='edit-local-claims-edit-local-claims-mapped-attributes-form-submit-button']";

/* It contains all the locators of the Attributes Manage page */
export class AttributeManager {

    /**
     * It returns a Cypress chainable object that represents the  openid connect container.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getBtnOidcAttributeDialect(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_OIDC_ATTRIBUTE_DIALECT);
    }

    /**
     * It returns a Cypress chainable object that represents the new attribute button in the openid connect.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getBtnNewAttribute(): Cypress.Chainable<Element> {

        return cy.dataTestId(BTN_NEW_ATTRIBUTE);
    }

    /**
     * It returns a Cypress chainable object that represents the OpenID Connect Attribute input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getInputNewAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(INPUT_NEW_ATTRIBUTE);
    }

    /**
     * It returns a Cypress chainable object that represents SCIM mapping delete once new attribute get created.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getBtnSCIMAttributeMapDelete(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SCIM_ATTRIBUTE_DELETE);
    }

    /**
     * It returns a Cypress chainable object that represents OIDC Mapping section of attribute.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getOIDCMappingAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_OIDC_MAPPING);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search attributes dropdown.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchOIDCAttributeMapping(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_ADVANCED_SEARCH_OIDC_ATTRIBUTE_MAP);
    }

    /**
     * It returns a Cypress chainable object that represents the OIDC claim mapping of attribute.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getOIDCAttributeMapping(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(OIDC_ATTRIBUTE_MAPPING_SELECTION);
    }

    /**
     * It returns a Cypress chainable object that represents the confirmation of OIDC mapping delete.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConfirmationOIDCMappingRequiredCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DEL_OIDC_MAPPING_CONFIRM_CHECK_BOX_REQUIRED);
    }

    /**
     * It returns a Cypress chainable object that represents the confirmation of OIDC attribute delete.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConfirmationOIDCAttributeRequiredCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DEL_ATTRIBUTE_CHECK_BOX_REQUIRED );
    }

    /**
     * It returns a Cypress chainable object that represents the delete button in the attributes OIDC mapping.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeOIDCMappingDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_OIDC_MAPPING_DELETE);
    }

    /**
     * It returns a Cypress chainable object that represents attribute page.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeSection(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_SELECTION);
    }

    /**
     * It returns a Cypress chainable object that represents element of attribute to be deleted.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeElementDelete(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_SELECT_DELETE);
    }

    /**
     * It returns a Cypress chainable object that represents trash icon of attribute to be deleted.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getDeleteIconAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_SELECT_ATTRIBUTE_DELETE);
    }

    /**
     * It returns a Cypress chainable object that represents confirmation of attribute deletion.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConfirmDeleteAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CONFIRM_ATTRIBUTE_DELETE);
    }

    /**
     * It returns a Cypress chainable object that represents the User Attribute map dropdown in the openid connect.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getInputMappedLocalAttribute(): Cypress.Chainable<Element> {

        return cy.dataTestId(INPUT_MAPPED_LOCAL_ATTRIBUTE);
    }

    /**
     * It returns a Cypress chainable object that represents the list box in the  openid connect.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getLocalAttributeList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOCAL_ATTRIBUTE_LIST);
    }

    /**
     * It returns a Cypress chainable object that represents the add attribute button in the openid connect.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getBtnSubmit(): Cypress.Chainable<Element> {

        return cy.dataTestId(BTN_SUBMIT);
    }

    /**
     * It returns a Cypress chainable object that represents the attribute dialect edit button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeEditIcon(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_EDIT_ICON);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search input field in the attributes.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSearchInputFeild(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_SEARCH_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the attribute name input field in the add attribute window.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TEXT_ATTR_NAME);
    }

    /**
     * It returns a Cypress chainable object that represents the attribute display name input
     * field in the add attribute window.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeDisplayName(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TEXT_ATTR_DISP);
    }

    /**
     * It returns a Cypress chainable object that represents the finish button in the add attribute window.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FINISH);
    }

    /**
     * It returns a Cypress chainable object that represents the update button in the attributes.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE);
    }

    /**
     * It returns a Cypress chainable object that represents the update button in the attributes.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getSAMLAttributeUpdateModal(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_MODAL);
    }

    /**
     * It returns a Cypress chainable object that represents the required attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getRequiredCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECK_BOX_REQUIRED);
    }

    /**
     * It returns a Cypress chainable object that represents the supported by default attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConsoleSupportedByDefaultCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONSOLE_CHECKBOX_SUPPORTED_BY_DEFAULT);
    }

    /**
     * It returns a Cypress chainable object that represents the required attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConsoleRequiredCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONSOLE_CHECKBOX_REQUIRED);
    }

    /**
     * It returns a Cypress chainable object that represents the read only attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getConsoleReadOnlyCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CONSOLE_CHECKBOX_READ_ONLY);
    }

    /**
     * It returns a Cypress chainable object that represents the supported by default attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEndUserSupportedByDefaultCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(END_USER_CHECKBOX_SUPPORTED_BY_DEFAULT);
    }

    /**
     * It returns a Cypress chainable object that represents the required attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEndUserRequiredCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(END_USER_CHECKBOX_REQUIRED);
    }

    /**
     * It returns a Cypress chainable object that represents the read only attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEndUserReadOnlyCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(END_USER_CHECKBOX_READ_ONLY);
    }

    /**
     * It returns a Cypress chainable object that represents the supported by default attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSelfRegistrationSupportedByDefaultCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELF_REGISTRATION_CHECKBOX_SUPPORTED_BY_DEFAULT);
    }

    /**
     * It returns a Cypress chainable object that represents the required attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSelfRegistrationRequiredCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELF_REGISTRATION_CHECKBOX_REQUIRED);
    }

    /**
     * It returns a Cypress chainable object that represents the read only attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSelfRegistrationReadOnlyCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SELF_REGISTRATION_CHECKBOX_READ_ONLY);
    }

    /**
     * It returns a Cypress chainable object that represents the add new attribute button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeAddButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ADD_ATTRIBUTE);
    }

    /**
     * It returns a Cypress chainable object that represents the default attribute checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSupportedByDefaultCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECK_BOX_DEFAULT);
    }

    /**
     * It returns a Cypress chainable object that represents the checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSupportedByDefaultInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECKBOX_INPUT_DEFAULT);
    }

    /**
     * It returns a Cypress chainable object that represents the save button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getBtnSave(): Cypress.Chainable<Element> {

        return cy.dataTestId(BTN_SAVE);

    }

    /**
     * It returns a Cypress chainable object that represents the advanced search button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchOption(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ATTRIBUTE_ADVANCED_SEARCH);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search dropdown.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getAdvancedSearchFilterDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCED_SEARCH_FILTER_ATTRIBUTE_DROPDOWN);
    }

    /**
     * It returns a Cypress chainable object that represents the filter value input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchValue(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_ADVACNED_SEARCH_VALUE);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search attributes dropdown.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_ADVANCED_SEARCH_ATTRIBUTE);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search condition dropdown.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchCondition(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_ADVANCED_SEARCH_CONDITION);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchSearchButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_ATTRIBUTE_ADVANCED_SEARCH_SEARCH);
    }

    /**
     * It returns a Cypress chainable object that represents the attributes list.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getLocalClaimsList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(LOCAL_CLAIMS_LIST);
    }

    /**
     * It returns a Cypress chainable object that represents the one attribute edit icon.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEditIconSelectedAttribute(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DATA_TABLE_EDIT_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the advanced search header.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAdvancedSearchHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADVANCED_SEARCH_HEADER);
    }

    /**
     * It returns a Cypress chainable object that represents the the attributes dropdown list.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getAttributeDropDownList(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_LIST);
    }

    /**
     * It returns a Cypress chainable object that represents the attributes dropdown list items.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
     public static getAttributeDropdownListItem(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(DROPDOWN_LIST_ITEM);
    }

    /**
     * It returns a Cypress chainable object that represents user attribute default checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAttributeDefaultCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(CHECK_DEFAULT_CHECKBOX);
    }

    /**
     * This function returns the default checkbox element.
     * @returns The method returns the constant CHECK_DEFAULT_CHECKBOX, which is likely a string
     * representing the default checkbox element attribute.
     */
    public static getAttributeDefaultCheckBoxElemnet(): string {

        return CHECK_DEFAULT_CHECKBOX;
    }

     /**
    * This function returns the attribute wizard panel
    * @returns A chainable object that represents the attribute wizard panel.
    */
      public static getAddAttributePanel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_WIZARD);
    }

    /**
     * This function returns the finish button element
     * @returns A chainable command that will return a JQuery object of the element.
     */
    public static getFinishBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_FINISH);
    }

    /**
     * This function returns the attribute title header
     * @returns A chainable command that will return a JQuery object of the element.
     */
     public static getAttributeTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_TITLE_HEADER);
    }

    /**
     * It returns a Cypress chainable object that represents the HTML element with the ID of "update-btn"
     * @returns The element with the id of btnUpdate.
     */
     public static getAttributeUpdateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_UPDATE);
    }

    /**
     * It returns a chainable object that represents the sub organization attribute name field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getAttributeNameField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTR_NAME_TEXT);
    }

    /**
     * It returns a chainable object that represents the sub organization attribute value field
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getAttributeValueField(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTR_VALUE_TEXT);
    }

    /**
     * It returns a chainable object that represents the add attribute button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getAttributeAddBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_ATTR_BTN);
    }

    /**
     * It returns a chainable object that represents the add attribute button
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getUpdateAttributeBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(UPDATE_ATTR_BTN);
    }

    /**
     * It returns a chainable object that represents the button to navigate to attribute tab
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
     public static getNavigateAttributeBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(NAV_ATTR_TAB);
     }

    /**
     * It returns a chainable object that represents the tab in the edit local claims page.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEditLocalClaimsTab(tab: number): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_LOCAL_CLAIMS_TAB).find('.ui.pointing.secondary.menu a').eq(tab);
    }

    /**
     * It returns a chainable object that represents the check box for enable attribute mapping for user store.
     * @param userStore user store name.
     * @returns @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getEnableForUserStoreCheckbox(userStore: string): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(`[data-componentid="${MAPPING_ENABLE_FOR_USER_STORE_CONFIG_PREFIX}-${userStore}"]`);
    }

    /**
     * It returns a chainable object that represents the update button in the attribute mappings.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getAttributeMappingsUpdateButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ATTRIBUTE_MAPPINGS_UPDATE_BUTTON);
    }
}
