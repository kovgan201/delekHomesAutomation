import HomePage from '../../fixtures/homepage/homepage.page'

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should search by keyword", () => {
    HomePage.inputSearch.type("Galewood", { force: true });
    HomePage.btnStartSearch.click({ force: true });
    HomePage.txtMalibuHouse.should('be.visible');
  });

  it("Should search by bedrooms", () => {
    HomePage.dropdownBedrooms.click();
    HomePage.number3.click();
    HomePage.btnStartSearch.click();
    HomePage.amountOfBedrooms.each(($bedroom) => {
      cy.wrap($bedroom).parent().should('have.not.text', '1').should('have.not.text', 2)
    })
  });

  it("Should search by city", () => {
    HomePage.inputCity.click().type("TheUniqueCityForAutomation");
    HomePage.btnStartSearch.click();
    HomePage.txtTheUniqueHouse.should('be.visible');
  });

  it("Should navigate to the listing details page upon click “More Info“", () => {
    HomePage.inputCity.type("TheUniqueCityForAutomation", {force: true});
    HomePage.btnStartSearch.click();
    HomePage.btnMoreInfo.click();
    HomePage.listingInfoVerification();
  });

  it("Should search by price", () => {
    cy.visit(
      "https://qa.delekhomes.com/featured-listings?price=500000-8400000"
    );
    HomePage.listingsPrice.each((priceElement) => {
      const price = priceElement.text().replace(/\D/g, "")
      expect(Number(price)).to.be.lte(8400000);
      expect(Number(price)).to.be.gte(500000);
    })
});
})