Feature: Hotel booking process journey - happy path
    This scenario reserves a hotel room

    @Regression
    Scenario: Hotel Booking - part1
        Given user open application Page
        When user Search for hotel
            | hotel       |
            | Berns hotel |
        And user click on check-in date and check-out date to enter dates
            | CheckInDate     | CheckOutDate    |
            | August 26, 2022 | August 27, 2022 |
        And user click on the search button
        Then Booking options are displayed
        When user select book now button for a room
        And user select confirm booking
        Then booking summary is displayed
        When user select customer details
            | FirstName | LastName | Phone      | Email                       |
            | Vijay     | Bompally | 7466858436 | vijaytestingtools@gmail.com |
        And user select billing address details
            | Address   | City   | PostCode | Country        |
            | Westfield | London | W127GF   | United Kingdom |
        And user select payment details
            | CardName | CardType | CardNumber          | ExpiryDate | CVV |
            | Vijay    | VISA     | 4111 1111 1111 1111 | 10/25      | 123 |
        And user select pay now button
        Then Booking should be successfull

    @Regression
    Scenario: Hotel Booking - part2
        Given user open application Page
        When user enters london in the search bar
        And user click on London tag as suggested destinations
        And user click on check-in date and check-out date to enter dates
            | CheckInDate     | CheckOutDate    |
            | August 26, 2022 | August 27, 2022 |
        And user click on the search button
        And user click on select rooms button on any hotel except first and last
        Then User should be on Get A Room page