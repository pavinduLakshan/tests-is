/**
  * Copyright 2024 WSO2 LLC. (http://www.wso2.org) All Rights Reserved.
  *
  * This software is the property of WSO2 LLC. and its suppliers, if any.
  * Dissemination of any information or reproduction of any material contained
  * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
  * You may not alter or remove any copyright or other notice from copies of this content."
  */

const TEMPLATE_CARD_ONFIDO: string = "[data-testid=connection-templates-Onfido]";
const BTN_CREATE_ONFIDO: string = "[data-componentid=resource-grid-card-Onfido]";

const MODAL_IDVP_CREATE: string = "[data-componentid=idvp-create-modal]";
const TXT_FIELD_IDVP_NAME: string ="[data-componentid=idvp-create-wizard-idvp-name]";
const TXT_FIELD_IDVP_API_TOKEN: string ="[data-componentid=idvp-create-wizard-api-token]";
const TXT_FIELD_IDVP_WORKFLOW_ID: string ="[data-componentid=idvp-create-wizard-workflow-id]";

const BTN_IDVP_MODAL_CREATE: string ="[data-componentid=idvp-create-modal-create-button]";

export class IdVPCreationPage {

    public static getOnFidoTemplateCard(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(TEMPLATE_CARD_ONFIDO);
    }

    public static getOnFidoTemplateCardCreateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(BTN_CREATE_ONFIDO);
    }

    public static getIdVPCreationModal(): Cypress.Chainable<JQuery<HTMLElement>> {

        return cy.get(MODAL_IDVP_CREATE);
    }

    public static getIdVPCreationFormFields(): {
        name: Cypress.Chainable<JQuery<HTMLElement>>,
        apiToken: Cypress.Chainable<JQuery<HTMLElement>>,
        workflowId: Cypress.Chainable<JQuery<HTMLElement>>
    } {

        return {
            apiToken: cy.get(TXT_FIELD_IDVP_API_TOKEN),
            name: cy.get(TXT_FIELD_IDVP_NAME),
            workflowId: cy.get(TXT_FIELD_IDVP_WORKFLOW_ID)
        };
    }

    public static getIdVPCreationModalCreateBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        
        return cy.get(BTN_IDVP_MODAL_CREATE);
    }
}
