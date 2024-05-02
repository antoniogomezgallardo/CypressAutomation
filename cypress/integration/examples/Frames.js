/// <reference types="Cypress" />

// First you need to install iframe plugin
// for this go to the directory where "node-modules" is present and type
// npm install -D cypress-iframe
// afterwards just import it to your test file where you want to handle frames
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling Frames', function(){

    it('Selecting an element inside a frame', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(2000)
        //cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)
        cy.iframe().find('h1').should('contain', 'Mentorship')
    })

})