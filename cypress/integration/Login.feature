Feature: Login to linkedIn application

    Scenario Outline: Login to the application and post a message
     
     Given I login to the the application with the "<Name>" and "1234"
      Then I see the logged in message
       And I perform actions to post a "message"

    Examples:

    |Name|
    |Gopi|