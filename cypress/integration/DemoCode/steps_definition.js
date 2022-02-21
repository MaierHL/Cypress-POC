import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//GIVEN-------------------------------------------------

Given('I am at {string}', (url) => {
  cy.visit(url);
});


//WHEN----------------------------------------------------

When('I enter user {string} and password {string}', (user, password) => {
  cy.get('input[id="username"]').type(`${user}{enter}`);
  cy.get('input[id="password"]').type(`${password}{enter}`);
  cy.get('a[id="log-in"]').click();
});

//THEN----------------------------------------------------

Then('I see my Financial Overview', () => {
  cy.get('h6[class="element-header"]').contains('Financial Overview')
});


// * -----------------------------------------------------
When('Validacao de API COVID BRAZIL', () => {
  cy.request('GET', 'https://covid19-brazil-api.now.sh/api/report/v1').then(({ status, body }) => {
    expect(status).to.equal(200)
    cy.validateSchema('covidSchema', body)
  })
})

