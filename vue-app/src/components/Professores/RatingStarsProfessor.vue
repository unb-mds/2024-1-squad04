<template>
  <div class="container">
    
    <div class="rating">
      <input type="radio" name="notaAcesso" id="star1-5" value=5 @change="emitirAvaliacao" v-model="rating.notaAcesso" style="--c: #0a745b;" />
      <input type="radio" name="notaAcesso" id="star1-4" value=4 @change="emitirAvaliacao" v-model="rating.notaAcesso" style="--c: #0a745b;" />
      <input type="radio" name="notaAcesso" id="star1-3" value=3 @change="emitirAvaliacao" v-model="rating.notaAcesso" style="--c: #0a745b;" />
      <input type="radio" name="notaAcesso" id="star1-2" value=2 @change="emitirAvaliacao" v-model="rating.notaAcesso" style="--c: #0a745b;" />
      <input type="radio" name="notaAcesso" id="star1-1" value=1 @change="emitirAvaliacao" v-model="rating.notaAcesso" style="--c: #0a745b;" />
      <p class = "tipo-nota">Acesso:</p>
    </div>
    
    <div class="rating">
      <input type="radio" name="notaDidatica" id="star2-5" value=5  @change="emitirAvaliacao" v-model="rating.notaDidatica" style="--c: #0a745b;" />
      <input type="radio" name="notaDidatica" id="star2-4" value=4  @change="emitirAvaliacao" v-model="rating.notaDidatica" style="--c: #0a745b;" />
      <input type="radio" name="notaDidatica" id="star2-3" value=3  @change="emitirAvaliacao" v-model="rating.notaDidatica" style="--c: #0a745b;" />
      <input type="radio" name="notaDidatica" id="star2-2" value=2  @change="emitirAvaliacao" v-model="rating.notaDidatica" style="--c: #0a745b;" />
      <input type="radio" name="notaDidatica" id="star2-1" value=1  @change="emitirAvaliacao" v-model="rating.notaDidatica" style="--c: #0a745b;" />
      <p class = "tipo-nota">Didática:</p>
    </div>
    
    <div class="rating">
      <input type="radio" name="notaMetodologia" id="star3-5" value=5  @change="emitirAvaliacao" v-model="rating.notaMetodologia" style="--c: #0a745b;" />
      <input type="radio" name="notaMetodologia" id="star3-4" value=4  @change="emitirAvaliacao" v-model="rating.notaMetodologia" style="--c: #0a745b;" />
      <input type="radio" name="notaMetodologia" id="star3-3" value=3  @change="emitirAvaliacao" v-model="rating.notaMetodologia" style="--c: #0a745b;" />
      <input type="radio" name="notaMetodologia" id="star3-2" value=2  @change="emitirAvaliacao" v-model="rating.notaMetodologia" style="--c: #0a745b;" />
      <input type="radio" name="notaMetodologia" id="star3-1" value=1  @change="emitirAvaliacao" v-model="rating.notaMetodologia" style="--c: #0a745b;" />
      <p class = "tipo-nota">Metodologia:</p>
    </div>
    
    <div class="rating">
      <input type="radio" name="notaCarisma" id="star4-5" value=5  @change="emitirAvaliacao" v-model="rating.notaCarisma" style="--c: #0a745b;" />
      <input type="radio" name="notaCarisma" id="star4-4" value=4  @change="emitirAvaliacao" v-model="rating.notaCarisma" style="--c: #0a745b;" />
      <input type="radio" name="notaCarisma" id="star4-3" value=3  @change="emitirAvaliacao" v-model="rating.notaCarisma" style="--c: #0a745b;" />
      <input type="radio" name="notaCarisma" id="star4-2" value=2  @change="emitirAvaliacao" v-model="rating.notaCarisma" style="--c: #0a745b;" />
      <input type="radio" name="notaCarisma" id="star4-1" value=1  @change="emitirAvaliacao" v-model="rating.notaCarisma" style="--c: #0a745b;" />
      <p class = "tipo-nota">Carisma:</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ratingStars",
  data() {
      return {
          rating: {
              notaAcesso: '',
              notaDidatica: '',
              notaMetodologia: '',
              notaCarisma: '',
          }
      };
  },
  methods: {
  emitirAvaliacao() {
    // Emitir evento com os dados de avaliação
    this.$emit('avaliacao-atualizada', this.rating);
  }
}
};
</script>

<style scoped>

.tipo-nota {
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    padding-left: 1rem; /* Adiciona espaço entre as estrelas e o texto */
    flex: 1;
    text-align: left; /* Alinha o texto à esquerda */
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Alinhar itens à esquerda */
    margin: 0; 

  }

  .rating{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0.2rem 0; /* Adjusted padding for better spacing */
    border: none;
    margin: 0;
  }

  .rating input{
    position: relative;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .rating input::before{
    content: "\f005";
    position: absolute;
    font-family: fontAwesome;
    font-size: 3rem;
    color: #313131a2;
    transition: 0.5s;
  }

  .rating input:hover ~ input::before,
  .rating input:hover::before,
  .rating input:checked ~ input::before,
  .rating input:checked::before{
    color: var(--c);
  }
</style>


