# Desafio técnico para Preço Justo
 a technical challenge in order to fill a position of QA Analyst at Preço Justo

## Automação de Testes com Selenium e Cucumber

Este projeto utiliza o Selenium WebDriver, o Cucumber e a biblioteca cucumber-html-reporter para realizar a automação de testes e gerar relatórios finais.

## Requisitos

Antes de começar, certifique-se de que você tenha o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

Para instruções de configuração do Selenium, visite a própria documentação técnica do framework.

## Como configurar o projeto

1. Clone este repositório em sua máquina:

   ```bash
   git clone <URL do repositório>
   cd <diretório do projeto>
   ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    ```

3. Certifique-se de que o arquivo package.json esteja configurado com as dependências do Selenium WebDriver, Cucumber e cucumber-html-reporter:

    ```bash
    "devDependencies": {
        "@cucumber/cucumber": "^11.2.0",
        "cucumber-html-reporter": "^7.2.0",
        "selenium-webdriver": "^4.29.0"
    }
    ```

## Como rodar os testes

1. Para rodar os testes, basta digitar o seguinte comando:

    ```bash
        npm test
    ```

## Como gerar o relatório final

Após a execução dos testes, o Cucumber irá gerar os resultados em formato JSON. Para gerar o relatório HTML utilizando o cucumber-html-reporter, siga os passos abaixo:

1. Crie um arquivo report.js na raiz do projeto com o seguinte código:

```bash
const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
};

reporter.generate(options);
```

2. Depois que os testes forem executados, o arquivo de relatório JSON será gerado na pasta reports. Execute o script report.js para gerar o relatório HTML:

```bash
node report.js
```

3. O relatório HTML será gerado na pasta reports e estará disponível como cucumber_report.html.