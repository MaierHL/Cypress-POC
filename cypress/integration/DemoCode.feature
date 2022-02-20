Feature: Web Page DemoBank

    @Login
    Scenario: Try to login at DemoBank
        Given I am at "https://demo.applitools.com/"
        When I enter user "user@email.com" and password "sworfish"
        Then I see my Financial Overview

    @API
    Scenario: Validar retorno API / GIVEN teorico, acabei nao encontrando uma API com autenticacao para demontração
        Given Crio um token de acesso "https://jsonplaceholder.typicode.com/guide/"
        When Metodo get no endpoint "https://jsonplaceholder.typicode.com/posts/5"
        Then Valido o schema

