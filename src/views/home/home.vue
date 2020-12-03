<template>
<div id="home">
  <div class="show_all">

    <div class="shuju_div">
      <span id="yesmes">昨日数据</span>
        <yesboxs></yesboxs>
    </div>
  </div>

<div class="echarts">
  <span class="changespan"> 变化趋势</span>
  <echarts></echarts> 
</div>
</div>
 
</template>

<script>
import echarts from '../tubiao/echarts'
import yesboxs from './home_child/yesboxs'

  
export default {
    name:'home',
    data() {
      return {
      
    
      }
    },
    components:{
      echarts,
     yesboxs 

          }
   
}
</script>

<style>
#home{
  margin-top: -50px;
}
.span_div{
  height: 20px;
  margin-bottom: 40px;

}
#yesmes{

  font-size: 20px;
  color: rgba(128, 12, 12, 0.466);
  font-weight: 1000;
}
.shuju_div{
  background-color: white;
  padding: 10px;
}

.changespan{
  font-size:20px ;
  font-weight: 1000;
  color:  rgba(128, 12, 12, 0.466);
}
.echarts{
  margin-top:10px ;
  padding: 20px;
  background-color: white;
}
</style>