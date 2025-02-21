# Plano de Testes - API Rest da Granja de Patos

## 1. Estratégias de Teste

- **Testes Funcionais:** Verificação dos requisitos funcionais, como cadastro de patos, clientes, registro de vendas, listagem e geração de relatórios. As verificações manuais dos endpoints serão realizadas utilizando a ferramenta **Postman**.
- **Testes de Integração:** Garantir que os endpoints interajam corretamente, principalmente entre cadastro de clientes, patos e registro de vendas. A execução manual dos testes de integração será conduzida no **Postman**.
- **Testes de Validação de Dados:** Validar o formato e integridade dos dados enviados e recebidos, incluindo JSON correto e campos obrigatórios. Serão utilizadas ferramentas como **DataGrip** ou **DBeaver** para realizar consultas diretas ao banco de dados e verificar a consistência dos dados. Também será utilizado o **Postman** para validar a integridade e disponibilidade dos dados por meio de requisições **GET**.
- **Teste de Carga e Stress:** Utilizar a ferramenta **Locust** para simular uma carga intensa de requisições simultâneas nos endpoints críticos. As requisições podem ser feitas em JSON ou utilizando parâmetros em formato de chave-valor.
  - **Objetivo:** Identificar o limite de capacidade da API sob cargas altas a extremas.
  - **Metodologia:**
    1. Definir cenários de stress para endpoints de cadastro, vendas e geração de relatórios.
    2. Configurar o Locust para iniciar com um número baixo de usuários simultâneos e aumentar gradativamente.
    3. Monitorar tempo de resposta, taxa de erro e estabilidade dos serviços.
    4. Avaliar o comportamento da API ao atingir limites críticos, como latência elevada ou falhas de conexão.
  - **Exemplo de Configuração em Locust:**

    ```python
    from locust import HttpUser, TaskSet, task, between

    class GranjaTasks(TaskSet):
        @task
        def cadastro_pato(self):
            self.client.post("/api/patos", json={"nome": "Pato Stress", "mae": "1234"})
        
        @task
        def registrar_venda(self):
            self.client.post("/api/vendas", json={"cliente_id": "5678", "patos": ["1234"]})

    class GranjaUser(HttpUser):
        tasks = [GranjaTasks]
        wait_time = between(1, 5)
    ```

## 2. Massa de Dados

- **Cadastro de Patos:**
  - Pato sem filhos
  - Pato com 1 filho
  - Pato com 2 filhos
  - Pato com mãe cadastrada e sem mãe cadastrada
  - Pato que é filho de outro pato que também é filho de outro pato
  - Cadastro de patos com nomes duplicados
  - Cadastro de patos com IDs inválidos
  - Cadastro de patos com data de nascimento no futuro

- **Cadastro de Clientes:**
  - Cliente elegível para desconto
  - Cliente não elegível para desconto
  - Cliente com nome em branco
  - Cliente com CPF inválido

- **Registro de Vendas:**
  - Venda de 1 pato
  - Venda de múltiplos patos
  - Venda com cliente elegível para desconto
  - Venda com cliente não elegível tentando obter desconto
  - Venda de pato já vendido anteriormente
  - Venda com quantidade de patos negativa
  - Venda com ID de cliente inexistente

## 3. Ambientes de Teste

- **Ambiente de Desenvolvimento:** Para testes iniciais e validação das correções.
- **Ambiente de Homologação:** Ambiente que simula a produção, com dados reais mascarados.
- **Ambiente de Produção (apenas leitura):** Testes de monitoramento e performance.

## 4. Riscos

- **Cadastro Incompleto:** Falta de informações obrigatórias (ex.: mãe do pato).
- **Cálculo Incorreto de Desconto:** Desconto aplicado de forma errada.
- **Falha na Geração de Relatórios:** Relatórios com dados incompletos ou em formato errado.
- **Erro na Validação de Dados:** Inserção de dados em formato inválido (ex.: JSON mal formatado).
- **Problemas de Conexão:** Falhas ao acessar endpoints devido à indisponibilidade.
- **Sobrecarga do Sistema:** Queda de desempenho ou indisponibilidade durante picos de uso.
- **Dados Duplicados:** Registros duplicados de patos ou clientes.
- **Violação de Integridade Referencial:** Venda registrada com ID de cliente ou pato inexistente.

## 5. Cenários de Teste

### Cenários Positivos

- Cadastro correto de patos com e sem mães.
- Cadastro de clientes com elegibilidade de desconto válida.
- Registro de venda aplicando corretamente o desconto de 20%.
- Venda de múltiplos patos para clientes cadastrados.
- Listagem de patos vendidos com informações completas.
- Geração de relatórios em formatos PDF e Excel com dados corretos.
- Verificação de integridade dos dados via requisições **GET**.

### Cenários Negativos

- Cadastro de pato sem nome.
- Cadastro de pato com ID de mãe inexistente.
- Cliente não elegível tentando obter desconto.
- Registro de venda para cliente não cadastrado.
- Registro de venda de pato já vendido anteriormente.
- Geração de relatório sem dados cadastrados.
- Cadastro de cliente com CPF inválido.
- Venda de quantidade negativa de patos.
- Inserção de dados com JSON mal formatado.
- Cadastro de pato com data de nascimento no futuro.
- Tentativa de venda com ID de cliente inválido.
- Cadastro de patos com nomes duplicados.
- Registro de venda sem especificação de patos.

## Conclusão

Este plano de testes foi elaborado considerando todas as especificações funcionais e de negócios da API Rest da Granja de Patos. Ele abrange validações manuais por meio do **Postman**, análise de integridade dos dados utilizando **DataGrip** e **DBeaver**, e testes de carga e stress com a ferramenta **Locust**. O plano cobre uma ampla gama de cenários, incluindo casos de sucesso e falhas esperadas, além de testar limites e comportamentos extremos da aplicação, garantindo robustez, confiabilidade e eficiência.
