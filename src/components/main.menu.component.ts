import { Locator, Page } from '@playwright/test';

export class MainMenuComponent {
  commentsButton: Locator;
  constructor(private page: Page) {
    this.commentsButton = this.page.getByTestId('open-comments');
  }
}
