<template>
  <div id="app">
    <Navbar />
    <router-view style="min-height: 100vh;padding-top: 70px;" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

@Options({
  components: {
    Navbar,
    Footer,
  },
})

export default class App extends Vue {
  name = 'App'
}
</script>

<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
