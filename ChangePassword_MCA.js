describe('Test av Shopizer', function () {
    this.beforeAll('Open shopizer', function(){
        cy.visit('http://localhost:8080/shop/');
        cy.viewport(1300,900)
    });


it ('As a user,I want to change my password', function(){

    cy.get('a').contains("My Account").click({ force:true });
    cy.get('a').contains("Sign in").click({ force:true });
   

    cy.get('[id="signin_userName"]').type('sprint4@gmail.com').should('have.id','signin_userName');
    cy.get('[id="signin_password"]').type('sweden2020').should('have.id','signin_password');
    cy.get('[id="genericLogin-button"]').click({ force:true });
    cy.contains("Change password").click({ force:true });
 

    cy.get('[id="currentPassword"]').type('sweden2020');
    cy.get('[id="password"]').type('sweden20').should('have.class', 'span3 required password form-control form-control-md');
    cy.wait(500)
    cy.get('[id="checkPassword"]').type('sweden20')
    cy.get('[id="submitChangePassword"]').click({ force:true });

    cy.log("Test fully completed");
}); 

    
});
 