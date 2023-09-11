it("google search", () => {
  cy.visit("https://google.com");
  cy.get("#APjFqb").type("Automation step by step{Enter} ");
//   cy.contains("Google Search").click()
});
