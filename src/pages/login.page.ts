import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login/');
  await page.getByRole('textbox', { name: 'Enter User Email' }).click();
  await page.getByRole('textbox', { name: 'Enter User Email' }).fill('Moses.Armstrong@Feest.ca');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('test1');
  await page.getByRole('button', { name: 'LogIn' }).click();
  await page.getByTestId('hello').click();
});