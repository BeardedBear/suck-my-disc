<template>
  <div class="content">
    <table v-if="this.$store.state.data.prp">
      <tr
        v-for="item in this.$store.state.data.prp"
        :key="item.id"
        :class="{readed: isReaded(item.id)}"
      >
        <td>
          <button @click="readed(item.id)">OK</button>
        </td>
        <td>
          <button @click="copy(item)">Copy</button>
        </td>
        <td class="artist">{{item.artist}}</td>
        <td>{{item.album}}</td>
        <td>{{item.releaseDate}}</td>
        <td>{{item.context}}</td>
        <links :item="item"/>
      </tr>
    </table>
  </div>
</template>

<script>
import Vuex from "vuex";
import Links from "./Links";

export default {
  name: "ThePRP",
  props: {
    msg: { type: String, default: "non" }
  },
  components: { Links },

  mounted() {
    const localStorageLabel = "readed";
    const getLocalStorage = JSON.parse(localStorage.getItem(localStorageLabel));
    this.act_storage(getLocalStorage);
    if (getLocalStorage === null) {
      localStorage.setItem(localStorageLabel, JSON.stringify([]));
    }
    this.getPrp();
  },

  methods: {
    ...Vuex.mapActions(["act_dataPrp", "act_storage"]),

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
      this.getPrp();
    },

    getPrp() {
      fetch(
        "https://api.apify.com/v2/actor-tasks/qPvzsNfzXaYmhM8fn/runs/last/dataset/items?token=FJP765r6HtGXjJXYC9cmjnCco",
        {
          method: "get"
        }
      ).then(response => {
        if (response.ok) {
          response.json().then(res => {
            this.act_dataPrp(res);
          });
        }
      });
    }
  }
};
</script> 

<style lang="scss" scoped>
.artist {
  font-weight: 800;
  color: #fff;
}
</style>
