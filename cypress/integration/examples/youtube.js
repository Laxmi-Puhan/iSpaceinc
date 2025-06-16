describe('Youtube cases', ()=>{

it('Tesace 1', ()=>{
    cy.visit('https://www.youtube.com/')
    cy.get('.ytSearchboxComponentInput').type('cypress tutorial')
    cy.get('#i0').each(($el)=>{
        const itemText = 'cypress tutorial'
        if (itemText.includes('cypress tutorial')) {
        expect(itemText).to.include("cypress tutorial")
        cy.wrap($el).click()                  
                          
  }
  return false   
})
 cy.get(':nth-child(1) > .yt-lockup-view-model-wiz > .yt-lockup-view-model-wiz__metadata > .yt-lockup-metadata-view-model-wiz > .yt-lockup-metadata-view-model-wiz__text-container > .yt-lockup-metadata-view-model-wiz__heading-reset > .yt-lockup-metadata-view-model-wiz__title > .yt-core-attributed-string').click()
})
})