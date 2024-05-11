<template>

    <div class="card-top-rest">
        <div class="profile-picture-name">
            <h3 class="number"> 4 </h3>
            <div class="picture-name">
                <img class="professor-picture" src="../assets/ProfilePictureExemple.svg">
                <h3 class="name"> Professor 4</h3>
            </div>
        </div>

        <div class="rating">
            <img class="star" src="../assets/star.svg">
            <p class="rate">4.5</p>
        </div>

    </div>      
        
    </template>
    
    <script>
    export default {
        name: "CardProfessorTopRest",
    
    }
    </script>
    
    <style scoped>

    .card-top-rest{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;

    }

    .profile-picture-name{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 0 20px 0px;
        gap: 20px;
        padding-left: 40px;
        width: 90%;
    }

    .picture-name{
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;

    }

    .professor-picture{
        width: 6rem;
        height: auto;
    }

    .name{
        font-family: 'Open Sans', sans-serif;
        color: #F0F0F0;
        font-size: 1.8rem;
        display: flex;
        flex-wrap: wrap;
        text-align: left;
        width: 100%;
    }

    .number{
        font-family: 'Open Sans', sans-serif;
        color: #F0F0F0;
        font-size: 2rem;
        display: flex;
        flex-wrap: wrap;
        text-align: left;  
    }

    .rating{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;
        padding-right: 40px;
        gap: 3%;
    }

    .star{
        width: 15%;
        height: auto;
    }

    .rate{
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        color:#c4c4c4 ;
        margin: 0;
    }

    </style>