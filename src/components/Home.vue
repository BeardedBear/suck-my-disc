<template>
  <div>
    <Menu/>
    <Layout
      :requestUrl="'https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco'"
      :data="this.$store.state.data.sputnik.all"
    />
  </div>
</template>

<script>
import Layout from "./Layout";
import Menu from "./Sputnik/Menu";

export default {
  name: "Home",
  components: { Layout, Menu }
};
</script> 
