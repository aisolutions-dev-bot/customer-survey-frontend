import { test as base, expect, Page } from '@playwright/test';
import { CarpentersEvaluationPage } from '../pages/carpenters-evaluation.page';

// Base test fixture — all E2E tests extend this
export const test = base.extend<{
  carpentersEvaluationPage: CarpentersEvaluationPage;
}>({
  // Shared setup: verify app is reachable before each test
  page: async ({ page }, use) => {
    // Ensure the page is ready before tests run
    await use(page);
  },

  // Carpenters Evaluation Page Object — injected for each test
  carpentersEvaluationPage: async ({ page }, use) => {
    const pageObject = new CarpentersEvaluationPage(page);
    await use(pageObject);
  },
});

export { expect };
