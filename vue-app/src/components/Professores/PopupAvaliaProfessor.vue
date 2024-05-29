<template>
    <div class = "popup">
        <div class="popup-inner">
            <header>
                <slot/>
                <img  :src="verificarUrl(professor.foto_professor)"  alt="" class="profile-picture"/>
                <div class="professor-name">{{professor.nome_professor}}</div>
            </header>
                
            <button class="popup-close" @click="()=>TogglePopup()">Close</button>
        </div>
        
    </div>
</template>

<script>
    export default{
        name: "PopUp",
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