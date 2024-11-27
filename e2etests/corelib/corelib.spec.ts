import { Given, When, Then, setDefaultTimeout, Before, After, BeforeAll, FormatterBuilder, AfterAll, BeforeStep, AfterStep } from "@cucumber/cucumber";
import {Browser, BrowserContext,Page, chromium, firefox } from "playwright";
import dotenv  from 'dotenv' 
import { Status } from "@cucumber/cucumber"
setDefaultTimeout(30 * 1000);

let browser: Browser;
let bCtx: BrowserContext;
let page:Page;

BeforeAll(async function () {
  dotenv.config({
    path: `${process.cwd()}/config/.env.${process.env.npm_config_env}`
  });
    
  let browserType = process.env.browser;

  switch (browserType) {
    case 'chrome':
      case 'gc':
        browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized']});
        break;
      case 'firefox':
        case 'ff':
        browser = await firefox.launch({ headless: false, args: ['--start-maximized']});
        break;
      case 'edge':
        case 'msedge':
          browser = await chromium.launch({ headless:false, channel: 'msedge', args: ['--start-maximized']});
          break;
        default:
          throw new Error(`Invalid Browser Type ${browserType} is passed..! Please Try Again`)
  }
   
})

Before( async function (scenario)  {
  bCtx = await browser.newContext({viewport:null, javaScriptEnabled:true});
  page = await bCtx.newPage();
  this.log(`----------------------${scenario.pickle.name} is started----------------`)
  await page.goto(process.env.app_url!);
});

After( async function (scenario) {
    await page.close();
    await bCtx.close();
    this.log(`----------------${scenario.pickle.name} is started--------------------`)
    this.log(`SCENARIO STATUS IS >>>> ${scenario.result?.status} >>>>>`)

    if(scenario.result?.status==Status.FAILED) {
      this.log(`I am taking screenshot....!`)
    }
});

BeforeStep( async function (scenario) {
  this.log(`--------------------${scenario.pickleStep.text} is started-----------------`)
})

AfterStep(async function (scenario) {
  this.log(`--------------------${scenario.pickleStep.text} is started --------------------`)
})

AfterAll( async function () {
  await browser.close();
});

  export function getPage():Page {
    return page;
  };
