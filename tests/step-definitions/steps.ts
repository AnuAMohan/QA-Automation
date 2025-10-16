import { Given, Then, When } from "@cucumber/cucumber";
import { selectors } from "../utils/locators";
let productName: string;
let productDesc: string;
let productprice: string;

Given('the user launches Swag labs application', async function () {
    await this.common.loadUrl(selectors.url.url);
});

Then('the user logged in and lands in swag labs homepage as {string}', async function (user:string) {
    await this.loginPage.loginDetails(user);
    await this.loginPage.validateloginSuccess();
});

Given('Navigate to the inventory page', async function () {
 await this.productPage.inventoryValidation();
});

Then('User should see a list of products and product details', async function () {
    const product = await this.productPage.getProductDetails();
    productName = product.productName;
    productDesc = product.productDesc;
    productprice = product.productPrice;
});

When('Navigate to the poduct details and should see the product name, description, and price', async function () {
    await this.productPage.productValidation(productName,productDesc,productprice);
});

Then('Add the product to the cart and the cart should contain that product', async function () {
    await this.productPage.cartValidation(productName);
});

Given('Perform the checkout with mandatory details', async function () {
    await this.productPage.checkoutValidation(productName,productDesc,productprice);
});

When('Remove the product from the cart and cart should be empty', async function () {
    await this.productPage.removeProductValidation();
});

When('Navigate to the poduct details and should see the product name, description, and price are different from the selected product', async function () {
    await this.productPage.problemProductValidation(productName,productDesc,productprice);
});

When('Product shouldnot be added to the cart and cart should be empty', async function () {
     await this.productPage.problemCartValidation();
});

Then('perform logout of the application', async function () {
     await this.productPage.logoutvalidation();
});