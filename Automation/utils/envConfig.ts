/**
 * Environment Runtime Configuration
 * ----------------------------------
 * Provides runtime settings driven by environment variables.
 * Keeps framework configurable across local, CI, and staging runs.
 */

export const envConfig = {
  baseUrl: process.env.BASE_URL || 'https://automationexercise.com',

  timeouts: {
    default: parseInt(process.env.DEFAULT_TIMEOUT || '30000', 10),
    navigation: parseInt(process.env.NAVIGATION_TIMEOUT || '30000', 10),
  }
};
