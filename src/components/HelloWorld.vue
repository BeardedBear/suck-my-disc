<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ get_count }}</p>
    <p>{{ get_auth.nickname }}, {{ get_auth.email }}</p>
    <button @click="act_multiplier()">Multiplier</button>
    <button @click="getGreetings()">Login</button>
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
    ...Vuex.mapActions(["act_multiplier", "act_login"]),

    getGreetings: function() {
      fetch("https://chat.allo-media.net/api/v4/users/login", {
        method: "post",
        body: JSON.stringify({
          login_id: "g.poirrier@allo-media.fr",
          password: "1RUT%6!8JHL*$q1Roa4&7dRX"
        })
      })
        .then(response => {
          if (response.ok) {
            // this.act_login(response);
            /* eslint-disable no-console */
            response.json().then(res => {
              this.act_login(res);
            });
            /* eslint-enable no-console */
          }
        })
        .catch(e => {
          this.errors = e;
        });
    }
  },
  computed: {
    ...Vuex.mapGetters(["get_count", "get_auth"])
  }
};
</script> 

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
