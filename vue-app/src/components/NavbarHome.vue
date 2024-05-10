<template>
  <div class="navbar">
    <div class="div-logo">
        <h1 class="logo-text">AvaliaUnb</h1>
    </div>
    
    <div class="menu-hamburguer" @click="toggleMenu">
        <div class="line1">
    
        </div>
        <div class="line2">

        </div>
        <div class="line3">

        </div>
    </div>

    <div class="overlay" :class="{ 'overlay-active': menuAberto }" @click="toggleMenu">
        <div class="notification-picture">
        <img class="profile" src="../assets/ProfilePictureExemple.svg">
        </div>
        <div class="nav2">
        <ul class="nav-itens">
            <li class="item">Home</li>
            <li class="item">Professores</li>
            <li class="item">Matérias</li>
            <li class="item">Minhas  Avaliações</li>
        </ul>
    </div>

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
        <img class="notification" src="../assets/Notification.svg">
        <img class="profile" src="../assets/ProfilePictureExemple.svg">
    </div>



  </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            menuAberto: false 
        };
    },
    methods: {
        toggleMenu() {
            this.menuAberto = !this.menuAberto;
        }
    }

}
</script>

<style scoped>

.body{
    margin: 0;
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
    width: 18%;
    height: auto;
}

.profile{
    width:40%;
    height: auto;
}


.overlay{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #102C46;
    transform: translateX(100%); /* Inicia o overlay fora da tela */
    transition: transform 0.6s ease;
}

.overlay-active{
    transform: translateX(0);
}

.overlay .profile{
    width: 25%;
    height: auto;
}

.overlay .notification-picture{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-end;
    height: 30%;

}


.nav2{
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: center;
    align-items: center;
}

.nav2 ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 30px;
}


.nav2 .nav-itens .item{
    font-size: 3rem;
    color: #D2D2D2;
}


@media screen and (max-width: 800px) {
    .nav{
        display: none;
    }

    .notification-picture{
        display: none;
    }

    .line1, .line2, .line3{
        width:50%;
        min-width: 30px;
        height: 5px;
        background-color: #0a745b;
    }

    .menu-hamburguer{
        display: flex;
        flex-direction: column;
        width: 10%;
        height: auto;
        justify-content: space-between;
        gap: 4px;
        margin-right: 10px;

    }

    .navbar{
        justify-content: space-between;
    }
    .div-logo{
        margin-left:10px;
    }
}

@media screen and (max-width: 650px) {

    .line1, .line2, .line3{
        width:50%;
        min-width: 25px;
        height: 3px;
        background-color: #0a745b;
    }

    .menu-hamburguer{

        gap: 3.5px;
    }


}



</style>