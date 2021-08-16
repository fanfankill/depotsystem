<template>
    <a
    :class="[
    'fan-link',
     type ? `fan-link-${type}` : '',
     disabled && 'is-disabled',
     underline && !disabled && 'is-underline'

    ]"
    :href="href"
    v-bind="$attrs"
    @click="handleClick"
    >
     <i :class="icon" v-if="icon"></i>
    <span><slot></slot></span>
      <template v-if="$slots.icon"><slot v-if="$slots.icon" name="icon"></slot></template>

    </a>
</template>

<script>
export default {
    name:'FanLink',

    props:{
        type:{
            type:String,
        },

    // underline    是否下划线    boolean    —    true
    underline: {
      type: Boolean,
      default: true
    },
    
    // disabled    是否禁用状态    boolean    —    false
    disabled: Boolean,
     href:String,
     icon:String

},

    methods:{
         handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
}
}
</script>

<style>
.fan-link [class*=el-icon-]+span {
    margin-left: 5px;
}

.fan-link {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    
}

.fan-link.is-underline:hover::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
    border-bottom: 1px solid black;
}
.fan-link:hover{
    color: #66b1ff;
}
.fan-link-primary.is-disabled{
    
}

.fan-link-primary{
    color: #409eff;
}
.fan-link-primary:hover{
    color: #66b1ff;
}
.fan-link-primary.is-underline:hover::after{
   border-color:#409eff;
}
.fan-link-primary.is-disabled{
    color: #a0cfff;
}

.fan-link-warning{
    color: #e6a23c;
}
.fan-link-warning:hover{
    color: #ebb563;
}
.fan-link-warning.is-underline:hover::after{
   border-color:#e6a23c;
}
.fan-link-warning.is-disabled{
    color: #f3d19e;
}


.fan-link-success{
    color: #67c23a;
}
.fan-link-success:hover{
    color: #85ce61;
}
.fan-link-success.is-underline:hover::after{
   border-color:#67c23a;
}
.fan-link-success.is-disabled{
   color: #b3e19d;
}

.fan-link-danger{
    color: #f56c6c;
}
.fan-link-danger:hover{
    color: #f78989;
}
.fan-link-danger.is-underline:hover::after{
   border-color:#f56c6c;
}
.fan-link-danger.is-disabled{
    color: #fab6b6;
}

.fan-link-info{
    color: #909399;
}
.fan-link-info:hover{
    color: #a6a9ad;
}
.fan-link-info.is-underline:hover::after{
   border-color:#909399;
}
.fan-link-info.is-disabled{
    color: #c8c9cc;
}



</style>