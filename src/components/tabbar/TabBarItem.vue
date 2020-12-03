<template>
         <div class="tab-bar-item" @click="itemclick">
           <div :style="activestlye"><slot  name="item-icon"></slot></div>
          <div :style="activestlye"> <slot name="item-text"></slot></div>
      </div>  
    
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
      path:String,
      activecolor:{
        type:String,
        default:'orange '/*当想用到这个颜色的时候，要把App组件的activecolor全删了，不能传空字符串*/
      }
    },
     data() {
    return {
      
    } 
  },
  computed: {
    isactive(){
     return this.$route.path.indexOf(this.path)!==-1;
    },
    activestlye(){
      return this.isactive?{color:this.activecolor}:{}
    }
  },
  methods: {
      itemclick()
    {
      if(this.$route.path!=this.path)/*防止多次点击出错 */
      {
        this.$router.replace(this.path)/*这个router是main.js里面引入命名的*/
      }
    }
  },
}
</script>

<style>

.tab-bar-item{
  flex: 1;
   text-align: center;/*居中均分*/
  height: 49px;
  font-size: 14px;
}

.iconfont{
  font-size: 20px;
  vertical-align: middle;/*去掉图片原本的3px */
  margin-bottom: 2px;
  
}

</style>