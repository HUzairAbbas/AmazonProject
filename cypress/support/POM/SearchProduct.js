export class SearchProduct {

    search_USB(){
        cy.get('#twotabsearchtextbox')
            .type('USB')
            .type('{enter}');
        cy.get('#brandsRefinements')
            .find('.a-spacing-micro')
            .contains('Kingston')
            .click()
    }
    
    verify_Search_Page(){
        cy.url()
            .should('contain', '/s');
        cy.get('#search')
            .should('exist');
    }

    verify_Product(){
        cy.get('#search')
            .find('[data-index="1"]')
            .eq(0)
            .within(() => {
                cy.get('.s-underline-text').should('exist');
                cy.get('.s-image').should('exist');
                cy.get('.a-price-whole').should('exist');
                cy.get('.a-icon').should('exist');  
            });
    }

    open_First_Product(){
        cy.get('[data-index="1"]')
            .find('.s-underline-text')
            .eq(1)
            .click()
    }

    verify_That_Product_Page_Opened(){
        cy.url()
            .should('contain', '/Kingston-DataTraveler-Kyson-64GB')
    }

    verify_Product_Details(){
        cy.get('[id="titleSection"]')
            .should('exist')

        cy.get('#title_feature_div')
            .find('.product-title-word-break')
            .should('include.text', 'Kingston DataTraveler Kyson 64GB')

        cy.get('#imgTagWrapperId')
            .should('exist')
        
        cy.get('#main-image-container')
            .find('img')
            .should('exist')

        cy.get('#corePriceDisplay_desktop_feature_div')
            .find('.priceToPay')
            .should('exist')
        
        cy.get('#corePriceDisplay_desktop_feature_div')
            .find('.priceToPay')
            .should('include.text', '$7.31')
        
        cy.get('#averageCustomerReviews')
            .find('[title="4.5 out of 5 stars"]')
            .should('exist')
    }
}

export const Search = new SearchProduct()