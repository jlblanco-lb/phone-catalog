describe('Dashboard test', () => {
    it('visits the app, is empty, alert box should appear and button to add more.', () => {
        cy.intercept('GET','/api/phones.json', {}).as('phones')
        cy.visit('/')
        cy.get('.dashboard-add-phone-link').should('be.visible')
        cy.get('.MuiAlert-standardInfo').should('be.visible')
        cy.get('.phone-box-item-link').should('not.exist')
    })

    it('visits the app, and there are phones.', () => {
        cy.intercept('GET','/api/phones.json', {fixture: 'phones.json'}).as('phones')
        cy.visit('/')
        cy.get('.phone-box-item-link').should('exist')
    })
})