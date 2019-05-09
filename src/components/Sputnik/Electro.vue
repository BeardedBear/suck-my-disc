<template>
  <div>
    <Layout
      :requestUrl="'https://api.apify.com/v2/actor-tasks/PkjaWZek2hn3JjXgG/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco'"
      :data="this.$store.state.data.sputnik.electro"
    />
  </div>
</template>

<script>
import Layout from "../Layout";

export default {
  components: { Layout }
};
</script> 
 