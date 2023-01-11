class HomePages
{
    getSearchBoxInput()
{
    return cy.get('#search_query_top')
}

    getSearchBoxButton()
{
    return cy.get('#searchbox .btn')
}

getAddToCartElementButton(productDescription)
{
    return cy.get('.product-container:has(.product-name[title="'+productDescription+'"]) .ajax_add_to_cart_button')
    
}
getProceedToCheckoutButton(productDescription)
{
    return cy.get('.button-medium[title="Proceed to checkout"]')
    
}

}
export default HomePages;