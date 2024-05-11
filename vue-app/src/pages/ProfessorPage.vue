<template>
    <h1>Hello World!</h1>
</template>

<script>
    import router from '../routes/index'; 
    export default{
        name: "ProfessorPage",
        data() {
            return {
            }
        },
        methods: {
            async HandleCadastro() {
                router.push({name:'cadastro'});
            },  
            async HandleLogin(){
                router.push({name:'login'});
            }
        }
    };
    
</script>

<style>

</style>