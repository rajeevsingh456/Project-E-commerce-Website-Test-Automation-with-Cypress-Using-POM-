class ContactPage {
  openContactForm() {
    cy.contains('Contact').click(); 
  cy.get('#exampleModal', { timeout: 10000 }).should('have.class', 'show');
  cy.get('#exampleModal').should('be.visible');
  }

  fillContactForm(email, name, message) {
    cy.get('#recipient-email').clear().type(email);
    cy.get('#recipient-name').clear().type(name);
    cy.get('#message-text').clear().type(message);
  }

  sendContactForm() {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('contactAlert');
    });

    cy.contains('button', 'Send message').click();

    cy.get('@contactAlert').should('have.been.calledWith', 'Thanks for the message!!');
  }

  verifyAlert(expectedText) {
    cy.get('@contactAlert').should('have.been.calledWith', expectedText);
  }
}

export default ContactPage;

