import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import {createRouter, createWebHistory} from 'vue-router'
import CraftPage from "../pages/CraftPage";
import NewsPage from "../pages/NewsPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/crafts',
        component: CraftPage
    },
    {
        path: '/news',
        component: NewsPage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/github',
        beforeEnter() {location.href = 'https://github.com/dimasliva/vuetest'}
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
