/// <reference types="Cypress" />
import HomePage from '../../pageObjects/HomePage'
import ProductPage from '../../pageObjects/ProductPage'
import CartPage from '../../pageObjects/CartPage'
import CheckoutPage from '../../pageObjects/CheckoutPage'

describe('Using Page Objects', function(){

        var homePage = new HomePage()
        var productPage = new ProductPage()
        var cartPage = new CartPage()
        var checkoutPage = new CheckoutPage()
   

    beforeEach(()=>{
        cy.fixture("example").then(function(data){
            this.data = data
        })
    })

    it('Fill some values and validations', function(){

        cy.visit(Cypress.env('url') + this.data.angularUrl)

        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        //validations
        homePage.getTwoWayBinding().should('have.value', this.data.name)
        homePage.getEntrepeneurRadio().should('be.disabled')


    })

    it('Select Products and Checkout', function(){

        cy.visit(Cypress.env('url') + this.data.angularUrl)
        
        homePage.goToShop().click()
        //select desired products
        this.data.productNames.forEach((element)=>{
            cy.selectProduct(element)
        })
        //validation
        productPage.getCheckoutButton().should('contain', '2')

        //go to cart
        productPage.getCheckoutButton().click()
        var sumOfPrices = 0
        cartPage.getAllPrices().each(($el, index, $list)=>{
            
            var actualPriceWithCurrency = $el.text().split(' ')
            var actualPriceClean = Number(actualPriceWithCurrency[1].trim())

            sumOfPrices += actualPriceClean

        }).then(function(){

            cartPage.getTotalPrice().then(function(element){

            var actualTotal = element.text().split(' ')
            var cleanTotal = Number(actualTotal[1].trim())

            expect(cleanTotal).to.equal(sumOfPrices)

            })

        })

        //go to Checkout
        cartPage.getCheckoutButton().click()
        checkoutPage.getCountryInput().type('Spain')
        checkoutPage.getSelectedCountry().click()
        checkoutPage.getAcceptConditions().click({force:true})

        //Validate Purchase
        checkoutPage.getPurchaseButton().click()
        checkoutPage.getConfirmationMessage().should('contain', 'Success')



    })

})