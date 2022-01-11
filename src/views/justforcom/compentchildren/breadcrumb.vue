<template>
  <div>
     <div class="zuiwai">
       <h3 class="mytitle">基础用法</h3>
        <div class="center">
          <fan-breadcrumb separator='/'>
        <fan-breadcrumb-item
         v-for="(item,index) in pathlists" :key="index"
        :to="{path:item.path}">
              {{item.name}}
        </fan-breadcrumb-item>
      </fan-breadcrumb>
        </div>



          <h3 class="mytitle">图标分隔符</h3>
        <div class="center">
          <fan-breadcrumb separator='>'>
        <fan-breadcrumb-item
         v-for="(item,index) in pathlists" :key="index"
        :to="{path:item.path}">
              {{item.name}}
        </fan-breadcrumb-item>
      </fan-breadcrumb>
        </div>
     </div>

  
  </div>
</template>

<script>
export default {
  data() {
    return {
       pathlists:[
          {
            name:'输入框',
            path:'/showcompent/input'
          },{
             name:'按钮',
             path:'/showcompent/btn'
          },{
             name:'链接',
             path:'/showcompent/link'
          },{
             name:'未被选中',
            
          }
       ]
    }
  },
}
</script>

<style>

</style>