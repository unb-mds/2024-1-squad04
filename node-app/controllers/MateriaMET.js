import  Sequelize  from "sequelize";

export const getMateriasAvaliadss = ((app, sequelize)=>{

    app.get('/materias_avaliadas', (req, res) => {
  
        const sqlQuery = `
        SELECT 
            m.nome AS nome_materia,
            m.cod_materia AS cod_materia,
            ROUND(AVG(am.nota_total), 1) AS nota_media_total
        FROM 
            materia m
        INNER JOIN 
            materia_avaliacao_usuario mau ON m.cod_materia = mau.cod_materia
        INNER JOIN 
            avaliacao_materia am ON mau.cod_avaliacao = am.cod_avaliacao
        GROUP BY 
            m.nome, m.cod_materia
        ORDER BY 
            nota_media_total DESC;
    `;
  
        sequelize.query(sqlQuery, { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            console.log("Consulta realizada com sucesso");
            res.json({ success: true, data: result });
        })
        .catch((error) => {
            console.error('Erro ao consultar materias avaliadas:', error);
            res.status(500).json({ success: false, message: 'Erro ao consultar materias avaliadas' });
        });
    });
  });