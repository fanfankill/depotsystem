<template>
  <div class="breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'FanBreadcrumb',
    props:{
        separator:{
            type:String,
            default:'/'
        }
    },

    //命名 直接返回这个对象
    provide(){
        return{
            breadcrumbVm:this
        }
    }


}
</script>

<style>
.breadcrumb .breadcrumb-item:last-child .breadcrumb-separator{
        display: none;
}
</style>