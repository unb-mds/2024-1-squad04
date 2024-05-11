<template>
    <div class = 'home'>
        <NavBar/>
        <FooterBar/>


    </div>
</template>

<script>
    import router from '../routes/index';
    import NavBar from '../components/NavbarHome.vue'; 
    import FooterBar from '../components/Footer.vue';

    export default{
        //registrando o componente
        components: {
            NavBar,
            FooterBar,
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

<style>

</style>