import homePage from '../../fixtures/homepage/homepage.page'

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  afterEach(() => {
    homePage.personalIcon.click();
    homePage.buttonLogOut.click();
  });

  it("Should login as admin", () => {
    homePage.login(Cypress.env("credentials").adminEmail, Cypress.env("credentials").adminPassword);
    homePage.roleVerify.should('contain', 'admin')
    homePage.buttonEstateList.should('be.visible')
    homePage.buttonUserList.should('be.visible')
  });

  it("Should login as realtor", () => {
    homePage.login(Cypress.env("credentials").realtorEmail, Cypress.env("credentials").realtorPassword);
    homePage.roleVerify.should('contain', 'realtor')
    homePage.buttonEstateList.should('be.visible')
    homePage.buttonUserList.should('not.exist')
  });

  it("Should login as user", () => {
    homePage.login(Cypress.env("credentials").userEmail, Cypress.env("credentials").userPassword);
    homePage.roleVerify.should('contain', 'user')
    homePage.buttonEstateList.should('not.exist')
    homePage.buttonUserList.should('not.exist')
  });
});