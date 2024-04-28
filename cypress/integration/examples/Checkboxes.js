/// <reference types="Cypress" />

describe('Web Controls Suite', function(){

    it('Checking/Unchecking a particular Checkbox', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Checking
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        //Unchecking
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    })

    it('Check multiple checkboxes', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    })

})