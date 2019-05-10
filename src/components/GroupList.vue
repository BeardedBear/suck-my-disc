<template>
  <div class="content">
    <table>
      <tr
        v-for="(item, i) in datas"
        :key="i">
        <td>
          <button>OK</button>
        </td>
        <td>
          <button>Copy</button>
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

export default {
  name: "Layout",
  components: { Links },
  props: {
    datas: {
      type: Array,
      default: () => []
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


