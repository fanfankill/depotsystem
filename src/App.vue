<template>
  <div id="app">
  
  <transition name="slide-right">
     <router-view></router-view>
  </transition>

   
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>
 
<style>
@import "./assets/css/base.css";

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}


/**媒体查询响应式适配 */
@media screen and (min-width:0px) and (max-width:760px){
body{
  overflow-y: auto;
   overflow-x: hidden;
}
}

@media screen and (min-width:760px) {
body{
  overflow: hidden;
}
}


</style>
