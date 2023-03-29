import { Addtocart } from "../support/POM/AddTocart"
import { Search } from "../support/POM/SearchProduct"

describe('This file contains test cases of Amazon with POM',()=>{

    beforeEach('Execute this before every tets case',()=>{
        cy.visitPage()
    })

    it('TC-01 Add item to cart', ()=>{
        Addtocart.click_Nav_Menu()
        Addtocart.click_Electronics()
        Addtocart.click_Television_And_Videos()
        Addtocart.click_Televisions()
        Addtocart.select_Samsung_Brand()
        Addtocart.select_2ndHighest_Product()
        Addtocart.assertion_For_AboutSection()
        Addtocart.log_AboutSection_text()
        Addtocart.add_Item_To_Cart()
    })

    it('TC-02 Search product', ()=>{
        Search.search_USB()
        Search.verify_Search_Page()
        Search.verify_Product()
        Search.open_First_Product()
        Search.verify_That_Product_Page_Opened()
        Search.verify_Product_Details()
    })
})