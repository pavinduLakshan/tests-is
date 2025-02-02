/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
      login(email: string, password: string): Cypress.Chainable;
  }
}

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
  console.log(email, password);
})
