/// <reference types="Cypress" />

describe('Handling Calendar Dates', function(){

    const expectedYear = "2027"
    const expectedMonth = "06"
    const expectedDay = "15"

    it('Selecting a particular Date', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get('[class="react-date-picker__calendar-button react-date-picker__button"]').click()
        cy.get('[class= "react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from"]').click().click()
        cy.get('div[class="react-calendar__decade-view__years"]').find('button').each(($el, index, $list)=>{

            var year = $el.text()
            if(year === expectedYear){
                cy.wrap($el).click()
            }
        })

        cy.get('div[class="react-calendar__year-view__months"] button').eq(expectedMonth-1).click()

        cy.get('div[class="react-calendar__month-view__days"]').find('button').each(($el, index, $list)=>{

            var day = $el.text()
            if(day === expectedDay){
                cy.wrap($el).click()
            }
        })

        cy.get('div[class = "react-date-picker__inputGroup"] input').invoke('attr', 'value').should('equal', expectedYear+"-"+expectedMonth+"-"+expectedDay)

    })

})