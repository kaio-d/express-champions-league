# ⚽ API de Jogadores e Times de Futebol

Este projeto é um **CRUD (Create, Read, Update, Delete)** de jogadores e times de futebol, desenvolvido em **Node.js + Express** com **TypeScript**.  
O foco está totalmente no **back-end** e o objetivo é **educacional**, servindo como base para o aprendizado de APIs REST.

---

## 🚀 Funcionalidades

- 👥 **Jogadores**
  - Listar todos os jogadores
  - Buscar jogador por ID
  - Criar novo jogador
  - Atualizar jogador existente
  - Deletar jogador por ID


- 🏳 **Times**
    - Listar todos os times
    - Buscar time por ID


---

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [CORS](https://www.npmjs.com/package/cors)  
- [TSX](https://www.npmjs.com/package/tsx)  
- [TSUP](https://www.npmjs.com/package/tsup)  

---

| Método | Endpoint           | Descrição                  | Body Exemplo                                          |
| ------ | ------------------ | -------------------------- | ----------------------------------------------------- |
| GET    | `/api/players`     | Lista todos os jogadores   | -                                                     |
| GET    | `/api/players/:id` | Busca jogador por ID       | -                                                     |
| POST   | `/api/players`     | Cria novo jogador          | `{ "id":100,"name":"Namei","position":"Banned","statistics":{"overall":0,"pace":0,"shotting":0,"dribbling":0} }`   |
| PUT    | `/api/players/:id` | Atualiza jogador existente | `{ "overall":99,"pace":99,"shotting":99,"dribbling":99 }` |
| DELETE | `/api/players/:id` | Remove jogador pelo ID     | -                                                     |
| GET    | `/api/clubs`     | Lista todos os times   | -                                                     |
| GET    | `/api/clubs/:id` | Busca time por ID       | -                                                     |


## 💡 Objetivo Educacional

Este projeto foi desenvolvido para praticar:

- Criação de APIs RESTful

- Uso do Express com TypeScript

- Organização em camadas (controllers, services, routes)

- Boas práticas no CRUD

