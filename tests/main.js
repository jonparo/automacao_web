const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = require('selenium-webdriver/chrome');
const { Key } = require('selenium-webdriver');
const cadastrarUsuario = require('../pages/cadastrarUsuario');
const adicionarAoCarrinho = require('../pages/adicionarAoCarrinho');
const fazerCompra = require('../pages/fazerCompra');
const enviarMensagemParaSuporte = require('../pages/enviarMensagemParaSuporte');

(async function main() {
    let chromeOptions = new Options();
    chromeOptions.addArguments("--start-maximized");

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

    try {
        await cadastrarUsuario(driver);
        await adicionarAoCarrinho(driver);
        await fazerCompra(driver);
        await enviarMensagemParaSuporte(driver);
    } finally {
        await driver.quit();
    }
})();