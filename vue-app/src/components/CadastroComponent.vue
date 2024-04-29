<template>
    <div class="overlay">
        <div class="card">
                <form @submit.prevent="handleCadastro" className='form'>
                    <div className='inputs'>
                        <div className='nome'>
                            <label className='nome-cadastro'>Nome</label>
                            <input placeholder='Digite seu nome' className='form-control' v-model="formData.nome"/>
                        </div>

                        <div className='sobrenome'>
                            <label className='sobrenome-cadastro'>Sobrenome</label>
                            <input placeholder='Digite seu sobrenome' className='form-control' v-model="formData.sobrenome"/>
                        </div>

                        <div className='email'>
                            <label className='email-login'>E-mail</label>
                            <input type='email' placeholder='Insira o seu e-mail' className='form-control' v-model="formData.email"/>
                        </div>

                        <div className='senha-login'>
                            <label className='senha'>Senha</label>
                            <input type='password' placeholder='Insira sua senha' className='form-control' v-model="formData.senha"/>
                        </div>
                        <div className='curso'>
                            <label className='curso-cadastro'>Curso</label>
                            <input placeholder='Insira o seu curso' className='form-control' v-model="formData.curso"/>
                        </div>

                        <div className='matricula-cadastro'>
                            <label className='matricula'>Matrícula</label>
                            <input placeholder='Insira sua matricula' className='form-control' v-model="formData.matricula"/>
                        </div>
                    </div>
                    <button type='submit' className='login-button'>Cadastrar</button>
                </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "CadastroComponent",
    data() {
        return {
            formData: {
                nome: '',
                sobrenome: '',
                email: '',
                senha: '',
                curso: '',
                matricula: ''
            }
            
        }
    },
    methods: {
        async handleCadastro() {
            try {
                const response = await fetch('http://localhost:3000/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                });
                const data = await response.json();
                console.log('Resposta do servidor:', data);
                // Limpar o formulário após o envio bem-sucedido
                this.formData.nome = '';
                this.formData.sobrenome = '';
                this.formData.email = '';
                this.formData.senha = '';
                this.formData.curso = '';
                this.formData.matricula = '';
            } catch (error) {
                console.error('Erro ao cadastrar:', error);
                // Tratar erros de requisição
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

</style>