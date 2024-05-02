<template>
    <div>
        <h2 class="h2-home">pagina de home</h2>
    </div>
</template>

<script>
export default {
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
        document.body.style.justifyContent = 'center';
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

</style>