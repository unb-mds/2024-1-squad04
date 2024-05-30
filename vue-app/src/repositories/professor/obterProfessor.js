


    
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


    
    export async function getProfessoresByID(cod_professor){  //função no service que irá retornar os dados do professor de acordo com o valor de codigo passado
        return new Promise((resolve, reject) =>{
            fetch(`http://localhost:3000/professores/${cod_professor}`)
            .then(resposta=>resposta.json())
            .then(dados=>resolve(dados.data))
            .catch(erro => reject(erro));
        })
    }


