<template>
  <div id="main">
    <div class="borde"></div>
    <div id="login_content">
      <div class="login_title">
        <h4>停车场管理系统登录</h4>
      </div>
      <div>
        <div class="login_input">
          <el-input
            size="small"
            icon="el-icon-user"
            v-model="username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
          ></el-input>
        </div>
        <div class="login_input">
          <el-input
            size="small"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="password"
            show-password
          ></el-input>
        </div>

        <div class="login_rem">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </div>
        <div class="login_btn">
          <el-button id="loginbtn" type="primary" :loading="loading" @click="getmes"
            >登录</el-button
          >
        </div>
        <div class="sign_link">
          <el-link type="primary" @click="sign_up" :underline="false"
            >注册</el-link
          >
          <el-link type="info" @click="forget" :underline="false"
            >忘记密码</el-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      checked: false,
      loading: false,
    };
  },
  created() {
    if (this.getCookie("username") && this.getCookie("password")) {
      this.username = this.getCookie("username");
      this.password = this.getCookie("password");
      this.checked = true;
    }
  },
  methods: {
    getmes() {
      axios.post("/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          sessionStorage.setItem('userimg',res.data.result[0].userimg)

          if (res.data.code == 0) {
            this.$message({
              message: res.data.message,
              type: "warning",
            });
          } else {
            //cooike储存
          this.rebmes();
          
            this.$message({
              message: res.data.message,
              type: "success",
            });
            //sessionStorage存储
            sessionStorage.setItem('adminname',res.data.result[0].nickname);
            //存登录人员的id
              sessionStorage.setItem('adminid',res.data.result[0].AdminId);
             this.$router.push("/mainshow");
          }
        })
        .catch((err) => {
          this.$message({
            message: "连接失败",
            type: "error",
          });
          console.log(err);
        });
    },
    sign_up() {
      this.$router.push("/register");
    },
    forget() {
      this.$router.push("/forgetpassword");
    },
    rebmes() {
      this.loading = true;
      if (this.checked) {
        this.setCookie("username", this.username, 7); //保存7天
        this.setCookie("password", this.password, 7);
      } else {
        this.delCookie("username");
        this.delCookie("password");
      }
    },

    /**存放cookie */
    setCookie(name, value, day) {
      let data = new Date();
      data.setDate(data.getDate() + day);
      document.cookie = name + "=" + value + ";expires=" + data;
    },
    //获取cookie
    getCookie(name) {
      var reg = RegExp(name + "=([^;]+)");
      var arr = document.cookie.match(reg);
      if (arr) {
        return arr[1];
      } else {
        return "";
      }
    },
    /**删除cookie*/
    delCookie(name) {
      this.setCookie(name, "", -1);
    },
  },
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