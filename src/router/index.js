import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import FooterContentComponent from "../components/footer-content.component.vue";

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[

        {
            path: '/home',
            name: 'home',
            alias: '/',
            //component: FooterContentComponent
        },
        {
            path: '/about',
            name: 'about',
            //component: AboutComponent
        },
        {
            path: '/',
            name: '',
            //component: TutorialsComponent
        }

    ]

})

export default router
