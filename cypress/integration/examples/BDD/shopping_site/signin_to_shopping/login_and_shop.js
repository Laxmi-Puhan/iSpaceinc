import { Given, When, Then, AfterAll} from "@badeball/cypress-cucumber-preprocessor";

Given('Land to the shopping site',function(){
    cy.visit("https://www.saucedemo.com/")
});
When('user enters valid usename and password and click on login',function(){
    cy.fixture('logindata').then(data=>{
        cy.get('#user-name').type(data.username)
        cy.get('#password').type(data.password)
    })
    cy.get('.submit-button.btn_action').click()
    cy.on('window:alert', (text) => {
        expect(text).to.include('Change your password');
    });
    cy.on('window:confirm', () => true);
     
})
Then('verify the login is success',function(){
    cy.get('[data-test="title"]').should('have.text','Products')
})

Given('Login to the site',function(){
    cy.visit("https://www.saucedemo.com/")
    cy.fixture('logindata').then(data=>{
        cy.get('#user-name').type(data.username)
        cy.get('#password').type(data.password)
    })
    cy.get('.submit-button.btn_action').click()
    cy.on('window:alert', (text) => {
        expect(text).to.include('Change your password');
    });
    cy.on('window:confirm', () => true);
})
Then('Add any three products to cart and verify cart count', function(){
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.get('#shopping_cart_container').click()
    cy.get('.shopping_cart_badge').should('have.text', 3)
    
})
Then('Remove any one product from cart and verify cart count',function(){
    cy.get('#remove-sauce-labs-bike-light').click()
    cy.get('.shopping_cart_badge').should('have.text', 2)
})
Then('Verify the cart contains the required two products only',function(){
    cy.get('[data-test="inventory-item-name"]').eq(0).should('contain.text','Sauce Labs Backpack')
    cy.get('[data-test="inventory-item-name"]').eq(1).should('contain.text','Sauce Labs Bolt T-Shirt')
})
Then('Click on Checkout button',function(){
    cy.get('#checkout').click()

})
Then('Fill the checkout infomation and finish checkout',function(){
    cy.get('#first-name').type('laxmi')
    cy.get('#last-name').type('puhan')
    cy.get('#postal-code').type('12345')
    cy.get('#continue').click()
    cy.get('.header_secondary_container').should('have.text', 'Checkout: Overview')
    cy.get('#finish').click()
    cy.get('.complete-header').should('have.text','Thank you for your order!')
    
})
