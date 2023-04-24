<template>
    <div class="about container">
        <h2>About CMS</h2>
        <p>
            The Contact Management System is a web application built with Node.js,
            Express, MySQL, and Vue.js. It allows users to manage their contacts,
            including adding, updating, deleting, and searching for contacts. The
            application also includes a feature to send an email to a contact.
        </p>
        <p>
            The back-end API is built with Node.js and
            Express, and connects to a
            MySQL database to store contact information. The front-end is built with
            Vue.js and communicates with the back-end API to display and manipulate
            contact data
        </p>
        <p>
            The Contact Management System is deployed with Nginx on Azure, allowing
            users to access the application from anywhere with an internet
            connection.
        </p>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class About extends Vue {

}
</script>

<style scoped>
.about {
    padding: 3rem;
}

.about h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.about p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.5;
    text-align: justify;
}
</style>