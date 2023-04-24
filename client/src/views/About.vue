<template>
    <div class="about container">
        <h2>About CMS</h2>
        <p>The Contact Management System is a web application that enables users to manage their contacts, including adding,
            updating, deleting, and searching for contacts. The application also includes a feature to send an email to a
            contact.</p>
        <p>The system is built using a combination of Node.js, Express, MySQL, and Vue.js, providing a robust and scalable
            solution for managing contact information.</p>
        <ul>
            <li>The back-end API is built with Node.js and Express, connecting to a MySQL database to store contact
                information.</li>
            <li>The front-end is built with Vue.js, providing a dynamic and user-friendly interface for displaying and
                manipulating contact data.</li>
            <li>The application is deployed with Nginx on Azure, ensuring reliable and secure access from anywhere with an
                internet connection.</li>
        </ul>
        <p>The Contact Management System is an efficient and effective tool for managing contacts, providing users with the
            ability to easily organize and communicate with their contacts.</p>
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
    text-align: left;

}

.about h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
    text-align: center;


}

.about p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.5;
}
</style>