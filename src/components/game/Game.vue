<template>
  <div class="text-left">
    <p>{{game.gameTitle}}</p>
    <span class="d-block mt-1">{{game.givenrate}}</span>
    <span class="d-block mt-1">등급분류일자: {{game.ratedDate}}</span>
  </div>
</template>

<script>
  export default {
    name:'game',
    props: ['game']
  }
</script>

<style scoped>

</style>