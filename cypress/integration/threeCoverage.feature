Feature: Search function on ThreeApplication

    Scenario Outline: Validate the search functionality
     
     Given I launch the application 
      When I enter "<postcode>" in the "searchbox"
      # Then I validate the "map" loaded with the postcode "<postcode>" 

    Examples:

    |postcode|
    |IG38NL|