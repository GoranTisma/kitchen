describe('Example', function () {
  beforeEach(function () {
      cy.visit('localhost:8080')
    })

    it('get', function () {
      cy
        .get1();
    })
});