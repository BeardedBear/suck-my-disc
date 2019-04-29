<template>
  <div class="hello">
    <table v-if="this.$store.state.data.sputnik">
      <tr
        v-for="item in this.$store.state.data.sputnik"
        :key="item.id"
        :class="{readed: isReaded(item.id)}"
      >
        <td>
          <button @click="readed(item.id)">OK</button>
        </td>
        <td>{{item.note}}</td>
        <td>{{item.artist}}</td>
        <td>{{item.album}}</td>
        <td>{{item.releaseDate}}</td>
        <td>
          <a
            target="_BLANK"
            :href="'https://www.sputnikmusic.com/search_results.php?genreid=0&amp;search_in=Bands&amp;search_text=' + item.artist"
          >Sputnik</a>
        </td>
        <td>
          <a target="_BLANK" :href="'https://fr.wikipedia.org/wiki/' + item.artist">Wiki</a>
        </td>
        <td>
          <a
            target="_BLANK"
            :href="'https://rateyourmusic.com/artist/' + item.artist.toLowerCase().replace(' ', '-')"
          >RYM -</a>
        </td>
        <td>
          <a
            target="_BLANK"
            :href="'https://rateyourmusic.com/artist/' + item.artist.toLowerCase().replace(' ', '_')"
          >RYM _</a>
        </td>
      </tr>
    </table>
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
    const localStorageLabel = "readed";
    const getLocalStorage = JSON.parse(localStorage.getItem(localStorageLabel));
    this.act_storage(getLocalStorage);
    if (getLocalStorage === null) {
      localStorage.setItem(localStorageLabel, JSON.stringify([]));
    }
    this.getSputnik();
  },

  methods: {
    ...Vuex.mapActions([
      "act_multiplier",
      "act_login",
      "act_dataSputnik",
      "act_storage"
    ]),

    isReaded(id) {
      let readedId = this.$store.state.storage;
      return readedId.includes(id);
    },

    readed(id) {
      const array = this.$store.state.storage;
      array.push(id);
      localStorage.setItem("readed", JSON.stringify(array));
      this.act_storage(array);
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
  }
};
</script> 



<style lang="scss" scoped>
tr {
  border-bottom: 1px solid black;
}
h3 {
  margin: 40px 0 0;
}

.readed {
  opacity: 0.2;

  button {
    pointer-events: none;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
