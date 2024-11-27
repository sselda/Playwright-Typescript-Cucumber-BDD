  import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
  import {Browser, BrowserContext,Page, chromium } from "playwright";
  import { expect } from "playwright/test";
  import { getPage } from "../../corelib/corelib.spec";
  import HomePage from "../pages/homepage";
  import LoginPage from "../pages/loginpage";

  let homePage: HomePage;
  let loginPage: LoginPage;

  Then('Home page should be displayed', async function () {
    homePage = new HomePage(getPage(), this.log);
    await homePage.waitForAcInfo();

  });

  When('Upon logout', async function () {
    loginPage = new LoginPage(getPage(), this.log);
    await loginPage.logOut();
  });

  

   
