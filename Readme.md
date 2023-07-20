
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplicação Node.js com TypeScript, Express, Docker, Redis e PostgreSQL</title>
</head>

<body>
  <h1>Aplicação Node.js com TypeScript, Express, Docker, Redis e PostgreSQL</h1>
  <p>Este é o README para uma aplicação Node.js desenvolvida em TypeScript que utiliza as tecnologias Express,
    Docker, Redis e PostgreSQL. A aplicação gerencia entidades de Produtos, Usuários, Clientes e Pedidos.</p>

  <h2>Requisitos</h2>
  <p>Certifique-se de que você possui as seguintes ferramentas instaladas em seu sistema:</p>
  <ul>
    <li>Node.js (<a href="https://nodejs.org">https://nodejs.org</a>)</li>
    <li>TypeScript (<a href="https://www.typescriptlang.org/">https://www.typescriptlang.org/</a>)</li>
    <li>Docker (<a href="https://www.docker.com/">https://www.docker.com/</a>)</li>
    <li>Docker Compose (<a href="https://docs.docker.com/compose/install/">https://docs.docker.com/compose/install/</a>)
    </li>
  </ul>

  <h2>Configuração</h2>
  <ol>
    <li>Clone o repositório para o seu ambiente local:</li>
    <pre><code>git clone https://seu-repositorio.git
cd nome-do-repositorio</code></pre>
    <li>Instale as dependências do projeto:</li>
    <pre><code>npm install</code></pre>
    <li>Crie um arquivo <code>.env</code> na raiz do projeto e defina as variáveis de ambiente necessárias:</li>
    <pre><code>PORT=3000
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome-do-banco
REDIS_URL=redis://localhost:6379</code></pre>
  </ol>

  <h2>Banco de Dados</h2>
  <p>A aplicação utiliza o PostgreSQL como banco de dados para armazenar as informações das entidades.</p>
  <p>Certifique-se de que você tenha o PostgreSQL instalado e configurado. Crie um banco de dados para a aplicação e
    atualize a variável <code>DATABASE_URL</code> no arquivo <code>.env</code> com as informações apropriadas.</p>
  <p>Execute as migrações para criar as tabelas necessárias:</p>
  <pre><code>npm run migrate</code></pre>

  <h2>Redis</h2>
  <p>O Redis é utilizado para cache e outras funcionalidades relacionadas ao desempenho da aplicação.</p>
  <p>Certifique-se de que você tenha o Redis instalado e configurado. Atualize a variável <code>REDIS_URL</code> no
    arquivo <code>.env</code> com as informações apropriadas.</p>

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
  <h3>Produtos</h3>
  <ul>
    <li><code>GET /api/products</code>: Obtém a lista de todos os produtos.</li>
    <li><code>GET /api/products/:id</code>: Obtém os detalhes de um produto específico por ID.</li>
    <li><code>POST /api/products</code>: Cria um novo produto.</li>
    <li><code>PUT /api/products/:id</code>: Atualiza os detalhes de um produto específico por ID.</li>
    <li><code>DELETE /api/products/:id</code>: Remove um produto específico por ID.</li>
  </ul>
  <h3>Usuários</h3>
  <ul>
    <li><code>GET /api/users</code>: Obtém a lista de todos os usuários.</li>
    <li><code>GET /api/users/:id</code>: Obtém os detalhes de um usuário específico por ID.</li>
    <li><code>POST /api/users</code>: Cria um novo usuário.</li>
    <li><code>PUT /api/users/:id</code>: Atualiza os detalhes de um usuário específico por ID.</li>
    <li><code>DELETE /api/users/:id</code>: Remove um usuário específico por ID.</li>
  </ul>
  <h3>Clientes</h3>
  <ul>
    <li><code>GET /api/customers</code>: Obtém a lista de todos os clientes.</li>
    <li><code>GET /api/customers/:id</code>: Obtém os detalhes de um cliente específico por ID.</li>
    <li><code>POST /api/customers</code>: Cria um novo cliente.</li>
    <li><code>PUT /api/customers/:id</code>: Atualiza os detalhes de um cliente específico por ID.</li>
    <li><code>DELETE /api/customers/:id</code>: Remove um cliente específico por ID.</li>
  </ul>
  <h3>Pedidos</h3>
  <ul>
    <li><code>GET /api/orders</code>: Obtém a lista de todos os pedidos.</li>
    <li><code>GET /api/orders/:id</code>: Obtém os detalhes de um pedido específico por ID.</li>
    <li><code>POST /api/orders</code>: Cria um novo pedido.</li>
    <li><code>PUT /api/orders/:id</code>: Atualiza os detalhes de um pedido específico por ID.</li>
    <li><code>DELETE /api/orders/:id</code>: Remove um pedido específico por ID.</li>
  </ul>

  <h2>Considerações Finais</h2>
  <p>A aplicação está pronta para uso e pode ser facilmente estendida e adaptada para atender às suas necessidades
    específicas. Fique à vontade para explorar o código-fonte e adicionar mais recursos ou aprimorar os existentes.</p>
  <p>Se encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma <i>issue</i> ou
    contribuir com <i>pull requests</i> no repositório.</p>
  <p>Aproveite a aplicação e boas codificações! 🚀</p>
</body>

</html>
