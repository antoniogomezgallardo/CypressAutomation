## Initialize a Cypress project

-  **Create a new folder and access it**
    mkdir <FOLDER NAME>
    cd <FOLDER NAME>

- **Initialize npm and create a package.json file**
    npm -i init

- **Install Cypress and update package.json file**
    npm install cypress --save-dev

- **Add Configuration files for e2e tests**
    node_modules/.bin/cypress open

- **Create a folder called 'integration/examples' inside the 'cypress' folder to alocate the test files (specs)**
    cd cypress
    mkdir integration
    mkdir examples

- **Tell cypress where your specs will be located**
    in the cypress.config.js file uright after the the e2e function write:
        specPattern: 'cypress/integration/examples/*.js'

## Cypress Cloud Dashboard

- **cypress.io/cloud**
- npx cypress run --record --key 2b564182-5010-4e0d-b9b5-7ce865a52fde

## Commands

- **Open Test Runner**
    node_modules/.bin/cypress open
    or
    npx cypress open

- **Run All Tests**
    node_modules/.bin/cypress run  
    or 
    npx cypress run

- **Run All Tests in a different env url**
    node_modules/.bin/cypress run --env url="DESIRED_URL"
    or 
    npx cypress run --env url="DESIRED_URL"

- **Run All Tests in headed mode**
    node_modules/.bin/cypress run --headed
    or 
    npx cypress run --headed

- **Run specific Tests**
    node_modules/.bin/cypress run --spec cypress/integration/examples/TEST_FILE_NAME.js
    or
    npx cypress run --spec cypress/integration/examples/TEST_FILE_NAME.js

- **Run Tests in a specific browser**
    node_modules/.bin/cypress run --broswer BROWSER_NAME (chrome, firefox,...)
    or
    npx cypress run --broswer BROWSER_NAME (chrome, firefox,...)

- **Run Tests from scripts**
    npm run <SCRIPT_NAME>


## CSS selectors

- `https://www.w3schools.com/cssref/css_selectors.php`

## Markdown Sintax

- `https://www.markdownguide.org/basic-syntax/`

## Reports with Mochawsome

- `https://www.npmjs.com/package/cypress-mochawesome-reporter`

## Cypress Cucumber Preprocessor
- `https://github.com/badeball/cypress-cucumber-preprocessor`
