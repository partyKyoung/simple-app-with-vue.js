<template>
  <div>
    총평: {{totalStatus}}
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
          let great = 0;
          let stupid =0;
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
        evaluationList: [],
        totalStatus: '그뤠잇? 스튜핏?',
      }
    }
  }
</script>

<style scoped>

</style>