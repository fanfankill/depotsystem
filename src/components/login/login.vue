<template>
    <div class="main">
      <div class="LoginFrame">
        <p class="LoginTitle">login</p>

        <div class="user">
          <label>
          <span></span>
          <span>用户名</span>
          <input type="text"  placeholder="please input   accout" id="username" v-model="loginname">
          </label>

        </div>

          <div class="password">
          <label>
            <span></span>
          <span>密码</span>
          <input type="password" value="456" placeholder="please input  password" id="password" v-model="loginpassword">
          </label>
        </div>

      
          <div class="btn_div">
            <button class="enterbtn" @click="login" >进入</button>
          </div>
      

      </div>

    </div>
  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      isactive:this.$store.state.isShow,
      username:this.$store.state.username,
      loginname:'',
      loginpassword:''
    }
  },
  methods: {

    /*登录录入用户信息 */
    login()
    {

       axios.post('/travel/login',{
          userInfo:'root',
          password:'123456',
        }).then(res=>{
          console.log('这是res打印')
          console.log(res);

          /*对token信息的录用 */
         
          /* 这个好像没存进去*/
         

          /**直接存进去 发现有这个 */
          localStorage.setItem("Authorization",res.data.data.token);
          console.log(localStorage.getItem('Authorization'))          

          /*vuex的信息录用*/
          this.$store.state.username=res.data.data.currentUser.username,
           this.$store.state.id=res.data.data.currentUser.id,
          this.$store.state.emil=res.data.data.currentUser.email,
          this.$store.state.createTime=res.data.data.currentUser.createTime,
          this.$store.state.role=res.data.data.currentUser.role,
          
          this.$router.push('/Main');
          
        }).catch(err=>{
          console.log(err)
        })
  
    },
    test()
    {
      alert(this.isactive)
    },
    getusername()
    {
      alert(document.getElementById('username').value);
    },
    getpassword()
    {
      alert(document.getElementById('password').value);
    },
    changeusername()
    {
      document.getElementById('username').value=this.username
    }
  },
  mounted:function() {

      
      this.changeusername()
  }
    
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html ,body{
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;
  height: 1000px;
  background: url("./login_img/login.jpg") 100% 100% no-repeat;
}
.LoginFrame{
  width: 700px;
  height: 400px;
  background: rgba(0, 0, 0, .3);
  position: fixed;
  margin-bottom: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius:  10px;
  box-sizing: border-box;
  padding: 50px 0;
  box-shadow:  0 0 5px 5px rgba(0, 0, 0, .4)
}
.user,.password{
  width: 350px;
  height: 50px;
margin: auto;
  color: white;
 margin-bottom: 50px;
}
.LoginFrame >p{
  text-align: center;
  color: white;
  font-size: 25px;
}

.LoginFrame>div>span{
  display: inline-block;
  cursor: pointer;
}
.LoginFrame >div input{
  width: 100%;
  height: 30px;
  background: transparent;
  border: none;
  border-bottom:1px solid white ;
  outline: none;
  color: white;
}
.enterbtn{
 display: block;
  margin: auto;
  width: 180px;
  border: none;
  height: 50px;
  border-radius: 50px;
  background-image: linear-gradient(to right, #c979d4,#fa719d);
  text-align: center;
  box-sizing: border-box;
  font-size: 20px;
  color: gainsboro;
  cursor: pointer;
  outline: none;
}
.btn_div{
  margin-top: 50px;
}
.enterbtn :hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8) inset;
}
input ::-webkit-input-placeholder{
  color: #BDCADA;
}

</style>