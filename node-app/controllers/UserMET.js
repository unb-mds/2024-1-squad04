const axios = require('axios');
const Auth = require('../../vue-app/src/guards/authGuard');

const autenticarLogin = async (emailEntrada, senhaEntrada) => {
  try {
    const response = await axios.get('http://localhost:3000/usuario');
    const usuarios = response.data;
    for (i = 0; i < usuarios.length; i++){
      if (usuarios[i].email === emailEntrada && usuarios[i].senha === senhaEntrada){
        Auth.authGuard(true, usuarios[i].matricula)
        return 1;
      }
      else {
        Auth.authGuard(false)
        return 0;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
  
module.exports = { autenticarLogin };