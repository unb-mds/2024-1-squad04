<template>
    <div class="professores">
        <NavBar/>
       
        <div class="listagem-professores">
            <CardListagemProfessoresComponent/>
            <CardListagemProfessoresComponent/>
            <CardListagemProfessoresComponent/>
            <CardListagemProfessoresComponent/>
        </div>

        <FooterBar/>
        


    </div>
</template>

<script>
    import router from '../routes/index';
    import NavBar from '../components/Navegacao/NavBar.vue'; 
    import FooterBar from '../components/Navegacao/FooterBar.vue';
    import CardListagemProfessoresComponent from '@/components/Professores/CardListagemProfessoresComponent.vue';

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
            }
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
        width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;



    }

    .professores{
        width: 100vw;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
    }

</style>