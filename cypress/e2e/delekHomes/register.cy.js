import HomePage from '../../fixtures/homepage/homepage.page'

  describe("Registration", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it.only("Should register new account", () => {
      HomePage.registerNewAccount()
      HomePage.personalIcon.should('be.visible');
    });

    it("Should not register with already existing email account", () => {
      HomePage.registerNewAccount("cooldan@gmail.com")
      HomePage.failedValidation.should('be.visible');
    });

    it("Should not register without filling required fields", () => {
      HomePage.btnRegister.click();
      HomePage.btnSubmit.click();
      HomePage.blankInputsVerify()
    });
  })
