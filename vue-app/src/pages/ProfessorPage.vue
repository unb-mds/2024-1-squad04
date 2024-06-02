<template>
    <div class="professores">
        <NavBar/>
        <!-- <BarraDePesquisaComponente @search="handleSearch"/> -->
       
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
    import { obterInformacoesProfessoresNaoFiltrados } from '@/service/professor/ManipulaDadosProfessorCardListagem';
    //import BarraDePesquisaComponente from '../components/Navegacao/BarraDePesquisaComponent.vue'


    export default{
        components: {
            NavBar,
            FooterBar,
            CardListagemProfessoresComponent,
            //BarraDePesquisaComponente,
        },

        name: "ProfessorPage",
        data() {
            return {
                professores: [],
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
            }
        },
        mounted() {
            obterInformacoesProfessoresNaoFiltrados()
            .then(professores => {
                this.professores = professores;
                console.log(professores);
            })
            .catch(erro => {
                console.error('Erro ao obter professores:', erro);
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

</style>