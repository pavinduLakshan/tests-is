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

/**
 * This class contains methods related to the common popup notificataions used in the console.
 */

 const POPUP_WARNING_HEADER = "[data-componentid=\"alert-warning-message\"]";
 
 export class ConsolePopupStatus {
 
     /**
      * Get the prompt warning alert .
      * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
      */
     public static getWarningAlert(): Cypress.Chainable<JQuery<HTMLElement>> {
 
         return cy.get(POPUP_WARNING_HEADER);
     }
 }
