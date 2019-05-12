<template>
  <div class="content">
    <table>
      <tr
        v-for="(item, id) in datas"
        :key="id"
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
        <td :class="'note' + item.note.replace('.', '')">{{item.note}}</td>
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
  name: "GroupList",
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
@for $i from 36 through 50 {
  .note#{$i} {
    background: hsla(100 * ($i/10 * 2), 50%, 40%, 1);
    color: hsla(100 * ($i/10 * 2), 50%, 65%, 1);
    padding: 0 10px;
    border-radius: 4px;
    font-weight: 800;
  }
}

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




