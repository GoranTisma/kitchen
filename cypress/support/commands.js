// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('get1', function () {
    cy
      .get('.container h1').should('contain', 'Kitchen Sink')
      .get(".dropdown-toggle").click()
      .get(".dropdown-menu li").first().click()
      .get('#query-btn').should('contain', 'Button');
  })

Cypress.Commands.add('contain1', function () {
    cy
      .contains('get').click()
      .get('.query-list')
      .contains('apples').should('have.class', 'first');
  })

Cypress.Commands.add('within1', function () {
    cy
      .contains('within').click()
      .get('#inputName').type('Goran')
      .get('.query-form').within(() => {
    cy.get('#inputEmail').type('gorantisma@yahoo.com')
      .get('#inputPassword').type('goran777');
      })
  })

Cypress.Commands.add('root1', function () {
    cy
      .contains('root').click()
      .root().should('match', 'html')
      .get('.query-ul').within(() => {
    cy.root().should('have.class', 'query-ul');
      })
  }) 

Cypress.Commands.add('children1', function () {
    cy
      .contains('children').click()
      .get('.traversal-breadcrumb')
      .children('.active')
      .should('contain', 'Data');
  })