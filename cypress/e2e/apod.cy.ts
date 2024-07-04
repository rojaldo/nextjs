require('@cypress/xpath');

describe('counter test', () => {
    it('passes', () => {
        cy.visit('localhost:3000/apod')
        cy.xpath('/html/body/main/div/section/input').type('2021-08-01')
        // cy.wait(500)
        cy.xpath('/html/body/main/div/section/div/div/div/h2').should('have.text', 'Pluto in Enhanced Color')
    })

    it('check if video component is visible', () => {
        cy.visit('localhost:3000/apod')
        cy.xpath('/html/body/main/div/section/input').type('2021-08-01')
        // cy.wait(500)
        // check that css selector body > div > section > div > div > div > div > lite-youtube > button is visible
        cy.get('body > div > section > div > div > div > div > lite-youtube > button').should('be.visible')
    }
    );
})

