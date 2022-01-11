<template>
  <div>
    <div id="topshow">
      <span>fanfan的UI库</span>
  
        <h4 class="copyelemet">仿照element ui</h4>
     
    </div>
    <div id="leftshow">
    
      <ul class="leftul">
        <li><h2>组件</h2></li>
        <li v-for="(item,index) in myitem"  :key="item.ahref">
          <a @click="getindex(index)"  :href="item.ahref" class="base_a" :class="{active_a:index==current}" >{{item.title}}</a>
        </li>
      </ul>

    

    </div>
      <div id="rightshow">
       
       
        <router-view ></router-view>

      </div>
  </div>
</template>

<script>
import '../../assets/css/compontbase.css'
export default {
  name:'componentsfather',
  data() {
    return {
      current:0,
      myitem:[
        {
          ahref:'#/showcompent/btn',
          title:'Button 按钮'
        },
         {
          ahref:'#/showcompent/input',
          title:'Input 输入框'
        },
         {
          ahref:'#/showcompent/dialog',
          title:'Dialog 对话框'
        },
         {
          ahref:'#/showcompent/alert',
          title:'Alert 警告'
        },
         {
          ahref:'#/showcompent/badge',
          title:'Badge 标记'
        },
        {
          ahref:'#/showcompent/link',
          title:'Link 文字链接'
        },
         {
          ahref:'#/showcompent/image',
          title:'Image 图片'
        },
        {
          ahref:'#/showcompent/popover',
          title:'Popover 弹出框'
        },
         {
          ahref:'#/showcompent/breadcrumb',
          title:'Breadcrumb 面包屑'
        },{
          ahref:'#/showcompent/tag',
          title:'Tag 标签'
        },
      ]
    }
  },
  methods:{
    show:function(){
      console.log('?');
    },

   getindex(index){
     this.current=index

     //存储current
      sessionStorage.setItem('mycurrent',this.current)
   },
  },
   mounted() {

     if(sessionStorage.getItem('mycurrent')){
       this.current=sessionStorage.getItem('mycurrent')
     }
   },
   beforeDestroy(){
     sessionStorage.clear()
   }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
/**
 //去滚动条的
::-webkit-scrollbar{
  display:none;
}

*/
/**margin盒子 */
#borderdiv{
  width: 100%;
  height: 20px;
}

#topshow{
 width: 100%;
 height: 13.5vh;
 border-bottom: 1px solid gainsboro;
 display: flex;
 flex-direction: column;
padding-bottom: 10px;
 align-items: center;
  font-size: 20px;
  color: rgb(115, 164, 228);
}


#leftshow{
  height: 85vh;
  float: left;
  width: 30vw;
  overflow: auto;
  border-right:0.1vw solid gainsboro ;

}


/*滚动条样式*/
#leftshow::-webkit-scrollbar {
            width: 0px;   
            /*height: 4px;*/
        }



#rightshow::-webkit-scrollbar {
            width: 0px;   
            /*height: 4px;*/
        }



#rightshow{
  float: left;
  width:69.9vw;
 height: 85vh;
  overflow: auto;
}

.leftul{
  /**靠左 */
 padding: 0;
  margin: 0;
  overflow: hidden;
  width: 200px;
  margin: auto; 
}
.leftul li{
  list-style: none;
  height: 60px;
  line-height: 60px;
}
.base_a{
 text-decoration: none;
 color: black;
}
.base_a:hover{
   color: rgb(71, 179, 230);
   transition: all .2s;
}
.active_a{
  color: rgb(71, 179, 230);
}




/**媒体查询响应式适配 */
@media screen and (min-width:0px) and (max-width:720px){
  #leftshow{
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
    height: 85vh;
   width: 100vw;
  overflow: auto;
  border-bottom:1px solid gainsboro ;
  color: goldenrod;

}
#rightshow{
  margin-top:200px ;
  float: left;
  width:100%;
  margin: auto;
  overflow:initial;

  
}
}
</style>