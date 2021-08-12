<template>
  <div 
  class="fan_input"
   
  >
    <template>
        <!-- 前置元素 -->
      <div class="el-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>

           <input
       class="input_defalut"
       ref="input"
       :class="[
       {
         'is-disabled':disabled
       }
       ]"
       :disabled="inputdisabled"
        v-bind="$attrs"
        v-bind:value="value"
        :readonly="readonly"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleFBlur"
  
      >


    </template>
  
  </div>
</template>

<script>
export default {
  name:'FanInput',

     props: {
      // value / v-model    绑定值    string / number    —
      value: [String, Number],
      disabled:Boolean,
      focused:Boolean,
      readonly:Boolean
     },

      methods: {
         // 聚焦
      focus() {
        this.getInput().focus();
      },
      // 失焦
      blur() {
        this.getInput().blur();
      },

        handleInput(e)
        {
          this.$emit('input',e.target.value)
        },
         
         //聚焦事件
         handleFocus(e){
           this.$emit('focus', e);
         },
          //失焦事件
         handleFBlur(e){
           this.$emit('blur', e);
         },


        //获取ref
        getInput()
        {
          return this.$refs.input
        }
      },

     computed:{
         // 监听原生值
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      },
      //是否被禁用
      inputdisabled(){
        
        return this.disabled
      },
    

    
    }
}
</script>

<style>

.fan_input{
      position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}


.input_defalut{
  -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
.input_defalut:hover {
    border-color: #c0c4cc;
}
.input_defalut:focus{
      outline: none;
    border-color: #409eff;
}

.is-disabled{
      background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
}
</style>