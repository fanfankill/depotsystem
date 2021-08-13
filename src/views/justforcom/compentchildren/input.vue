<template>
  <div>
      <h2>输入框</h2>

      <div class="showdiv">
        <span  class="showtitle">简单的双向绑定</span>
          <fan-input v-model="myvalue" placeholder="请输入内容"></fan-input>
          <div id="borderdiv"></div>
     
      </div>
           
      <div class="showdiv">
          <span class="showtitle">禁用状态</span>
          <fan-input v-model="myvalue2" placeholder="请输入内容" disabled></fan-input>
      </div>



       <div class="showdiv">
           <span class="showtitle">仅可读</span>
          <fan-input v-model="myvalue4" placeholder="请输入内容" readonly ></fan-input>
      </div>


         <div class="showdiv">
           <span class="showtitle">聚焦事件</span>
          <fan-input v-model="myvalue5" placeholder="点击我" @focus="log" ></fan-input>
      </div>

       <div class="showdiv">
           <span class="showtitle">失焦事件</span>
          <fan-input v-model="myvalue5" placeholder="点击我" @blur="lose" ></fan-input>
      </div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            myvalue:'fanfan',
            myvalue2:'被禁用了',
            myvalue3:'',
            myvalue4:'自带属性',
            myvalue5:''
        }
    },
     methods: {
        log(){
           this.messageBox('我聚焦了','success')
        },
        lose(){
           this.messageBox('我失焦了','success')
        }
    },
    watch:{
        myvalue(val){
            this.messageBox(val,'success')
          
        }
    },
   
}
</script>

<style scoped>
/**margin盒子 */
#borderdiv{
  width: 100%;
  height: 20px;
}
.showtitle{
    font-size:18px ;
    display: inline-block;
    margin-bottom: 20px;
}

.showdiv{
  margin-top: 80px;
  margin-bottom: 20px;
  width:40%;

  
}
</style>