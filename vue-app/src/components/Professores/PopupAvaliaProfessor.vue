<template>
    <div class="popup">
        <div class="popup-inner">
            <header><slot class="slot-items"/></header>
            <a class="nome-prof">Nome prof {{ professor.nome_professor }}</a>
            <a class="nome-prof">Nota prof {{ professor.contribuicoes.media_nota_total }}</a>
            <form @submit.prevent="SubmitAvaliacao">
                <div class="inputs">
                    <select v-model.number="avaliacao.materia" required>
                        <option disabled value="">Materia para avaliar</option>
                        <option v-for="option in this.professor.materias_professor" :key="option.nome_materia" :value="option.cod_materia">{{ option.nome_materia }}</option>
                    </select>
                    <input type="number" v-model="avaliacao.notaAcesso" placeholder="Nota de acesso" min="0" max="5" required>
                    <input type="number" v-model="avaliacao.notaDidatica" placeholder="Nota de didática" min="0" max="5" required>
                    <input type="number" v-model="avaliacao.notaMetodologia" placeholder="Nota de metodologia" min="0" max="5" required>
                    <input type="number" v-model="avaliacao.notaCarisma" placeholder="Nota de carisma" min="0" max="5" required>
                    <input type="text" v-model="avaliacao.comentario" placeholder="Comentario" maxlength="250">
                </div>
                <button type="button" class="popup-close" @click="TogglePopup">Voltar</button>
                <button type="submit" class="popup-submit">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { enviarAvaliacaoProfessor } from '@/generals/enviarAvaliacaoProfessor.js';
    import { getUsuarioLogado } from '@/generals/getUsuarioLogado.js';
    //matricula-int, cod_prof-char, materia-char, resto-int
    export default{
        name: "PopUp",
        props: {
            TogglePopup: Function,
            professor: Object,
        },
        data() {
            return {
                avaliacao: {
                    notaAcesso: '',
                    notaDidatica: '',
                    notaMetodologia: '',
                    notaCarisma: '',
                    comentario: '',
                    materia: '',
                }
            };
        },
        methods: {
            async SubmitAvaliacao() {
                try {
                    // carisma no banco vai ser metodo de ensino pq vai dar mt trabalho pra mudar o nome
                    const matriculaLogadaStr = await getUsuarioLogado();
                    const matriculaLogada = parseInt(matriculaLogadaStr, 10);
                    //verificar se matricula existe no db
                    await enviarAvaliacaoProfessor(
                        matriculaLogada,
                        this.professor.cod_professor,
                        this.avaliacao.materia,
                        this.avaliacao.notaAcesso*2,
                        this.avaliacao.notaDidatica*2,
                        this.avaliacao.notaMetodologia*2,
                        this.avaliacao.notaCarisma*2,
                        this.avaliacao.comentario
                );
                } catch (error) {
                    this.erro = error;
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