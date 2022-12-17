import homePage from '../../fixtures/homepage/homepage.page'

describe("Register new user as realtor", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register new user as realtor", () => {
    homePage.registerNewAccount()
    homePage.checkBoxRealtor.check();
    homePage.buttonSubmit.click();
    cy.get('p[class*=MuiTypography-noWrap]').should('contain', 'realtor')
  });
});
