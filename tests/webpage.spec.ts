import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test('home page title', async ({ page }) => {
  //Arrange
  const homePage = new HomePage(page);
  //Act
  await homePage.goto();

  //Assert
  const title = await homePage.title();
  expect(title).toContain('GAD');
  //await page.waitForLoadState();
});

test('articles page title', async ({ page }) => {
  //Act
  await page.goto('/articles.html');

  //Assert
  await page.waitForLoadState();
  await expect(page).toHaveTitle(/Articles/);
});

test('home page title simple', async ({ page }) => {
  //Act
  await page.goto('');
});
