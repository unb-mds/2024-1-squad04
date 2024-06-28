# [AvaliaUnB]()

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/unb-mds/2024-1-squad04)](https://img.shields.io/github/issues/unb-mds/2024-1-squad04)
[![GitHub contributors](https://img.shields.io/github/contributors/unb-mds/2024-1-squad04)](https://img.shields.io/github/contributors/unb-mds/2024-1-squad04)
[![GitHub stars](https://img.shields.io/github/stars/unb-mds/2024-1-squad04)](https://img.shields.io/github/stars/unb-mds/2024-1-squad04)
[![Hit Counter](https://views.whatilearened.today/views/github/unb-mds/2024-1-squad04.svg)](https://views.whatilearened.today/views/github/unb-mds/2024-1-squad04.svg)

</br>

[![Python version](https://img.shields.io/badge/python-3.11.6-blue)](https://www.python.org/downloads/release/python-3116/)
[![Node version](https://img.shields.io/badge/node-20.12.2-blue)](https://nodejs.org/en/download/)
[![npm version](https://img.shields.io/badge/npm-10.5.0-blue)](https://nodejs.org/en/download/)
[![MySQL version](https://img.shields.io/badge/mysql-3.9.7-blue)](https://www.npmjs.com/package/mysql2/v/3.9.7)


## 📝 Projeto de Avaliação de professores e matérias

A Plataforma de Avaliação de Professores e Matérias, desenvolvida como parte da disciplina *Métodos de Desenvolvimento de Software* (MDS) é um projeto dedicado à comunidade estudantil da Universidade de Brasília (UnB). Nosso objetivo é fornecer informações úteis e relevantes para os alunos, facilitando a escolha de professores e matérias através de avaliações dos professores feitas pelos proprios alunos. A plataforma permitirá avaliações detalhadas, feedback construtivo e transparência na busca por conhecimento.

O projeto é software livre e está sob a licença [MIT](./LICENSE).

### 📥 Funcionalidades
- **Busca de Professores e Matérias**:
Os usuários podem pesquisar por professores e matérias específicas.
Filtros como nome do professor, departamento e disciplina ajudam a encontrar informações relevantes.
- **Avaliação de Professores**: 
Os alunos podem avaliar professores em critérios como:
Dificuldade da matéria
Qualidade do ensino
Personalidade
Disponibilidade para tirar dúvidas
Comentários detalhados justificam as avaliações.
- **Avaliação de Matérias**:
Além dos professores, os alunos avaliam as matérias cursadas.
Feedback sobre a estrutura do curso, materiais didáticos e relevância é essencial.
- **Comentários Públicos e Anônimos**:
Interação entre estudantes é incentivada com comentários públicos.
Opção de anonimato garante liberdade de expressão.
- **Filtragem de Avaliações e Comentários**: 
Os usuários podem filtrar por data, relevância e popularidade.
Facilita a busca por informações desejadas.

## 📚 Documentação

A documentação do projeto está disponivel no nosso [Github Pages](https://unb-mds.github.io/2024-1-squad04/)

## ⚙️ Tecnologias Utilizadas

- **Linguagem de Programação:** Javascript, Python, MySQL, HTML e CSS.
- **Prototipação:** Figma.
- **Framework Web:** VueJS.
- **Framework BackEnd:** NodeJS.
- **Banco de Dados:** Google cloud mySQL storage.
- **Tecnologias usadas no back-end:** Axios, ExpressJS, Cors, CryptoJS, Dotenv, MySQL2, Pg e Sequelize.
- **Tecnologias usadas no front-end:** Axios, CoreJS, CryptoJS, Scrollreveal, Babel e Eslint.
- **Outras tecnologias:** Figma, miro, Helmet, Heroku e Vercel.

## ✨ Clonar o repositório

Você pode clonar o repositório do projeto com o seguinte comando:

```bash
git clone https://github.com/unb-mds/2024-1-squad04.git
```

### 📋 Pré-requisitos

Para rodar o projeto, você precisa instalar as dependências globais, que são:

- Python v3.11.6 e Pip v22.0.2 (ou superior)
- Node v20.12.2 e NPM v10.5.0 (ou superior)
- MySQL v3.9.7 (ou superior)

### Configuração do banco de dados
#### 1. Criar o Banco de Dados MySQL
Primeiro, você precisa criar um banco de dados MySQL onde os dados serão armazenados.
#### 2. Executar o Script de Criação do Banco
Na branch web-scrapping-professores, navegue até o diretório onde o script `criaBanco.sql` está localizado e execute o seguinte comando para criar as tabelas necessárias no banco de dados:
```sh
mysql -u seu_usuario -p < criarBanco.sql 
```
O valor seu_usuario será o usuário criado para o banco de dados e após rodar o comando, sua senha será solicitada.
#### 3. Executar o Script Python para Web Scraping
Ainda na branch web-scrapping-professores, navegue até o diretório onde o script `script-professores.py` está localizado e execute o seguinte comando para gerar o arquivo json com os dados do scraping:
```sh
python script-professores.py
```
Após isso, navegue até o diretório onde o script `script-url-fotos.py` está localizado e execute o seguinte comando para gerar o arquivo json com os dados do scraping:
```sh
python script-url-fotos.py
```
#### 4. Configurar e Executar o Script de Preenchimento do Banco
Antes de executar o script de preenchimento do banco de dados, você precisará editar as chaves de conexão com o banco de dados no script. Abra o script preencher.py e altere as variáveis de conexão conforme necessário:

```sh
    host=SEU_HOST,
    user=SEU_USER,
    password=SUA_SENHA,
    database=SUA_BASE,
    charset='utf8mb3',
    cursorclass=pymysql.cursors.DictCursor
```

Depois de fazer as alterações, execute o script para preencher o banco de dados:

```sh
python preencher.py
```

### 📁 Dependências do projeto

Para instalar as dependências do projeto, você pode rodar os seguintes comando:

```bash
# Instale as dependências do node
cd .\node-app\
npm install

# Instale as dependências do vue
cd .\vue-app\
npm install
```
### Conexão com o banco de dados
Você também precisará configurar as chaves de conexão com o banco de dados no arquivo index.js do backend. Abra o arquivo index.js e altere as variáveis de conexão conforme necessário:
```sh
    host=SEU_HOST,
    user=SEU_USER,
    password=SUA_SENHA,
    database=SUA_BASE
```

### 💾 Execução

Para executar o projeto, você pode rodar o seguinte comando:

```bash
# Inicie o node
cd .\node-app\
npm run start

# Inicie o vue
cd .\vue-app\
npm run serve
```

## 📎 Extra

### Story Map e Activity Flow

- Para acessar o Story Map e o Activity Flow, clique [aqui](https://miro.com/app/board/uXjVKd3-q78=/#tpicker-content).

### Arquitetura

- Para acessar a arquitetura do projeto, clique [aqui](https://miro.com/app/board/uXjVKd3-q78=/#tpicker-content).

### Protótipo

- Para acessar o protótipo do projeto, clique [aqui](https://www.figma.com/file/6BcQCT1c0pREyonYsJAO34/Untitled?type=design&node-id=0%3A1&mode=design&t=LBSpRoPY9kiFO9uD-1)

## 👥 Desenvolvedores

<center>
<table style="margin-left: auto; margin-right: auto;">
    <tr>
        <td align="center">
            <a href="https://github.com/ana-pfeilsticker">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/110688069?v=4" width="150px;"/>
                <h5 class="text-center">Ana Pfeilsticker</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/vitor-hoffmann">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/137011464?v=4" width="150px;"/>
                <h5 class="text-center">Vitor Hoffmann</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/mtsmgn0">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/143732873?v=4" width="150px;"/>
                <h5 class="text-center">Mateus Magno</h5>
            </a>
        </td>
        </td>
        <td align="center">
            <a href="https://github.com/Atyrson">
                <img style="border-radius: 50%;" src="https://i.pinimg.com/564x/3f/b7/ca/3fb7caa94eca8d62a14d4f23d5b623ac.jpg" width="150px;"/>
                <h5 class="text-center">Atyrson Souto</h5>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/leticiatmartins">
                <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/86434947?v=4" width="150px;"/>
                <h5 class="text-center">Leticia Torres</h5>
            </a>
        </td>
        
</table>
</center>
