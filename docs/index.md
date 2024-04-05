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
            width: 60px; /* Largura inicial da barra lateral */
            position: fixed;
            top: 0;
            left: 0;
            background-color: #333;
            padding-top: 20px;
            overflow-x: hidden; /* Para esconder os links quando a barra estiver fechada */
            transition: 0.5s; /* Transição suave para a animação */
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
    </style>
</head>
<body>

<!-- Barra lateral -->
<div class="sidebar" id="sidebar">
    <a href="#sprints">S</a>
    <a href="#arquitetura">A</a>
    <a href="#tecnologias">T</a>
    <a href="#participantes">P</a>
    <a href="javascript:void(0);" class="closebtn" onclick="toggleSidebar()">×</a>
</div>

<!-- Botão para abrir a barra lateral -->
<div style="margin-left: 60px; padding: 20px;">
    <button class="openbtn" onclick="toggleSidebar()">☰</button>  
</div>

<!-- Conteúdo da página -->
<div style="margin-left: 60px; padding: 20px;">
    <h1>Projeto de Análise de Licitações Culturais</h1>

    <h2>Funcionalidades Previstas</h2>
    <ul>
        <li>Coleta de Dados</li>
        <li>Análise e Armazenamento</li>
        <li>Visualização de Dados</li>
        <li>Pesquisa Avançada</li>
        <li>Notificações</li>
    </ul>

    <h2>Tecnologias Utilizadas</h2>
    <p>Linguagem de Programação: (A definir)</p>
    <p>Framework Web: (A definir)</p>
    <p>Banco de Dados: (A definir)</p>
    <p>Ferramenta de Coleta de Dados: Querido Diário API</p>
    <p>Ferramentas Adicionais: HTML, CSS, JavaScript, Regex, CRUD</p>

    <h2>Desenvolvedores</h2>
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
    function toggleSidebar() {
        var sidebar = document.getElementById("sidebar");
        if (sidebar.style.width === "60px") {
            sidebar.style.width = "250px";
        } else {
            sidebar.style.width = "60px";
        }
    }
</script>

</body>
</html>
