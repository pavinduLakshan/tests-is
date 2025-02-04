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

  