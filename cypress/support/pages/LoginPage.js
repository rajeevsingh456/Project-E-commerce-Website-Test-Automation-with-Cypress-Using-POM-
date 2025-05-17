class LoginPage {
  signup(username, password) {
    cy.get('#signin2').click();
    cy.get('#sign-username').clear().type(username);
    cy.get('#sign-password').clear().type(password);

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Sign up successful.');
    });

    cy.get('button[onclick="register()"]').click();
  }

  login(username, password) {
    cy.get('#login2').click();
    cy.get('#loginusername').clear().type(username);
    cy.get('#loginpassword').clear().type(password);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(3000);
    cy.get('#logout2').should('be.visible').and('contain', 'Log out');
  }
}

export default LoginPage;

