/// <reference types="cypress" />

Cypress.Commands.add("LogIn", (email, password) => {   
    cy.contains('EMAIL').click({ force: true })   
    cy.wait(1000)   
    cy.get('[data-testid=EmaiSignup_Email]').type(email)   
    cy.get('[data-testid=EmaiSignup_Password]').type(password)   
    cy.get('[data-testid=EmaiSignup_Submit]').click({ force: true })   
})

Cypress.Commands.add("SignUp", (name, password) => {   
    let newDate = Date.now();
    let email = `drops.test.${newDate}@gmail.com`
    // cy.contains('EMAIL').should('be.visible');
    cy.get('[data-testid="EmaiSignup_Login]').should('be.visible').click();
    cy.get('[data-testid=EmaiSignup_Name]').type(name)
    cy.get('[data-testid=EmaiSignup_Email]').type(email)
    cy.get('[data-testid=EmaiSignup_Password]').type(password)   
    cy.get('[data-testid=EmaiSignup_Submit]').click({ force: true })   
})
