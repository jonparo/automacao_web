const { By, until } = require('selenium-webdriver');
const { sleep } = require('./utils');

class HomePage {
    constructor(driver) {
        this.driver = driver;
    }

    async addProductToCart() {
        await this.driver.wait(until.elementLocated(By.id("laptopsImg"))).click();
        await sleep(3000);
        await this.driver.wait(until.elementLocated(By.id("10"))).click();
        await sleep(3000);
        await this.driver.wait(until.elementLocated(By.className("plus"))).click();
        await sleep(3000);
        await this.driver.wait(until.elementLocated(By.css("button[name='save_to_cart']"))).click();
        await sleep(3000);
    }

    async goToCheckout() {
        await this.driver.wait(until.elementLocated(By.id("checkOutPopUp"))).click();
        await this.driver.wait(until.elementLocated(By.id("next_btn"))).click();
        await this.driver.wait(until.elementLocated(By.name("safepay_username"))).sendKeys("seulogin");
        await this.driver.wait(until.elementLocated(By.name("safepay_password"))).sendKeys("Sua.senha0");
        await this.driver.wait(until.elementLocated(By.id("pay_now_btn_SAFEPAY"))).click();
        await sleep(3000);
    }

    async sendMessageToSupport() {
        await this.driver.findElement(By.linkText("HOME")).click();
        await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");

        let selectCategoryElement = await this.driver.findElement(By.name("categoryListboxContactUs"));
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", selectCategoryElement);
        await this.driver.wait(until.elementIsVisible(selectCategoryElement)).click();

        let selectCategory = await this.driver.findElement(By.name("categoryListboxContactUs"));
        await selectCategory.sendKeys("Laptops", Key.RETURN);

        let selectProductElement = await this.driver.findElement(By.name("productListboxContactUs"));
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", selectProductElement);
        await this.driver.wait(until.elementIsVisible(selectProductElement)).click();

        let selectProduct = await this.driver.findElement(By.name("productListboxContactUs"));
        await selectProduct.sendKeys("HP Chromebook 14 G1(ES)", Key.RETURN);

        await this.driver.findElement(By.name("emailContactUs")).sendKeys("exemplo@gmail.com");
        await this.driver.findElement(By.name("subjectTextareaContactUs")).sendKeys("teste de jonathan");
        await this.driver.findElement(By.id("send_btn")).click();

        await sleep(3000);
    }
}

module.exports = HomePage;
