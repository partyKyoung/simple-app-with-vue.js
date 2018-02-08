<template>
  <div class="home">
    <h1>고독한 김생민 In Web</h1>
    <h2>돈은 안쓰는 것이다.</h2>
    <div>
      <button>입력하기</button>
    </div>
    <ul class="receipt-list clearfix p-0">

    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      list: [
        {key: 1, target: '옹아리 인형', status: 'great', price: 30000}, 
        {key: 2, target: '서피스 4', status: 'great', price: 1560000}, 
        {key: 3, target: '배고프당', status: 'great', price: 100}, 
        {key: 4, target: '스타벅스 돌체라떼', status: 'great', price: 6500}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .receipt-list {
    width: 100%;
  }

  .receipt-item {
    width: 25%;
  }
</style>
