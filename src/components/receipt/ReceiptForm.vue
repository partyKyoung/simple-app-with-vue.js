<template>
  <div>
    <input type="radio" value="great" v-model="status"/>
    <label for="great">그뤠잇</label>
    <input type="radio" value="stupid" v-model="status"/>
    <label for="stupid">스튜핏</label>
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
    props: ["receipt", "key"],
    methods: {
      sendPost () {
        const key = this.key;
        const status = this.status;
        const evaluation = this.evaluation;

        updateReceipt(key, status, evaluation, receipt);
      }
    },
    data () {
      return {
        status: '',
        evaluation: ''
      }
    }
  }
</script>

<style scoped>

</style>