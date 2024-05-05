class CartPage {

    getFirstItemPrice(){ return cy.get(':nth-child(1) > :nth-child(4) > strong') }
    getSecondItemPrice(){ return cy.get('tbody > :nth-child(2) > :nth-child(4) > strong') }
    getAllPrices(){ return cy.get('tr td:nth-child(4) strong')}
    getTotalPrice(){ return cy.get('h3 > strong') }
    getCheckoutButton(){return cy.get('button[class="btn btn-success"]')}

}

export default CartPage