<template>
  <div>
    <div class="pageMenu">
      <a class="pageMenu__item" @click.prevent="switchFilter('all')">All</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('altrock')">Alternative Rock</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('electro')">Electronic</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('hiphop')">Hip-Hop</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('jazz')">Jazz</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('metal')">Metal</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('punk')">Punk</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('pop')">Pop</a>
      <a class="pageMenu__item" @click.prevent="switchFilter('rock')">Rock</a>
    </div>
    <GroupList :datas="getFilterData" />
  </div>
</template>

<script>
import GroupList from '@/components/GroupList';
import {mapActions} from 'vuex';

export default {
  components: {
    GroupList
  },
  data: () => {
    return {
      filter: '0',
      filters: {
        "all": "0",
        "altrock": "21",
        "electro": "58",
        "hiphop": "4",
        "jazz": "7",
        "metal": "1",
        "pop":"14",
        "punk": "3",
        "rock": "30"
      },
      checkUrl: "https://www.sputnikmusic.com/newreleases.php?t="
    }
  },
  methods: {
    switchFilter(name) {
      this.filter = this.filters[name];
    },
    ...mapActions([
      'act_dataSputnik'
    ])
  },
  computed: {
    getFilterData() {
      return this.$store.state.data.filter(item => item.context === this.checkUrl + this.filter);
    }
  },
  async beforeCreate() {
      await this.$store.dispatch('act_dataSputnik')
  }
}
</script>
 
<style lang="scss" scoped>
.pageMenu {
  padding: 10px 30px;

  &__item {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 800;

    &.a-exact-active {
      background: #c93b57;
      color: #fff;
    }
  }
}
</style>
