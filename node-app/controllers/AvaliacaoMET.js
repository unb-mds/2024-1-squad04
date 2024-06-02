export const getProfessoresAvaliar = ((app, sequelize) => {

    app.post('/avaliacao_professor', async (req, res) => {
        const { nota_acesso, nota_didatica, nota_metodologia, nota_carisma, usuario, cod_prof, materia, comentario } = req.body;

        const nota_total = (nota_acesso + nota_carisma + nota_didatica + nota_metodologia) / 4;

        // Iniciar uma transação
        const transaction = await sequelize.transaction();

        try {
            // Inserir dados na tabela avaliacao_professor e recuperar cod_avaliacao
            const avaliacaoQuery = `
                INSERT INTO avaliacao_professor 
                (nota_total, nota_didatica, nota_metodo_ensino, nota_metodologia, nota_acesso)
                VALUES
                (?, ?, ?, ?, ?);
            `;
            const avaliacaoResult = await sequelize.query(avaliacaoQuery, {
                replacements: [nota_total, nota_didatica, nota_carisma, nota_metodologia, nota_acesso],
                type: sequelize.QueryTypes.INSERT,
                transaction
            });
            const cod_avaliacao = avaliacaoResult[0];

            // Inserir dados na tabela comentario_professor e recuperar cod_comentario
            const comentarioQuery = `
                INSERT INTO comentario_professor 
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
                INSERT INTO professor_avaliacao_usuario 
                (cod_professor, cod_avaliacao, matricula, cod_materia, cod_comentario)
                VALUES
                (?, ?, ?, ?, ?);
            `;
            await sequelize.query(profAvaliacaoQuery, {
                replacements: [cod_prof, cod_avaliacao, usuario, materia, cod_comentario],
                transaction
            });

            // Se tudo deu certo, comitar a transação
            await transaction.commit();

            console.log("Avaliação do professor, comentário e ligação enviados com sucesso");
            res.json({ success: true, message: 'Avaliação do professor, comentário e ligação enviados com sucesso' });
        } catch (error) {
            // Se ocorreu algum erro, desfazer a transação
            await transaction.rollback();

            console.error('Erro ao enviar avaliação do professor, comentário e ligação:', error);
            res.status(500).json({ success: false, message: 'Erro ao enviar avaliação do professor, comentário e ligação' });
        }
    });

});