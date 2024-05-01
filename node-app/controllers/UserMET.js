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
};