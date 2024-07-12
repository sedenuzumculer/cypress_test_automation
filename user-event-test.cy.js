
describe('Shopping Cart Test', () => {
    beforeEach(() => {
        cy.setCookie('session_id', 'simulated_session_id'); // cookie ile kullanıcı seçim ekranı backendi dahil etmeden 
        cy.setCookie('user_id', '12345'); 
      });
      
    it('User Test', () => {
      cy.visit('https://bahaungor.github.io/shopping_cart/#/'); //web sitesinin sayfası
      cy.intercept('GET', 'https://fakestoreapi.com/products').as('getProducts');//apiden ürünleri çekme

      cy.get(".ShopBtn").click();
      cy.wait('@getProducts');
      cy.log(cy.location('pathname'));
      
      cy.location('hash').should('eq', '#/shop');
      cy.get('.product').should('have.length', 20);
      cy.get(':nth-child(2) > .priceRow > button').click()

      
      cy.get('.product').first().then(($product) => {
    

   
      cy.wrap($product).find('.priceRow button').eq(0).click();
      cy.get('.product').first().find('.priceRow button').eq(1).click();
      cy.get('.product').first().find('.priceRow .quantityButtons :nth-child(1)').click();
      
      cy.get('.product').first().find('.priceRow .quantityButtons :nth-child(3)').click();
      let initialQuantityIndex;

    cy.get('.product').first().find('.quantity').then(($quantityElement) => {
    
    });

      cy.get('.product').first().find('.quantity').then(($quantityElement) => {
        initialQuantityIndex = $quantityElement.index(); // Indexi al
        const newQuantityIndex = $quantityElement.index();
        expect(newQuantityIndex).to.not.equal('initialQuantityIndex'); 
      });
      
        });
        cy.get('.ShoppingBag').click();  
        cy.window().then((win) => {
            const userChoice = win.prompt('Ne yapmak istersiniz?', 'Ödeme Yap/Sepeti Boşalt');
             // 2. Kullanıcının Seçimine Göre İşlem Yapma
      if (userChoice === 'Ödeme Yap') {
        cy.get('.priceChart > button').click();
        cy.get('.thankyou').should('be.visible').and('contain', 'You made a fake purchase! Thank you!');
      } else if (userChoice === 'Sepeti Boşalt') {
        cy.get('.removeButton').each(($removeButton) => {
          cy.wrap($removeButton).click();
        });
        cy.get('.emptyCart').should('be.visible').and('contain', 'Your cart is empty');
      } else {
        throw new Error('Geçersiz seçim');
      }

    });
  cy.get('.header').click();
    
  });
       
});



