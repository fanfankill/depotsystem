<template>

     <transition name="el-alert-fade">
          <div 
       class="fan-alert"
       :class="[
           typeClass , center ? 'is-center' : '','is-'+effect
       ]"
       v-show="visible"
       >

      <i class="el-alert__icon" :class="[ iconClass ]" v-if="showIcon"></i>
      <i v-show="showIcon" class="havepadding"></i>
  
        <span >
          <slot >{{title}}</slot>
        </span>


         <i class="fan-alert-close" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
    
       

      </div>
     </transition>


</template>
<script>
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error'
  };
export default {
    name:'FanAlert',
    
    props:{

    type: {
        type: String,
        default: 'info'
      },
    title: {
        type: String,
        default: ''
      },
      center:{
        type: Boolean,
        default: false
      },
      effect:{
          type: String,
        default: 'light'
      },

       closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon:{
        type:Boolean,
        defalut:false
      }

      
    },

    data() {
        return {
            visible: true,
           
            
        }
    },
    methods:{
        close() {
        this.visible = false;
        this.$emit('close');
      },

    },

      computed:{
            typeClass() {
            
        return `fan-alert-`+this.type;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
      },
     
    },
    
}
</script>

<style>

.fan-alert{
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: flex;
    align-items: center;
    transition: opacity .2s;
}

/**light */
.fan-alert-success.is-light{
  

    color: #67c23a;
     background-color: #f0f9eb;
}
.fan-alert-info.is-light {
    background-color: #f4f4f5;
    color: #909399;
}
.fan-alert-warning.is-light {
    background-color: #fdf6ec;
    color: #e6a23c;
}
.fan-alert-error.is-light {
    background-color: #fef0f0;
    color: #f56c6c;
}

/**dark */
.fan-alert-success.is-dark {
    background-color: #67c23a;
    color: #fff;
}
.fan-alert-info.is-dark {
    background-color: #909399;
    color: #fff;
}
.fan-alert-warning.is-dark {
    background-color: #e6a23c;
    color: #fff;
}
.fan-alert-error.is-dark {
    background-color: #f56c6c;
    color: #fff;
}


/**关闭样式 */
.fan-alert-close{
    font-size: 12px;
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
}

.is-center{
    display: inline-block;
    text-align: center;
}

/**图标样式 */
 .el-alert__icon {
    font-size: 16px;
    width: 16px;
}
.havepadding{
  padding: 0 8px;
}
</style>