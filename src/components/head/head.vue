<template>
  <div class="header">
      <ul class="head_ul">
          <li class="el-icon-s-custom"> 我的主页</li>
          <li class="el-icon-chat-dot-square">  消息</li>
          <li class="el-icon-edit"> 帮助</li>
          <li @click="loginout" class="el-icon-switch-button"> 退出</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    loginout()
    {
      axios.get('/travel/logout').then(res=>{
        console.log(res)
        if(res.code==0)
        {
          localStorage.clear('Authorization')
        this.$router.push('/login');
        }
      })
    }
  },
}
</script>

<style>
.header{
  position: relative;
}
.head_ul{
  position: absolute;
  right: 0px;
  top: 10px;
}
.head_ul li{
  display: inline-block;
  margin-right: 50px;
  font-size:18px ;
  color: antiquewhite;
  cursor: pointer;
  outline: none;
}
.head_ul li :active{
  color: orange;
}
</style>