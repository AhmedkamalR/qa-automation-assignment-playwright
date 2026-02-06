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

  await expect(
    page.locator('text=Your email or password is incorrect!')
  ).toBeVisible({ timeout: 7000 });

});


// Validating core user journey: product discovery via search
test('User can search for product and see results', async ({ page }) => {

  const product = new ProductPage(page);

  await product.navigate();
  await product.search(products.keyword);

  const results = page.locator('.productinfo');

  // Ensure at least one result returned instead of exact match
  // Avoids flaky tests due to catalog changes
  await expect(results.first()).toBeVisible();

  // Validate navigation context
  await expect(page).toHaveURL(/products/);

});
