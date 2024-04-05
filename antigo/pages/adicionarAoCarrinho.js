const { By, until } = require('selenium-webdriver');
const { sleep } = require('./utils');

async function adicionarAoCarrinho(driver) {
    await driver.wait(until.elementLocated(By.id("laptopsImg"))).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.id("10"))).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.className("plus"))).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.css("button[name='save_to_cart']"))).click();

    await sleep(3000);
}

module.exports = adicionarAoCarrinho;