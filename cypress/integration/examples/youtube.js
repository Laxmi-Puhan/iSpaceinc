describe('Youtube test scenario', ()=>{

it('Testcase 1', ()=>{
    cy.visit('https://www.youtube.com/')
    cy.get('.ytSearchboxComponentInput').type('cypress tutorial')
    cy.get('#i0').each(($el) => {
    const actualText = $el.text()
    if (actualText.includes('cypress tutorial')) {
    expect(actualText).to.include('cypress tutorial')
    cy.wrap($el).click()
    return false                                     
  }  
})
cy.get('.yt-lockup-view-model-wiz__metadata').eq(1).click()
})
})