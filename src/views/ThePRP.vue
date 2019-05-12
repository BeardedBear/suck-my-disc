<template>
  <GroupList :datas="$store.state.data"/>
</template>

<script>
import GroupList from "@/components/GroupList";

export default {
  name: "ThePRP",
  components: { GroupList },

  async beforeCreate() {
    await this.$store.dispatch("act_dataPrp");
  }
};
</script> 
