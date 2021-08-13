<template>
  <div>


 <h2>按钮</h2>
      
        <span >基本按钮</span>
        <div class="showbtn">
          <!-- 普通样式 -->
        <fan-btn  >fanfan</fan-btn>

        <fan-btn type="primary"  >fanfan</fan-btn>

         <fan-btn type="success"  >fanfan</fan-btn>

          <fan-btn type="danger">fanfan</fan-btn>  

         <fan-btn type="info">fanfan</fan-btn>

          <fan-btn type="warning">fanfan</fan-btn>  
        </div>

      <span>朴素按钮</span>
        <div class="showbtn">
          <!-- 朴素样式 -->
        <fan-btn >fanfan</fan-btn>

        <fan-btn type="primary" plain >fanfan</fan-btn>

         <fan-btn type="success"  plain>fanfan</fan-btn>

          <fan-btn type="danger" plain>fanfan</fan-btn>  

         <fan-btn type="info" plain>fanfan</fan-btn>

          <fan-btn type="warning" plain>fanfan</fan-btn>  
        </div>

    <span>半圆按钮</span>
        <div class="showbtn">
   <!--半圆样式  -->
      <fan-btn  round>fanfan</fan-btn>

        <fan-btn type="primary"  round>fanfan</fan-btn>

         <fan-btn type="success"  round>fanfan</fan-btn>

          <fan-btn type="danger" round>fanfan</fan-btn>  

         <fan-btn type="info" round>fanfan</fan-btn>

          <fan-btn type="warning" round>fanfan</fan-btn> 
        </div>
   <span>全圆按钮</span>
     <div class="showbtn">
          <!-- 全圆 --> 
             <fan-btn  icon="el-icon-search" circle></fan-btn>

             <fan-btn type="primary" icon="el-icon-edit" circle></fan-btn>

         <fan-btn type="success" icon="el-icon-check"  circle></fan-btn>

          <fan-btn type="danger" icon="el-icon-delete"  circle></fan-btn>  

         <fan-btn type="info" icon="el-icon-message" circle></fan-btn>

          <fan-btn type="warning" icon="el-icon-star-off"  circle></fan-btn> 
     </div>
      <span>禁用按钮</span>
     <div class="showbtn">
       <!-- 禁用 --> 
             <fan-btn disabled  @click="show">fanfan</fan-btn>

             <fan-btn type="primary" disabled>fanfan</fan-btn>

         <fan-btn type="success"  disabled>fanfan</fan-btn>

          <fan-btn type="danger"  disabled>fanfan</fan-btn>  

         <fan-btn type="info" disabled>fanfan</fan-btn>

          <fan-btn type="warning" disabled>fanfan</fan-btn> 
     </div>


      <span>其他按钮</span>
     <div class="showbtn">
       <fan-btn type="primary" disabled loading>加载中</fan-btn>
       <fan-btn type="primary" icon="el-icon-search">搜索</fan-btn>
<fan-btn type="primary">上传<i class="el-icon-upload el-icon--right"></i></fan-btn>
     </div>

    <span>尺寸按钮</span>
     <div class="showbtn">
       <fan-btn>fanfan</fan-btn>
         <fan-btn size="medius">fanfan</fan-btn>
           <fan-btn size="small">fanfan</fan-btn>
             <fan-btn size="mini">fanfan</fan-btn>

           
     </div>

  </div>
</template>

<script>
export default {
      methods:{
    show:function(){
      console.log('?');
    }
  }
}
</script>

<style scoped>
.showbtn{
  margin-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  width:99%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom:1px solid gainsboro ;
 
  /**换行 */
  flex-wrap: wrap;
}
.showbtn button{
  margin: 10px 10px 10px 10px ;
}

</style>