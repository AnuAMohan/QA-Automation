export const selectors = {
    url:{
        url: "https://www.saucedemo.com/v1/index.html"
    },
    loginDetails: {
        Standard:{
        userName: "standard_user",
        password: "secret_sauce"
        },
        Problem:{
        userName: "problem_user",
        password: "secret_sauce"
        },
        Performance:{
        userName: "problem_user",
        password: "performance_glitch_user"
        }
    },
    login: {
        usernameField: "//input[@id='user-name']",
        PwdField: "//input[@id='password']",
        continue_submit: "//input[@id='login-button']"
    },
    inventoryPage: {
        productLabel: ".product_label", 
        inventoryList: ".inventory_list", 
        productName: "(//div[@class='inventory_item_name'])[1]",
        productDesc: "(//div[@class='inventory_item_desc'])[1]",
        productPrice: "(//div[@class='inventory_item_price'])[1]",
        productDetailsImg: ".inventory_details_img",
        productDetailsName: ".inventory_details_name",
        productDetailsDesc: ".inventory_details_desc",
        productDetailsPrice: ".inventory_details_price",
        addToCartBtn: "btn_primary.btn_inventory",
        removeFromCartBtn: "btn_secondary.cart_button",
        shoppingCartBadge: "fa-layers-counter.shopping_cart_badge",
        cartItemName: "inventory_item_name",
        cartItemDesc: ".inventory_item_desc",
        cartItemPrice: ".inventory_item_price",
        checkoutBtn: "btn_action.checkout_button",
        checkoutFirstName: "first-name",
        checkoutLastName: "last-name",
        checkoutPostalCode: "postal-code",
        checkoutContinueBtn: "btn_primary.cart_button",
        checkoutFinishBtn: "btn_action.cart_button",
        orderCompleteHeader: ".complete-header",
        openMenuBtn: "//button[text()='Open Menu']",
        logoutBtn: "logout_sidebar_link",
        removedCartItem: ".removed_cart_item"
    }
}