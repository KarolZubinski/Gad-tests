import { MainMenuComponent } from '../../src/components/main.menu.component';
import { ArticlesPage } from '../../src/pages/articles.page';
import { CommentsPage } from '../../src/pages/comments.page';
import { expect, test } from '@playwright/test';

test.describe('Verify menu main buttons', () => {
  test(
    'comments button navigates to comments page',
    { tag: '@GAD-R01-03' },
    async ({ page }) => {
      //Arrange
      const articlesPage = new ArticlesPage(page);
      const commentsPage = new CommentsPage(page);

      //Act
      await articlesPage.goto();
      const menuComponent = new MainMenuComponent(page);
      await menuComponent.articlesButton.click();

      //Assert
      const title = await commentsPage.title();
      expect(title).toContain('Comments');
    },
  );

  test(
    'articles button navigates to comments page',
    { tag: '@GAD-R01-03' },
    async ({ page }) => {
      //Arrange
      const articlesPage = new ArticlesPage(page);
      const commentsPage = new CommentsPage(page);

      //Act
      await commentsPage.goto();
      const menuComponent = new MainMenuComponent(page);
      await menuComponent.articlesButton.click();

      //Assert
      const title = await articlesPage.title();
      expect(title).toContain('Articles');
    },
  );
});
