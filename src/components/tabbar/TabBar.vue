<template>
   <div id="tabbar">
   <slot></slot>
   </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>
@import "../../assets/img/font/iconfont.css";
#tabbar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;/*左右必须都是0 */
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px -1px 1px rgba(100 ,100, 100, 0.08);
}
</style>