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
html {
  font-family: "Volkhov", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c6b8ca;
  background-color: #392444;
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

  &:hover {
    background: #ffffff52;
  }
}
.content {
  padding: 30px;
}

.readed {
  opacity: 0.2;

  button {
    pointer-events: none;
  }
}

.logo {
  padding: 0 40px;
  font-size: 1.4rem;
  font-weight: bold;
}

.menu {
  background-color: darken(#c93b57, 20);

  .router-link-exact-active {
    background: #c93b57;
  }

  &__item {
    padding: 20px 40px;
    display: inline-block;
    text-decoration: none;
    color: white;
  }
}
</style>
