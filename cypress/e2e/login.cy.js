describe("createOrder", ()=> {


    
    beforeEach("newOrder", ()=> {
        cy.visit("http://127.0.0.1:5173/gestion-de-eventos-frontend/login")
        /*cy.get('#email').type('rzagza039@gmail.com')
        cy.get('#password').type('**039##')
        cy.get('#loginForm').click()
        cy.get(':nth-child(5) > .sidebar-link-addon').click({force: true})
        //cy.get('.float-right > .btn').click() */
        
    })

    it('test id UE', ()=> {

        cy.get('#email').type('rzagza039@gmail.com')
        cy.get('#password').type('**039##')
        cy.get('#email').should('have.value','rzagza039@gmail.com')
        cy.get('#btnUserAdd').click()
           
    })


})