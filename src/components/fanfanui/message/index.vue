<template>

<div>
     <div @mousewheel.prevent class="fan-message-box__wrapper">
      <div class="fan-message-box">
          
      </div>
    
   
 </div >
 <div class="v-modal"></div>
</div>
</template>

<script >



export default {
    name:'FanMessage',

    
   
    
}
</script>

<style>


.fan-message-box__wrapper{
     z-index: 2148;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    text-align: center;
}
.v-modal {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: rgb(0, 0, 0);
}

.fan-message-box{
     z-index: 2148;
    display: inline-block;
    width: 420px;
    height: 200px;
    padding-bottom: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgb(255, 255, 255);
    font-size: 18px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
    text-align: left;
    backface-visibility: hidden;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(235, 238, 245);
    border-image: initial;
    overflow: hidden;
}
</style>