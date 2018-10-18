describe('PHPTravels', () => {
  it('meets e2e requirements', () => {
    cy.visit('/')

    cy.get('#test').should('have.html', 'Application Test Drive.')
    cy.get('#poop').should('have.html', 'Check out our services')
  })
})
