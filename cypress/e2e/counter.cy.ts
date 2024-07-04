require('@cypress/xpath');

xdescribe('counter test', () => {
    it('passes', () => {
        cy.visit('localhost:3000/counter')
        //check if the counter is 0
        cy.get('h2').should('have.text', '0')
        // get element with xpath: /html/body/div/button
        cy.xpath('/html/body/div/button').click()
        // wait for the button to be clicked
        // cy.wait(500)
        // check if the counter is 1
        cy.get('h2').should('have.text', '1')
    })
})