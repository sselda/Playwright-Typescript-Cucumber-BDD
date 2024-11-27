import { Page } from "playwright";
import { expect} from "playwright/test";
import * as homePageloc from "../locators/homepageloc.json"
import BasePage from "./basepage";
import { ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class HomePage extends BasePage{


    constructor(page:Page, log:ICreateLog) {
        super(page, log);
    }

    async waitForAcInfo() {
        await this.page.locator(homePageloc.editAcLink.locator).waitFor(homePageloc.editAcLink.actionOptions);
        expect(this.page.locator(homePageloc.editAcLink.locator)).toBeVisible();
    }
}

 