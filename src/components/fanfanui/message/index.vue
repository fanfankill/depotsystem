<template>
  <transition name="dialog-fade">
    <div
      class="el-dialog__wrapper"
      v-show="visible"
      @click.self="handleWrapperClick"
    >
      <div
        ref="dialog"
        class="el-dialog"
        :class="[{ 'is-fullscreen': fullscreen, 'el-dialog--center': center }]"
        :style="style"
      >
       <div class="el-dialog__header">
            <slot name="title">
            <span class="el-dialog__title">{{ title }}</span>
          </slot>

          <button
            type="button"
            class="el-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
       </div>
        <div class="el-dialog__body"><slot></slot></div>
          <div class="el-dialog__footer"><slot name="footer"></slot></div>
      </div>
      
    </div>

  </transition>
</template>

<script >
export default {
  name: "FanMessage",

  props: {
    title: {
      type: String,
      default: "",
    },

    // modal    是否需要遮罩层
    modal: {
      type: Boolean,
      default: true,
    },

   

    // close-on-click-modal    是否可以通过点击 modal 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },

    // fullscreen    是否为全屏 Dialog
    fullscreen: Boolean,

    //是否居中
    center: {
      type: Boolean,
      default: false,
    },

    // show-close    是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true,
    },

    // width    Dialog 的宽度
    width: {
        type:String,
    },
    //双向绑定
    visible: {
      type: Boolean,
      default: true,
    },

    // top    Dialog CSS 中的 margin-top 值
    top: {
      type: String,
      default: "15vh",
    },
  },
    
  data() {
      return {
          closed: false
      }
  },
 
  watch:{
      visible(val){
          this.closed=val
          console.log(val);
  
      } 
  },

  computed: {
      style() {
        let style = {};
        if (!this.fullscreen) {
          style.marginTop = this.top;
          if (this.width) {
            style.width = this.width;
          }
        }
        return style;
      }
    },


  methods: {
    // 点击dialog自身
    handleWrapperClick() {
      //是否开启可以点击外界区域关闭
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },

    // 关闭dialog
    handleClose() {
      this.hide();
    },
    // 隐藏dialog
    hide() {
      
      this.$emit("update:visible", false);
    },
  },
  destroyed(){
      console.log('我被摧毁了');
  }
};
</script >

<style>
.el-dialog__wrapper {
  z-index: 2001;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  
 
 
}
.el-dialog {
     z-index: 3;
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 50%;
}

.el-dialog__header{
    padding: 20px 20px 10px;
}
.el-dialog__headerbtn {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
}

.el-dialog__title{
    line-height: 24px;
    font-size: 18px;
    color: #303133;
}
.el-dialog__body{
    background-color: #fff;
}
.el-dialog__footer {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
}
.v-modal {
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
    }
</style>