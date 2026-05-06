import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  timeout: 60000,
  expect: { timeout: 10000 },
  reporter: [['list'], ['html']],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4200',
    trace: 'on-first-retry',
    locale: 'en-US',
    timezoneId: 'Asia/Kuala_Lumpur',
  },
  projects: [
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
