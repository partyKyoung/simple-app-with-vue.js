<template>
  <div className="receipt">
    <div className="md-3">
      <h3 className="text-center">영수증</h3>
      <h4 className="text-left">지출 내역</h4>
      <div>{{receipt.spendingDetail}}</div>
      <h4 className="text-left">금액</h4>
      <div></div>
      <h4 className="text-left">설명</h4>
      <div></div>
    </div>
    <div>
      <button>평가 남기기</button>
      <div>
        <input type="option" value="great" />
        <input type="option" value="stupid" />
        <textarea />
      </div>
    </div>
    <div>
      <h3>평가</h3>
    </div>
  </div>
</template>

<script>
  import {getReceipt} from '../utils/firebase'

  export default {
    name: 'receipt',
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
        receipt: {}
      }
    }
  }
</script>

<style scoped lang='sass'>
.receipt {
  @media screen and (min-width: 768px) {
    background-color: #ddd;
  }
}
</style>
