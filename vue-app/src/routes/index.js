import { createRouter, createWebHistory } from "vue-router";
import Home from'../components/HomeComponent.vue';
import Login from'../components/LoginComponent.vue';
import Cadastro from '../components/CadastroComponent.vue'
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
            path: '/cadastro',
            name: 'cadastro',
            component: Cadastro
        },

        {
            path: '/home',
            name: 'home',
            component: Home,
            beforeEnter: authGuard
        },
        {
            path: '/:catchAll(.*)',
            redirect: () => {
                return '/cadastro';
            }
        }
    ]
});

export default router;
