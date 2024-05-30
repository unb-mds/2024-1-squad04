import axios from 'axios';
import  router  from '../routes/index.js'
import CryptoJS from 'crypto-js';



export async function authGuard(auth, matricula) {
    if (auth) {
        const response = await axios.get('http://localhost:3000/chave');
        const encryptedMatricula = CryptoJS.AES.encrypt(matricula.toString(), response.data).toString();
        sessionStorage.setItem('matricula', encryptedMatricula);
        router.push('/home');
        return 1;
    }
    else{
        sessionStorage.removeItem('matricula');
        return 0;
    }
}