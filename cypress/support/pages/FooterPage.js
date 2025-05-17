class FooterPage {
  verifyFooterLinks() {
    cy.get('#footc').within(() => {
      // Checking the visible text in the footer
      cy.contains('About Us').should('be.visible');
      cy.contains('Get in Touch').should('be.visible');
      cy.contains('Address: 2390 El Camino Real').should('be.visible');
      cy.contains('Phone: +440 123456').should('be.visible');
      cy.contains('Email: demo@blazemeter.com').should('be.visible');
      cy.contains('PRODUCT STORE').should('be.visible');
    });
  }
}

export default FooterPage;


