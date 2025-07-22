import {test, expect} from "@playwright/test";
import { login } from "../pages/automationlogin";
import { SignUp } from "../pages/automationsignup";


test('automation login page', async ({ page }) => {
    const loginpage = new login(page);
    const Signup = new SignUp(page);
    // Navigate to the login page
    await loginpage.goToLoginPage();
    await loginpage.assertloginpage();
    await loginpage.signingup("izzy", "izzy@gmail.com");
    // Proceed to Sign Up
    await Signup.SignUpDetails("izzy","12345","izzyCompany");
    await Signup.assertSignUpSuccess();
    await Signup.assertSignUpVerification();
    await Signup.deleteAccount();
})