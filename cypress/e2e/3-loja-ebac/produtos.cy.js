/// <reference types='cypress'/>

import produtosPage from "../../support/page-objects/produtos.page";
import ProdutosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        ProdutosPage.visitarUrl()
    });
    it('Deve selecionar um produto da lista', () => {
        ProdutosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')    
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        ProdutosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        ProdutosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adiocionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Green', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho')
    });


    it.only('Deve adiocionar produto ao carrinho - Buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
 
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)


        })

        

    });
});