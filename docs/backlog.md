## Descrição
A aba de backlog contém todas as user stories e requisitos do projeto Avalia UnB. Aqui estão listadas as funcionalidades a serem desenvolvidas e os requisitos detalhados que guiarão o desenvolvimento do sistema.
## Autores e Versões
| **Autor(a)** | **Detalhamento**                        | **Versão**                                                                 |  
|-------------------|---------------------------------------------|-------------------------------------------------------------------------------|
| Vitor Hoffmann   | Criação do documento                       |1.0 |
| Vitor Hoffmann   | Adicionando RF’s restantes                       |1.1 |
| Leticia Torres   | Atualização e adição  User Story                     |1.2 |
| Atyrson Souto   | Atualização e adição Requisitos                     |1.3 |



## User Stories

| **User Story ID** | **Nome da História**                        | **Descrição**                                                                 |  
|-------------------|---------------------------------------------|-------------------------------------------------------------------------------|
| US01              | Cadastro de Usuário                        | Como um usuário, eu quero poder me cadastrar no sistema para ter acesso às funcionalidades disponíveis.      |
| US02              | Login de Usuário                            | Como um usuário, eu quero fazer login no sistema usando meu email e senha ou autenticação para acessar minhas informações pessoais.   |
| US03              | Implementação da Landing-Page            | Como usuário do Avalia UnB, quero acessar uma Landing Page atraente e informativa para obter informações essenciais sobre o projeto Avalia UnB e suas funcionalidades. |
| US04            | Acesso ao Ranking de Avaliações                    | Como um usuário logado, Eu quero acessar informações sobre rankings de melhores professores e matérias Para poder tomar decisões informadas sobre quais matérias cursar.|
| US05           | Página de Professores                 | Como um usuário logado, Eu quero acessar informações sobre todos os professores da FGA, Para poder tomar decisões informadas sobre quais professores devo escolher para pegar matérias para cursar.|
| US06          | Página de matérias              | Como um usuário logado, Eu quero acessar informações sobre todas as matérias da FGA, Para poder tomar decisões informadas sobre quais matérias cursar.|
| US07          | Página Individual dos Professores             | Como usuário autenticado, Gostaria de acessar uma página dedicada a cada professor da instituição, Para visualizar informações detalhadas como nome, faculdade, contato (email), sala do professor, formação acadêmica, matérias ofertadas e visualizar as avaliações feitas por outros usuários.|
| US08         | Avaliação de Professores Pop-up            | Eu usuário desejo clicar no botão "Avaliar", Quero que um pop-up seja exibido Para que eu possa avaliar o professor em diferentes critérios.|
| US09         | Filtragem de Professores por Matérias            | Como usuário interessado em encontrar professores específicos por matéria, Quero ter a capacidade de filtrar os professores disponíveis de acordo com a disciplina que cada um leciona, Para uma melhor visualização.|
| US10         | Filtragem da página de professor individual        | Como usuário do Avalia UNB, Quando estou na página individual de um professor, Desejo poder selecionar uma matéria específica ofertada por ele Para visualizar todas as informações da página do professor apenas para essa matéria selecionada.
| US11         | Página de Matéria Individual        | EU como usuário do Avalia UNB, QUANDO estiver na página de uma matéria específica, QUERO visualizar informações detalhadas sobre a matéria,PARA ver a nota geral da matéria e dos critérios de experiência e dificuldade. QUERO ver os professores que oferecem essa matéria listados. QUERO ver as avaliações feitas pelos alunos sobre a matéria. QUERO poder clicar no botão "Avaliar" para fazer uma avaliação da matéria. QUERO ter a opção de curtir e descurtir os comentários feitos por outros usuários.|
| US12          |Página de Perfil do Usuário - Listagem de Informações| EU usuário do Avalia UNB, QUANDO vou para a tela de perfil, QUERO visualizar todas as minhas informações de perfil.|
| US13          |Página de perfil do Usuário - Seleção de foto| Eu estou na página "Perfil" E visualizo o campo de foto de perfil, QUANDO clico em cima, QUERO poder colocar uma url para a minha foto e a foto colocada vai para o meu perfil.|
| US14          |Página de Perfil de Usuário - Editar Informações de Cadastro| EU usuário do Avalia UNB, QUANDO estou na tela de perfil, QUERO ter a opção de editar minhas informações cadastrais.|
| US15          |Curtir ou Descurtir Comentários no Avalia UnB | EU como usuário do Avalia UnB, QUERO curtir ou descurtir comentários PARA expressar minha opinião sobre as avaliações de outros usuários.|




## Requisitos Funcionais

| **Requisito Funcional ID** | **Descrição**                                                                 |
|----------------------------|-------------------------------------------------------------------------------|
| RF01                       |O sistema deverá permitir o cadastro de novos usuários. |
| RF02                       |O sistema deverá pedir em caso de cadastro: nome, sobrenome, e-mail , CPF, senha, confirmação de senha, matrícula e curso. |
| RF03                       |O sistema deve validar o CPF do usuario. |
| RF04                       |O sistema deve verificar se a matricula é valida e se já não foi cadastrada. |
| RF05                       |O sistema deverá permitir a edição das informações de cadastro.|
| RF06                       |O sistema deverá permitir o acesso a usuários não cadastrados, mas apenas para a visualização de avaliações.|
| RF07                       |O sistema deverá listar todas as matérias ministradas na universidade.|
| RF08                       |O sistema deverá listar todos os professores que ministram na universidade.|
| RF09                       |O sistema deverá buscar e filtrar as matérias e os professores.|
| RF10                       |O sistema deverá permitir avaliações de professores, em notas de 0 a 5, mas feitas apenas por usuários cadastrados, com os critérios de: didática, metodologia, carisma e acesso para dúvidas.|
| RF11                       |O sistema deverá permitir avaliações comentadas de usuários cadastrados.|
| RF12                       |O sistema deverá listar as avaliações, comentadas ou não, de cada professor, com o nome do usuário que o avaliou,o código da matéria referente à avaliação e o conteúdo do avaliação.|
| RF13                       |O sistema deverá permitir a avaliação de matérias, pelos critérios: experiência e dificuldade.|
| RF14                       |O sistema deverá listar para os usuários as matérias ordenadas pela melhor nota de avaliação total.|
| RF15                       |O sistema deverá listar as avaliações de matérias.|
| RF16                       |O sistema deverá listar todos os professores que ofertam determinada disciplina.|
| RF17                       |O sistema deverá listar para os usuários os professores ordenados pela melhor nota de avaliação total.|
| RF18                       |O sistema deverá apresentar a média das avaliações de determinado professor e matéria.|
| RF19                       |O sistema deverá apresentar informações de contato e a formação acadêmica de determinado professor.|
| RF20                       |O sistema deverá permitir a visualização de todas as avaliações feitas pelo usuário, tanto de matérias, quanto de professores.|
| RF21                       |O sistema deverá listar a quantidade de avaliações feitas pelo usuário.|
| RF22                       |O sistema deverá permitir um sistema de ranqueamento de avaliações a partir de "likes" ou "dislikes".|


## Requisitos Não-Funcionais

| **Requisito Não-Funcional ID** | **Descrição**                                                                 |
|--------------------------------|-------------------------------------------------------------------------------|
| RNF01                          |A aplicação deverá ser web.|
| RNF02                          |A aplicação deverá ter responsividade bem ajustada.|
| RNF03                          |A aplicação deverá ser projetada levando em consideração a experiência de usuário.|
| RNF04                          |A interface de usuário deverá ser concisa, intuitiva e visualmente atrativa.|
| RNF05                          |O banco de dados deverá ser desenvolvido em MySQL.|
| RNF06                          |O front-end deverá ser desenvolvido em Vue.js.|
| RNF07                          |O back-end deverá ser desenvolvido com Node.js e Python.|
| RNF08                          |O sistema deverá ser alimentado pela listagem de professores do SIGAA.|



