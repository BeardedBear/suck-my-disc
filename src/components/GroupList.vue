<template>
  <div class="Scrollable">
    <div class="content Scrollable__target">
      <div class="releaseList">
        <div
          class="release"
          v-for="(item, id) in datas"
          :key="id"
          :class="[	
          {readed: isReaded(item.id)}, 	
          {futur: isFutur(item.releaseDateRaw)}, 	
          {current: isCurrent(item.releaseDateRaw)}	
        ]"
        >
          <div>
            <button @click="readed(item.id)">OK</button>
          </div>
          <div class="artist" @click="copy(item)">{{item.artist}}</div>
          <div>{{item.album}}</div>
          <div>{{item.releaseDate}}</div>
          <links :item="item"/>
        </div>
      </div>
    </div>
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

.releaseList {
  max-width: 1100px;
}

.release {
  display: grid;
  grid-template-columns: auto 1fr 1fr 0.3fr auto;
  padding: 5px 7px;
  grid-gap: 10px;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background: rgba(black, 0.2);
  }
}

.artist {
  font-weight: 800;
  color: #fff;
  cursor: pointer;
  transform-origin: 0%;
  transition: transform ease 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    &::after {
      content: "copié !";
      background: #32b153;
      font-size: 0.8rem;
      border-radius: 10px;
      padding: 0 10px 2px;
      color: white;
      margin-left: 7px;
    }
  }
}
</style>
