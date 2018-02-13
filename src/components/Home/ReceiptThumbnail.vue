<template>
  <li @click="moveReceipt(receipt.key)" class="receipt-item col-12 col-md-12 mb-3 rounded">
    <div class="receipt-item-content text-left p-3">
      <p class="mb-3"><span class="d-inline-block font-weight-bold receipt-item-title">지출 내역</span>{{receipt.spendingDetail}}</p>
      <p><span class="d-inline-block font-weight-bold receipt-item-title">가격</span>{{receipt.price}}원</p>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'receipt-thumbnail',
    props: ['receipt'],

    methods: {
      moveReceipt (key) {
        this.$router.push({ path: `receipt/${key}`})
      }
    }
  }
</script>

<style scoped lang="scss">
  .receipt-item-content {
    border: 1px solid #dee2e6;
    background-color: #FFF;
    height: 80px;
    padding-right: 16px;
  }

  .receipt-item {
    &:nth-last-of-type {
      padding: 0
    }
  }

  .receipt-item-title {
    width: 100px;
  }
</style>
