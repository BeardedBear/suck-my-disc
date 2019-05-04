<template>
  <div>
    <SputnikMenu/>
    <Layout
      :requestUrl="'https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco'"
      :data="this.$store.state.data.sputnik.punk"
    />
  </div>
</template>

<script>
import Layout from "../Layout";
import SputnikMenu from "./SputnikMenu";

export default {
  name: "SputnikPunk",
  components: { Layout, SputnikMenu }
};
</script> 
