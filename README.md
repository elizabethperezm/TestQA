# QA Buddy Program
This repository contains a Todoist automation framework for backend and E2E testing. This automation framework involves technologies as Nightwatch, Newman, BrowserStack, Eslint, Github actins integration and Slack notifications.

## Goals
* Implement Page Object Model with Nigthwatch framework for Frontend Automation.
* Use Eslint for static analysis and assure code standards.
* Implement Backend Automation with Newman.
* Create CI with Github actions.
* Slack notifications once a new build is done.
* Implement BrowserStack for cross platform/browser testing

## Instalation
* Preconditiom: in order to be able to execute this code, you need to have installed in your computer Node.js and npm. Clone the repo into your local machine:
```bash
git clone https://github.com/elizabethperezm/TestQA
cd TestQA
```
* Install 
```bash
npm install
```
# Running the test
* Run test in local browser:
```bash
npm run test:local
```
* BrowserStack precondition set up the BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY into environment variables. You can also set up these variables with the following commands:
```bash
export BROWSERSTACK_USERNAME="browserstack user"
export BROWSERSTACK_ACCESS_KEY="key value"
```
* Run the BrowserStack test
```bash
npm run test:browserstack
```

# Backend Test
* Run this command a report with the test results should be in this path Backend/Reports
```bash
npm run test:API
```

# About
* [Nightwatch](https://nightwatchjs.org/)
* [Postman](https://www.postman.com/)
* [BrowserStack](https://www.browserstack.com/automate)
* [ESLint](https://eslint.org/)
