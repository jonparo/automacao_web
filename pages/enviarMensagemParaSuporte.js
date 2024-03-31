const { By, until, Key } = require('selenium-webdriver');
const { sleep } = require('./utils');

async function enviarMensagemParaSuporte(driver) {
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

module.exports = enviarMensagemParaSuporte;