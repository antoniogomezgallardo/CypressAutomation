/// <reference types="Cypress" />

describe('Checkout suite', function(){

    it('E2E Succesfull Checkout of 1kg of Beetroot', function(){
        //Go to the desired page
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        
        // Locate the search bar and write in it
        cy.get('.search-keyword').type('Be')
        
        // From the results of the search select the desired product and add it to the cart
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const productName = $el.find('.product-name').text()

            if (productName.includes('Beetroot')) {
                cy.wrap($el).find('button').click()
            }
        })

        // Proceed to Checkout
        cy.get('.cart-icon').click()
        cy.get('button').contains('PROCEED TO CHECKOUT').click()

        //Place the Order
        cy.get('button').contains('Place Order').click()

        //Validate we are in the Checkout Page
        cy.get('button').contains('Proceed').should('be.visible')
    })

})