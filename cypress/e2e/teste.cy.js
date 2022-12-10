
///<reference types="cypress"/>
describe('Meu primeiro teste',() =>{
    beforeEach(()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        
    })


    it('teste de algo',()=>{
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('[type="checkbox"]').check('option-1')
        cy.get('[type="checkbox"]').uncheck('option-1')
        .should('not.be.checked')
        cy.get('input[value = blue]').click()
        cy.get('input[value = yellow]').check()
        cy.get('input[value = blue]').should('not.be.checked')
    })

    it('Outro teste',()=>{
        cy.get('#fruit-selects').select('Apple')
        cy.get('[type="radio"]').check('cabbage',{force:true})
    })
})

    