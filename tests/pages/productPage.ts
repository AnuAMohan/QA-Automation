import { expect } from "@playwright/test";
import { CommonActions } from "../utils/commonActions"
import { selectors } from "../utils/locators"

export class ProductPage extends CommonActions {

    /**
    * Validates that the inventory page is displayed correctly.
    */
    async inventoryValidation() {
        await this.page.locator(selectors.inventoryPage.productLabel).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.productLabel)).toHaveText("Products");
    }

    /**
    * Retrieves details of the product in the inventory list.
    * @returns {productName, productDesc, productPrice} - An object containing the product's details.
    */
    async getProductDetails() {
        await this.page.locator(selectors.inventoryPage.inventoryList).isVisible();
        const productName = await this.page.locator(selectors.inventoryPage.productName).textContent();
        const productDesc = await this.page.locator(selectors.inventoryPage.productDesc).textContent();
        const productPrice = await this.page.locator(selectors.inventoryPage.productPrice).textContent();
        if (!productName || !productDesc || !productPrice) {
            throw new Error("Failed to get product details from inventory page");
        }
        return { productName: productName.trim(), productDesc: productDesc.trim(), productPrice: productPrice.trim() };
    }

    /**
    * Validates the details of a selected product on the product details page.
    * @param {string} productName - Expected name of the product in the checkout.
    * @param {string} productDesc - Expected description of the product in the checkout.
    * @param {string} productPrice - Expected price of the product in the checkout (currently optional).
    */
    async productValidation(productName: string, productDesc: string, productPrice: string) {
        await this.interactWithElement("XPATH", selectors.inventoryPage.productName, "click");
        await this.page.locator(selectors.inventoryPage.productDetailsImg).isVisible();
        await this.page.locator(selectors.inventoryPage.productDetailsName).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.productDetailsName)).toHaveText(productName);
        await this.page.locator(selectors.inventoryPage.productDetailsDesc).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.productDetailsDesc)).toHaveText(productDesc);
        await this.page.locator(selectors.inventoryPage.productDetailsPrice).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.productDetailsPrice)).toHaveText(productPrice);
    }

    /**
    * Validates that a product has been added to the shopping cart correctly.
    * @param {string} productName - Expected name of the product in the checkout.
    */
    async cartValidation(productName: string) {
        await this.interactWithElement("CLASS", selectors.inventoryPage.addToCartBtn, "click");
        (await this.getLocator("CLASS", selectors.inventoryPage.shoppingCartBadge)).isVisible();
        await this.interactWithElement("CLASS", selectors.inventoryPage.shoppingCartBadge, "click");
        (await this.getLocator("CLASS", selectors.inventoryPage.cartItemName)).isVisible();
        expect(await this.getLocator("CLASS", selectors.inventoryPage.cartItemName)).toHaveText(productName);
    }

    /**
    * Performs the checkout process and validates that the order is completed successfully.
    * @param {string} productName - Expected name of the product in the checkout.
    * @param {string} productDesc - Expected description of the product in the checkout.
    * @param {string} productPrice - Expected price of the product in the checkout (currently optional).
    */
    async checkoutValidation(productName: string, productDesc: string, productPrice: string) {
        await this.interactWithElement("CLASS", selectors.inventoryPage.checkoutBtn, "click");
        await this.interactWithElement("ID", selectors.inventoryPage.checkoutFirstName, "fill", "Anupriya");
        await this.interactWithElement("ID", selectors.inventoryPage.checkoutLastName, "fill", "AM");
        await this.interactWithElement("ID", selectors.inventoryPage.checkoutPostalCode, "fill", "M1 2NL");
        await this.interactWithElement("CLASS", selectors.inventoryPage.checkoutContinueBtn, "click");
        expect(await this.getLocator("CLASS", selectors.inventoryPage.cartItemName)).toHaveText(productName);
        await expect(this.page.locator(selectors.inventoryPage.cartItemDesc)).toHaveText(productDesc);
        await expect(this.page.locator(selectors.inventoryPage.cartItemPrice)).toHaveText(productPrice);
        await this.interactWithElement("CLASS", selectors.inventoryPage.checkoutFinishBtn, "click");
        await expect(this.page.locator(selectors.inventoryPage.orderCompleteHeader)).toHaveText("THANK YOU FOR YOUR ORDER");
    }

    /**
    * Validates that a product can be removed from the shopping cart
    */
    async removeProductValidation() {
        await this.interactWithElement("CLASS", selectors.inventoryPage.removeFromCartBtn, "click");
        await this.page.locator(selectors.inventoryPage.removedCartItem).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.shoppingCartBadge)).toBeHidden();
    }

    /**
    * Validates that a problematic product's details do not match the expected values.
    * @param {string} productName - Expected name of the product in the checkout.
    * @param {string} productDesc - Expected description of the product in the checkout.
    * @param {string} productPrice - Expected price of the product in the checkout (currently optional).
    */
    async problemProductValidation(productName: string, productDesc: string, productPrice: string) {
        await this.interactWithElement("XPATH", selectors.inventoryPage.productName, "click");
        await this.page.locator(selectors.inventoryPage.productDetailsImg).isVisible();
        await this.page.locator(selectors.inventoryPage.productDetailsName).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.productDetailsName)).not.toHaveText(productName);
        await this.page.locator(selectors.inventoryPage.productDetailsDesc).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.productDetailsDesc)).not.toHaveText(productDesc);
        await this.page.locator(selectors.inventoryPage.productDetailsPrice).isVisible();
        await expect(this.page.locator(selectors.inventoryPage.productDetailsPrice)).not.toHaveText(productPrice);
    }

    /**
    * Validates that a problematic product cannot be added to the cart..
    */
    async problemCartValidation() {
        await this.interactWithElement("CLASS", selectors.inventoryPage.addToCartBtn, "click");
        expect(await this.getLocator("CLASS", selectors.inventoryPage.shoppingCartBadge)).toBeHidden();
    }

    /**
    * Logs the user out of the Swag Labs application.
    */
    async logoutvalidation() {
        await this.interactWithElement("XPATH", selectors.inventoryPage.openMenuBtn, "click");
        await this.interactWithElement("ID", selectors.inventoryPage.logoutBtn, "click");
    }
}