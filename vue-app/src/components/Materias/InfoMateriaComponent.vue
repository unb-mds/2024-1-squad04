<template>
  <div class="container-frame">
    <PopUp
      v-if="popupTrigger.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
      :materia="materia"
    />
    <div class="container">
      <div class="container-avaliacao">
        <div class="titulo-notas-gerais">
          <h3>Notas Gerais</h3>
        </div>

        <!-- Insira aqui as notas gerais dessa disciplina -->
        <div class="container-notas-gerais-disciplina"></div>
      </div>

      <div
        class="container-notas-gerais"
        @click="() => TogglePopup('buttonTrigger')"
      >
        <div class="section" id="general-reviews">
          <div class="avaliacoes-gerais-container">
            <div class="titulo-avaliacoes-gerais">
              <h3>Avaliações Gerais</h3>
            </div>

            <!-- Coloque os cards das avaliações dos alunos aqui -->
            <div class="container-avaliacoes-alunos-cards"></div>
          </div>
        </div>
      </div>

      <div class="container-professores">
        <div class="section" id="teacher-review">
          <h3>Professores</h3>

          <!-- Coloque aqui os cards dos professores que ofertam essa disciplina -->
          <div class="container-card-professores">
            <CardProfMateria
              v-for="(professor, index) in professores"
              :key="index"
              :professor="professor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { obterMateriaByID } from "@/service/materia/ManipularDadosMateriaIndividual";
import { ref } from "vue";
import PopUp from "./PopupAvaliaMaterias.vue";
import CardProfMateria from "./ProfessorPorMateria.vue";
import { obterInformacoesProfessoresFiltrados } from "@/service/professor/ManipulaDadosProfessorCardListagem";
//import router from '../routes/index';

export default {
  name: "infoMateria",

  data() {
    return {
      materia: {},
      professores: [],
    };
  },

  components: {
    PopUp,
    CardProfMateria,
  },

  methods: {
    getStarClassMateria(nota_total) {
      const notaPorEstrela = 1;
      const totalEstrelas = 5;
      let notaAtual = nota_total / notaPorEstrela;

      notaAtual = Math.round(notaAtual * 2) / 2;

      let estrelaClasses = [];

      for (let i = 1; i <= totalEstrelas; i++) {
        if (notaAtual >= i) {
          estrelaClasses.push("full-star");
        } else if (notaAtual > i - 1 && notaAtual < i) {
          estrelaClasses.push("partial-star");
        } else {
          estrelaClasses.push("empty-star");
        }
      }

      return estrelaClasses;
    },
  },

  setup() {
    const popupTrigger = ref({
      buttonTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTrigger.value[trigger] = !popupTrigger.value[trigger];
    };

    return {
      popupTrigger,
      TogglePopup,
    };
  },
  mounted() {
    const cod_materia = this.$route.params.cod;
    console.log(cod_materia);
    obterMateriaByID(cod_materia)
      .then((materia) => {
        this.materia = materia;
        console.log(this.materia);
      })
      .catch((erro) => {
        console.error("Erro ao obter matéria:", erro);
      });

    obterInformacoesProfessoresFiltrados(cod_materia)
      .then((professores) => {
        this.professores = professores;
      })
      .catch((erro) => {
        console.error("Erro ao obter professor: ", erro);
      });
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.container-frame {
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}

.container {
  height: calc(100% - 60px);
  width: calc(100% - 60px);
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.7fr;
  gap: 40px;
  padding: 40px;
  background: -webkit-linear-gradient(
    90deg,
    hsla(209, 63%, 17%, 1) 0%,
    hsla(183, 71%, 16%, 1) 100%
  );
}

.container-avaliacao {
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

.container-notas-gerais,
.container-professores {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 20px;
}

.section {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 90vh;
}

.section {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.section::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

#general-reviews h3 {
  font-size: 2.17em;
}

.avaliacoes-gerais-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 100%;
}

#teacher-review h3 {
  font-size: 2.17em;
  text-align: center;
}

.titulo-notas-gerais h3,
.titulo-avaliacoes-gerais h3 {
  font-size: 2.17em;
  text-align: center;
  color: #4d4d4d;
  font-family: "Open Sans", sans-serif;
}

li,
h3,
p {
  font-family: Inter, sans-serif;
  color: #4d4d4d;
}
</style>
