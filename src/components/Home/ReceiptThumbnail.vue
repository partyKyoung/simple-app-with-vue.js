<template>
  <li class="receipt-item float-left">
    테스트
  </li>
</template>

<script>
  export default {
    name: 'receipt-thumbnail',
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

<style scoped>

</style>