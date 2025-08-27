import { expect, test } from '@playwright/test';

test('home page title', async ({ page }) => {
  //Act
  await page.goto('http://localhost:3000/');

  //Assert
  await page.waitForLoadState();
  await expect(page).toHaveTitle(/GAD/);
});

test('articles page title', async ({ page }) => {
  //Act
  await page.goto('http://localhost:3000/articles.html');

  //Assert
  await page.waitForLoadState();
  await expect(page).toHaveTitle(/Articles/);
});
