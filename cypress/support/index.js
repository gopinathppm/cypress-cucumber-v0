// import { removeSync } from 'fs-extra';
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(()=> {
    cy.log("Clearing existing json reports");
    // const path = '../reports/cucumber-json/';

    // unlink(path, (err) => {
    //     if (err) {
    //       console.error(err);
    //     }
    // })

    // removeSync('../reports/cucumber-json/');
    // removeSync('cypress/reports/cucumber-json');

    // try {
    //     unlinkSync(path)
    //     cy.log("File has removed")
    //   } catch(err) {
    //     console.error(err)
    //     cy.log("File has not removed")
    //   }

})

beforeEach(()=> {
    cy.log("BeforeEach test");
})

afterEach(()=>{
    cy.log("AfterEach test");
})

after(()=>{
    cy.log("After test");
    // cy.exec('npm run htmlreport');
})

// Hide all fetch/XHR requests in Cy console, toggle via cypress.json
if (Cypress.config('hideXHR')) {
    const app = window.top;
  
    if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
      const style = app.document.createElement('style');
      style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
      style.setAttribute('data-hide-command-log-request', '');
  
      app.document.head.appendChild(style);
    }
  }

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})