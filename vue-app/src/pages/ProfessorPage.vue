<template>
    <div class="professores">
        <NavBar/>
       
        <div class="listagem-professores">
            <CardListagemProfessoresComponent
            v-for="(professor, index) in professores.slice(0,10)"
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



    export default{
        //registrando o componente
        components: {
            NavBar,
            FooterBar,
            CardListagemProfessoresComponent,
        },

        name: "ProfessorPage",
        
        data() {
            return {
                professores: [],
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


        methods: {
            async HandleHome(){
                router.push({name: 'home'});
            }
    
        }
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