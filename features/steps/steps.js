const { Given, When, Then, setDefaultTimeout, BeforeAll, AfterAll } = require("@cucumber/cucumber")
const { Builder, By } = require("selenium-webdriver")
const assert = require('assert');
const firefox = require("selenium-webdriver/firefox");

setDefaultTimeout(20000); // Define o timeout para 20 segundos

let options;
let generatedCpf;

BeforeAll(async () => {
    options = new firefox.Options()
    options.addArguments('-headless'); // Rodando os testes em modo headless. 
    driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();
})

AfterAll(async () => {
    await driver.quit();
});

Given("que eu estou na tela de geração de CPF do website 4Devs", async () => {
    await driver.get('https://www.4devs.com.br/gerador_de_cpf');
});

Given("eu seleciono a opção de não gerar CPF com pontuação", async () => {
    const noPunctuation = await driver.findElement(By.id('pontuacao_nao'));
    await noPunctuation.click();
})

When("eu informar o estado {string}", async (estado) => {
    const brazilianStates = await driver.findElement(By.id('cpf_estado'));
    brazilianStates.click();

    const dropdownStates = await brazilianStates.findElement(By.xpath(`//option[. = "${estado}"]`));
    await dropdownStates.click();
})

When("eu clicar no botão Gerar CPF até gerar um número que inicie com o algarismo {int}", async (initialNumber) => {
    const generateButton = await driver.findElement(By.id('bt_gerar_cpf'))

    do {
        await generateButton.click();
        const cpfField = await driver.findElement(By.id('texto_cpf'));
        generatedCpf = await cpfField.getText();
        console.log(`CPF gerado: ${generatedCpf}`);
    } while (!generatedCpf.startsWith(initialNumber));

      generatedCpf = generatedCpf;
})

Then("eu devo ter em mãos um número de CPF que inicia com o algarismo {int}", async (initialNumber) => {
    assert(generatedCpf.startsWith(initialNumber.toString()), `O CPF gerado não começa com ${initialNumber}. CPF Encontrado: ${generatedCpf}`);
})