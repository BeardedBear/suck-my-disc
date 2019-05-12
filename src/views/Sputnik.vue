<template>
  <div>
    <div class="pageMenu">
      <button
        v-for="(item, id) in filters"
        class="pageMenu__item"
        :key="id"
        :class="{active: activeTab(item)}"
        @click.prevent="switchFilter(item)"
      >{{item.label}}</button>
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
.pageMenu {
  padding: 10px 30px;

  &__item {
    all: unset;
    display: inline-block;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    border-bottom: 3px solid rgba(white, 0.1);
    color: rgba(white, 0.3);

    &:hover {
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
