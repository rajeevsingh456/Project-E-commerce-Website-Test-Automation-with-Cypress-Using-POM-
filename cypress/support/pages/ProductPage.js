class ProductPage {
  searchProduct(productName) {
    // NOTE: Demoblaze does NOT have a search bar, so this will check for bug (empty)
    // You can simulate by filtering category or checking product listing.
    // This is just a placeholder for search functionality.
    cy.log('Search functionality not implemented on demoblaze');
  }

  applyFilter(category) {
    cy.contains(category).click();
  }

  verifySearchResults(expectedText) {
    cy.get('.card-title').should('contain.text', expectedText);
  }

  selectProduct(productName) {
    cy.get('.card-title').contains(productName).click();
  }
}

export default ProductPage;

