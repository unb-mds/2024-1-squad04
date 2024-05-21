


    
    export async function getProfessoresAvaliadosNotaTotal() {  
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/professores_avaliados')
                .then(resposta => resposta.json())
                .then(dados => resolve(dados.data))
                .catch(erro => reject(erro));
        });
    }


    export async function getProfessores(){
        return new Promise((resolve, reject) =>{
            fetch('http://localhost:3000/professores')
            .then(resposta=>resposta.json())
            .then(dados=>resolve(dados.data))
            .catch(erro => reject(erro));
        })
    }

