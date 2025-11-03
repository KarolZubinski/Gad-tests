import { LoginPage } from '../src/pages/login.page';
import { WelcomePage } from '../src/pages/welcome.page';
import { testUser1 } from '../src/test-data/user.data';
import { expect, test } from '@playwright/test';

test.describe('Verify register', () => {
  test('register with correct data @GAD_R03_01', async ({ page }) => {
    //Arrange
    await page.goto('http://localhost:3000/register.html');
    await page.getByTestId('firstname-input').fill('Janina');
    await page.getByTestId('lastname-input').fill('Nowak');
    await page
      .getByTestId('email-input')
      .fill(`testowy${Date.now()}@test.test`);

    await page.getByTestId('password-input').fill('test123');
    await page.getByTestId('register-button').click();
  });
});
