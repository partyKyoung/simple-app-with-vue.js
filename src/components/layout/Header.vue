<template>
  <header class="header">
    <router-link to="/">
      <h1>고독한 김생민 in WEB</h1>
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'receipt-header'
  }
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #6799FF
}

h1 {
  color: #FFF;
  font-size: 1rem;
}
</style>