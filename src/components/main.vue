<template>
  <div>
    <el-container style="height: 750px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #545c64">
        <el-menu
          :default-active="this.$route.path"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/mainshow">
            <i class="iconfont icon-ico_shuju"></i>
            <span slot="title">主界面</span>
          </el-menu-item>

          <el-menu-item index="/parking">
            <i class="iconfont icon-chewei"></i>
            <span slot="title">车位管理</span>
          </el-menu-item>

          <el-menu-item index="/position">
            <i class="iconfont icon-menu_cwcl"></i>
            <span slot="title">区域管理</span>
          </el-menu-item>

          <el-menu-item index="/carjoin">
            <i class="iconfont icon-huaban39"></i>
            <span slot="title">车辆登记</span>
          </el-menu-item>

          <el-menu-item index="/carpeople">
            <i class="iconfont icon-menu_cwcl"></i>
            <span slot="title">车主信息</span>
          </el-menu-item>

          <el-menu-item index="/carjoincontrol">
            <i class="iconfont icon-menu_cwcl"></i>
            <span slot="title">临时车管理</span>
          </el-menu-item>

          <el-menu-item index="/administrators">
            <i class="iconfont icon-guanliyuan"></i>
            <span slot="title">管理员界面</span>
          </el-menu-item>

            <el-menu-item index="/mychat">
            <i class="iconfont icon-guanliyuan"></i>
            <span slot="title">一起聊天</span>
          </el-menu-item>

             <el-menu-item index="/showcompent">
            <i class="el-icon-files "></i>
            <span slot="title">组件 </span>
          </el-menu-item>
          
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div id="childshow">

            <div class="timeshow_div">
              <i class="iconfont icon-time"></i>
              <span id="timeshow">{{mytime}}</span>
            </div>
            

            <div class="userimg">
              <span class="username">{{ name }}</span>

              <el-dropdown>
  <span class="el-dropdown-link">
   <img id="myimg"  :src="UserImg"/>
  </span>
  
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item @click.native="gomymes">个人信息</el-dropdown-item>
    <el-dropdown-item  @click.native="loginout">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>   
            </div>

            <div class="mydorpmenu">
              <i :class="{'el-icon-s-fold':isdown,'el-icon-s-unfold':!isdown}"  @click="ToStrenth"></i>
            </div>

          </div>
        </el-header>

        <div ref="menu" class="mymenu">
            <el-menu
          :default-active="this.$route.path"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="dosomecolse"
        >
          <el-menu-item index="/mainshow">
            <i class="iconfont icon-ico_shuju"></i>
            <span slot="title">主界面</span>
          </el-menu-item>

          <el-menu-item index="/parking">
            <i class="iconfont icon-chewei"></i>
            <span slot="title">车位管理</span>
          </el-menu-item>

          <el-menu-item index="/position">
            <i class="iconfont icon-menu_cwcl"></i>
            <span slot="title">区域管理</span>
          </el-menu-item>

          <el-menu-item index="/carjoin">
            <i class="iconfont icon-huaban39"></i>
            <span slot="title">车辆登记</span>
          </el-menu-item>

          <el-menu-item index="/carpeople">
            <i class="iconfont icon-menu_cwcl"></i>
            <span slot="title">车主信息</span>
          </el-menu-item>

          <el-menu-item index="/carjoincontrol">
            <i class="iconfont icon-menu_cwcl"></i>
            <span slot="title">临时车管理</span>
          </el-menu-item>

          <el-menu-item index="/administrators">
            <i class="iconfont icon-guanliyuan"></i>
            <span slot="title">管理员界面</span>
          </el-menu-item>

          <el-menu-item index="/mychat">
            <i class="iconfont icon-guanliyuan"></i>
            <span slot="title">一起聊天</span>
          </el-menu-item>

             <el-menu-item index="/showcompent">
            <i class="el-icon-files "></i>
            <span slot="title">组件 </span>
          </el-menu-item>
          
        </el-menu>
        </div>

        <el-main>
   
         <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>

      <transition :name="transitionName">
     <router-view  v-if="!$route.meta.keepAlive"></router-view>
  </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  watch:{
    UserImg:{
        handler:function (newval){
          this.userimg=newval
        },
         immediate: true
    },
    MyName:{
      handler:function(newval){
        this.name=newval
      },
      immediate:true
    },
    $route(to,from){
      if(to.meta.index>from.meta.index){
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
},
      //计算属性
  computed:{
    UserImg:{
      get(){
        return this.$store.state.myuserimg;
      },
      
    },
    MyName(){
      {
        console.log(this.$store.state.myname);
        return this.$store.state.myname
      }
      }
  },
  data() {
    return {
      name: "",
      nowtime: "",
      userimg: "",
      transitionName:'',
      mytime:'',
      isdown:false,
      };
  },
   beforeDestroy: function () {
    this.$socket.emit("disconnect");
  },
  mounted: function () {

    //vuex里面取头像
    if(this.$store.state.myuserimg)
    {
       this.userimg =this.$store.state.myuserimg;
    }else if(sessionStorage.getItem('myimg')){
        this.userimg=sessionStorage.getItem('myimg')
    }else{
      this.userimg='http://139.196.87.221:3000/imgs/moren.jpg'
    }
    //vuex取名字
    if(this.$store.state.myname)
    {
      this.name=this.$store.state.myname
    }else{
      this.name=sessionStorage.getItem('adminname')
    }

    this.updatetime()
   
  },
  //每秒刷新的计时器
  methods: {

    //定时器方法 用RAF API实现 更加精准
    updatetime(){
        var d = new Date();
        var hour = d.getHours();

        var min = d.getMinutes();

        var second = d.getSeconds();
        if(document.getElementById("timeshow"))
        {
           this.mytime=hour + " 时 " + min + " 分 " + second + " 秒 ";
        }
        window.requestAnimationFrame(this.updatetime)
    },
    //退出登录
    loginout()
    {
      console.log('1');
      //清空所有sessionStorage
      sessionStorage.clear()
      this.$router.push('/login')
    },
    //跳转我的资料
    gomymes()
    {
      this.$router.push('/administrators')
    },
    //汉堡按钮展开
    ToStrenth(){
      if(!this.isdown){
        this.$refs.menu.style.height='505px'
        this.isdown=true
      }
      else{
         
        this.$refs.menu.style.height=0
        this.isdown=false
      }  
    },
    dosomecolse(){
      if(!this.isdown){
        this.$refs.menu.style.height='505px'
        this.isdown=true
      }
      else{
         
        this.$refs.menu.style.height=0
        this.isdown=false
      }  
    }
  },
};
</script >

<style scope>
@media screen and (min-width:0px) and (max-width:720px){
  html{
    font-size: 14px;
  }
  .el-aside {
    display: none;

  }
  .el-container{
    width: 100vw; 
  }
   .mydorpmenu{
    display: block;
  }
}

@media screen and (min-width:720px){
  .el-aside {
    display: block;
  }
  html{
    font-size: 15px;
  }
  .mydorpmenu{
    display: none;
  }
 .mymenu{
   display: none;
 }
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}



.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
  color: rgb(159, 222, 238);
  overflow: hidden;
  z-index: 0;
}
.el-header{
  position: relative;
}
.mymenu{
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 0;
  z-index: 2500;
  left: .5px;
  top: 60px;
  transition: all .5s;
}

.el-main {
  background-color: rgb(245, 244, 244);
   z-index: 2;
   width: 100%;
}
.el-aside {
  color: #333;
  height: 100vh;
  z-index: 2000;
}
#childshow {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

@keyframes goodspan {
  0% {
    color: rgb(226, 192, 79);
  }
  25% {
    color: rgb(47, 212, 157);
  }
  50% {
    color: rgb(64, 153, 226);
    transform: translate(0, 0px);
  }
  75% {
    color: rgb(235, 112, 112);
  }
  100% {
    color: rgb(226, 192, 79);
  }
}

.timeshow_div {
  flex: 2;
  text-align: left;
  display: inline;
  font-size: 1rem;
  padding-left: 10px;
  color: rgb(255, 255, 254);
  float: left;
  justify-content: space-between;
}


.username {
  font-size: 1rem;
  margin-right: 10px;
  animation: goodspan 5s infinite;
  letter-spacing: 2px;  
}
.userimg {
  display: flex;
  height: 60px;
  flex: 2;
  justify-content: flex-end;
  overflow: hidden;
}
.userimg img {
  margin-top: 10px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
}
.mydorpmenu{
  font-size: 1.5rem;
  flex: 1;
}
</style>