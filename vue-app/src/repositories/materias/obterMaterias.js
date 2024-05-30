
    
    // essa função obtém as matérias com sua nota total - ranking geral de matérias
    export async function getMateriasAvaliadasNotaTotal() {  
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/materias_avaliadas')
                .then(resposta => resposta.json())
                .then(dados => resolve(dados.data))
                .catch(erro => reject(erro));
        });
    }


    export async function getMateriasListagem() {  
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/materias')
                .then(resposta => resposta.json())
                .then(dados => resolve(dados.data))
                .catch(erro => reject(erro));
        });
    }