const { By, until } = require('selenium-webdriver');
const { sleep } = require('./utils');

async function cadastrarUsuario(driver) {
    await driver.get("https://advantageonlineshopping.com/#/");
    await sleep(3000);
    await driver.findElement(By.id("menuUser")).click();
    await sleep(3000);
    await driver.wait(until.elementLocated(By.css("a.create-new-account"))).click();
    await sleep(3000);

    let randomNum = Math.floor(Math.random() * 1000);
    let username = "exemplo_" + randomNum;
    let usernameField = await driver.wait(until.elementLocated(By.name("usernameRegisterPage")));
    
    await usernameField.sendKeys(username);
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

module.exports = cadastrarUsuario;