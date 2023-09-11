
/// <reference types="cypress" />

import { LoginPage } from "./pages/login.cy";

 beforeEach(function () {
   cy.visit("https://consumer.dev.gateway.zestpayment.com/login");
 });
const loginPage = new LoginPage();
   


describe("All test function", function (){

  

  it("test 1", () => {
    loginPage.enterUsername("temitope.getzest@gmail.com");
    loginPage.enterPassword("Smallvile2015.");

    loginPage.clickLogin();
    cy.contains("Storefront").click()
  });

  it("test 2", () => {
    loginPage.enterUsername("Benedicta.nwagwu@gmail.com");
    loginPage.enterPassword("Augustine1$");

    loginPage.clickLogin();
      cy.contains("Storefront").click();
      
  });
    
});
describe("All test function", function () {
  it("test 3", () => {
    loginPage.enterUsername("Benedicta.nwagwu@gmail.com");
    loginPage.enterPassword("Augustine1$");

    loginPage.clickLogin();
    cy.contains("Storefront").click();
  });

  it("test 4", () => {
    loginPage.enterUsername("temitope.getzest@gmail.com");
    loginPage.enterPassword("Smallvile2015.");

    loginPage.clickLogin();
    cy.contains("Storefront").click();
  });
});
