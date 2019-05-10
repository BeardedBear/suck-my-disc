<template>
  <div class="content">
    <table v-if="this.$store.state.data">
      <tr
        v-for="item in this.$store.state.data"
        :key="item.id"
        :class="[{readed: isReaded(item.id)}, {futur: isFutur(item.releaseDateRaw)}, {current: isCurrent(item.releaseDateRaw)}]"
      >
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

    isFutur(date) {
      let currentDate = Date.parse(new Date());
      if (currentDate <= date) {
        return true;
      }
    },

    isCurrent(date) {
      let currentDate = Date.parse(new Date());
      if (date <= currentDate && date >= currentDate - 84600000 * 6) {
        return true;
      }
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
            const sputnikUrl =
              "https://www.sputnikmusic.com/newreleases.php?t=";
            let route = this.$route.name;
            let getData = param => {
              this.act_dataSputnik({
                filteredObject: res.filter(
                  item => item.context === sputnikUrl + param
                )
              });
            };

            switch (route.toLowerCase()) {
              case "all":
                getData("0");
                break;
              case "altrock":
                getData("21");
                break;
              case "electro":
                getData("58");
                break;
              case "hiphop":
                getData("4");
                break;
              case "jazz":
                getData("7");
                break;
              case "metal":
                getData("1");
                break;
              case "pop":
                getData("14");
                break;
              case "punk":
                getData("3");
                break;
              case "rock":
                getData("30");
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

.futur {
  background: #442424;
}

.current {
  background: #00800021;
}

.artist {
  font-weight: 800;
  color: #fff;
}
</style>


