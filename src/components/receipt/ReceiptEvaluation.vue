<template>
  <div>
    총평: :)
  </div>
</template>

<script>
  import {getReceiptEvaluation} from '../../utils/firebase'

  export default {
    name: 'receipt-evaluation',
    props: ['id'],
    created () {
      const id = this.id;

      getReceiptEvaluation(id).then((data) => {
        console.log(data.val());

      }).catch((err) => {
        console.error(err);
      });
    }
  }
</script>

<style scoped>

</style>