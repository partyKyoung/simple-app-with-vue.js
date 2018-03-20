<template>
  <div class="receipt-list">
    <receipt-header></receipt-header>
    <section class="container pt-3">
      <router-view/>
    </section>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  components: {'receipt-header': Header},
  name: 'App'
}
</script>
<style scoped>
  .receipt-list {
    color: #2c3e50;
  }
</style>
