/// <reference types="cypress" />

// Visitar a página do Google
Cypress.Commands.add('google', () => cy.visit('https://google.com'))

//Clicar no botão de aceitar cookies do modal
Cypress.Commands.add('acceptCookies', () => {
  cy.wait(500) //Esperar 5 segundos
  cy.get('.ot-sdk-container').within(() => {
    cy.get('#onetrust-accept-btn-handler').should('exist').click()
  })
})