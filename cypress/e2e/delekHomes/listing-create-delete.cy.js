import homePage from '../../fixtures/homepage/homepage.page'

describe("Listing create/delete", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Should create/delete listing", () => {
    homePage.login("bobpooper@gmail.com", "123")
    homePage.buttonManagement.click({force: true})
    homePage.createListing()
    homePage.textUniqueTestHome.should('be.visible')
    homePage.buttonListingSettings.eq(2).click({force: true})
    homePage.buttonDelete.click()
    homePage.buttonYes.click()
    homePage.textUniqueTestHome.should('not.exist')
  });
});
