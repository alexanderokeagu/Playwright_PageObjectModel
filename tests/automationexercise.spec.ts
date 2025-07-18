import {test, expect} from "@playwright/test";
import { login } from "../pages/automationlogin";

test('automation login page', async ({ page }) => {
    const loginpage = new login(page);

    await loginpage.goToLoginPage();
    await loginpage.assertloginpage();
    await loginpage.signingup("izzy", "izzy@gmail.com");
})