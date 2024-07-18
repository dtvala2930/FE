import { test, expect } from '@playwright/test';

test.describe('Log in', () => {
  test('Should have field Email and Password', async ({ page }) => {
    await page.goto('https://interview-3d75e.web.app');

    await expect(page.locator('#email')).toBeVisible();

    await expect(page.locator('#password')).toBeVisible();
  });
});

test.describe('Log in fail', () => {
  test('Should fill write email and password', async ({ page }) => {
    await page.goto('https://interview-3d75e.web.app');

    await page.locator('button:has-text("Log in")').click();

    await expect(
      page.locator('div.form-item-error', { hasText: 'Email is required' }),
    ).toBeVisible();

    await expect(
      page.locator('div.form-item-error', { hasText: 'Password is required' }),
    ).toBeVisible();
  });

  test('Should fill write email format', async ({ page }) => {
    await page.goto('https://interview-3d75e.web.app');

    await page.locator('#email').fill('test');

    await page.locator('#password').fill('validPassword123!');

    await page.locator('button:has-text("Log in")').click();

    await expect(
      page.locator('div.form-item-error', { hasText: 'Invalid email format' }),
    ).toBeVisible();
  });
});
