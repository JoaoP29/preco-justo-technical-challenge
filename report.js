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