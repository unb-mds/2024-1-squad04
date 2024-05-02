import  Sequelize  from "sequelize";
export const getDados = ((app, sequelize)=>{

    app.get('/usuario', async (req, res) => {
        try {
          const [results] = await sequelize.query("SELECT * FROM usuario");
          res.json(results);
        } catch (error) {
          console.error(error);
          res.status(500).send('Houve um erro ao buscar os dados');
        }
      });

})

export const postDados = ((app, sequelize)=>{

  app.post('/usuario', (req, res) => {
      console.log("Dados recebidos no req.body:", req.body); // Verifica se os dados estão sendo recebidos corretamente

      const {matricula, cpf, nome, sobrenome, email, senha, curso} = req.body;

      console.log("Dados a serem inseridos no banco de dados:", {matricula, cpf, nome, sobrenome, email, senha, curso}); // Verifica os dados a serem inseridos no banco de dados

      sequelize.query(
        'INSERT INTO usuario (matricula, cpf, nome, sobrenome, email, senha, curso) VALUES (?, ?, ?, ?, ?, ?, ?)',
        {
          replacements: [matricula, cpf, nome, sobrenome, email, senha, curso], 
          type: Sequelize.QueryTypes.INSERT,
        }
      ).then(() => {
          console.log("Cadastro feito com sucesso"); // Loga quando o cadastro é bem-sucedido
          res.json({ success:true, message: 'Cadastro feito com sucesso'});
      }).catch((error) => {
          console.error('Erro ao cadastrar:', error); // Loga o erro caso ocorra algum problema
          res.status(500).json({success: false, message: 'Erro ao cadastrar'});
      });
    
    });

});



export const getChave = ((app) => {
  app.get('/chave', async (req, res) => {
    const segredo = "chave_de_criptografia"; // Use a chave de criptografia adequada
    res.json(segredo);
  });
})
  