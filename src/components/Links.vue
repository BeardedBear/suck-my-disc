<template>
  <td>
    <tr>
      <td>
        <a
          class="link"
          target="_BLANK"
          :href="'https://www.sputnikmusic.com/search_results.php?genreid=0&amp;search_in=Bands&amp;search_text=' + item.artist"
        >Sputnik</a>
      </td>
      <td>
        <a class="link" target="_BLANK" :href="'https://fr.wikipedia.org/wiki/' + item.artist">Wiki</a>
      </td>
    </tr>
  </td>
</template>

<script>
export default {
  name: "Links",
  props: {
    item: {
      type: Object,
      required: false
    }
  }
};
</script> 


<style lang="scss" scoped>
.link {
  margin-left: 10px;
  border-bottom: 1px solid rgba(#32b153, 0.5);
  display: inline-block;
}
</style>






