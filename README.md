Playwright-TS-Cucumber-BDD
This project is a Behavior-Driven Development (BDD) framework built using TypeScript, Playwright, and Cucumber. It is designed to facilitate end-to-end testing of web applications with a clean, scalable, and maintainable structure.
This framework integrates Playwright for browser automation, CucumberJS for BDD-style test cases, and TypeScript for robust and scalable code. It supports multiple environments and is built to work efficiently with modern CI/CD pipelines.

Features
BDD Syntax: Write test cases in Gherkin language (.feature files).
Multi-Browser Support: Supports Chromium, Firefox, and Edge via Playwright.
Environment-Based Configuration: Dynamic configuration for different environments (e.g., QA, Stage, Dev).
Detailed Reports: Automatically generates detailed HTML and JSON reports for executed tests.
Modular Design: Follows the Page Object Model (POM) for maintainable and reusable test scripts.
Installation
Prerequisites
Node.js (v16 or higher)
npm (comes with Node.js)
Steps

Configuration
Environment Files
Environment-specific configurations are stored in the config folder as .env files:

.env.qa
.env.dev
.env.stage
Each file should contain variables like:

Project Structure
playwright-ts-cucumber-BDD/
│
├── config/                # Environment configuration files
│   ├── .env.qa
│   ├── .env.dev
│   └── .env.stage
│
├── e2etests/              # Test automation scripts
│   ├── corelib/           # Core utility functions and hooks
│   ├── tests/
│   │   ├── features/      # Gherkin feature files
│   │   │   ├── login/
│   │   │   ├── homepage/
│   │   ├── locators/      # JSON files for element locators
│   │   ├── pages/         # Page Object Model classes
│   │   └── steps/         # Step definitions for Cucumber
│
├── node_modules/          # Installed dependencies
├── reports/               # Generated test reports
├── package.json           # npm scripts and project metadata
└── tsconfig.json          # TypeScript configuration
Reports
Test reports are generated automatically after execution and stored in the reports/ folder.

HTML Report: Provides a human-readable report.
JSON Report: Useful for CI/CD pipelines and integrations.
To view the report, open the html-formatter.html file in a browser.

