<template>
    <div class="container">
        <div class="card-professor">
            <div class="front">
                <div class="card-front">
                    <div class="profile-picture-name">
                    <div class="professor-name">
                       {{ materia.nome_materia }}
                    </div>
                    <div class="name-details">
                        {{materia.cod_materia}}
                    </div>
                </div>
                <div class="rating-and-number">
                    <div class="rating"><p class="nota">{{materia.contribuicoes.nota_total}}</p><p class="de-cinco">/ 5</p></div>
                    <div class="total-reviews">Total reviews ({{materia.qtd_avaliacoes}})</div>
                </div>
                <div class="five-estrelas">
                    <img v-for="(index) in 5" :key="index" ref="estrelas" src="../../assets/icons/avaliacao/icone-estrela-azul.svg" alt="" class="estrela">
                </div>
            </div>
                
            </div>
            <div class="back">
                <div class="review-breakdown">
                    Review breakdown
                </div>

                <div class="details-list">
                    <div class="details">
                    <div class="number-stars">
                        Experiência
                                        </div>
                    <div class="barra-texto">
                        <div class="barra-porcentagem">
                        <div class="barra-preenchida" :style="{ width: materia.contribuicoes.contribuicao_experiencia + '%' }">

                        </div>
                    </div>

                    <div class="porcentagem">
                        {{materia.contribuicoes.contribuicao_experiencia}}%
                    </div>
                </div>
                    
                </div>

                <div class="details">
                    <div class="number-stars">
                        Dificuldade
                    </div>
                    <div class="barra-texto">
                        <div class="barra-porcentagem">
                        <div class="barra-preenchida" :style="{ width: materia.contribuicoes.contribuicao_dificuldade + '%' }">

                        </div>
                    </div>

                    <div class="porcentagem">
                        {{materia.contribuicoes.contribuicao_dificuldade}}%
                    </div>
                </div>
                    
                </div>

                
                    
                </div>
                
            </div>

                
        </div>
    </div>      
</template>

<script>
export default {
    name: "CardListagemMateriasComponent",
    props: {
        materia: Object,
    },
    mounted(){
        this.handleEstrelas();
    },
    methods: {
        handleEstrelas() {
            if (this.materia.avaliacoes.nota_total / 2 < 1) {
                const estrelas = this.$refs.estrelas;
                if (estrelas) {
                    estrelas.forEach((estrela) => {
                    estrela.style.filter = "invert(50%) opacity(30%)";
                    });
                }
            }
            else if (this.materia.avaliacoes.nota_total / 2 == 1) {
                const estrelas = this.$refs.estrelas;
                for(let i = 1; i < estrelas.length; i++){
                    estrelas[i].style.filter = "invert(50%) opacity(30%)";
                }
            }
            else if (this.materia.avaliacoes.nota_total / 2 == 2) {
                const estrelas = this.$refs.estrelas;
                for(let i = 2; i < estrelas.length; i++){
                    estrelas[i].style.filter = "invert(50%) opacity(30%)";
                }
            }
            else if (this.materia.avaliacoes.nota_total / 2 == 3) {
                const estrelas = this.$refs.estrelas;
                for(let i = 3; i < estrelas.length; i++){
                    estrelas[i].style.filter = "invert(50%) opacity(30%)";
                }
            }
            else if (this.materia.avaliacoes.nota_total / 2 == 4) {
                const estrelas = this.$refs.estrelas;
                estrelas[4].style.filter = "invert(50%) opacity(30%)";
            }
            else if (this.materia.avaliacoes.nota_total / 2 == 5) {
                return    
            }
            else if (this.materia.avaliacoes.nota_total / 2 < 2) {
                const estrelas = this.$refs.estrelas;
                for(let i = 2; i < estrelas.length; i++){
                    estrelas[i].style.filter = "invert(50%) opacity(30%)";
                }
                estrelas[1].style.webkitMaskImage = "linear-gradient(to left, transparent 40%, black 60%)";
                estrelas[1].style.opacity = "1";
            }
            else if (this.materia.avaliacoes.nota_total / 2 < 3) {
                const estrelas = this.$refs.estrelas;
                for(let i = 3; i < estrelas.length; i++){
                    estrelas[i].style.filter = "invert(50%) opacity(30%)";
                }
                estrelas[2].style.webkitMaskImage = "linear-gradient(to left, transparent 40%, black 60%)";
                estrelas[2].style.opacity = "1";
            }
            else if (this.materia.avaliacoes.nota_total / 2 < 4) {
                const estrelas = this.$refs.estrelas;
                for(let i = 4; i < estrelas.length; i++){
                    estrelas[i].style.filter = "invert(50%) opacity(30%)";
                }
                estrelas[3].style.webkitMaskImage = "linear-gradient(to left, transparent 40%, black 60%)";
                estrelas[3].style.opacity = "1";
            }
            else if (this.materia.avaliacoes.nota_total / 2 < 5) {
                const estrelas = this.$refs.estrelas;
                estrelas[4].style.webkitMaskImage = "linear-gradient(to left, transparent 40%, black 60%)";
                estrelas[4].style.opacity = "1";
            }
        }
    }
}

</script>

<style scoped>
.container {
    width: 100%;
    max-width: 350px;
    height: 400px;

    display: flex;
}

.front, .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    left: 0;
    /* Adiciona padding para que o conteúdo não saia da borda */
}



.back {
    transform: rotateY(180deg);
    align-items: flex-start;
    justify-content: center;
    gap: 50px;


}

.card-front{
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    gap: 30px;
}

.review-breakdown{
    width: 100%;
    display: block;
    justify-content: flex-start;

}


.card-professor {
    width: 100%;
    max-width: 450px;
    border-radius: 14px;
    background-color: rgb(223, 223, 223);
    position: relative;
    transition: transform 1.5s;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
}

.container:hover > .card-professor {
    cursor: pointer;
    transform: rotateY(180deg);
}

.profile-picture-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: auto;
}


.professor-name {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.5px;
    color: rgb(32, 32, 32);
    margin-right: 10px;
}

.name-details {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: rgb(139, 139, 139);
}

.five-estrelas {
    display: flex;
    width: 60%;
    justify-content: flex-start;
    gap: 2rem;
}

.estrela {
    width: 12%;
}

.rating-and-number {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.rating {
    display: flex;
    align-items: flex-end;
}

.nota {
    font-family: 'Open Sans', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    color: rgb(31, 31, 31);
    margin: 0;
}

.de-cinco {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: rgb(36, 36, 36);
    margin: 0;
}

.total-reviews {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 0.3px;
    font-weight: 400;
    color: rgb(83, 83, 83);
}

.review-breakdown{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
    letter-spacing: 0.3px;
    font-weight: 500;
    color: rgb(83, 83, 83);
    width: 100%;
    margin-left: 40px;
}

.details{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 10px;
    align-items: flex-start;
    gap: 10px;
    margin-left: 40px;
}

.barra-texto{
    display: flex;
    width: 100%;
    gap: 10px;
}

.number-stars,
.porcentagem{
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    color: rgb(36, 36, 36);
    margin: 0;

}

.details-list{
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 16px;

}

.barra-porcentagem{
    width: 100%;
    height: 12px;
    background-color: #ffffff;
    border-radius: 10px;
    max-width: 200px;
 
    display: flex;
    justify-content: flex-start;
}

.barra-preenchida{
    background-color: #0a745b;
    width: 50%;
    height: 12px;
    display: flex;
    border-radius: 10px

}
@media screen and (max-width: 1000px) {

.container{
    height: 400px;
}
.card-professor{
    padding-top: 0;
    padding-bottom: 0;
    width: 70%;
    height: 90%;
}

}

</style>