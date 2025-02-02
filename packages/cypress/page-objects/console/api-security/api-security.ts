/**
 * Copyright (c) 2023, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 LLC. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { HTMLKeyWordsConstants } from "../../../constants";

 // ADD API RESOURCE LOCATORS
 const
    API_RESOURCES_TITLE="[data-componentid=\"api-resources-page-layout-page-header-title\"]",
    ADD_API_RESOURCE_BUTTON = "[data-testid=\"api-resources-empty-placeholder-add-api-resource-button\"]",
    ADD_API_RESOURCE_ACTION_BUTTON = "[data-testid=\"api-resources-add-api-resources-button\"]",
    ADD_API_RESOURCE_TABLE_ROW = "[data-componentid=data-table-row]",
    ADD_API_RESOURCE_DISPLAY_NAME_INPUT = "[data-testid=add-api-resource-basic-basic-form-displayName]",
    ADD_API_RESOURCE_IDENTIFIER_INPUT = "[data-testid=add-api-resource-basic-basic-form-identifier]",
    ADD_API_RESOURCE_NEXT_BUTTON = "[data-testid=\"add-api-resource-next-button\"]",
    ADD_API_RESOURCE_PERMISSIONS_DISPLAY_NAME_INPUT 
        = "[data-testid=permission-mapping-list-item-displayName]",
    ADD_API_RESOURCE_PERMISSIONS_IDENTIFIER_INPUT 
        = "[data-testid=permission-mapping-list-item-identifier]",
    ADD_API_RESOURCE_PERMISSIONS_DESCRIPTION_INPUT 
        = "[data-testid=permission-mapping-list-item-description]",
    ADD_API_RESOURCE_PERMISSIONS_ADD_PERMISSION_BUTTON 
        = "[data-testid=permission-mapping-list-item-add-permission-btn]",
    ADD_API_RESOURCE_PERMISSIONS_DELETE_PERMISSION_BUTTON
        = "i.grey.trash.alternate.small.icon.list-icon.data-table-list-icon",
    ADD_API_RESOURCE_REQUIRES_AUTHORIZATION_CHECKBOX
        = "[data-componentid=add-api-resource-authorizaiton-authorize]",
    ADD_API_RESOURCE_FINISH_BUTTON = "[data-testid=add-api-resource-finish-button]",
    SUCCESS_NOTIFICATION_BODY = "[data-componentid=alert-success-body]",
    ADD_API_RESOURCE_PAGE_HEADER_TITLE = "[data-componentid=page-layout-page-header-title]";

// DELETE API RESOURCE LOCATORS
const
    API_RESOURCE_EDIT_BTN = "i[class=\"grey pencil alternate small icon list-icon data-table-list-icon\"]",
    API_RESOURCE_DANGER_ZONE_DELETE_BTN = "[data-componentid=danger-zone-delete-button]",
    API_RESOURCE_DELETE_CONFIRMATION_MODAL_CHECKBOX = "[data-componentid=confirmation-modal-assertion-checkbox]",
    API_RESOURCE_DELETE_CONFIRMATION_MODAL_CONFIRM 
        = "[data-componentid=confirmation-modal-confirm-button]",
    API_RESOURCE_LIST_DELETE_ICON_BTN = "[data-componentid=api-resources-item-delete-button]";

// EDIT API RESOURCE LOCATORS
const
    EDIT_API_RESOURCE_DISPLAY_NAME_INPUT = "[data-componentid=general-api-resource-general-form-displayName]",
    EDIT_API_RESOURCE_SUBMIT_BTN = "[data-componentid=general-api-resource-submit-button]",
    EDIT_API_RESOURCE_ADD_PERMISSION_ACTION_BTN = "[data-componentid=permission-api-resource-add-permission-button]",
    EDIT_API_RESOURCE_ADD_PERMISSION_BTN = "[data-componentid=permission-list-api-resource-add-permission-button]",
    EDIT_API_RESOURCE_PERMISSIONS_DELETE_ICON_BTN
        = "[data-componentid=permission-list-api-resource-item-delete-button]",
    ADD_API_RESOURCE_PERMISSION_DISPLAY_NAME_INPUT = "[data-testid=add-api-resource-permission-form-displayName]",
    ADD_API_RESOURCE_PERMISSION_IDENTIFIER_INPUT = "[data-testid=add-api-resource-permission-form-identifier]",
    ADD_API_RESOURCE_PERMISSION_DESCRIPTION_INPUT = "[data-testid=add-api-resource-permission-form-description]",
    ADD_API_RESOURCE_PERMISSION_FINISH_BTN = "[data-testid=add-api-resource-permission-finish-button]",
    PERMISSION_TAB_ANCHOR = "Permissions",
    EDIT_API_RESOURCE_PERMISSION_SEARCH_BAR = "[data-testid=permission-api-resource-list-search-input]";

/* It contains all the locators of the API resources page */
export class APISecurityPage {

    /**
     * It returns a Cypress chainable object that represents the API resources page header title.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAPIResourcesTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(API_RESOURCES_TITLE);
    }

    /**
     * It returns a Cypress chainable object that represents the create API resource button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource action button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceActionButton(): Cypress.Chainable<JQuery<HTMLElement>> {
         
        return cy.get(ADD_API_RESOURCE_ACTION_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource table row.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceTableRow(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_TABLE_ROW);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource display name input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceDisplayNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_DISPLAY_NAME_INPUT);
    }

    /* It returns a Cypress chainable object that represents the add API resource identifier input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceIdentifierInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_IDENTIFIER_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents add API resource `next` button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceNextButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_NEXT_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the add permission display name input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddPermissionDisplayNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSIONS_DISPLAY_NAME_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the add permission identifier input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddPermissionIdentifierInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSIONS_IDENTIFIER_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the add permission description input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddPermissionDescriptionInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSIONS_DESCRIPTION_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the `add permission` button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddPermissionButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSIONS_ADD_PERMISSION_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the add permission `remove` button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddPermissionRemoveButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSIONS_DELETE_PERMISSION_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the requires authorization checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceRequiresAuthorizationCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_REQUIRES_AUTHORIZATION_CHECKBOX);
    }

    /**
     * It returns a Cypress chainable object that represents the add permission `finish` button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourceFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_FINISH_BUTTON);
    }

    /**
     * It returns a Cypress chainable object that represents the body of the success notification.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getSuccessNotificationBody(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(SUCCESS_NOTIFICATION_BODY);
    }

    /**
     * It returns a Cypress chainable object that represents the add permission page header title.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourcePageHeaderTitle(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PAGE_HEADER_TITLE);
    }

    /**
     * It returns a Cypress chainable object that represents the API resource edit button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAPIResourceEditButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(API_RESOURCE_EDIT_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the API resource delete button in the danger zone.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAPIResourceDangerZoneDeleteButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(API_RESOURCE_DANGER_ZONE_DELETE_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the API resource delete confirmation modal checkbox.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAPIResourceDeleteConfirmationModalCheckbox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(API_RESOURCE_DELETE_CONFIRMATION_MODAL_CHECKBOX);
    }

    /**
     * It returns a Cypress chainable object that represents the API resource delete confirmation modal confirm button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAPIResourceDeleteConfirmationModalConfirmButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(API_RESOURCE_DELETE_CONFIRMATION_MODAL_CONFIRM);
    }

    /**
     * It returns a Cypress chainable object that represents the delete icon button of the API resources list.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAPIResourcesListDeleteIconButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(API_RESOURCE_LIST_DELETE_ICON_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the edit API resource display name input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEditAPIResourceDisplayNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

            return cy.get(EDIT_API_RESOURCE_DISPLAY_NAME_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the edit API resource submit button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEditAPIResourceSubmitButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_API_RESOURCE_SUBMIT_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the edit API resource permission add button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEditAPIResourcePermissionAddButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_API_RESOURCE_ADD_PERMISSION_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource permission add action button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEditAPIResourcePermissionAddActionButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_API_RESOURCE_ADD_PERMISSION_ACTION_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource permission display name input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourcePermissionDisplayNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSION_DISPLAY_NAME_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource permission identifier input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourcePermissionIdentifierInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSION_IDENTIFIER_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource permission description input field.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourcePermissionDescriptionInput(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSION_DESCRIPTION_INPUT);
    }

    /**
     * It returns a Cypress chainable object that represents the add API resource permission finish button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getAddAPIResourcePermissionFinishButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(ADD_API_RESOURCE_PERMISSION_FINISH_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the edit API resource permissions delete icon button.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getEditAPIResourcePermissionsDeleteIconButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_API_RESOURCE_PERMISSIONS_DELETE_ICON_BTN);
    }

    /**
     * It returns a Cypress chainable object that represents the attribute mappings anchor of API resource permissions
     * tab.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getPermissionTabButton(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.contains(HTMLKeyWordsConstants.HTML_ANCHOR_TAG, PERMISSION_TAB_ANCHOR);
    }

    /**
     * It returns a Cypress chainable object that represents the search bar of the permission tab of API resource
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getPermissionSearchBar(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(EDIT_API_RESOURCE_PERMISSION_SEARCH_BAR);
    }
}
