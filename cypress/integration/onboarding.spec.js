describe('Sign Up new user', () => {
    before(() => {
        cy.visit('/');
    })

    it('Click Log in', () => {
        cy.wait(500);
        cy.get('[data-testid=Login]').click();
        cy.get('[data-testid=EmailButton]').should('be.visible');
        cy.get('[data-testid=EmailButton]').click();
        cy.contains('Sign up').should('be.visible');
    })

    it('Sign Up with valid data', () => {
        cy.SignUp();
    })

    it('Complete the onboarding', () => {
        cy.wait(1000);
        cy.get('[data-testid=LanguageLearningPurpose_BrainTraining]').should('be.visible').click();
        cy.get('[data-testid=LanguageKnowledgeLevel_Some]').should('be.visible').click();
        cy.get('[data-testid=LanguagesLearntCount_1]').should('be.visible').click();
        cy.get('[data-testid=TimeForLearningPerDay_5min]').should('be.visible').click();
        cy.wait(1000);
        cy.get('[data-testid=wordImage_1278_hitchhiking]').should('be.visible').click();
        cy.get('[data-testid=wordImage_782_cat]').should('be.visible').click();
        cy.get('[data-testid=wordImage_2775_familytree]').should('be.visible').click();
        cy.get('[data-testid=Continue]').should('be.visible').click();
        cy.get('[data-testid=Age_25_34]').should('be.visible').click();
        cy.get('[data-testid=HeardAboutUsFrom_FamilyAndFriends]').should('be.visible').click();
        cy.wait(5000);
        cy.contains('Your English (American) learning plan is ready').should('be.visible');
        cy.get('[data-testid=Continue]').should('be.visible').click();
        cy.contains('Start your 7-day free trial').should('be.visible');
        cy.get('[data-testid=Continue]').should('be.visible').click();
        cy.frameLoaded('#pf_742625');
        cy.iframe('#pf_742625')
            .find('[data-testid=headerContainerComponent]').should('be.visible')
            .find('[data-testid=closeIcon]').first().should('be.visible').click();
        cy.get('[data-testid=Continue]').should('be.visible');
    })
})