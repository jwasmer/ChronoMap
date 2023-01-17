describe('MapUI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/map/')
    cy.intercept('https://api.mapbox.com/geocoding/v5/mapbox.places/21%20Foote%20Street%2C%20Pawcatuck%2C%20Connecticut.json?access_token=pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw', {
      method: 'GET',
      fixture: '../fixtures/search.json'
    })
  })
  it('Should have a search bar that can accept input text', () => {
    cy.get('[data-cy="search"]').should.exist
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="search"]').should("have.value", "21 Foote Street, Pawcatuck, Connecticut")
  })
  it('Should have a search button that executes a search when clicked', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
  })
  it('Should have a save button that can be clicked to save a search', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
  })
  it('Should have a button to view saved addresses', () => {
    cy.get('[data-cy="options-btn"]').should.exist
  })
  it('Should allow you to search for a location, save your search, and view it in the Options page', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
  })
})