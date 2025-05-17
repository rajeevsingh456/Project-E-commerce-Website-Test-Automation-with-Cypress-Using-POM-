class CheckoutPage {
  completeCheckout(details) {
    // Visit homepage to ensure Cart button exists
    cy.visit('https://www.demoblaze.com/');
    cy.get('#cartur').click();
    cy.url().should('include', 'cart.html');

    cy.contains('Place Order').click();

    cy.get('#name').type(details.name);
    cy.get('#country').type(details.country);
    cy.get('#city').type(details.city);
    cy.get('#card').type(details.creditCard);
    cy.get('#month').type(details.month);
    cy.get('#year').type(details.year);

    cy.get('button[onclick="purchaseOrder()"]').click();
  }

  verifyOrderSuccess() {
    cy.get('.sweet-alert').should('be.visible');
    cy.get('.sweet-alert > h2').should('contain.text', 'Thank you for your purchase!');
    cy.get('.confirm').click();
    cy.url().should('eq', 'https://www.demoblaze.com/cart.html');
  }
}

export default CheckoutPage;

