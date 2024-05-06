/// <reference types="Cypress" />

describe('Handling Tables', function(){

    it('Finding an element in a table', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) =>{

            var courseName = $el.text()
            if(courseName.includes('Maven')){
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
                    var coursePrice = price.text()
                    expect(coursePrice).to.equal('20')
                })
            }
            
        })

    })

})