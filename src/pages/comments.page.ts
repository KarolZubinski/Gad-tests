import { Page } from '@playwright/test';

export class ArticlesPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/articles.html');
  }

  async title(): Promise<string> {
    return this.page.title();
  }
}
