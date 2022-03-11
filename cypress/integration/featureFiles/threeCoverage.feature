Feature: Login to linkedIn application

    Scenario Outline: Login to the application and post a message
     
     Given I launch the application 
      When I enter "<postcode>" in the "searchbox"
      Then I validate the "map" loaded with the postcode "<postcode>" 

    Examples:

    |postcode|
    |IG38NL|