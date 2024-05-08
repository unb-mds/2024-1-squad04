<template>
    <div class="overlay">

        <div class="header-div">
            <header class="header">
                <div class="header-logo-div">
                    <a href="/landingpage" class="header-logo-a">AvaliaUnB</a>
                </div>
                <div class="header-entrar-div">
                    <button v-on:click="HandleLogin" class="header-entrar-button">ENTRAR</button>
                </div>
            </header>
        </div>
        
        <div class="container-1">
            <div class="sub-container-1">
                <div class="sub-container-1-div">
                    <div>
                        <h1 class="sub-container-1-div-titulo">Excelência Educacional: 
                        Avaliando Docentes na Universidade de Brasília
                        </h1>
                        <a class="sub-container-1-div-texto">Descubra como a comunidade acadêmica da Universidade de Brasília 
                            está comprometida com a excelência educacional. Nossa plataforma oferece uma 
                            oportunidade única para avaliar e reconhecer o desempenho dos docentes, contribuindo 
                            para o aprimoramento contínuo do ensino superior.
                        </a>
                    </div>
                    <img class="sub-container-1-img" src="../assets/LandingPageHero.svg">
                </div>
            </div>
        </div>

        <div class="container-2">
            <div class="container-2-div" >
                <img class="container-2-div-img" src="../assets/LogoAvalia.png" >
                <a class="container-2-div-texto">Junte-se a nós e faça parte da transformação educacional, onde cada avaliação 
                    é um passo rumo à excelência acadêmica e ao crescimento coletivo
                </a>
                <button v-on:click="HandleCadastro" class="container-2-div-button" >Cadastre-se</button>
            </div>
        </div>

        <div class="container-3">
            <div class="container-3-div">

                <div class="container-3-div-text1" >
                    <a class="container-3-div-text1-1">1</a>
                    <a class="container-3-div-text1-2">Avaliações Detalhadas</a>
                    <a class="container-3-div-text1-3">Avalie docentes e disciplinas com critérios específicos como didática, metodologia, 
                        métodos de ensino e acesso para dúvidas, 
                        garantindo uma avaliação abrangente e justa.
                    </a>
                </div>

                <div class="container-3-div-text2" >
                    <a class="container-3-div-text2-1">2</a>
                    <a class="container-3-div-text2-2">Avaliações Detalhadas</a>
                    <a class="container-3-div-text2-3">Avalie docentes e disciplinas com critérios específicos como didática, metodologia, 
                        métodos de ensino e acesso para dúvidas, 
                        garantindo uma avaliação abrangente e justa.
                    </a>
                </div>

                <div class="container-3-div-text3" >
                    <a class="container-3-div-text3-1">3</a>
                    <a class="container-3-div-text3-2">Avaliações Detalhadas</a>
                    <a class="container-3-div-text3-3">Avalie docentes e disciplinas com critérios específicos como didática, metodologia, 
                        métodos de ensino e acesso para dúvidas, 
                        garantindo uma avaliação abrangente e justa.
                    </a>
                </div>

                <div class="container-3-div-text4" >
                    <a class="container-3-div-text4-1">4</a>
                    <a class="container-3-div-text4-2">Avaliações Detalhadas</a>
                    <a class="container-3-div-text4-3">Avalie docentes e disciplinas com critérios específicos como didática, metodologia, 
                        métodos de ensino e acesso para dúvidas, 
                        garantindo uma avaliação abrangente e justa.
                    </a>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import router from '../routes/index'; 
    export default{
        name: "LandingComponent",
        data() {
        return {
        }
    },
        methods: {
            async HandleCadastro() {
                router.push({name:'cadastro'});
            },  
            async HandleLogin(){
                router.push({name:'login'});
            }
        }
    };
</script>

<style scoped>

.container-3{
    background-color: #102C46;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-3-div{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-3-div-text1, .container-3-div-text2, .container-3-div-text3, .container-3-div-text4{
    color: white;
    display: grid;
    justify-items: center;
}
.container-3-div-text1-1, .container-3-div-text2-1, .container-3-div-text3-1, .container-3-div-text4-1{
    font-family: 'Open Sans', sans-serif;
}
.container-3-div-text1-2, .container-3-div-text2-2, .container-3-div-text3-2, .container-3-div-text4-2{
    font-family: 'Open Sans', sans-serif;
}
.container-3-div-text1-3, .container-3-div-text2-3, .container-3-div-text3-3, .container-3-div-text4-3{
    font-family: 'Inter', sans-serif;
}















.container-2{
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container-2-div{
    display: grid;
    justify-items: center;
    margin: 300px;
    gap: 150px;
}
.container-2-div-img{
    width: 14vw;
}
.container-2-div-texto{
    font-family: 'Inter', sans-serif;
    font-weight: lighter;
    font-size: 1.55vw;
    text-align: center;
}
.container-2-div-button{
    font-size: 18px;
    background-color: white;
    border-width: 1;
    border-radius: 10px;
    padding-right: 38px;
    padding-left: 38px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #102C46;
    font-weight: lighter;
    font-family: 'Inter', sans-serif;
    transition: .3s;
}
.container-2-div-button:hover{
    background-color: rgb(224, 224, 224);
    transition: .3s;
    cursor: pointer;
}
.header{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 80px;
    margin-right: 80px;
}
.header-logo-a{
    font-size: 54px;
    font-family: 'Open Sans', sans-serif;
    color: transparent;
    background-clip: text;
    cursor: pointer;
    background-image: linear-gradient(150deg, #1b5994 20%, #0a745b 60%);

}
.header-entrar-button{
    font-size: 14px;
    background-color: white;
    border-width: 0;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding-right: 38px;
    padding-left: 38px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #008E4A;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    transition: .3s;
}
.header-entrar-button:hover{
    background-color: rgb(224, 224, 224);
    transition: .3s;
    cursor: pointer;
}
.container-1{
    background-color: #102C46;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90vh;
    
}
.sub-container-1{
    border-radius: 40px;
    background: linear-gradient(31deg, rgb(74, 74, 116) 0%, rgb(61, 61, 102) 36%, rgb(53, 53, 95) 70%, rgb(16, 16, 102) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    
    height: 70vh;
}
.sub-container-1-div{
    
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
}
.sub-container-1-div-titulo{
    
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5vw;
}
.sub-container-1-div-texto{
    color: #c4c4c4;
    font-family: 'Inter', sans-serif;
    font-size: 1.1vw;
    font-weight: lighter;
}
.sub-container-1-img{
    width: 33vw;
}
@media screen and (max-width: 1052px) {
    .sub-container-1-div {
        flex-wrap: wrap-reverse;
    }
    .sub-container-1-img {
        width: 80%;
    }
    .sub-container-1-div-titulo{
        font-size: 3.5vw;
    }
    .sub-container-1-div-texto{
        font-size: 1.7vw;
    }
}
</style>
