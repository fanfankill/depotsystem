<template>
  <div>
    <div id="topshow">
      <span>fanfan的UI库</span>
  
        <h4 class="copyelemet">仿照element ui</h4>
     
    </div>
    <div id="leftshow">
      <div id="borderdiv"></div>
      <ul class="leftul">
        <li><h2>组件</h2></li>
        <li v-for="(item,index) in myitem"  :key="item.ahref"><a @click="getindex(index)"  :href="item.ahref" class="base_a" :class="{active_a:index==current}" >{{item.title}}</a></li>

      </ul>

    

    </div>
      <div id="rightshow">
        <div id="borderdiv"></div>
       
        <router-view ></router-view>

      </div>
  </div>
</template>

<script>
export default {
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
          ahref:'#/showcompent/message',
          title:'Mesaage 消息'
        },
         {
          ahref:'#/showcompent/alert',
          title:'Alert 警告'
        },
         {
          ahref:'#/showcompent/badge',
          title:'Badge 标记'
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

   }
  }
}
</script>

<style>
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
 height: 14vh;
 border-bottom: 1px solid gainsboro;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
#topshow{
  font-size: 20px;
  color: rgb(115, 164, 228);
}

#leftshow{
  height: 85vh;
  float: left;
  width: 30%;
  overflow: auto;
  border-right:1px solid gainsboro ;

}
#rightshow{
  float: left;
  width:60%;
 height: 85vh;
  margin-left: 20px;
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
  height: 40px;
  line-height: 40px;
}
.base_a{
 text-decoration: none;
 color: black;
}
.active_a{
  color: rgb(71, 179, 230);
}




/**媒体查询响应式适配 */
@media screen and (min-width:0px) and (max-width:760px){
  #leftshow{
  height: 85vh;
  float: left;
  width: 100vw;
  overflow: auto;
  border-right:1px solid gainsboro ;
  border-bottom:1px solid gainsboro ;
  color: goldenrod;

}
#rightshow{
  float: left;
  width:90%;
  margin: auto;
  height: 85vh;
  overflow:initial;
  margin-left: 20px;
  
}
}
</style>