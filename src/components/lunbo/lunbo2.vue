<template>
    <div id="lunbo2">
 <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in imgs" :key="item">
     <img :src="item">
    </el-carousel-item>
  </el-carousel>
    </div>
   
</template>

<script>
export default {
        data() {
            return {
                imgs:[
                require('../../assets/img/img2/1.jpg'),
                require('../../assets/img/img2/2.jpg'),
                require('../../assets/img/img2/3.jpg'),
                require('../../assets/img/img2/4.jpg'),
            ],
            }
        },
}
</script>

<style>

  #lunbo2{
      width: 800px;
      margin: auto;
  }
  #lunbo2 img{
      width: 100%;
      height: 100%;
  }
</style>