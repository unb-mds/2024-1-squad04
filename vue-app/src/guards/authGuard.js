export function authGuard(to, from, next) {
    
    const isAuthenticated = true; // verifica se está logado
    if (!isAuthenticated) {
        next({ name: 'login' }); // se não é redirecionado para a rota de login
    } else {
        next(); // se estiver logado continua para a rota 
    }
}
