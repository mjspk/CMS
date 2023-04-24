<template>
    <div class="container mt-4">
        <div v-if="contact">
            <h1>Contact Details</h1>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{ contact.name }}</h5>
                    <p class="card-text">{{ contact.email }}</p>
                    <p class="card-text">{{ contact.phone }}</p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button class="btn btn-primary" @click="editContact(contact)"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-danger" @click="deleteContact(contact)"> <i class="bi bi-trash"></i></button>
                        <button class="btn btn-primary" @click="composeEmail(contact)"><i class="bi bi-envelope"></i></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Contact } from '@/models/Contact'
import { ContactHelper } from '@/helpers/ContactHelper';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ContactDetails',
    data() {
        return {
            contact: {} as Contact,
        };
    },
    mounted() {
        this.getContact();
    },
    watch: {
        $route() {
            this.getContact();
        },
    },
    methods: {
        async getContact() {
            const id = this.$route.params.id == undefined ? 0 : Number(this.$route.params.id);
            this.contact = await ContactHelper.getInstance().getContactById(id);
            console.log(this.contact);
        },
        async editContact(contact: Contact) {
            await ContactHelper.getInstance().editContact(contact);
            this.getContact();
        },
        async deleteContact(contact: Contact) {
            await ContactHelper.getInstance().deleteContact(contact);
            this.$router.back();
        },
        async composeEmail(contact: Contact) {
            await ContactHelper.getInstance().composeEmail(contact);
        },
    },
});
</script>

<style scoped>
.card {
    margin: 0 auto;
    padding: 20px;
}

@media (min-width: 768px) {
    .card {
        width: 50%;
    }
}
</style>
