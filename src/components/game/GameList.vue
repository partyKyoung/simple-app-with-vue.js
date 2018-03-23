<template>
  <div v-if="isEmptyList">
    <span>데이터가 없습니다 :(</span>
  </div>
  <ul v-else class="mt-3 text-left">
    <li class="mt-3" v-for="(game, index) of gameList" :key=index>
      <game :game="game"></game>
    </li>
  </ul>
</template>

<script>
  import Game from './Game.vue'

  export default {
    name:'game-list',
    props: ['gameList'],  
    components: {Game},
    beforeUpdate() {
      const { length } = this.gameList;

      if (length > 0) {
        this.isEmptyList = false;
      } else {
        this.isEmptyList = true;
      }
    },
    data () {
      return {
        isEmptyList: false
      };
    }
  }
</script>