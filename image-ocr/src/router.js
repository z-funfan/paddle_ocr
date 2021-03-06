import {
    createWebHashHistory,
    createRouter
} from "vue-router";
import Home from './components/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        name: 'ImageOcr',
        path: '/ImageOcr',
        component: () => import('./components/ImageOcr.vue')
    },
    {
        name: 'dishes',
        path: '/dishes',
        component: () => import('./components/DishesRecognization.vue')
    },
    {
        name: 'PositiveOrNegative',
        path: '/PositiveOrNegative',
        component: () => import('./components/PositiveOrNegative.vue')
    },
    {
        name: 'ImageStitch',
        path: '/ImageStitch',
        component: () => import('./components/ImageStitch.vue')
    },
    {
        name: 'GirlCartoon',
        path: '/GirlCartoon',
        component: () => import('./components/GirlCartoon.vue')
    },
    {
        name: 'ImageArtist',
        path: '/ImageArtist',
        component: () => import('./components/ImageArtist.vue')
    },
    {
        name: 'ImageSuperResolution',
        path: '/ImageSuperResolution',
        component: () => import('./components/ImageSuperResolution.vue')
    },
    {
        name: 'ImageColor',
        path: '/ImageColor',
        component: () => import('./components/ImageColor.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;