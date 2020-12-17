### Pokedex-backend

- API em node  ultilizando os principais verbos HTTP


# Tecnologias ultilizadas

- node Js 
- express
- typescript
- knex.js
- sqlite3


# para rodar em sua maquina
1.  rode em seu terminal `git clone https://github.com/matheus778/pokedex-backend.git`

2. entre no diretorio e execute `yarn` ou `npm install`

3. depois `npx tsc `

4. sera gerada a pasta de distribuição "dist" então por ultimo rode: `node ./dist/src/app.js`

------------


#### a aplicação ficara disponivel em : localhost:3333
podendo ser acessada por 
- **get**   localhost:3333/pokemons <br>
retorna todos os pokemons cadastrados na base de dados

------------


- **post**  localhost:3333/pokemons  <br>
 para cadastrar um novo pokemon na base de dados
`{
"nome": "",
"tipo": "",
"descricao":"",
"imagem":""
}
`

------------


- **put**  localhost:3333/pokemons  <br>
para atualizar um dado de um pokemon ja cadastrado,
basta enviar na requisição os campos a serem atuzlizados e o id na url 
exemplo: `localhost:3333/pokemons/1`

`{
"nome": "",
"tipo": "",
"descricao":"",
"imagem":""
}
`

------------



- **delete**  ainda vai ser desenvolvido

