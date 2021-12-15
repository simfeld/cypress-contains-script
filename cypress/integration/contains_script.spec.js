describe('cypress contains test', () => {
    it('cy.contains removes style tags from the DOM', () => {
        cy.visit('http://localhost:8080');
        cy.get('button#my_button_1').should('be.visible');
        cy.contains('Hello').should('be.visible');
        cy.get('button#my_button_1').should('be.visible');
    });

    it('cy.contains removes script tags from the DOM', () => {
        cy.visit('http://localhost:8080');
        cy.window().then(win => {
            const scriptElement = win.document.getElementById('my_script');
            expect(scriptElement?.id).to.equal('my_script');
        });
        cy.get('button#my_button_2').click();
        cy.contains('This is the result').should('be.visible');
        cy.window().then(win => {
            const scriptElement = win.document.getElementById('my_script');
            expect(scriptElement?.id).to.equal('my_script');
        });
    });
});
