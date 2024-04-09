# Tecnologias

Dado o objetivo do projeto, que é criar uma plataforma web para avaliações de professores e armazenar estes dados em um banco de dados, é indispensável a seleção apropriada das tecnologias para o projeto. As tecnologias abaixo foram estudas para cada caso de uso, desde uso geral até usos específicos.

# Funcionalidades Previstas

Analisando os requisitos do projeto podemos identificar algumas funcionalidades, e com base nelas buscamos as tecnologias mais apropriada para cada situação.

## Coleta de Dados

A parte da coleta de dados é uma das mais importantes do projeto, encontramos algumas tecnologias que podem nos ajudar durante o processo de desenvolvimento e de produção, sendo elas:

- _[VueJS](https://vuejs.org/)_: Framework para fazer a renderização do servidor.
- _[NodeJS](https://nodejs.org/)_: Se conecta com o banco de dados e retorna seu conteúdo.
- _[Express.js](https://expressjs.com/)_: Utilizado para facilitar a conexão do servidor com o banco de dados.
- _[Google OAuth API](https://cloud.google.com/apigee/docs/api-platform/security/oauth/access-tokens?hl=pt-br)_: Biblioteca utilizada para autenticar usuários logados com a conta Google.

## Prototipação

Antes de iniciar o desenvolvimento do front-end e do back-end, precisamos ter um prototipo, um guia de como a aplicação deverá ficar. Para isso utilizaremos o _[Figma](https://www.figma.com/)_ em conjunto com o grupo para chegar em uma solução visual para a nossa aplicação. Ficará a critério do grupo decidir se a versão final do projeto seguirá o prototipo ou não.

## Análise e Armazenamento

A análise dos dados podem ser feitas tanto de forma iterativas, na interface web, quanto do lado do servidor, e para isso temos duas abordagens diferentes:

### Análise

Para a análise do lado do **servidor**, utilizamos uma API em _[Node.js](https://nodejs.org/en)_.

Para análise dos dados do lado do **cliente**, há diversas bibliotecas para o _[React](https://react.dev/)_, que permite o desenvolvimento de gráficos e renderização dos dados de forma dinâmica.

### Armazenamento

No armazenamento temos o _[Google cloud mySQL](https://cloud.google.com/sql?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-BKWS-all-all-trial-p-dr-1707800-LUAC0015918&utm_content=text-ad-none-any-DEV_c-CRE_536282978396-ADGP_Hybrid+%7C+BKWS+-+PHR+%7C+Txt_Databases-SQL-KWID_43700079884153224-kwd-350210931721&utm_term=KW_mysql%20google%20cloud-ST_mysql+google+cloud&gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkDUZk8AIbofxBZ2yOm85iY_IqEeAlhr6Bqa7G4N3OPD936cV4e9EYMaArZYEALw_wcB&gclsrc=aw.ds)_, uma opção simples, barata e eficiente para o armazenamento de dados da nossa aplicação.

## Visualização de Dados

Quando se trata de visualização, estamos tratando da nossa interface Web, que sem dúvidas um ótimo framework para resolver este problema é o _[VueJS](https://vuejs.org/)_. Ele permite fazer renderização do lado do servidor, trabalhar com rotas de uma forma descomplicada, estrutura de pastas dinâmicas e diversas outras features, para a estilização da aplicação utilizaremos o _[Tailwind CSS](https://tailwindcss.com/)_.
Como o _[VueJS](https://vuejs.org/)_ é um framework construído por cima do _[React](https://react.dev/)_, podemos utilizar muitas bibliotecas que irá nos auxiliar na parte de exposição de dados para o usuário.

## API Intermediária

Queremos que cada avaliação feito pelo usuário fique salva no banco de dados, para que em outros semestres o usuário possa ter uma base mais sólida sobre a avaliação de cada professor, e para fazer todo esse trabalho uma ótima ferramenta é o _[Node.js](https://nodejs.org/en)_, dado que nós estaremos trabalhando com _[VueJS](https://vuejs.org/)_, trabalhar com a mesma linguagem tanto do lado do servidor quanto do lado do cliente otimiza os estudos e o tempo de desenvolvimento do time. Para fazer essa API, podemos utilizar algumas bibliotecas, sendo elas:

- _[Express](https://expressjs.com/)_: Criação de servidor para receber requisições HTTP e processar os dados.
- _[Axios](https://axios-http.com/docs/intro)_: Biblioteca do nodeJS para manipular os dados da API.
- _[JSON Web Tokens](https://jwt.io/)_: Biblioteca nodeJS para autenticar os usuários logados.
- _[Helmet](https://www.npmjs.com/package/react-helmet)_: Biblioteca utilizada para proteger a aplicação contra vulnerabilidades.
- _[Google OAuth API](https://cloud.google.com/apigee/docs/api-platform/security/oauth/access-tokens?hl=pt-br)_: API do Google para fazer a conexão de usuários através da conta Google.

Vale resaltar que ambos, Node.js e o VueJS podem ser escritos por cima das linguagens _[Javascript](https://www.javascript.com/)_ e _[Typescript](https://www.typescriptlang.org/)_. Portanto vai depender da escolha do time em tempo de desenvolvimento qual será a mais aquada para cada serviço.

## Infraestrutura

Utilizaremos o _[Github](https://github.com/)_ para fazer o versionamento de código do projeto. Para o deploy da aplicação iremos utilizar duas tecnologias, primeiramente utilizaremos o _[Heroku](https://www.heroku.com/)_ para hospedar o back-end da aplicação e simultaneamente utilizaremos o _[Vercel](https://vercel.com/)_ para hospedar o front-end da aplicação, amabas opções simples, eficazes e baratas.

# Conclusão das Tecnologias Escolhidas

- **Linguagem de Programação:** Javascript, Typescript, HTML e CSS.
- **Prototipação:** Figma.
- **Framework Web:** VueJS.
- **Banco de Dados:** Google cloud mySQL storage.
- **Ferramenta de Coleta de Dados:** Axios, ExpressJS, Google OAtuh API, JSON Web Tokens.
- **Tecnologias Adicionais:** Figma, miro, Git e Github, Helmet, Heroku e Vercel, React e Tailwind.
