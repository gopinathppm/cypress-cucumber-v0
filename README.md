**********************************************************************************************************
Welcome to the Cypress - Cucumber framework
**********************************************************************************************************

A Behavioral driven automation framework with **cypress** and **cucumber-js**.


## Pre-requisites
Stable node version greater than or equal to `14.16.0`
A package manager. Either `npm` or 'yarn'


npm config set registry https://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/ --global
npm config set strict-ssl false
npm config set strict-ssl false --global

## Framework Installation
* clone the repository from github
    Using HTTPS along with your github credentials
        `git clone `git clone `https://github.com/gopinathppm/test-proj-cypress.git`
* Install the dependencies using the commands `npm install` rom the root of the repository


## Automation Execution

* execute the command  `npx cypress open` to run using test runner or `npx cypress run` to run in headless mode


## Reports

Multiple html cucumber report has been added

https://github.com/wswebcreation/wdio-cucumberjs-json-reporter/tree/v5

Feature file:

An example feature file has been created to launch linkedin, then log in provided valid username / password
