Feature: Web Page DemoBank

    @Login
    Scenario: Try to login at DemoBank
        Given I am at "https://demo.applitools.com/"
        When I enter user "user@email.com" and password "sworfish"
        Then I see my Financial Overview

    @API
    Scenario: Validar API - StatusCode/schema
        * Validacao de API COVID BRAZIL


