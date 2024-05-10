<template>
    <div>
        <NavBar/>
    </div>
</template>

<script>

import NavBar from '../components/NavbarHome.vue'


export default {
    

    components: {
        NavBar // Registre o componente
    },


    name: "HomeComponent",
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        document.body.style.backgroundColor = 'gray';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'flex-start';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.flexDirection = 'column';
        document.body.style.overflow = 'hidden';
        },
    beforeUnmount() {
        document.body.style.backgroundColor = null;
    }
}
</script>
<style scoped>
    .body{
        margin: 0;
    }

</style>