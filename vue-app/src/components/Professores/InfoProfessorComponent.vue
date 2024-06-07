<template>
    <div class="container-frame">
        <div class="container">
            <PopUp v-if="popupTrigger.buttonTrigger" :TogglePopup = "() => TogglePopup('buttonTrigger')" :professor="professor"/>
        <!-- Sidebar -->
        <div id="sidebar">
            <div id="image-content">
                <img :src="verificarUrl(professor.foto_professor)" alt="Foto do Professor" class="profile-pic"/>
                <h2>{{ professor.nome_professor }}</h2>
                <h3>Faculdade do Gama</h3>
            </div>
            
            <button class="role-button" @click="() => TogglePopup('buttonTrigger')">Avaliar</button>
    
            <div class="all-personal-info">

                <div class="academic-info, info">
                    <div class="container-academic-info">
                        <h3>Personal</h3>
                        <ul>
                            <li>27</li>
                            <li>Paris</li>
                            <li>Female</li>
                            <li>Student</li>
                        </ul>
                    </div>
                </div>


                <div class="professor-contact-info, info">
                    <h3>Contatos</h3>
                    <p>UX Designer @ Guillet.io</p>
                    <p>€74,000 - 80,000</p>
                </div>
            </div>

        </div>

        <!-- Content1 -->
        <div id="content1">
            <div class="section" id="general-reviews">
                <h3>Avaliações Gerais</h3>
                <p>Home Space</p>
                <p>Solo Worker</p>
                <p>Mobile</p>
                <!-- Example content for user environment -->
            </div>
            <div class="section" id="given-subjects">
                <div class="subjects_container">
                    <div class="subjects-title">
                    <img src="@/assets/icons/pagina_professor/purpose.png" alt="" id="subjects_icon">
                    <h3>Disciplinas Ministradas</h3>
                </div>
                
                <p id="semestre-atual">2024.1</p>

                <ul id = "materias_dadas" v-if="professor.materias && professor.materias.length > 0">
                    <div id = "materias">
                        <li v-for="materia in professor.materias" :key="materia.cod_materia">{{ materia.nome_materia }}</li>
                    </div>
                    <div id = "codigos-materias">
                        <li v-for="materia in professor.materias" :key="materia.cod_materia">{{ materia.cod_materia }}</li>
                    </div>
                    
                </ul>
                </div>
                
                
            </div>
        </div>

        <!-- Content2 -->
        <div id="content2">
                <div class="section" id="teacher-review">
                    <h3>Avaliações</h3>
                    <div id="avaliacoes" v-if="professor.avaliacoes && professor.avaliacoes.length > 0">
                        <div  v-for="avaliacao in professor.avaliacoes" :key="avaliacao.usuario.matricula" class="avaliacao">
                            <div class="container-avaliacao">
                                <div id="avaliacao-nome"><p>{{ avaliacao.usuario.nome_usuario }}</p></div>
                                <div id="avaliacao-codigo"><p>{{ avaliacao.cod_materia }}</p></div>
                                <div id="avaliacao-nota-total"><p><strong>Nota Total:</strong> {{ avaliacao.nota_total }}</p></div>
                                <div id="avaliacao-comentario"><p>{{ avaliacao.comentario }}</p></div>
                                
                                
                                <div id="avaliacao-icons">
                                    <div id="like-icon">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.94287 13.0973V5.90059C5.94287 5.61726 6.02787 5.34101 6.1837 5.10726L8.11745 2.23143C8.42204 1.77101 9.17995 1.44518 9.82454 1.68601C10.5187 1.91976 10.9791 2.69893 10.8304 3.39309L10.462 5.70934C10.4337 5.92184 10.4904 6.11309 10.6108 6.26184C10.7312 6.39643 10.9083 6.48143 11.0995 6.48143H14.0108C14.5704 6.48143 15.052 6.70809 15.3354 7.10476C15.6045 7.48726 15.6541 7.98309 15.477 8.48601L13.7345 13.7914C13.515 14.6698 12.5587 15.3852 11.6095 15.3852H8.84704C8.37245 15.3852 7.70662 15.2223 7.40204 14.9177L6.49537 14.2164C6.14829 13.9543 5.94287 13.5364 5.94287 13.0973Z" fill="#171717" fill-opacity="0.5"/>
                                    <path d="M3.6905 4.51953H2.96091C1.863 4.51953 1.41675 4.94453 1.41675 5.99286V13.1187C1.41675 14.167 1.863 14.592 2.96091 14.592H3.6905C4.78841 14.592 5.23466 14.167 5.23466 13.1187V5.99286C5.23466 4.94453 4.78841 4.51953 3.6905 4.51953Z" fill="#171717" fill-opacity="0.5"/>
                                    </svg>
                                </div>
                                
                                <div id="dislike-icon">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="scale(-1,1) translate(-17,0)">
                                    <path d="M5.94287 13.0973V5.90059C5.94287 5.61726 6.02787 5.34101 6.1837 5.10726L8.11745 2.23143C8.42204 1.77101 9.17995 1.44518 9.82454 1.68601C10.5187 1.91976 10.9791 2.69893 10.8304 3.39309L10.462 5.70934C10.4337 5.92184 10.4904 6.11309 10.6108 6.26184C10.7312 6.39643 10.9083 6.48143 11.0995 6.48143H14.0108C14.5704 6.48143 15.052 6.70809 15.3354 7.10476C15.6045 7.48726 15.6541 7.98309 15.477 8.48601L13.7345 13.7914C13.515 14.6698 12.5587 15.3852 11.6095 15.3852H8.84704C8.37245 15.3852 7.70662 15.2223 7.40204 14.9177L6.49537 14.2164C6.14829 13.9543 5.94287 13.5364 5.94287 13.0973Z" fill="#171717" fill-opacity="0.5"/>
                                    <path d="M3.6905 4.51953H2.96091C1.863 4.51953 1.41675 4.94453 1.41675 5.99286V13.1187C1.41675 14.167 1.863 14.592 2.96091 14.592H3.6905C4.78841 14.592 5.23466 14.167 5.23466 13.1187V5.99286C5.23466 4.94453 4.78841 4.51953 3.6905 4.51953Z" fill="#171717" fill-opacity="0.5"/>
                                    </g>
                                    </svg>
                                </div>

                            </div>
                            
                            <div id="avaliacao-likes"><p>{{ avaliacao.num_likes }}</p></div>
                                

                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p>Nenhuma avaliação disponível.</p>
                    </div>
                </div>
            </div>
    </div>
    </div> 
</template>

<style scoped>

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.container-frame{
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
   
}

.container {
    height: calc(100% - 60px);
    width: calc(100% - 60px);
    display: grid;
    /* height: 100vh; */
    grid-template-columns: 0.7fr 1fr 0.7fr;
    gap: 40px;
    padding: 40px;
    
    background: -webkit-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
}


#sidebar {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: auto;
    padding-bottom: 0px;
    margin-bottom: 20px;
}





#image-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

#image-content h2 {
    text-align: center;
    font-size: 22px;
    padding-top: 10px;
}

#image-content h3 {
    font-size: 18px;
    font-weight: normal;
    margin-top: 0px;
}

.profile-pic {
    width: 50%;
    border-radius: 8px;
}

.role-button {
    background: -webkit-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);;
    color: white;
    border: none;
    height: 4.5rem;
    width: 15rem;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 1.5rem;
    font-family: Inter, sans-serif;
    cursor: pointer;
    align-self: center;
}

.quote {
    margin-top: 10px;
    font-style: italic;
}

.all-personal-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.academic-info, .professor-contact-info {
    margin-top: 20px;
    overflow: auto;
}

.academic-info{
    height: 50%;
    background-color: #f5f5f5;
    border-radius: 10px;
}

.professor-contact-info{
    height: 50%;
    background-color: #f5f5f5;
    border-radius: 10px;
}
.academic-info ul {
    list-style: none;
    padding: 0;
}

.traits button {
    background-color: #e0e0e0;
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

#content1, #content2 {
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow: auto;
    margin-bottom: 20px;
}

.section {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: auto;
}

.subjects_container{
  
}

#given-subjects{
    display: flex;
    justify-content: center;
    padding-bottom: 0px;
}

#given-subjects, #general-reviews{
    background-color: #f5f5f5;
    height: 50%;
}

#general-reviews h3{
    font-size: 2.17em;
}

#general-reviews{
    height:60%;
}

#given-subjects{
    height: 40%;
}

.subjects-title {
    display: flex;
    margin-bottom: 30px;
}

.subjects-title h3 {
    text-align: center;
    align-content: center;
    margin: 0;
    margin-left: 5px;
    font-size: 20px;
}

#subjects_icon {
    width: 40px;
}

#semestre-atual{
    padding-left: 30px;
    font-size: 1.2rem;
    font-weight: bold;
}

#materias_dadas {
    display: flex;
    width: 400px;
}

.subjects-title {
    padding: 30px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 15px;
}

#given-subjects {
    display: flex;
    /* justify-content: center; */
    align-items: center;
}

#materias_dadas {
    list-style-type: none;
    padding-left: 30px;
}

#codigos-materias {
    padding-left: 20%;
}

#materias_dadas li {
    padding: 3px;
    font-size: 1.2rem;
}

#teacher-review{
    height: 100%;
    background-color: #f5f5f5;
    margin-right: 20px;
}

#teacher-review h3 {
    font-size: 2.17em;
    text-align: center;
}


#avaliacoes {
    display: flex;
    flex-direction: column; /* This ensures the children elements stack vertically */
    align-items: center;    /* This centers the children horizontally */
    justify-content: center; /* This centers the children vertically */
}

.avaliacao {
    /* align-content: center; */
    background-color: rgb(235, 235, 235);
    margin-bottom: 20px;
    height: 22rem;
    width: 22rem;
    padding: 15px;
    /* border: 1px solid #ddd; */
    border-radius: 8px;
}

.avaliacao p {
    margin: 5px 0;
}

#avaliacao-nome{
    font-weight: bold;
}

#avaliacao-icons{
    display: flex;
    justify-content:space-between;
}

#dislike-icon{
    width: 10rem;
}

h3, h2{
    font-family: 'Open Sans', sans-serif;
}

li, p{
    font-family: Inter, sans-serif;
}

/* Estilos para dispositivos móveis */
@media (max-width: 1200px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }

    #sidebar {
        grid-row: 1;
    }

    #content1, #content2 {
        grid-row: auto;
        display: flex;
        flex-direction: column;
    }
}
</style>

<script>

import { getProfessoresByID } from "@/repositories/professor/obterProfessor.js";
import PopUp from './PopupAvaliaProfessor.vue'
import { ref } from 'vue';

export default {
    name: "UserProfile",
    
    components: {
        PopUp,
    },

    data() {
        return {
            professor: Object,
        };
    },
    setup(){
        const popupTrigger = ref({
            buttonTrigger: false
        });

        const TogglePopup = (trigger) => {
            popupTrigger.value[trigger] = !popupTrigger.value[trigger];
        };

        return{
            popupTrigger,
            TogglePopup,
        }
        
    },
    methods: {
        async fetchProfessor(id) {
            try {
                const data = await getProfessoresByID(id);
                this.professor = data[0];
                console.log(data[0]);
            } catch (error) {
                console.error('Erro ao obter professor', error);
            }
        },

        verificarUrl(urlProfessor) {
            if(urlProfessor === 'https://sigaa.unb.br/sigaa/img/no_picture.png') {
                return 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png';
            }
            return urlProfessor;
        }
    },
    mounted() {
        const cod_professor = this.$route.params.id; 
        this.fetchProfessor(cod_professor);
    }

};
</script>
