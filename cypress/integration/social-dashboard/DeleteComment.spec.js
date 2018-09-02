describe('Users can delete some comment', function() {
    it('can delete latest posts', function () {
        cy.visit('http://localhost:3000/user/1/post/10')
        
        cy.get('[ data-test="comment-card-delete-button" ]').eq(0).click()

        cy.server()
        cy.route('comments?postId=*').as('getComments')
        cy.wait('@getComments')
        
        cy.get('[ data-test="comment-card" ]').should('have.length',4)
    })
})