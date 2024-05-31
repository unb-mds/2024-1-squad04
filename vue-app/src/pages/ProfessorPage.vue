

<template>
    <div class="professores">
        <NavBar/>
        <BarraDePesquisaComponente @search="handleSearch"/>
        <div class="element">
                    <label for="curso" class="mr-2"></label>
                    <select id="curso" class="form-control" required @change="handleMateriaSelection">
                      <option value="">Selecione uma matéria</option>
                      <option v-for="(materia, index) in materias" 
                      :key="index"
                      :value="materia.cod_materia" >{{ materia.nome }}</option>
                    </select>
                  </div>
       
        <div class="listagem-professores">
            <CardListagemProfessoresComponent
            v-for="(professor, index) in filteredProfessores.slice(0, 15)"
            :key="index"
            :professor="professor"/>
        </div>

        <FooterBar/>
        


    </div>
</template>

<script>
    import router from '../routes/index';
    import NavBar from '../components/Navegacao/NavBar.vue'; 
    import FooterBar from '../components/Navegacao/FooterBar.vue';
    import CardListagemProfessoresComponent from '@/components/Professores/CardListagemProfessoresComponent.vue';
    import { obterInformacoesProfessoresFiltrados } from '@/service/professor/ManipulaDadosProfessorCardListagem';
    import BarraDePesquisaComponente from '../components/Navegacao/BarraDePesquisaComponent.vue'
    import { obterMateriasParaFiltragem } from '@/service/materia/PegarMateriasParaFiltragemDeProfessores';


    export default{
        components: {
            NavBar,
            FooterBar,
            CardListagemProfessoresComponent,
            BarraDePesquisaComponente,
        },

        name: "ProfessorPage",
        data() {
            return {
                professores: [],
                materias:[],
                materia_para_filtragem:'',
                searchQuery: ''
            }
        },

        computed: {
            filteredProfessores() {
                if (!this.searchQuery) {
                    return this.professores;
                }
                const query = this.searchQuery.toLowerCase();
                const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                
                return this.professores.filter(professor => {
                    const normalizedProfessor = professor.nome_professor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    return normalizedProfessor.includes(normalizedQuery);
                });
            }
        },
        methods: {
            async HandleHome(){
                router.push({name: 'home'});
            },
            handleSearch(query) {
                this.searchQuery = query;
            },
            handleMateriaSelection(event){


                this.materia_para_filtragem = event.target.value;
                console.log(this.materia_para_filtragem);

                obterInformacoesProfessoresFiltrados(this.materia_para_filtragem)
                .then(professores => {
                    this.professores = professores;
                    console.log(professores);
                })
                .catch(erro => {
                    console.error('Erro ao obter professores:', erro);
                });
            }
        },
        mounted() {
            obterInformacoesProfessoresFiltrados()
            .then(professores => {
                this.professores = professores;
                console.log(professores);
            })
            .catch(erro => {
                console.error('Erro ao obter professores:', erro);
            });

            
        obterMateriasParaFiltragem()
        .then(materias => {
                this.materias = materias;
            })
            .catch(erro => {
                console.error('Erro ao obter materias:', erro);
            });
        },
    };
    
</script>

<style scoped>

    .listagem-professores{
        margin-top: 30px;
        width: 100%;
        max-width: 2000px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        min-height: fit-content;
        gap: 50px;




    }

    .professores{
        background: linear-gradient(163deg, rgba(169,197,252,1) 0%, rgba(101,117,150,1) 70%);
        width: 100vw;
        display:flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

    .element {
    display: flex;
    justify-content: center;
    width: 20%;
    height: fit-content;
  }
  
  .form-group .element:last-child{
    margin-right: 0%;
  }
  
  .form-control {
    width: 100%;
    border-radius: 12px;
    border: none; /* Remove a sombra */
    padding: 8%;
    align-self: center; /* Centralizar verticalmente */
    justify-content: center;
    outline: none;
  }

  .form-group select {
    margin-right: 20px; /* Espaçamento entre os campos */
    border-radius: 12px;
    border: none; /* Remove a sombra */
    padding: 12px;
    color: #6D6B71;
    
  }

</style>