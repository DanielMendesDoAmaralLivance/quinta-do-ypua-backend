# Como Rodar o Software

Este guia fornece os passos necessários para configurar e rodar o projeto localmente.

## Pré-requisitos

- Certifique-se de ter o **Node.js** e o **Yarn** instalados em sua máquina.

## Passos para Rodar o Projeto

1. **Instale as dependências do projeto**  
   No terminal, execute o seguinte comando:
   ```bash
   yarn
   ```

2. **Configure o Banco de Dados**  
    2.1. Execute o arquivo `db-queries.sql` para criar um banco de dados PostgreSQL.
    2.2. Atualize a connection string hard coded que se encontra em `connectionString` no arquivo `src/database/index.ts`.

3. **Inicie o projeto**  
    Execute o seguinte comando:
    ```bash
    yarn start
    ```

4. **Acesse o sistema**
    Após iniciar o projeto, ele estará disponível no endereço padrão: http://localhost:3001