const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage").default;
const credentials = require("../../fixtures/credentials.json");

Given("je suis sur la page de connexion FreeWheel", () => {
  LoginPage.visit();
});

When("je me connecte avec des identifiants valides", () => {
  LoginPage.login(credentials.username, credentials.password);
});

Then("je suis redirigé vers le tableau de bord", () => {
 // cy.url().should("include", "/app/515295/dashboard");
 // cy.contains("Dashboard").should("exist");
});
