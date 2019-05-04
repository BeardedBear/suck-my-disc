<template>
  <div class="content">
    <table v-if="data">
      <tr v-for="item in data" :key="item.id" :class="{readed: isReaded(item.id)}">
        <td>
          <button @click="readed(item.id)">OK</button>
        </td>
        <td>
          <button @click="copy(item)">Copy</button>
        </td>
        <td>{{item.note}}</td>
        <td class="artist">{{item.artist}}</td>
        <td>{{item.album}}</td>
        <td>{{item.releaseDate}}</td>
        <links :item="item"/>
      </tr>
    </table>
  </div>
</template>

<script>
import Vuex from "vuex";
import Links from "./Links";

export default {
  name: "Layout",
  components: { Links },

  props: {
    requestUrl: { type: String },
    data: { type: Array }
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
      "act_dataSputnikAll",
      "act_dataSputnikAltRock",
      "act_dataSputnikElectro",
      "act_dataSputnikHipHop",
      "act_dataSputnikJazz",
      "act_dataSputnikMetal",
      "act_storage",
      "act_dataSputnikPop",
      "act_dataSputnikPunk",
      "act_dataSputnikRock"
    ]),

    copy(text) {
      navigator.clipboard.writeText(text.artist);
    },

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
      fetch(this.requestUrl, {
        method: "get"
      }).then(response => {
        if (response.ok) {
          response.json().then(res => {
            this.act_dataSputnikAll(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php"
              )
            );
            this.act_dataSputnikAltRock(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=21"
              )
            );
            this.act_dataSputnikElectro(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=58"
              )
            );
            this.act_dataSputnikHipHop(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=4"
              )
            );
            this.act_dataSputnikJazz(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=7"
              )
            );
            this.act_dataSputnikMetal(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=1"
              )
            );
            this.act_dataSputnikPop(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=14"
              )
            );
            this.act_dataSputnikPunk(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=3"
              )
            );
            this.act_dataSputnikRock(
              res.filter(
                item =>
                  item.context ===
                  "https://www.sputnikmusic.com/newreleases.php?t=30"
              )
            );
          });
        }
      });
    }
  }
};
</script> 


<style lang="scss" scoped>
.readed {
  opacity: 0.2;

  button {
    pointer-events: none;
  }
}

.artist {
  font-weight: 800;
  color: #fff;
}
</style>
