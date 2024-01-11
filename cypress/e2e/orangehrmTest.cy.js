import { url, username, password } from "./selectors.cy"

describe('template spec', () => {
  beforeEach(() => {
    cy.visit(url)
     //Login to dashboard
    cy.wait(4000)
    cy.get('body')
    cy.get('.orangehrm-login-slot-wrapper')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    cy.get('.oxd-button').click()
  })

  //Side Menu Functionality Testing

  it('Search Bar Test', () => {
    cy.wait(4000)
    cy.get('.oxd-input').type('Leave')
    cy.get('.oxd-main-menu-item').click();
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click(); //close side menu
    cy.wait(4000)
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click(); //open side menu
    cy.get('.oxd-main-menu-search').type('Admin')
    cy.get('.oxd-main-menu-item').click();
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click(); //close side menu
    cy.wait(4000)
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click();
    cy.get('.oxd-main-menu-search').type('Dashboard')
    cy.get('.oxd-main-menu-item').click();
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click();
    cy.wait(4000)
    //Log out
    cy.wait(4000)
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
  });

  it('Admin Section', () => {
    //Interacting with elements in the dashboard
    cy.wait(4000)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-main-menu-search > .oxd-icon-button > .oxd-icon').click();
    cy.wait(2000)
    //search for an admin
    cy.get(':nth-child(2) > .oxd-input').type('Boylurrs')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('ESS').click()
    cy.get('.oxd-autocomplete-text-input > input').type('okoro')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click
    cy.get('.oxd-button--ghost').click
    //Add a new admin
    //cy.get('.orangehrm-header-container > .oxd-button').click
  })

  it('other section', () => {
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

    //Log out
    cy.wait(4000)
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
  });

  it('Dropdown menu functionality Test', () => {
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
  });

  it('Forgot password Test', () => {
    // Forgot Password
    cy.wait(4000)
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.wait(4000)
    cy.get('.orangehrm-login-forgot > .oxd-text').click()
    cy.get('.oxd-button--ghost').click()
  });
})