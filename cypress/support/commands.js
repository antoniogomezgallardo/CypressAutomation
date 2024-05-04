// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectProduct', (product) => { 
    cy.get('app-card-list app-card').each(($el, index, list)=>{

        var productName = $el.find('.card-body .card-title a').text()
        if(productName === product) {
            cy.log(productName)
            cy.wrap($el).find('.card-footer button').click()
        }
    })
 })

 Cypress.Commands.add('selectTwoProducts', (productA, productB) => { 
    cy.get('app-card-list app-card').each(($el, index, list)=>{

        var productName = $el.find('.card-body .card-title a').text()
        if((productName === productA) || (productName === productB)){
            cy.log(productName)
            cy.wrap($el).find('.card-footer button').click()
        }

    })
 })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })