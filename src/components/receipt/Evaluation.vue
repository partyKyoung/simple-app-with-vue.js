<template>
  <li class="evaluation text-left position-relative mt-3 p-3" v-bind:class="{
    great: evaluation.status === 'great',
    'text-primary': evaluation.status === 'great',
    stupid: evaluation.status === 'stupid',
    'text-danger': evaluation.status ==='stupid'
  }">
    <span class="text-dark">
      {{evaluation.evaluation}}
    </span>
  </li>
</template>

<script>
  export default {
    name: 'evaluation',
    props: ['evaluation']
  }
</script>

<style scoped lang="scss">
  .evaluation {
    border: 1px solid #dee2e6;
    background-color: #FFF;    
    min-height: 20px;

    &:after {
      content: '';
      position: absolute;
      bottom: 5px;
      right: 10px;
      font-size: 1.5rem;
      opacity: 0.3;
    }
  }


  .great {
    &:after {
      content: '그뤠잇!';
    }
  }

  .stupid {
    &:after {
      content: '스튜핏!';
    }
  }  
</style>