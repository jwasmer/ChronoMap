describe('Options', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/map/')
    cy.intercept('https://api.mapbox.com/geocoding/v5/mapbox.places/21%20Foote%20Street%2C%20Pawcatuck%2C%20Connecticut.json?access_token=pk.eyJ1Ijoiandhc21lciIsImEiOiJjbGNwbjFiNjI3bnBiM3FwOWFyYnZyNmRtIn0.dy0DAO9j8qhnJ-df-xb1Yw', {
      method: 'GET',
      fixture: '../fixtures/search.json'
    })
  })
  it('Should allow the user to click on the "walk" icon menu selection to change the settings of the saved address', () => {
    cy.get('[data-cy="icon-menu"]').click()
    cy.get('[data-cy="walking-menu-item"]').click()
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="walking"]').parent().find("input").should("be.checked")
  })
  it('Should allow the user to click on the "bike" icon menu selection to change the settings of the saved address', () => {
    cy.get('[data-cy="icon-menu"]').click()
    cy.get('[data-cy="cycling-menu-item"]').click()
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="cycling"]').parent().find("input").should("be.checked")
  })
  it('Should allow the user to click on the "walk" icon menu selection to change the settings of the saved address', () => {
    cy.get('[data-cy="icon-menu"]').click()
    cy.get('[data-cy="walking-menu-item"]').click()
    cy.get('[data-cy="icon-menu"]').click()
    cy.get('[data-cy="driving-menu-item"]').click()
    cy.get('[data-cy="search"]').type("21 Foote Street, Pawcatuck, Connecticut")
    cy.get('[data-cy="submit-search"]').click()
    cy.wait(500)
    cy.get('[data-cy="save"]').click()
    cy.get('[data-cy="options-btn"]').click()
    cy.get('[data-cy="driving"]').parent().find("input").should("be.checked")
  })
})