import { createRouter, createWebHistory } from "vue-router";
import Home from'../components/HomeComponent.vue';
import Login from'../components/LoginComponent.vue';
import { authGuard } from '../guards/authGuard'; 

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            beforeEnter: authGuard
        },
        {
            path: '/:catchAll(.*)',
            redirect: to => { // verifica se o usuário está logado
                const isAuthenticated = false;
                if (!isAuthenticated) {
                    return '/login'; // se não estiver logado é redirecionado para o login
                } else {
                    return to.fullPath; // se estiver logado continua para a rota
                }
            }
        }
    ]
});

export default router;
