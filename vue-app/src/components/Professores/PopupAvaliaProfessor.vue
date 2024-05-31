<template>
    <div class = "popup">
        <div class="popup-inner">
            <header><slot class = "slot-items"/></header>
            <a class="nome-prof">Nome {{ this.professor.nome_professor }}</a>
            <a class="nome-prof">Nota {{ this.professor.contribuicoes.media_nota_total }}</a>
            <button class="popup-close" @click="()=>TogglePopup()">Voltar</button>
            <button class="popup-close" @click="()=>SubmitAvaliacao()">Enviar</button>
        </div>
        
    </div>
</template>

<script>

    import { enviarAvaliacaoProfessor } from '@/generals/enviarAvaliacaoProfessor.js';

    export default{
        name: "PopUp",
        props: {
            TogglePopup: Function,
            professor: Object,
        },
        methods: {
            async SubmitAvaliacao() {
                try {
                    await enviarAvaliacaoProfessor(this.professor);
                } catch (error) {
                    console.error("Erro ao enviar avaliação do professor:", error);
                }
            }
        }
    }
    
</script>

<style scoped>

.nome-prof{
    font-size: 2rem;
    color: red;
}

.popup{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.7);
    overflow-y: hidden;

}

.slot-items{
    display: flex;

}

.popup-close{
    width: fit-content;
    height: fit-content;
    font-size: 3rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
}

.popup-inner{
    font-display: inter;
    background: #fff;
    padding: 30rem;
    display: flex;
    width: 30rem;
}


</style>