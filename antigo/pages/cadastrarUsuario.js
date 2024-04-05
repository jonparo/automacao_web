const { By, until } = require('selenium-webdriver');
const { sleep } = require('./utils');
const preenchimentoCadastro = require('./preenchimentoCadastro');

async function cadastrarUsuario(driver) {
    await driver.get("https://advantageonlineshopping.com/#/");
    await sleep(3000);
    await driver.findElement(By.id("menuUser")).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.css("a.create-new-account"))).click();
    await sleep(3000);

    await driver.findElement(By.name("passwordRegisterPage")).sendKeys("Senha.123");
    await driver.findElement(By.name("confirm_passwordRegisterPage")).sendKeys("Senha.123");
    await driver.findElement(By.name("emailRegisterPage")).sendKeys("exemplo@gmail.com");
    await preenchimentoCadastro(driver);
}

module.exports = cadastrarUsuario;