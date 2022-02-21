Feature: Login to linkedIn application

    Scenario Outline: Login to the application and post a message
     
     Given I launch the application 
      When I enter "E62AL" in the "searchbox"
      Then I validate the "map" loaded with the postcode "E62AL" 

    Examples:

    |Name|
    |Gopi|