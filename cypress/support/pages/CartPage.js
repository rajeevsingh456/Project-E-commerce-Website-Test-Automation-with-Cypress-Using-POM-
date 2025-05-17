class CartPage {
  addProductsToCart() {
    // Add first product from Phones
    cy.get('a[onclick="byCat(\'phone\')"]').click();
    cy.get('.card-title > .hrefch').first().should('be.visible').click();
    cy.get('.btn-success').should('be.visible').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added');
    });
     cy.get('a.nav-link').contains('Home').click();

    // Add first product from Laptops (instead of notebook)
    cy.get('[onclick="byCat(\'notebook\')"]').click();
    cy.get('.card-title > .hrefch').first().should('be.visible').click();
    cy.get('.btn-success').should('be.visible').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added');
    });
   cy.get('a.nav-link').contains('Home').click();

    // Add first product from Monitors
    cy.get('a[onclick="byCat(\'monitor\')"]').click();
    cy.get('.card-title > .hrefch').first().should('be.visible').click();
    cy.get('.btn-success').should('be.visible').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added');
    });
     cy.get('a.nav-link').contains('Home').click();
  }
  changeProductQuantity() {
    cy.visit('https://www.demoblaze.com/cart.html#');
    cy.wait(3000)
    cy.get('.success td:nth-child(4) input').clear().type('2'); // Change quantity to 2
    cy.get('.success td:nth-child(4) input').trigger('change'); // Trigger change event
  }

  applyFilters() {
    cy.get('a[onclick="byCat(\'phone\')"]').click(); // Apply Phones filter
    cy.get('a[onclick="byCat(\'notebook\')"]').click(); // Apply Laptops filter
    cy.get('a[onclick="byCat(\'monitor\')"]').click(); // Apply Monitors filter
  }
  openCart() {
  cy.get('#cartur').click();
  cy.url().should('include', 'cart.html');
}

}
export default CartPage; 