<template>
  <div>
    총평: :)
  <ul>
    <evaluation 
      v-for="evaluation of evaluationList" 
      :key="evaluation.key"
      :evaluation="evaluation"
    >
    </evaluation>
  </ul>
  </div>
</template>

<script>
  import Evaluation from './Evaluation';
  import {getReceiptEvaluation} from '../../utils/firebase'

  export default {
    name: 'receipt-evaluation',
    props: ['id'],
    components: {Evaluation},
    created () {
      const id = this.id;

      getReceiptEvaluation(id).then((data) => {
        data.forEach((item) => {
        let evaluation = item.val();

        evaluation.key = item.key;

        this.evaluationList.push(evaluation);    
        });
      }).catch((err) => {
        console.error(err);
      });
    },
    data () {
      return {
        evaluationList: []
      }
    }
  }
</script>

<style scoped>

</style>