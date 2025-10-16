import { Before, AfterStep, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { CommonActions } from '../utils/commonActions';
import { LoginPage } from '../pages/loginPage';
import { ProductPage } from '../pages/productPage';

setDefaultTimeout(100 * 1000);
class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  common!: CommonActions;
  loginPage!: LoginPage;
  productPage!: ProductPage;

 /**
 * Initialises the Playwright browser, context, and page instances for test execution.
 */
  async initBrowser() {
    this.browser = await chromium.launch({
      headless: true,
      channel: 'chrome',
      args: ["--start-maximized"],
    })
    this.context = await this.browser.newContext({
      viewport: null,
    });
    this.page = await this.context.newPage()

    this.common = new CommonActions(this.page);
    this.loginPage = new LoginPage(this.page);
    this.productPage = new ProductPage(this.page);
  }

  /**
 * Closes the Playwright page and browser instances to clean up resources after test execution.
 */
  async closeBrowser() {
    if (this.page) {
      await this.page.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }

}

/**
 * Registers the custom World constructor for Cucumber.
 */
setWorldConstructor(CustomWorld);

/*
* Before each scenario, initialise a fresh browser, context, and page
*/
Before(async function () {
  await this.initBrowser();
})

/*
* After each step, take a screenshot for reporting/debugging purposes
*/
AfterStep(async function () {
  await this.page.screenshot({ path: `screenshot/screenshot ${new Date().getMilliseconds()}.png` });
})

/*
* After each scenario, close the browser and page to clean up resources
*/
After(async function () {
  await this.closeBrowser();
})