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

/// <reference types="Cypress" />

// LOCATORS
const QR_CODE_CANVAS = "canvas[id=\"qrcanv\"]",
COMMON_MAIN_PANEL = ".main-panel",
COMMON_MODAL_HEADER = "div.modal-header";

/**
 * This class manage common page based elements.
 */
export class ConsoleCommonPageElements {

    /**
     * It returns the QR code canvas element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getQRCodeCanvas(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(QR_CODE_CANVAS);
    }

    /**
     * It returns the Modal Header.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCommonModalHeader(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(COMMON_MODAL_HEADER);
    }

    /**
     * It returns the Main Panel.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    public static getCommonMainPanel(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(COMMON_MAIN_PANEL);
    }

}
