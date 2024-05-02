/// <reference types="Cypress" />

describe('Handling Mouse Hover actions', function(){

    it('Hover options', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Show method should be applied to the immidiate parent of the hidden element 
        cy.get('div.mouse-hover-content').invoke('show')
        cy.get('.mouse-hover-content a').contains('Top').click()
        cy.url().should('include', 'top')

    })

    it('Click on Hidden elements', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content a').contains('Top').click({force:true})
        cy.url().should('include', 'top')

    })

})