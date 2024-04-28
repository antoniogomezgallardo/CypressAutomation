/// <reference types="Cypress" />

describe('Handling Alerts and Pop-ups', function(){

    it('Handling Alerts', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //click on Alert Button
        //Cypress will auto accept the alerts
        cy.get('#alertbtn').click()

        //Validate the text of the Alert is the expectd
        cy.on('window:alert', (str)=>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })
    })

    it('Accept Confirmation Pop-ups', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()

         //Validate the text of the Alert is the expectd
        cy.on('window:confirm', (str)=>{

            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

    })

    it('Cancel Confirmation Pop-ups', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()

         //Validate the text of the Alert is the expectd
        cy.on('window:confirm', ()=> false)

    })

})