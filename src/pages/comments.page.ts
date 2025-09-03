import { Page } from '@playwright/test';

export class CommentsPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/comments.html');
  }

  async title(): Promise<string> {
    return this.page.title();
  }
}
