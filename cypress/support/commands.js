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
