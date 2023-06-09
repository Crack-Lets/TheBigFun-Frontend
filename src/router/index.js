import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HomeContentComponent from "../components/home-content.component.vue";
import AboutusContentComponent from "../components/aboutus-content.component.vue";
import UserloginContentComponent from "../components/userlogin-content.component.vue";
import UserregisterContentComponent from "../components/userregister-content-component.vue";
import FaqContentComponent from "../components/faq-content.component.vue";
import VieweventsContentComponent from "../components/viewevents-content.component.vue";
import OrganizerprofileComponent from "../components/organizerprofile-component.vue";
import EventdetailsContentComponent from "../components/eventdetails-content.component.vue";
import RegistereventContentComponent from "../components/registerevent-content.component.vue";
import PaymentconfirmationContentComponent from "@/components/paymentconfirmation-content.component.vue";
import buyticketsContentComponent from "@/components/buytickets-content.component.vue";
import userloginContentComponent from "@/components/userlogin-content.component.vue";
import homeContentComponent from "@/components/home-content.component.vue";


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[

        {
            path: '/userLogin',
            name: 'userLogin',
            alias: '/',
            component: UserloginContentComponent
        },


        {
            path: '/home',
            name: 'home',
            component: homeContentComponent
        },


        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: AboutusContentComponent
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
        },
        {
            path: '/events',
            name: 'events',
            component: VieweventsContentComponent
        },
        {
            path: '/organizerProfile',
            name: 'organizerProfile',
            component: OrganizerprofileComponent,
        },
        {
            path: '/eventdetails/:id',
            name: 'eventdetails',
            component: EventdetailsContentComponent,
        },
        {
            path: '/createEvent',
            name: 'createEvent',
            component: RegistereventContentComponent,
        },
        {
            path: '/paymentConfirmation/:id',
            name: 'paymentconfirmation',
            component: PaymentconfirmationContentComponent,
        },
        {
            path: '/payment/:id',
            name: 'payment',
            component: buyticketsContentComponent,
        }
        // {
        //     path: '/home/:abcd',
        //     name: 'home',
        //     alias: '/',
        //     component: HomeContentComponent
        // },


    ]

})

export default router
