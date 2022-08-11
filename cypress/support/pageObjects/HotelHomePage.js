class HotelHomePage
{

getEditBox()
{
    return cy.get('input[name="name"]:nth-child(2)')
}

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')

}
getGender()
{
  return  cy.get('select')
}

getEntrepreneaur()
{
   return cy.get('#inlineRadio3')
}
getShopTab()
{
    return  cy.get(':nth-child(2) > .nav-link')
}

getSearchHotelEdit()
{
    return cy.get('div#label-placeholder-text')
}

getSearchHotelName()
{
    return cy.get('#react-s_query')
}

getFromDate()
{
    return cy.get('.checkin-checkout-follow-icon')
}

getToDate()
{
    return cy.get('div.date-section div.date-to')
}

getChooseDate()
{
    return cy.get("div[class='calendarMonth'][data-visible='true']>div[class='calendarMonth__container'] td[class^='calendarDay'][aria-label^='Choose']")
}

getSearchButton()
{
    return cy.get('button#s_search')
}

getConfirmBookingButton()
{
    return cy.get(".quick-checkout-inner > .basket-buttons > .j-confirmButton")
}

getBookNowButton()
{
    return cy.get('#room-8-rates > div.js-toggle-rates > article:nth-child(1) > div.book-area > div.book-area__booking > a')
}

getSuggestedDestination()
{
    return cy.get('div#search-autosuggest tr#category-destinations>td a.enterTrigger')
}

getSelectRoomButtonSecondHotel()
{
    return cy.get(':nth-child(2) > .hotelcard > .hotelcard-bttns > .hotelcard-bttns-wrapper > .hotelcard-bttns-rates')
}

getARoomPage()
{
    return cy.get('.hotelroom-list')
}

}

export default HotelHomePage;
