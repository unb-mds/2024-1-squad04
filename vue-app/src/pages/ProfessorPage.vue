<template>
    <div class = 'home'>
        <NavBar/>



    </div>
</template>

<script>
    import router from '../routes/index';
    import NavBar from '../components/NavbarHome.vue'; 

    export default{
        //registrando o componente
        components: {
            NavBar,
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