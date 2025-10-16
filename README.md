# QA-Automation - Playwright Automation Framework with cucumber BDD
QA-Automation is a automation framework using Playwright and TypeScript for Swag Labs checkout process.

# Folder Structure
- **tests/** - root folder for feature,hooks,helpersstep-definition,utils
- **features/** – Actual test specs. Contains `.feature` files written in Gherkin syntax
- **hooks/** – Contains Cucumber hooks. handles launching and closing the browsers and initialization of helpers
- **Pages/** – POM structure for UI tests
- **step-definitions/** – Holds the step definition files that map Gherkin steps from the feature files
- **utils/** – holds the common actions and the constants & locator(ID,CLASS,XPATH,TEXT)

# Setup Instructions

# Clone the repository
git clone https://github.com/AnuAMohan/QA-Automation.git

# Navigate to project repo
cd QA-Automation

# Open in VSCode
install VSCode Editor

# Install dependencies
npm install

# Run Playwright cucumer tests
npm run test

# Key Feature and Validation
** - Automated test scripts for Swag labs process .
** - Validates the visivbility of elements
** - Validated the product name,description,price in details, cart and checkout aginst the inventory list details 
** - Validated the scenario for standard user and problem user
** - Used toHaveText to validate the text content
** - Used default cucumber report for result
** - Used 1 worker, if need parallel execution and worker need to be changed in cucumber.json

# Tech Stack

Playwright - cucmber -BDD - Framework
TypeScript - Scripting language
Node.js - Runtime for executing tests
VS Code - IDE
GitHub Actions - CI/CD automation

# Possible Enhancement if needed:
** CI/CD in jenkins
** Report Portal can be implemented for reporting and Execution Details