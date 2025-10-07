import { LoginPage } from '../src/pages/login.page';
import { test } from '@playwright/test';

test('login page', async ({ page }) => {
  //Arrange
  const userEmail = 'Moses.Armstrong@Feest.ca';
  const userPassword = 'test1';
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  //Act

  //Assert
  await loginPage.login(userEmail, userPassword);
});
