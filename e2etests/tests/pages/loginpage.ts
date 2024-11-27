import { Page } from "playwright"
import { expect } from "playwright/test"
import * as loginPageloc from "../locators/loginpageloc.json"
import BasePage  from "../pages/basepage";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";


export default class loginPage extends BasePage {

    constructor(page:Page, log:ICreateLog) {
        super(page, log);
    }

    async  goToLoginPage() {
        await this.page.locator(loginPageloc.loginLink.locator, loginPageloc.loginLink.locatorOptions).click();
    }

    async loginToApp() {
        await this.enter(loginPageloc.emailField, process.env.user_name! );
        await this.enter(loginPageloc.passwordField, process.env.password!);
        await this.click(loginPageloc.loginButton);
    }

    async logOut() {
        await this.click(loginPageloc.logOutLink);
        await this.click(loginPageloc.continueButton, true);
    }
}