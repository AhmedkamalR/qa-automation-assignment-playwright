import { Page } from '@playwright/test';
import { envConfig } from '../utils/envConfig';

export class LoginPage {
  constructor(private page: Page) {}

  // Navigate directly to login screen
  async navigate() {
    await this.page.goto(`${envConfig.baseUrl}/login`);
  }

  // Encapsulates login actions to keep test layer clean and reusable
  async login(email: string, password: string) {
    await this.page.fill('[data-qa="login-email"]', email);
    await this.page.fill('[data-qa="login-password"]', password);
    await this.page.click('[data-qa="login-button"]');
  }

  get errorMessage() {
    return this.page.locator('text=Your email or password is incorrect!');
  }
}
