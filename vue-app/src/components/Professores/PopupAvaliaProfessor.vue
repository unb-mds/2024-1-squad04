<template>
    <div class = "popup">
        <div class="popup-inner">
            <header class = "popup-header">
                <slot/>
                <div class="foto-professor-div">
                    <img  :src="verificarUrl(professor.foto_professor)"  alt="" class="foto-professor"/>
                </div>
                <div class="professor-nome">{{professor.nome_professor}}</div>
            </header>

            <div class="rating-stars-div"><ratingStars/></div>
            
            
            
            <div class="btn-container">
                <button class="popup-close" @click="()=>TogglePopup()">voltar</button>
            </div> 
        </div>
        
    </div>
</template>

<script>

    import ratingStars from "./RatingStarsProfessor.vue"
    export default{
        name: "PopUp",

        components: {
            ratingStars
        },

        props: {
            TogglePopup: {
                type: Boolean,
                required: true,
                default: false
            },
            professor: {
                type: Object,
                required: true,
                default: () => ({})
            }
        },

        methods: {
            verificarUrl(urlProfessor){
                if(urlProfessor==='https://sigaa.unb.br/sigaa/img/no_picture.png'){
                    return 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png';
                }

                return urlProfessor;
            }
        }
    }

</script>

<style scoped>

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
.popup-header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin: 2.5rem;
}

.foto-professor-div {
    padding: 2.4px;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background: rgb(8,54,80);
    background: linear-gradient(150deg, #1b5994 40%, #0a745b 60%);
    position: inherit;
}
.foto-professor {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.professor-nome{

    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: 0.5rem;
    color: rgb(32, 32, 32);
    margin-right: 2rem;
    margin-top: 1.2rem;
    width: 70%;
    white-space: normal;
}

.popup-close{
    width: fit-content;
    height: fit-content;
    font-size: 3.5rem;
    color: #cacaca;
    background: linear-gradient(150deg, #0a457cd3 40%, #045c47b9 60%);
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    margin: 3rem;

}

.rating-stars-div {
    display: flex;
    margin-left: 5rem;
}

.popup-inner{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-display: inter;
    background: #fff;
    height: 60rem;
    width: 60rem;
    border-radius: 3rem;
}

.btn-container {
    display: flex;
    justify-content: center;
    width: 100%;
}


</style>