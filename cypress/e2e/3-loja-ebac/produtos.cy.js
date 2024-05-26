/// <reference types='cypress'/>

import ProdutosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        ProdutosPage.visitarUrl()
    });
    it('Deve selecionar um produto da lista', () => {
        ProdutosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')    
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        ProdutosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adiocionar produto ao carrinho', () => {
        
    });
});