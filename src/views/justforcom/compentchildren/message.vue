<template>
  <div class="bigh">
     
     <div class="showdialog">
          <fan-btn @click="show" type="text">
    点击我
  </fan-btn>
     </div>
  

  <fan-message 
  :visible.sync="iskan"
  title="好心提醒"
  width="30%">

    写代码真不容易
    <span slot="footer">
       <fan-btn @click="iskan=false"   :visible="false">取消</fan-btn>
       <div class="middlemargin"></div>
      <fan-btn type="primary" @click="iskan=false">确认</fan-btn>
    </span>
  </fan-message>

  </div>
</template>

<script>
export default {
    data() {
        return {
             iskan:false
        }
    },
    methods:{
        show()
        {
            this.iskan=!this.iskan
        }
    }
}
</script>

<style scoped>
.bigh{
  height: 2000px;
  width: 100%;
}
.middlemargin{
  display: inline-block;
  width: 20px;
  height: 10px;
}
.showdialog{
  width: 100%;
  height: 80px;
  border: 1px solid gainsboro;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>