/// <reference types="Cypress" />

describe('Handling Dropdowns', function () {

    it('Static Dropdowns', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')


    })

    it('Dynamic Dropdowns', function () {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('pa')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if ($el.text() === 'Spain') {
                cy.wrap($el).click()
            }

        })
        cy.get('#autocomplete').should('have.value', 'Spain')

    })


})