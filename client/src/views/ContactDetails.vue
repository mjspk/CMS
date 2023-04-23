<template>
    <div>
        <h1>Contact Details</h1>
        <div class="card">
            <div class="card-body" >
                <h5 class="card-title" v-bind="contact?.name"></h5>
                <p class="card-text" v-bind="contact?.email"></p>
                <p class="card-text" v-bind="contact?.phone"></p>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button class="btn btn-primary"> <i class="bi bi-pencil"></i></button>
                    <button class="btn btn-danger"> <i class="bi bi-trash"></i></button>
                </div>
            </div>
        </div>



    </div>
</template>

<script lang="ts">

import { Vue } from 'vue-class-component';
import { Contact } from '@/models/contact'
import { ContactService } from '@/services/cotactsService';
import Swal from 'sweetalert2'

export default class ContactDetails extends Vue {
 

    private contactService: ContactService = new ContactService();
    public contact: Contact | undefined = undefined;
    mounted(): void {
        this.getContact();
    }

    getContact(): void {
        const id = this.$route.params.id == undefined ? 0 : Number(this.$route.params.id);
        this.contactService.getContactById(id).then((contact: Contact) => {
            this.contact = contact;
            
        });
    }

}



</script>


