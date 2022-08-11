/// <reference types="Cypress" />
import HotelHomePage from '../../../../support/pageObjects/HotelHomePage'
import HotelPaymentPage from '../../../../support/pageObjects/HotelPaymentPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const hotelHomePage = new HotelHomePage()
const hotelPaymentPage = new HotelPaymentPage()
let checkin
let checkout
let hotel

Given('user open application Page', () => {
  cy.visit(Cypress.env('url'))
  cy.wait(5000)
});

And('user Search for hotel', function (dataTable) {
  hotelHomePage.getSearchHotelEdit().should('have.text', 'Where would you like to go?')
  hotelHomePage.getSearchHotelName().click()
  hotelHomePage.getSearchHotelName().type(dataTable.rawTable[1][0])
});

And('user enters london in the search bar', () => {
  hotelHomePage.getSearchHotelName().click()
  hotelHomePage.getSearchHotelName().type('london')
  cy.wait(3000)
  hotelHomePage.getSearchHotelName().trigger('mouseover')
  cy.wait(1000)
});

And('user click on London tag as suggested destinations', () => {
  // hotelHomePage.getSuggestedDestination().click({force: true})
  cy.wait(1000)
});

And('user click on check-in date and check-out date to enter dates', function (dataTable) {
  hotelHomePage.getFromDate().click()
  cy.wait(1000)
  hotelHomePage.getChooseDate().each(($el, index, $list) => {
    if ($el.attr('aria-label').includes(dataTable.rawTable[1][0])) {
      cy.wrap($el).click()
      return false
    }
  })

  hotelHomePage.getChooseDate().each(($el, index, $list) => {
    if ($el.attr('aria-label').includes(dataTable.rawTable[1][1])) {
      cy.wrap($el).click()
      return false
    }
  })

});

And('user click on the search button', () => {
  hotelHomePage.getSearchButton().click()
});

Then('Booking options are displayed', () => {
  hotelHomePage.getBookNowButton().should('have.text', 'Book Now')
});

When('user select book now button for a room', () => {
  hotelHomePage.getBookNowButton().click()
});

And('user select confirm booking', () => {
  hotelHomePage.getConfirmBookingButton().click()
});

Then('booking summary is displayed', () => {
  hotelPaymentPage.getBookingSummaryPage().should('have.text', 'Booking Summary')
});

When('user select customer details', function (dataTable) {
  let firstName = dataTable.rawTable[1][0]
  let lastName = dataTable.rawTable[1][1]
  let phone = dataTable.rawTable[1][2]
  let email = dataTable.rawTable[1][3]
  hotelPaymentPage.getFirstNameEdit().type(firstName)
  hotelPaymentPage.getLastNameEdit().type(lastName)
  hotelPaymentPage.getPhoneNumberEdit().type(phone)
  hotelPaymentPage.getEmailEdit().type(email)
});

And('user select billing address details', function (dataTable) {
  let address = dataTable.rawTable[1][0]
  let city = dataTable.rawTable[1][1]
  let postcode = dataTable.rawTable[1][2]
  let country = dataTable.rawTable[1][3]
  hotelPaymentPage.getEnterAddressManuallyLink().click()
  hotelPaymentPage.getBillingAddressEdit().type(address)
  hotelPaymentPage.getBillingCityEdit().type(city)
  hotelPaymentPage.getBillingPostCodeEdit().type(postcode)
  hotelPaymentPage.getBillingCountryDropdown().select(country)
});

And('user select payment details', function (dataTable) {
  let cardName = dataTable.rawTable[1][0]
  let cardType = dataTable.rawTable[1][1]
  let cardNumber = dataTable.rawTable[1][2]
  let expiryDate = dataTable.rawTable[1][3]
  let cvv = dataTable.rawTable[1][4]
  hotelPaymentPage.getNameOnCard().type(cardName)
  hotelPaymentPage.getCardTypeDropdown().select(cardType)
  hotelPaymentPage.getCardNumberEdit().type(cardNumber)
  hotelPaymentPage.getExpiryDateEdit().type(expiryDate)
  hotelPaymentPage.getCardCvv().type(cvv)
});

And('user select pay now button', () => {
  hotelPaymentPage.getPayNowButton().click()
});

Then('Booking should be successfull', () => {

});

And('user click on select rooms button on any hotel except first and last', () => {
  hotelHomePage.getSelectRoomButtonSecondHotel().click()
});

Then('User should be on Get A Room page', () => {
  hotelHomePage.getARoomPage().should('exist')
});


