<template>
    <div class="materias">
        <NavBar/>
        <BarraDePesquisaComponente @search="handleSearch"/>
       
        <div class="listagem-materias">
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
    import CardListagemMateriasComponente from '../components/Materias/CardListagemMateriasComponent.vue'
    import BarraDePesquisaComponente from '../components/Navegacao/BarraDePesquisaComponent.vue'

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
                const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                
                return this.materias.filter(materia => {
                    const normalizedMateria = materia.nome_materia.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    return normalizedMateria.includes(normalizedQuery);
                });
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
            })
            .catch(erro => {
                console.error('Erro ao obter materias:', erro);
            });
        },


    };
    
</script>

<style scoped>

    .listagem-materias{
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

    .materias{
        background: hsla(209, 63%, 17%, 1);
        background: linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
        width: 100vw;
        display:flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }

</style>