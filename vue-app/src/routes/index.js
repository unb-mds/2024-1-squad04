import { createRouter, createWebHistory } from "vue-router";
import Home from'../components/HomeView.vue';
import Cadastro from'../components/CadastroView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/Cadastro',
            name: 'cadastro-page',
            component: Cadastro
        },
        {
            path: '/',
            name: 'home-page',
            component: Home
        }
    ]
});

export default router;