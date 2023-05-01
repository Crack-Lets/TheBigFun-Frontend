import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HomeContentComponent from "../components/home-content.component.vue";
import AboutusContentComponent from "../components/aboutus-content.component.vue";
import UserloginContentComponent from "../components/userlogin-content.component.vue";
import UserregisterContentComponent from "../components/userregister-content-component.vue";
import FaqContentComponent from "../components/faq-content.component.vue";


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[

        {
            path: '/home',
            name: 'home',
            alias: '/',
            component: HomeContentComponent
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: AboutusContentComponent
        },
        {
            path: '/userLogin',
            name: 'userLogin',
            component: UserloginContentComponent
        },
        {
            path: '/userRegister',
            name: 'userRegister',
            component: UserregisterContentComponent
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: FaqContentComponent
        }

    ]

})

export default router
