<template>
<div>
  <el-avatar class="userimg" :size="60"   :src="src"></el-avatar>
</div>

</template>

<script>
export default {
   
   data() {
     return {
       src:this.$store.state.img
     }
   },
    
  }
  </script>

<style>
.userimg{
  display: block;
  height: 100%;
  width: 100%;
}
</style>