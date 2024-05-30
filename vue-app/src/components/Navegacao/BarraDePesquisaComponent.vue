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
    margin-top: 7vh;
    margin-bottom: 5vh;
    position: relative;
    display: flex;
}

.search-input {
    padding: 8px;
    border: 1px solid #a8a8a8;
    border-radius: 14px;
    width: 650px;
    height: 28px;
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    outline: none;
}
::placeholder {
    color: #a8a8a8;
    font-family: 'Inter', sans-serif;
    font-size: 1.38rem;
    
}
</style>
