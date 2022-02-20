import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//GIVEN-------------------------------------------------

Given('I am at {string}', (url) => {
  cy.visit(url);
});

Given('Estou acessando {string}', (url) => {
  cy.visit(url);
});

//WHEN----------------------------------------------------

When('I enter user {string} and password {string}', (user, password) => {
  cy.get('input[id="username"]').type(`${user}{enter}`);
  cy.get('input[id="password"]').type(`${password}{enter}`);
  cy.get('a[id="log-in"]').click();
});

When('I enter user {string} and password {string}', (user, password) => {
  cy.get('input[id="username"]').type(`${user}{enter}`);
  cy.get('input[id="password"]').type(`${user}{enter}`);
  cy.get('a[id="log-in"]').click();
});

//THEN----------------------------------------------------

Then('I see my Financial Overview', () => {
  cy.get('h6[class="element-header"]').contains('Financial Overview')
});

Then('I see my Financial Overview', () => {
  cy.get('h6[class="element-header"]').contains('Financial Overview')
});




expect(response.body).to.be.jsonSchema(ObjectSchema);