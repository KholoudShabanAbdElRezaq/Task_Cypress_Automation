import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../loginpage/LoginPage.js';

const loginPage = new LoginPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter a valid username and password', () => {
  loginPage.EnterUserName('testuser');
  loginPage.EnterPassword('Test_user1234');
});

When('I enter an invalid username and valid password', () => {
  loginPage.EnterUserName('kholoud');
  loginPage.EnterPassword('Test_user1234');
});

When('I enter an valid username and invalid password', () => {
  loginPage.EnterUserName('testuser');
  loginPage.EnterPassword('shaban');
});

When('I click on the login button', () => {
  loginPage.submit();
});

Then('The User Can enter to Home Page ', () => {
  cy.url().should('include', '/dashboard');
});

Then('Error Message Appear Login faild ', () => {
  loginPage.getErrorMessage().should('be.visible');
});
