# Desafio técnico para Preço Justo
Desafio técnico para preenchimento de uma vaga de Analista de Testes.

Para ver a execução deste desafio, basta seguir este [link da gravação no Loom](https://www.loom.com/share/12f78f8ea5bd4ef3868ba3190c87a020?sid=9bb09baf-0ce0-4a95-a206-29f7ac6adb9c)

## Automação de Testes com Selenium e Cucumber

Este projeto utiliza o Selenium WebDriver, o Cucumber e a biblioteca cucumber-html-reporter para realizar a automação de testes e gerar relatórios finais.

## Requisitos

Antes de começar, certifique-se de que você tenha o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (eu utilizei a versão 20.17)
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

1. Crie um arquivo report.js na raiz do projeto com o seguinte código (Opcional, pois este arquivo já está criado no projeto):

```bash
const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json', // Caminho do arquivo JSON gerado
  output: './reports/cucumber_report.html',  // Local do relatório HTML final
  reportSuiteAsScenarios: true,
  launchReport: true, // Abre o relatório automaticamente após gerar
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Local",
    "Browser": "Firefox",
    "Platform": "Windows 11",
    "Executed": "Local"
  }
};

reporter.generate(options);
```

2. Para executar os testes e gerar o relatório, utilize o comando:

```bash
npm run test:report
```

3. Depois que os testes forem executados, o arquivo de relatório JSON será gerado na pasta reports. Execute o script report.js para gerar o relatório HTML:

```bash
npm run report
```

4. O relatório HTML será gerado na pasta reports e estará disponível como cucumber_report.html.