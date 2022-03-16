/// <reference types = "cypress" />

describe('Sign Up', () => {
    before(() => {
        cy.visit('/');
    })

    it('Log in', () => {
        cy.get('[data-testid=Login]').click();
        cy.get('[data-testid=EmailButton]').should('be.visible');
        cy.get('[data-testid=EmailButton]').click()
        expect(cy.contains('Sign Up').should('be.visible'));
    })

    it('Sign Up', () => {
        cy.SignUp()
    })

})