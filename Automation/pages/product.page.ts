import { Page } from '@playwright/test';

export class ProductPage {

  constructor(private page: Page) {}

  // Navigate to product catalog page where search is available
  async navigate() {
    await this.page.goto('https://automationexercise.com/products');
  }

  // Perform product search using keyword
  // Keeping selectors centralized improves maintainability
  async search(product: string) {
    await this.page.fill('#search_product', product);
    await this.page.click('#submit_search');
  }
}
