export class LoginPage {
  email_field = ":nth-child(2) > .group-input > .form-control";
  password_field = ":nth-child(3) > .group-input > .form-control";
  button = ".btn";

  enterUsername(username) {
    cy.get(this.email_field).type(username);
  }

  enterPassword(password) {
    cy.get(this.password_field).type(password);
  }

  clickLogin() {
    cy.get(this.button).click();
  }
}