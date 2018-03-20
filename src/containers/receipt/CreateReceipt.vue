<template>
  <div>
    <form id="receiptForm" class="ml-auto mr-auto">
      <div class="form-group row m-0 mb-3">
        <label class="col-3 col-form-label font-weight-bold text-right p-0">지출 내역<span class="text-danger">*</span></label>
        <div class="col-9 pl-3 pr-0">
          <input 
            class='form-control'
            placeholder="지출 내역"
            type="text"
            v-model="spendingDetail"
          />
        </div>  
      </div>
      <div class="form-group row m-0 mb-3">
        <label class="col-3 col-form-label font-weight-bold text-right p-0">금액<span class="text-danger">*</span></label>
        <div class="col-9 pl-3 pr-0">
          <input 
            class='form-control'
            placeholder="금액"
            type="number"
            v-model="price"
          />
        </div>  
      </div>
      <div class="form-group row m-0 mb-3">
        <label class="col-3 col-form-label font-weight-bold text-right p-0">설명</label>
        <div class="col-9 pl-3 pr-0">
          <textarea 
            class="form-control"
            v-model="description"
          />
        </div>  
      </div>           
    </form>
    <button type="button" class="btn btn-primary" @click="sendPost()">영수증 제출</button>
  </div>
</template>

<script>
import {writeReceipt} from '../../utils/firebase'

export default {
  methods: {
    sendPost () {
      const spendingDetail = this.spendingDetail;
      const price = this.price;
      const description = this.description;

      if (!spendingDetail || !price) {
        alert('필수 항목을 입력해주세요.');

        return;
      }

      writeReceipt(spendingDetail, price, description).then((key) => {
        alert('등록되었습니다.');

        this.$router.push({path: `receipt/${key}`})

      }).catch((err) =>{
        alert('등록에 실패하였습니다. 잠시 후 다시 시도해주세요.');

        console.error(err)
      });
    }
  },
  data () {
    return {
      spendingDetail: '',
      price: '',
      description: ''
    };
  },
  name: 'create-receipt'
}
</script>

<style scoped>
.div { color: #FFF }
</style>
