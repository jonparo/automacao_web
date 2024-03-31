const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');
const { Key } = require('selenium-webdriver');

(async function example() {
    let chromeOptions = new Options();
    chromeOptions.addArguments("--start-maximized");

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

    try {
        await cadastrar_usuario(driver);
        await adicionar_ao_carrinho(driver);
        await fazer_compra(driver);
        await enviar_mensagem_para_suporte(driver);
    } finally {
        await driver.quit();
    }
})();

async function cadastrar_usuario(driver) {
    await driver.get("https://advantageonlineshopping.com/#/");
    await sleep(3000);
    await driver.findElement(By.id("menuUser")).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.css("a.create-new-account"))).click();
    await sleep(3000);

    let usernameField = await driver.wait(until.elementLocated(By.name("usernameRegisterPage")));
    await usernameField.sendKeys("exemplo_01");

    await driver.findElement(By.name("passwordRegisterPage")).sendKeys("Senha.123");
    await driver.findElement(By.name("confirm_passwordRegisterPage")).sendKeys("Senha.123");
    await driver.findElement(By.name("first_nameRegisterPage")).sendKeys("Exemplo");
    await driver.findElement(By.name("last_nameRegisterPage")).sendKeys("Usuario");
    await driver.findElement(By.name("emailRegisterPage")).sendKeys("exemplo@gmail.com");
    await driver.findElement(By.name("phone_numberRegisterPage")).sendKeys("123456789");
    await driver.findElement(By.name("countryListboxRegisterPage")).sendKeys("Brazil");
    await driver.findElement(By.name("cityRegisterPage")).sendKeys("ExemploCity");
    await driver.findElement(By.name("addressRegisterPage")).sendKeys("ExemploAddress");
    await driver.findElement(By.name("state_/_province_/_regionRegisterPage")).sendKeys("roraima");
    await driver.findElement(By.name("postal_codeRegisterPage")).sendKeys("123456");
    await driver.findElement(By.name("i_agree")).click();
    await sleep(5000);
    await driver.findElement(By.id("register_btn")).click();

    await sleep(3000);
}

async function adicionar_ao_carrinho(driver) {
    await driver.wait(until.elementLocated(By.id("laptopsImg"))).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.id("10"))).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.className("plus"))).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.css("button[name='save_to_cart']"))).click();

    await sleep(3000);
}

async function fazer_compra(driver) {
    await driver.wait(until.elementLocated(By.id("checkOutPopUp"))).click();
    await driver.wait(until.elementLocated(By.id("next_btn"))).click();
    await driver.wait(until.elementLocated(By.name("safepay_username"))).sendKeys("seulogin");
    await driver.wait(until.elementLocated(By.name("safepay_password"))).sendKeys("Sua.senha0");
    await driver.wait(until.elementLocated(By.id("pay_now_btn_SAFEPAY"))).click();

    await sleep(3000);
}

async function enviar_mensagem_para_suporte(driver) {
    await driver.findElement(By.linkText("HOME")).click();
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");

    let selectCategoryElement = await driver.findElement(By.name("categoryListboxContactUs"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", selectCategoryElement);
    await driver.wait(until.elementIsVisible(selectCategoryElement)).click();

    let selectCategory = await driver.findElement(By.name("categoryListboxContactUs"));
    await selectCategory.sendKeys("Laptops", Key.RETURN);

    let selectProductElement = await driver.findElement(By.name("productListboxContactUs"));
    await driver.executeScript("arguments[0].scrollIntoView(true);", selectProductElement);
    await driver.wait(until.elementIsVisible(selectProductElement)).click();

    let selectProduct = await driver.findElement(By.name("productListboxContactUs"));
    await selectProduct.sendKeys("HP Chromebook 14 G1(ES)", Key.RETURN);

    await driver.findElement(By.name("emailContactUs")).sendKeys("exemplo@gmail.com");
    await driver.findElement(By.name("subjectTextareaContactUs")).sendKeys("teste de jonathan");
    await driver.findElement(By.id("send_btn")).click();

    await sleep(3000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}