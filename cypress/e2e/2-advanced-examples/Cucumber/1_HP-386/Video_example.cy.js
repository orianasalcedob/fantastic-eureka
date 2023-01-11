import {Given,When,Then,And} from "cypress-cucumber-preprocessor";
    Given ('I am in the landing page',()=>{
        cy.visit ('https://qa.platinum-ink.com/?utm_campaign=AC',{
        failOnStatusCode: false,
        auth: {
          username:'hp',
          password:'NewPrinter',
        }
    })
})