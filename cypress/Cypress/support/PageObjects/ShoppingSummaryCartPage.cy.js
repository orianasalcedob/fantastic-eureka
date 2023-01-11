class ShoppingSummaryCartPage
{
    getProductName()
{
    return cy.get ('#product_2_7_0_0 > td.cart_description > p > a')
    
}

    getProductName()
{
    return cy.get('#product_2_7_0_0 > .cart_unit > .price')
    
}
    getToProceedToCheckoutButton()
{
    return cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span').click()
    
}


}
export default ShoppingSummaryCartPage;