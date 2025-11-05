import { RegisterPage } from '../src/pages/register.page';
import { test } from '@playwright/test';

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
  });
});
