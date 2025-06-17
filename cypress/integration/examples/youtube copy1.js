describe('Youtube cases', ()=>{

it('Tesace 1', ()=>{
    cy.visit('https://www.youtube.com/')
    cy.get('.ytSearchboxComponentInput').type('cypress tutorial').should('be.visible')
    cy.xpath(".//div[@role='presentation']").each(($el)=>{
        const itemText = 'cypress tutorial'
        if (itemText.includes('cypress tutorial')) {
        expect(itemText).to.include("cypress tutorial")
        cy.xpath(".//div[@role='presentation']").contains('cypress tutorial').click({ force: true });
                 
                          
  }
  return false   
})
cy.get('.yt-lockup-view-model-wiz__metadata').eq(1).click()
})
})