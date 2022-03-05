/// <reference types="cypress" />

/* 
  Estes testes foram feitos por Marcus Vinicius Silva Costa, aluno de Engenharia de Software na UNDB!
*/


describe('Aba de pesquisa', () => {
  before(() => {
    cy.visit('/busca')
  })

  //CT_023
  it("Marcar a opção de RGB no filtro de Iluminação e marcar Não na opção de filtro Iluminação RGB", () => {
    cy.get('[data-ic-section="filtros-categoria"]').within(() => {
      cy.get('[value="RGB"]').click()
      cy.location('href').should('contain', 'page_number=1&page_size=20&facet_filters=eyJJbHVtaW5hw6fDo28iOlsiUkdCIl19&sort=most_searched')
    })
    cy.get(':nth-child(13) > .sc-caiLqq > :nth-child(1)').should('exist').click()

    cy.contains('Lamentamos, nenhum produto encontrado com esse critério de pesquisa.').should('exist')
  })

  //CT_021
  it("Acionar botão de pesquisa sem ter adicionado nada na barra de pesquisa", () => {
    cy.wait(300)
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('button').should('exist').click()
    })
    
  })

  //CT_024
  it("Pesquisar por mouse com segunda letra maiúscula e as demais minúsculas", () => {
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('#input-busca').should('exist').type('mOuse')
      cy.get('button').should('exist').click()
    })

    cy.location('href').should('contain', 'busca?query=mOuse')
    
    cy.get('.sc-gUQvok > :nth-child(1)').should('exist').within(() => {
      cy.contains('Mouse').should('exist')
    })

  })

  //CT_025
  it("Pesquisar por mouse com todas letras maiúsculas", () => {
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('#input-busca').should('exist').type('MOUSE')
      cy.get('button').should('exist').click()
    })

    cy.location('href').should('contain', 'busca?query=MOUSE')
    
    cy.get('.sc-gUQvok > :nth-child(1)').should('exist').within(() => {
      cy.contains('Mouse').should('exist')
    })

  })

  //CT_026
  it("Pesquisar por mouse com todas letras minúsculas", () => {
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('#input-busca').should('exist').type('mouse')
      cy.get('button').should('exist').click()
    })

    cy.location('href').should('contain', 'busca?query=mouse')
    
    cy.get('.sc-gUQvok > :nth-child(1)').should('exist').within(() => {
      cy.contains('Mouse').should('exist')
    })

  })

  //CT_022
  it("Marcar a opção de RGB no filtro de Iluminação", () => {
    cy.get('[data-ic-section="filtros-categoria"]').within(() => {
      cy.get('[value="RGB"]').click()
      cy.location('href').should('contain', 'page_number=1&page_size=20&facet_filters=eyJJbHVtaW5hw6fDo28iOlsiUkdCIl19&sort=most_searched')//busca na url diponibilizado pela Kabum se foi aplicado o filtro 
    })
  })

  //CT_027
  it("Pesquisar por mouse com caractere especial @ no lugar do “o”", () => {
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('#input-busca').should('exist').type('m@ouse')
      cy.get('button').should('exist').click()
    })

    cy.location('href').should('contain', 'busca?query=m%40ouse')
    
    cy.get('.sc-gUQvok > :nth-child(1)').should('exist').within(() => {
      cy.contains('Mouse').should('exist')
    })

  })

  //CT_028
  it("Adicionar diversos espaços na barra de pesquisa e aciona o botão de pesquisa", () => {
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('#input-busca').should('exist').type('     ')
      cy.get('button').should('exist').click()
    })

    cy.location('href').should('contain', 'busca?query=+++++')
    
    cy.get('#listingCount').should('exist').within(() => {
      cy.contains('10000').should('exist')
    })

  })
  
  //CT_029
  it("Informar o item mouse na barra de pesquisa seguidos de vários espaços", () => {
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('#input-busca').should('exist').type('mouse     ')
      cy.get('button').should('exist').click()
    })

    cy.location('href').should('contain', 'busca?query=mouse+++++')
    
    cy.get('.sc-gUQvok > :nth-child(1)').should('exist').within(() => {
      cy.contains('Mouse').should('exist')
    })

  })

  //CT_030
  it("Informar diversos espaços na barra de pesquisa antes de adicionar o item mouse", () => {
    cy.get('#barraBuscaKabum').within(() => {
      cy.get('#input-busca').should('exist').type('     mouse')
      cy.get('button').should('exist').click()
    })

    cy.location('href').should('contain', 'busca?query=+++++mouse')
    
    cy.get('.sc-gUQvok > :nth-child(1)').should('exist').within(() => {
      cy.contains('Mouse').should('exist')
    })

  })

})