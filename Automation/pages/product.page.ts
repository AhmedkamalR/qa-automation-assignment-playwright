import { expect, Page } from '@playwright/test';
import { envConfig } from '../utils/envConfig';

export class ProductPage {
  constructor(private page: Page) {}

  // Navigate to product catalog page where search is available
  async navigate() {
    await this.page.goto(`${envConfig.baseUrl}/products`);
  }

  // Perform product search using keyword
  // Keeping selectors centralized improves maintainability
  async search(product: string) {
    await this.page.fill('#search_product', product);
    await this.page.click('#submit_search');
  }

  get searchResults() {
    return this.page.locator('.productinfo');
  }

  async expectOnProductsPage() {
    await expect(this.page).toHaveURL(/products/);
  }
}
