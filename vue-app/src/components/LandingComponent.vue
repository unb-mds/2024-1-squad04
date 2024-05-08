<template>

    <div class="overlay">

        <div class="header-div">
            <header class="header">
                <div class="header-logo-div">
                    <a href="/landingpage" class="header-logo-a">AvaliaUnB</a>
                </div>
                <div class="header-entrar-div">
                    <button v-on:click="HandleLogin" class="header-entrar-button">Entrar</button>
                </div>
            </header>
        </div>
        
        <div class="container-1">
            <div class="sub-container-1">
                <a class="cont">asdsad</a>
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

.header-div{
    background-color: white;
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
    font-size: 18px;
    background-color: white;
    border-width: 1px;
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
    width: 100%;
    height: 90vh;
}
.sub-container-1{
    background-color:  linear-gradient(149deg, rgba(255,255,255,1) 0%, rgba(153,153,153,1) 100%);
}
.cont{
    color: white;
}

</style>
