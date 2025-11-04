import { test } from '@playwright/test';

test.describe('Verify register', () => {
  test('register with correct data @GAD_R03_01', async ({ page }) => {
    //Arrange
    const userFirstName = 'Janina';
    const userLastName = 'Nowak';
    const userEmail = `testowy${Date.now()}@test.test`;
    const userPassword = 'test123';
    
    await page.goto('http://localhost:3000/register.html');
    await page.getByTestId('firstname-input').fill(userFirstName);
    await page.getByTestId('lastname-input').fill(userLastName);
    await page.getByTestId('email-input').fill(userEmail);

    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('register-button').click();
  });
});
