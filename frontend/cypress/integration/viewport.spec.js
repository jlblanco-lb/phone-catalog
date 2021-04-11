context('Viewport', () => {
    beforeEach(() => {
        cy.intercept('GET','/api/phones.json', {fixture: 'phones.json'}).as('phones')
        cy.visit('/')
    })

    it('set the viewport size and dimension', () => {

        cy.get('#nav-bar-main-menu').should('be.visible')
        cy.viewport(320, 480)

        // the navbar should have collapse since our screen is smaller
        cy.get('#nav-bar-main-menu').should('be.visible')
        cy.get('#toggle-menu-button').should('be.visible').click()
        cy.get('#simple-menu').find('a').should('be.visible')

        // lets see what our app looks like on a super large screen
        cy.viewport(2999, 2999)
        cy.get('#simple-menu').find('a').should('be.visible')

        // I added a cy.wait() between each viewport change so you can see
        // the change otherwise it is a little too fast to see :)

        cy.viewport('macbook-15')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('macbook-13')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('macbook-11')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('ipad-2')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('ipad-mini')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('iphone-6+')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('iphone-6')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('iphone-5')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('iphone-4')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('iphone-3')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)

        // the default orientation is 'portrait'
        cy.viewport('ipad-2', 'portrait')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
        cy.viewport('iphone-4', 'landscape')
        cy.get('#simple-menu').find('a').should('be.visible')
        cy.wait(200)
    })
})