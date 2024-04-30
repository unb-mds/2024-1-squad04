<template>
    <div class="overlay">
        <div class="card">
                <form className='form'>
                    <div className='inputs'>
                        <div className='email'>
                            <label className='email-login'>E-mail</label>
                            <input type='email' placeholder='Insira o seu e-mail' className='form-control' ref="emailInput"/>
                        </div>

                        <div className='senha-login'>
                            <label className='senha'>Senha</label>
                            <input type='password' placeholder='Insira sua senha' className='form-control' ref="senhaInput"/>
                        </div>
                    </div>
                    <button className='login-button' @click.prevent="HandleLogin">Login</button>
                    <p class="login-error">{{erro}}</p>
                </form>
        </div>
    </div>
</template>

<script>
const User = require('../../../node-app/controllers/UserMET');
export default {
    name: "LoginComponent",
    data() {
        return {
            erro: ''
        }
    },
    methods: {
        async HandleLogin() {
            try {
                this.erro = '';
                const response = await User.autenticarLogin(this.$refs.emailInput.value, this.$refs.senhaInput.value);
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
}
.h2-login {
    color: blue;
}
.error-message {
  color: red;
  font-size: 14px;
}
</style>