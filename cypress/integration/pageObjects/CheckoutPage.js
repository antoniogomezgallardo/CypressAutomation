class CheckoutPage {

    getCountryInput(){ return cy.get('#country')}
    getSelectedCountry(){ return cy.get('.suggestions ul li a') }
    getAcceptConditions(){ return cy.get('#checkbox2') }
    getPurchaseButton(){ return cy.get('[value="Purchase"]') }
    getConfirmationMessage(){ return cy.get('[class="alert alert-success alert-dismissible"] strong')}

}

export default CheckoutPage