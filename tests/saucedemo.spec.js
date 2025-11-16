const { test, expect } = require('@playwright/test');

test('saucedemo user login add, to cart,verifies name and log out', async ({ page }) => {
  const username = 'standard_user';
  const password = 'secret_sauce';
  const productName = 'Sauce Labs Backpack';
 
  await page.goto('https://www.saucedemo.com/');

  await page.getByTestId('username').fill(username);
  await page.getByTestId('password').fill(password);
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.getByText('Products')).toBeVisible();

  const item = page.locator('.inventory_item').filter({ hasText: productName });
  await expect(item).toBeVisible();

  const listingName = (await item.locator('.inventory_item_name').textContent()).trim();
  await expect.soft(listingName).toBe(productName);

  await item.getByRole('button', { name: 'Add to cart' }).click();

  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  const cartItemName = await page.locator('.inventory_item_name').textContent();
  await expect(cartItemName).toBe(productName);

  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.getByTestId('login-button')).toBeVisible();
});