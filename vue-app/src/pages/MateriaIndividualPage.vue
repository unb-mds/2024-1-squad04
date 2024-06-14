<template>
    <div class="materias">
        <infoMateria />
    </div>
</template>












<script>
import router from "../routes/index";
import infoMateria from "../components/Materias/InfoMateriaComponent.vue";

export default {
    components: {
        infoMateria,
    },

    name: "MateriaIndividualPage",
    data() {
        return {
            materias: [],
            searchQuery: "",
        };
    },

    methods: {
        async HandleHome() {
            router.push({ name: "home" });
        },
        handleSearch(query) {
            this.searchQuery = query;
        },
    },
};
</script>

<style scoped>
    .materias{
        height: 100vh;
    }

</style>