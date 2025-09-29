import { Locator, Page } from '@playwright/test';
import { name } from 'eslint-plugin-prettier/recommended';

export class MainMenuComponent {
  commentsButton: Locator;
  articlesButton: Locator;
  homePage: Locator;
  constructor(private page: Page) {
    this.commentsButton = this.page.getByTestId('open-comments');
    this.articlesButton = this.page.getByTestId('open-articles');
    this.homePage = this.page.getByTestId('link', { name: '🦎 GAD' });
  }
}
