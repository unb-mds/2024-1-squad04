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



  export const getMaterias = (app, sequelize) => {
    app.get('/materias', async (req, res) => {
      try {
        const sqlQuery = `
          SELECT 
            m.nome AS nome_materia,
            m.cod_materia AS cod_materia,
            m.qtd_hrs_materia AS quantidade_horas,
            ROUND(COALESCE(AVG(COALESCE(am.nota_total, 0)), 0), 1) AS nota_media_total,
            (
            JSON_OBJECT(
              'nota_total', AVG(COALESCE(am.nota_total, 0)),
              'nota_experiencia', AVG(COALESCE(am.nota_experiencia, 0)),
              'nota_dificuldade', AVG(COALESCE(am.nota_dificuldade, 0)),
              'quantidade_avaliacoes', COUNT(am.cod_avaliacao)
            )) AS avaliacoes
          FROM 
            materia m
          LEFT JOIN 
            materia_avaliacao_usuario mau ON m.cod_materia = mau.cod_materia
          LEFT JOIN 
            avaliacao_materia am ON mau.cod_avaliacao = am.cod_avaliacao
          GROUP BY 
            m.cod_materia
          ORDER BY 
            nota_media_total DESC;
        `;
  
        const materias = await sequelize.query(sqlQuery, { type: sequelize.QueryTypes.SELECT });
  
        res.json({ success: true, data: materias });
      } catch (error) {
        console.error('Erro ao consultar materias avaliadas:', error);
        res.status(500).json({ success: false, message: 'Erro ao consultar materias avaliadas' });
      }
    });
  };
  
  