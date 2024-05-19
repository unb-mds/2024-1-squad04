


    // essa função obtém os professores com sua nota total - ranking geral de professores
    export async function getProfessoresAvaliadosNotaTotal() {  
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/professores_avaliados')
                .then(resposta => resposta.json())
                .then(dados => resolve(dados.data))
                .catch(erro => reject(erro));
        });
    }

