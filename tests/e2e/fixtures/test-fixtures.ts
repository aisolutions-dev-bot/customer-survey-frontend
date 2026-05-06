import { test as base, expect, Page } from '@playwright/test';

// Base test fixture — all E2E tests extend this
export const test = base.extend<{
  // Add page objects here as they are created (e.g., carpentersEvaluationPage)
}>({
  // Shared setup: verify app is reachable before each test
  page: async ({ page }, use) => {
    // Ensure the page is ready before tests run
    await use(page);
  },
});

export { expect };
