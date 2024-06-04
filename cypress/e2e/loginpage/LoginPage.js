class LoginPage {
    visit() {
      cy.visit('https://testingtasks.kwentra.com');
    }
  
    EnterUserName(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    EnterPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    getErrorMessage() {
      return cy.
      contains('Please enter a correct username and password. Note that both fields may be case-sensitive.');
    
    }
  }
  
  export default LoginPage;
  