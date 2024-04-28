<template>
    <div class="overlay">
        <div class="card">
                <form className='form'>
                    <div className='inputs'>
                        <div className='email'>
                            <label className='email-login'>E-mail</label>
                            <input type='email' placeholder='Insira o seu e-mail' className='form-control'/>
                        </div>

                        <div className='senha-login'>
                            <label className='senha'>Senha</label>
                            <input type='password' placeholder='Insira sua senha' className='form-control'/>
                        </div>
                    </div>
                    <button className='login-button' @click.prevent="HandleLogin">Login</button>
                </form>
        </div>
    </div>
</template>

<script>
//import { authGuard } from '../guards/authGuard';
export default {
    name: "LoginComponent",
    data() {
        return {

        }
    },
    methods: {
        HandleLogin() {
            console.log('Botão de login clicado');
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

</style>