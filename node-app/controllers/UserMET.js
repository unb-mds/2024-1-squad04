import axios from 'axios';
import { authGuard } from '../../vue-app/src/guards/authGuard';

export async function autenticarLogin(emailEntrada, senhaEntrada){
  try {
    const response = await axios.get('http://localhost:3000/usuario');
    const usuarios = response.data;
    
    for (let i = 0; i < usuarios.length; i++){
      if (usuarios[i].email === emailEntrada && usuarios[i].senha === senhaEntrada){
        authGuard(true, usuarios[i].matricula)
        return 1;
      }
    }

    authGuard(false)
    return 0;

  } catch (error) {
    console.log(error);
  }
};const { Sequelize } = require('sequelize');


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