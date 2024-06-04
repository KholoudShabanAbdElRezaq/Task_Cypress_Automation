Feature: Login functionality

  Scenario: Successful login 
    Given I am on the login page
    When I enter a valid username and password
    And I click on the login button
    Then The User Can enter to Home Page 

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter an invalid username and valid password
    And I click on the login button
    Then Error Message Appear Login faild 

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter an valid username and invalid password
    And I click on the login button
    Then Error Message Appear Login faild 
