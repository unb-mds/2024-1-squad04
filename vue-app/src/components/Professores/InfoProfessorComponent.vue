<template>
    <div class="container-frame">
        <div class="container">
            <PopUp v-if="popupTrigger.buttonTrigger" :TogglePopup = "() => TogglePopup('buttonTrigger')" :professor="professor"/>
        <!-- Sidebar -->
        <div id="sidebar">
            <div id="image-content">
                <img :src="verificarUrl(professor.foto_professor)" alt="Alice Kaushik" class="profile-pic"/>
                <h2>{{ professor.nome_professor }}</h2>
                <h3>Faculdade do Gama</h3>
            </div>
            
            <button class="role-button" @click="() => TogglePopup('buttonTrigger')">UX Designer</button>
            <p class="quote">If you equip people with the right tools, they will build the most extraordinary things.</p>
            
            <div class="all-personal-info">

                <div class="academic-info">
                    <div class="container-academic-info">
                        <h3>Formação Acadêmica</h3>
                        <ul>
                            <li>27</li>
                            <li>Paris</li>
                            <li>Female</li>
                            <li>Student</li>
                        </ul>
                    </div>
                </div>

                <div class= "">

                </div>
                <div class="professor-contact-info">
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
                    <h3>Avaliações dos Alunos</h3>
                    <div v-if="professor.avaliacoes && professor.avaliacoes.length > 0">
                        <div v-for="avaliacao in professor.avaliacoes" :key="avaliacao.usuario.matricula" class="avaliacao">
                            <p><strong>Usuário:</strong> {{ avaliacao.usuario.nome_usuario }}</p>
                            <p><strong>Matéria:</strong> {{ avaliacao.cod_materia }}</p>
                            <p><strong>Nota Total:</strong> {{ avaliacao.nota_total }}</p>
                            <p><strong>Número de Likes:</strong> {{ avaliacao.num_likes }}</p>
                            <p><strong>Comentário:</strong> {{ avaliacao.comentario }}</p>
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
    
}

.container {
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    display: grid;
    /* height: 100vh; */
    grid-template-columns: 0.7fr 1fr 0.7fr;
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
}

#sidebar {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    margin-top: 0px;
}

.profile-pic {
    width: 50%;
    border-radius: 8px;
}

.role-button {
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
}

.quote {
    margin-top: 10px;
    font-style: italic;
}

.all-personal-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.academic-info, .professor-contact-info {
    margin-top: 20px;
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
    gap: 20px;
}

.section {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

#given-subjects, #general-reviews{
    height: 50%;
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

#materias_dadas {
    display: flex;
    width: 400px;
}

.subjects-title {
    padding: 30px;
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
}

#teacher-review{
    height: 100%;
}

.avaliacao {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.avaliacao p {
    margin: 5px 0;
}

/* Estilos para dispositivos móveis */
@media (max-width: 768px) {
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
