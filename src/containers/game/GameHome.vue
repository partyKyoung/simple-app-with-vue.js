<template>
  <div>
    <div class="game-home">
      <h2>게임 정발 현황</h2>
      <div className="mt-3 mb-3">
        <input 
          class='form-control'
          placeholder="게임 제목 입력"
          type="text"
          v-model="gameTitle"
        />          
      </div>
    </div>
    <div class="text-center">
      <button type="button" @click="getGameData()" className="btn btn-primary">비교하기</button>
    </div>    
    <div>
      
    </div>
  </div>
</template>

<script>
  import { getGame  } from '../../utils/gameApi';
  
  function combinedGameList (gameList) {
    let jsonGameList = [];
    
    if (!gameList) {
      return [];
    }

    for (let game of gameList) {
      jsonGameList.push({
        gameTitle: game.children ? game.children[0].innerHTML : '',
        ratedDate: game.children ? game.children[6].innerHTML : '',
      })
    }
    
    return jsonGameList;
  }

  export default {
    methods: {
      getGameData () {
        getGame(this.gameTitle).then((data) => {
          console.log(combinedGameList(data));
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