<template>
  <div class="sputnikLayout">
    <div class="pageMenu Scrollable">
      <div class="Scrollable__target">
        <h1 class="genreTitle">Metal</h1>
        <button
          v-for="(item, id) in filtersMetal"
          class="pageMenu__item"
          :key="id"
          :class="{active: activeTab(item)}"
          @click.prevent="switchFilter(item)"
        >{{item.label}}</button>

        <h1 class="genreTitle">Rock/Hard/Blues</h1>
        <button
          v-for="(item, id) in filtersRock"
          class="pageMenu__item"
          :key="id"
          :class="{active: activeTab(item)}"
          @click.prevent="switchFilter(item)"
        >{{item.label}}</button>

        <h1 class="genreTitle">Punk/Hardcore</h1>
        <button
          v-for="(item, id) in filtersPunkHardcore"
          class="pageMenu__item"
          :key="id"
          :class="{active: activeTab(item)}"
          @click.prevent="switchFilter(item)"
        >{{item.label}}</button>

        <h1 class="genreTitle">Pop/Folk</h1>
        <button
          v-for="(item, id) in filtersPopFolk"
          class="pageMenu__item"
          :key="id"
          :class="{active: activeTab(item)}"
          @click.prevent="switchFilter(item)"
        >{{item.label}}</button>

        <h1 class="genreTitle">La drogue</h1>
        <button
          v-for="(item, id) in filtersSub"
          class="pageMenu__item"
          :key="id"
          :class="{active: activeTab(item)}"
          @click.prevent="switchFilter(item)"
        >{{item.label}}</button>

        <h1 class="genreTitle">Le reste</h1>
        <button
          v-for="(item, id) in filters"
          class="pageMenu__item"
          :key="id"
          :class="{active: activeTab(item)}"
          @click.prevent="switchFilter(item)"
        >{{item.label}}</button>
      </div>
    </div>
    <GroupList :datas="getFilterData"/>
  </div>
</template>


<script>
import GroupList from "@/components/GroupList";
import { mapActions } from "vuex";

export default {
  components: {
    GroupList
  },

  data: () => {
    return {
      filter: "0",
      filtersMetal: [
        {
          label: "Black",
          slot: "black",
          param: "47"
        },
        {
          label: "Death",
          slot: "death",
          param: "11"
        },
        {
          label: "Doom",
          slot: "doom",
          param: "34"
        },
        {
          label: "Grind",
          slot: "grind",
          param: "61"
        },
        {
          label: "Gothic",
          slot: "gothic",
          param: "86"
        },
        {
          label: "Heavy",
          slot: "heavy",
          param: "82"
        },
        {
          label: "Metal (Global)",
          slot: "metal",
          param: "1"
        },
        {
          label: "Metalcore",
          slot: "metalcore",
          param: "26"
        },
        {
          label: "Post",
          slot: "postmetal",
          param: "38"
        },
        {
          label: "Melodic Death",
          slot: "melodicdeath",
          param: "173"
        },
        {
          label: "Nu",
          slot: "nu",
          param: "28"
        },
        {
          label: "Power",
          slot: "power",
          param: "40"
        },
        {
          label: "Progressive",
          slot: "progressivemetal",
          param: "15"
        },
        {
          label: "Sludge",
          slot: "sludge",
          param: "66"
        },
        {
          label: "Trash",
          slot: "thrash",
          param: "39"
        }
      ],
      filtersRock: [
        {
          label: "Alternative",
          slot: "alternative",
          param: "21"
        },
        {
          label: "Blues (Global)",
          slot: "blues",
          param: "20"
        },
        {
          label: "Hard",
          slot: "hard",
          param: "95"
        },
        {
          label: "Indie",
          slot: "indie",
          param: "49"
        },
        {
          label: "Math",
          slot: "math",
          param: "93"
        },
        {
          label: "Noise",
          slot: "noise",
          param: "98"
        },
        {
          label: "Pop",
          slot: "pop",
          param: "54"
        },
        {
          label: "Post",
          slot: "postrock",
          param: "6"
        },
        {
          label: "Progressive",
          slot: "progressiverock",
          param: "23"
        },
        {
          label: "Rock (Global)",
          slot: "rock",
          param: "30"
        },
        {
          label: "Shoegaze",
          slot: "shoegaze",
          param: "35"
        },
        {
          label: "Stoner",
          slot: "stoner",
          param: "65"
        }
      ],
      filtersPunkHardcore: [
        {
          label: "Emo",
          slot: "emo",
          param: "16"
        },
        {
          label: "Hardcore",
          slot: "hardcore",
          param: "55"
        },
        {
          label: "Pop Punk",
          slot: "poppunk",
          param: "12"
        },
        {
          label: "Post Hardcore",
          slot: "posthardcore",
          param: "59"
        },
        {
          label: "Post Punk",
          slot: "postpunk",
          param: "52"
        },
        {
          label: "Punk (Global)",
          slot: "punk",
          param: "3"
        }
      ],
      filtersPopFolk: [
        {
          label: "Pop (Global)",
          slot: "pop",
          param: "14"
        },
        {
          label: "Dream Pop",
          slot: "dreampop",
          param: "36"
        },
        {
          label: "Folk",
          slot: "folk",
          param: "10"
        },
        {
          label: "Indie Folk",
          slot: "indiefolk",
          param: "42"
        },
        {
          label: "Indie Pop",
          slot: "indiepop",
          param: "2"
        }
      ],
      filters: [
        {
          label: "All",
          slot: "all",
          param: "0"
        },
        {
          label: "Electronic",
          slot: "electro",
          param: "58"
        },
        {
          label: "Funk",
          slot: "funk",
          param: "8"
        },
        {
          label: "Jazz",
          slot: "jazz",
          param: "7"
        }
      ],
      filtersSub: [
        {
          label: "Ambient",
          slot: "ambient",
          param: "33"
        },
        {
          label: "Drone",
          slot: "drone",
          param: "37"
        },
        {
          label: "Experimental",
          slot: "experimental",
          param: "43"
        },
        {
          label: "Industrial",
          slot: "industrial",
          param: "56"
        },
        {
          label: "Psychedelic",
          slot: "psychedelic",
          param: "18"
        }
      ],
      checkUrl: "https://www.sputnikmusic.com/newreleases.php?t="
    };
  },

  methods: {
    switchFilter(name) {
      this.act_sputnikActiveTab(name.slot);
      this.filter = name.param;
    },

    activeTab(name) {
      if (name.slot === this.$store.state.sputnik.activeTab) return true;
    },

    ...mapActions(["act_dataSputnik", "act_sputnikActiveTab"])
  },

  computed: {
    getFilterData() {
      return this.$store.state.data.filter(
        item => item.context === this.checkUrl + this.filter
      );
    }
  },

  async beforeCreate() {
    await this.$store.dispatch("act_dataSputnik");
  }
};
</script>
 

<style lang="scss" scoped>
.genreTitle {
  color: #ffffff;
  margin: 0;
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  font-family: "Rock Salt", cursive;
  font-weight: normal;
}

.sputnikLayout {
  display: grid;
  grid-template-columns: 250px 1fr;
}

.pageMenu {
  border-right: 1px solid #ffffff1a;
  background-color: #0000001f;

  &__item {
    display: block;
    width: 100%;
    padding: 3px 20px;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    text-align: left;
    background: none;
    border: 0;
    outline: 0;
    color: rgba(white, 0.3);

    &:hover {
      color: rgba(white, 0.6);
    }

    &.active {
      color: #32b153;
    }
  }
}
</style>
