<template>
    <div class="professores">
        <NavBar/>
       
        <div class="listagem-professores">
            <CardListagemMateriasComponent
            v-for="(materia, index) in materias.slice(0,10)"
            :key="index"
            :materia="materia"/>
        </div>

        <FooterBar/>
        


    </div>
</template>

<script>
    import NavBar from '../components/Navegacao/NavBar.vue'; 
    import FooterBar from '../components/Navegacao/FooterBar.vue';
    import CardListagemMateriasComponent from '@/components/Materias/CardListagemMateriasComponent'
    import { obterMaterias } from '@/service/materia/ManipularDadosMateriaListagem';



    export default{
        //registrando o componente
        components: {
            NavBar,
            FooterBar,
            CardListagemMateriasComponent,
        },

        name: "MateriasPage",

        data() {
            return {
                materias: [],
            }
        },

        mounted() {
            obterMaterias()
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