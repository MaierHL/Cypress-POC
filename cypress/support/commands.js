// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { validateSchema } from './validateSchema'
Cypress.Commands.add('validateSchema', validateSchema)

Cypress.Commands.add('getCityWeather', city => { 
    var queryString = `{
        getCityByName(
          name: "${city}"
          config: {units: metric lang: pt_br}
        ){
          country
          weather{ 
            summary { title description }
            temperature{ actual feelsLike min max }
            wind{ speed }
            clouds{ all visibility humidity }
          }
        }
      }`
      cy.request({
        method: 'POST',
        url: 'https://graphql-weather-api.herokuapp.com/', 
        body: {
          query: queryString
        },
      })
})


// import {
//     getRandomFact,
//     getFactById,
//   } from "./animal-facts-api-request-commands";
  
//   import { validateSchema } from "./validate-schema-command";
  
//   Cypress.Commands.add("getRandomFact", getRandomFact);
//   Cypress.Commands.add("getFactById", getFactById);
  
//   Cypress.Commands.add("validateSchema", validateSchema);