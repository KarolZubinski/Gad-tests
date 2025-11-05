import { LoginPage } from '../src/pages/login.page';
import { RegisterPage } from '../src/pages/register.page';
import { expect, test } from '@playwright/test';

test.describe('Verify register', () => {
  test('register with correct data @GAD_R03_01', async ({ page }) => {
    //Arrange
    const userFirstName = 'Janina';
    const userLastName = 'Nowak';
    const userEmail = `testowy${Date.now()}@test.test`;
    const userPassword = 'test123';

    const registerPage = new RegisterPage(page);

    //Act
    await registerPage.goto();
    await registerPage.register(
      userFirstName,
      userLastName,
      userEmail,
      userPassword,
    );

    //Assert
    const loginPage = new LoginPage(page);
    await page.waitForURL('**/login/');
    const title = await loginPage.title();
    expect.soft(title).toContain('Login');
  });
});
