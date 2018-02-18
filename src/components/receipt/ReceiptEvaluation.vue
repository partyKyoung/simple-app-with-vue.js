<template>
  <div>
    <h3 class="font-weight-bold mt-3 mb-3" v-bind:class="{ 
      'text-primary': status === 'great',
      'text-danger': status === 'stupid',
      'text-secondary': !status
    }">
      {{totalStatus}}
    </h3>
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
        let great = 0;
        let stupid =0;

        data.forEach((item) => {
          let evaluation = item.val();

          if (evaluation.status === 'great') {
            great += 1;
          } else {
            stupid += 1;
          }

          this.evaluationList.push(evaluation);    
        });

        if (great > stupid) {
          this.totalStatus = "그뤠잇!";
          this.status = "great";

        } else if (great < stupid) {
          this.totalStatus = "스튜핏!";
          this.status = "stupid";
        }

      }).catch((err) => {
        console.error(err);
      });
    },
    data () {
      return {
        evaluationList: [],
        totalStatus: '그뤠잇? 스튜핏?',
        status: ''

      }
    }
  }
</script>

<style scoped>
  .font-weight-bold {
    font-size: 1.5rem;
  }
</style>