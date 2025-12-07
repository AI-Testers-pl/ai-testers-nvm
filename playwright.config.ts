import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  retries: 0,
  workers: 1,
  reporter: [['html'], ['list'], ['json', { outputFile: 'playwright-report/results.json' }]],
  timeout: 20_000,
  tsconfig: './tsconfig.json',
  expect: {
    timeout: 20_000,
  },
  use: {
    ...devices['Desktop Chrome'],
    channel: 'chrome',
    viewport: { width: 1376, height: 786 },
    actionTimeout: 20_000,
    ignoreHTTPSErrors: false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
    userAgent: 'QA-PLAYWRIGHT-TESTS',
  },
});
