<template>
    <div class="container-fluid p-0">
      <div class="row m-0">
        <!-- Tela inicial branca ocupando a tela inteira -->
        <div class="col-lg-6 d-none d-lg-block"></div>
  
        <!-- Frame para realizar o cadastro -->
        <div class="col-lg-6 px-4 py-5 bg-blue">
          <h1 class="title">Cadastre-se</h1>
          <div class="card">
            <form @submit.prevent="handleCadastro" class="form">
              <div class="inputs">
                <!-- Div para agrupar os campos Nome e CPF -->
                <div class="form-group">
                  <div class="form-group">
                    <label for="nome" class="mr-flex"></label>
                    <input id="nome" v-model="formData.nome" class="form-control" placeholder="Nome" required>
                  </div>
                  <div class="form-group">
                    <label for="CPF" class="mr-2"></label>
                    <input id="CPF" v-model="formData.CPF" class="form-control" placeholder="CPF" required>
                  </div>
                </div>
                <!-- Fim do grupo Nome e CPF -->
                <div class="form-group">
                <label for="email" class="mr-2 d-flex"></label>
                <input id="email" v-model="formData.email" type="email" class="form-control" placeholder="Insira o seu e-mail" required>
              </div>
                <!-- Div para agrupar os campos Senha e Confirmação de Senha -->
                <div class="form-group">
                  <div class="form-group">
                    <label for="senha" class="mr-2"></label>
                    <input id="senha" v-model="formData.senha" type="password" class="form-control" placeholder="Insira sua senha" required>
                  </div>
                  <div class="form-group">
                    <label for="senhaConfirme" class="mr-2"></label>
                    <input id="senhaConfirme" v-model="formData.senhaConfirme" type="password" class="form-control" placeholder="Confirme sua senha" required>
                  </div>
                </div>
                <!-- Fim do grupo Senha e Confirmação de Senha -->
  
                <!-- Div para agrupar os campos Curso e Matrícula -->
                <div class="form-group">
                  <div class="form-group">
                    <label for="curso" class="mr-2"></label>
                    <input id="curso" v-model="formData.curso" class="form-control" placeholder="Insira o seu curso" required>
                  </div>
                  <div class="form-group">
                    <label for="matricula" class="mr-2"></label>
                    <input id="matricula" v-model="formData.matricula" class="form-control" placeholder="Insira sua matrícula" required>
                  </div>
                </div>
                <!-- Fim do grupo Curso e Matrícula -->
  
                <button type="submit" class="btn btn-primary btn-block">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  

<script>
export default {
    name: "CadastroComponent",
    data() {
        return {
            formData: {
                nome: "",
                CPF: "",
                email: "",
                senha: "",
                senhaConfirme:"",
                curso: "",
                matricula: ""
            }
        };
    },
    methods: {
        async handleCadastro() {
            try {
                const response = await fetch("http://localhost:3000/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.formData)
                });
                const data = await response.json();
                console.log("Resposta do servidor:", data);
                // Limpar o formulário após o envio bem-sucedido
                this.formData.nome = "";
                this.formData.sobrenome = "";
                this.formData.email = "";
                this.formData.senha = "";
                this.formData.curso = "";
                this.formData.matricula = "";
            } catch (error) {
                console.error("Erro ao cadastrar:", error);
                // Tratar erros de requisição
            }
        }
    }
};
</script>

<style scoped>
.container {
  display: flex;
}

.bg-white {
  flex: 1; /* Ocupa todo o espaço restante */
}

.bg-blue {
  position: absolute;
  top: 0;
  right: 0;
  width: 45%; /* Largura do elemento */
  height: 100%;
  background: linear-gradient(110deg, #102C46 0%, #085C48 49%, #018A4A 95%);
}

.card {
  position: absolute;
  top: 55%;
  right: 15%; /* Ajuste fino para espaçamento da borda direita */
  transform: translate(0, -50%);
  width: 45%; /* Largura do elemento */
  height: 496px;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  padding: 50px;
  margin-bottom: 50px;
}


/* Estilos adicionais para o título "Cadastre-se" */
.title {
  font-family: 'Open Sans', sans-serif;
  font-size: 64px;
  color: #fff; /* Cor branca */
  padding: 20px; /* Padding para todos os lados */
  margin-bottom: 20px; /* Margem inferior para criar espaço entre o título e a caixa do card */
  margin-top: 20px;
}

/* Estilos adicionais para os outros textos */
.text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #6D6B71; /* Cor cinza */
}
.inputs {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralizar itens horizontalmente */
}

.form-group {
  margin-bottom: 12px; /* Espaçamento na parte inferior de cada campo */
  display: flex;
  flex-direction: row;
  align-items: center; /* Centralizar itens horizontalmente */
}

.form-group input {
  margin-right: 10px; /* Espaçamento entre os campos */
  border-radius: 12px;
  border: none; /* Remove a sombra */
  padding: 12px;
}
</style>
