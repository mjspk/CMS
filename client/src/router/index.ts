import { createRouter, createWebHistory } from 'vue-router'
import Contacts from '../views/Contacts.vue'
import ContactDetails from '../views/ContactDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/contact/:id',
        name: 'ContactDetails',
        component: ContactDetails
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



export default router
