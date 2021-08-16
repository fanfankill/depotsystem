<template>
<div class="fan-image">

     <slot v-if="loading" name="placeholder">
      <i class="el-icon-loading fan-loading-img"></i>
    </slot>

    <slot v-else-if="error" name='error'>
        <div class="fan-image__error">加载失败</div>
    </slot>
      <img
  v-else
  class="fan-image__inner"
  :src="src"
  :alt="alt"
  :style="{ 'object-fit': fit }">
</div>

</template>

<script>
export default {
    name:'FanImage',

    props:{

        src:String,
        alt:String,
        fit:String,
      
},

//监听src变化
    watch:{
        src:{
            handler(val){
                this.loadImage(val);
        },
            immediate:true
    }
},

    data() {
        return {
            error:false,
            loading:false
        }
},

    methods: {
         // 加载图片
      loadImage(val) {
        // reset status
        this.loading=true
       setTimeout(()=>{
            this.error = false;

        const img = new Image();
        img.onload = this.handleLoad.bind(this);
        img.onerror = this.handleError.bind(this);
        img.src = val;
       },500)
      },
      // load    图片加载成功触发    (e: Event)
      handleLoad(e) {
        this.loading=false
        this.$emit('load', e);
      },
       // error    图片加载失败触发    (e: Error)
      handleError(e) {
        this.loading=false
        this.error = true;
        this.$emit('error', e);
      },
    },


   
}
</script>

<style>
.fan-image{
    position: relative;
    display: inline-block;
    overflow: hidden;
}
.fan-image__inner , .fan-image__error{
    vertical-align: top;
    width: 100%;
    height: 100%;
        
}

.fan-image__error{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #c0c4cc;
    vertical-align: middle;
    background: #f5f7fa;
}
</style>