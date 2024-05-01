import { Sequelize } from 'sequelize'
import express from 'express'
import cors from 'cors' 
import CryptoJS from 'crypto-js';

const app = new express()
app.use(cors())
app.use(express.json())

const sequelize = new Sequelize({ 
    dialect: 'mysql',
    host: "35.193.233.216",
    username: 'root',
    password: 'mdssquad4avaliaunbdb24',
    database: 'avalia_unb',
});
sequelize.authenticate().then(function(){ 
    console.log("Conectado ao Banco de Dados")
}).catch(function(erro){
    console.log(erro)
})

app.get('/usuario', async (req, res) => {
  try {
    const [results] = await sequelize.query("SELECT * FROM Usuario");
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Houve um erro ao buscar os dados');
  }
});

app.get('/chave', async (req, res) => {
  const segredo = "chave_de_criptografia"; // Use a chave de criptografia adequada
  res.json(segredo);
});

app.listen(3000)