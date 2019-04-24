<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ get_count }}</p>
    <button @click="act_multiplier()">Multiplier</button>
    <button @click="getGreetings()">Login</button>
  </div>
</template>

<script>
import Vuex from "vuex";
// import { HTTP } from "../api";

export default {
  name: "HelloWorld",
  props: {
    msg: { type: String, default: "non" }
  },
  methods: {
    ...Vuex.mapActions(["act_multiplier"]),
    // getGreetings: function() {
    //   HTTP.post("/api/v4/users/login", {
    //     login_id: "g.poirrier@allo-media.fr",
    //     password: "1RUT%6!8JHL*$q1Roa4&7dRX"
    //   })
    //     .then(response => {
    //       this.greetings = response.message;
    //     })
    //     .catch(e => {
    //       this.errors = e;
    //     });
    // },

    // "POST" "/api/v4/users/login HTTP/1.1"
    // "Host": "chat.allo-media.net"
    // "Accept": "*"
    // "User-Agent": "Mozilla/5.0 (compatible; Rigor/1.0.0; http://rigor.com)"
    // "Content-Length": "77"
    // Content-Type: application/x-www-form-urlencoded

    getGreetings: function() {
      fetch("https://chat.allo-media.net/api/v4/users/login", {
        method: "post",
        body: JSON.stringify({
          login_id: "g.poirrier@allo-media.fr",
          password: "1RUT%6!8JHL*$q1Roa4&7dRX"
        })
      })
        .then(response => {
          this.greetings = response.message;
        })
        .catch(e => {
          this.errors = e;
        });
    }
  },
  computed: {
    ...Vuex.mapGetters(["get_count"])
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
