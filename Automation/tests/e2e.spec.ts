import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { ProductPage } from '../pages/product.page';
import { users, products } from '../utils/testData';

/**
 * Test Strategy Notes
 * - Using Page Object Model for scalability
 * - Test data separated from test logic
 * - Assertions focus on user-visible behavior
 */

// Negative scenario to validate authentication error handling
test('Error message appears for invalid login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigate();
  await login.login(users.invalid.email, users.invalid.password);

  await expect(login.errorMessage).toBeVisible();
});

// Validating core user journey: product discovery via search
test('User can search for product and see results', async ({ page }) => {
  const product = new ProductPage(page);

  await product.navigate();
  await product.search(products.keyword);

  const results = product.searchResults;

  await expect(results.first()).toBeVisible();

  await product.expectOnProductsPage();
});

// Edge scenario: validate behavior when search submitted empty
test('Search with empty input handled correctly', async ({ page }) => {

  const product = new ProductPage(page);

  await product.navigate();
  await product.searchEmpty();

  await product.expectOnProductsPage();

});