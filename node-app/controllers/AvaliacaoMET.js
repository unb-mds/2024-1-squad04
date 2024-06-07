


//métodos get para pegar as avaliações de um usuário de acordo com sua matrícula


export const getAvaliacoesProfessorUsuario = (app, sequelize) => {
    app.get('/avaliacoes_professor/:matricula', async (req, res) => {
      const { matricula } = req.params;
  
      try {
        const sqlQueryProfessores = `
          SELECT 
            
            p.nome AS nome_professor,
            p.foto_url AS foto_professor,
            pau.cod_materia,
            pau.cod_avaliacao,
            COALESCE(pau.cod_comentario, 0) AS cod_comentario,
            COALESCE(ap.nota_total, 0) AS nota_total,
            COALESCE(ap.nota_didatica, 0) AS nota_didatica,
            COALESCE(ap.nota_metodo_ensino, 0) AS nota_metodo_ensino,
            COALESCE(ap.nota_metodologia, 0) AS nota_metodologia, 
            COALESCE(ap.nota_acesso, 0) AS nota_acesso,
            COALESCE(cp.comentario, '') AS comentario,
            COALESCE(cp.num_likes, 0) AS num_likes,
            COALESCE(cp.num_dislikes, 0) AS num_dislikes
          FROM 
            professor_avaliacao_usuario pau
          LEFT JOIN 
            avaliacao_professor ap ON pau.cod_avaliacao = ap.cod_avaliacao
          LEFT JOIN 
            comentario_professor cp ON pau.cod_comentario = cp.cod_comentario
          LEFT JOIN 
            professor p ON pau.cod_professor = p.cod_professor
          WHERE 
            pau.matricula = :matricula;
        `;
  
        const avaliacoesProfessores = await sequelize.query(sqlQueryProfessores, {
          type: sequelize.QueryTypes.SELECT,
          replacements: { matricula }
        });
  
  
        res.json({ success: true, data:  {avaliacoesProfessores}  });
      } catch (error) {
        console.error('Erro ao consultar avaliações de professores:', error);
        res.status(500).json({ success: false, message: 'Erro ao consultar avaliações de professores' });
      }
    });
  }
  
  
  
  export const getAvaliacoesMateriaUsuario = (app, sequelize) => {
    app.get('/avaliacoes_materia/:matricula', async (req, res) => {
      const { matricula } = req.params;
  
      try {
        const sqlQueryMaterias = `
        SELECT 
          m.cod_materia,
          m.nome AS nome_materia,
          m.qtd_hrs_materia,
          mau.cod_avaliacao,
          COALESCE(mau.cod_comentario, 0) AS cod_comentario,
          COALESCE(am.nota_total, 0) AS nota_total,
          COALESCE(am.nota_experiencia, 0) AS nota_experiencia,
          COALESCE(am.nota_dificuldade, 0) AS nota_dificuldade,
          COALESCE(cm.comentario, '') AS comentario,
          COALESCE(cm.num_likes, 0) AS num_likes,
          COALESCE(cm.num_dislikes, 0) AS num_dislikes
        FROM 
          materia_avaliacao_usuario mau
        LEFT JOIN 
          avaliacao_materia am ON mau.cod_avaliacao = am.cod_avaliacao
        LEFT JOIN 
          comentario_materia cm ON mau.cod_comentario = cm.cod_comentario
        LEFT JOIN 
          materia m ON mau.cod_materia = m.cod_materia
        WHERE 
          mau.matricula = :matricula;
      `;
  
  
        const avaliacoesMaterias = await sequelize.query(sqlQueryMaterias, {
          type: sequelize.QueryTypes.SELECT,
          replacements: { matricula }
        });
  
        res.json({ success: true, data:  {avaliacoesMaterias}  });
      } catch (error) {
        console.error('Erro ao consultar avaliações de matérias:', error);
        res.status(500).json({ success: false, message: 'Erro ao consultar avaliações de matérias' });
      }
    });
  }
  

  //métodos de delete para apagar uma avaliação feita por um usuário 


  export const deleteAvaliacaoComentarioProfessor = (app, sequelize) => {
    app.delete('/avaliacoes_professor/:matricula/:cod_avaliacao/:cod_comentario', async (req, res) => {
      const { matricula, cod_avaliacao, cod_comentario } = req.params;
  
      try {
        // Deletar a relação na tabela professor_avaliacao_usuario
        await sequelize.query(`
          DELETE FROM professor_avaliacao_usuario
          WHERE cod_avaliacao = :cod_avaliacao
            AND (cod_comentario = :cod_comentario OR :cod_comentario IS NULL)
            AND matricula = :matricula
        `, {
          replacements: { cod_avaliacao, cod_comentario, matricula }
        });
  
        // Deletar a avaliação na tabela avaliacao_professor
        await sequelize.query(`
          DELETE FROM avaliacao_professor
          WHERE cod_avaliacao = :cod_avaliacao
        `, {
          replacements: { cod_avaliacao }
        });
  
        // Deletar o comentário na tabela comentario_professor, se existir
        if (cod_comentario !== 0) {
          await sequelize.query(`
            DELETE FROM comentario_professor
            WHERE cod_comentario = :cod_comentario
          `, {
            replacements: { cod_comentario }
          });
        }
  
        res.json({ success: true, message: 'Avaliação e comentário deletados com sucesso' });
      } catch (error) {
        console.error('Erro ao deletar avaliação e comentário:', error);
        res.status(500).json({ success: false, message: 'Erro ao deletar avaliação e comentário' });
      }
    });
  };
  

  export const deleteAvaliacaoComentarioMateria = (app, sequelize) => {
    app.delete('/avaliacoes_materia/:matricula/:cod_avaliacao/:cod_comentario', async (req, res) => {
      const { matricula, cod_avaliacao, cod_comentario } = req.params;
  
      try {
        // Deletar a relação na tabela materia_avaliacao_usuario
        await sequelize.query(`
          DELETE FROM materia_avaliacao_usuario
          WHERE cod_avaliacao = :cod_avaliacao
            AND (cod_comentario = :cod_comentario OR :cod_comentario IS NULL)
            AND matricula = :matricula
        `, {
          replacements: { cod_avaliacao, cod_comentario, matricula }
        });
  
        // Deletar a avaliação na tabela avaliacao_materia
        await sequelize.query(`
          DELETE FROM avaliacao_materia
          WHERE cod_avaliacao = :cod_avaliacao
        `, {
          replacements: { cod_avaliacao }
        });
  
        // Deletar o comentário na tabela comentario_materia, se existir
        if (cod_comentario !== 0) {
          await sequelize.query(`
            DELETE FROM comentario_materia
            WHERE cod_comentario = :cod_comentario
          `, {
            replacements: { cod_comentario }
          });
        }
  
        res.json({ success: true, message: 'Avaliação e comentário deletados com sucesso' });
      } catch (error) {
        console.error('Erro ao deletar avaliação e comentário:', error);
        res.status(500).json({ success: false, message: 'Erro ao deletar avaliação e comentário' });
      }
    });
  };
  
