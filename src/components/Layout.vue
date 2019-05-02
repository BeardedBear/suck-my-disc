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
    ...Vuex.mapActions(["act_dataSputnik", "act_storage"]),

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
            this.act_dataSputnik(res);
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
