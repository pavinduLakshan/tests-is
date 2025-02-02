/// <reference types="cypress" />

interface BasicAuthCredentials {
  userName: string;
  password: string;
}

declare namespace Cypress {
  interface Chainable {
      login(email: string, password: string): Cypress.Chainable;
      signInToConsole(credentials: BasicAuthCredentials): void;
      getCurrentTestCaseId(): Promise<string>;
      deleteApplicationViaAPI(tenantPath: string, credentials: BasicAuthCredentials, requestPayload: any): void;
      createApplicationViaAPI(tenantPath: string, credentials: BasicAuthCredentials, requestPayload: any): void;
      validateApplicationExistence(appName: string): void;
      navigateBetweenTabs(tabId: number, sourceTab: string, destinationTab: string): void;
      getBrandingPreference(tenantPath: string, credentials: BasicAuthCredentials): Promise<any>;
      deleteBrandingPreference(tenantPath: string, credentials: BasicAuthCredentials): Promise<any>;
  }
}

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
  console.log(email, password);
})

Cypress.Commands.add('signInToConsole', (credentials: BasicAuthCredentials) => {

})

Cypress.Commands.add('getCurrentTestCaseId', () => {
  return new Promise((resolve, reject) => {
    resolve("testId")
  })
})

Cypress.Commands.add('deleteApplicationViaAPI', (tenantPath: string, credentials: BasicAuthCredentials, requestPayload: any) => {
  
})

Cypress.Commands.add('createApplicationViaAPI', (tenantPath: string, credentials: BasicAuthCredentials, requestPayload: any) => {
  
})

Cypress.Commands.add('validateApplicationExistence', (appName: string) => {
  
})

Cypress.Commands.add('navigateBetweenTabs', (tabId: number, sourceTab: string, destinationTab: string) => {
  
})

Cypress.Commands.add('getBrandingPreference', (tenantPath: string, credentials: BasicAuthCredentials) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200
    })
  })
})

Cypress.Commands.add('deleteBrandingPreference', (tenantPath: string, credentials: BasicAuthCredentials) => {
  return new Promise((resolve, reject) => {
    resolve({
      status: 204
    })
  })
})



