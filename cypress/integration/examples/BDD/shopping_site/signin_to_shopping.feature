Feature: Enter valid Username and password to login

    Scenario: Enter Valid Login Details and verify login is success
    Given Land to the shopping site
    When user enters valid usename and password and click on login
    Then verify the login is success

    Scenario: Add any three products to cart, remove any one and verify the cart contains the required products only
    Given Login to the site
    Then Add any three products to cart and verify cart count
    Then Remove any one product from cart and verify cart count
    Then Verify the cart contains the required two products only

    Scenario: Complete the checkout and finish shopping
    Given Login to the site
    Then Add any three products to cart and verify cart count
    Then Click on Checkout button
    Then Fill the checkout infomation and finish checkout
