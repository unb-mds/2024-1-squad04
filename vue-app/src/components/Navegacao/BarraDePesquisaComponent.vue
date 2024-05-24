<template>
    <div class="container">
        <input 
            type="text" 
            v-model="searchQuery" 
            @input="performSearch" 
            placeholder="Digite sua pesquisa" 
            class="search-input" 
        />
    </div>      
</template>

<script>
export default {
    name: "BarraDePesquisaComponent",
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        performSearch() {
            this.$emit('search', this.searchQuery);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
}

.search-input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
