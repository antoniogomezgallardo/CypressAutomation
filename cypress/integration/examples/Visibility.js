/// <reference types="Cypress" />

describe('Visibility of Elements', function () {

    it('Handling Visibility/invisibility of an element', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //make it invisible
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        //make it visible
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })

})