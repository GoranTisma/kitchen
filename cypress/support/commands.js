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

  Cypress.Commands.add('type1', function () {
    cy
    .contains('type').click()
    .get('.action-email')
    .type('fake@email.com', { delay: 200 }).should('have.value', 'fake@email.com')
    .type('{del}{selectall}{backspace}')
    .get('.action-disabled')
    .type('disabled error checking', { force: true })
    .should('have.value', 'disabled error checking');
  })

  Cypress.Commands.add('focus1', function () {
    cy
    .contains('focus').click()
    .get('.action-focus').focus()
    .should('have.class', 'focus')
    .type('message');
  })

  Cypress.Commands.add('blur1', function () {
    cy
    .contains('blur').click()
    .get('.action-blur').type('About to blur').blur()
    .should('have.class', 'error')
    .prev().should('have.attr', 'style', 'color: red;');
  })

  Cypress.Commands.add('clear1', function () {
    cy
    .contains('clear').click()
    .get('.action-clear').type('Clear this text')
    .should('have.value', 'Clear this text')
    .clear()
    .should('have.value', '');
  })

  Cypress.Commands.add('submit1', function () {
    cy
    .contains('submit').click()
    .get('.action-form')
    .find('.form-control').type('HALFOFF')
    .get('.action-form').submit()
    .next().should('contain', 'Your form has been submitted!');
  })

  Cypress.Commands.add('click1', function () {
    cy
    .get(".dropdown-toggle").click()
    .get(".dropdown-menu li").eq(2).click()
    .get('.action-btn').click()
    .get('#action-canvas').click('topLeft')
    .get('#action-canvas').click('top')
    .get('#action-canvas').click('topRight')
    .get('#action-canvas').click()
    .get('#action-canvas').click('left')
    .get('#action-canvas').click('right')
    .get('#action-canvas').click('bottomLeft')
    .get('#action-canvas').click('bottom')
    .get('#action-canvas').click('bottomRight')
    .get('.action-labels>.label').click({ multiple: true });
  })

  Cypress.Commands.add('dblclick1', function () {
    cy
    .contains('dblclick').click()
    .get('.action-div').dblclick().should('not.be.visible')
    .get('.action-input-hidden').should('be.visible');
  })

  Cypress.Commands.add('check1', function () {
    cy
    .contains('check').click()
    .get('.action-checkboxes [type="checkbox"]').not('[disabled]')
    .check()
    .get('.action-radios [type="radio"]').not('[disabled]')
    .check()
    .get('.action-multiple-checkboxes [type="checkbox"]')
    .check(['checkbox1', 'checkbox2']);
  })

  Cypress.Commands.add('uncheck1', function () {
    cy
    .contains('uncheck').click()
    .get('.action-check [type="checkbox"]')
    .not('[disabled]').uncheck()
    .get('.action-check [disabled]')
    .uncheck({ force: true });
  })

  Cypress.Commands.add('select1', function () {
    cy
    .contains('select').click()
    .get('.action-select').select('apples')
    .get('.action-select-multiple')
    .select(['apples', 'oranges', 'bananas'])
    cy.get('.action-select').select('fr-bananas');
  })

  Cypress.Commands.add('scrollintoview1', function () {
    cy
    .contains('scrollIntoView').click()
    .get('#scroll-horizontal button').scrollIntoView()
    .get('#scroll-vertical button').scrollIntoView()
    .get('#scroll-both button').scrollIntoView();
  })