describe('Regisration Functionality', () => {
    it('Register new user', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get("input[id='customer.firstName']").type('Harry')
      cy.get("input[id= 'customer.lastName']").type('Potter')
      cy.get("input[id= 'customer.address.street']").type('Privet Drive')
      cy.get("input[id= 'customer.address.city']").type('Little Whinging')
      cy.get("input[id= 'customer.address.state']").type('Surrey')
      cy.get("input[id= 'customer.address.zipCode']").type('2222')
      cy.get("input[id= 'customer.phoneNumber']").type('0177777777')
      cy.get("input[id= 'customer.ssn']").type('5555342')
      cy.get("input[id= 'customer.username']").type('Mr.Potter')
      cy.get("input[id= 'customer.password']").type('44hk')
      cy.get('#repeatedPassword').type('44hk')
      cy.get('[colspan="2"] > .button').click()
  
     
    })
  })