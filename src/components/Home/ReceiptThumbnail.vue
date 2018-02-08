<template>
  <li class="receipt-item float-left">
    <p>{{receipt.target}}</p>
    <p>가격: {{receipt.price}}원</p>
  </li>
</template>

<script>
export default {
  name: 'receipt-thumbnail',
  props: ['receipt']
}
</script>

<style scoped>
  .receipt-item {
    width: 25%;
  }
</style>
