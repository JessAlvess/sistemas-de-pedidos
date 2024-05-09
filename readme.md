# API de Pedidos para Restaurante

Esta é uma API desenvolvida para gerenciar pedidos em um restaurante com o `express.js`. Utiliza a filosofia `TDD (Test Driven Development)` com testes unitários utilizando o `Jest`, desenvolvida na linguagem `TypeScript`.

### Funcionalidades:

* Serviço de login do garçom
* Autenticação de usuário com JWT
* Criptografia de senhas utilizando bcrypt
* Gerenciamento de pedidos
* Armazenamento de dados utilizando SQLite

### Instalação

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/api-pedidos-restaurante.git
```

2. Instale as dependências:
```
cd api-pedidos-restaurante
npm install
```

3. Configure as variáveis de ambiente:

Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente conforme necessário.

4. Execute as migrações do banco de dados:

```
npm run migrate
```

### Uso

1. Inicie o servidor:

```
npm start
```

2. A API estará acessível em http://localhost:3000.


### Testes

Para executar os testes unitários:

```
npm test
```