describe('Form', () => {
    beforeEach(() => {
        cy.visit('/phones/create')
    })

    it('it focuses the input', () => {
        cy.focused().should('have.id', 'phone-name-autofocus')
    })
    it('accepts inputs', () => {
        const input = {
            'name': 'Phone E2E test',
            'manufacturer': 'Manufacturer test',
            'color': 'Dark Blue',
            'screen': '15',
            'processor': 'Apple-designed 4 core',
            'ram': 8,
            'price': 1299,
            'description': "The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones for 2020. The phones come in 6.1-inch and 5.4-inch sizes with identical features, including support for faster 5G cellular networks, OLED displays, improved cameras, and Apple's latest A14 chip, all in a completely refreshed design."
        }
        cy.get('#phone-name-autofocus')
            .type(input.name)
            .should('have.value', input.name)
        cy.get('[name="manufacturer"]')
            .type(input.manufacturer)
            .should('have.value', input.manufacturer)
        cy.get('[name="color"]')
            .type(input.color)
            .should('have.value', input.color)
        cy.get('[name="screen"]')
            .type(input.screen)
            .should('have.value', input.screen)
        cy.get('[name="processor"]')
            .type(input.processor)
            .should('have.value', input.processor)
        cy.get('[name="ram"]')
            .type(input.ram)
            .should('have.value', input.ram)
        cy.get('[name="description"]').last()
            .type(input.description)
            .should('have.value', input.description)
        cy.get('[name="price"]')
            .type(input.price)
            .should('have.value', input.price)
    })
})