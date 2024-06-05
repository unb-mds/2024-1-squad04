<template>
  <div class="avaliacoes">
    <NavBar />
    <h1 class="titulo-avaliacao">Avaliações</h1>

    <div class="professores-materias">
      <div class="professores">
        <h2 class="professores-text">Professores</h2>
      </div>
      <div class="materias">
        <h2 class="materias-text">Materias</h2>
      </div>
    </div>
    <p class="reviews">{{ avaliacoes.length }} Comentários</p>
    <div class="listagem-avaliacoes-professores">
      <CardMinhaAvaliacaoProfessor />
    </div>
    <div class="listagem-avaliacoes-materias">
      <CardMinhaAvaliacao v-for="avaliacao in avaliacoes" :key="avaliacao.id" :avaliacao="avaliacao" />
    </div>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/Navegacao/NavBar.vue';
import FooterBar from '@/components/Navegacao/FooterBar.vue';
import CardMinhaAvaliacao from '@/components/Avaliacao/CardMinhaAvaliacao.vue';
import CardMinhaAvaliacaoProfessor from '@/components/Avaliacao/CardMinhaAvaliacaoProfessor.vue';

export default {
  name: 'AvaliacaoPage',
  components: {
    NavBar,
    FooterBar,
    CardMinhaAvaliacao,
    CardMinhaAvaliacaoProfessor,
  },
  data() {
    return {
      avaliacoes: [
        { id: 1, titulo: 'Avaliação 1', nome_usuario: 'Usuário 1', nota: 4.5, detalhes: 'Detalhes da avaliação 1' },


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
  text-decoration: white;
  min-height: 100vh; /* altura mínima da página */
}

.titulo-avaliacao {
  color: #E0E0E0;
  font-family: 'Open Sans', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin-top: 5vh;
}

.professores-materias{
  display: flex;
  width: 100%;
  max-width: 500px;
  justify-content: center;
}

.professores{
  padding: 10px 20px 10px 20px;
  background-color: aliceblue;
  border-radius: 20px 0 0 20px;
}

.professores-text{
  color: #333333;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.materias{
  padding: 10px 20px 10px 20px;
  border-radius: 0px 20px 20px 0;
  border: solid 2px aliceblue;
}

.materias-text{
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}


.reviews {
  color: #BFBFBF;
  font-family:'Inter', sans-serif;
  font-size: 16px;
}

.listagem-avaliacoes-professores{
  margin-top: 30px;
  width: 100%;
  max-width: 834px; /* Ajuste conforme necessário */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 100px; /* espaço para o FooterBar */
  box-sizing: border-box; /* incluir padding na altura */
}


.listagem-avaliacoes-materias{
  margin-top: 30px;
  width: 100%;
  max-width: 834px; /* Ajuste conforme necessário */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 100px; /* espaço para o FooterBar */
  box-sizing: border-box; /* incluir padding na altura */
}


.FooterBar {
  margin-top: auto; /* empurrar para a parte inferior */
}
</style>
