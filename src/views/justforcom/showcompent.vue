<template>
  <div>
    <div id="topshow">
      <span>fanfan的UI库</span>
    </div>
    <div id="leftshow">
      <div id="borderdiv"></div>
      <ul class="leftul">
          <li><h2>组件</h2></li>
        <li><a href="#/showcompent/btn">Button 按钮</a></li>
          <li><a href="#/showcompent/input">Input 输入框</a></li>

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
  methods:{
    show:function(){
      console.log('?');
    }
  }
}
</script>

<style>
/**去除滚动条 */
::-webkit-scrollbar{
  display:none;
}
/**margin盒子 */
#borderdiv{
  width: 100%;
  height: 20px;
}

#topshow{
 width: 100%;
 height: 15vh;
 border-bottom: 1px solid gainsboro;
 display: flex;
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
.leftul li a{
 text-decoration: none;
 color: black;
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