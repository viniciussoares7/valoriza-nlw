# NLW.06 - **Valoriza**

<img src="https://camo.githubusercontent.com/45d862ef64a7b27d57a2c0f741e005d2664bf4099a4fa4a7af23a7483f3f4376/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d6c6963656e7365266d6573736167653d4d495426636f6c6f723d383235374535266c6162656c436f6c6f723d303030303030"></img><br><br>

**Plataforma para promover o reconhecimento entre companheiros de equipe, podendo mandar mensagens e elogios.**

### Para iniciar o server:

- **Rode npm ou yarn para as dependências.**
- npm run dev
  <br> **ou**
- yarn dev
  <br>
  <br>
- **Para criar as tabelas do banco de dados:**
  <br> npx typeorm migration:run
  <br> **ou**
  <br> yarn typeorm migration:run

### BD Utilizado:

- SQLite

### Bibliotecas/Tecnologias utilizadas

- Node.js
- Typescript
- typeorm
- express
- class-transformer
- bcryptjs
- jsonwebtoken
- uuid

### Ferramentas utilizadas e indicadas para teste:

- Insomnia
- Beekeeper Studio

### Regras utilizadas

- Cadastro de usuário
  - Não é permitido cadastrar mais de um usuário com o mesmo email.
  - Não é permitido cadastrar usuário sem email.
- Cadastro de tag
  - Não é permitido cadastrar mais de uma tag com o mesmo nome.
  - Não é permitido cadastrar tag sem nome.
  - Não é permitido o cadastro por usuário que não sejam administradores.
- Cadastro de elogios
  - Não é permitido um usuário cadastrar um elogio para si.
  - Não é permitido cadastrar elogios para usuários invalidos.
  - O usuário precisa estar autenticado na aplicação.

# Licença

Esse projeto está sob licença MIT.
