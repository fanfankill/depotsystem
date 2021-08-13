<template>
  <div class="fan-badge">
      <slot></slot>
       
      <transition name="el-zoom-in-center">
          <sup 
      v-show="(isDot||content || content === 0)&&!hidden"
      v-text="content"
      class="fan-badge__content"
      :class="[
      type?'fan-badge-content-'+type:'',
      {
          'is-dot': isDot
      }
      ]">
          
      </sup>
      </transition>
  
  </div>
  
</template>

<script>
export default {
    name:'FanBadge',
    props:{
        type:{
            type:String,
            default:''
        },
        value:{

        },
        max:Number,
        isDot:Boolean,
        hidden:Boolean
    },

    computed:{
        //当不是dot且传入值 和 max是数字时候 text才有内容 
         content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
    }

}
</script>

<style>
.fan-badge{
    position: relative;
    vertical-align: middle;
    display: inline-block;
}

/**标志基本样式 */
.fan-badge__content  {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translateY(-50%) translateX(100%);
}
.fan-badge__content{
    background-color: #f56c6c;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
}

/**type样式 */
.fan-badge-content-primary{
    background-color: #409eff;
}

.fan-badge-content-warning {
    background-color: #e6a23c;
}

.fan-badge-content-info {
    background-color: #909399;
}
.is-dot{
    height: 8px;
    width: 8px;
    padding: 0;
    
    border-radius: 50%;
}
</style>