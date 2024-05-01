import router from '../routes/index'

export function authGuard(auth, matricula) {
    if (auth) {
        sessionStorage.setItem('matricula', matricula);
        router.push('/home')
    }
    else{
        console.log("errado")
    }
}