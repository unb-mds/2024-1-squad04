<template>
  <div class = "popup">
      <div class="popup-inner">
          <header class = "popup-header">
              <slot/>
              <div class="foto-professor-div">
                  <img  :src="verificarUrl(professor.foto_professor)"  alt="" class="foto-professor"/>
              </div>
              <div class="professor-nome">{{professor.nome_professor}}</div>
          </header>
      
          <form class = "form-items" @submit.prevent="SubmitAvaliacao">
              <div class="inputs">
                <div class="select-container">
                  <select class = "select-box" v-model.number="comentario_materia.materia" required>
                      <option class="opcao" disabled value="">Materia para avaliar</option>
                      <option class="opcao" v-for="option in this.professor.materias_professor" :key="option.nome_materia" :value="option.cod_materia">{{ option.nome_materia }}</option>
                  </select>
                </div>
                
                <div class="rating-stars-div"><ratingStars @avaliacao-atualizada="handle"/></div>
                
                <div class= "camp-txt">
                  <textarea v-model="comentario_materia.comentario" placeholder="Escreva seu comentário" maxlength="250" class = "comentario"/>
                </div>
              </div>
              <p v-if="erro" class="error-message">{{ erro }}</p>
              <div class="btn-container">
                <button type="submit" class="send-btn">Enviar</button>
                  <button type="button" class="close-btn" @click="() => TogglePopup('buttonTrigger')" required >Voltar</button>
                  
              </div>
          </form>
      </div>
  </div>
</template>

<script>
  import { enviarAvaliacaoProfessor } from '@/generals/enviarAvaliacaoProfessor.js';
  import { getUsuarioLogado } from '@/generals/getUsuarioLogado.js';
  import { getUsuarios } from "../../repositories/usuario/obterUsuarios.js";
  import ratingStars from "./RatingStarsProfessor.vue"
  //matricula-int, cod_prof-char, materia-char, resto-int
  let nota_acesso, nota_didatica, nota_metodologia, nota_carisma;
  export default{
      name: "PopUp",
      components: {
          ratingStars
      },
      props: {
          TogglePopup: Function,
          professor: Object,
      },
      data() {
          return {
              comentario_materia: {
                  comentario: '',
                  materia: '',
              },
              erro: ''
          };
      },
      methods: {
          verificarUrl(urlProfessor){
              if(urlProfessor==='https://sigaa.unb.br/sigaa/img/no_picture.png'){
                  return 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png';
              }
              return urlProfessor;
          },
          handle(avaliacao){
              nota_acesso = parseInt(avaliacao.notaAcesso)
              nota_didatica = parseInt(avaliacao.notaDidatica)
              nota_metodologia = parseInt(avaliacao.notaMetodologia)
              nota_carisma = parseInt(avaliacao.notaCarisma)
          },

          async SubmitAvaliacao() {
              if (isNaN(nota_acesso) || isNaN(nota_didatica) || isNaN(nota_metodologia) || isNaN(nota_carisma)) {
                  this.erro = "Preencha todas as avaliações antes de enviar!";
                  return;
              }
              try {
                  // carisma no banco vai ser metodo de ensino pq vai dar mt trabalho pra mudar o nome
                  const matriculaLogadaStr = await getUsuarioLogado();
                  const matriculaLogada = parseInt(matriculaLogadaStr, 10);
                  const usuarios = await getUsuarios();
                  this.erro = "";
                  for (let i = 0; i < usuarios.length; i++){
                      if (matriculaLogada === usuarios[i].matricula){
                          await enviarAvaliacaoProfessor(
                              matriculaLogada,
                              this.professor.cod_professor,
                              this.comentario_materia.materia,
                              nota_acesso,
                              nota_didatica,
                              nota_metodologia,
                              nota_carisma,
                              this.comentario_materia.comentario
                          );
                          this.TogglePopup()
                          location.reload();
                          return
                      }
                  }
                  this.erro = "Você precisa logar para avaliar!";
              } 
              catch (error) {
                  this.erro = "Erro ao enviar avaliação, tente novamente!";
              }
          },
      }
  }
  
</script>

<style scoped>

  .select-container{
    display: flex;
    justify-content: center;
    position: relative;
    max-width: 400px;
    width: 90vw;
  }

  .select-box {
    appearance: none;
    padding: 1rem 0 1rem 1rem;
    margin-right: 10px;
    font-size: 1.6rem;
    width: 90vw;
    border-radius: 1rem;
    background-color: #f5f5f5;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Inter', sans-serif;
    outline: none;    
  }

  
  .select-box:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  select option.opcao {
    background-color: #ffffff; /* Fundo branco */
  }


  .inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
  .popup{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.7);
    overflow-y: hidden;

  }
  .popup-header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin: 2.5rem;
  }

  .foto-professor-div {
    padding: 2.4px;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background: rgb(8,54,80);
    background: linear-gradient(150deg, #1b5994 40%, #0a745b 60%);
    position: inherit;
  }
  .foto-professor {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .professor-nome{

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    color: rgb(32, 32, 32);
    margin-right: 2rem;
    margin-top: 1.2rem;
    width: 70%;
    white-space: normal;
  }
  .send-btn, 
  .close-btn{
    font-size: 1.8rem;
    color: #034939b9;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    border-radius: 10px;
    padding: .8rem 16% .8rem 16%;
    cursor: pointer;
    transition: all 0.4s;
    margin-right: 10px;
  }
  .send-btn{
    background-color: #034939b9;
    color: white;
    border: none;
  }
  .close-btn{
    border: 1px solid black;
    background-color: white;
  }

  .close-btn:hover, 
  .send-btn:hover{
    transform: scale(1.025);
  }
  .btn-container {
    margin-top: 3vh;
    margin-bottom: 1vh;
    display: flex;
    gap: .5vw;
    justify-content: center;
    width: 100%;
  }


  .rating-stars-div {
    display: flex;
    justify-content: center;
  }

  .popup-inner{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 25px 25px 25px 25px;
    height: fit-content;
    width: 95vw;
    max-width: 500px;
    border-radius: 20px;
  }

  

  .comentario{
    width: 80vw;
    max-width: 350px;
    height: 6vh;
    font-size: 1.3rem;
    border-radius: 10px;
    background-color: #f5f5f5;
    margin-right: 10px;
    color: #333;
    padding: 1rem;
    font-family: 'Inter', sans-serif;
    outline: none;
    resize: none;
    transition: 0.3s;
  }

  .comentario:hover {
    transition: 0.3s;
    border-color: #1b5994;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  .comentario:focus{
    border-color: #1b5994;
  
  }

  .form-items{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 650px) {
      .select-box{
        font-size: 1.8rem;
        padding: 1rem;
      }
      .comentario{
        padding: 0.8rem;
        font-size: 1.8rem;
      }
  }

</style>