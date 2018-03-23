<template>
  <div>
    <div class="game-home">
      <h2>게임 정발 현황</h2>
      <div class="mt-3 mb-3">
        <input 
          class='form-control'
          placeholder="게임 제목 입력 후 Enter"
          type="text"
          v-model="gameTitle"
          @keydown="getGameData"
        />          
      </div>
      <game-list :gameList="gameList"></game-list>
    </div>      
  </div>
</template>

<script>
  import GameList from '../../components/game/GameList.vue'
  import { getGame } from '../../utils/gameApi';
  
  const ENTER = 13;

  function combinedGameList (gameList) {
    let jsonGameList = [];
    
    if (!gameList) {
      return [];
    }

    for (let game of gameList) {
      jsonGameList.push({
        gameTitle: game.children ? game.children[0].innerHTML : '',
        givenrate: game.children ? game.children[4].innerHTML : '', 
        ratedDate: game.children ? game.children[6].innerHTML : '',
      })
    }
    
    return jsonGameList;
  }

  export default {
    name: 'game-home',
    components: {GameList},
    methods: {
      getGameData (event) {
        if (!event.keyCode || event.keyCode !== ENTER) {
          return;
        }
   
        getGame(this.gameTitle).then((data) => {
          this.gameList = combinedGameList(data);
        }).catch();
      }
    },
    data () {
      return {
        gameTitle: '',
        gameList: []
      }   
    } 
  }
</script>

<style scoped>

</style>