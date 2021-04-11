describe('Error 404', () => {

    it('visits a non existing url and gets error 404', () => {
        cy.visit('/non_existing_url')
        cy.title().should("equal", "Phone Catalog | Not found");
    })
    it('visits a non existing phone and gets error 404', () => {
        cy.visit('/phones/show/99999999999')
        cy.title().should("equal", "Phone Catalog | Not found");
    })
    it('visits a non existing phone to update it and gets error 404', () => {
        cy.visit('/phones/update/99999999999')
        cy.title().should("equal", "Phone Catalog | Not found");
    })
})

describe('Phone view', () => {
    it('visits an existing phone and gets the detail view',() => {
        cy.intercept('GET','/api/phones/1.json', {fixture: 'phone.json'}).as('phone')
        cy.visit('/phones/show/1')
        cy.get('.PhoneDescriptionPage').should('exist')
    })
    it('visits an existing phone to update it and gets every field',() => {
        cy.intercept('GET','/api/phones/1.json', {fixture: 'phone.json'}).as('phone')
        cy.visit('/phones/update/1')
        cy.get('.PhoneUpdatePage').should('exist')
    })
})