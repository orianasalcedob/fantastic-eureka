class AddressPages
{
    getProceedToCheckoutButton()
{
    return cy.get('#address_delivery > li.address_address1.address_address2')
    
}


}
export default AddressPages;