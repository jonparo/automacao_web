const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

(async function main() {
    let chromeOptions = new Options();
    chromeOptions.addArguments("--start-maximized");

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    let loginPage = new LoginPage(driver);
    let homePage = new HomePage(driver);

    try {
        await loginPage.registerWithInvalidEmailAndPassword();
        await loginPage.registerWithInvalidPassword();
        await loginPage.registerUser();
        await homePage.addProductToCart();
        await homePage.goToCheckout();
        await homePage.sendMessageToSupport();
    } finally {
        await driver.quit();
    }
})();
