// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// cypress tests
describe('First test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/products')
  });
  it('Goes to Products page', () => {
    cy.contains('Products').click()
  });
  it('Correct url for product page', () => {
    cy.url().should('include', '/products')
  });
  it('Access search bar', () => {
    cy.get('.searchField').type('levoit')
    cy.get('.searchField').should('have.value', 'levoit')
  });
  it('Test Routing', () => {
    cy.visit('http://localhost:3000')
  });
});