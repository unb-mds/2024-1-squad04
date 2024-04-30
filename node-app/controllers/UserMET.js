const axios = require('axios');

const autenticarLogin = async (emailEntrada, senhaEntrada) => {
  try {
    const response = await axios.get('http://localhost:3000/usuario');
    const usuarios = response.data;
    for (i = 0; i < usuarios.length; i++){
      if (usuarios[i].email === emailEntrada && usuarios[i].senha === senhaEntrada){
        console.log("Existe conta");
        return 1;
      }
      else {
        return 0;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
  
module.exports = { autenticarLogin };