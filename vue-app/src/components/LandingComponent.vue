<template>
    <div class="containter-fluid p-0">
       <!-- Tela inicial branca ocupando a tela inteira -->
       <div class="col-lg-6 d-none d-lg-block"></div>
        <!-- div da navbar com o titulo AVALIAUNB e o botão para o login-->
        <nav> 
            <div class = "element-group">
                <h1 class="title">AvaliaUnB</h1>
                <button class = "login-btn" @click.prevent="HandleLogin">entrar</button>
            </div>
            
        </nav>
    </div>
</template>



<script>

    import router from '../routes/index'; 

    export default{
        name: "LoginComponent",
        data() {
            return {
                erro: ''
            }
        },
        methods: {

            async HandleCadastro() {
                router.push('/cadastro');
            },  
        
            async HandleLogin(){
                router.push('/login');
            }

        


        }

    };
</script>


<style scoped>

</style>
