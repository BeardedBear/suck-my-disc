<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ get_count }}</p>
    <button @click="act_multiplier()">Multiplier</button>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: { type: String, default: "non" }
  },
  methods: {
    ...Vuex.mapActions(["act_multiplier"])
  },
  computed: {
    ...Vuex.mapGetters(["get_count"])
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 10px;
  }
}

a {
  color: #42b983;
}
</style>
