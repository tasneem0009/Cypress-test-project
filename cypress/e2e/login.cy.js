describe('Login Functionality', () => {
    it('Login registered user', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get('#loginPanel > form > div:nth-child(2) > input').type('Mr.Potter')
      cy.get('#loginPanel > form > div:nth-child(4) > input').type('44hk')
      cy.get('#loginPanel > form > div:nth-child(5) > input').click()
      cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
      cy.get('#month').select(11)
      cy.get('#month').select('March')
      cy.get('#month').select('May')
  
     
    })
  })