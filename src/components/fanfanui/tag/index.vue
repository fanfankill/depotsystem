<template>
 <transition name="el-zoom-in-center">
    <span
  class='el-tag '
  :class="[
      this.type?`el-tag--${type}`:'',
      `el-tag--${effect}`
  ]">
      <slot></slot>
      <i 
      @click="handleclose"
      v-show="closable"
      class='el-tag__close el-icon-close'> 

      </i>
  </span>
 </transition>
</template>
<script>
export default {
  name: "FanTag",
  props: {
    closable: {
      type: Boolean,
      default: false,
    },

    type: String,
    size: String,

    effect:{
      type:String,
      default:'light'
    }
  },

  methods:{
    handleclose(event){
      console.log(event);
        event.stopPropagation();
        this.$emit('close', event);
    }
  }
};
</script>

<style>
</style>