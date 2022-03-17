describe('Sign Up new user', () => {
    before(() => {
        cy.visit('/');
    })

    it('Click Log in', () => {
        cy.get('[data-testid=Login]').click();
        cy.get('[data-testid=EmailButton]').should('be.visible');
        cy.get('[data-testid=EmailButton]').click();
        cy.contains('Sign up').should('be.visible');
    })

    it('Sign up with invalid email', () => {
        cy.SignUpWithInvalidEmail();
        cy.contains('Invalid email address').should('be.visible');
        cy.get('[data-testid=EmaiSignup_Name]').clear();
        cy.get('[data-testid=EmaiSignup_Email]').clear();
        cy.get('[data-testid=EmaiSignup_Password]').clear();
        cy.get('[data-testid=EmaiSignup_Login]').should('be.visible').click();
    })

    it('Sign up with invalid password', () => {
        cy.SignUpWithIncorrectFormatPassword();
        cy.contains('Minimum password length is 6 symbols').should('be.visible');
        cy.get('[data-testid=EmaiSignup_Name]').clear();
        cy.get('[data-testid=EmaiSignup_Email]').clear();
        cy.get('[data-testid=EmaiSignup_Password]').clear();
        cy.get('[data-testid=EmaiSignup_Login]').should('be.visible').click();
    })

    it('Sign Up with valid data', () => {
        cy.SignUp();
    })

    it('Log out', () => {
        cy.LogOut();
    })
})