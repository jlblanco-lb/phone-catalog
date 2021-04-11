describe('NavBar', () => {
    beforeEach(() => {
        cy.intercept('GET','/api/phones.json', {fixture: 'phones.json'}).as('phones')
    })
    it('navbar shows up when clicked', () => {
        cy.visit('/')
        cy.get('#toggle-menu-button').click()
        cy.get('#simple-menu').should('be.visible')
        cy.get('#simple-menu').click(0,0).should('be.hidden')
    })
    it('navbar links well to each item menu', () => {
        cy.get('#toggle-menu-button').click().get('#simple-menu')
        cy.get('li').first().click()
        cy.url().should('eq',Cypress.config().baseUrl + '/')
        cy.get('#simple-menu').should('be.hidden')
        cy.get('#toggle-menu-button').click().get('#simple-menu')
        cy.get('li').last().click()
        cy.url().should('eq',Cypress.config().baseUrl + '/phones/create')
        cy.get('#nav-bar-main-menu-center').click()
        cy.url().should('eq',Cypress.config().baseUrl + '/')
    })
})