import { url, username, password } from "./selectors.cy"

describe('template spec', () => {
  it('passes', () => {
    cy.visit(url)

    //Login to dashboard
    cy.wait(6000)
    cy.get('body')
    cy.get('.orangehrm-login-slot-wrapper')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-button').click()

    //Interacting with elements in the dashboard
    cy.wait(6000)
    cy.get('.oxd-input').type('Admin')
    cy.wait(4000)
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.get(':nth-child(4) > .oxd-main-menu-item').click()
    cy.get(':nth-child(5) > .oxd-main-menu-item').click()
    cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    cy.get(':nth-child(7) > .oxd-main-menu-item').click()
    cy.get(':nth-child(8) > .oxd-main-menu-item').click()
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    cy.wait(4000)
    cy.get(':nth-child(10) > .oxd-main-menu-item').click()
    cy.get('.oxd-button--ghost').click()
    cy.get(':nth-child(11) > .oxd-main-menu-item').click()
    cy.get(':nth-child(12) > .oxd-main-menu-item').click()
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click()

    // Dropdown avatar
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
    cy.get('.oxd-dialog-close-button').click()
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(2) > .oxd-userdropdown-link').click()
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

    // Forgot Password
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('.oxd-button--ghost').click()
  })
})