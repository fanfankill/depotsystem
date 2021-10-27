<template>
  <div class="bigh">

      <h3 class="mytitle"></h3>
     <div class="showdialog">
          <fan-btn @click="show" type="text">
    点击我
  </fan-btn>
     </div>
 


  <fan-dialog
  :before-close="logsome" 
  :visible.sync="iskan"
  title="好心提醒"
  width="30%">

    写代码真不容易
    <span slot="footer">
       <fan-btn @click="iskan=false"   :visible="false">取消</fan-btn>
       <div class="middlemargin"></div>
      <fan-btn type="primary" @click="iskan=false">确认</fan-btn>
    </span>
  </fan-dialog>

  </div>
</template>

<script>
import {mymixin} from './mixin'
export default {
    data() {
        return {
             iskan:false,
             testtex:'mytest',
             message:'xixi',
            

           
        }
    },
    
    mixins:[mymixin],
    once:{
      logsome:function(){
        console.log('sdsd');
      }
    },
    methods:{
        show()
        {
            this.iskan=!this.iskan
          
        },
        logsome(){
          this.messageBox('我是关闭前的回调函数','success')
        },
      
    },
    
    filters:{
        test:function (value) {
          console.log(value);
          return value+'why'
      }
    },
    mounted(){
      this.$forceUpdate()
    },
 

  
}
</script>

<style scoped>
.mytitle{
    margin: 55px 0 20px 5%;
    font-weight: 400;
    color: #1f2f3d;
}
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
  width: 80%;
  margin: auto;
  height: 80px;
  border: 1px solid gainsboro;
  display: flex;
  justify-content: center;
  align-content: center;
}

</style>