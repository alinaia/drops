describe('Sign In with existing user', () => {
    before(() => {
        cy.visit('/');
    })

    it('Log in', () => {
        cy.LogIn();
        cy.wait(5000);
        expect(cy.get('[data-testid=Topic_5]').should('be.visible'));
    })

    it('Log out', () => {
        cy.LogOutFromProfileSettings();
        expect(cy.contains('Log in').should('be.visible'));
    })
})