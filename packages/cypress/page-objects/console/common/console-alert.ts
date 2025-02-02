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
const ALERT_SUCCESS = "[data-testid=\"alert-success-message\"]";
const ALERT_ERROR = "[data-testid=\"alert-error-body\"]";
const NOTIFICATION_DISMISS = ".notification-dismiss";
/**
 * This class manage console common alert based elements.
 */
 export class ConsoleAlerts {
     
    /**
     * This function returns a Cypress chainable object that represents the success alert element
     * @returns A JQuery object
     */
     public static getSuccessAlert(): Cypress.Chainable<JQuery<HTMLElement>>{

        return cy.get(ALERT_SUCCESS);
    }

   /**
     * This function returns the notification dismiss button
     * @returns The element with the id of "notification-dismiss"
     */
      public static getNotificationDismissBtn(): Cypress.Chainable<JQuery<HTMLElement>>{

          return cy.get(NOTIFICATION_DISMISS);
      }
 }
