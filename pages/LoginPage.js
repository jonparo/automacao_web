const { By, until } = require('selenium-webdriver');
const { sleep } = require('./utils');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToLoginPage() {
        await this.driver.get("https://advantageonlineshopping.com/#/");
        await this.driver.findElement(By.id("menuUser")).click();
        await sleep(3000);
        await this.driver.wait(until.elementLocated(By.css("a.create-new-account"))).click();
        await sleep(3000);
    }

    async registerWithInvalidEmailAndPassword() {
        await this.navigateToLoginPage();

        await this.driver.findElement(By.name("passwordRegisterPage")).sendKeys("Senha.123");
        await this.driver.findElement(By.name("confirm_passwordRegisterPage")).sendKeys("Senha.123");
        await this.driver.findElement(By.name("emailRegisterPage")).sendKeys("exemplo");
        await this.fillRegistrationDetails();
    }

    async registerWithInvalidPassword() {
        await this.navigateToLoginPage();

        await this.driver.findElement(By.name("passwordRegisterPage")).sendKeys("senha123");
        await this.driver.findElement(By.name("confirm_passwordRegisterPage")).sendKeys("senha123");
        await this.driver.findElement(By.name("emailRegisterPage")).sendKeys("exemplo@gmail.com");
        await this.fillRegistrationDetails();
    }

    async registerUser() {
        await this.navigateToLoginPage();

        await this.driver.findElement(By.name("passwordRegisterPage")).sendKeys("Senha.123");
        await this.driver.findElement(By.name("confirm_passwordRegisterPage")).sendKeys("Senha.123");
        await this.driver.findElement(By.name("emailRegisterPage")).sendKeys("exemplo@gmail.com");
        await this.fillRegistrationDetails();
    }

    async fillRegistrationDetails() {
        let randomNum = Math.floor(Math.random() * 1000);
        let username = "exemplo_" + randomNum;
        let usernameField = await this.driver.wait(until.elementLocated(By.name("usernameRegisterPage")));
        
        await usernameField.sendKeys(username);
        await this.driver.findElement(By.name("first_nameRegisterPage")).sendKeys("Exemplo");
        await this.driver.findElement(By.name("last_nameRegisterPage")).sendKeys("Usuario");
        await this.driver.findElement(By.name("phone_numberRegisterPage")).sendKeys("123456789");
        await this.driver.findElement(By.name("countryListboxRegisterPage")).sendKeys("Brazil");
        await this.driver.findElement(By.name("cityRegisterPage")).sendKeys("ExemploCity");
        await this.driver.findElement(By.name("addressRegisterPage")).sendKeys("ExemploAddress");
        await this.driver.findElement(By.name("state_/_province_/_regionRegisterPage")).sendKeys("roraima");
        await this.driver.findElement(By.name("postal_codeRegisterPage")).sendKeys("123456");
        await this.driver.findElement(By.name("i_agree")).click();
        await sleep(5000);
        await this.driver.findElement(By.id("register_btn")).click();

        await sleep(3000);
    }
}

module.exports = LoginPage;
