<template>
    <div class="container">
        <div class="card-professor">
            <div class="front">
                <div class="card-front">
                    <div class="profile-picture-name">
                    <div class="profile-picture-div">                    
                        <img src="../../assets/provisorio/foto-perfil-navbar-provisoria.svg" alt="" class="profile-picture">
                    </div>
                    <div class="professor-name">
                        Oliver Smith
                    </div>
                    <div class="name-details">
                        Professor
                    </div>
                </div>
                <div class="rating-and-number">
                    <div class="rating"><p class="nota">4.7</p><p class="de-cinco">/ 5</p></div>
                    <div class="total-reviews">Total reviews (30)</div>
                </div>
                <div class="five-estrelas">
                    <img src="../../assets/icons/avaliacao/icone-estrela-azul.svg" alt="" class="estrela">
                    <img src="../../assets/icons/avaliacao/icone-estrela-azul.svg" alt="" class="estrela">
                    <img src="../../assets/icons/avaliacao/icone-estrela-azul.svg" alt="" class="estrela">
                    <img src="../../assets/icons/avaliacao/icone-estrela-azul.svg" alt="" class="estrela">
                    <img src="../../assets/icons/avaliacao/icone-estrela-azul.svg" alt="" class="estrela">
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
                        5
                    </div>
                    <div class="barra-porcentagem">
                        <div class="barra-preenchida">

                        </div>
                    </div>

                    <div class="porcentagem">
                        73%
                    </div>
                </div>
                <div class="details">
                    <div class="number-stars">
                        4
                    </div>
                    <div class="barra-porcentagem">
                        <div class="barra-preenchida">
                            
                        </div>
                    </div>

                    <div class="porcentagem">
                        16%
                    </div>
                </div>
                <div class="details">
                    <div class="number-stars">
                        3
                    </div>
                    <div class="barra-porcentagem">
                        <div class="barra-preenchida">
                            
                        </div>
                    </div>

                    <div class="porcentagem">
                        9%
                    </div>
                </div>
                <div class="details">
                    <div class="number-stars">
                        2
                    </div>
                    <div class="barra-porcentagem">
                        <div class="barra-preenchida">
                            
                        </div>
                    </div>

                    <div class="porcentagem">
                        2%
                    </div>
                </div>
                <div class="details">
                    <div class="number-stars">
                        1
                    </div>
                    <div class="barra-porcentagem">
                        <div class="barra-preenchida">
                            
                        </div>
                    </div>

                    <div class="porcentagem">
                        0%
                    </div>
                </div>
            </div></div>

                
        </div>
    </div>      
</template>

<script>
export default {
    name: "CardListagemProfessoresComponent",
    props: {
        materia: Object,
        position: Number,
    },
}
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 400px;;
    height: 100%;
    max-height: 400px;
    display: flex;
    justify-content: center
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
    width: 80%;
    max-width: 450px;
    height: auto;
    border-radius: 14px;

    background-color: rgb(243, 243, 243);
    position: relative;
    transition: transform 1.5s;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
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

.profile-picture-div {
    padding: 2.4px;
    width: 28%;
    border-radius: 50%;
    background: rgb(8,54,80);
    background: linear-gradient(150deg, #1b5994 40%, #0a745b 60%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile-picture {
    width: 100%;
    height: auto;
}

.professor-name {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 0.5px;
    color: rgb(32, 32, 32);
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
    width: 70%;
    justify-content: flex-start;
    margin-bottom: 10px;
    align-items: center;
    gap: 10px;
    margin-left: 40px;
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
    width: 100%;
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


.card-professor{
    padding-top: 0;
    padding-bottom: 0;
    width: 70%;
    height: 90%;
}

.front{

}

.back{

}


}

</style>