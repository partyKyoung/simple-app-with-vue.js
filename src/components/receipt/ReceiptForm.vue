<template>
  <div class="mt-3">
    <div class="clearfix">
      <div class="input-group float-left w-50">
        <div class="input-group-prepend">
          <div class="input-group-text">
          <input type="radio" v-model="status" v-bind:value="'great'"/>
          </div>
        </div>
        <label for="great" class="form-control">그뤠잇</label>
      </div>    
      <div class="input-group float-left w-50">
        <div class="input-group-prepend">
          <div class="input-group-text">
          <input type="radio" v-model="status" v-bind:value="'stupid'"/>
          </div>
        </div>
        <label for="stupid" class="form-control">스튜핏</label>
      </div>   
    </div>     
    <div class="form-group row ml-0 mr-0 mt-3 mb-3">
      <label class="col-2 col-form-label text-md-right pl-0 pr-0 pr-md-4">평가</label>
      <div class="col-10 px-0 pl-1 p-md-0">
        <textarea 
          class="form-control w-100"
          v-model="evaluation"
        />
      </div>  
    </div> 
    <button class="btn btn-primary" @click="sendPost()">입력하기</button>
  </div>
</template>

<script>
  import { updateReceipt, writeReceiptEvaluation } from '../../utils/firebase';
  
  export default {
    name: 'receipt-form',
    props: ["receipt", "id"],
    methods: {
      sendPost () {
        const id = this.id;
        const status = this.status;
        const evaluation = this.evaluation;
        const receipt = this.receipt;

        Promise.all([
          updateReceipt(id, status, evaluation, receipt), 
          writeReceiptEvaluation(id, status, evaluation)
        ]).then((data) => { 
          alert("등록 되었습니다.");

          this.evaluation = '';
          this.$parent.$refs.receiptEvaluation.getReceiptEvaluations();

        }).catch((err) => {
          alert('등록에 실패하였습니다. 잠시 후 다시 시도해주세요.');

          console.error(err);
        });
      }
    },
    data () {
      return {
        status: 'great',
        evaluation: ''
      }
    }
  }
</script>

<style scoped>

</style>