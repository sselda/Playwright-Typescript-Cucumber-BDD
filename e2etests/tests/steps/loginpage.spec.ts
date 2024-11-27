import { Given, When, Then } from '@cucumber/cucumber';
import { getPage } from "../../corelib/corelib.spec";
import  LoginPage from "../pages/loginpage";

let loginPage: LoginPage;

Given('User is on home page', async function () {
    loginPage =  new LoginPage(getPage(), this.log);
    await loginPage.goToLoginPage();
    });

  When('User enter login details', async function () {
    await loginPage.loginToApp();
  });

  Then('Logout should be successful', async function () {
    this.log('Logout is success')
    });