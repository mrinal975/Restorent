import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import {createWebHistory, createRouter} from 'vue-router';

const routes =[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;