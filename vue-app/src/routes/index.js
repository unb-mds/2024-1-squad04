import { createRouter, createWebHistory } from "vue-router";
import Home from'../components/HomeComponent.vue';
import Login from'../components/LoginComponent.vue';

const beforeEnterCheck = () => {
    if (sessionStorage.getItem('matricula') == null){
        router.push('/login')
    }
}

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
            beforeEnter: beforeEnterCheck
        },

        // {
        //     path: '/cadastro',
        //     name: 'cadastro',
        //     component: Cadastro,
        // },
        
        {
            path: '/:catchAll(.*)',
            redirect: () => {
                return '/home';
            }
        }
    ]
});

export default router;