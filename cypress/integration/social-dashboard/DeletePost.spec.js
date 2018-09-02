describe('Users can delete some post', function() {
    it('can delete latest posts', function () {
        cy.visit('http://localhost:3000/user/7/posts')
        
        cy.get('[ data-test="user-post-delete-button" ]').eq(0).click()

        cy.server()
        cy.route('posts?userId=*').as('getPosts')
        cy.wait('@getPosts')
        
        cy.get('[ data-test="user-post-card" ]').should('have.length',9)
    })
})