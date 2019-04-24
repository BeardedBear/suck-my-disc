<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-link to="/youpi">Youpi</router-link>
    <router-view/>
  </div>
</template>

<script>
import store from "./store";

export default {
  name: "app",
  store
};
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
