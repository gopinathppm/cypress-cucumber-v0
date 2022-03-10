/// <reference types="Cypress" />
import {
    Given, When, Then, And,
  } from 'cypress-cucumber-preprocessor/steps';
// import { post } from 'cypress/types/jquery';
import dataSelector from '../pages/HomepageLocator';
  
Then(/^I see the logged in message$/, () => {
   
});

When(/^I perform actions to post a "([^"]*)"$/, (args1) => {
  console.log(args1);
  
});

Given(/^I login to the the application with the "([^"]*)" and "([^"]*)"$/, (uname,pwd) => {
  cy.visit('');
  cy.get(dataSelector.uname).click().type(uname);
  cy.get(dataSelector.pwd).click().type(pwd);
});

Given(/^I launch the application$/, () => {
	cy.visit('');
});

When(/^I enter "([^"]*)" in the "([^"]*)"$/, (postcode,searchbox) => {
	cy.get(dataSelector[searchbox]).click().type(postcode);
  cy.get(dataSelector.searchBtn).click()
});

Then(/^I validate the "([^"]*)" loaded with the postcode "([^"]*)"$/, (map,postcode) => {
    let selector = dataSelector[map].replace('variable', postcode);
    cy.log("selc", selector);
    cy.get(selector).invoke('attr', 'aria-label').should('eq', postcode)
});



When(/^I click "([^"]*)"$/, (button) => {

  cy.contains('Chat about your account').click().click()
  cy.wait(5000);
  cy.get('[class="conversation-entry-bot__message-body"]').contains('Thanks for getting in touch, in order to route your enquiry properly, please enter your Three number. (07xxxxxxxxx)')
  cy.get('[class="query-field__input"]').click().type("Gopi")
  cy.get('[data-di-id="di-id-b38158de-291f7281"]').click()
  cy.wait(5000);
  cy.get('[class="bc-input-label"]').contains('Name').next().click().type("Gopi")
  
});

