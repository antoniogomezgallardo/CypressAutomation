class HomePage{

    getName(){ return cy.get('div.form-group input[name="name"]') }
    getGender(){ return cy.get('#exampleFormControlSelect1') }
    getTwoWayBinding(){ return cy.get('h4 input') }
    getEntrepeneurRadio(){ return cy.get('#inlineRadio3') }
    goToShop(){ return cy.get('[class="nav-link"][href*="shop"]') }

}

export default HomePage