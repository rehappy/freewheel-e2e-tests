class LoginPage {
  visit() {
    cy.visit('https://mrm.freewheel.tv/system/account/login?source=MRM&sso_return_to=%2F%2Fmrm.freewheel.tv');
  }

  fillUsername(username) {
    cy.get('#login').clear().type(username);
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();
