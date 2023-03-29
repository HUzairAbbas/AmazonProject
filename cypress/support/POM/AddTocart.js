export class Cart {

    click_Nav_Menu(){
        cy.get('#nav-main')
            .find('#nav-hamburger-menu')
            .click()
    }

    click_Electronics(){
        cy.get('#hmenu-container')
            .find('.hmenu-item')
            .contains('Electronics')
            .click()
    }

    click_Television_And_Videos(){
        cy.contains('Television & Video')
            .click()
    }

    click_Televisions(){
        cy.get('.a-section')
            .find('.a-list-item')
            .contains('Televisions')
            .click()
    }

    select_Samsung_Brand(){
        cy.get('#brandsRefinements')
            .find('.a-spacing-micro')
            .contains('SAMSUNG')
            .click()
    }

    select_2ndHighest_Product(){
        cy.get('[data-asin="B09Y34RLV8"]')
            .find('.s-card-container')
            .click()
    }

    assertion_For_AboutSection(){
        cy.get('[id="featurebullets_feature_div"]')
            .find('[class="a-size-base-plus a-text-bold"]')
            .should('contain', 'About this item')
    }

    log_AboutSection_text(){
        cy.get('[class="a-unordered-list a-vertical a-spacing-mini"]')
            .invoke('text')
            .then(text => {
                cy.log(text)
            })
    }

    add_Item_To_Cart(){
        cy.get('#buybox')
            .find('.a-button-stack')
            .get('[id="add-to-cart-button"]')
            .click()
    }
}

export const Addtocart = new Cart()