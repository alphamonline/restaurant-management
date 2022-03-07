import MainPage from '@/components/MainPage.vue'
import SignUp from '@/components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/components/SignIn.vue'
import AddRestaurant from '@/components/AddRestaurant.vue'
import UpdateRestaurant from '@/components/UpdateRestaurant.vue'

const routes = [
    {
        name:'MainPage',
        component:MainPage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'SignIn',
        component:SignIn,
        path:'/sign-in'
    },
    {
        name:'AddRestaurant',
        component:AddRestaurant,
        path:'/add-restaurant'
    },
    {
        name:'UpdateRestaurant',
        component:UpdateRestaurant,
        path:'/update-restaurant'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;