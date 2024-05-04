<template>
    <div class="container-fluid p-0">
        <div class="row m-0">
            <div class="col-lg-6 d-none d-lg-block">
                <img src="@/assets/TelaCadastro.png" alt="Tela de Cadastro" class="custom-image">
            </div>
            <div class="col-lg-6 px-4 py-5 bg-blue">
                <h1 class="title">Entrar</h1>
                <div class="card">
                    <form class='form'>
                        <div class='inputs'>
                            <label class='email'></label>
                            <input type='email' placeholder='Insira o seu e-mail' class='form-control' ref="emailInput"/>
                            <label class='senha'></label>
                            <input type='password' placeholder='Insira sua senha' class='form-control' ref="senhaInput"/>
                            <p class="cadastrar-p" @click.prevent="HandleCadastro">Não possui conta? Cadastre-se aqui.</p>

                        </div>
                    </form>
                    <div class="buttons-login">
                        <button class='login-button' @click.prevent="HandleLogin">Login</button>
                    </div>
                    <p class="login-error">{{erro}}</p>
                </div>
            </div>
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
    }
}
</script>

<style scoped>
.container {
    display: flex;
    background-color: white;
  }
  
  .bg-white {
    flex: 1; /* Ocupa todo o espaço restante */
  }
  
  .bg-blue {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%; /* Largura do elemento */
    height: 100%;
    background: linear-gradient(149deg, #102C46 25%, #085C48 60%);
  }
   
  .card {
    position: relative;
    top: 50%; /* Define o topo como 50% da altura da div pai */
    left: 50%; /* Define a margem esquerda como 50% da largura da div pai */
    transform: translate(-50%, -50%); /* Move o elemento de volta metade de sua largura e metade de sua altura */
    width: 55%; /* Largura do elemento */
    height: 45%;
    background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    border-radius: 12px;
    padding: 6%;
    margin-bottom: 50px;
  }

/* Estilos adicionais para o título "Entrar" */
.title {
    position: absolute; /* Define o título como posição absoluta */
    top: calc(50% - 46%); /* Ajusta a posição vertical do topo do título */
    left: calc(50% - 36%); /* Ajusta a posição horizontal para alinhar com o card */
    font-family: 'Open Sans', sans-serif;
    font-size: 400%;
    color: #fff; /* Cor branca */
    padding: 20px; /* Padding para todos os lados */    
  }
  
  /* Estilos adicionais para os outros textos */
  .text {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    letter-spacing: 5%;
    color: #6D6B71; /* Cor cinza */
  }


.inputs{
    display: grid;
    gap: 10px;
    padding: 8%;
}

.buttons-login{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

}

.login-button {
    margin-right: 5%; /* Espaçamento entre os campos */
    width: 120px; /* Defina a largura desejada para o botão */
    height: fit-content; /* Defina a altura desejada para o botão */
    padding: 4%;
    background-color: #102C46; /* Cor de fundo do botão */
    color: white; /* Cor do texto do botão */
    border: none; /* Remove a borda do botão */
    border-radius: 12px; /* Raio da borda do botão */
    font-size: 14px; /* Tamanho da fonte do texto do botão */
    font-family: 'Inter', sans-serif;
    cursor: pointer; /* Altera o cursor ao passar o mouse sobre o botão */
    transition: background-color 0.3s ease; /* Adiciona uma transição suave para a cor de fundo */
}

.login-button:hover {
    background-color: #003366;
    
}

.cadastrar-p {
    margin-left: 10px;
    cursor: pointer;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;

}

.login-error {
    color: red;
    font-size: 14px;
    margin-top: 10px;
}
.custom-image {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
</style>
