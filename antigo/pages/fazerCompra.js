const { By, until } = require('selenium-webdriver');
const { sleep } = require('./utils');

async function fazerCompra(driver) {
    await driver.wait(until.elementLocated(By.id("checkOutPopUp"))).click();
    await driver.wait(until.elementLocated(By.id("next_btn"))).click();
    await driver.wait(until.elementLocated(By.name("safepay_username"))).sendKeys("seulogin");
    await driver.wait(until.elementLocated(By.name("safepay_password"))).sendKeys("Sua.senha0");
    await driver.wait(until.elementLocated(By.id("pay_now_btn_SAFEPAY"))).click();

    await sleep(3000);
}

module.exports = fazerCompra;