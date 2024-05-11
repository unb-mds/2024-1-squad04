<template>
  <div class="navbar">
    <div class="div-logo">
        <h1 class="logo-text">AvaliaUnb</h1>
    </div>


    <div class="nav">
        <ul class="nav-itens">
            <li class="item">Home</li>
            <li class="item">Professores</li>
            <li class="item">Matérias</li>
            <li class="item">Minhas  Avaliações</li>
        </ul>
    </div>

    <div class="notification-picture">
        <svg class="notification" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="" stroke-width="3.5" stroke-miterlimit="10"/>
          </svg>
        <img class="profile" src="../assets/ProfilePictureExemple.svg">
    </div>

    <div class="nav-mobile">
        <ul class="itens-mobile">
            <li class="item">
                <img class="icons-mobile" src="../assets/home-casinha.svg">    
                    
            <p class="name">Home</p>
            </li>

            <li class="item">
                <img class="icons-mobile" src="../assets/professor.svg">
                <p class="name">Professores</p>
            </li>

            <li class="item">
                <img class="icons-mobile" src="../assets/materias.svg">
            <p class="name">Matérias</p>
            </li>

            <li class="item">
                <img class="icons-mobile" src="../assets/rating.svg">
            <p class="name">Avaliações</p>
            </li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
    name: "NavBar",

}
</script>

<style scoped>

.body{
    margin: 0;
}

.nav-mobile{
    display: none;
}

.navbar{
    display: flex;
    justify-content: space-around;
    width: 100vw;
    background-color: #F0F0F0;
    padding-top: 8px;
    padding-bottom: 8px;
    height: auto;
    align-items: center;
}

.logo-text{
    font-size: 3.2rem;
    font-weight: 900;
    font-family: 'Open Sans', sans-serif;
    color: transparent;
    background-clip: text;
    cursor: pointer;
    background-image: linear-gradient(150deg, #1b5994 20%, #0a745b 60%);

}


.nav{


    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 55%;

}

.nav-itens{
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    width: 100%;
    padding: 0;
}

.item{
    font-family: 'Inter', sans-serif;
    font-weight: lighter;
    color: #4D4D4D;
    font-size: 1.8rem;
    margin: 0;
    height: auto;
}

.item:hover{
    font-family: 'Inter', sans-serif;
    font-weight: lighter;
    color: #102C46;
    font-size: 1.5rem;
    margin: 0;
    height: auto;
    cursor:pointer;
}

.notification-picture{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:16px;

}

.notification{
    width: 24px;
    height: auto;
    stroke: #4D4D4D;

}

.profile{
    width:50%;
    height: auto;
}


.itens-mobile{
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    padding: 0;

}

.item{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;
    gap: 8px;

}

.item p{
    margin: 0;
}

.icons-mobile{
    width: 4.5rem;
    height: auto;
}



@media screen and (max-width: 800px) {
    .nav{
        display: none;

    }

    .nav-mobile{
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #F0F0F0;
        border-radius: 30px 30px 0px 0px;
        height: auto;
        padding-top: 5px;
        padding-bottom:5px;

    }


    }

    .navbar{
        justify-content: space-between;
    }
    .div-logo{
        margin-left:10px;
    }

    .notification-picture{
        margin-right: 10px;
    }


@media screen and (max-width: 650px) {


    .notification-picture{
        margin-right: 10px;
    }

    .profile{
        width: 40%;
    }

    .notification{
        width: 18px;
    }


}



</style>