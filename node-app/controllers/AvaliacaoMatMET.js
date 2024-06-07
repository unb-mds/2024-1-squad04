export const getMateriasAvaliar = ((app, sequelize) => {
    app.post('/avaliacao_materia', async (req, res) => {
        const {  nota_dif, nota_exp, comentario, matricula, materia } = req.body;

        const nota_total = (nota_dif + nota_exp) / 2;

        // Iniciar uma transação
        const transaction = await sequelize.transaction();

        try {
            const avaliacaoQuery = `
                INSERT INTO avaliacao_materia 
                (nota_total, nota_experiencia, nota_dificuldade)
                VALUES
                (?, ?, ?);
            `;
            const avaliacaoResult = await sequelize.query(avaliacaoQuery, {
                replacements: [nota_total, nota_exp, nota_dif],
                type: sequelize.QueryTypes.INSERT,
                transaction
            });
            const cod_avaliacao = avaliacaoResult[0];

            // Inserir dados na tabela comentario_professor e recuperar cod_comentario
            const comentarioQuery = `
                INSERT INTO comentario_materia
                (comentario)
                VALUES
                (?);
            `;
            const comentarioResult = await sequelize.query(comentarioQuery, {
                replacements: [comentario],
                type: sequelize.QueryTypes.INSERT,
                transaction
            });
            const cod_comentario = comentarioResult[0];

            // Inserir dados na tabela professor_avaliacao_usuario usando os ids recuperados
            const profAvaliacaoQuery = `
                INSERT INTO materia_avaliacao_usuario 
                (cod_materia, cod_avaliacao, matricula, cod_comentario)
                VALUES
                (?, ?, ?, ?);
            `;
            await sequelize.query(profAvaliacaoQuery, {
                replacements: [materia, cod_avaliacao, matricula, cod_comentario],
                transaction
            });

            // Se tudo deu certo, comitar a transação
            await transaction.commit();

            console.log("Avaliação da matéria, comentário e ligação enviados com sucesso");
            res.json({ success: true, message: 'Avaliação da matéria , comentário e ligação enviados com sucesso' });
        } catch (error) {
            // Se ocorreu algum erro, desfazer a transação
            await transaction.rollback();

            console.error('Erro ao enviar avaliação da matéria, comentário e ligação:', error);
            res.status(500).json({ success: false, message: 'Erro ao enviar avaliação da matéria, comentário e ligação' });
        }
    });
});