<template>
  <div class="receipt">
    <h3 class="text-center">영수증</h3>
    <div class="row m-0 mt-3 mb-3">
      <h4 class="col-12 col-md-3 mb-3">지출 내역</h4>
      <div class="col-12 col-md-9 mb-3">{{receipt.spendingDetail}}</div>
      <h4 class="col-12 col-md-3 mb-3">금액</h4>
      <div class="col-12 col-md-9 mb-3">{{receipt.price}}</div>
      <h4 class="col-12 col-md-3">설명</h4>
      <div class="col-12 col-md-9">{{receipt.description}}</div>
    </div>
    <div>
      <button @click="toggleForm()">평가 남기기</button>
      <receipt-form 
        v-if="isShowForm"
        :id="id"
        :receipt="receipt"
      ></receipt-form>
    </div>
    <receipt-evaluation
    :id="id"
    ></receipt-evaluation>
  </div>
</template>

<script>
  import ReceiptForm from '../components/receipt/ReceiptForm';
  import ReceiptEvaluation from '../components/receipt/ReceiptEvaluation';
  import {getReceipt} from '../utils/firebase'

  export default {
    name: 'receipt',
    components: {ReceiptForm, ReceiptEvaluation},
    methods: {
      toggleForm () {
        this.isShowForm = !this.isShowForm
      }
    },
    created () {
      getReceipt(this.$route.params.id).then((data) => {
        this.receipt = data.val();

      }).catch((err) => {
        console.error(err);
        alert('데이터를 불러오지 못하였습니다. 잠시후에 다시 시도해주세요.');

        this.$router.push({ path: '/'})
      });
    },
    data () {
      return {
        receipt: {},
        id: this.$route.params.id,
        isShowForm: false
      }
    }
  }
</script>

<style scoped lang='scss'>
.receipt {
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 75%;
  }
}
</style>
