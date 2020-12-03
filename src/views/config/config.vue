<template>
  <div id="config">
    
      <div class="left_top_mes">
      <usermesshow></usermesshow>
      </div>

      <div id="right_mes">
        
        <div id="show_marquee">
          <boxs></boxs>
        </div>
      </div>
   
  </div>
    
</template>

<script>
import usermesshow from './configchild/usermesshow'
import boxs from './configchild/boxs'

export default {
    
    components:{
      usermesshow,
      boxs

    }
}
</script>

<style>
#config{
  position: relative;
  
  top: -40px;
}
 .left_top_mes{
    position: relative;
    top: 0px;
    left: 0px;
 }
 #right_mes{
   position:absolute;
   width: 720px;
   height: 430px;
   left: 380px;
   top: 0px;
   background-color: white;

 }


</style>