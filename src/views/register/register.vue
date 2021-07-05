<template>
  <div id="main">
    <div class="borde"></div>
    <div id="login_content">
      <div class="login_title">
        <h4>停车场管理系统注册</h4>
      </div>
      <div>
        <div class="login_input">
          <el-input
            size="small"
            icon="el-icon-user"
            v-model="username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入手机号"
          ></el-input>
        </div>
        <div class="login_input">
          <el-input
            size="small"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="password1"
            show-password
          ></el-input>
        </div>
        <div class="login_input">
          <el-input
            size="small"
            placeholder="请再次输入密码"
            prefix-icon="el-icon-lock"
            v-model="password2"
            show-password
          ></el-input>
        </div>

         <div class="login_input">
          <el-input
            size="small"
            placeholder="请输入邀请码"
            prefix-icon="el-icon-position"
            v-model="mycode"
          ></el-input>
        </div>

        <div class="login_btn">
          <el-button type="primary" :loading="loading" @click="register"
            >注册</el-button
          >
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
    username:'',
    password1:'',
    password2:'',
    mycode:'',
    loading:false

    };
  },
  

  methods: {
    //注册
    register()
    {
       if(this.username&&this.password1&&this.mycode)
       {
          if(this.password1.length>=8)
        {
            if(this.password1==this.password2)
            {
                this.$axios.post('/register',{
                  username:this.username,
                  password:this.password1,
                  mycode:this.mycode
                }).then(res=>{
                  console.log(res);
                  this.messageBox(res.data.message,res.data.flag==1?'success':'error')
                  if(res.data.flag==1)
                  {
                    this.$router.push('/login')
                  }
                })
            }else{
                this.messageBox('两次输入密码不一致','warning')
            }
        }else{
          this.messageBox('密码长度要大于8位','warning')
        }
       }else{
         this.messageBox('信息填写不全','warning')
       }
    }
  }

  
};
</script>

<style>
#main {
  width: 100%;
  height: 760px;
  background-color: aqua;
  background: url(../../assets/img/bag1.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.borde {
  width: 100%;
  height: 100px;
}

#login_content {
  min-width: 300px;
  width: 30%;
  height: 360px;
  background: rgba(223, 226, 216, 0.6);
  margin: auto;
  margin-top: 60px;
}
.login_title {
  font-size: 20px;
  color: rgb(145, 177, 206);
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.login_input {
  width: 200px;
  margin: 20px auto;
}
.login_input input {
  border-radius: 20px;
}
.login_rem {
  width: 100px;
  margin: auto;
}
.login_btn {
  padding-top: 20px;
  width: 200px;
  margin: auto;
}
.login_btn button {
  width: 200px;
  border-radius: 20px;
}
.sign_link {
  padding-top: 20px;
  margin: auto;
  width: 300px;
  display: flex;
}
.sign_link .el-link {
  flex: 1;
}
</style>