<template>
 <div>
      <el-container>
  <el-aside width="250px" >
<div class="main_mes_show">
   
     <div class="img_show">
        <div class="img_img">
          <tou-xiang></tou-xiang>
        </div>
     </div>
      
</div>
      
      <ce-bian></ce-bian>
  </el-aside>

  <el-container>

     <el-header height='100px'>  
       <hea-der></hea-der>
    </el-header>

    <el-main>
      <div class='main_contain'>
         <div class="main_main_show">
           <keep-alive>
           <router-view></router-view>
         </keep-alive>
         </div>
      </div>
    </el-main>

    <el-footer>底部</el-footer>
  </el-container>

</el-container>
 </div>
</template>

<script>

import CeBian from './cebian'
import TouXiang from '../usermes/touxiang'
import HeaDer from '../head/head'


export default {
    name:'MainView',
    components:{
        CeBian,
        TouXiang,
        HeaDer
       
     

    }
}
</script>

<style>

.main_mes_show{
  width: 100%;
  height: 100px;

  background-color:gainsboro
}
/*对展示区域高度固定 */
.el-main {
  height: 600px;
    background-color: #e9eef3;
    color: #333;
    /* text-align: center; */
    /*这个很重要 */
    line-height: 20px !important;
}
.img_show{
  display: flex;
  height: 100px;
  width: 200px;

  margin: auto;
}
.img_img{
  width: 60px;
  height: 60px;
   flex:.1;
  margin: auto;

}


.message_show{
  height: 19px;
  width: 100px;
  background-color: blueviolet;
  
  position: absolute;
  right: 0px;
  top: 30px;
}

.main_contain{
  height: 560px;

}
.main_main_show{

  padding:40px ;
}

.el-header, .el-footer {
    background-color:cornflowerblue;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>