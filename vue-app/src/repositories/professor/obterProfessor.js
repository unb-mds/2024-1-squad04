


    
    export async function getProfessoresAvaliadosNotaTotal() {  
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/professores_avaliados')
                .then(resposta => resposta.json())
                .then(dados => resolve(dados.data))
                .catch(erro => reject(erro));
        });
    }


    //mudança na função para lidar com a mudança feita na requisição do backend

    export async function getProfessores(materia) {
        return new Promise((resolve, reject) => {
          const url = materia ? `http://localhost:3000/professores?materia=${encodeURIComponent(materia)}` : 'http://localhost:3000/professores';
      
          fetch(url)
            .then(resposta => resposta.json())
            .then(dados => resolve(dados.data))
            .catch(erro => reject(erro));
        });
      }

