<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="get_data.sputnik">
      <li v-for="item in get_data.sputnik" :key="item.id" :class="{readed: isReaded(item.id)}">
        <span>{{ item.note + " - " + item.artist + " - " + item.album + " - " + item.releaseDate}}</span>
        <button @click="readed(item.id)">OK</button>
      </li>
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
    if (JSON.parse(localStorage.getItem("readed")) === null) {
      localStorage.setItem("readed", JSON.stringify([]));
    }
  },
  methods: {
    ...Vuex.mapActions(["act_multiplier", "act_login", "act_dataSputnik"]),

    isReaded(id) {
      let readedId = JSON.parse(localStorage.getItem("readed"));
      return readedId.includes(id);
    },

    readed(id) {
      let array = JSON.parse(localStorage.getItem("readed"));
      array.push(id);
      localStorage.setItem("readed", JSON.stringify(array));
      this.getSputnik();
    },

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
    }
  },
  computed: {
    ...Vuex.mapGetters(["get_data"])
  }
};
</script> 

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}

.readed {
  background: rgb(128, 128, 128);
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
