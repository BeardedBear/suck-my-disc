<template>
  <div class="pageMenu">
    <router-link class="pageMenu__item" to="/sputnik/all">All</router-link>
    <router-link class="pageMenu__item" to="/sputnik/altrock">Alternative Rock</router-link>
    <router-link class="pageMenu__item" to="/sputnik/electro">Electronic</router-link>
    <router-link class="pageMenu__item" to="/sputnik/hiphop">Hip-Hop</router-link>
    <router-link class="pageMenu__item" to="/sputnik/jazz">Jazz</router-link>
    <router-link class="pageMenu__item" to="/sputnik/metal">Metal</router-link>
    <router-link class="pageMenu__item" to="/sputnik/punk">Punk</router-link>
    <router-link class="pageMenu__item" to="/sputnik/pop">Pop</router-link>
    <router-link class="pageMenu__item" to="/sputnik/rock">Rock</router-link>
  </div>
</template>

<script>
export default {
  name: "SputnikMenu"
};
</script> 

<style lang="scss" scoped>
.pageMenu {
  padding: 10px 30px;

  &__item {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 800;

    &.router-link-exact-active {
      background: #c93b57;
      color: #fff;
    }
  }
}

.router-link-active {
  background: #c93b57;
}
</style>
