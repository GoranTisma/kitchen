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

      it('eq', function () {
        cy
          .eq1();
      })

      it('filter', function () {
        cy
          .filter1();
      })

      it('find', function () {
        cy
          .find1();
      })

      it('first', function () {
        cy
          .first1();
      })

      it('last', function () {
        cy
          .last1();
      })

      it('next', function () {
        cy
          .next1();
      })

      it('nextall', function () {
        cy
          .nextall1();
      })

      it('nextuntil', function () {
        cy
          .nextuntil1();
      })

      it('not', function () {
        cy
          .not1();
      })

      it('parent', function () {
        cy
          .parent1()
      })

      it('parents', function () {
        cy
          .parents1()
      })
  });