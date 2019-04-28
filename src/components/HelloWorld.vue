<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ get_count }}</p>
    <p>{{ get_auth.nickname }}, {{ get_auth.email }}</p>
    <button @click="act_multiplier()">Multiplier</button>
    <button @click="getGreetings()">Login</button>
    <button @click="getSputnik()">Sputnik</button>

    <ul v-if="get_data.sputnik">
      <li
        style="display:block;"
        v-for="item in get_data.sputnik"
        :key="item.id"
      >{{ item.note + " - " + item.artist + " - " + item.album + " - " + item.releaseDate}}</li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: { type: String, default: "non" }
  },
  mounted() {
    this.getSputnik();
  },
  methods: {
    ...Vuex.mapActions(["act_multiplier", "act_login", "act_dataSputnik"]),

    getSputnik() {
      fetch(
        "https://api.apify.com/v2/acts/apify~web-scraper/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",
        {
          method: "get"
        }
      ).then(response => {
        if (response.ok) {
          response.json().then(res => {
            this.act_dataSputnik(res);
          });
        }
      });
    },

    getGreetings() {
      fetch("https://chat.allo-media.net/api/v4/users/login", {
        method: "post",
        body: JSON.stringify({
          login_id: "g.poirrier@allo-media.fr",
          password: "l$8&Bruyw89CGju6RGe2EOfa"
        })
      })
        .then(response => {
          if (response.ok) {
            /* eslint-disable no-console */
            response.json().then(res => {
              this.act_login(res);
            });
            // console.log(response);
            // console.log("this", this);

            // console.log(response.headers.get("content-length"));
            /* eslint-enable no-console */
          }
        })
        .catch(e => {
          this.errors = e;
        });
    }
  },
  computed: {
    ...Vuex.mapGetters(["get_count", "get_auth", "get_data"])
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
