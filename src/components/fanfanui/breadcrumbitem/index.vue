<template>
<span class="breadcrumb-item">
     <span :class="['baselink',{'is-link':to.path}]"
     @click="handlepath">
         <slot></slot>
    </span>

<span class="breadcrumb-separator">{{separator}}</span>
</span>
</template>

<script>
export default {
    name:'FanBreadcrumbItem',
    props:{
        to:{
            type:Object,
            default:()=>({})
        }
    },
    data() {
        return {
            separator:''
        }
    },
    methods:{
        handlepath(){
            const {$router ,to}=this
            if(!to.path) return
            console.log(to.path);
            if($router) $router.push(to.path)

          

        }
    },
    //依赖注入
    inject:['breadcrumbVm'],

    mounted(){
        console.log(this.breadcrumbVm.separator);
       this.separator=this.breadcrumbVm.separator
    },


}
</script>

<style>
.breadcrumb-separator{
      margin: 0 9px;
    font-weight: 700;
    color: #c0c4cc;
}

/**基本样式 */
.baselink{
        color: #606266;
}

.is-link{
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #303133;
}
.is-link:hover{
    color: rgb(184, 184, 197);
}
  
</style>