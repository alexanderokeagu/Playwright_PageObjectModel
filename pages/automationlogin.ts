import {Locator,Page,expect} from "@playwright/test";

export class login {
    readonly page : Page;
    readonly usernameInput: Locator;
    readonly emailInput : Locator;
    readonly loginButton: Locator;
    readonly loginlink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginlink = page.locator('//a[@href="/login"]');
        this.usernameInput = page.locator('//input[@data-qa="signup-name"]');
        this.emailInput = page.locator('//input[@data-qa="signup-email"]');
        this.loginButton = page.locator('//button[@data-qa="signup-button"]');
    }
    async goToLoginPage() {
        await this.page.goto("https://automationexercise.com/login");
    }

    async assertloginpage() {
        await expect(this.page.locator('//img[@alt="Website for automation practice"]')).toBeVisible();
    }
    async signingup(username: string, email: string) {
        await this.loginlink.click();
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.loginButton.click();
    }
}
    

