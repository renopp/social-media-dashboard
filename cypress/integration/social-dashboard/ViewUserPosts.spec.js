describe('View posts of users', function () {
    it('has to open user profile screen', function () {
        cy.visit('http://localhost:3000/user/3')

        cy.get('[ data-test="user-about-card" ]').should('have.length',1)
        cy.url().should('include','/user/3/posts')

        cy.visit('http://localhost:3000/user/9')

        cy.get('[ data-test="user-about-card" ]').should('have.length',1)
        cy.url().should('include','/user/9/posts')
    })

    it('has to render 10 user post card', function() {
        cy.visit('http://localhost:3000/user/3/posts')

        cy.get('[data-test="user-post-card"]').should('have.length',10)
        cy.get('[data-test="user-post-card-action"]').should('have.length',10)

        cy.visit('http://localhost:3000/user/7/posts')

        cy.get('[data-test="user-post-card"]').should('have.length',10)
        cy.get('[data-test="user-post-card-action"]').should('have.length',10)
    })
})