/// <reference types="Cypress" />

describe('Fixtures suite', function () {

    beforeEach(()=>{
        cy.fixture("example").then(function(data){
            this.data = data
        })
    })

    it('Fixtures Basics', function () {
       
        cy.visit(Cypress.env('url') + this.data.angularUrl)
        cy.get('div.form-group input[name="name"]').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
    })

    it('Validation using fixtures', function(){

        cy.visit(Cypress.env('url') + this.data.angularUrl)

        //Validate Two-Way binding input
        cy.get('div.form-group input[name="name"]').type(this.data.name)
        cy.get('h4 input').should('have.value', this.data.name)

        //Validate attribute
        cy.get('div.form-group input[name="name"]')
            .invoke('attr', "minlength").should('equal', this.data.minLength)

        //Validate option disabled
        cy.get('#inlineRadio3').should('be.disabled')

    })

    it('Using Commands validate Adding multiple disered items to cart', function() {

        cy.visit(Cypress.env('url') + this.data.angularUrl)
        cy.get('[class="nav-link"][href*="shop"]').click()
        cy.selectTwoProducts(this.data.productNames[0], this.data.productNames[1])

        cy.get('.nav-link.btn.btn-primary').should('contain.text', '2')
        
    })

    it('Using Commands validate Adding multiple disered items to cart with iteration', function() {

        cy.visit(Cypress.env('url') + this.data.angularUrl)
        cy.get('[class="nav-link"][href*="shop"]').click()

        var productNames = this.data.productNames
        productNames.forEach(function(element){
            cy.selectProduct(element)
        })
        cy.get('.nav-link.btn.btn-primary').should('contain.text', '2')

    })

})