<template>
  <div>
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
    <div class="mt-3 mb-3">
      <textarea v-model="evaluation"/>
    </div>
    <button @click="sendPost()">입력하기</button>
  </div>
</template>

<script>
  import { updateReceipt } from '../../utils/firebase';
  
  export default {
    name: 'receipt-form',
    props: ["receipt", "id"],
    methods: {
      sendPost () {
        const id = this.id;
        const status = this.status;
        const evaluation = this.evaluation;
        const receipt = this.receipt;

        updateReceipt(id, status, evaluation, receipt).then(() => {
          alert('등록 되었습니다.');

        }).catch((err) => {
        alert('등록에 실패하였습니다. 잠시 후 다시 시도해주세요.');

        console.error(err)          
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