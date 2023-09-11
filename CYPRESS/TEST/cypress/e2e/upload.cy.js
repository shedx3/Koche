it("upload file", () => {
  cy.visit("https://trytestingthis.netlify.app");
 cy.get("#myfile").attachFile(
   "WhatsApp Image 2023-04-26 at 5.13.40 PM (1).jpeg"
 );

});

it("download File", () => {
  cy.downloadFile(
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
    "mydownloads",
    "example.jpg"
  );

})
