describe('Youtube cases', ()=>{

it('Tesace 1', ()=>{
    cy.visit('https://www.youtube.com/')
    cy.get('.ytSearchboxComponentInput').type('cypress tutorial')
    cy.get('#i0').each(($el)=>{
        const itemText = 'cypress tutorial'
        if (itemText.includes('cypress tutorial')) {
        expect(itemText).to.include("cypress tutorial")
        cy.get('.ytSearchboxComponentSearchButton').click()                  
                          
  }
  return false   
})
cy.get('.yt-lockup-view-model-wiz__metadata').eq(1).click()
})
})