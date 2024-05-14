/// <reference types="Cypress" />

describe('Incercept Http Calls', function(){

    it('Modify response to return 1 book', function(){

        const requestObject = {
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }

        const responseObject = {
            body:[
                {
                    "book_name": "Postman Automation using Javascript",
                    "isbn": "pauj",
                    "aisle": "8821"
                }
            ],
            statusCode: 200
        }

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept(requestObject, responseObject).as('getBooksCall')

        cy.get('.btn.btn-primary').click()
        cy.wait('@getBooksCall')
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })

    it('Validate the length of the response', function(){

        const requestObject = {
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }

        const responseObject = {
            body:[
                {
                    "book_name": "Selenium With Java and Latest CDT Protocols",
                    "isbn": "RSA2",
                    "aisle": "24878"
                },
                {
                    "book_name": "Postman Automation using Javascript",
                    "isbn": "pauj",
                    "aisle": "8821"
                },
                {
                    "book_name": "Postman Automation",
                    "isbn": "apt",
                    "aisle": "218"
                }
            ],
            statusCode: 200
        }

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept(requestObject, responseObject).as('getBooksCall')

        cy.get('.btn.btn-primary').click()
        cy.wait('@getBooksCall').then(({request, response})=>{
            cy.get('tr').should('have.length', response.body.length + 1)
        })
    })

    it('Modify the request of a HTTP call', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", (req)=>{

            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

            req.continue((res)=>{
                expect(res.statusCode).to.equal(200)
            })

        }).as('getBooksCall')

        cy.get('.btn.btn-primary').click()
        cy.wait('@getBooksCall')
        
    })

    it('Add a new book', function(){

        const reqBody = {
            "name":"El Maravilloso mundo de Rulo",
            "isbn":"zaa1zz",
            "aisle":"54300",
            "author":"shetty"
            }

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.request("POST", "http://216.10.245.166/Library/Addbook.php",reqBody )
        .then(function(response){
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })

        cy.get('.btn.btn-primary').click()


    })

    })


