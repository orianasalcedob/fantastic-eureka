class AuthenticationPages
{
    getEmailAddressInput()
{
    return cy.get('#email')
    
}

    getPasswordInput()
{
    return cy.get('#passwd')
    
}
    getSubmitSignInButton()
{
    return cy.get('#SubmitLogin > span')
}

}
export default AuthenticationPages;