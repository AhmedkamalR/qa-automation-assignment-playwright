/**
 * Test Data Definitions
 * ---------------------
 * Contains input data used in test scenarios.
 * Separated from runtime configuration for maintainability.
 */

export const users = {

  valid: {
    email: process.env.VALID_USER_EMAIL || 'test@test.com',
    password: process.env.VALID_USER_PASSWORD || '123456'
  },

  invalid: {
    email: process.env.INVALID_USER_EMAIL || 'wrong@test.com',
    password: process.env.INVALID_USER_PASSWORD || 'wrong'
  }

};

export const products = {
  keyword: process.env.PRODUCT_SEARCH_KEYWORD || 'Dress'
};
