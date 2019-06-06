<template>
  <div class="sputnikLayout">
    <div class="pageMenu Scrollable">
      <div class="Scrollable__target">
        <h1 class="genreTitle">Main genres</h1>
        <button
          v-for="(item, id) in filters"
          class="pageMenu__item"
          :key="id"
          :class="{active: activeTab(item)}"
          @click.prevent="switchFilter(item)"
        >{{item.label}}</button>
        <h1 class="genreTitle">Sub genres</h1>
        <button
          v-for="(item, id) in filtersSub"
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
      filters: [
        {
          label: "All",
          slot: "all",
          param: "0"
        },
        {
          label: "Alternative Rock",
          slot: "altrock",
          param: "21"
        },
        {
          label: "Electronic",
          slot: "electro",
          param: "58"
        },
        {
          label: "Hip-Hop",
          slot: "hiphop",
          param: "4"
        },
        {
          label: "Jazz",
          slot: "jazz",
          param: "7"
        },
        {
          label: "Metal",
          slot: "metal",
          param: "1"
        },
        {
          label: "Pop",
          slot: "pop",
          param: "14"
        },
        {
          label: "Punk",
          slot: "punk",
          param: "3"
        },
        {
          label: "Rock",
          slot: "rock",
          param: "30"
        }
      ],
      filtersSub: [
        {
          label: "Ambient",
          slot: "ambient",
          param: "33"
        },
        {
          label: "Americana",
          slot: "americana",
          param: "29"
        },
        {
          label: "Black Metal",
          slot: "blackmetal",
          param: "47"
        },
        {
          label: "Blues",
          slot: "blues",
          param: "20"
        },
        {
          label: "Classical",
          slot: "classical",
          param: "17"
        },
        {
          label: "Country",
          slot: "country",
          param: "25"
        },
        {
          label: "Death Metal",
          slot: "deathmetal",
          param: "11"
        },
        {
          label: "Doom",
          slot: "doom",
          param: "34"
        },
        {
          label: "Dream Pop",
          slot: "dreampop",
          param: "36"
        },
        {
          label: "Drone",
          slot: "drone",
          param: "37"
        },
        {
          label: "Emo",
          slot: "emo",
          param: "16"
        },
        {
          label: "Experimental",
          slot: "experimental",
          param: "43"
        },
        {
          label: "Folk",
          slot: "folk",
          param: "10"
        },
        {
          label: "Funk",
          slot: "funk",
          param: "8"
        },
        {
          label: "Gothic",
          slot: "gothic",
          param: "86"
        },
        {
          label: "Grind",
          slot: "grind",
          param: "61"
        },
        {
          label: "Hard Rock",
          slot: "hardrock",
          param: "95"
        },
        {
          label: "Hardcore",
          slot: "hardcore",
          param: "55"
        },
        {
          label: "Heavy Metal",
          slot: "heavymetal",
          param: "82"
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
        },
        {
          label: "Indie Rock",
          slot: "indierock",
          param: "49"
        },
        {
          label: "Industrial",
          slot: "industrial",
          param: "56"
        },
        {
          label: "Math Rock",
          slot: "mathrock",
          param: "93"
        },
        {
          label: "Melodic Deth Metal",
          slot: "melodicdeathmetal",
          param: "173"
        },
        {
          label: "Metalcore",
          slot: "metalcore",
          param: "26"
        },
        {
          label: "Noise Rock",
          slot: "noiserock",
          param: "98"
        },
        {
          label: "Nu-Metal",
          slot: "numetal",
          param: "28"
        },
        {
          label: "Pop Punk",
          slot: "poppunk",
          param: "12"
        },
        {
          label: "Pop Rock",
          slot: "poprock",
          param: "54"
        },
        {
          label: "Post Hardcore",
          slot: "posthardcore",
          param: "59"
        },
        {
          label: "Post Metal",
          slot: "postmetal",
          param: "38"
        },
        {
          label: "Post Punk",
          slot: "postpunk",
          param: "52"
        },
        {
          label: "Post Rock",
          slot: "postrock",
          param: "6"
        },
        {
          label: "Power Metal",
          slot: "powermetal",
          param: "40"
        },
        {
          label: "Progressive Metal",
          slot: "progressivemetal",
          param: "15"
        },
        {
          label: "Progressive Rock",
          slot: "progressiverock",
          param: "23"
        },
        {
          label: "Psychedelic",
          slot: "psychedelic",
          param: "18"
        },
        {
          label: "Shoegaze",
          slot: "shoegaze",
          param: "35"
        },
        {
          label: "Sludge Metal",
          slot: "sludgemetal",
          param: "66"
        },
        {
          label: "Stoner Rock",
          slot: "stonerrock",
          param: "65"
        },
        {
          label: "Trash Metal",
          slot: "thrashmetal",
          param: "39"
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
  background-color: #ffffff1c;
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
    padding: 7px 20px;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    text-align: left;
    background: none;
    border: 0;
    outline: 0;
    color: rgba(white, 0.3);

    &:hover {
      background: #000;
      color: rgba(white, 0.5);
      border-color: rgba(white, 0.3);
    }

    &.active {
      border-color: #c93b57;
      color: #c93b57;
    }
  }
}
</style>
