describe('Example', function () {
    beforeEach(function () {
        cy.visit('localhost:8080')
      })

      it('get', function () {
        cy
          .get1();
      })

      it('contain', function () {
        cy
          .contain1();
      })

      it('within', function () {
        cy
          .within1();
      })

      it('root', function () {
        cy
          .root1();
      })

      it('children', function () {
        cy
          .children1();
      })

      it('closest', function () {
        cy
          .closest1();
      })
  });