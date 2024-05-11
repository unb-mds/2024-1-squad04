<template>     
        <div class="home">
        <NavBar/>
        <div class="section1">
            <div class="text-professor">
                <div class="title-subtitle">
                <div class="title">Sua jornada para o sucesso começa aqui!</div>
                <div class="subtitle">Explore nossas ferramentas de avaliação.</div>
            </div>

            <div class="card-professores">
                <div class="professores-image">
                    <div class="professores">
                        <CardProfessor/>
                        <CardProfessorTopRest/>
                        <CardProfessorTopRest/>
                        <CardProfessorTopRest/>
                    </div>

                    <div class="image-1">
                        <img src="../assets/Home-1.svg">
                    </div>
                </div>
                <button class="veja-mais"> Veja Mais</button>
            </div>
        </div>
            
        </div>

    </div>


    
</template>

<script>

import NavBar from '../components/NavbarHome.vue'
import CardProfessor from '../components/CardProfessorHomeComponent.vue'
import CardProfessorTopRest from '../components/CardProfessorTopRestComponent.vue'


export default {
    

    components: {
        NavBar, // Registre o componente
        CardProfessor,
        CardProfessorTopRest,
    },


    name: "HomeComponent",
    data() {
        return {

        }
    },
    methods: {

    },

}
</script>
<style scoped>

body{
    overflow: auto;
    overflow-x: hidden ;

}

.home{
    background: hsla(209, 63%, 17%, 1);
   background: linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
   background: -moz-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
   background: -webkit-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100;

}  
    .section1{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-professor{
        padding:4%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:40px;
        width: 100%;

    }
    .title-subtitle{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 20px;
        width: 85%;
    }

    .title{
        color: #e6e6e6;
        font-family: 'Open Sans', sans-serif;
        font-size: 4rem;
        font-weight: 800;
    }

    .subtitle{
        color: #c4c4c4;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        font-weight: 200; 
    }

    .card-professores{
        display: flex;
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(153,153,153,0.2) 100%);
        padding: 3%;
        border-radius: 40px;
    }

    .professores-image{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap-reverse;
    }


    .image-1{
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .image-1 img{
        width: 70%;
    }


    .professores{
       width: 700px;
    }

    @media screen and (max-width: 1200) {

    }



</style>