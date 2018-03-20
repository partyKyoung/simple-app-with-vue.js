<template>
  <div>
    <div class="clearfix">
      <div class="float-left">
        <h3>유저 1</h3>
        <div className="form-group">
          <label>닉네임</label>
          <input 
            class='form-control'
            placeholder="닉네임"
            type="text"
            v-model="user1"
          />          
        </div>
      </div>
      <div class="float-left">
        <h3>유저 2</h3>
        <div className="form-group">
          <label>닉네임</label>
          <input 
            class='form-control'
            placeholder="닉네임"
            type="text"
            v-model="user2"
          />          
        </div>     
      </div>
    </div>
  <div className="text-center">
    <button type="button" className="btn btn-primary">비교하기</button>
  </div>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user1: '',
        user2: ''
      }   
    } 
  }
</script>

<style scoped>

</style>