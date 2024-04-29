const axios = require('axios');

const autenticarLogin = async (emailEntrada, senhaEntrada) => {
  try {
    const response = await axios.get('http://localhost:3000/usuario');
    const usuarios = response.data;
    for (i = 0; i < usuarios.length; i++){
      if (usuarios[i].email === emailEntrada && usuarios[i].senha === senhaEntrada){
        console.log("Existe conta")
        break;
      }
      else{
        console.log("Nao existe conta")
        break
      }
    }
  } catch (error) {
    console.log(error);
  }
};
  
module.exports = { autenticarLogin };