/// <reference types="cypress" />
import 'cypress-iframe';

Cypress.Commands.add("LogIn", () => {
    cy.contains('Log in').click({ force: true })
    cy.contains('EMAIL').click({ force: true })
    cy.wait(1000)
    cy.fixture('userData.json').then(function (data) {
        this.data = data;
        cy.get('[data-testid=EmaiSignup_Email]').type(this.data.email)
        cy.get('[data-testid=EmaiSignup_Password]').type(this.data.password)
        cy.get('[data-testid=EmaiSignup_Submit]').click({ force: true })
    })
})

Cypress.Commands.add("LogOut", () => {
    cy.contains('Log out').click({ force: true })
})

Cypress.Commands.add("SignUp", () => {
    let newDate = Date.now();
    let email = `drops.test.${newDate}@gmail.com`
    cy.fixture('userData.json').then(function (data) {
        this.data = data;
        cy.wait(500);
        cy.get('[data-testid=EmaiSignup_Login]').should('be.visible').click();
        cy.get('[data-testid=EmaiSignup_Name]').type(this.data.name)
        cy.get('[data-testid=EmaiSignup_Email]').type(email)
        cy.get('[data-testid=EmaiSignup_Password]').type(this.data.password)
        cy.get('[data-testid=EmaiSignup_Submit]').click({ force: true })
    })
})

Cypress.Commands.add("SignUpWithInvalidEmail", () => {
    let newDate = Date.now();
    let email = `drops.test.${newDate}.com`
    cy.fixture('userData.json').then(function (data) {
        this.data = data;
        cy.get('[data-testid=EmaiSignup_Login]').should('be.visible').click();
        cy.get('[data-testid=EmaiSignup_Name]').type(this.data.name)
        cy.get('[data-testid=EmaiSignup_Email]').type(email)
        cy.get('[data-testid=EmaiSignup_Password]').type(this.data.password)
        cy.get('[data-testid=EmaiSignup_Submit]').click({ force: true })
    })
})

Cypress.Commands.add("SignUpWithIncorrectFormatPassword", () => {
    let newDate = Date.now();
    let email = `drops.test.${newDate}@gmail.com`
    cy.fixture('userData.json').then(function (data) {
        this.data = data;
        cy.get('[data-testid=EmaiSignup_Login]').should('be.visible').click();
        cy.get('[data-testid=EmaiSignup_Name]').type(this.data.name)
        cy.get('[data-testid=EmaiSignup_Email]').type(email)
        cy.get('[data-testid=EmaiSignup_Password]').type(this.data.invalidPassword)
        cy.get('[data-testid=EmaiSignup_Submit]').click({ force: true })
    })
})

Cypress.Commands.add("LogOutFromProfileSettings", () => {
    cy.get('[data-testid=MenuBarProfile]').click({ force: true });
    cy.get('[data-testid=Settings]').should('be.visible').click();
    cy.wait(1000);
    cy.contains('Log out').click({ force: true });
    cy.wait(1000);
})