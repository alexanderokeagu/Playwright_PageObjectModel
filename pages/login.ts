import { Page } from "@playwright/test";

export class LoginPage {
    page: any;
    usernameInput: any;
    passwordInput: any;
    loginButton: any;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }
  
  async goToLoginPage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }
};