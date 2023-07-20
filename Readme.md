
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


<body>
  <h1>Aplicação Node.js com TypeScript, Express, Docker, Redis, PostgreSQL e JWT 🚀</h1>
  <p>Este é o README para uma aplicação Node.js desenvolvida em TypeScript que utiliza as tecnologias Express,
    Docker, Redis e PostgreSQL e JWT. <br/> Aplicação gerencia entidades de Produtos, Usuários, Clientes e Pedidos.</p>

  <h2>⚠️ Requisitos</h2></h2>
  <p>Certifique-se de que você possui as seguintes ferramentas instaladas em seu sistema:</p>
  <ul>
    <li>Node.js (<a href="https://nodejs.org">https://nodejs.org</a>)</li>
    <li>TypeScript (<a href="https://www.typescriptlang.org/">https://www.typescriptlang.org/</a>)</li>
    <li>Docker (<a href="https://www.docker.com/">https://www.docker.com/</a>)</li>
    <li>JWT (<a href="https://www.npmjs.com/package/jsonwebtoken">"https://www.npmjs.com/package/jsonwebtoken</a>)
    </li>
  </ul>

  <h2>🚨 Configuração</h2>
  <ol>
    <li>Clone o repositório para o seu ambiente local:</li>
    <pre><code>git clone git@github.com:HectorBonilhaa/API-vendas.git</code> utilizando chave SSH</pre>
    <li>Instale as dependências do projeto:</li>
    <pre><code>npm install</code></pre>
    <li>Crie um arquivo <code>.env</code> na raiz do projeto e defina as variáveis de ambiente necessárias:</li>
    <pre><code>
    APP_SECRET=cb9baf9cd16a6500f88e128fee914828
    APP_API_URL=http://localhost:3333
    APP_WEB_URL=http://localhost:3000
    REDIS_HOST=localhost
    REDIS_PORT=6379
    REDIS_PASS=
</code></pre>
  </ol>

  <h2>Banco de Dados</h2>
  <p>A aplicação utiliza o PostgreSQL como banco de dados para armazenar as informações das entidades.</p>
  <p>Certifique-se de que você tenha o PostgreSQL instalado e configurado. Crie um banco de dados para a aplicação e
    atualize as variáveis <code>username, password e database</code> no arquivo <code>index.ts localizado em src/shared/typeorm/index.ts</code> com as informações apropriadas para o seu banco de dados.</p>
  <p>Execute as migrações para criar as tabelas necessárias:</p>
  <pre><code>npm run typeorm -- -d ./src/shared/typeorm/index.ts migration:run</code></pre>
  <p>Para criar uma nova migração execute:</p>
  <pre><code>npm run typeorm migration:create src/shared/typeorm/migrations/nomeDaMigracao</code></pre>

  <h2>Redis</h2>
  <p>O Redis é utilizado para cache e outras funcionalidades relacionadas ao desempenho da aplicação.</p>
  <p>Certifique-se de que você tenha o Redis instalado e configurado. Atualize a variável <code>REDIS_URL</code> no
    arquivo <code>.env</code> com as informações apropriadas.<br/>
  <strong>Não se esqueça de criar um container docker para o redis!</strong><br/>
  Exemplo:  <code>docker run --name redis -p 6379:6379 -d -t redis:alpine</code></p>

  <h2>Executando a aplicação</h2>
  <p>Para iniciar a aplicação localmente, você pode utilizar o seguinte comando:</p>
  <pre><code>npm run dev</code></pre>
  <p>Isso utilizará o <code>ts-node-dev</code> para executar a aplicação em modo de desenvolvimento, com atualizações
    automáticas sempre que houverem mudanças no código.</p>

  <h2>Docker</h2>
  <p>A aplicação também pode ser executada em um ambiente Dockerizado. Para isso, certifique-se de ter o Docker e o
    Docker Compose instalados.</p>
  <p>Para iniciar a aplicação usando o Docker Compose, execute o seguinte comando:</p>
  <pre><code>docker-compose up</code></pre>
  <p>Isso criará e configurará os containers Docker necessários para a aplicação e a tornará acessível em
    <a href="http://localhost:3000">http://localhost:3000</a>.</p>

  <h2>Endpoints da API</h2>
  <p>A seguir, estão os endpoints da API para gerenciar as entidades:</p>
  <p>Observação: <code>Não se esqueça de inserir o token JWT para liberar o acesso aos métodos HTTP</code></p>
  <h3>Produtos</h3>
  <ul>
    <li><code>GET http://localhost:3333/products</code>: Obtém a lista de todos os produtos.</li>
    <li><code>GET http://localhost:3333/products/:id</code>: Obtém os detalhes de um produto específico por ID.</li>
    <li><code>POST http://localhost:3333/products</code>: Cria um novo produto.</li>
    <li><code>PUT http://localhost:3333/:id</code>: Atualiza os detalhes de um produto específico por ID.</li>
    <li><code>DELETE http://localhost:3333/products/:id</code>: Remove um produto específico por ID.</li>
  </ul>
  <p>
 <strong>Exemplo do POST de products:</strong>
<code>{
"name": "Smartphone Redmi Note 12",
"price": 1890,
"quantity": 7
}</code></p>

  <h3>Usuários</h3>
  <ul>
    <li><code>GET http://localhost:3333/users</code>: Obtém a lista de todos os usuários.</li>
    <li><code>POST http://localhost:3333//users</code>: Cria um novo usuário.</li>
    <li><code>PATCH http://localhost:3333//users/avatar</code>: Atualiza a imagem de avatar do usuário que criou uma sessão, através de um Multpartform passando a variavel: <code>avatar</code> escolhendo um arquivo file.</li>
  </ul>
    <p>
 <strong>Exemplo do POST de users:</strong>
<code>{
"name": "admin",
"email": "admin@gmail.com",
"password": "admin"
}</code></p>

   <h3>Sessão</h3>
  <ul>
    <li><code>POST http://localhost:3333/sessions</code>: Cria uma sessão  ao passar pelo body o email e o password de um cliente, após isso o dev conseguirá pegar o valor do token JWT e utilizá-lo para <strong> liberar acesso as outras rotas da aplicação </strong></li>
  </ul>
  <p>
 <strong>Exemplo do POST de sessions:</strong>
<code>{
"email": "admin@gmail.com",
"password": "admin"
}</code>
  </p>

  <h3>Senha</h3>
  <ul>
    <li><code>POST http://localhost:3333/forgot</code>: Envia um link para o console log para recuperação de senha.<strong> Após clicar no link, você deverá clicar em resetar minha senha, e copiar o valor do token na nova guia que abrir</strong> Exemplo: <code>http://localhost:3000/reset_password?token=3ecc9e0a-57b6-4b9c-91bd-84a1b16d823d</code> 
<p><strong> Basta copiar o valor que vem depois de "token="</strong></p>
    </li>
      <p>
 <strong>Exemplo do POST de forgot:</strong>
<code>{
"email": "admin@gmail.com"
}</code>
  </p>
    <li><code>POST http://localhost:3333/reset</code>: Após captar o valor do token enviado no POST de forgot, você reseta a senha atual por uma nova.
    </li>
  </br>
      <p>
 <strong>Exemplo do POST de reset:</strong>
<code>{
"token": "3ecc9e0a-57b6-4b9c-91bd-84a1b16d823d",
"password": "123123",
"password_confirmation": "123123"
}</code>
  </p>
  </ul>

  <h3>Perfil</h3>
  <li><code>GET http://localhost:3333/profile</code>: Lista o perfil do usuário que realizou a sessão.
    </li>
  <li><code>PUT http://localhost:3333/profile</code>: Atualiza o perfil do usuário que realizou a sessão.
    </li>
    </br>
    <p>
 <strong>Exemplo do PUT de profile:</strong>
<code>{
"name": "Luffy",
"email": "reidospiratas@gmail.com",
"password": "123123",
"password_confirmation": "123123",
"old_password": "senhaAntiga"
}</code>
  </p>
  
  <h3>Clientes</h3>
  <ul>
    <li><code>GET http://localhost:3333/customers</code>: Obtém a lista de todos os clientes.</li>
    <li><code>GET http://localhost:3333/customers/:id</code>: Obtém os detalhes de um cliente específico por ID.</li>
    <li><code>POST http://localhost:3333/customers</code>: Cria um novo cliente.</li>
    <li><code>PUT http://localhost:3333/customers/:id</code>: Atualiza os detalhes de um cliente específico por ID.</li>
    <li><code>DELETE http://localhost:3333/customers/:id</code>: Remove um cliente específico por ID.</li>
  </ul>
    <p>
 <strong>Exemplo do POST de customers:</strong>
<code>{
"name": "Cliente 1",
"email": "cliente1@gmail.com"
}</code>
  </p>
  
  <h3>Pedidos</h3>
  <ul>
    <li><code>GET  http://localhost:3333/orders/:id</code>: Obtém os detalhes de um pedido específico por ID.</li>
    <li><code>POST http://localhost:3333/orders</code>: Cria um novo pedido.</li>
  </ul>
     <p>
 <strong>Exemplo do POST de orders:</strong>
<code>{
	"customer_id": "69db7016-da27-4258-b670-dce136592f11",
	"products": [
		{
			"id": "45bc9f3b-2563-4aac-a858-f33dd201555b",
			"quantity": 1
		},
		{
			"id": "db7799f4-9f20-4484-b6f3-4b329020217f",
			"quantity": 4
		}
	]
}</code>
  </p>

  <h2>Considerações Finais</h2>
  <p>A aplicação está pronta para uso e pode ser facilmente estendida e adaptada para atender às suas necessidades
    específicas. Fique à vontade para explorar o código-fonte e adicionar mais recursos ou aprimorar os existentes.</p>
  <p>Se encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma <i>issue</i> ou
    contribuir com <i>pull requests</i> no repositório.</p>
  <p>Aproveite a aplicação e boas codificações! 🚀</p>

  Disponibilizado com 💙 por 👨‍🎓 [Hector-Bonilhaa](https://www.linkedin.com/in/hector-oliveira-8235951a3/ "Hector Oliveira").

</body>
