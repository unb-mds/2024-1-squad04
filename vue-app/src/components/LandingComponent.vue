<template>
    <div class="container-fluid p-0">
        
            <div class = "landing-container" style = "margin:0">
                <header class="scrollednav">
                    <nav>
                        <div class="branding">
                            <h1 class="logo">AvaliaUnB</h1>
                        </div>
                        <ul class="navegation">
                            <button class="loginbtn" @click.prevent="HandleLogin">ENTRAR</button>
                        </ul>
                    </nav>
                </header>
                
                
            </div> 
    </div>
    
</template>



<script>

    import router from '../routes/index'; 

    export default{
        name: "LandingComponent",
        data() {
        return {
            erro: ''
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

    

    .logo{
        background: linear-gradient(149deg, #102C46 25%, #085C48 60%);
        color: transparent; /* Torna o texto transparente para mostrar o gradiente */
        background-clip: text;
        
    }

    .landing-container {
        background: linear-gradient(149deg, #102C46 25%, #085C48 60%); /* Cinza claro */
        margin: none;
        min-height: 100vh; /* Garante que o plano de fundo se estenda até o fundo da página */
    }


    .nav{
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 100%;
        margin: 0;

    }

    .scrollednav{
        background: #FAFAFA;
        z-index: 99;
        width: 100%;
        position: fix;
        transition: .5s ease all;
        left: 0;
    }

    .navegation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
    }

    .branding{
        display:flex;
        align-content: center;
        font-size: 140%;

        font-family: 'Open Sans';
        font-style: sans-serif;
        font-weight: 800;
        font-size: 170%;

    }


    .loginbtn{
        margin-right: 6%;
        width: 14%;
        border-radius: 12px;
        font-weight: 500;
        display: flex;
        padding: 16px 60px;
        width: 181px;
        margin-top: -8%;
        color: green;
        background: #FAFAFA;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    
        /* lidar com a fonte*/
        font-family: 'Open Sans';
        font-style: sans-serif;
        font-weight: 800;
        font-size: 140%;
    } 



    

</style>
