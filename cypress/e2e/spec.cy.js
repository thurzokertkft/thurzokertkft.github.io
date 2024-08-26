describe('Example Cypress Test', () => {
  it('should load the example page and find the correct elements', () => {
    cy.visit('https://example.cypress.io')
    
    // Ellenőrizzük, hogy az oldal tartalmaz-e egy bizonyos szöveget
    cy.contains('type').should('be.visible')
    
    // Kattintsunk egy gombra és ellenőrizzük az URL változását
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')

    // Keressünk egy input mezőt, írjunk bele, majd ellenőrizzük, hogy helyesen van-e beállítva az érték
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

describe('Responsive Design Tests', () => {
  beforeEach(() => {
    // Látogass el az oldalra az adott viewport beállítással
    cy.visit('http://localhost:3000/Works'); // vagy az alkalmazás URL-je
  });

  it('should display correctly on mobile view', () => {
    cy.viewport(375, 667); // Ezt a méretet az okostelefonok lefedésére használhatod
    cy.get('nav').should('be.visible');
    cy.get('img').should('be.visible');
    // Más elemek ellenőrzése itt...
  });
  
  // Közepes képernyők, például tabletek
  it('should display correctly on tablet view', () => {
    cy.viewport(768, 1024); // Ezt a méretet a tabletek lefedésére használhatod
    cy.get('nav').should('be.visible');
    cy.get('img').should('be.visible');
    // Más elemek ellenőrzése itt...
  });
  
  // Nagyobb képernyők, például asztali gépek
  it('should display correctly on desktop view', () => {
    cy.viewport(1920, 1080); // Ezt a méretet az asztali gépek lefedésére használhatod
    cy.get('nav').should('be.visible');
    cy.get('img').should('be.visible');
    
  });
});