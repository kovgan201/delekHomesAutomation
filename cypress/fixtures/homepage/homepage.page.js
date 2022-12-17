class homePage {

  //Login, Logout
  get buttonLogin() {return cy.get('div').contains('Login')}
  get inputEmail() {return cy.get('[name="email"]')}
  get inputPassword() {return cy.get('[name="password"]')}
  get buttonSubmit() {return cy.get('[type="submit"]')}
  get personalIcon() {return cy.get('button [data-testid="PersonIcon"]')}
  get buttonLogOut() {return cy.contains("Logout")}
  get roleVerify() {return cy.get('p[class*=MuiTypography-noWrap]')}
  //Register
  get buttonRegister() {return cy.get('div').contains('Register')}
  get inputFirstName() {return cy.get('[name="firstName"]')}
  get inputLastName() {return cy.get('[name="lastName"]')}      
  get failedValidation() {return cy.contains("Input data validation failed")}
  get checkBoxRealtor() {return cy.get('[type="checkbox"]')}
  get buttonManagement() {return cy.get('button [class*=MuiBox-root]')}
  //Search
  get inputSearch() {return cy.get('[id=":r0:"]')}
  get buttonStartSearch() {return cy.contains("Start Search")}
  get textMalibuHouse() {return cy.contains("Malibu House of Paradise")}
  get dropdownBedrooms() {return cy.get('[id=":r1:"]')}
  get number3() {return cy.get('[data-value="3"]')}
  get amountOfBedrooms() {return cy.get('[viewBox="0 0 2048 1280"]')}
  get inputCity() {return cy.get('[name="city"]')}
  get textTheUniqueHouse() {return cy.contains("TheUniqueCityForAutomation")}
  get buttonMoreInfo() {return cy.contains("More Info")}
  get listingsPrice() {return cy.get('.MuiPaper-rounded div:contains($)')}
  //Listing create/delete
  get buttonEstateList() {return cy.get('.MuiButtonBase-root').contains('Estate List')}
  get buttonUserList() {return cy.get('.MuiButtonBase-root').contains('user')}
  get buttonCreate() {return cy.contains('create')}
  get inputTitle() {return cy.get('[name="title"]')}
  get inputDescription() {return cy.get('[name="description"]')}
  get inputAddress() {return cy.get('[name="address"]')}
  get inputZipCode() {return cy.get('[name="zipCode"]')}
  get inputState() {return cy.get('[name="state"]')}
  get inputPrice() {return cy.get('[name="price"]')}
  get inputBedrooms() {return cy.get('[name="bedrooms"]')}
  get inputBathrooms() {return cy.get('[name="bathrooms"]')}
  get inputSqft() {return cy.get('[name="sqft"]')}
  get inputGarage() {return cy.get('[name="garage"]')}
  get inputLotSize() {return cy.get('[name="lotSize"]')}
  get checkboxPublish() {return cy.get('[name="isPublished"]')}
  get uploadImage() {return cy.get('[accept="image/*"]')}
  get buttonPost() {return cy.get('[type="submit"]')}
  get textUniqueTestHome() {return cy.contains('Unique Test Home')}
  get buttonListingSettings() {return cy.get('button[type="button"]')}
  get buttonDelete() {return cy.contains('Delete')}
  get buttonYes() {return cy.contains('Yes')}
  

  //Method to Login
  login(email, password) {
      this.buttonLogin.click();
      this.inputEmail.type(email);
      this.inputPassword.type(password);
      this.buttonSubmit.click();   
  }



  //Method to register New Account
  registerNewAccount(email) {
      //Username randomizer
      email = typeof email !== "undefined" ? email : makeid(5) + "@gmail.com"
      function makeid(length) {
          var result = "";
          let characters = "abcdefghijklmnopqrstuvwxyz";
          for (var i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * characters.length)
            );
          }
          return result;
        }
      this.buttonRegister.click()
      this.inputFirstName.type(makeid(5));
      this.inputLastName.type(makeid(4));
      this.inputEmail.type(email);
      this.inputPassword.type(makeid(8));
  }

  //Method to verify required fields
  blankInputsVerify() {
    cy.contains("First name required");
    cy.contains("Last name required");
    cy.contains("Email is required");
    cy.contains("Password is required");
  }

  //Listing info verification
  listingInfoVerification() {
      cy.contains("4527 w 142nd st");
      cy.contains("Bedrooms: 2");
      cy.contains("Garage: 1");
      cy.contains("Bathrooms: 1")
      cy.get('h3').should('have.text', 'The unique home')
      cy.contains('Property Realtor')
      cy.get('[class="wrapper lazy-load-image-background blur"]').should('be.visible')
  }

  //Method to create listing
  createListing(title, description, city, address, zipCode, state, price, bedrooms, bathrooms, garage, sqft, lotSize, image) {
    this.buttonEstateList.click() 
    this.buttonCreate.click()
    this.inputTitle.type(title)
    this.inputDescription.type(description)
    this.inputCity.type(city)
    this.inputAddress.type(address)
    this.inputZipCode.type(zipCode)
    this.inputState.type(state)
    this.inputPrice.type(price)
    this.inputBedrooms.type(bedrooms)
    this.inputBathrooms.type(bathrooms)
    this.inputGarage.type(garage)
    this.inputSqft.type(sqft)
    this.inputLotSize.type(lotSize)
    this.checkboxPublish.check()
    this.uploadImage.attachFile(image)
    this.buttonPost.click();
  }
}

export default new homePage()