describe('Options', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/map/')
    cy.intercept('https://api.mapbox.com/geocoding/v5/mapbox.places/21%20Foote%20Street%2C%20Pawcatuck%2C%20Connecticut.json?access_token=pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw', {
      method: 'GET',
      fixture: '../fixtures/search.json'
    })
  })
  it('Should route the user to /map/options when they navigate to the options page', () => {
    cy.get('[data-cy="options-btn"]').click()
    cy.url().should('eq', 'http://localhost:3000/map/options/')
  })
  it('Should display a card representing the saved address', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="address-card"]').should.exist
  })
  it('Should display a header saying nothing has been saved if no addresses are saved', () => {
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="error"]').should.exist
  })
  it('Should have options to adjust the time parameters of saved searches', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="15m"]').click()
    cy.get('[data-cy="15m"]').parent().find("input").should("be.checked")
    cy.get('[data-cy="30m"]').click()
    cy.get('[data-cy="30m"]').parent().find("input").should("be.checked")
    cy.get('[data-cy="45m"]').click()
    cy.get('[data-cy="45m"]').parent().find("input").should("be.checked")
    cy.get('[data-cy="60m"]').click()
    cy.get('[data-cy="60m"]').parent().find("input").should("be.checked")
  })
  it('Should have options to adjust the profile parameters of saved searches', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="walking"]').click()
    cy.get('[data-cy="walking"]').parent().find("input").should("be.checked")
    cy.get('[data-cy="cycling"]').click()
    cy.get('[data-cy="cycling"]').parent().find("input").should("be.checked")
    cy.get('[data-cy="driving"]').click()
    cy.get('[data-cy="driving"]').parent().find("input").should("be.checked")
  })
  it('Should have a visibility toggle', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="visibility"]').click()
    cy.get('[data-cy="visibility"]').should("not.be.checked")
  })
  it('Should delete an address when the bin icon is clicked', () => {
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="delete"]').click()
    cy.get('[data-cy="error"]').should.exist
  })
  it('Should allow you to navigate back to the map by clicking on the View Map button', () => {
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="map-btn"]').click()
    cy.url().should('eq', 'http://localhost:3000/map/')
  })
})