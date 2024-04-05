<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto de Análise de Licitações Culturais</title>
    <style>
        /* Estilo para a barra lateral */
        .sidebar {
            height: 100%;
            width: 0;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #333;
            padding-top: 20px;
            transition: width 0.5s;
            overflow-x: hidden;
        }

        /* Estilo para os links na barra lateral */
        .sidebar a {
            padding: 10px 15px;
            text-decoration: none;
            font-size: 18px;
            color: #fff;
            display: block;
        }

        /* Estilo para os links ativos */
        .sidebar a.active {
            background-color: #555;
        }

        /* Estilo para o ícone do menu */
        #menu-icon {
            position: fixed;
            top: 20px;
            left: 20px;
            font-size: 24px;
            cursor: pointer;
            color: #fff;
        }
    </style>
</head>
<body>

<!-- Ícone do menu -->
<span id="menu-icon">&#9776;</span>

<!-- Barra lateral -->
<div id="mySidebar" class="sidebar">
    <a href="#sprints">Sprints</a>
    <a href="#arquitetura">Arquitetura</a>
    <a href="#tecnologias">Tecnologias</a>
    <a href="#participantes">Participantes</a>
</div>

<!-- Conteúdo da página -->
<div style="margin-left: 0; padding: 20px;">
    <h1>Projeto de Análise de Licitações Culturais</h1>

    <h2 id="sprints">Funcionalidades Previstas</h2>
    <ul>
        <li>Coleta de Dados</li>
        <li>Análise e Armazenamento</li>
        <li>Visualização de Dados</li>
        <li>Pesquisa Avançada</li>
        <li>Notificações</li>
    </ul>

    <h2 id="arquitetura">Tecnologias Utilizadas</h2>
    <p>Linguagem de Programação: (A definir)</p>
    <p>Framework Web: (A definir)</p>
    <p>Banco de Dados: (A definir)</p>
    <p>Ferramenta de Coleta de Dados: Querido Diário API</p>
    <p>Ferramentas Adicionais: HTML, CSS, JavaScript, Regex, CRUD</p>

    <h2 id="participantes">Desenvolvedores</h2>
    <center>
        <table style="margin-left: auto; margin-right: auto;">
            <tr>
                <td align="center">
                    <a href="https://github.com/Gxaite">
                        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/111130521?v=4" width="150px;"/>
                        <h5 class="text-center">Gabriel Scheidt</h5>
                    </a>
                </td>
                <!-- Restante dos desenvolvedores -->
            </tr>
        </table>
    </center>
</div>

<script>
    // Função para abrir e fechar a barra lateral quando o ícone do menu é clicado
    document.getElementById("menu-icon").addEventListener("click", function() {
        document.getElementById("mySidebar").style.width = "250px";
    });

    // Função para fechar a barra lateral quando um link na barra é clicado
    document.querySelectorAll('.sidebar a').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById("mySidebar").style.width = "0";
        });
    });
</script>

</body>
</html>
