const { test, expect } = require("@playwright/test");

const {email, password} = require('../user.js');


test("valid test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  const successMessage = await page.waitForSelector(
    "h2.src-components-pages-Profile-Programs--title--Kw5NH"
  );
  expect(await successMessage.textContent()).toContain("Моё обучение");
});

test("not a valid test", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill("beautifulkat@mail.ru");
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill("123456");
  await page.locator('[data-testid="login-submit-btn"]').click();
  const error = await page.locator('[data-testid="login-error-hint"]');
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль");
});
