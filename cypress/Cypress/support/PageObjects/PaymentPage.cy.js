class PaymentPages
{
    getPayByBankwireOptionButton()
{
    return cy.get('.bankwire')
    
}
getTermsOfServiceCheckbox()
{
    return cy.get('.cart_navigation > .button')
    
}
getDescriptionTitleText()
{
    return cy.get('.cheque-indent > .dark')
    
}

}
export default PaymentPages;