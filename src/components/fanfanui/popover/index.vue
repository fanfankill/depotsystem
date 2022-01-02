<template>
  <div class="popver-container">
      <!-- 可能是点击 foucs 或者手动来触发showpopover -->
      <transition name="fade-in-linear">
          <div
          ref="popper"
          class="popver"
          :style="{
              marginLeft:popmarginleft+'px',
              top:poptop+'px'
          }"
          v-show="showpopover">
              <slot name="popver">{{content}}</slot>
          </div>
      </transition>
      <!-- <div class="popver-arrow">

      </div> -->
      
        <div ref="wrapper">
            <slot name="reference">
            
            </slot>
        </div>

  </div>
</template>

<script>
export default {
    name:'FanPopover',
    mounted(){
        //获取内容的节点
        this.mycontent=this.$refs.wrapper.children[0]
        console.log( this.mycontent);

        //点击事件
        if(this.trigger=='click'){
            //利用方法名的好处是可以用removeEventListener函数去取消这个监听
            this.mycontent.addEventListener('click',this.dotoggle)
            document.body.addEventListener('click',(e)=>{
                if(e.target!==this.mycontent){
                        this.showpopover=false
                }
            })
        }

        //mouseenter
        if(this.trigger=='hover'){
            //这个事件不冒泡
            this.mycontent.addEventListener('mouseenter',this.dotoggle)
            this.mycontent.addEventListener('mouseleave',this.dotoggle)
        }

        //mousedown事件
        if(this.trigger=='focus'){
           
            this.mycontent.addEventListener('mousedown',this.dotoggle)
            this.mycontent.addEventListener('mouseup',this.dotoggle)

             document.body.addEventListener('click',(e)=>{
                if(e.target!==this.mycontent){
                        this.showpopover=false
                }
            })
        }

         if(this.trigger=='manual'){

            this.mycontent.addEventListener('click',this.dotoggle)
        }
    },
    watch:{
        showpopover(newval){
            if(newval){
                this.update()
            }
        }
    },

    methods:{
        dotoggle(e){
            //阻止往下冒泡
            e.stopPropagation();
            this.showpopover=!this.showpopover
            console.log('?');
        },

        update(){
            //offset 包括padding 和 border
            let temp=this.$refs.popper.style.display
            this.$refs.popper.style.display='block'
            let tempwidth=this.$refs.wrapper.offsetWidth
             let temphight=this.$refs.wrapper.offsetHeight
               console.log(tempwidth);
            console.log(temphight);
             this.popmarginleft=-(tempwidth/2)
             this.poptop=-(temphight+15)
             this.$refs.popper.style.display=temp
        }
    },
    props:{
        trigger:{
            type:String,
            default:'click'
        },
        content:String,

    },

    data() {
        return {
            showpopover:false,
            mycontent:'',

            //偏移量
            popmarginleft:'',
            poptop:''
        }
    },
}
</script>

<style>
.popver-container{
    position: relative;
}
/**小三角 */
.popver-arrow{
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top-color:#6fa8dc;
    position: absolute;
    bottom: -12px;
}

.popver{
    z-index: 2001;
    position: absolute;
    background: #fff;
    min-width: 150px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    padding: 12px;
    color: #606266;
    line-height: 1.4;
    text-align: justify;
    font-size: 14px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    word-break: break-all;

}
.popver::after{
    content: '';
     width: 0;
    height: 0;
    border: 6px solid transparent;
    border-top-color:#fafafa;
    position: absolute;
    bottom: -12px;
    
}
</style>