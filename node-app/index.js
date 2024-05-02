import { Sequelize } from 'sequelize'
import express from 'express'
import cors from 'cors' 
import CryptoJS from 'crypto-js';
require('dotenv').config();
const User = require('./controllers/UserMET');


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

User.getDados(app, sequelize);

User.postDados(app, sequelize);

User.getChave(app);


app.listen(3000)