Feature: to test login functionality2

Scenario: to test login functionality2
    Given User is on home page
    When User enter login details
    And Home page should be displayed
    When Upon logout
    Then Logout should be successful