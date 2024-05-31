<template>
  <div class="comment-card">
    <div class="materia-info">
      <span class="materia">Materia</span>
    </div>
    <div class="professor-info">
      <span class="professor">Professor</span>
    </div>
    <div class="flex-container">
      <div class="five-estrelas">
        <img
          v-for="(index) in 5"
          :key="index"
          ref="estrelas"
          src="../../assets/icons/avaliacao/icone-estrela-azul.svg"
          alt=""
          class="estrela"
        />
      </div>
      <div class="comment-data">
        <span class="date">1 de junho de 2024</span>
      </div>
    </div>
    <div class="comment-content">
      <p class="comment-text">
        "Adorei a disciplina de Metódos de Desenvolvimento de Software. Os projetos práticos nos desafiam a aplicar conceitos teóricos de forma eficiente."      </p>
      <button class="like-button">Apagar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentCard'
};
</script>

<style scoped>
.comment-card {
  background-color: #F3F3F3;
  border: 1px solid #ccc;
  border-radius: 14px;
  padding: 10px;
  margin-bottom: 20px;
  width: 434px;
}

.materia-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.materia {
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: black;
}

.professor-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.professor {
  font-weight: lighter;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  color: #333333 65%;
}

.flex-container {
  display: flex;
  align-items: center;
}

.five-estrelas {
  display: flex;
  justify-content: flex-start;
  gap: 1rem; /* Reduzindo o espaço entre as estrelas */
}

.estrela {
  width: 4%;
}

.comment-text {
  margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: lighter;
}

.comment-data {
  display: flex;
  align-items: center;
}

.date {
  color: #666;
  margin-left: 0.5rem; /* Adicionada margem esquerda */
}

.like-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
