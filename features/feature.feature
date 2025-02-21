Feature: Gerador de CPF

    Scenario: Gerar um número de CPF para o estado do AM que inicie com o algarismo 7
        Given que eu estou na tela de geração de CPF do website 4Devs
        And eu seleciono a opção de não gerar CPF com pontuação
        When eu informar o estado "AM"
        And eu clicar no botão Gerar CPF até gerar um número que inicie com o algarismo 7
        Then eu devo ter em mãos um número de CPF que inicia com o algarismo 7