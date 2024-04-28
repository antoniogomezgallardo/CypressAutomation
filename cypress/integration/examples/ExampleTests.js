/// <reference types="Cypress" />

describe('Example Tests', function () {

    it('Validate the number of results in a search', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        // Since there is an invisible element that matches 'product' we need to indicate that the ones we want are the visibles
        cy.get('.product:visible').should('have.length', 4)

        // This is the way Cypress allows to create reusable variables
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
    })

    it('Add an element to the cart', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        // We can also identify elements using child chain locators
        cy.get(':nth-child(3) > .product-action > button').click()

        //Validate item was added to the cart
        cy.get('[data-cypress-el="true"] > strong').should('match', '1')

        // Since Cypress is asyncronus we need to use promises to force a task completion before we execute asyncronus commands
        // With eq we can select an element by its index if we know it
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
            console.log('test Log')
        })

        // if we want to select an element withour knowing the index of the element we need to iterate wit each(($el, index, $list) =>{})
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                //We need to use cy.wrap() because cypress has 'deprecated' the click() method on elements of a promise
                cy.wrap($el).find('button').click()
            }
        })


    })

    it('Validate the Logo name', function () {
        {
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

            //assert if logo text is correctly displayed
            cy.get('.brand').should('have.text', 'GREENKART')

            //this is to print in logs
            cy.get('.brand').then(function (logoelement) {
                cy.log(logoelement.text())

            })

        }
    })



})



