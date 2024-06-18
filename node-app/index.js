import { Sequelize } from 'sequelize'
import express from 'express'
import cors from 'cors' 
import * as User from './controllers/UserMET.js';
import * as Professor from './controllers/ProfessorMET.js';
import * as Materia from './controllers/MateriaMET.js';
import * as Avaliacao from './controllers/AvaliacaoMET.js';



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

Professor.getProfessoresAvaliados(app, sequelize);

Professor.getProfessores(app, sequelize);

Professor.getProfessorById(app, sequelize);

Materia.getMateriasAvaliadss(app, sequelize);

Materia.getMaterias(app, sequelize);

Materia.getMateriaById(app, sequelize);

Avaliacao.getProfessoresAvaliar(app, sequelize)

Avaliacao.getMateriasAvaliar(app, sequelize)

Materia.getMateriasParaFiltragem(app, sequelize);

Avaliacao.getProfessoresAvaliar(app, sequelize); //foi mudado de nome para ficar no padrão do controller : invés de Avaliar -> Avaliacao, assim como os outros: Professor, Materia, User, etc etc

Avaliacao.getAvaliacoesMateriaUsuario(app, sequelize);

Avaliacao.getAvaliacoesProfessorUsuario(app, sequelize);

Avaliacao.deleteAvaliacaoComentarioProfessor(app, sequelize);

Avaliacao.deleteAvaliacaoComentarioMateria(app, sequelize);

app.listen(3000)