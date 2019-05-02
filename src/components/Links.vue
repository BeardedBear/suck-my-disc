<template>
  <td>
    <tr>
      <td>
        <a
          target="_BLANK"
          :href="'https://www.sputnikmusic.com/search_results.php?genreid=0&amp;search_in=Bands&amp;search_text=' + item.artist"
        >Sputnik</a>
      </td>
      <td>
        <a target="_BLANK" :href="'https://fr.wikipedia.org/wiki/' + item.artist">Wiki</a>
      </td>
      <td>
        <a
          target="_BLANK"
          :href="'https://rateyourmusic.com/artist/' + item.artist.toLowerCase().replace(' ', '-')"
        >RYM -</a>
      </td>
      <td>
        <a
          target="_BLANK"
          :href="'https://rateyourmusic.com/artist/' + item.artist.toLowerCase().replace(' ', '_')"
        >RYM _</a>
      </td>
    </tr>
  </td>
</template>

<script>
export default {
  name: "Links",
  props: {
    item: { type: Object }
  }
};
</script> 

