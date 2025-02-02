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
    PRIVATE_KEY_JWT_AUTHENTICATION_CONFIGURE_LINK = 
        "[data-testid=private-key-jwt-config-page-settings-section-card-primary-button]",
    PRIVATE_KEY_JWT_AUTHENTICATION_TOGGLE_LINK = "[data-componentid=private-key-jwt-config-edit-page-enable-toggle]";   

export class PrivateKeyJWTAuthenticationConfigurationManager {

    /**
     * To get the private key JWT authentication validation configuration section.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getPrivateKeyJWTAuthenticationConfigure(): Cypress.Chainable<JQuery<HTMLElement>> {

            return cy.get(PRIVATE_KEY_JWT_AUTHENTICATION_CONFIGURE_LINK);
    }

    /**
     * To get the private key JWT authentication validation token reuse configuration section.
     * @returns A chainable object of type JQuery<HTMLElement>
     */
    public static getPrivateKeyJWTAuthenticationToogleCheckBox(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(PRIVATE_KEY_JWT_AUTHENTICATION_TOGGLE_LINK);
    }
}
