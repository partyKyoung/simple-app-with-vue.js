<template>
  <div class="receipt ml-auto mr-auto">
    <div class="row m-0 mt-3 mb-3">
      <h3 class="col-3 col-md-2 p-0 mb-3 font-weight-bold text-right">지출 내역</h3>
      <div class="col-9 col-md-10 p-0 mb-3">{{receipt ? receipt.spendingDetail : ''}}</div>
      <h3 class="col-3 col-md-2 p-0 mb-3 font-weight-bold text-right">금액</h3>
      <div class="col-9 col-md-10 p-0 mb-3">{{receipt ? receipt.price : ''}}원</div>
      <h3 class="col-3 col-md-2 p-0 font-weight-bold text-right">설명</h3>
      <div class="col-9 col-md-10 p-0 ">{{receipt ? receipt.description : ''}}</div>
    </div>
    <div class="mt-3 mb-3">
      <button class="btn btn-primary" @click="toggleForm()">{{isShowForm ? '접기' : '평가 남기기'}}</button>
      <receipt-form 
        v-if="isShowForm"
        :id="id"
        :receipt="receipt"
      ></receipt-form>
    </div>
    <receipt-evaluation
      :id="id"
      ref="receiptEvaluation"
    >
    </receipt-evaluation>
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
