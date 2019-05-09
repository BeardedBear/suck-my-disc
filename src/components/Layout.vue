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
            const sputnikUrl = "https://www.sputnikmusic.com/newreleases.php";
            let route = this.$route.name.toLowerCase();
            let getData = param => {
              this.act_dataSputnik({
                filteredObject: res.filter(
                  item => item.context === sputnikUrl + param
                )
              });
            };

            switch (route) {
              case "all":
                getData("");
                break;
              case "altrock":
                getData("?t=21");
                break;
              case "electro":
                getData("?t=58");
                break;
              case "hiphop":
                getData("?t=4");
                break;
              case "jazz":
                getData("?t=7");
                break;
              case "metal":
                getData("?t=1");
                break;
              case "pop":
                getData("?t=14");
                break;
              case "punk":
                getData("?t=3");
                break;
              case "rock":
                getData("?t=30");
                break;
            }
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
