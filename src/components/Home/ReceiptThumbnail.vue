<template>
  <li @click="moveReceipt(receipt.id)" class="receipt-item col-12 col-md-12 mb-3 rounded">
    <div class="receipt-item-content text-left p-3">
      <div class="mb-3 d-flex">
        <span class="receipt-item-title d-inline-block font-weight-bold text-right pr-3">지출 내역</span>
        <p className="float-left">{{receipt.spendingDetail}}</p>
      </div>
      <div class="d-flex">
        <span class="receipt-item-title d-inline-block font-weight-bold text-right pr-3">가격</span>
        <p className="float-left">{{getNumberWidthCommas(receipt.price)}}원</p>
      </div>
    </div>
  </li>
</template>

<script>
  import {numberWithCommas} from '../../utils/number';
  export default {
    name: 'receipt-thumbnail',
    props: ['receipt'],

    methods: {
      moveReceipt (id) {
        this.$router.push({ path: `receipt/${id}`})
      },
      getNumberWidthCommas (price) {
        return numberWithCommas(price);
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

    p {
      text-overflow:ellipsis;
      white-space:nowrap;
      word-wrap:normal;
      overflow:hidden;          
    }
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
