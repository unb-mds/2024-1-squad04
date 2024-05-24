<template>
    <div class="professores">
        <NavBar/>
        <BarraDePesquisaComponente @search="handleSearch"/>
       
        <div class="listagem-professores">
            <CardListagemMateriasComponente
            v-for="(materia, index) in filteredMaterias"
            :key="index"
            :materia="materia"/>
        </div>

        <FooterBar/>
        


    </div>
</template>

<script>
    import NavBar from '../components/Navegacao/NavBar.vue'; 
    import FooterBar from '../components/Navegacao/FooterBar.vue';
    import { obterInformacoesMaterias } from '@/service/materia/ManipularDadosMateriaListagem';



    export default{
        components: {
            NavBar,
            FooterBar,
            CardListagemMateriasComponente,
            BarraDePesquisaComponente,
        },

        name: "MateriasPage",

        data() {
            return {
                materias: [],
                searchQuery: ''
            }
        },

        computed: {
        filteredMaterias() {
            if (!this.searchQuery) {
                return this.materias;
            }
            const query = this.searchQuery.toLowerCase();
            return this.materias.filter(materia => 
                materia.nome_materia.toLowerCase().includes(query)
                )   ;
            }
        },
        methods: {
            handleSearch(query) {
                this.searchQuery = query;
            }
        },

        mounted() {
            obterInformacoesMaterias()
            .then(materias => {
                this.materias = materias;
                console.log(materias);
            })
            .catch(erro => {
                console.error('Erro ao obter materias:', erro);
            });
        },


    };
    
</script>

<style mounted>

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
        width: 100vw;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 200vh;
    }

</style>