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
    console.log(this.$route);
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
            const sputnikUrl = "https://www.sputnikmusic.com/newreleases.php";

            this.act_dataSputnik({
              filteredObject: res.filter(item => item.context === sputnikUrl),
              param: "all"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=21"
              ),
              param: "altrock"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=58"
              ),
              param: "electro"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=4"
              ),
              param: "hiphop"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=7"
              ),
              param: "jazz"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=1"
              ),
              param: "metal"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=14"
              ),
              param: "pop"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=3"
              ),
              param: "punk"
            });
            this.act_dataSputnik({
              filteredObject: res.filter(
                item => item.context === sputnikUrl + "?t=30"
              ),
              param: "rock"
            });
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




.footer {
  background: blue;

  p {
    color: red;
  }
}
