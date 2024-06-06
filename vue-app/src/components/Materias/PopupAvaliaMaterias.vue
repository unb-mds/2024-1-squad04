<template>
    <div class = "popup">
        <div class="popup-inner">
            <slot/>
            <header class = "popup-header">
                <div class="materia-nome">{{materia.nome_materia}} ({{materia.cod_materia}})</div>
            </header>
        
            <form class = "form-items">
                <div class="inputs">
                  
                  <div class="rating-stars-div"><ratingStars @avaliacao-atualizada="handle"/></div>
                  
                  <div class= "camp-txt">
                    <textarea  placeholder="Escreva seu comentário" maxlength="250" class = "comentario"/>
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
    import ratingStars from "./RatingStarsMaterias.vue";
    //matricula-int, cod_prof-char, materia-char, resto-int

    export default{
        name: "PopUp",
        components: {
            ratingStars
        },
        props: {
            TogglePopup: Function,
            materia: Object,
        },
        data() {
            return {
            };
        },
          
    }
    
  </script>
  
  <style scoped>
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
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
      margin-top: 2.5rem;
    }
  
  
    .materia-nome{
      margin-left: 5rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 3rem;
      color: rgb(32, 32, 32);
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
      width: 100%;
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
  </style>