<template>
    <div class="professores">
        <!-- <NavBar/> -->
        <InfoProfessor/>
        <!-- <FooterBar/> -->
        


    </div>
</template>

<script>
    import router from '../routes/index';
    // import NavBar from '../components/Navegacao/NavBar.vue'; 
    // import FooterBar from '../components/Navegacao/FooterBar.vue';
    import InfoProfessor from '../components/Professores/InfoProfessorComponent.vue';



    export default{
        components: {
            // NavBar,
            // FooterBar,
            InfoProfessor,
            // CardListagemProfessoresComponent,
            // BarraDePesquisaComponente,
        },

        name: "ProfessorIndividualPage",
        data() {
            return {
                professores: [],
                searchQuery: ''
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

    

    .footer-div {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #F0F0F0;
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    }    

</style>