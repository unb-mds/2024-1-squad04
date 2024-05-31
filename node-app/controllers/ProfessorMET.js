import  Sequelize  from "sequelize";

export const getProfessoresAvaliados = ((app, sequelize)=>{

    app.get('/professores_avaliados', (req, res) => {
  
        const sqlQuery = `
            SELECT 
                p.nome AS nome_professor,
                p.foto_url AS foto_professor,
                ROUND(AVG(ap.nota_total), 1) AS nota_media
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
  

//professores para a página de pesquisa de professores

  export const getProfessores = (app, sequelize) => {
    app.get('/professores', async (req, res) => {
      try {
        const sqlQuery = `
          SELECT 
            p.nome AS nome_professor,
            p.cod_professor AS cod_professor,
            p.foto_url AS foto_professor,
            (
              SELECT JSON_ARRAYAGG(JSON_OBJECT(
                  'cod_materia', m.cod_materia,
                  'nome_materia', m.nome
                ))
              FROM professor_materia pm
              INNER JOIN materia m ON pm.cod_materia = m.cod_materia
              WHERE pm.cod_professor = p.cod_professor
            ) AS materias,
            (
              SELECT JSON_ARRAYAGG(JSON_OBJECT(
                'cod_materia', pau.cod_materia,
                'nota_total', COALESCE(ap.nota_total, 0),
                'nota_didatica', COALESCE(ap.nota_didatica, 0),
                'nota_metodo_ensino', COALESCE(ap.nota_metodo_ensino, 0),
                'nota_metodologia', COALESCE(ap.nota_metodologia, 0), 
                'nota_acesso', COALESCE(ap.nota_acesso, 0)
              ))
              FROM professor_avaliacao_usuario pau
              LEFT JOIN avaliacao_professor ap ON pau.cod_avaliacao = ap.cod_avaliacao
              WHERE pau.cod_professor = p.cod_professor
            ) AS avaliacoes,
            (
              SELECT JSON_OBJECT(
              'media_nota_total', AVG(COALESCE(ap.nota_total, 0)),
              'media_nota_didatica', AVG(COALESCE(ap.nota_didatica, 0)),
              'media_nota_metodo_ensino', AVG(COALESCE(ap.nota_metodo_ensino, 0)),
              'media_nota_metodologia', AVG(COALESCE(ap.nota_metodologia, 0)),
              'media_nota_acesso', AVG(COALESCE(ap.nota_acesso, 0))
            )
          FROM professor_avaliacao_usuario pau
          LEFT JOIN avaliacao_professor ap ON pau.cod_avaliacao = ap.cod_avaliacao
          WHERE pau.cod_professor = p.cod_professor
          ) AS medias
          FROM 
            professor p
          GROUP BY 
            p.cod_professor;
        `;
  
        const professores = await sequelize.query(sqlQuery, { type: sequelize.QueryTypes.SELECT });
  
        res.json({ success: true, data: professores });
      } catch (error) {
        console.error('Erro ao consultar professores:', error);
        res.status(500).json({ success: false, message: 'Erro ao consultar professores' });
      }
    });
  };
  
  
  //pegaremos os professores pelo ID aqui 

  export const getProfessorById = (app, sequelize) => {
    app.get('/professor/:cod_professor', async (req, res) => {
      const { cod_professor } = req.params;
  
      try {
        const sqlQuery = `
          SELECT 
            p.nome AS nome_professor,
            p.cod_professor AS cod_professor,
            p.foto_url AS foto_professor,
            (
              SELECT JSON_ARRAYAGG(JSON_OBJECT(
                  'cod_materia', m.cod_materia,
                  'nome_materia', m.nome
                ))
              FROM professor_materia pm
              INNER JOIN materia m ON pm.cod_materia = m.cod_materia
              WHERE pm.cod_professor = p.cod_professor
            ) AS materias,
            (
              SELECT JSON_ARRAYAGG(JSON_OBJECT(
                'cod_materia', pau.cod_materia,
                'nota_total', COALESCE(ap.nota_total, 0),
                'nota_didatica', COALESCE(ap.nota_didatica, 0),
                'nota_metodo_ensino', COALESCE(ap.nota_metodo_ensino, 0),
                'nota_metodologia', COALESCE(ap.nota_metodologia, 0), 
                'nota_acesso', COALESCE(ap.nota_acesso, 0),
                'comentario', COALESCE(cp.comentario, ''),
                'num_likes', COALESCE(cp.num_likes, 0),
                'num_dislikes', COALESCE(cp.num_dislikes, 0),
                'usuario', JSON_OBJECT(
                  'nome_usuario', u.nome,
                  'matricula', u.matricula
                )
              ))
              FROM professor_avaliacao_usuario pau
              LEFT JOIN avaliacao_professor ap ON pau.cod_avaliacao = ap.cod_avaliacao
              LEFT JOIN comentario_professor cp ON pau.cod_comentario = cp.cod_comentario
              LEFT JOIN usuario u ON pau.matricula = u.matricula
              WHERE pau.cod_professor = p.cod_professor
            ) AS avaliacoes,
            (
              SELECT JSON_OBJECT(
                'media_nota_total', AVG(COALESCE(ap.nota_total, 0)),
                'media_nota_didatica', AVG(COALESCE(ap.nota_didatica, 0)),
                'media_nota_metodo_ensino', AVG(COALESCE(ap.nota_metodo_ensino, 0)),
                'media_nota_metodologia', AVG(COALESCE(ap.nota_metodologia, 0)),
                'media_nota_acesso', AVG(COALESCE(ap.nota_acesso, 0))
              )
              FROM professor_avaliacao_usuario pau
              LEFT JOIN avaliacao_professor ap ON pau.cod_avaliacao = ap.cod_avaliacao
              WHERE pau.cod_professor = p.cod_professor
            ) AS medias
          FROM 
            professor p
          WHERE
            p.cod_professor = :cod_professor
          GROUP BY 
            p.cod_professor;
        `;
  
        const professor = await sequelize.query(sqlQuery, {
          type: sequelize.QueryTypes.SELECT,
          replacements: { cod_professor }
        });
  
        res.json({ success: true, data: professor });
      } catch (error) {
        console.error('Erro ao consultar professor:', error);
        res.status(500).json({ success: false, message: 'Erro ao consultar professor' });
      }
    });
  }
  