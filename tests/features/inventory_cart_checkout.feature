Feature: Swag Labs Inventory, Cart, and Checkout Validation

  Background:
    Given the user launches Swag labs application

  @TC_01
  Scenario Outline: Verify product list and product details is displayed
    Given the user logged in and lands in swag labs homepage as "<User>"
    When Navigate to the inventory page
    Then User should see a list of products and product details
    And Navigate to the poduct details and should see the product name, description, and price
    Then Add the product to the cart and the cart should contain that product
    And Perform the checkout with mandatory details
    Then perform logout of the application 
    Examples:
      | User     |
      | Standard |

  @TC_02
  Scenario: Remove product from cart
    Given the user logged in and lands in swag labs homepage as "<User>"
    When Navigate to the inventory page
    Then User should see a list of products and product details
    And Navigate to the poduct details and should see the product name, description, and price
    Then Add the product to the cart and the cart should contain that product
    And Remove the product from the cart and cart should be empty
    Then perform logout of the application 
    Examples:
      | User     |
      | Standard |

  @TC_03
  Scenario: Verify the behaviour for the problem user
    Given the user logged in and lands in swag labs homepage as "<User>"
    When Navigate to the inventory page
    Then User should see a list of products and product details
    And Navigate to the poduct details and should see the product name, description, and price are different from the selected product
    Then Product shouldnot be added to the cart and cart should be empty
    Then perform logout of the application 
    Examples:
      | User    |
      | Problem |