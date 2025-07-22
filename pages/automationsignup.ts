import { Locator, Page, expect } from "@playwright/test";

export class SignUp {
    readonly page: Page;
    readonly radioButton: Locator;
    readonly passwordInput: Locator;
    readonly dayInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileInput: Locator;
    readonly createAccountButton: Locator;
    readonly signUpSuccessMessage: Locator;
    readonly continueButton: Locator;
    readonly signUpVerification: Locator;
    readonly deleteAccountButton: Locator;
    readonly deleteAccountSuccessMessage: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.radioButton = page.locator("#uniform-id_gender1");
        this.passwordInput = page.locator("#password");
        this.dayInput = page.locator("#days");
        this.monthInput = page.locator("#months");
        this.yearInput = page.locator("#years");
        this.newsletterCheckbox = page.locator("#newsletter");
        this.offersCheckbox = page.locator("#optin");
        this.firstNameInput = page.locator("#first_name");
        this.lastNameInput = page.locator("#last_name");
        this.companyInput = page.locator("#company");
        this.addressInput = page.locator("#address1");
        this.address2Input = page.locator("#address2");
        this.countrySelect = page.locator("#country");
        this.stateInput = page.locator("#state");
        this.cityInput = page.locator("#city");
        this.zipcodeInput = page.locator("#zipcode");
        this.mobileInput = page.locator("#mobile_number");
        this.createAccountButton = page.locator("//button[@data-qa='create-account']");
        this.signUpSuccessMessage = page.locator("//h2[@data-qa='account-created']");
        this.continueButton = page.locator("//a[@data-qa='continue-button']");
        this.signUpVerification = page.locator("//a[contains(normalize-space(), 'Logged in as izzy')]");
        this.deleteAccountButton = page.locator('//a[@href="/delete_account"]');
        this.deleteAccountSuccessMessage = page.locator('//b[text()="Account Deleted!"]');


    }

    async SignUpDetails(username: string, lastname: string, company: string){
        await this.radioButton.check();
        await this.passwordInput.fill("12345");
        await this.dayInput.selectOption("1");
        await this.monthInput.selectOption("1");
        await this.yearInput.selectOption("1990");
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
        await this.firstNameInput.fill(username);
        await this.lastNameInput.fill(lastname);
        await this.companyInput.fill(company);
        await this.addressInput.fill("123 Main St");
        await this.address2Input.fill("Apt 4B");
        await this.countrySelect.selectOption("United States");
        await this.stateInput.fill("California");
        await this.cityInput.fill("Los Angeles");
        await this.zipcodeInput.fill("90001");
        await this.mobileInput.fill("1234567890");
        await this.createAccountButton.click();
    }
    async assertSignUpSuccess() {
        await expect(this.signUpSuccessMessage).toBeVisible();
        await expect(this.signUpSuccessMessage).toHaveText("Account Created!");
        await expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
    }
    async assertSignUpVerification() {
        await expect(this.signUpVerification).toBeVisible();
        await expect(this.signUpVerification).toHaveText("Logged in as izzy");
    }
    async deleteAccount() {
        await this.deleteAccountButton.click();
        await expect(this.deleteAccountSuccessMessage).toBeVisible();
        await expect(this.deleteAccountSuccessMessage).toHaveText("Account Deleted!");
        await this.continueButton.click();
    }

}