<template>
  <div class="container-fluid p-0">
    <div class="row m-0">
      <!-- Tela inicial branca ocupando a tela inteira -->
      <div class="col-lg-6 d-none d-lg-block"></div>
      <img src="@/assets/TelaCadastro.png" alt="Tela de Cadastro" class="custom-image">
      <!-- Frame para realizar o cadastro -->
      <div class="col-lg-6 px-4 py-5 bg-blue">
        <h1 class="title">Cadastre-se</h1>
        <div class="card">
          <form @submit.prevent="handleCadastro" class="form">
            <div class="inputs">
              <!-- Div para agrupar os campos Nome e CPF -->
              <div class="form-group">
                <!-- element agrupa a label e o input para o campo do forum-->
                <div class="element">
                  <label for="nome" class="mr-flex"></label>
                  <input id="nome" v-model="formData.nome" class="form-control" placeholder="Nome" required>
                </div>
                <div class="element">
                  <label for="sobrenome" class="mr-flex"></label>
                  <input id="sobrenome" v-model="formData.sobrenome" class="form-control" placeholder="Sobrenome" required>
                </div>
              </div>
              <!-- Fim do grupo Nome e Sobrenome -->
              
              <!-- Div para agrupar CPF e Email-->
              <div class="form-group">

                <div class="element">
                  <label for="cpf" class="mr-flex"></label>
                  <input id="cpf" v-model="formData.cpf" @input="formatarCPF" class="form-control" placeholder="CPF" required>
                </div>

                <div class="element">
                  <label for="email" class="d-flex"></label>
                  <input id="email" v-model="formData.email" type="email" class="form-control" placeholder="E-mail" required>
                </div>
              
              </div>
              <!-- Fim do grupo CPF e Email-->

              <!-- Div para agrupar os campos Senha e Confirmação de Senha -->
              <div class="form-group">

                <div class="element">
                  <label for="senha" class="mr-2"></label>
                  <input id="senha" v-model="formData.senha" type="password" class="form-control" placeholder="Senha" required>
                </div>

                <div class="element">
                  <label for="confirma_senha" class="mr-2"></label>
                  <input id="confirma_senha" v-model="confirmacao_senha" type="password" class="form-control" placeholder="Confirme sua senha" required>
                </div>
              </div>
              <!-- Fim do grupo Senha e Confirmação de Senha -->

              <!-- Div para agrupar os campos Curso e Matrícula -->
              <div class="form-group">

                <div class="element">
                  <label for="curso" class="mr-2"></label>
                  <input id="curso" v-model="formData.curso" class="form-control" placeholder="Curso" required>
                </div>

                <div class="element">
                  <label for="matricula" class="mr-2"></label>
                  <input id="matricula" v-model="formData.matricula" class="form-control" placeholder="Matrícula" required>
                </div>
              </div>
              <!-- Fim do grupo Curso e Matrícula -->
              <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-primary btn-block btn-cadastrar">Cadastrar</button>
                <button type="submit" class="btn btn-secondary btn-block btn-cancelar" @click.prevent="HandleCancelar">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../routes/index';

export default {
  name: "CadastroComponent",
  data() {
    return {
      confirmacao_senha: "",
      formData: {
        matricula: "",
        cpf: "",
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        curso: ""
      }
    };
  },
  methods: {
    async HandleCancelar() {
      router.push('/login');
    },
    async handleCadastro() {
      try {
        if (this.formData.senha !== this.confirmacao_senha) {
          console.error("Senhas diferentes");
          return;
        }
        const response = await fetch("http://localhost:3000/usuario", {
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
        this.formData.cpf = "";
        this.confirmacao_senha = ""
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
      }
    },
    formatarCPF() {
      // Remove qualquer caractere que não seja número do CPF
      let cpfNumerico = this.formData.cpf.replace(/\D/g, '');

      // Formata o CPF (###.###.###-##)
      cpfNumerico = cpfNumerico.replace(/^(\d{3})(\d)/, '$1.$2');
      cpfNumerico = cpfNumerico.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
      cpfNumerico = cpfNumerico.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

      // Atualiza o valor do campo de CPF
      this.formData.cpf = cpfNumerico;
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
  width: 50%; /* Largura do elemento */
  height: 100%;
  background: linear-gradient(149deg, #102C46 25%, #085C48 60%);
}

.card {
  position: absolute;
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


/* Estilos adicionais para o título "Cadastre-se" */
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

.inputs {
  margin-top: 9%;
  display: grid; /* Usar grid layout */
  grid-template-columns: repeat(3); /* Duas colunas com largura igual */
  grid-template-rows: repeat(2); /* Três linhas com altura automática */
  align-self: center; /* Centralizar verticalmente */
  justify-content: center;
  gap: 5%;
}



.form-group {
  display: flex; /* Use flexbox para organizar os elementos lado a lado */
  justify-content: center;
  margin-bottom: 5%;
}

.element {
  display: flex;
  justify-content: center;
  width: 150%;
  margin-right: 18%;
}

.form-group .element:last-child{
  margin-right: 0%;
}

.form-control{
  border-radius: 12px;
  border: none; /* Remove a sombra */
  padding: 8%;
  align-self: center; /* Centralizar verticalmente */
  justify-content: center;
}


.btn-cadastrar {
  margin-right: 5%; /* Espaçamento entre os campos */
  width: 120px; /* Defina a largura desejada para o botão */
  height: fit-content; /* Defina a altura desejada para o botão */
  padding: 4%;
  background-color: #102C46; /* Cor de fundo do botão */
  color: white; /* Cor do texto do botão */
  border: none; /* Remove a borda do botão */
  border-radius: 12px; /* Raio da borda do botão */
  font-size: 14px; /* Tamanho da fonte do texto do botão */
  font-family: 'Open Sans', sans-serif;
  cursor: pointer; /* Altera o cursor ao passar o mouse sobre o botão */
  transition: background-color 0.3s ease; /* Adiciona uma transição suave para a cor de fundo */
  
}

.btn-cadastrar:hover {
  background-color: #003366; /* Cor de fundo do botão ao passar o mouse sobre ele */
}

.btn-cancelar {

  width: 120px; /* Defina a largura desejada para o botão */
  height: fit-content; /* Defina a altura desejada para o botão */
  padding: 4%;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  color: white; /* Cor do texto do botão */
  border: none; /* Remove a borda do botão */
  border-radius: 12px; /* Raio da borda do botão */
  font-size: 14px; /* Tamanho da fonte do texto do botão */
  font-family: 'Open Sans', sans-serif;
  cursor: pointer; /* Altera o cursor ao passar o mouse sobre o botão */
  transition: background-color 0.3s ease; /* Adiciona uma transição suave para a cor de fundo */
}

.btn-cancelar:hover {
  background-color: #BFBFBF; /* Cor de fundo do botão ao passar o mouse sobre ele */
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
