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

  Cypress.Commands.add('closest1', function () {
    cy
      .contains('closest').click()
      .get('.list-group-item')
      .closest('ul')
      .should('have.class', 'list-group');
  })

  Cypress.Commands.add('eq1', function () {
    cy
      .get(".dropdown-toggle").click()
      .get(".dropdown-menu li").eq(1).click()
      .get('.traversal-list li')
      .eq(1).should('contain', 'siamese');
  })

  Cypress.Commands.add('filter1', function () {
    cy
    .contains('filter').click()
    .get('.traversal-nav li')
    .filter('.active').should('contain', 'About');
  })

  Cypress.Commands.add('find1', function () {
    cy
    .contains('find').click()
    .get('.pagination li').find('a').eq(2).should('contain', 2);
  })

  Cypress.Commands.add('first1', function () {
    cy
    .contains('first').click()
    .get('.traversal-table th')
    .first().should('contain', '#');
  })

  Cypress.Commands.add('last1', function () {
    cy
    .contains('last').click()
    .get('.traversal-buttons .btn').last()
    .should('have.value', 'Submit');
  })

  Cypress.Commands.add('next1', function () {
    cy
    .contains('next').click()
    .get('.traversal-ul li')
    .first().next().should('contain', 'oranges');
  })

  Cypress.Commands.add('nextall1', function () {
    cy
    .contains('nextAll').click()
    .get('.traversal-next-all')
    .contains('oranges').nextAll().should('have.length', 3);
  })

  Cypress.Commands.add('nextuntil1', function () {
    cy
    .contains('nextUntil').click()
    .get('#veggies')
    .nextUntil('#nuts').should('have.length', 3);
  })

  Cypress.Commands.add('not1', function () {
    cy
    .contains('not').click()
    .get('.traversal-disabled .btn')
    .not('[disabled]').should('contain', 'Button');
  })

  Cypress.Commands.add('parent1', function () {
    cy
    .contains('parent').click()
    .get('.traversal-mark')
    .parent().should('contain', 'Morbi leo risus');
  })

  Cypress.Commands.add('parents1', function () {
    cy
    .contains('parents').click()
    .get('.traversal-cite')
    .parents().should('match', 'blockquote');
  })

  Cypress.Commands.add('parentsuntil1', function () {
    cy
    .contains('parentsUntil').click()
    .get('.clothes-nav')
    .find('.active')
    .parentsUntil('.clothes-nav')
    .should('have.length', 2);
  })

  Cypress.Commands.add('prev1', function () {
    cy
    .contains('prev').click()
    .get('.birds li').eq(2)
    .prev().should('contain', 'Lorikeets');
  })

  Cypress.Commands.add('prevall1', function () {
    cy
    .contains('prevAll').click()
    .get('.fruits-list').find('.third')
    .prevAll().should('have.length', 2);
  })

  Cypress.Commands.add('prevuntil1', function () {
    cy
    .contains('prevUntil').click()
    .get('.foods-list').find('#nuts')
    .prevUntil('#veggies').should('have.length', 3);
  })

  Cypress.Commands.add('siblings1', function () {
    cy
    .contains('siblings').click()
    .get('.traversal-pills .active')
    .siblings().should('have.length', 2);
  })