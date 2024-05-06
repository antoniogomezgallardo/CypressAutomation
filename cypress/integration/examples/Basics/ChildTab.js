/// <reference types="Cypress" />

describe('Child Tab suite', function(){
    
    it('Handling a child tab', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.origin('https://www.qaclickacademy.com', () =>{

            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.section-title h2').should('contain', 'QAClick')

        })
        
    })
})