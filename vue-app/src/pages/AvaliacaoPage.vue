<template>
    <div class="avaliacoes">
      <NavBar />
      <h1 class="titulo-avaliacao">Avaliações</h1>
        <p class="reviews"> 12 Comentários</p>
      <div class="listagem-avaliacoes">
        <CardMinhaAvaliacao v-for="avaliacao in avaliacoes" :key="avaliacao.id" :avaliacao="avaliacao" />
      </div>
      
    </div>
    <FooterBar />
  </template>
  
  <script>
  import NavBar from '@/components/Navegacao/NavBar.vue';
  import FooterBar from '@/components/Navegacao/FooterBar.vue';
  import CardMinhaAvaliacao from '@/components/Avaliacao/CardMinhaAvaliacao.vue';
  
  export default {
    name: 'AvaliacaoPage',
    components: {
      NavBar,
      FooterBar,
      CardMinhaAvaliacao,
    },
    data() {
      return {
        avaliacoes: [
          { id: 1, titulo: 'Avaliação 1', nome_usuario: 'Usuário 1', nota: 4.5, detalhes: 'Detalhes da avaliação 1' },
          { id: 2, titulo: 'Avaliação 2', nome_usuario: 'Usuário 2', nota: 3.8, detalhes: 'Detalhes da avaliação 2' },
          // Adicione mais avaliações conforme necessário
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .avaliacoes {
    background: hsla(209, 63%, 17%, 1);
    background: linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    text-decoration: white;
  }
  .titulo-avaliacao {
    color: #E0E0E0;
    font-family: 'Open Sans', sans-serif;
    font-size: 64px;
    font-weight: bold;
  }

  .reviews {
    color: #BFBFBF;
    font-family:'Inter', sans-serif;
    font-size: 16px;
  }
  
  .listagem-avaliacoes {
    margin-top: 30px;
    width: 100%;
    max-width: 1200px; /* Ajuste conforme necessário */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

  } 
  </style>
  