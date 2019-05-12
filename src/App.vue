<template>
  <div id="app">
    <div class="menu">
      <span class="logo">SUCK MY DISC</span>
      <router-link class="menu__item" :to="{name: 'sputnik'}">Sputnik</router-link>
      <router-link class="menu__item" :to="{name: 'prp'}">The PRP</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",
  methods: {
    ...mapActions(["act_storage"])
  }
};
</script>

<style lang="scss">
html {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a5a5a5;
  font-weight: 500;
  background-color: #211e23;
}

a {
  text-decoration: none;
  color: #a72841;
}

button {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  background: #ffffff1a;
  border: 1px solid #ffffff30;
  border-radius: 3px;
  color: white;
  padding: 3px 10px 1px;
  cursor: pointer;
  font-weight: 800;

  &:hover {
    background: #ffffff52;
  }
}
.content {
  padding: 30px;
}

.logo {
  padding: 0 40px;
  font-size: 1.4rem;
  font-weight: bold;
}

.menu {
  background-color: darken(#c93b57, 20);
  padding: 10px;

  &__item {
    padding: 15px 35px;
    display: inline-block;
    text-decoration: none;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 800;
    margin-right: 10px;
    color: white;

    &:hover {
      background-color: darken(#c93b57, 25);
    }
  }
  .router-link-exact-active,
  .router-link-active {
    background: #c93b57;
  }
}
</style>
