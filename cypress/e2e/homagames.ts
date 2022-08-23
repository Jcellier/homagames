import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: I can see reviews
Given("I am on homepage", () => {
  cy.visit("https://www.homagames.com/");
});

// I was unsure what you meant with "review of games", since I couldn't see them on the homepage,
// I simply added a simple check  
Then("I can see the review of games", () => {
  cy.url().should('include', 'homagames.com');
});

// Scenario: I can see blog posts

Given("I go on blog pages", () => {
  cy.visit("https://www.homagames.com/blog").url().should('include', "www.homagames.com/blog");
});


When("I click 'Life at Homa'", () => {
  cy.get('a[href="/blog-categorie/life-at-homa"]').click().url().should('include',"blog-categorie/life-at-homa");
});


Then("I can see blog pages about Homa employees", () => {
  cy.get('.card-link-blog');
});

// Scenario: I can see blog posts (second)

When('I click “Submit your games”', () =>  {
  cy.get('a.button:nth-child(4)').click();
});

// There isn't a page with "submit your games", only a registration page,
// so I added a simple check.
Then('A new page opens up with “submit your games”', () => {
 cy.url().should('include', 'https://lab-v2.homagames.com/registration?origin=website');
});


// Scenario Outline

When('I click on {}', (page) => {
  cy.get(`.nav-menu > [href="${page}"]`).click()
});


Then('I am on the {}', (navigation) => {
  cy.url().should('include',`${navigation}`);
})
