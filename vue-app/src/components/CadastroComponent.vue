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

          <p v-if="mensagemErro" class="erro">{{ mensagemErro }}</p>
          <form @submit.prevent="handleCadastro" class="form">
            <div class="inputs">
              <!-- Div para agrupar os campos Nome e CPF -->
              <div class="form-group">
                <div class="form-group">
                  <label for="nome" class="mr-flex"></label>
                  <input id="nome" v-model="formData.nome" class="form-control" placeholder="Nome" required>
                </div>
                <div class="form-group">
                  <label for="sobrenome" class="mr-flex"></label>
                  <input id="sobrenome" v-model="formData.sobrenome" class="form-control" placeholder="Sobrenome" required>
                </div>
              </div>
              <!-- Fim do grupo Nome e Sobrenome -->

              <div class="form-group">
                <div class="form-group">
                  <label for="cpf" class="mr-flex"></label>
                  <input id="cpf" v-model="formData.cpf" @input="formatarCPF" class="form-control" placeholder="CPF" required>
                </div>
                <div class="form-group">
                  <label for="email" class="d-flex"></label>
                  <input id="email" v-model="formData.email" type="email" class="email" placeholder="E-mail" required>
                </div>
              </div>
              <!-- Div para agrupar os campos Senha e Confirmação de Senha -->
              <div class="form-group">
                <div class="form-group">
                  <label for="senha" class="mr-2"></label>
                  <input id="senha" v-model="formData.senha" type="password" class="form-control" placeholder="Senha" required>
                </div>
                <div class="form-group">
                  <label for="confirma_senha" class="mr-2"></label>
                  <input id="confirma_senha" v-model="confirmacao_senha" type="password" class="form-control" placeholder="Confirme sua senha" required>
                </div>
              </div>
              <!-- Fim do grupo Senha e Confirmação de Senha -->

              <!-- Div para agrupar os campos Curso e Matrícula -->
              <div class="form-group">
                <div class="form-group">
                  <label for="curso" class="mr-2"></label>
                  <select id="curso" v-model="formData.curso" class="form-control" required>
                    <option value="">Selecione o curso</option>
                    <option value="Engenharia de Software">Engenharia de Software</option>
                    <option value="Engenharia Aeroespacial">Engenharia Aeroespacial</option>
                    <option value="Engenharia Automotiva">Engenharia Automotiva</option>
                    <option value="Engenharia Eletrônica">Engenharia Eletrônica</option>
                    <option value="Engenharia de Energia">Engenharia de Energia</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="matricula" class="mr-2"></label>
                  <input id="matricula" v-model="formData.matricula" class="form-control" placeholder="Matrícula" required>
                </div>
              </div>
              <!-- Fim do grupo Curso e Matrícula -->
              <div class="d-flex justify-content-between">
                <button type="submit" class="btn btn-primary btn-block btn-cadastrar">Cadastrar</button>
                <button class="btn btn-secondary btn-block btn-cancelar" @click.prevent="HandleCancelar">Cancelar</button>
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
import  axios  from "axios";

export default {
  name: "CadastroComponent",
  data() {
    return {
      mensagemErro: "",
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

  async verificarExistencia() {
  try {
    const response = await axios.get('http://localhost:3000/usuario');
    const usuarios = response.data;

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === this.formData.email) {
        return "O e-mail já está cadastrado.";
      }

      if (usuarios[i].matricula.toString() === this.formData.matricula) {
        return "A matrícula já está cadastrada.";
      }

      if (usuarios[i].cpf === this.formData.cpf) {
        return "O CPF já está cadastrado.";
      }

    }
    return null;

  } catch (error) {
    console.log(error);
    return "Erro ao verificar cadastro."; // Mensagem de erro genérica
  }
},

  async HandleCancelar() {
      router.push('/login');
    },

   async handleCadastro() {
   try {
    this.mensagemErro = ""; // Limpa a mensagem de erro ao tentar cadastrar novamente

    const existe = await this.verificarExistencia();
    if (existe) {
      this.mensagemErro = existe; // Define a mensagem de erro para exibição
      return;
    }

    if (this.formData.senha !== this.confirmacao_senha) {
      this.mensagemErro = "As senhas são diferentes! Confirme sua senha.";
      return;
    }
      
       await fetch("http://localhost:3000/usuario", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.formData)
        });
        this.formData.nome = "";
        this.formData.sobrenome =  "";
        this.formData.email = "";
        this.formData.senha = "";
        this.formData.curso = "";
        this.formData.matricula = "";
        this.formData.cpf = "";
        this.confirmacao_senha = ""
        router.push('/login');
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
  top: 55%;
  right: 19%; /* Ajuste fino para espaçamento da borda direita */
  transform: translate(0, -50%);
  width: 55%; /* Largura do elemento */
  height: 45%;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 50px;
}


/* Estilos adicionais para o título "Cadastre-se" */
.title {
  font-family: 'Open Sans', sans-serif;
  font-size: 450%;
  color: #fff; /* Cor branca */
  padding: 20px; /* Padding para todos os lados */    
  margin-bottom: 55px; /* Margem inferior para criar espaço entre o título e a caixa do card */
  margin-top: 140px;
  margin-left: 19%;
}

/* Estilos adicionais para os outros textos */
.text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  letter-spacing: 5%;
  color: #6D6B71; /* Cor cinza */
}
.inputs {
  margin-top: 40px;
  margin-left: 30px;
  flex-direction: column;
  align-items: center; /* Centralizar itens horizontalmente */
}

.form-group {
  margin-bottom: 16px; /* Espaçamento na parte inferior de cada campo */
  display: flex;
  align-items: center; /* Centralizar itens horizontalmente */
}

.form-group input {
  margin-right: 20px; /* Espaçamento entre os campos */
  border-radius: 12px;
  border: none; /* Remove a sombra */
  padding: 12px;
}

.form-group select {
  margin-right: 20px; /* Espaçamento entre os campos */
  border-radius: 12px;
  border: none; /* Remove a sombra */
  padding: 12px;
  color: #6D6B71;
}






.btn-cadastrar {
  margin-right: 10px; /* Espaçamento entre os campos */
  width: 120px; /* Defina a largura desejada para o botão */
  height: fit-content; /* Defina a altura desejada para o botão */
  padding: 12px;
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
  padding: 12px;
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

.erro{
  color: white;
  font-family: 'Inter', sans-serif;
}
</style>
