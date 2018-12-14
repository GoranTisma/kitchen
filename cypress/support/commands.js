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
    .should('be.visible')
    .get('#scroll-vertical button').scrollIntoView()
    .should('be.visible')
    .get('#scroll-both button').scrollIntoView()
    .should('be.visible');
  })

Cypress.Commands.add('scrollto1', function () {
    cy
    .contains('scrollTo').click()
    .get('#scrollable-horizontal').scrollTo('right')
    .get('#scrollable-vertical').scrollTo(250, 250)
    .get('#scrollable-both').scrollTo('75%', '25%');
  })
Cypress.Commands.add('trigger1', function () {
    cy
    .contains('trigger').click()
    .get('.trigger-input-range')
    .invoke('val', 67).trigger('change')
    .get('input[type=range]').siblings('p')
    .should('have.text', '67');
  })

Cypress.Commands.add('window1', function () {
    cy
    .contains('window').click()
    .window().should('have.property', 'top');
  })

Cypress.Commands.add('document1', function () {
    cy
    .get(".dropdown-toggle").click()
    .get(".dropdown-menu li").eq(3).click().document()
    .should('have.property', 'charset').and('eq', 'UTF-8');
  })

Cypress.Commands.add('title1', function () {
    cy
    .contains('title').click()
    .title().should('include', 'Kitchen Sink');
  })

Cypress.Commands.add('viewport1', function () {
    cy
    .contains('viewport').click()
    .get('#navbar').should('be.visible')
    .viewport(320, 480)
    .viewport(900, 900)
    .viewport('macbook-15')
    .wait(200)
    .viewport('macbook-13')
    .wait(200)
    .viewport('macbook-11')
    .wait(200)
    .viewport('ipad-2')
    .wait(200)
    .viewport('ipad-mini')
    .wait(200)
    .viewport('iphone-6+')
    .wait(200)
    .viewport('iphone-6')
    .wait(200)   
    .viewport('iphone-5')
    .wait(200)
    .viewport('iphone-4')
    .wait(200)
    .viewport('iphone-3');
  })

  
Cypress.Commands.add('hash1', function () {
    cy
    .contains('hash').click()
    .hash().should('be.empty');
  })

Cypress.Commands.add('location1', function () {
    cy
    .contains('location').click()
    .location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('http://localhost:8080/commands/location')
      expect(location.host).to.eq('localhost:8080')
      expect(location.hostname).to.eq('localhost')
      expect(location.origin).to.eq('http://localhost:8080')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('8080')
      expect(location.protocol).to.eq('http:')
      expect(location.search).to.be.empty
    });
  })

Cypress.Commands.add('url1', function () {
    cy
    .contains('url').click()
    .url().should('eq', 'http://localhost:8080/commands/location');
  })

Cypress.Commands.add('go1', function () {
    cy
    .get(".dropdown-toggle").click()
    .get(".dropdown-menu li").eq(6).click()
    .location('pathname').should('include', 'navigation')
    .go(-1).location('pathname').should('include', '')
    .go(1).location('pathname').should('include', 'commands/navigation');
  })

Cypress.Commands.add('reload1', function () {
    cy
    .contains('reload').click()
    .reload();
  })

Cypress.Commands.add('visit1', function () {
    cy
    .contains('visit').click()
    .visit('http://localhost:8080/commands/location')
    .visit('http://localhost:8080/commands/misc')
    .go(-2);
  })

Cypress.Commands.add('should1', function () {
    cy
    .get(".dropdown-toggle").click()
    .get(".dropdown-menu li").eq(7).click()
    .get('.assertion-table')
    .find('tbody tr:last').should('have.class', 'success');
  })

Cypress.Commands.add('and1', function () {
    cy
    .get(".dropdown-toggle").click()
    .get(".dropdown-menu li").eq(7).click()
    .get('.assertions-link')
    .should('have.class', 'active')
    .and('have.attr', 'href')
    .and('include', 'cypress.io');
  })

Cypress.Commands.add('end1', function () {
    cy
    .contains('end').click()
    .get('.misc-table').within(() => {
      cy.contains('Cheryl').click().end()
    });
  })

Cypress.Commands.add('focused1', function () {
    cy
    .contains('focused').click()
    .get('.misc-form').find('#name').click()
    .focused().should('have.id', 'name').type('goran')
    .get('.misc-form').find('#description').click()
    .focused().should('have.id', 'description').type('opis');
  })

Cypress.Commands.add('screenshot1', function () {
    cy
    .contains('screenshot').click();
    //.screenshot('my-image');
  })

Cypress.Commands.add('wrap1', function () {
    cy
    .contains('wrap').click()
    .wrap({foo: 'bar'})
    .should('have.property', 'foo')
    .and('include', 'bar');
  })

Cypress.Commands.add('each1', function () {
    cy
    .contains('each').click()
    .get('.connectors-each-ul li')
    .each(function($el, index, $list){
      console.log($el, index, $list)
  });
  })

Cypress.Commands.add('its1', function () {
    cy
    .contains('its').click()
    .get('.connectors-its-ul>li')
    .its('length')
    .should('be.gt', 2);
  })

Cypress.Commands.add('invoke1', function () {
    cy
    .contains('invoke').click()
    .get('.connectors-div').should('be.hidden')
    .invoke('show')
    .should('be.visible');
  })

Cypress.Commands.add('spread1', function () {
    cy
    .contains('spread').click();
    //???
  })

Cypress.Commands.add('then1', function () {
    cy
    .contains('then').click()
    .get('.connectors-list>li').then(function($lis){
      expect($lis).to.have.length(3)
      expect($lis.eq(0)).to.contain('Walk the dog')
      expect($lis.eq(1)).to.contain('Feed the cat')
      expect($lis.eq(2)).to.contain('Write JavaScript')
    });
  })

Cypress.Commands.add('as1', function () {
    cy
    .contains('Aliasing').click({force: true})
    .get('.as-table')
    .find('tbody>tr').first()
    .find('td').first()
    .find('button').as('firstBtn')
    .get('@firstBtn').click();
  })

Cypress.Commands.add('wait1', function () {
    cy
    .contains('wait').click()
    .get('.wait-input1').type('Wait 1000ms after typing')
    .wait(1000)
    .get('.wait-input2').type('Wait 1000ms after typing')
    .wait(1000)
    .get('.wait-input3').type('Wait 1000ms after typing')
    .wait(1000);
  })

Cypress.Commands.add('server1', function () {
    cy
    .contains('server').click()
    .server().should((server) => {
      expect(server.delay).to.eq(0)
      expect(server.method).to.eq('GET')
      expect(server.status).to.eq(200)
      expect(server.headers).to.be.null
      expect(server.response).to.be.null
      expect(server.onRequest).to.be.undefined
      expect(server.onResponse).to.be.undefined
      expect(server.onAbort).to.be.undefined
    });
  })

Cypress.Commands.add('request1', function () {
    cy
    .get(".dropdown-toggle").click()
    .get(".dropdown-menu li").eq(12).click();
    //???
  })

Cypress.Commands.add('route1', function () {
    cy
    .contains('route').click();
    //???
  })

Cypress.Commands.add('fixture1', function () {
    cy
    .contains('Files').click({force: true});
    //???
  })

Cypress.Commands.add('writefile1', function () {
    cy
    .contains('Files').click({force: true});
    //???
  })

Cypress.Commands.add('CLS1', function () {
    cy
    .contains('Local Storage').click({force: true});
    //???
  })

Cypress.Commands.add('cookies1', function () {
    cy
    .contains('Cookies').click({force: true})
    .get('#getCookie .set-a-cookie').click()
    .getCookie('token').should('have.property', 'value', '123ABC')
    .get('#getCookies .set-a-cookie').click()
    .getCookies().should('have.length', 1).should((cookies) => {
      expect(cookies[0]).to.have.property('name', 'token')
      expect(cookies[0]).to.have.property('value', '123ABC')
      expect(cookies[0]).to.have.property('httpOnly', false)
      expect(cookies[0]).to.have.property('secure', false)
      expect(cookies[0]).to.have.property('domain')
      expect(cookies[0]).to.have.property('path')
    })
    .setCookie('foo', 'bar')
    .getCookie('foo').should('have.property', 'value', 'bar')
    .get('#clearCookie .set-a-cookie').click()
    .getCookie('token').should('have.property', 'value', '123ABC')
    .clearCookie('token').should('be.null');
  })

Cypress.Commands.add('spy1', function () {
    cy
    .contains('spy').click();
    //???
  })

Cypress.Commands.add('clock1', function () {
    cy
    .contains('clock').click();
    //???
  })

Cypress.Commands.add('tick1', function () {
    cy
    .contains('tick').click();
    //???
  })

