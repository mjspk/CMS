<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-dark p-2 fixed-top">
      <a class="navbar-brand" href="#">CMS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
export default class Navbar extends Vue {
}
</script>

<style scoped>
.navbar {
  text-align: center;
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>