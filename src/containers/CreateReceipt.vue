<template>
  <div>
    <form id="receiptForm" v-on:submit.prevent="sendPost" class="col-xl-6 col-lg-8 mx-auto">
      <div class="form-group row">
        <label class="col-3 col-form-label text-md-right pl-0 pr-0 pr-md-4">지출 내역</label>
        <div class="col-6 px-0 pl-1 p-md-0">
          <input 
            class='form-control'
            placeholder="지출 내역"
            type="text"
            v-model="spendingDetail"
          />
          <div class="invalid-feedback text-danger" >오류 텍스트</div>
        </div>  
      </div>
      <div class="form-group row">
        <label class="col-3 col-form-label text-md-right pl-0 pr-0 pr-md-4">금액</label>
        <div class="col-6 px-0 pl-1 p-md-0">
          <input 
            class='form-control'
            placeholder="금액"
            type="text"
            v-model="price"
          />
          <div class="invalid-feedback text-danger">오류 텍스트</div>
        </div>  
      </div>
       <div class="form-group row">
        <label class="col-3 col-form-label text-md-right pl-0 pr-0 pr-md-4">설명</label>
        <div class="col-6 px-0 pl-1 p-md-0">
          <textarea 
            class='form-control'
            v-model="description"
          />
          <div class="invalid-feedback text-danger">오류 텍스트</div>
        </div>  
      </div>           
    </form>
    <button type="submit">영수증 제출</button>
  </div>
</template>

<script>
import {writeReceipt} from '../utils/firebase'

export default {
  methods: {
    sendPost: () => {
      const spendingDetail = this.spendingDetail;
      const price = this.price;
      const description = this.description;

      console.log(spendingDetail);

     writeReceipt(spendingDetail, price, description);
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
