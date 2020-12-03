<template>
 <div id="all_boxs">
    <div id="top_mes">

     <div class="box_child" id="boxs_1">

        <span>昨日订单数</span>

        <i class="el-icon-s-order"></i>

        <div class="data_show">
            <span>{{yestodayorder}}</span>
        </div>
        
     </div>

      <div class="box_child" id="boxs_2">

          <span>昨日总收入</span>

        <i class="el-icon-shopping-cart-2"></i>

        <div class="data_show">
            <span>￥{{yestodaymoney}}</span>
        </div>

     </div>

      <div class="box_child" id="boxs_3">

          <span>昨日访问人数</span>

        <i class="el-icon-s-custom"></i>

        <div class="data_show">
            <span>{{yestodaypeople}}</span>
        </div>

     </div>
    </div>
    <div id="bottom_mes">
        <div>

        </div>
    </div>
 </div>
</template>

<script>

export default {
    data() {
        return {
            yestodayorder:15,
            yestodaymoney:200,
            yestodaypeople:25,
        }
    },
}
</script>

<style>
#top_mes{
    height: 280px;
    background-color: tomato;
}
/*大盒子处理 */
 .box_child{
     width: 200px;
     height: 180px;
     background-color: rgb(115, 191, 241);
     float: left;
     margin-top: 30px;
     margin-left: 30px;
 }
 
 #boxs_2{
     background-color: rgb(77, 235, 200);
 }

  #boxs_3{
     background-color: rgb(233, 190, 48);
 }
 /*文字处理 */
 .box_child span{
     display: block;
     margin-top: 15px;
     font-size: 18px;
     font-weight: 1000;
     color: grey;
 }
 /*icon图标处理 */
 .box_child i{
        margin-top: 20px;
        font-size: 50px;
        color: white;
 }
 .data_show span{
     margin-top:30px ;
     color: white;
     font-size: 25px;
 }
 #bottom_mes{
     width: 100%;
     height: 50px;
     background-color: violet;
 }
</style>