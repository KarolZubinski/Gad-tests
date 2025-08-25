import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.waitForLoadState();
  await expect(page).toHaveTitle(/GAD/);
});
