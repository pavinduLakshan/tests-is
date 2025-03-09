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

import { BasicAuthCredentials } from "../models";

declare global {
  namespace Cypress {
    interface Chainable {
        signInToConsole(
          credentials: BasicAuthCredentials,
          tenantEndpoint?: string,
          isTenantQualified?: boolean, 
          shouldSkipConsoleLanding?: boolean,
          options?: any
        ): void;
        provideConsoleLocalCredentials(userName: string, password: string, viaMfa: boolean): void;
        getCurrentTestCaseId(): Chainable<string>;
        approveConsent(approvalType: string): void;
        deleteApplicationViaAPI(tenantPath: string, credentials: BasicAuthCredentials, requestPayload: any): void;
        filterApplication(tenantPath: string, credentials: BasicAuthCredentials, filterExpression: any): Promise<any>;
        createApplicationViaAPI(tenantPath: string, credentials: BasicAuthCredentials, requestPayload: any): void;
        validateApplicationExistence(appName: string): void;
        getAccessToken(credentials: BasicAuthCredentials, tenantPath: string): Cypress.Chainable<Cypress.Response<any>>;
        navigateBetweenTabs(tabId: number, sourceTab: string, destinationTab: string): void;
        getBrandingPreference(tenantPath: string, credentials: BasicAuthCredentials): Promise<any>;
        deleteBrandingPreference(tenantPath: string, credentials: BasicAuthCredentials): Promise<any>;
    }
}
}

  