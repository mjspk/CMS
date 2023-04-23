<template>
  <router-view />
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class App extends Vue {
  name = 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
