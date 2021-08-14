<template>

      <button 
       class="fan-button"
      :type="nativetype" 
      @click="handleClick"
      :disabled="isdisabled||loading"
      :class="[
      type?'fan-button-'+type:'',
      btnsize?'fan-button-'+btnsize:'',
      {
        'is-circle': circle,
        'is-round':round,
        'is-disabled':disabled,
        'is-plain':plain,
      }]"
      >

      <i class="el-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading" ></i>
          <span v-if="$slots.default">
              <slot></slot>    
            </span> 
    </button>

</template>

<script>
export default {
    name:'FanBtn',
     props:{
        type:{
            type:String,
            default:"default"
        },
        nativetype:{
             type:String,
             default:"button"
        },       
        icon:{
            type:String,
            default:''
        },
        size:String,
        disabled:Boolean,
         circle:Boolean,
        loading: Boolean,
        round:Boolean,
        plain:Boolean
    },
   
    data() {
        return {
            
        }
    },
    computed:{
        //返回是否禁用
        isdisabled(){
            return this.disabled
        },
        //计算属性
        btnsize()
        {
            return this.size
        }
      
    },
    methods:{
        handleClick(e)
        {
            //与@的名字相对应
            this.$emit('click',e)
        },
        
    }
}
</script>

<style >

/**基础样式写最前面 */
.fan-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px; 
}
.fan-button:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.fan-button:active{
        color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
}
.fan-button.is-disabled{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}

    
.fan-button [class*=el-icon-]+span {
    margin-left: 5px;
}
/**dafault类型 */
.fan-button-default{
     background-color: #fff;;
}

/**primary 类型 */
.fan-button-primary{
    color:  #fff;
    background-color:#409eff;
    border-color: #409eff;
}
.fan-button-primary:hover{
    color:  #fff;
    background: #66b1ff;
    border-color: #66b1ff;
}
.fan-button-primary:active{
    color:  #fff;
    background-color: #3a8ee6;
    border-color: #3a8ee6;
    
}
/**每一种type对应一种禁止颜色 */
.fan-button-primary.is-disabled{
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.fan-button-primary.is-plain{
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
}


/**success类型 */
.fan-button-success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
}
.fan-button-success:hover{
    color:  #fff;
     background-color: #85ce61;
    border-color: #85ce61;
}
.fan-button-success:active{
    color:  #fff;
    background-color: #5daf34;
    border-color: #5daf34;
    
}
.fan-button-success.is-disabled{
        color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.fan-button-success.is-plain{
        color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
}

/**danger类型 */
.fan-button-danger{
    color:  #fff;
    background-color:#f56c6c;
    border: 1px solid #f56c6c;
}
.fan-button-danger:hover{
    color:  #fff;
    background: #f78989;
    border-color: #f78989;
}
.fan-button-danger:active{
    color:  #fff;
    background: #dd6161;
    border-color: #dd6161;
}
.fan-button-danger.is-disabled{
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
.fan-button-danger.is-plain{
          color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
}

/**info样式 */
.fan-button-info{
        color: #fff;
    background-color: #909399;
    border-color: #909399
}
.fan-button-info:hover{
       background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
}
.fan-button-info:active{
        background: #82848a;
    border-color: #82848a;
    color: #fff;
}
.fan-button-info.is-disabled{
  color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.fan-button-info.is-plain{
         color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
}


/**warning样式 */
.fan-button-warning{
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
}
.fan-button-warning:hover{
     background: #ebb563;
    border-color: #ebb563;
    color: #fff;
}
.fan-button-warning:active{
     background: #cf9236;
    border-color: #cf9236;
    color: #fff;
}
.fan-button-warning.is-disabled{
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.fan-button-warning.is-plain{
          color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
}

/**小圆角样式 */
.is-round{
    border-radius:20px ;
}
/**圆圈样式 */
.is-circle{
      border-radius: 50%;
    padding: 12px;
}
/**被禁用 */
.is-disabled:hover{  
    cursor:not-allowed;
}

/**size样式 */
.fan-button-meidum{
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.fan-button-small{
        padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
.fan-button-mini{
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}
/**文字按钮 */
.fan-button-text {
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
}
.fan-button-text:hover{
   color:  #66b1ff;
    background: #fff;
    border-color: #fff;
}
.fan-button-text:active{
    color: #3a8ee6;
    background-color: transparent;
}
.fan-button-text.is-disabled{
    color: #c0c4cc;
    background-image: none;
    background-color: #fff;
    border-color: #fff;
}
</style>