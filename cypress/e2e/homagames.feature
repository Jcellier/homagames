Feature: Homa games tech test
    Scenario: I can see reviews
        Given I am on homepage
        Then I can see the review of games

    Scenario: I can see blog posts
        Given I go on blog pages
        When I click 'Life at Homa'
        Then I can see blog pages about Homa employees

    Scenario: I can see blog posts
        Given I am on homepage
        When I click “Submit your games”
        Then A new page opens up with “submit your games”

    Scenario Outline: Dynamic navigation:
        Given I am on homepage
        When I click on <page>
        Then I am on the <navigation>
        Examples:
            | navigation | page |
            | games | /games |
            | recipes | /our-recipes |
            | team | /team |
