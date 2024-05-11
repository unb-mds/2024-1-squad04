<template>
    <div class="card-total">
        <div class="top3">
            <div class="second-third">
                <div class="picture-position">
                    <div class="position"> 2 </div>
                    <img class="professor-picture" src="../assets/ProfilePictureExemple.svg">
                </div>
                <div class="name-rating">
                    <h3 class="name"> Professor 2</h3>
                    <div class="rating">
                        <img class="star" src="../assets/star.svg">
                        <p class="rate">4.5</p>
                    </div>
                </div>
            </div>
            <div class="first" >
                <div class="picture-position">
                    <div class="position"> 1 </div>
                    <img class="professor-picture" src="../assets/ProfilePictureExemple.svg">
                </div>
                <div class="name-rating">
                    <h3 class="name"> Daniel Sundfeld bla blabla</h3>
                    <div class="rating">
                        <img class="star" src="../assets/star.svg">
                        <p class="rate">4.5</p>
                    </div>
                </div>

            </div>

            <div class="second-third" >
                <div class="picture-position">
                    <div class="position"> 3 </div>
                    <img class="professor-picture" src="../assets/ProfilePictureExemple.svg">
                </div>
                <div class="name-rating">
                    <h3 class="name"> Professor 3</h3>
                    <div class="rating">
                        <img class="star" src="../assets/star.svg">
                        <p class="rate">4.5</p>
                    </div>
                </div>

            </div>

        </div>
        
    </div>
      
        
    </template>
    
    <script>

    export default {
        name: "CardProfessor",

    
    }
    </script>
    
    <style scoped>

    .card-total{
        width: 100%;
        height: auto;

    }

    .top3{
        display:flex;
        justify-content: space-around;
        padding: 30px;
        align-items: flex-end;
    
    }

    .first{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        order: 0;
        width: 40%;

    }

    .second-third{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        order: 0;
        width: 30%;
    }

    .star{
        width: 15px;
        height: auto;
    }

    .picture-position{
        display: flex;
        flex-direction: column-reverse;
        height: auto;
        align-items: center;
        justify-content: center;
        gap:0;
        
    }

    .name{
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        color:#F0F0F0 ;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }

    .first .position{
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5rem;
        color:#505050 ;
        font-weight: 800;
        background-color: rgb(240, 240, 240);
        border-radius: 100%;
        width: 1rem;
        height: 1rem;
        text-align: center;
        padding: 1rem;
        line-height: 1rem;
        margin-top: -6%;

    }


    .second-third .position{
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        color:#505050 ;
        font-weight: 800;
        background-color: rgb(240, 240, 240);
        border-radius: 100%;
        width: 0.8rem;
        height: 0.8rem;
        text-align: center;
        padding: 0.8rem;
        line-height: 0.8rem;
        margin-top: -6%;

    }
    
    .rating{
        display: flex;
        gap:5px;
    }

    .rate{
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        color:#c4c4c4 ;
        margin: 0;
    }

    .name-rating{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap:5px;
        align-items: center;
    }

    .first .professor-picture{
        width: 10rem;
        height: auto;
    }

    .second-third .professor-picture{
        width: 8rem;
        height: auto;
    }
    
    </style>