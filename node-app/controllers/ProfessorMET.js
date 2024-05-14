import  Sequelize  from "sequelize";

export const getProfessoresAvaliados = ((app, sequelize)=>{

    app.get('/professores_avaliados', (req, res) => {
  
        const sqlQuery = `
            SELECT 
                p.nome AS nome_professor,
                p.foto_url AS foto_professor,
                AVG(ap.nota_total) AS nota_media
            FROM 
                professor p
            INNER JOIN 
                professor_avaliacao_usuario pau ON p.cod_professor = pau.cod_professor
            INNER JOIN 
                avaliacao_professor ap ON pau.cod_avaliacao = ap.cod_avaliacao
            GROUP BY 
                p.nome, p.foto_url
            ORDER BY 
                nota_media DESC;
        `;
  
        sequelize.query(sqlQuery, { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("Consulta realizada com sucesso");
            res.json({ success: true, data: result });
        })
        .catch((error) => {
            console.error('Erro ao consultar professores avaliados:', error);
            res.status(500).json({ success: false, message: 'Erro ao consultar professores avaliados' });
        });
    });
  });
  