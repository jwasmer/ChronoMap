describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/map/')
  })
  it('Should load the map when routed to localhost:3000/map/', () => {
    cy.url().should('eq', 'http://localhost:3000/map/')
  })
})