# Playwright-TypeScript-Cucumber-BDD

This project is a **Behavior-Driven Development (BDD)** framework built using **TypeScript**, **Playwright**, and **Cucumber**.  
It is designed to facilitate end-to-end testing of web applications with a clean, scalable, and maintainable structure.  
The framework integrates Playwright for browser automation, CucumberJS for BDD-style test cases, and TypeScript for robust and scalable code.  
It supports multiple environments and works efficiently with modern CI/CD pipelines.

---

## ✨ Features

- **BDD Syntax**: Write test cases in Gherkin language (`.feature` files).  
- **Multi-Browser Support**: Supports Chromium, Firefox, and Edge via Playwright.  
- **Environment-Based Configuration**: Dynamic configuration for different environments (e.g., QA, Stage, Dev).  
- **Detailed Reports**: Automatically generates detailed HTML and JSON reports for executed tests.  
- **Modular Design**: Follows the Page Object Model (POM) for maintainable and reusable test scripts.

---

## 📦 Installation Prerequisites

- Node.js (v16 or higher)  
- npm (comes with Node.js)

---

## ⚙️ Configuration Environment Files

Environment-specific configurations are stored in the `config` folder as `.env` files:

- `.env.qa`  
- `.env.dev`  
- `.env.stage`  

Each file should contain variables like:

```env
BASE_URL=https://example.com
USERNAME=testuser
PASSWORD=secret
