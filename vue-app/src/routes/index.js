import { createRouter, createWebHistory } from "vue-router";
import Home from'../components/HomeView.vue';
import Login from'../components/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login-page',
            component: Login
        },
        {
            path: '/',
            name: 'home-page',
            component: Home
        }
    ]
});

export default router;
