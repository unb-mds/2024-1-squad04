import router from '../routes/index'

export async function authGuard(auth, matricula) {
    if (auth) {
        sessionStorage.setItem('matricula', matricula);
        router.push('/home')
        return 1;
    }
    else{
        sessionStorage.setItem('matricula', null);
        return 0;
    }
}