<template>
  <div id="edit">

<el-dialog
  title="提示"
  :visible.sync="currentactive"
  width="40%"
  >
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click='editchange()'>取 消</el-button>
    <el-button type="primary" @click='editchange()'>确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentactive:this.ceditactive,
      };
    },
    props:{
      ceditactive:{
        type:Boolean
      }
    },
    methods: {
      editchange()
      {
        this.$emit('ceditactive',false);
      }
    },
    
    watch: {
      ceditactive:function(val)
      {
        console.log('val的打印')
        console.log(val);
        this.currentactive=val
      },
       mounted: function () {
      console.log(this.currentactive)
      console.log(this.ceditactive)
  },
    },
  }     
</script>

<style>

</style>