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

            <el-menu-item index="/allchat">
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
              <span id="timeshow"></span>
            </div>
            

            <div class="userimg">
              <span class="username">{{ name }}</span>



              <el-dropdown>
  <span class="el-dropdown-link">
   <img id="myimg"  :src="userimg"/>
  </span>
  
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item @click.native="gomymes">个人信息</el-dropdown-item>
    <el-dropdown-item  @click.native="loginout">退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
              
            </div>
          </div>
        </el-header>

        <el-main>
   
         <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
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
    }
    },
      //计算属性
  computed:{
    UserImg:{
      get(){
        return this.$store.state.myuserimg;
      },
      
    },
    MyName:{
      get(){
        console.log(this.$store.state.myname);
        return this.$store.state.myname
      },
      }
  },
  data() {
    return {
      name: "",
      nowtime: "",
      userimg: "",
    };
  },
  mounted: function () {

    //vuex里面取头像
    if(this.$store.state.myuserimg)
    {
       this.userimg =this.$store.state.myuserimg;
    }else if(sessionStorage.getItem('myimg')){
        this.userimg=sessionStorage.getItem('myimg')
    }else{
      this.userimg='http://139.196.87.221:3000/img/moren.jpg'
    }
    //vuex取名字
    if(this.$store.state.myname)
    {
      this.name=this.$store.state.myname
    }else{
      this.name=sessionStorage.getItem('adminname')
    }

    this.geteverytime();
   
  },
  //每秒刷新的计时器
  methods: {
    geteverytime() {
      setInterval(function () {
        var d = new Date();
        var hour = d.getHours();

        var min = d.getMinutes();

        var second = d.getSeconds();
        if(document.getElementById("timeshow"))
        {
           document.getElementById("timeshow").innerHTML =hour + " 时 " + min + " 分 " + second + " 秒 ";
        }

       
      }, 1000);
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
    }
  },
};
</script >

<style scope>
@media screen and (min-width:0px) and (max-width:600px){
  .el-aside {
    display: none;
  }
}
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
  color: rgb(159, 222, 238);
  overflow: hidden;
}

.el-main {
  background-color: rgb(245, 244, 244);
}
.el-aside {
  color: #333;
  height: 100vh;
}
#childshow {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.timeshow_div {
  width: 180px;
  text-align: center;
  display: inline;
  font-size: 18px;
  padding-left: 10px;
  color: rgb(255, 255, 254);
  float: left;
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
.username {
  font-size: 15px;
  position: absolute;
  top: 0px;
  right: 30px;
  margin-right: 20px;
  animation: goodspan 5s infinite;
  letter-spacing: 2px;
}
.userimg {
  position: relative;
  position: absolute;
  right: 50px;
  top: 0px;
  height: 60px;
  width: 180px;
  overflow: hidden;
}
.userimg img {
  margin-top: 10px;
  border-radius: 100%;
  width: 40px;
  height: 40px;
}
</style>