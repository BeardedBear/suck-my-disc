<template>
  <div id="app">
    <div class="menu">
      <span class="logo">SUCK MY DISC</span>
      <router-link class="menu__item" to="/">Sputnik</router-link>
      <router-link class="menu__item" to="/theprp">The PRP</router-link>
    </div>
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

.logo {
  padding: 0 40px;
  font-size: 1.4rem;
  font-weight: bold;
}

.menu {
  border-bottom: 1px solid black;

  .router-link-exact-active {
    background: #000;
    color: white;
  }

  &__item {
    padding: 20px 40px;
    display: inline-block;
    text-decoration: none;
    color: black;
  }
}
</style>
