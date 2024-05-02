<template>
    <div class="overlay">
        <div class="card">
                <form class='form'>
                    <div class='inputs'>
                        <label class='email'>E-mail</label>
                        <input type='email' placeholder='Insira o seu e-mail' class='form-control' ref="emailInput"/>
                        <label class='senha'>Senha</label>
                        <input type='password' placeholder='Insira sua senha' class='form-control' ref="senhaInput"/>
                    </div>
                </form>
                <div class="buttons-login">
                    <button class='login-button' @click.prevent="HandleLogin">Login</button>
                    <p class="cadastrar-p" @click.prevent="HandleCadastro">Cadastre-se</p>
                </div>
                <p class="login-error">{{erro}}</p>
        </div>
    </div>
</template>

<script>

import  axios  from "axios";
import { authGuard } from "../guards/authGuard.js";
import router from '../routes/index'; 

export default {
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


        async autenticarLogin(emailEntrada, senhaEntrada){
        try {
            const response = await axios.get('http://localhost:3000/usuario');
            const usuarios = response.data;
            
            for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].email === emailEntrada && usuarios[i].senha === senhaEntrada){
                authGuard(true, usuarios[i].matricula)
                return 1;
            }
            }

            authGuard(false)
            return 0;

        } catch (error) {
            console.log(error);
        }
        },


      
        async HandleLogin() {
            try {
                this.erro = '';
                const response = await this.autenticarLogin(this.$refs.emailInput.value, this.$refs.senhaInput.value);
                if (response == 0){
                    this.erro = 'Erro ao fazer login. Por favor, verifique suas credenciais.'; 
                }
                setTimeout(() => {
                    this.erro = '';
                }, 5000);
            } catch (error) {
                console.error('Erro ao executar o login:', error);
            }
        }
    },
    mounted() {
        document.body.style.backgroundColor = 'gray';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.flexDirection = 'column';
        document.body.style.overflow = 'hidden';
    },
    beforeUnmount() {
        document.body.style.backgroundColor = null;
    }
}
</script>

<style scoped>
.card{
    background-color: white;
    display: grid;
    padding: 10px;
    padding-bottom: 0;
}
.inputs{
    display: grid;
}
.buttons-login{
    display: flex;
    justify-content: center;
    align-items: center;
}
.h2-login {
    color: blue;
}
.error-message {
  color: red;
  font-size: 14px;
}
</style>