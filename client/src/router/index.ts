import { createRouter, createWebHistory } from 'vue-router'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'
import ContactDetails from '../views/ContactDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/about',
        name: 'About',
        component: About

    },
    {
        path: '/contact/:id',
        name: 'ContactDetails',
        component: ContactDetails
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router
