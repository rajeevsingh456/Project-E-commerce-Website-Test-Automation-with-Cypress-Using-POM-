// cypress/support/pages/Navigation.js
class NavigationPage {
  goToHome() {
    cy.get('.navbar-brand').click();
   cy.url().should('include', 'https://www.demoblaze.com/');
  }

  // goToContact() {
  //   cy.contains('Contact').click({ force: true }); // Force click to avoid any blocking
  //   cy.wait(500)

  //   // Wait for the modal to become visible
  //   cy.get('#exampleModal', { timeout: 10000 }).should('be.visible');
    
  //   // Check the modal title and form fields
  //   cy.get('#exampleModalLabel').should('have.text', 'New message');
  //   cy.get('input#recipient-email').should('be.visible'); // Email field
  //   cy.get('input#recipient-name').should('be.visible');  // Name field
  //   cy.get('textarea#message-text').should('be.visible'); // Message field
                   
  // }

  goToCart() {
    cy.get('#cartur').click();
    cy.url().should('include', 'cart.html');
  }

  goToAboutUs() {
     cy.contains('About us').click({ force: true });
    cy.get('#videoModal').should('be.visible');
    cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header > #logInModalLabel')
      .should('be.visible')
      .and('contain.text', 'About us');
  }
}

export default NavigationPage;

