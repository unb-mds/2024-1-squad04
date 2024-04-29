const { Sequelize } = require('sequelize');


const getDados = ((app, sequelize)=>{

    app.get('/', async (req, res) => {
        try {
          const [results] = await sequelize.query("SELECT * FROM Usuario");
          res.json(results);
        } catch (error) {
          console.error(error);
          res.status(500).send('Houve um erro ao buscar os dados');
        }
      });

})

const postDados = ((app, sequelize)=>{

    app.post('/', (req, res) => {
        const {nome, sobrenome, email, senha, curso, matricula} = req.body;
      
        sequelize.query(
          'INSERT INTO Usuario (nome, sobrenome, email, senha, curso, matricula) VALUES (?, ?, ?, ?, ?, ?)',
          {
            replacements: [nome, sobrenome, email, senha, curso, matricula], 
            type: Sequelize.QueryTypes.INSERT,
          }
        )
      
        .then(()=>{
          res.json({ success:true, message: 'Cadastro feito com sucesso'});
      
        })
      
        .catch((error)=>{
          console.error('Erro ao cadastrar', error);
          res.status(500).json({success: false, message: 'Erro ao cadastrar'});
        });
      
      });

})
  

module.exports = {getDados, postDados};