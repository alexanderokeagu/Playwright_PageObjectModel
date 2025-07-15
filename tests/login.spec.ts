import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

test("test", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goToLoginPage();
    await login.login("tomsmith", "SuperSecretPassword!");
    await login.assertLoginSuccess();
});
