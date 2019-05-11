<template>
  <div class="content">
    <table>
      <tr
        v-for="item in datas"
        :key="item.id"
        :class="[	
          {readed: isReaded(item.id)}, 	
          {futur: isFutur(item.releaseDateRaw)}, 	
          {current: isCurrent(item.releaseDateRaw)}	
        ]"
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
import Links from "./Links";
import { mapActions } from "vuex";

export default {
  name: "Layout",
  components: { Links },

  props: {
    datas: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    ...mapActions(["act_storage", "act_dataSputnik"]),

    copy(text) {
      navigator.clipboard.writeText(text.artist);
    },

    readed(id) {
      this.act_storage(id);
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


